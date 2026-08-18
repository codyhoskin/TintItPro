"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import InfoTooltip from "./InfoTool";
import {
  FaArrowsAltH,
  FaArrowsAltV,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaClipboardCheck,
  FaFilm,
  FaLayerGroup,
  FaPlus,
  FaRegWindowMaximize,
  FaRulerCombined,
  FaThLarge,
  FaTools,
  FaTrashAlt,
} from "react-icons/fa";
import styles from "../styles/EstimatorPro.module.css";

const filmTypes = [
  { type: "None", pricePerSqFt: 0 },
  { type: "Interior", pricePerSqFt: 12 },
  { type: "Interior Premium", pricePerSqFt: 14 },
  { type: "Exterior", pricePerSqFt: 20 },
  { type: "Exterior Premium", pricePerSqFt: 23 },
  { type: "Decorative", pricePerSqFt: 12 },
  { type: "TuffSkin®", pricePerSqFt: 45 },
];

const equipmentOptions = [
  { type: "None", price: 0, detail: "Standard ground-level access" },
  { type: "Ladder", price: 150, detail: "For elevated residential access" },
  { type: "Scaffold", price: 450, detail: "For larger or extended-height areas" },
  { type: "Lift", price: 1000, detail: "For high or restricted-access projects" },
];

const steps = [
  { label: "Project", icon: FaLayerGroup },
  { label: "Review", icon: FaClipboardCheck },
];

type SurfaceType = "Window" | "Countertop";

interface SurfaceData {
  surface: SurfaceType;
  quantity: number;
  length: number | "";
  width: number | "";
  film: { type: string; pricePerSqFt: number };
}

const createSurface = (surface: SurfaceType): SurfaceData => ({
  surface,
  quantity: 1,
  length: "",
  width: "",
  film: filmTypes[0],
});

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    minimumFractionDigits: 2,
  }).format(value);

const EstimatorPro: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [furthestStep, setFurthestStep] = useState(0);
  const [surfaceData, setSurfaceData] = useState<SurfaceData[]>([
    createSurface("Window"),
  ]);
  const [selectedEquipment, setSelectedEquipment] = useState(
    equipmentOptions[0]
  );
  const [validationMessage, setValidationMessage] = useState("");

  const totalSurfaces = surfaceData.reduce((total, item) => total + item.quantity, 0);

  const addSurfaceGroup = (surface: SurfaceType) => {
    if (totalSurfaces >= 20) {
      setValidationMessage("Please limit this preliminary estimate to 20 surfaces.");
      return;
    }

    setValidationMessage("");
    setSurfaceData((current) => [...current, createSurface(surface)]);
  };

  const removeSurfaceGroup = (index: number) => {
    setSurfaceData((current) => current.filter((_, itemIndex) => itemIndex !== index));
    setValidationMessage("");
  };

  const updateSurfaceQuantity = (index: number, value: number) => {
    const currentQuantity = surfaceData[index]?.quantity ?? 0;
    const maxForGroup = Math.max(1, 20 - (totalSurfaces - currentQuantity));
    const nextQuantity = Math.max(1, Math.min(maxForGroup, Math.floor(value || 1)));

    if (value > maxForGroup) {
      setValidationMessage("Please limit this preliminary estimate to 20 surfaces.");
    } else {
      setValidationMessage("");
    }

    setSurfaceData((current) =>
      current.map((item, itemIndex) =>
        itemIndex === index ? { ...item, quantity: nextQuantity } : item
      )
    );
  };

  const updateSurface = (
    index: number,
    field: "length" | "width" | "film",
    value: string
  ) => {
    setSurfaceData((current) =>
      current.map((item, itemIndex) => {
        if (itemIndex !== index) return item;

        if (field === "film") {
          return {
            ...item,
            film: filmTypes.find((film) => film.type === value) ?? filmTypes[0],
          };
        }

        const numericValue = value === "" ? "" : Number(value);
        return { ...item, [field]: numericValue };
      })
    );
    setValidationMessage("");
  };

  const estimatedCost = useMemo(() => {
    const surfaceCost = surfaceData.reduce((total, item) => {
      const length = item.length === "" ? 0 : item.length;
      const width = item.width === "" ? 0 : item.width;
      const areaSqFt = (length * width) / 144;
      return total + areaSqFt * item.film.pricePerSqFt * item.quantity;
    }, 0);

    return Math.max(349, surfaceCost + selectedEquipment.price);
  }, [surfaceData, selectedEquipment]);

  const validateCurrentStep = () => {
    if (activeStep === 0 && (surfaceData.length === 0 || totalSurfaces === 0)) {
      setValidationMessage("Add at least one window or countertop to continue.");
      return false;
    }

    const missingMeasurement = surfaceData.findIndex(
      (item) =>
        item.length === "" ||
        item.width === "" ||
        item.length <= 0 ||
        item.width <= 0
    );

    if (activeStep === 0 && missingMeasurement !== -1) {
      setValidationMessage("Set width and height for every size card.");
      return false;
    }

    const missingFilm = surfaceData.findIndex((item) => item.film.type === "None");

    if (activeStep === 0 && missingFilm !== -1) {
      setValidationMessage("Choose a film for every size card.");
      return false;
    }

    setValidationMessage("");
    return true;
  };

  const goToNextStep = () => {
    if (!validateCurrentStep()) return;
    const nextStep = Math.min(activeStep + 1, steps.length - 1);
    setActiveStep(nextStep);
    setFurthestStep((current) => Math.max(current, nextStep));
  };

  const goToPreviousStep = () => {
    setValidationMessage("");
    setActiveStep((current) => Math.max(0, current - 1));
  };

  const goToCompletedStep = (index: number) => {
    if (index > furthestStep) return;
    setValidationMessage("");
    setActiveStep(index);
  };

  return (
    <section className={styles.estimatorSection} aria-labelledby="estimator-title">
      <div className={styles.estimatorShell}>
        <header className={styles.estimatorHeader}>
          <div>
            <span className={styles.eyebrow}>Instant estimate</span>
            <h2 id="estimator-title">Estimator Pro</h2>
            <p>Two quick sections. A clear starting price.</p>
          </div>
          <div className={styles.headerMeta}>
            <InfoTooltip />
          </div>
        </header>

        <nav className={styles.progressNav} aria-label="Estimate progress">
          {steps.map((step, index) => {
            const isActive = activeStep === index;
            const isComplete = index < activeStep || index < furthestStep;
            const isAccessible = index <= furthestStep;
            const StepIcon = step.icon;

            return (
              <button
                type="button"
                key={step.label}
                onClick={() => goToCompletedStep(index)}
                className={`${styles.progressStep} ${
                  isActive ? styles.progressStepActive : ""
                } ${isComplete ? styles.progressStepComplete : ""}`}
                disabled={!isAccessible}
                aria-current={isActive ? "step" : undefined}
              >
                <span className={styles.stepNumber}>
                  {isComplete && !isActive ? <FaCheck /> : <StepIcon />}
                </span>
                <strong>{step.label}</strong>
              </button>
            );
          })}
        </nav>

        <div className={styles.estimatorBody}>
          <div className={styles.stagePanel}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className={styles.stageContent}
              >
                {activeStep === 0 && (
                  <div>
                    <div className={styles.stageHeading}>
                      <span>Section 1 of 2</span>
                      <h3>Build your project</h3>
                      <p>Group matching surfaces, then choose their size and film.</p>
                    </div>

                    <div className={styles.surfaceSetupGrid}>
                      {surfaceData.map((item, index) => (
                        <SurfaceSetupCard
                          key={`${item.surface}-${index}`}
                          item={item}
                          index={index}
                          onQuantityChange={(value) =>
                            updateSurfaceQuantity(index, value)
                          }
                          onMeasurementChange={(field, value) =>
                            updateSurface(index, field, value)
                          }
                          onFilmChange={(value) => updateSurface(index, "film", value)}
                          onRemove={() => removeSurfaceGroup(index)}
                        />
                      ))}
                    </div>

                    <div className={styles.addSurfaceRow}>
                      <button type="button" onClick={() => addSurfaceGroup("Window")}>
                        <FaPlus /> Windows
                      </button>
                      <button type="button" onClick={() => addSurfaceGroup("Countertop")}>
                        <FaPlus /> Counters
                      </button>
                      <span>
                        <strong>{totalSurfaces}</strong> total
                      </span>
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div>
                    <div className={styles.stageHeading}>
                      <span>Section 2 of 2</span>
                      <h3>Final check</h3>
                      <p>Are your windows within reach?</p>
                    </div>

                    <fieldset className={styles.equipmentFieldset}>
                      <legend><FaTools /> Access</legend>
                      <div className={styles.equipmentGrid}>
                        {equipmentOptions.map((equipment) => {
                          const isSelected = selectedEquipment.type === equipment.type;
                          return (
                            <label
                              className={`${styles.equipmentCard} ${
                                isSelected ? styles.equipmentCardSelected : ""
                              }`}
                              key={equipment.type}
                            >
                              <input
                                type="radio"
                                name="equipment"
                                value={equipment.type}
                                checked={isSelected}
                                onChange={() => setSelectedEquipment(equipment)}
                              />
                              <span className={styles.equipmentCheck}>
                                {isSelected && <FaCheck />}
                              </span>
                              <strong>{equipment.type}</strong>
                              <b>{equipment.price ? `+${formatCurrency(equipment.price)}` : "Included"}</b>
                            </label>
                          );
                        })}
                      </div>
                    </fieldset>

                    <div className={styles.reviewBlock}>
                      <div><span>Surfaces</span><strong>{totalSurfaces}</strong></div>
                      <div>
                        <span>Film selected</span>
                        <strong>
                          {surfaceData.reduce(
                            (total, item) =>
                              total + (item.film.type !== "None" ? item.quantity : 0),
                            0
                          )}
                        </strong>
                      </div>
                      <div><span>Access</span><strong>{selectedEquipment.type}</strong></div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {validationMessage && (
              <p className={styles.validationMessage} role="alert">
                {validationMessage}
              </p>
            )}

            <div className={styles.stageActions}>
              {activeStep > 0 ? (
                <button type="button" className={styles.secondaryButton} onClick={goToPreviousStep}>
                  <FaChevronLeft /> Back
                </button>
              ) : (
                <span />
              )}

              {activeStep < steps.length - 1 ? (
                <button type="button" className={styles.primaryButton} onClick={goToNextStep}>
                  Continue <FaChevronRight />
                </button>
              ) : (
                <a
                  href="https://tintitpro.setmore.com/"
                  className={styles.primaryButton}
                  aria-label="Request a consultation for this estimate"
                >
                  Book consult <FaClipboardCheck />
                </a>
              )}
            </div>
          </div>

          <aside className={styles.estimatePanel} aria-live="polite">
            <div className={styles.estimatePanelTop}>
              <span>Estimate</span>
              <FaRulerCombined />
            </div>
            <strong className={styles.estimateTotal}>{formatCurrency(estimatedCost)}</strong>
            <p>CAD · preliminary</p>

            <dl className={styles.projectFacts}>
              <div>
                <dt>Surfaces</dt>
                <dd>{totalSurfaces}</dd>
              </div>
              <div>
                <dt>Films</dt>
                <dd>
                  {surfaceData.reduce(
                    (total, item) =>
                      total + (item.film.type !== "None" ? item.quantity : 0),
                    0
                  )}
                </dd>
              </div>
              <div>
                <dt>Access</dt>
                <dd>{selectedEquipment.type}</dd>
              </div>
            </dl>

            <div className={styles.estimateNote}>
              <FaTools />
              <p>Final pricing is confirmed after consultation.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

interface SurfaceSetupCardProps {
  item: SurfaceData;
  index: number;
  onQuantityChange: (value: number) => void;
  onMeasurementChange: (field: "length" | "width", value: string) => void;
  onFilmChange: (value: string) => void;
  onRemove: () => void;
}

const SurfaceSetupCard = ({
  item,
  index,
  onQuantityChange,
  onMeasurementChange,
  onFilmChange,
  onRemove,
}: SurfaceSetupCardProps) => (
  <article className={styles.surfaceSetupCard}>
    <header className={styles.surfaceSetupHeader}>
      <span className={styles.quantityIcon}>
        {item.surface === "Window" ? <FaRegWindowMaximize /> : <FaThLarge />}
      </span>
      <div>
        <strong>{item.surface === "Window" ? "Windows" : "Counters"}</strong>
        <small>
          {item.quantity} {item.surface.toLowerCase()}
          {item.quantity === 1 ? "" : "s"}
        </small>
      </div>
      <button type="button" onClick={onRemove} aria-label={`Remove ${item.surface} card`}>
        <FaTrashAlt />
      </button>
    </header>

    <div className={styles.batchQuantity}>
      <span>Quantity</span>
      <div className={styles.counterControl}>
        <button
          type="button"
          onClick={() => onQuantityChange(item.quantity - 1)}
          aria-label={`Reduce ${item.surface} quantity`}
        >
          −
        </button>
        <input
          type="number"
          min="1"
          max="20"
          value={item.quantity}
          onChange={(event) => onQuantityChange(Number(event.target.value))}
          aria-label={`${item.surface} quantity for this size`}
        />
        <button
          type="button"
          onClick={() => onQuantityChange(item.quantity + 1)}
          aria-label={`Increase ${item.surface} quantity`}
        >
          +
        </button>
      </div>
    </div>

    <div className={styles.measurementGrid}>
      <MeasurementInput
        id={`length-${index}`}
        icon={<FaArrowsAltH />}
        label="Width"
        value={item.length}
        onChange={(value) => onMeasurementChange("length", value)}
      />
      <MeasurementInput
        id={`width-${index}`}
        icon={<FaArrowsAltV />}
        label="Height"
        value={item.width}
        onChange={(value) => onMeasurementChange("width", value)}
      />
    </div>

    <label className={styles.filmPicker}>
      <FaFilm />
      <span>
        <small>Film type</small>
        <select value={item.film.type} onChange={(event) => onFilmChange(event.target.value)}>
          {filmTypes.map((film) => (
            <option key={film.type} value={film.type}>
              {film.type}
            </option>
          ))}
        </select>
      </span>
    </label>
  </article>
);

interface MeasurementInputProps {
  id: string;
  icon: React.ReactNode;
  label: string;
  value: number | "";
  onChange: (value: string) => void;
}

const MeasurementInput = ({ id, icon, label, value, onChange }: MeasurementInputProps) => (
  <label className={styles.measurementField} htmlFor={id}>
    <span className={styles.measurementHeader}>
      <span className={styles.measurementLabel}>{icon}{label}</span>
      <strong>{value === "" ? "Not set" : `${value} in`}</strong>
    </span>
    <input
      id={id}
      type="range"
      min="0"
      max="240"
      step="1"
      value={value === "" ? 0 : value}
      aria-valuetext={value === "" ? "Not set" : `${value} inches`}
      style={
        {
          "--slider-progress": `${((value === "" ? 0 : value) / 240) * 100}%`,
        } as React.CSSProperties
      }
      onInput={(event) => onChange(event.currentTarget.value)}
    />
    <span className={styles.measurementScale} aria-hidden="true">
      <small>0</small>
      <small>240 in</small>
    </span>
  </label>
);

export default EstimatorPro;
