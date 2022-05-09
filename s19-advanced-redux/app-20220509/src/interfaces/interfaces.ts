export type Product = {
  id: string;
  price: number;
  name: string;
};
export type CartItem = {
  name: string;
  id: string;
  price: number;
  qty: number;
  totalPrice: number;
};

export type Status = {
  status: StatusTypes;
  title: string;
  message: string;
};

export type CartState = {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
};

export type StatusTypes = "error" | "success" | "pending";
