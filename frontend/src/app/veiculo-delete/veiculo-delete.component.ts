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
  @Input() veiculo!: Veiculo; // Adicione o operador '!' para informar que o valor será atribuído mais tarde

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
    if (!this.veiculo || !this.veiculo.id) {
      // Verificar se o veículo ou o ID do veículo estão ausentes
      console.error('Veículo inválido ou ID do veículo ausente');
      return;
    }

    // Chamar o método de deleção do serviço de veículo
    this.veiculoService.deletarVeiculo(this.veiculo.id).subscribe(
      () => {
        console.log('Veículo deletado com sucesso!');
        this.router.navigate(['/veiculos']);
      },
      (error) => {
        console.error('Erro ao deletar o veículo:', error);
        // Trate o erro aqui de acordo com os requisitos do seu projeto.
      }
    );
  }
}