import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario='';
  senha='';

  constructor() {
  }

  ngOnInit(): void {}

  login(){
    console.log(this.usuario)
    console.log(this.senha)
  }
}

