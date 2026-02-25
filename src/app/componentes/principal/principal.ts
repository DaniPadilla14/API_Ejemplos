import { Component, OnInit } from '@angular/core';
import { AuthGoogle } from '../../servicios/auth-google';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal implements OnInit {
  perfil: any;

  constructor(private authGoogle : AuthGoogle, private ruta: Router) { }

  ngOnInit(): void {
      this.perfil = this.authGoogle.getPerfil();
      console.log(this.perfil);//muestra el perfil del usuario en la conola
  }

  cerrarSesion(){
    this.authGoogle.logout();
    this.ruta.navigate(['login']);
  }

}
