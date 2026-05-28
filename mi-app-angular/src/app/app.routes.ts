import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { Pregunta1Component } from './pages/pregunta1/pregunta1.component';
import { Pregunta2Component } from './pages/pregunta2/pregunta2.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'pregunta1', component: Pregunta1Component },
  { path: 'pregunta2', component: Pregunta2Component },
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'registro', component: RegistroComponent },
];
