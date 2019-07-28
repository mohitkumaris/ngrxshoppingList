import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreDevtoolsModule.instrument({
      maxAge:10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
