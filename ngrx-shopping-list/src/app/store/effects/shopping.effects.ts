import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { ShoppingService } from 'src/app/service/shopping.service';
import * as ShoppingActions from '../actions/shopping.action';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class ShoppingEffects {
    constructor(private actions$: Actions, private shoppingService: ShoppingService){}
@Effect() loadShopping$ = this.actions$
.pipe(
    ofType<ShoppingActions.LoadShoppingAction>(ShoppingActions.ShoppingActionTypes.LOAD_SHOPPING),
    mergeMap(
        () => this.shoppingService.getShoppingItems()
        .pipe(
            map(data => new ShoppingActions.LoadShoppingSucessAction(data),
            catchError(error => of(new ShoppingActions.LoadShoppingFailureAction(error)))
        )
    )));

    @Effect() addShopping$ = this.actions$
    .pipe(
        ofType<ShoppingActions.AddItemAction>(ShoppingActions.ShoppingActionTypes.ADD_ITEM),
        mergeMap(
           (data => this.shoppingService.addShoppingItems(data.payload)
           .pipe(
               map( () => new ShoppingActions.AddItemSucessAction(data.payload)),
               catchError(error => of(new ShoppingActions.AddItemFailureAction(error)))
           )
        )));

        @Effect() deleteShopping$ = this.actions$
        .pipe(
            ofType<ShoppingActions.DeleteItemAction>(ShoppingActions.ShoppingActionTypes.DELETE_ITEM),
            mergeMap(
               (data) => this.shoppingService.deleteShoppingItems(data.payload)
               .pipe(
                   map( () => new ShoppingActions.DeleteItemSuccessAction(data.payload)),
                   catchError(error => of(new ShoppingActions.DeleteItemFailureAction(error)))
               )
            ));
      @Effect() updateShopping$ = this.actions$
        .pipe(
            ofType<ShoppingActions.UpdateItemAction>(ShoppingActions.ShoppingActionTypes.UPDATE_ITEM),
            mergeMap(
               (data) => this.shoppingService.updateShoppingItems(data.payload)
               .pipe(
                   map( () => new ShoppingActions.UpdateItemSucessAction(data.payload)),
                   catchError(error => of(new ShoppingActions.UpdateItemFailureAction(error)))
               )
            ));
}
