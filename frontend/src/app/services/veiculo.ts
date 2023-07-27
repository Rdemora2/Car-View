export class Veiculo {
  id?: number;
  marca: string;
  modelo: string;
  foto: File | null;
  valor: number;
  ano: number;
  odometro: number;

  constructor(
    marca: string,
    modelo: string,
    foto: File | null,
    valor: number,
    ano: number,
    odometro: number
  ) {
    this.marca = marca;
    this.modelo = modelo;
    this.foto = foto;
    this.valor = valor;
    this.ano = ano;
    this.odometro = odometro;
  }
}
