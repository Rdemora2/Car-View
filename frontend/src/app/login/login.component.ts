import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginSuccess: boolean = false; // Variável para controlar o estado de autenticação

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        // Salvar o token JWT no LocalStorage após o login bem-sucedido
        localStorage.setItem('token', response.access);
        // Imprimir o token JWT no console
        console.log('Token JWT:', response.access);
        this.loginSuccess = true;
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 700);
      },
      (error) => {
        console.error('Erro ao fazer login:', error);
      }
    );
  }
}