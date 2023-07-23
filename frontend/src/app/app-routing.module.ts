import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeiculoListComponent } from './veiculo-list/veiculo-list.component';
import { VeiculoCreateComponent } from './veiculo-create/veiculo-create.component';
import { VeiculoEditComponent } from './veiculo-edit/veiculo-edit.component';
import { VeiculoDeleteComponent } from './veiculo-delete/veiculo-delete.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'catalog', component: VeiculoListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: VeiculoCreateComponent, canActivate: [AuthGuard] }, // Rota protegida
  { path: 'edit/:id', component: VeiculoEditComponent, canActivate: [AuthGuard] }, // Rota protegida
  { path: 'delete/:id', component: VeiculoDeleteComponent, canActivate: [AuthGuard] }, // Rota protegida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
