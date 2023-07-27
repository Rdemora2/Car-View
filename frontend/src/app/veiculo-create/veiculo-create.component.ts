import { Component } from '@angular/core';
import { VeiculoService } from '../services/veiculo.service';
import { Router } from '@angular/router';
import { Veiculo } from '../services/veiculo'; // Importe o modelo Veiculo aqui

@Component({
  selector: 'app-veiculo-create',
  templateUrl: './veiculo-create.component.html',
  styleUrls: ['./veiculo-create.component.css']
})

export class VeiculoCreateComponent {
  novoVeiculo: Veiculo = {
    marca: '',
    modelo: '',
    foto: null,
    valor: 0,
    ano: 0,
    odometro: 0 
  };

  constructor(private veiculoService: VeiculoService, private router: Router) {}

  onFotoSelecionada(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.novoVeiculo.foto = input.files[0];
    }
  }

  criarVeiculo(): void {
    const formData = new FormData();
    formData.append('marca', this.novoVeiculo.marca);
    formData.append('modelo', this.novoVeiculo.modelo);
    formData.append('valor', this.novoVeiculo.valor.toString());
    formData.append('ano', this.novoVeiculo.ano.toString()); 
    formData.append('odometro', this.novoVeiculo.odometro.toString());

    if (this.novoVeiculo.foto) {
      formData.append('foto', this.novoVeiculo.foto, this.novoVeiculo.foto.name);
    }

    this.veiculoService.criarVeiculoComFoto(formData).subscribe(
      () => {
        this.novoVeiculo = {
          marca: '',
          modelo: '',
          foto: null,
          valor: 0,
          ano: 0,
          odometro: 0
        };
        // Redireciona para o catálogo de veículos
        this.router.navigate(['/catalog']);

      },
      (error) => {
        console.error('Erro ao criar veículo:', error);
      }
    );
  }
}