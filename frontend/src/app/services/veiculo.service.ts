import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veiculo } from './veiculo';

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
}
