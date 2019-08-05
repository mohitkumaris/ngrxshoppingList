import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { ShoppingService } from 'src/app/service/shopping.service';
import { LoadShoppingAction, ShoppingActionTypes, LoadShoppingFailureAction, 
    LoadShoppingSucessAction, AddItemSucessAction, AddItemFailureAction, AddItemAction, DeleteItemAction, DeleteItemSuccessAction, DeleteItemFailureAction } from '../actions/shopping.action';
import { mergeMap, map, catchError, of } from 'rxjs/operators';
import { error } from 'util';

@Injectable()
export class ShoppingEffects {
    constructor(private actions$: Actions, private shoppingService: ShoppingService){}
@Effect() loadShopping$ = this.actions$
.pipe(
    ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
    mergeMap(
        () => this.shoppingService.getShoppingItems()
        .pipe(
            map(data => new LoadShoppingSucessAction(data),
            catchError(error => of(new LoadShoppingFailureAction(error)))
        )
    )));

    @Effect() addShopping$ = this.actions$
    .pipe(
        ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
        mergeMap(
           (data) => this.shoppingService.addShoppingItems(data.payload)
           .pipe(
               map( () => new AddItemSucessAction(data.payload)),
               catchError(error => of(new AddItemFailureAction(error)))
           )
        ));

        @Effect() deleteShopping$ = this.actions$
        .pipe(
            ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
            mergeMap(
               (data) => this.shoppingService.deleteShoppingItems(data.payload)
               .pipe(
                   map( () => new DeleteItemSuccessAction(data.payload)),
                   catchError(error => of(new DeleteItemFailureAction(error)))
               )
            ));
}
