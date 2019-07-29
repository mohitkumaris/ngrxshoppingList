import { Component, OnInit } from '@angular/core';
import { AppState } from './store/model/app-state.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingItem } from './store/model/shopping-list.model';
import { AddItemAction, DeleteItemAction } from './store/actions/shopping.action';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  shoppingItems$: Observable<Array<ShoppingItem>>;
  newShoppingItem: ShoppingItem = { id: '', name: '' };
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
   this.shoppingItems$ = this.store.select(store => store.shopping);
   }
  addItem() {
    this.newShoppingItem.id = uuid();

    this.store.dispatch(new AddItemAction(this.newShoppingItem));

    this.newShoppingItem = { id: '', name: '' };
  }
  deleteItem(id: string) {
   this.store.dispatch(new DeleteItemAction(id));
  }
}
