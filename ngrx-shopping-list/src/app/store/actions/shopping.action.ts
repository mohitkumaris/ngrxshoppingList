import {Action} from '@ngrx/store';
import {ShoppingItem} from '../model/shopping-list.model';

export enum ShoppingActionTypes {
  LOAD_SHOPPING = '[ShoppingItem] Load Shopping',
  LOAD_SHOPPING_SUCCESS = '[ShoppingItem] Load Shopping Success',
  LOAD_SHOPPING_FAILURE = '[ShoppingItem] Load Shopping Failure',
  ADD_ITEM = '[ShoppingItem] Add Item',
  ADD_ITEM_SUCCESS = '[ShoppingItem] Add Item Success',
  ADD_ITEM_FAILURE = '[ShoppingItem] Add Item Failure',
  DELETE_ITEM = '[ShoppingItem] Delete Item',
  DELETE_ITEM_SUCCESS = '[ShoppingItem] Delete Item Success',
  DELETE_ITEM_FAILURE = '[ShoppingItem] Delete Item Failure'
}

export class LoadShoppingAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING;
  constructor(public payload: ShoppingItem) {}
}
export class LoadShoppingActionSucess implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_SUCCESS;
  constructor(public payload: ShoppingItem) {}
}
export class LoadShoppingActionFailure implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_FAILURE;
  constructor(public payload: ShoppingItem) {}
}
export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;
  constructor(public payload: ShoppingItem) {}
}
export class AddItemActionSucess implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_SUCCESS;
  constructor(public payload: ShoppingItem) {}
}
export class AddItemActionFailure implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_FAILURE;
  constructor(public payload: ShoppingItem) {}
}
export class DeleteItemAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM;
  constructor(public payload: string) {}
}
export class DeleteItemActionSuccess implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM_SUCCESS;
  constructor(public payload: string) {}
}
export class DeleteItemActionFailure implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM_FAILURE;
  constructor(public payload: string) {}
}
export type ShoppingAction = AddItemAction | DeleteItemAction | AddItemActionSucess | AddItemActionFailure | DeleteItemActionSuccess | DeleteItemActionFailure | LoadShoppingAction | LoadShoppingActionSucess | LoadShoppingActionFailure;

