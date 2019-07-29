import {ShoppingItem} from '../model/shopping-list.model';
import {ShoppingAction, ShoppingActionTypes} from '../actions/shopping.action';

const intialState: Array<ShoppingItem> = [{
  id: '1775935f-36fd-467e-a667-09f95b917f6d',
  name: 'Diet Coke',
}];

export function ShoppingReducer(state: Array<ShoppingItem>= intialState, action: ShoppingAction) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payload];
    // tslint:disable-next-line: no-switch-case-fall-through
    case ShoppingActionTypes.DELETE_ITEM:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;

  }
}
