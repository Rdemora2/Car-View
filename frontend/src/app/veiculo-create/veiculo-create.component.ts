import { Component } from '@angular/core';
import { Veiculo } from '../services/veiculo';
import { VeiculoService } from '../services/veiculo.service';

@Component({
  selector: 'app-veiculo-create',
  templateUrl: './veiculo-create.component.html',
  styleUrls: ['./veiculo-create.component.css']
})
export class VeiculoCreateComponent {
  novoVeiculo: Veiculo = {
    marca: '',
    modelo: '',
    foto: '',
    valor: 0
  };

  constructor(private veiculoService: VeiculoService) { }

  criarVeiculo(): void {
    this.veiculoService.criarVeiculo(this.novoVeiculo)
      .subscribe(() => {
        // Limpar o formulário após criar o veículo
        this.novoVeiculo = {
          marca: '',
          modelo: '',
          foto: '',
          valor: 0
        };
      });
  }
}