export class Veiculo {
  id?: number;
  marca: string;
  modelo: string;
  foto: File | null; // Alteração: Alterar tipo para 'File | null'
  valor: number;

  constructor(marca: string, modelo: string, foto: File | null, valor: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.foto = foto;
    this.valor = valor;
  }
}