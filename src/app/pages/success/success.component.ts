import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {
  public titular: string = '¡Registro exitoso!'; 
  public subTitulo: string = 'Enhorabuena, te has registrado satisfactoriamente'; 
}
