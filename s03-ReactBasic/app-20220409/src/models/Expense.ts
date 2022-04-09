// export class Expense {
//   id: number;
//   title: string;
//   amount: number;
//   date: Date;
//   constructor(id: number, title: string, amount: number, date: Date) {
//     this.id = id;
//     this.title = title;
//     this.amount = amount;
//     this.date = date;
//   }
// }

export interface Expense {
  id: string;
  title: string;
  amount: number;
  date: Date;
}
