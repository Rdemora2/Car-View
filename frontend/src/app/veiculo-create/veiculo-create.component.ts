import { Component } from '@angular/core';
import { Veiculo } from '../services/veiculo';
import { VeiculoService } from '../services/veiculo.service';

@Component({
  selector: 'app-veiculo-create',
  templateUrl: './veiculo-create.component.html',
  styleUrls: ['./veiculo-create.component.css']
})
export class VeiculoCreateComponent {
  novoVeiculo = {
    marca: '',
    modelo: '',
    foto: null as File | null, // Inicialize como File | null
    valor: 0
  };

  constructor(private veiculoService: VeiculoService) {}

  onFotoSelecionada(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.novoVeiculo.foto = input.files[0]; // Atribua o arquivo selecionado à propriedade "foto"
    }
  }

  criarVeiculo(): void {
    // Crie um novo objeto FormData e adicione os campos do novoVeiculo a ele
    const formData = new FormData();
    formData.append('marca', this.novoVeiculo.marca);
    formData.append('modelo', this.novoVeiculo.modelo);
    formData.append('valor', this.novoVeiculo.valor.toString());
    if (this.novoVeiculo.foto) {
      formData.append('foto', this.novoVeiculo.foto, this.novoVeiculo.foto.name);
    }

    // Chame o novo método do serviço para criar o veículo com a foto, passando o FormData
    this.veiculoService.criarVeiculoComFoto(formData).subscribe(
      () => {
        // Limpar o formulário após criar o veículo
        this.novoVeiculo = {
          marca: '',
          modelo: '',
          foto: null, // Defina como null após criar o veículo
          valor: 0
        };
      },
      (error) => {
        // Lide com o erro, se necessário
      }
    );
  }
}