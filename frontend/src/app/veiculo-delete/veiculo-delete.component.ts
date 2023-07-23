import { Component, Input } from '@angular/core';
import { Veiculo } from '../services/veiculo';
import { VeiculoService } from '../services/veiculo.service';

@Component({
  selector: 'app-veiculo-delete',
  templateUrl: './veiculo-delete.component.html',
  styleUrls: ['./veiculo-delete.component.css']
})
export class VeiculoDeleteComponent {
  @Input() veiculo: Veiculo; // Veículo passado como entrada para o componente

  constructor(private veiculoService: VeiculoService) { }

  deletarVeiculo(): void {
    this.veiculoService.deletarVeiculo(this.veiculo.id)
      .subscribe(() => {
        //
