import {ShoppingItem} from '../model/shopping-list.model';
import {ShoppingAction, ShoppingActionTypes} from '../actions/shopping.action';
import { loadavg } from 'os';
import { error } from 'util';
export interface ShoppingState {
  list: Array<ShoppingItem>;
  loading: boolean;
  error: Error;
}

const intialState: ShoppingState = {
 list: [],
 loading : false,
 error: undefined
};

export function ShoppingReducer(state: ShoppingState = intialState, action: ShoppingAction) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM_SUCCESS:
      return  {...state, list: action.payload, loading: false};
    // tslint:disable-next-line: no-switch-case-fall-through
    case ShoppingActionTypes.DELETE_ITEM_SUCCESS:
      return {...state, list: state.list.filter(item => item.id !== action.payload), loading: false };
    default:
      return state;

  }
}
