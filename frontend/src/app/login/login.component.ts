import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginSuccess: boolean = false; // Variável para controlar o estado de autenticação

  constructor(private authService: AuthService) { }

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        // Salvar o token JWT no LocalStorage após o login bem-sucedido
        localStorage.setItem('token', response.access);
        // Imprimir o token JWT no console
        console.log('Token JWT:', response.access);

        // Mostrar mensagem de login bem-sucedido e ocultar os campos de login
        this.loginSuccess = true;
      },
      (error) => {
        console.error('Erro ao fazer login:', error);
        // Lógica para tratar erros de login, exibir mensagens de erro, etc.
      }
    );
  }
}