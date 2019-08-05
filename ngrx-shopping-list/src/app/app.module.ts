import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import {ShoppingReducer} from './store/reducer/shopping.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule} from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingEffects } from './store/effects/shopping.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      shopping: ShoppingReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([ShoppingEffects])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
