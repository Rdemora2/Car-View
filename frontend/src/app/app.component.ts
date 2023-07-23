import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'frontend';
  constructor(public authService: AuthService) {}

  logout(): void {
    // Chame o método de logout do serviço AuthService
    this.authService.logout();
    // Outras lógicas de redirecionamento ou limpeza podem ser adicionadas aqui, se necessário.
  }
}