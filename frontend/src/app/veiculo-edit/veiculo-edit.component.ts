import { Component, Input } from '@angular/core';
import { Veiculo } from '../services/veiculo';
import { VeiculoService } from '../services/veiculo.service';
@Component({
  selector: 'app-veiculo-edit',
  templateUrl: './veiculo-edit.component.html',
  styleUrls: ['./veiculo-edit.component.css']
})
export class VeiculoEditComponent {
  @Input() veiculo!: Veiculo; // Veículo passado como entrada para o componente

  constructor(private veiculoService: VeiculoService) { }

  editarVeiculo(): void {
    this.veiculoService.editarVeiculo(this.veiculo)
      .subscribe(() => {
        // Lógica após a edição do veículo (por exemplo, exibir uma mensagem de sucesso)
      });
  }
}
