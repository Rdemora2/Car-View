import { Component, Input } from '@angular/core';
import { Veiculo } from '../services/veiculo';
import { VeiculoService } from '../services/veiculo.service';

@Component({
  selector: 'app-veiculo-delete',
  templateUrl: './veiculo-delete.component.html',
})
export class VeiculoDeleteComponent {
  @Input() veiculo!: Veiculo; // Adicione o operador '!' para informar que o valor será atribuído mais tarde

  constructor(private veiculoService: VeiculoService) {}

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
        // Adicione aqui qualquer lógica adicional após a deleção do veículo, como atualizar a lista de veículos.
      },
      (error) => {
        console.error('Erro ao deletar o veículo:', error);
        // Trate o erro aqui de acordo com os requisitos do seu projeto.
      }
    );
  }
}