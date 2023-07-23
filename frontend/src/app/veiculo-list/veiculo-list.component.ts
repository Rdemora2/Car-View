import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../services/veiculo';
import { VeiculoService } from '../services/veiculo.service';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.css']
})
export class VeiculoListComponent implements OnInit {
  veiculos: Veiculo[] = [];

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.getVeiculos();
  }

  getVeiculos(): void {
    this.veiculoService.getVeiculos()
      .subscribe(veiculos => this.veiculos = veiculos);
  }

  ordenarPorValor(): void {
    this.veiculos.sort((a, b) => a.valor - b.valor);
  }
}
