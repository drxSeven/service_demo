import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MCompComponent } from './components/m-comp/m-comp.component';
import { FCompComponent } from './components/f-comp/f-comp.component';
import { KCompComponent } from './components/k-comp/k-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MCompComponent,
    FCompComponent,
    KCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
