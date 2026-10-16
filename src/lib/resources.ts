export type ResourceSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ResourceFaq = {
  question: string;
  answer: string;
};

export type ResourcePost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishedTime: string;
  modifiedTime: string;
  keywords: string[];
  intro: string;
  sections: ResourceSection[];
  faqs: ResourceFaq[];
  relatedHref: string;
  relatedLabel: string;
};

export const resourcePosts: ResourcePost[] = [
  {
    slug: "residential-window-tinting-cost-calgary",
    title: "How Much Does Residential Window Tinting Cost in Calgary?",
    description:
      "Learn what affects residential window tinting prices in Calgary, including film type, glass area, access, and installation requirements.",
    category: "Residential window film",
    readTime: "6 min read",
    publishedTime: "2026-10-14",
    modifiedTime: "2026-10-14",
    keywords: [
      "residential window tinting cost Calgary",
      "home window film price Calgary",
      "window tinting estimate Calgary",
    ],
    intro:
      "The cost of residential window film in Calgary depends on the total glass area, film performance, number of windows, and how accessible the glass is for installation. A small project with standard ground-level access is priced very differently from a multi-storey home with large panes or specialty film.",
    sections: [
      {
        heading: "What determines the installed price?",
        paragraphs: [
          "Professional estimates typically account for square footage rather than only the number of windows. Film type also matters: heat-control, premium solar, exterior, decorative, and specialty films each have different material and installation requirements.",
          "Access can affect the estimate when installers need a ladder, scaffold, or lift. The glass type, pane size, edge detail, and preparation required are also reviewed before a final quote is confirmed.",
        ],
        bullets: [
          "Total glass area and number of panes",
          "Interior, exterior, premium, or decorative film selection",
          "Height, access, and installation complexity",
          "Glass compatibility and preparation requirements",
        ],
      },
      {
        heading: "How to get a useful preliminary estimate",
        paragraphs: [
          "Tint It Pro's online estimator provides a starting range using surface dimensions, quantity, film selection, and access requirements. It is designed to help homeowners compare options before booking a consultation.",
          "For a project-specific recommendation, a professional on-site consultation is $75 plus GST. That amount is fully credited toward the project when you proceed.",
        ],
      },
      {
        heading: "What you get from professional installation",
        paragraphs: [
          "A professional installer checks the glass construction, recommends a suitable visible-light transmission, and plans the installation around the room's heat, glare, privacy, and fade-protection needs. The result should look consistent across the home and remain easy to maintain.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is the online window tinting estimate final?",
        answer:
          "No. The online estimator provides a preliminary range. The final quote depends on verified dimensions, glass compatibility, film selection, and access requirements.",
      },
      {
        question: "How much is an on-site consultation?",
        answer:
          "Professional on-site consultations are $75 plus GST and are fully credited toward the project when the customer proceeds.",
      },
    ],
    relatedHref: "/windowfilm",
    relatedLabel: "Explore residential window tinting",
  },
  {
    slug: "best-window-film-heat-glare-calgary",
    title: "The Best Window Film for Heat and Glare in Calgary Homes",
    description:
      "Compare heat-control window film options for Calgary homes, including solar performance, natural light, glare reduction, and UV protection.",
    category: "Heat and glare control",
    readTime: "5 min read",
    publishedTime: "2026-10-14",
    modifiedTime: "2026-10-14",
    keywords: [
      "best window film for heat Calgary",
      "glare reduction window film Calgary",
      "solar control film Calgary homes",
    ],
    intro:
      "Large south- and west-facing windows can make Calgary homes uncomfortable during bright summer afternoons. The right solar control window film reduces solar heat and glare while preserving the natural light and view that make the room enjoyable.",
    sections: [
      {
        heading: "Start with the room's problem",
        paragraphs: [
          "A room that overheats needs a different recommendation from a room where television or computer glare is the main concern. Window orientation, glass size, interior finishes, and the time of day the room is used all affect the best film choice.",
          "Spectrally selective and neutral films can reject a meaningful amount of solar energy without creating the dark, mirrored appearance some homeowners want to avoid.",
        ],
      },
      {
        heading: "Benefits beyond temperature control",
        paragraphs: [
          "Quality window film can reduce glare, block more than 99% of ultraviolet light, and help slow fading on flooring, furniture, artwork, and fabrics. Privacy and exterior appearance can also be considered during the selection process.",
        ],
        bullets: [
          "Lower afternoon heat and hot spots",
          "More comfortable television and computer viewing",
          "UV protection for interiors",
          "A consistent appearance across large glass areas",
        ],
      },
      {
        heading: "Why a glass assessment matters",
        paragraphs: [
          "Modern double-pane and Low-E windows need a compatible film recommendation. Tint It Pro reviews the glass construction and recommends an interior or exterior product before installation so the selected film is appropriate for the window.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will heat-control film make my home dark?",
        answer:
          "Not necessarily. Neutral and spectrally selective films can reduce heat and glare while preserving natural light. The recommended shade depends on each room's goals and glass exposure.",
      },
      {
        question: "Which rooms usually benefit most from solar film?",
        answer:
          "South- and west-facing rooms, rooms with floor-to-ceiling glass, skylights, strong screen glare, or afternoon overheating are common priorities.",
      },
    ],
    relatedHref: "/windowfilm",
    relatedLabel: "See residential window film options",
  },
  {
    slug: "privacy-window-film-day-night-calgary",
    title: "Does Privacy Window Film Work at Night?",
    description:
      "Understand how daytime privacy film works, why lighting changes the effect at night, and which frosted or decorative options provide more consistent privacy.",
    category: "Privacy window film",
    readTime: "5 min read",
    publishedTime: "2026-10-14",
    modifiedTime: "2026-10-14",
    keywords: [
      "privacy window film Calgary",
      "one way window film at night",
      "day and night privacy glass film",
    ],
    intro:
      "Privacy film is often described as one-way glass, but the effect depends on which side is brighter. Understanding that simple lighting principle helps Calgary homeowners choose a film that matches the privacy they actually need.",
    sections: [
      {
        heading: "Why reflective film is strongest during the day",
        paragraphs: [
          "Reflective privacy film works best when the exterior is brighter than the room. During daylight hours, it can make it harder for people outside to see in while preserving a view from inside.",
          "At night, interior lights can reverse the brightness relationship. A person outside may be able to see in unless blinds, curtains, or another privacy layer is used.",
        ],
      },
      {
        heading: "Choosing privacy for the whole day",
        paragraphs: [
          "Frosted, etched-look, and decorative films provide a more consistent visual barrier because they diffuse the view rather than relying only on reflected light. They are useful for bathrooms, street-facing rooms, sidelights, and office meeting areas.",
          "Tint It Pro can compare reflective, neutral, frosted, and decorative options based on the room's daylight, evening lighting, desired view, and design goals.",
        ],
      },
      {
        heading: "Privacy does not have to mean no natural light",
        paragraphs: [
          "Many privacy films preserve a bright, comfortable room while softening direct views. The final recommendation balances privacy, glare, visible light, and the appearance of the home's exterior.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is one-way privacy film private at night?",
        answer:
          "Reflective one-way film is strongest when it is brighter outside than inside. At night, interior lighting can reverse the effect, so frosted or decorative film is usually better for consistent privacy.",
      },
      {
        question: "Can privacy film still let daylight into a room?",
        answer:
          "Yes. Film can diffuse views while preserving useful natural light. The best option depends on the desired level of privacy and the room's orientation.",
      },
    ],
    relatedHref: "/windowfilm",
    relatedLabel: "Explore privacy film options",
  },
  {
    slug: "commercial-security-window-film-calgary",
    title: "Commercial Security Window Film for Calgary Businesses",
    description:
      "Learn how commercial window film can improve solar control, privacy, safety, and glass protection for Calgary offices and storefronts.",
    category: "Commercial window film",
    readTime: "6 min read",
    publishedTime: "2026-10-14",
    modifiedTime: "2026-10-14",
    keywords: [
      "commercial security window film Calgary",
      "commercial architectural window film Calgary",
      "office privacy window film Calgary",
    ],
    intro:
      "Commercial window film can solve several building problems at once: excessive solar heat, screen glare, unwanted visibility, fading, and glass safety concerns. The right specification depends on the property, occupants, glass, and operating hours.",
    sections: [
      {
        heading: "Common commercial applications",
        paragraphs: [
          "Offices often use solar control film to improve comfort near perimeter glass and reduce glare on monitors. Retailers may prioritize display protection and privacy, while clinics and professional offices may need a more discreet view through reception and meeting areas.",
          "Security and safety films can help hold broken glass together after impact. Anti-graffiti films can also provide a replaceable protective layer on vulnerable glass surfaces.",
        ],
        bullets: [
          "Solar heat and glare control",
          "Meeting-room and storefront privacy",
          "Interior fade protection",
          "Safety and security glass reinforcement",
          "Replaceable anti-graffiti protection",
        ],
      },
      {
        heading: "Plan around the building",
        paragraphs: [
          "A commercial recommendation should consider the glass type, access, tenant schedule, signage, furniture, and whether the installation must happen in stages. Tint It Pro can review the site and recommend interior or exterior film suited to the project.",
        ],
      },
      {
        heading: "A practical next step",
        paragraphs: [
          "Use the preliminary estimator for an initial range, then schedule an on-site consultation for verified dimensions and a project-specific recommendation. Professional on-site consultations are $75 plus GST and are credited toward the project when you proceed.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can commercial film be installed outside business hours?",
        answer:
          "Scheduling depends on the property and installation requirements. Project phasing and access can be reviewed during the on-site consultation.",
      },
      {
        question: "Does security film make glass unbreakable?",
        answer:
          "No. Security film does not make glass unbreakable. It is designed to help hold broken glass together and should be specified as part of a broader security plan.",
      },
    ],
    relatedHref: "/commercial-films",
    relatedLabel: "Explore commercial window film",
  },
  {
    slug: "tuffskin-vs-sealer-marble-countertops",
    title: "TuffSkin vs. Sealer: Protecting Marble Countertops in Calgary",
    description:
      "Compare TuffSkin natural stone protection with traditional sealer for marble, onyx, travertine, and other Calgary countertop applications.",
    category: "TuffSkin® stone protection",
    readTime: "6 min read",
    publishedTime: "2026-10-14",
    modifiedTime: "2026-10-14",
    keywords: [
      "TuffSkin Calgary",
      "marble countertop protection Calgary",
      "natural stone protection film Calgary",
    ],
    intro:
      "Marble, onyx, travertine, and other calcium-based stones can etch and stain from everyday kitchen and bathroom use. TuffSkin® is a removable surface-protection film designed to create a replaceable barrier over vulnerable stone.",
    sections: [
      {
        heading: "Why sealer and surface film are different",
        paragraphs: [
          "A traditional sealer absorbs into the stone and can help with some staining, but it does not prevent every etch caused by acidic liquids. TuffSkin® sits on the surface as a protective laminate, so the protection is replaceable when the surface eventually shows wear.",
          "The best approach depends on the stone, finish, edge details, expected use, and the customer's maintenance goals. A surface assessment is the right starting point before choosing a product.",
        ],
      },
      {
        heading: "Where TuffSkin® is commonly used",
        paragraphs: [
          "Residential kitchens, bathroom vanities, hospitality counters, restaurant bars, and high-touch stone surfaces are common applications. Satin and gloss finishes can be selected to complement a honed or polished appearance.",
        ],
        bullets: [
          "Marble and onyx kitchen countertops",
          "Bathroom vanities and splash areas",
          "Restaurant and hospitality counters",
          "Travertine and other calcium-based stone surfaces",
        ],
      },
      {
        heading: "Protection that can be renewed",
        paragraphs: [
          "TuffSkin® is designed to be removable and replaceable. That gives homeowners and businesses a way to refresh the protective surface without treating normal wear as a reason to replace the underlying stone.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does TuffSkin® replace stone restoration?",
        answer:
          "TuffSkin® helps protect vulnerable natural stone from everyday etching and staining. The stone should still be assessed and prepared properly before installation.",
      },
      {
        question: "What finishes are available?",
        answer:
          "TuffSkin® is available in satin and gloss finishes to coordinate with honed and polished stone appearances.",
      },
    ],
    relatedHref: "/tuffskin",
    relatedLabel: "Explore TuffSkin® stone protection",
  },
];

export const resourcePostMap = Object.fromEntries(
  resourcePosts.map((post) => [post.slug, post])
) as Record<string, ResourcePost>;
