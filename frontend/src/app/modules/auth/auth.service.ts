import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_URL = 'http://localhost:3001'; // podmień port jeśli inny

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.API_URL}/users?email=${email}&password=${password}`
    );
  }

  saveUser(user: any): void {
    localStorage.setItem('userId', user.id);
    localStorage.setItem('role', user.role);
    localStorage.setItem('email', user.email);
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  logout(): void {
    localStorage.clear();
  }
  register(user: {
    name: string;
    email: string;
    password: string;
    role?: string;
  }): Observable<any> {
    return this.http.post(`${this.API_URL}/users`, user); // albo /register, jeśli masz json-server-auth
  }
}
