// Shared data layer for Avorria Cycle Admin & Public Site

export const products = [
  { id: "1", name: "Ridgeback Trail 27.5", price: 549, stock: 12, category: "Mountain" },
  { id: "2", name: "Specialized Sirrus X", price: 799, stock: 5, category: "Hybrid" },
  { id: "3", name: "Giant Defy Advanced", price: 2199, stock: 3, category: "Road" },
  { id: "4", name: "Trek Fuel EX 8", price: 3499, stock: 2, category: "Mountain" },
  { id: "5", name: "Brompton C Line", price: 1450, stock: 8, category: "Folding" },
  { id: "6", name: "Cannondale Topstone", price: 1800, stock: 4, category: "Gravel" },
  // ... more products (18 total)
  { id: "7", name: "Shimano SPD Pedals", price: 45, stock: 25, category: "Parts" },
  { id: "8", name: "Kryptonite Evolution Lock", price: 65, stock: 15, category: "Accessories" },
  { id: "9", name: "Giro Agilis MIPS Helmet", price: 85, stock: 10, category: "Accessories" },
  { id: "10", name: "Continental GP5000 Tyre", price: 55, stock: 40, category: "Parts" },
  { id: "11", name: "Park Tool Multitool", price: 30, stock: 20, category: "Accessories" },
  { id: "12", name: "Lezyne Lite Drive 1000L", price: 75, stock: 12, category: "Accessories" },
  { id: "13", name: "SRAM Eagle GX Chain", price: 35, stock: 30, category: "Parts" },
  { id: "14", name: "Wahoo ELEMNT Bolt", price: 249, stock: 5, category: "Electronics" },
  { id: "15", name: "Ortlieb Back-Roller", price: 120, stock: 8, category: "Bags" },
  { id: "16", name: "Muc-Off Cleaning Kit", price: 25, stock: 50, category: "Maintenance" },
  { id: "17", name: "Topeak JoeBlow Pump", price: 40, stock: 15, category: "Accessories" },
  { id: "18", name: "Brooks B17 Saddle", price: 110, stock: 6, category: "Parts" },
];

export const orders = [
  { id: "ORD-001", customer: "Alice Johnson", total: 594, status: "Delivered", date: "2024-05-01" },
  { id: "ORD-002", customer: "Bob Smith", total: 799, status: "Processing", date: "2024-05-02" },
  { id: "ORD-003", customer: "Charlie Brown", total: 2199, status: "Shipped", date: "2024-05-02" },
  { id: "ORD-004", customer: "Diana Prince", total: 85, status: "Delivered", date: "2024-04-28" },
  { id: "ORD-005", customer: "Edward Norton", total: 3499, status: "Processing", date: "2024-05-03" },
  { id: "ORD-006", customer: "Fiona Gallagher", total: 110, status: "Delivered", date: "2024-04-25" },
  { id: "ORD-007", customer: "George Costanza", total: 249, status: "Shipped", date: "2024-05-01" },
  { id: "ORD-008", customer: "Hannah Baker", total: 55, status: "Delivered", date: "2024-04-30" },
  { id: "ORD-009", customer: "Ian Curtis", total: 1800, status: "Processing", date: "2024-05-03" },
  { id: "ORD-010", customer: "Julia Roberts", total: 120, status: "Delivered", date: "2024-05-02" },
  { id: "ORD-011", customer: "Kevin Hart", total: 45, status: "Shipped", date: "2024-05-03" },
  { id: "ORD-012", customer: "Laura Palmer", total: 25, status: "Delivered", date: "2024-05-01" },
];

export const customers = [
  { id: "C-001", name: "Alice Johnson", email: "alice@example.com", bike: "Ridgeback Trail", lastOrder: "2024-05-01" },
  { id: "C-002", name: "Bob Smith", email: "bob@example.com", bike: "Specialized Sirrus", lastOrder: "2024-05-02" },
  // ... (15 total)
  { id: "C-003", name: "Charlie Brown", email: "charlie@example.com", bike: "Giant Defy", lastOrder: "2024-05-02" },
  { id: "C-004", name: "Diana Prince", email: "diana@example.com", bike: "Trek Fuel", lastOrder: "2024-04-28" },
  { id: "C-005", name: "Edward Norton", email: "edward@example.com", bike: "Brompton C Line", lastOrder: "2024-05-03" },
  { id: "C-006", name: "Fiona Gallagher", email: "fiona@example.com", bike: "Cannondale Topstone", lastOrder: "2024-04-25" },
  { id: "C-007", name: "George Costanza", email: "george@example.com", bike: "Specialized Sirrus", lastOrder: "2024-05-01" },
  { id: "C-008", name: "Hannah Baker", email: "hannah@example.com", bike: "Ridgeback Trail", lastOrder: "2024-04-30" },
  { id: "C-009", name: "Ian Curtis", email: "ian@example.com", bike: "Giant Defy", lastOrder: "2024-05-03" },
  { id: "C-010", name: "Julia Roberts", email: "julia@example.com", bike: "Trek Fuel", lastOrder: "2024-05-02" },
  { id: "C-011", name: "Kevin Hart", email: "kevin@example.com", bike: "Brompton C Line", lastOrder: "2024-05-03" },
  { id: "C-012", name: "Laura Palmer", email: "laura@example.com", bike: "Cannondale Topstone", lastOrder: "2024-05-01" },
  { id: "C-013", name: "Mike Tyson", email: "mike@example.com", bike: "Specialized Sirrus", lastOrder: "2024-04-29" },
  { id: "C-014", name: "Nancy Wheeler", email: "nancy@example.com", bike: "Ridgeback Trail", lastOrder: "2024-05-01" },
  { id: "C-015", name: "Oscar Wilde", email: "oscar@example.com", bike: "Giant Defy", lastOrder: "2024-05-02" },
];

export const jobCards = [
  { id: "JOB-001", bike: "Specialized Allez", service: "Full Service", status: "In Progress", mechanic: "Tom" },
  { id: "JOB-002", bike: "Trek Domane", service: "Brake Bleed", status: "Booked In", mechanic: "Sarah" },
  { id: "JOB-003", bike: "Giant TCR", service: "Drivetrain Clean", status: "Ready for Pickup", mechanic: "Tom" },
  { id: "JOB-004", bike: "Cannondale SuperSix", service: "Wheel True", status: "Awaiting Parts", mechanic: "Sarah" },
  { id: "JOB-005", bike: "Santa Cruz Hightower", service: "Fork Service", status: "In Progress", mechanic: "Tom" },
  { id: "JOB-006", bike: "Specialized Roubaix", service: "Di2 Diagnostic", status: "Booked In", mechanic: "Sarah" },
  { id: "JOB-007", bike: "Pinarello Dogma", service: "Custom Build", status: "In Progress", mechanic: "Tom" },
  { id: "JOB-008", bike: "Brompton P Line", service: "Hinge Service", status: "Collected", mechanic: "Sarah" },
  { id: "JOB-009", bike: "Canyon Grizl", service: "Tubeless Setup", status: "Ready for Pickup", mechanic: "Tom" },
  { id: "JOB-010", bike: "Ribble Endurance", service: "Bottom Bracket", status: "Booked In", mechanic: "Sarah" },
];

export const workshopParts = [
  { id: "P-001", name: "Brake Pads (Shimano)", stock: 45, threshold: 10 },
  { id: "P-002", name: "Gear Cable (Inner)", stock: 8, threshold: 15 },
  { id: "P-003", name: "Chain Oil (Dry)", stock: 25, threshold: 5 },
  { id: "P-004", name: "Inner Tube (700x25)", stock: 5, threshold: 20 },
  // ... (20 total)
  { id: "P-005", name: "Disc Rotor (160mm)", stock: 12, threshold: 4 },
  { id: "P-006", name: "Bar Tape (Black)", stock: 18, threshold: 6 },
  { id: "P-007", name: "Cassette (11-32)", stock: 3, threshold: 5 },
  { id: "P-008", name: "Bottom Bracket (BSA)", stock: 10, threshold: 3 },
  { id: "P-009", name: "Derailleur Hanger", stock: 20, threshold: 10 },
  { id: "P-010", name: "Hydraulic Fluid", stock: 2, threshold: 1 },
  { id: "P-011", name: "Spokes (290mm)", stock: 100, threshold: 50 },
  { id: "P-012", name: "Quick Link (11spd)", stock: 15, threshold: 10 },
  { id: "P-013", name: "Grip Tape", stock: 30, threshold: 10 },
  { id: "P-014", name: "Pedal Washers", stock: 50, threshold: 20 },
  { id: "P-015", name: "Seatpost Clamp", stock: 6, threshold: 2 },
  { id: "P-016", name: "Valve Core", stock: 40, threshold: 20 },
  { id: "P-017", name: "Headset Bearings", stock: 4, threshold: 2 },
  { id: "P-018", name: "Rim Tape", stock: 25, threshold: 10 },
  { id: "P-019", name: "Cable Housing (5m)", stock: 3, threshold: 5 },
  { id: "P-020", name: "Master Link Plier", stock: 2, threshold: 1 },
];
