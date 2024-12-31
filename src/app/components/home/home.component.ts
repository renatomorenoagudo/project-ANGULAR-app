import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //meuBooleano = false;
  name = "Renato";
  idButton = "botao";

  submit(){
    console.log("video")
  }


  //atualizaBooleano(valor: boolean){
   // this.meuBooleano = valor;
  }


