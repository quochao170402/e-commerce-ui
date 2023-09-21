import { ItemType } from "../item/ItemType";

export interface CartType {
  items: ItemType[];
  quantity: number;
  totalPrice: number;
}
