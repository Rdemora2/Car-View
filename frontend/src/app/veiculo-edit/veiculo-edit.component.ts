import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Veiculo } from '../services/veiculo';
import { VeiculoService } from '../services/veiculo.service';

function isFile(obj: any): obj is File {
  return obj instanceof File;
}

@Component({
  selector: 'app-veiculo-edit',
  templateUrl: './veiculo-edit.component.html',
  styleUrls: ['./veiculo-edit.component.css']
})

export class VeiculoEditComponent implements OnInit {
  veiculo: Veiculo = {
    marca: '',
    modelo: '',
    foto: '',
    valor: 0
  };

  constructor(private veiculoService: VeiculoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.carregarDetalhesVeiculo(id);
  }

  carregarDetalhesVeiculo(id: number): void {
    // Verificar se o 'id' é válido
    if (id !== undefined) {
      // Chama o serviço para carregar os detalhes do veículo
      this.veiculoService.obterDetalhesVeiculo(id).subscribe((veiculo) => {
        this.veiculo = veiculo;
      });
    } else {
      console.log('ID do veículo é inválido');
    }
  }


  editarVeiculo(): void {
    const formData = new FormData();
    formData.append('marca', this.veiculo.marca);
    formData.append('modelo', this.veiculo.modelo);
  
    if (isFile(this.veiculo.foto)) {
      formData.append('foto', this.veiculo.foto);
    }
  
    formData.append('valor', this.veiculo.valor.toString());
  
    if (this.veiculo.id !== undefined) {
      this.veiculoService.editarVeiculo(this.veiculo.id, formData)
        .subscribe(() => {
          console.log('Veículo editado com sucesso!');
        }, (error) => {
          console.error('Erro ao editar veículo:', error);
        });
    } else {
      console.error('Erro ao editar veículo: ID do veículo não fornecido ou inválido.');
    }
  }
  onFotoChange(event: any): void {
    const file = event.target.files[0];
    this.veiculo.foto = file;
  }

}
