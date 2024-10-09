import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});  // Inicialización directa
  public titular: string = 'Date de alta'; 
  public subTitulo: string = ' y accede a la página de success'; 

  constructor(private fb: FormBuilder, private router: Router) {}// Inyecta FormBuilder para construir el formulario y Router para la navegación

  ngOnInit() {
    // Configura el formulario reactivo con validación para email y contraseña
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {// Si el formulario es válido, redirige a la página de éxito
      this.router.navigate(['/success']);
    }
  }
   // Verifica si el campo de email es inválido y ha sido tocado
  isEmailInvalid(): boolean {
    const emailControl = this.loginForm.get('email');
    return emailControl ? emailControl.invalid && emailControl.touched : false;
  }
   // Verifica si el campo de contraseña es inválido y ha sido tocado
  isPasswordInvalid(): boolean {
    const passwordControl = this.loginForm.get('password');
    return passwordControl ? passwordControl.invalid && passwordControl.touched : false;
  }
  
}
