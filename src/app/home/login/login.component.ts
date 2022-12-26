import {Component} from '@angular/core';
import {AutenticacaoService} from "../../autenticacao/autenticacao.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = '';
  senha = '';

  constructor(private autenticacaoService: AutenticacaoService,
              private router: Router) {

  }

  ngOnInit(): void {
  }

  login() {
    this.autenticacaoService.autenticar(this.usuario, this.senha).subscribe(()=>{
      this.router.navigate(['animais'])
    }, (error) =>{
      alert("Usuário ou senha inválido")
      console.log(error)
    })

  }
}

