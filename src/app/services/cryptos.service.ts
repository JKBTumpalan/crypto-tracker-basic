import { Injectable } from '@angular/core';
import { Crypto } from '../Crypto';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const HttpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CryptosService {
  private apiUrl = 'http://localhost:5000/cryptos';

  constructor(private http: HttpClient) {}

  getCryptos(): Observable<Crypto[]> {
    return this.http.get<Crypto[]>(this.apiUrl);
  }

  deleteCryptos(crypto: Crypto): Observable<Crypto> {
    const url = `${this.apiUrl}/${crypto.id}`;
    return this.http.delete<Crypto>(url);
  }

  toggleCrypto(crypto: Crypto): Observable<Crypto> {
    const url = `${this.apiUrl}/${crypto.id}`;
    return this.http.put<Crypto>(url, crypto, HttpOptions);
  }

  addCrypto(crypto: Crypto): Observable<Crypto> {
    const url = `${this.apiUrl}/${crypto.id}`;
    return this.http.post<Crypto>(this.apiUrl, crypto, HttpOptions);
  }
}
