import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private http: HttpClient) { }

  getAllHome() : Observable<any>{
    return this.http.get('https://5e9d72700fd0b50016f754f2.mockapi.io/home');
  }

  postCaesarResults(textParam, chiperParam)  : Observable<any>{
    return this.http.post(baseUrl + '/caesar',
      {
        text: textParam,
        cipher: chiperParam
      },
      { responseType: 'text' }
      );
  }



  postCaesarDecryptResults(textParam, chiperParam)  : Observable<any>{
    return this.http.post(baseUrl + '/caesar',
      {
        text: textParam,
        cipher: chiperParam
      },
      { responseType: 'text' }
      );
  }
}
