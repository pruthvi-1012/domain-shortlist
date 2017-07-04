/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DomainDataServiceService } from './domain-data-service.service';

describe('DomainDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomainDataServiceService]
    });
  });

  it('should ...', inject([DomainDataServiceService], (service: DomainDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
