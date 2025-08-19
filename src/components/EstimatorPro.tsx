"use client";

import React, { useState } from "react";
import Image from "next/image";
import InfoTooltip from "./InfoTool";
import styles from "../styles/EstimatorPro.module.css";
import { FaRegEdit, FaCalculator, FaRegCheckCircle, FaArrowRight } from "react-icons/fa";

const filmTypes = [
  { type: "None", pricePerSqFt: 0 },
  { type: "Interior", pricePerSqFt: 12 },
  { type: "Interior Premium", pricePerSqFt: 14 },
  { type: "Exterior", pricePerSqFt: 20 },
  { type: "Exterior Premium", pricePerSqFt: 23 },
  { type: "Decorative", pricePerSqFt: 12 },
  { type: "Tuffskin", pricePerSqFt: 45 },
];

const equipmentOptions = [
  { type: "None", price: 0 },
  { type: "Ladder", price: 150 },
  { type: "Scaffold", price: 450 },
  { type: "Lift", price: 1000 },
];

interface WindowData {
  numWindows: number | "";
  length: number | "";
  width: number | "";
  film: { type: string; pricePerSqFt: number };
}

const EstimatorPro: React.FC = () => {
  const [windowData, setWindowData] = useState<WindowData[]>([
    { numWindows: 0, length: 0, width: 0, film: filmTypes[0] },
    { numWindows: 0, length: 0, width: 0, film: filmTypes[0] },
    { numWindows: 0, length: 0, width: 0, film: filmTypes[0] },
  ]);
  const [selectedEquipment, setSelectedEquipment] = useState(equipmentOptions[0]);

  const handleInputChange = (index: number, field: keyof WindowData, value: string) => {
    const updated = [...windowData];
    if (field === "film") {
      updated[index][field] = filmTypes.find((f) => f.type === value)!;
    } else {
      updated[index][field] = value === "" ? "" : parseInt(value);
    }
    setWindowData(updated);
  };

  const sanitizeData = () => {
    return windowData.map((row) => ({
      numWindows: row.numWindows === "" ? 1 : row.numWindows,
      length: row.length === "" ? 0 : row.length,
      width: row.width === "" ? 0 : row.width,
      film: row.film,
    }));
  };

  const totalCost = Math.max(
    349,
    sanitizeData().reduce((acc, row) => {
      const areaSqInches = row.length * row.width;
      const areaSqFeet = areaSqInches / 144;
      return acc + areaSqFeet * row.numWindows * row.film.pricePerSqFt;
    }, 0) + selectedEquipment.price
  ).toFixed(2);

  return (
    <>

      <div className={styles.estimatorWrapper}>
          <div className={styles.fadeIn}>

        <section className={styles.section}>
          <InfoTooltip />

          <Image
            src="/images/estimatorpro2.png"
            alt="Window Tinting Estimator Pro Application"
            fill
            className={styles.bgImage}
          />

          <div className={styles.formWrapper}>
            <h2 className={styles.totalHeading}>Estimated Cost: ${totalCost}</h2>

            {windowData.map((row, index) => (
              <div key={index} className={styles.row}>
                <label htmlFor={`numWindows-${index}`} className={styles.srOnly}>Number of Windows</label>
                <input
                  id={`numWindows-${index}`}
                  type="number"
                  min={1}
                  value={row.numWindows}
                  onChange={(e) => handleInputChange(index, "numWindows", e.target.value)}
                  onBlur={(e) => {
                    if (e.target.value === "") handleInputChange(index, "numWindows", "1");
                  }}
                  className={`${styles.input} ${styles.smallInput}`}
                />

                <label htmlFor={`length-${index}`} className={styles.srOnly}>Length in inches</label>
                <input
                  id={`length-${index}`}
                  type="number"
                  value={row.length}
                  onChange={(e) => handleInputChange(index, "length", e.target.value)}
                  onBlur={(e) => {
                    if (e.target.value === "") handleInputChange(index, "length", "0");
                  }}
                  className={styles.input}
                />

                <label htmlFor={`width-${index}`} className={styles.srOnly}>Width in inches</label>
                <input
                  id={`width-${index}`}
                  type="number"
                  value={row.width}
                  onChange={(e) => handleInputChange(index, "width", e.target.value)}
                  onBlur={(e) => {
                    if (e.target.value === "") handleInputChange(index, "width", "0");
                  }}
                  className={styles.input}
                />

                <label htmlFor={`film-${index}`} className={styles.srOnly}>Film Type</label>
                <select
                  id={`film-${index}`}
                  value={row.film.type}
                  onChange={(e) => handleInputChange(index, "film", e.target.value)}
                  className={`${styles.select} ${styles.filmSelect}`}
                >
                  {filmTypes.map((f) => (
                    <option key={f.type} value={f.type}>
                      {f.type}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            <div className={styles.equipmentWrapper}>
              <label htmlFor="equipment" className={styles.srOnly}>Equipment</label>
              <select
                id="equipment"
                value={selectedEquipment.type}
                onChange={(e) =>
                  setSelectedEquipment(
                    equipmentOptions.find((eq) => eq.type === e.target.value)!
                  )
                }
                className={styles.equipmentSelect}
              >
                {equipmentOptions.map((eq) => (
                  <option key={eq.type} value={eq.type}>
                    {eq.type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <a
            href="https://tintitpro.setmore.com/"
            aria-label="Schedule an appointment with Estimator Pro"
            className={styles.scheduleButton}
          >
            <Image
              src="/images/schedule.png"
              alt="Estimator Pro Schedule"
              width={300}
              height={110}
              className={styles.wigglePop}
            />
          </a>
          
        </section>
        
      </div>
  </div>

    <div className={styles.bentoContainer}>
      <div className={styles.bentoHeader}>
        <h2 className={styles.bentoTitle}>How Estimator Pro Works</h2>
        <p className={styles.bentoSubtitle}>Get your instant quote in three simple steps</p>
      </div>
      
      <div className={styles.bentoGrid}>
        <div className={styles.bentoCard}>
          <div className={styles.bentoIcon}>
            <FaRegEdit />
          </div>
          <div className={styles.bentoContent}>
            <h3 className={styles.bentoCardTitle}>Enter Your Details</h3>
            <p className={styles.bentoCardText}>
              Input your window dimensions, film preferences, and equipment needs using our intuitive interface.
            </p>
          </div>
          <div className={styles.bentoNumber}>1</div>
        </div>

        <div className={styles.bentoArrow}>
          <FaArrowRight />
        </div>

        <div className={styles.bentoCard}>
          <div className={styles.bentoIcon}>
            <FaCalculator />
          </div>
          <div className={styles.bentoContent}>
            <h3 className={styles.bentoCardTitle}>Instant Calculation</h3>
            <p className={styles.bentoCardText}>
              Our advanced algorithm instantly calculates your total cost with transparent pricing breakdown.
            </p>
          </div>
          <div className={styles.bentoNumber}>2</div>
        </div>

        <div className={styles.bentoArrow}>
          <FaArrowRight />
        </div>

        <div className={styles.bentoCard}>
          <div className={styles.bentoIcon}>
            <FaRegCheckCircle />
          </div>
          <div className={styles.bentoContent}>
            <h3 className={styles.bentoCardTitle}>Book Confidently</h3>
            <p className={styles.bentoCardText}>
              Know your exact cost upfront and book your appointment with confidence and peace of mind.
            </p>
          </div>
          <div className={styles.bentoNumber}>3</div>
        </div>
      </div>
    </div>

    </>
  );
};

export default EstimatorPro;
