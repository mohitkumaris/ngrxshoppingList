import {ShoppingItem} from './shopping-list.model';
import { ShoppingState } from '../reducer/shopping.reducer';

export interface AppState {
  readonly shopping: ShoppingState;
}
/*
This will allow us to type the structure of our Store and
make it easier to select slices of state in the future. We'll be using this in a moment,
 until then, we need to register our shopping reducer as a root reducer.
 */
