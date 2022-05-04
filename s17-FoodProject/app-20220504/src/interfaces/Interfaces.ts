export type Meal = {
  id: string;
  name: string;
  description: string;
  price: number;
};
export type cartItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  amount: number;
};

export type CartState = {
  items: cartItem[];
  totalAmount: number;
  // addItem: (item: cartItem) => void;
  // removeItem: (id: string) => void;
};

export type User = {
  name: string;
  street: string;
  city: string;
  postalCode: string;
};
