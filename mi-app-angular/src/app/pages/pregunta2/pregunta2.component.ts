import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgClass, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [FormsModule, NgIf, NgClass, DecimalPipe],
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css'
})
export class Pregunta2Component {
  nombres: string = '';
  apellidos: string = '';
  correo : string = '';
  altura: number | null = null;
  peso: number | null = null;
  edad: number | null = null;

  imc: number | null = null;
  clasificacion: string = '';
  mensaje: string = '';
  calculado: boolean = false;

  calcularIMC(): void {
    if (!this.nombres || !this.apellidos || !this.correo) {
      this.mensaje = 'Por favor complete todos los campos de texto.';
      this.calculado = false;
      return;
    }
    if (!this.altura || !this.peso || !this.edad) {
      this.mensaje = 'Por favor ingrese altura, peso y edad.';
      this.calculado = false;
      return;
    }
    if (this.altura <= 0 || this.peso <= 0 || this.edad <= 0) {
      this.mensaje = 'Altura, peso y edad deben ser valores positivos.';
      this.calculado = false;
      return;
    }

    this.imc = this.peso / (this.altura * this.altura);

    if (this.imc < 18.5) {
      this.clasificacion = 'Bajo peso';
    } else if (this.imc <= 24.9) {
      this.clasificacion = 'Peso saludable';
    } else if (this.imc <= 29.9) {
      this.clasificacion = 'Sobrepeso';
    } else {
      this.clasificacion = 'Obesidad';
    }

    this.mensaje = 'IMC calculado correctamente.';
    this.calculado = true;
  }

  limpiar(): void {
    this.nombres = '';
    this.apellidos = '';
    this.correo = '';
    this.altura = null;
    this.peso = null;
    this.edad = null;
    this.imc = null;
    this.clasificacion = '';
    this.mensaje = '';
    this.calculado = false;
  }

  get claseClasificacion(): string {
    if (!this.clasificacion) return '';
    const mapa: Record<string, string> = {
      'Bajo peso': 'bajo-peso',
      'Peso saludable': 'saludable',
      'Sobrepeso': 'sobrepeso',
      'Obesidad': 'obesidad'
    };
    return mapa[this.clasificacion] ?? '';
  }
}
