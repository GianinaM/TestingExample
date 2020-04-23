/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HomeService } from './home.service';
import { HomeModule } from './home.module';
import { AppModule } from 'src/app/app.module';
import { baseUrl } from 'src/environments/environment';

describe('Service: Home', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeService],
      imports: [AppModule,
        HttpClientTestingModule
      ],
    });
  });
  it('should ...', inject([HomeService], (service: HomeService) => {
    expect(service).toBeTruthy();
  }));

  it('should return what we have in the api', inject(
    [HttpTestingController, HomeService],
    (httpMock: HttpTestingController, service: HomeService) => {
      let dataToTest = 'this is the data';
      service.getAllHome().subscribe(data => {
        expect(data).toEqual(dataToTest);
      });

      let req = httpMock.expectOne('https://5e9d72700fd0b50016f754f2.mockapi.io/home');
      expect(req.request.method).toEqual('GET');

      req.flush(dataToTest)
    }));

    it('should return text parameter encripted with caesar cipher when postCaesarResults', inject(
      [HttpTestingController, HomeService],
      (httpMock: HttpTestingController, service: HomeService) => {
        let dataToTest = 'def';
        service.postCaesarResults("abc", 3).subscribe(data => {
          expect(data).toEqual(dataToTest);
        });

        let req = httpMock.expectOne(baseUrl + '/caesar');
        expect(req.request.method).toEqual('POST');

        req.flush(dataToTest)
      }));
});
