export interface Recipe {
  id: string;
  name: string;
  type: 'pine' | 'oil';
  typeName: string;
  ingredients: string[];
  ratio: string;
  weight: string;
  suitableFor: string;
  note: string;
}

export interface SmokeRecord {
  id: string;
  date: string;
  type: 'pine' | 'oil';
  typeName: string;
  furnaceNo: string;
  startTime: string;
  endTime: string;
  sootWeight: string;
  quality: 'excellent' | 'good' | 'normal';
  qualityName: string;
  operator: string;
  remark: string;
}

export interface MakingRecord {
  id: string;
  date: string;
  recipeName: string;
  glueRatio: string;
  mixWeight: string;
  hammerCount: number;
  moldType: string;
  moldName: string;
  inkCount: number;
  status: 'mixing' | 'hammering' | 'molding' | 'done';
  statusName: string;
  operator: string;
}

export interface DryingRecord {
  id: string;
  inkName: string;
  batchNo: string;
  startDate: string;
  totalDays: number;
  currentDay: number;
  nextTurnDate: string;
  turnCount: number;
  humidity: string;
  temperature: string;
  status: 'drying' | 'turning' | 'done';
  statusName: string;
}

export interface Product {
  id: string;
  name: string;
  type: string;
  weight: string;
  gildingType: string;
  image: string;
  batchNo: string;
  completedDate: string;
  stock: number;
  price: string;
  description: string;
}

export interface Order {
  id: string;
  customerName: string;
  orderDate: string;
  deliveryDate: string;
  items: string;
  packageType: string;
  totalAmount: string;
  status: 'pending' | 'producing' | 'gilding' | 'packing' | 'shipped' | 'done';
  statusName: string;
  remark: string;
}

export interface SalesRecord {
  id: string;
  date: string;
  productName: string;
  quantity: number;
  unitPrice: string;
  totalAmount: string;
  customer: string;
  channel: string;
  paymentMethod: string;
}

export interface ProcessStep {
  key: string;
  name: string;
  description: string;
  color: string;
  bgColor: string;
}
