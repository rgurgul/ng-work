import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { DataService } from './data.service';
import { inject } from '@angular/core';

fdescribe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fetch method should call http get', () => {

    //spyOn(service, 'fetch');
    const http = TestBed.get(HttpTestingController);
    service.fetch('items').subscribe();
    const req = http.expectOne('http://localhost/items')
    expect(req.request.method).toEqual('GET');
    http.verify();

  });


});
