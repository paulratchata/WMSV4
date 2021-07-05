export interface logModel {
  event: string;
  message: string;
  date: any;
  user: string;
}

export interface partialUnloadlog {
  event: string;
  type: string;
  containerNumber: string;
  date: any;
  user: string;
  sku: string;
  previousQty: number;
  attachment: string;
  attchQty: number;
  attchPreviousQty: number;
  orgSkuQty: number;
  orgAttchQty: number;
}

export interface fullUnloadlog {
  date: any;
  type: string;
  sku: string;
  qty: string;
  attachment: string;
  attchQty: string;
  user: string;
}
