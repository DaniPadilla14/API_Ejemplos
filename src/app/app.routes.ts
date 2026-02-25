import { Routes } from '@angular/router';
import { Login } from './componentes/login/login';
import { Principal } from './componentes/principal/principal';

export const routes: Routes = [
{
    path: 'login',
    component:Login
},

{

    path: 'principal',
    component:Principal
},

{

    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
}

];
