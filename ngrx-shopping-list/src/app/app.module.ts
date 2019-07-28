import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import {ShoppingReducer} from "./store/reducer/shopping.reducer";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      shopping:ShoppingReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
