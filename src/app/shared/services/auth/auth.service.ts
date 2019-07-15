import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Token } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private cookies: CookieService
  ) { }

  saveSession(session: Token): void {
    if (session) {
      this.cookies.set('user', JSON.stringify(session));
    }
  }

  closeSession(sessionName: string): void {
    this.cookies.delete(sessionName);
  }

  checkSession(sessionName: string): boolean {
    return this.cookies.check(sessionName);
  }
}
