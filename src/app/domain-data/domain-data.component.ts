import { Observable } from 'rxjs/Rx'
import { Component, OnInit } from '@angular/core';
import { DomainDataServiceService } from "app/shared/domain-data-service.service";
import { DomainData } from "./domain-data";


@Component({
  selector: 'app-root',
  templateUrl: './domain-data.component.html',
  styleUrls: ['./domain-data.component.css']
})
export class DomainDataComponent{

  domainData: Array<DomainData>;

  constructor(private domainDataService: DomainDataServiceService){

    this.domainDataService.getDomainData().subscribe(data => {
      this.domainData= data;
    })
  }
}
