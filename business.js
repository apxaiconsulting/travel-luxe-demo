// Everything about the business lives here. To make this demo for a new client, edit this file only.
export const BUSINESS = {
  name: "Travel Luxe",              // shown on the sign-in screen and browser tab
  fullName: "Travel Luxe Vacation Rentals",
  shortName: "Travel Luxe",         // shown in the top bar
  tagline: "Luxury stays, thoughtfully designed",
  builtBy: "Built by APX Labs",     // shown in the demo banner; leave "" to hide
  currency: "$",
  locale: "en-US",

  // Wording used across the app, so the same code fits a resort, a hotel or a rental portfolio.
  vocab: {
    unit: "property", units: "properties", Unit: "Property", Units: "Properties",
    fee: "management fee", Fee: "Management fee", Fees: "Management fees", FeesShort: "Fees",
    shared: "Portfolio-wide",
  },

  // One entry per listing. rate = nightly price [weekday, Fri–Sun], feePct = Travel Luxe's cut of each night.
  // Up to 6 colors are defined in index.html (--u1 … --u6).
  units: [
    { id: "ll101", name: "Lincoln Lofts 101", short: "LL101", listing: "Lincoln Lofts 101",
      city: "Washington, DC", pax: 4,  beds: 2, baths: 1,   rate: [165, 215],   feePct: 0.20 },
    { id: "ll102", name: "Lincoln Lofts 102", short: "LL102", listing: "Lincoln Lofts 102",
      city: "Washington, DC", pax: 6,  beds: 3, baths: 1,   rate: [205, 265],   feePct: 0.20 },
    { id: "ll201", name: "Lincoln Lofts 201", short: "LL201", listing: "Lincoln Lofts 201",
      city: "Washington, DC", pax: 6,  beds: 3, baths: 1,   rate: [215, 275],   feePct: 0.20 },
    { id: "ll202", name: "Lincoln Lofts 202", short: "LL202", listing: "Lincoln Lofts 202",
      city: "Washington, DC", pax: 4,  beds: 2, baths: 1,   rate: [175, 225],   feePct: 0.20 },
    { id: "roof8", name: "Rooftop Estate 8BR", short: "8BR", listing: "Luxury 8BR & Rooftop · Metro · Parking · Sleeps 18",
      city: "Washington, DC", pax: 18, beds: 9, baths: 6.5, rate: [1150, 1595], feePct: 0.18 },
    { id: "roof5", name: "Rooftop Oasis 5BR", short: "5BR", listing: "Luxe 5BR w/ Rooftop Oasis · Parking · Metro · Gym",
      city: "Washington, DC", pax: 12, beds: 6, baths: 4.5, rate: [720, 965],   feePct: 0.18 },
  ],

  // Management fees are split evenly between these people. Leave empty to show owner payouts instead.
  agents: [],

  // Expense categories, each with optional "for" choices.
  expenseCategories: {
    "Cleaning": ["Turnover clean", "Deep clean", "Laundry"],
    "Supplies": ["Toiletries", "Linens", "Coffee & pantry", "Paper goods"],
    "Utilities": ["Electric", "Gas", "Water", "Internet"],
    "HOA & Parking": ["HOA dues", "Parking"],
    "Maintenance": ["Handyman", "HVAC", "Appliance", "Pest control"],
    "Software & Fees": ["Channel fees", "Payment processing", "PMS software"],
    "Marketing": ["Photography", "Listing ads"],
    "Licenses & Insurance": ["STR license", "Insurance"],
    "Misc.": [],
  },

  // Demo only: typical monthly costs used to generate sample expenses (category, for, amount, day of month).
  sampleMonthlyExpenses: [
    ["Cleaning", "Turnover clean", 3900, 28], ["Cleaning", "Laundry", 620, 28],
    ["Utilities", "Electric", 940, 12], ["Utilities", "Gas", 310, 12],
    ["Utilities", "Water", 265, 12], ["Utilities", "Internet", 420, 5],
    ["HOA & Parking", "HOA dues", 1850, 1], ["HOA & Parking", "Parking", 540, 1],
    ["Supplies", "Toiletries", 290, 9], ["Supplies", "Linens", 210, 9], ["Supplies", "Coffee & pantry", 180, 9],
    ["Software & Fees", "Channel fees", 1450, 3], ["Software & Fees", "Payment processing", 760, 3],
    ["Software & Fees", "PMS software", 240, 3],
    ["Licenses & Insurance", "Insurance", 480, 20],
    ["Marketing", "Listing ads", 350, 6],
  ],
};
