import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veiculo } from './veiculo';
import { JwtToken } from '../types';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  private apiUrl = 'http://localhost:8000/api/veiculos/';

  constructor(private http: HttpClient) { }

  getVeiculos(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.apiUrl);
  }

  criarVeiculo(veiculo: Veiculo): Observable<Veiculo> {
    return this.http.post<Veiculo>(this.apiUrl, veiculo);
  }

  criarVeiculoComFoto(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

  editarVeiculo(veiculo: Veiculo): Observable<Veiculo> {
    const url = `${this.apiUrl}${veiculo.id}/`;
    return this.http.put<Veiculo>(url, veiculo);
  }

  deletarVeiculo(id: number): Observable<any> {
    const url = `${this.apiUrl}${id}/`;
    return this.http.delete(url);
  }

  obterVeiculos(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.apiUrl);
  }

  isAuthenticated(): boolean {
    // Obtenha o token JWT armazenado no localStorage
    const token = localStorage.getItem('token');

    // Verifique se o token existe
    if (token) {
      try {
        // Decodifique o token para obter as informações
        const tokenInfo: JwtToken = JSON.parse(atob(token.split('.')[1]));

        // Verifique se o token está expirado
        const currentDate = new Date();
        const tokenExpirationDate = new Date(tokenInfo.exp * 1000);

        if (tokenExpirationDate > currentDate) {
          // O token está válido
          return true;
        } else {
          // O token está expirado
          // Remova o token inválido do localStorage
          localStorage.removeItem('token');
        }
      } catch (error) {
        console.error('Erro ao decodificar o token JWT:', error);
        // Remova o token inválido do localStorage caso ocorra algum erro ao decodificar
        localStorage.removeItem('token');
      }
    }

    // Caso o token não exista ou esteja inválido, retorne false
    return false;
  }
}
