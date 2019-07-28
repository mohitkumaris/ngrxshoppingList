import {Action} from '@ngrx/store';
import {ShoppingItem} from '../model/shopping-list.model';

export enum ShoppingActionTypes {
  ADD_ITEM = '[ShoppingItem] Add Item'
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;
  constructor(public payload: ShoppingItem) {}
}
export type ShoppingAction = AddItemAction;

