import { Injectable } from '@angular/core';
import {CanLoad, Route, Router, UrlSegment, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UsuarioService} from "./usuario/usuario.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {
  constructor(private usuarioSevice: UsuarioService,
              private router: Router) {
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.usuarioSevice.estaLogado()){
      this.router.navigate(['animais']);
      return false;
    } else {
      return true;
    }
  }
}
