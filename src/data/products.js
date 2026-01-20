export const products = [
  // --- WASHING MACHINES ---
  {
    id: "rotary-bottle-washing",
    name: "Rotary Bottle Washing Machine",
    model: "TPE/RWM-64 / TPE/RWM-96",
    category: "washing",
    image: "/assets/images/washing-machine.jpg", // Placeholder path
    description: "High-speed rotary washing with 4 inner + 1 outer wash cycles. GMP compliant with Geneva mechanism.",
    specs: [
      { label: "Output", value: "2600 to 9000 Bottles/Hour" },
      { label: "Container Holders", value: "64 or 96 Nos." },
      { label: "Wash Cycle", value: "4 Inner + 1 Outer" },
      { label: "Tank Capacity", value: "75 Ltrs. (2 Nos.)" }
    ]
  },
  {
    id: "turn-table",
    name: "Turn Table (Scrambler/Un-scrambler)",
    model: "TPE/TT-30 / TPE/TT-36 / TPE/TT-42",
    category: "washing",
    image: "/assets/images/turn-table.jpg",
    description: "Stainless steel turn table for smooth bottle feeding. Available in 30, 36, and 42-inch diameters.",
    specs: [
      { label: "Diameter", value: "30, 36, or 42 inches" },
      { label: "Direction", value: "Clockwise / Anti-clockwise" },
      { label: "Height", value: "860mm to 910mm (Adjustable)" },
      { label: "Speed", value: "Step Pulley Controlled" }
    ]
  },

  // --- FILLING MACHINES ---
  {
    id: "semi-auto-liquid-filling",
    name: "Semi-Automatic Volumetric Liquid Filling",
    model: "TPE/Semi-Vol",
    category: "filling",
    image: "/assets/images/semi-filling.jpg",
    description: "Versatile 2-head filler for 5ml to 1000ml bottles. Accuracy ±1% in single dose.",
    specs: [
      { label: "Output", value: "700 to 2400 Bottles/Hour" },
      { label: "Fill Size", value: "5 ml to 1000 ml" },
      { label: "Heads", value: "2 Nos." },
      { label: "Accuracy", value: "± 1%" }
    ]
  },
  {
    id: "auto-liquid-filling",
    name: "Automatic Volumetric Liquid Bottle Filling",
    model: "TPE/ALF-100 / TPE/ALF-150 / TPE/ALF-200",
    category: "filling",
    image: "/assets/images/auto-filling.jpg",
    description: "High-speed multi-head filler (4/6/8 heads). No Bottle-No Fill system with ±1% accuracy.",
    specs: [
      { label: "Output", value: "2400 to 12000 Bottles/Hour" },
      { label: "Heads", value: "4, 6, or 8 Nos." },
      { label: "Fill Range", value: "5 ml to 1000 ml" },
      { label: "Movement", value: "Left to Right" }
    ]
  },
  {
    id: "viscous-filling",
    name: "Automatic Viscous Liquid Filling Machine",
    model: "TPE/AVFL-100 / TPE/AVFL-200",
    category: "filling",
    image: "/assets/images/viscous-filling.jpg",
    description: "Designed for thick liquids (oils, syrups). Features No-Drip nozzles and high accuracy.",
    specs: [
      { label: "Output", value: "Up to 9000 Bottles/Hour" },
      { label: "Heads", value: "4, 6, or 8 Nos." },
      { label: "Accuracy", value: "± 0.5%" },
      { label: "Suitable For", value: "Viscous, Foaming & Aseptic Liquids" }
    ]
  },

  // --- CAPPING & SEALING ---
  {
    id: "auto-ropp-capping",
    name: "Automatic Multi-Head ROPP Cap Sealing",
    model: "TPE/ARCS-100 / TPE/ARCS-150",
    category: "capping",
    image: "/assets/images/capping.jpg",
    description: "Rotary ROPP capper with single motor synchronization. Handles 3600-12000 bottles/hour.",
    specs: [
      { label: "Output", value: "3600 to 12000 Bottles/Hour" },
      { label: "Sealing Heads", value: "4, 6, or 8 Nos." },
      { label: "Cap Feeder", value: "Vibratory Bowl System" },
      { label: "Safety", value: "No Bottle - No Cap System" }
    ]
  },
  {
    id: "semi-auto-capping",
    name: "Semi-Automatic ROPP Cap Sealing",
    model: "TPE/ASCM-50",
    category: "capping",
    image: "/assets/images/semi-capping.jpg",
    description: "Compact single-head sealer for smaller production lines. Easy height adjustment.",
    specs: [
      { label: "Output", value: "1000 to 2400 Containers/Hour" },
      { label: "Heads", value: "1 No." },
      { label: "Motor", value: "1 HP / 440 Volts" },
      { label: "Feature", value: "Adjustable Torque" }
    ]
  },

  // --- LABELING & INSPECTION ---
  {
    id: "sticker-labeling",
    name: "Automatic Sticker Labeling Machine",
    model: "TPE/ASL-150",
    category: "labeling",
    image: "/assets/images/labeling.jpg",
    description: "High-speed labeler for Glass, PET, and Tin containers. PLC controlled with accurate placement.",
    specs: [
      { label: "Output", value: "3600 to 9000 Nos./Hour" },
      { label: "Motor", value: "Stepper / Servo Driven" },
      { label: "Accuracy", value: "High Precision ±1mm" },
      { label: "Control", value: "PLC Touch Screen" }
    ]
  },
  {
    id: "glue-labeling",
    name: "Automatic Wet Glue Labeling Machine",
    model: "TPE/GLM-150",
    category: "labeling",
    image: "/assets/images/glue-labeling.jpg",
    description: "Traditional cold glue labeler for paper labels. Vacuum pump system for perfect alignment.",
    specs: [
      { label: "Output", value: "3600 to 9000 Nos./Hour" },
      { label: "Label Type", value: "Wet Glue / Paper" },
      { label: "Feature", value: "No Container - No Label" }
    ]
  },
  {
    id: "inspection-belt",
    name: "Online Visual Bottle Inspection Conveyor",
    model: "TPE/VBI-100 / TPE/VBI-150",
    category: "inspection",
    image: "/assets/images/inspection.jpg",
    description: "Visual inspection belt with black/white board and overhead lighting for quality control.",
    specs: [
      { label: "Output", value: "100 to 150 Containers/Min" },
      { label: "Operators", value: "4 to 6 Seating Capacity" },
      { label: "Belt", value: "PVC Endless Belt" },
      { label: "Lighting", value: "Overhead Fluorescent" }
    ]
  }
];

export const categories = [
  { id: "all", label: "All Machines" },
  { id: "washing", label: "Washing" },
  { id: "filling", label: "Filling" },
  { id: "capping", label: "Capping & Sealing" },
  { id: "labeling", label: "Labeling" },
  { id: "inspection", label: "Inspection & Packing" }
];