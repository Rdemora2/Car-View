import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VeiculoListComponent } from './veiculo-list/veiculo-list.component';
import { VeiculoCreateComponent } from './veiculo-create/veiculo-create.component';
import { VeiculoEditComponent } from './veiculo-edit/veiculo-edit.component';
import { VeiculoDeleteComponent } from './veiculo-delete/veiculo-delete.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VeiculoListComponent,
    VeiculoCreateComponent,
    VeiculoEditComponent,
    VeiculoDeleteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
