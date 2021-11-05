import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'appScrolling';

  listNumber: Array<number> = [];
  //DECLARAR CORRETAMENTE O VALOR(TIPO, OBJETO) SENÃO O CDK VIRTUAL SCROLLING BUGA

  constructor() {
   }

  ngOnInit(): void {
    
      for(let i = 1; i <= 300; i++){ 
        this.listNumber.push(i);
      } 

  }

  actionButton(value1:any,value :any){
    if(value1 == 'btn1'){
      alert("Pegando valor direto da interpolação sendo passada na função: " + value);
    } else {
      let valor = value; 
      alert("Pegando valor pelo template variavel: " + valor.value);
    }
  }

}


/*

ng add @angular/material

*/