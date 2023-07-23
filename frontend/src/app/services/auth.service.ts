import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api/token/';

  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    // Aqui, você pode verificar se o token JWT está presente no LocalStorage e se está válido
    // Por exemplo, verificar se o token ainda não expirou.
    const token = localStorage.getItem('token');
    return !!token; // Retorna true se o token existir, caso contrário, retorna false.
  }

  login(username: string, password: string): Observable<any> {
    const body = {
      username: username,
      password: password
    };
    return this.http.post(this.apiUrl, body);
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
