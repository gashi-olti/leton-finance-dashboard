export interface Estimation {
  id: number;
  item: string;
  estCost: number;
  estRev: number;
  total: number;
  profitability?: number;
}

export interface Actual {
  id: number;
  item: string;
  actCost: number;
  actRev: number;
  total: number;
  profitability: number;
}

export const estimatesData: Estimation[] = [
  {
    id: 1,
    item: "Project Planning",
    estCost: 5000,
    estRev: 7000,
    total: 12000,
    profitability: 40,
  },
  {
    id: 2,
    item: "UI/UX Design",
    estCost: 8000,
    estRev: 12000,
    total: 20000,
    profitability: 50,
  },
  {
    id: 3,
    item: "Frontend Development",
    estCost: 20000,
    estRev: 30000,
    total: 50000,
    profitability: 50,
  },
  {
    id: 4,
    item: "Backend Development",
    estCost: 25000,
    estRev: 40000,
    total: 65000,
    profitability: 60,
  },
  {
    id: 5,
    item: "Testing & QA",
    estCost: 7000,
    estRev: 10000,
    total: 17000,
    profitability: 42.86,
  },
  {
    id: 6,
    item: "Deployment",
    estCost: 3000,
    estRev: 5000,
    total: 8000,
    profitability: 66.67,
  },
];

export const actualsData: Actual[] = [
  {
    id: 1,
    item: "Project Planning",
    actCost: 5500,
    actRev: 6800,
    total: 12300,
    profitability: 23.64,
  },
  {
    id: 2,
    item: "UI/UX Design",
    actCost: 7500,
    actRev: 12500,
    total: 20000,
    profitability: 66.67,
  },
  {
    id: 3,
    item: "Frontend Development",
    actCost: 21000,
    actRev: 31000,
    total: 52000,
    profitability: 47.62,
  },
  {
    id: 4,
    item: "Backend Development",
    actCost: 24000,
    actRev: 39000,
    total: 63000,
    profitability: 62.5,
  },
  {
    id: 5,
    item: "Testing & QA",
    actCost: 6800,
    actRev: 9500,
    total: 16300,
    profitability: 39.71,
  },
  {
    id: 6,
    item: "Deployment",
    actCost: 3200,
    actRev: 4800,
    total: 8000,
    profitability: 50,
  },
];
