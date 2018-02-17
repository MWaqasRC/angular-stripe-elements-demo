import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StripeDemoComponent } from './stripe-demo/stripe-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    StripeDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
