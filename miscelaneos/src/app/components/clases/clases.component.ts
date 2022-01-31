import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  alert : string ='alert-danger';

  ejecutar : boolean = false;

  dots : string = '';

  dotsFinished = false;


  propiedades = {
    danger : true
  };
  constructor() { }

  ngOnInit(): void {
  }


 async save(){




    this.ejecutar = true;


this.setDots();




    setTimeout( ()=>{

      this.ejecutar = false;

    },10000);



  }


  setDots(){


    for(let i = 0; i <4 ; i++){
      setTimeout( ()=>{

          this.dots += '.'
          if(this.dots==='....'){
            this.dots = ''
            this.dotsFinished = true;
          }

        },1000 * i);


      }


  }

  }



