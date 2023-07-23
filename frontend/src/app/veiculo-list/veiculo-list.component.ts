import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../services/veiculo';
import { VeiculoService } from '../services/veiculo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.css']
})
export class VeiculoListComponent implements OnInit {
  veiculos: Veiculo[] = [];

  constructor(private veiculoService: VeiculoService, private router: Router) {}

  ngOnInit(): void {
    // Obtenha a lista de veículos do serviço ao inicializar o componente
    this.obterVeiculos();
  }

  obterVeiculos(): void {
    this.veiculoService.obterVeiculos().subscribe(
      (veiculos) => {
        this.veiculos = veiculos;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  editarVeiculo(id: number | undefined): void {
    // Verifique se o usuário está autenticado antes de redirecionar para a página de edição
    if (this.veiculoService.isAuthenticated() && id !== undefined) {
      this.router.navigate(['/edit', id]); // Redirecione para a página de edição com o ID do veículo
    } else {
      // Caso não esteja autenticado, redirecione para a página de login
      this.router.navigate(['/login']);
    }
  }
}