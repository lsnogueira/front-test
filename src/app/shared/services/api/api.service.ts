import { Injectable } from '@angular/core';
import { environment as env } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Token, UserCredentials } from '../../models';

const { protocol, domain } = env.api;
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly basePath = `${protocol}${domain}`;
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  });

  constructor(private http: HttpClient) {}

  registerUser(userInformation: User): Promise<User> {
    return this.http
      .post<User>('/api/Usuario', userInformation, { headers: this.headers })
      .toPromise();
  }

  requestToken(userCredentials: UserCredentials): Observable<Token> {

    return this.http.post<Token>(
      '/api/Authorization/RequestToken',
      userCredentials,
      {
        headers: this.headers
      }
    );
  }
}
