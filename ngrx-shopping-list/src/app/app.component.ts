import { Component, OnInit } from '@angular/core';
import { AppState } from './store/model/app-state.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingItem } from './store/model/shopping-list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  shoppingItems$: Observable<Array<ShoppingItem>>;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
   this.shoppingItems$ = this.store.select(store => store.shopping);
  }
}
