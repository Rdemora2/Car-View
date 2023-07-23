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
  imageUrlMap: { [id: number]: string } = {};

  constructor(private veiculoService: VeiculoService, private router: Router) {}

  ngOnInit(): void {
    // Obtenha a lista de veículos do serviço ao inicializar o componente
    this.obterVeiculos();
  }

  obterVeiculos(): void {
    this.veiculoService.obterVeiculos().subscribe(
      (veiculos) => {
        this.veiculos = veiculos;
        this.imageUrlMap = {};
        this.veiculos.forEach((veiculo) => {
          this.imageUrlMap[veiculo.id!] = `${veiculo.foto}`;
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  editarVeiculo(id: number | undefined): void {
    // Verificar se id é um número válido antes de redirecionar para a página de edição
    if (id !== undefined) {
      // Obter os detalhes completos do veículo usando o serviço
      this.veiculoService.obterDetalhesVeiculo(id).subscribe(
        (veiculo) => {
          // Redirecionar para a página de edição e passar os detalhes do veículo
          this.router.navigate(['/edit', id], { state: { veiculo: veiculo } });
        },
        (error) => {
          console.error('Erro ao obter detalhes do veículo:', error);
        }
      );
    } else {
      console.log('ID do veículo é inválido');
    }
  }
}