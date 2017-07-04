import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainDataServiceService } from './domain-data-service.service';



@NgModule({
  declarations: [
  ],
  imports: [

  ],
  providers: [
    DomainDataServiceService 
  ],
  bootstrap: []
})
export class RestModule { }
