import { Routes } from '@angular/router';
import { Login } from './login/login.component';
import { Dashboard } from './dashboard/dashboard.component';
import { RegistrarTarea } from './registrar-tarea/registrar-tarea';
import { MainLayoutComponent } from './layouts/main-layout.component';
import { detalleTarea } from './detalle-tarea/tarea.component';
import { Proyecto } from './registrar-proyecto/proyecto.component';
import { Actividades } from './registrar-actividad/actividad.component';
import { userRegister } from './register-user/register-user.component';
import { AuthGuard } from './authGuard/auth';


export const routes: Routes = [

    {
    path: '',
    component: MainLayoutComponent,// 📦 Este es el layout que incluye el sidebar
    canActivate: [AuthGuard], 
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'registrar-tarea', component: RegistrarTarea },
      { path: 'detalle-tarea', component: detalleTarea},
      { path: 'registrar-proyecto', component: Proyecto},
      { path: 'registrar-actividad', component:Actividades}
      // aquí puedes agregar más vistas que sí usan sidebar
    ]
  },
  {path: 'registerUser', component: userRegister},
  { path: 'login', component: Login },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];