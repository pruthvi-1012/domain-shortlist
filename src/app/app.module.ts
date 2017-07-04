import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DomainDataComponent} from './domain-data/domain-data.component';
import { RestModule } from './shared/shared.module';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DomainDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RestModule
  ],
  providers: [],
  bootstrap: [DomainDataComponent]
})
export class AppModule { }
