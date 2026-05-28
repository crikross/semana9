import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pregunta1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pregunta1.component.html',
  styleUrl: './pregunta1.component.css'
})
export class Pregunta1Component {
  n1: number = 0;
  n2: number = 0;
  n3: number = 0;
  n4: number = 0;
  suma: number = 0;
  resta: number = 0;
  multiplicacion: number = 0;
  promedio: number = 0;
  estado: string = '';
  mensaje: string = '';

  procesar(): void {
    if (!this.validarNotas()) {
      this.mensaje = 'Todas las notas deben estar entre 0 y 20.';
      this.limpiarResultados();
      return;
    }
    this.suma = this.n1 + this.n2 + this.n3 + this.n4;
    this.resta = this.n1 - this.n2 - this.n3 - this.n4;
    this.multiplicacion = this.n1 * this.n2 * this.n3 * this.n4;
    this.promedio = this.suma / 4;
    this.estado = this.promedio >= 13 ? 'Aprobado' : 'Desaprobado';
    this.mensaje = 'Proceso realizado correctamente.';
  }

  validarNotas(): boolean {
    return this.n1 >= 0 && this.n1 <= 20 &&
      this.n2 >= 0 && this.n2 <= 20 &&
      this.n3 >= 0 && this.n3 <= 20 &&
      this.n4 >= 0 && this.n4 <= 20;
  }

  limpiarResultados(): void {
    this.suma = 0;
    this.resta = 0;
    this.multiplicacion = 0;
    this.promedio = 0;
    this.estado = '';
  }

  limpiarFormulario(): void {
    this.n1 = 0;
    this.n2 = 0;
    this.n3 = 0;
    this.n4 = 0;
    this.mensaje = '';
    this.limpiarResultados();
  }

  maximo(): void {}
}
