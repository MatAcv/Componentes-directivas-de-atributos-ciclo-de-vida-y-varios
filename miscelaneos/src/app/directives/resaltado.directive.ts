import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") color : string ="";

  constructor(private el : ElementRef) {



    console.log("directiva llamada");


   }

   @HostListener('mouseenter') mouseEntro(){

    this.resaltar( this.color || 'yellow');
   }
   @HostListener('mouseleave') mouseSalio(){

    this.resaltar( null);
    }


    private resaltar( color: any){

      this.el.nativeElement.style.backgroundColor =color;
    }

}
