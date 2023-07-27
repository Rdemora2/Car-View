import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../services/veiculo';
import { VeiculoService } from '../services/veiculo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-veiculo-edit',
  templateUrl: './veiculo-edit.component.html',
  styleUrls: ['./veiculo-edit.component.css']
})
export class VeiculoEditComponent implements OnInit {
  veiculo: Veiculo | undefined;
  novaFoto: File | null = null;
  mensagemSucesso: string | null = null;

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

  onNovaFotoSelecionada(event: any): void {
    const file = event.target.files[0];
    this.novaFoto = file;
  }

  editarVeiculo(): void {
    if (!this.veiculo) {
      console.error('Erro ao editar veículo: Veículo não encontrado.');
      return;
    }
  
    const formData = new FormData();
    formData.append('marca', this.veiculo.marca);
    formData.append('modelo', this.veiculo.modelo);
    formData.append('ano', this.veiculo.ano?.toString() || '');
    formData.append('odometro', this.veiculo.odometro?.toString() || '');
  
    // Verifica se há uma nova foto antes de adicionar ao formData
    if (this.novaFoto instanceof File) {
      formData.append('foto', this.novaFoto, this.novaFoto.name);
    }
  
    const valor = this.veiculo.valor !== undefined ? this.veiculo.valor : 0;
    formData.append('valor', valor.toString());
  
    if (this.veiculo.id !== undefined) {
      this.veiculoService.editarVeiculo(this.veiculo.id, formData)
        .subscribe(() => {
          this.mensagemSucesso = 'Veículo editado com sucesso!';
          setTimeout(() => {
            this.mensagemSucesso = null;
            this.router.navigate(['/catalog']);
          }, 500);
        }, (error) => {
          console.error('Erro ao editar veículo:', error);
        });
    } else {
      console.error('Erro ao editar veículo: ID do veículo não fornecido ou inválido.');
    }
  }  
}