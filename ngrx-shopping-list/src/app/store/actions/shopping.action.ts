import {Action} from '@ngrx/store';
import {ShoppingItem} from '../model/shopping-list.model';

export enum ShoppingActionTypes {
  ADD_ITEM = '[ShoppingItem] Add Item',
  DELETE_ITEM = '[ShoppingItem] Delete Item'
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;
  constructor(public payload: ShoppingItem) {}
}
export class DeleteItemAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM;
  constructor(public payload: string) {}
}
export type ShoppingAction = AddItemAction | DeleteItemAction;

