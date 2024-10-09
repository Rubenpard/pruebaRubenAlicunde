import { Route } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SuccessComponent } from './pages/success/success.component';

export const routes: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  // El redireccionamiento debe coincidir completamente con la URL vacía ('') para redirigir a 'login'
  { path: 'login', component: LoginComponent },
  { path: 'success', component: SuccessComponent },
];
