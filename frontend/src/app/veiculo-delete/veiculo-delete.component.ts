import { Component, Input, OnInit } from '@angular/core';
import { Veiculo } from '../services/veiculo';
import { VeiculoService } from '../services/veiculo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-veiculo-delete',
  templateUrl: './veiculo-delete.component.html',
  styleUrls: ['./veiculo-delete.component.css']
})

export class VeiculoDeleteComponent implements OnInit {
  @Input() veiculo!: Veiculo;
  mensagemExclusao = '';
  showComponent = true;

  constructor(
    private veiculoService: VeiculoService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.veiculoService.obterDetalhesVeiculo(id).subscribe(
      (veiculo) => {
        this.veiculo = veiculo;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // Método para deletar o veículo
  deleteVeiculo(): void {
    // Verifica se o veículo ou o ID do veículo estão ausentes
    if (!this.veiculo || !this.veiculo.id) {
      console.error('Veículo inválido ou ID do veículo ausente');
      return;
    }
    // Chama o método de deleção do serviço de veículo
    this.veiculoService.deletarVeiculo(this.veiculo.id).subscribe(
      () => {
        this.mensagemExclusao = 'Veículo excluído com sucesso!';
        this.showComponent = false
        setTimeout(() => {
          this.mensagemExclusao = '';
          this.router.navigate(['/catalog']);
        }, 500);
      },
      (error) => {
        console.error('Erro ao deletar o veículo:', error);
      }
    );
  }
  cancelarExclusao(): void {
    this.router.navigate(['/catalog']);
  }
}