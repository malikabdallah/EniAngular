import { Directive, ElementRef,HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBordure]'
})
export class BordureDirective {


  @HostListener('click')
  toggleBorders(){
    alert("click");
  }
  
  constructor(
    private el:ElementRef,
    private renderer: Renderer2
  ){
    this.renderer.setStyle(
      this.el.nativeElement,
      'border',
      '1px solid black'
    );
    /*
    this.el.nativeElement.addEventListener('click',()=>{alert("click")});
    cependant cela implique de supprimer ces element lorsque la directive est supprimer
    pou r eviter les fuites de memoire ,best practice ne pas modifier directement le dom
    angular met a dispo hostlistener , on peut metre de la logic execute uniquement que lorsque l event 
    declenche
    il prend en param le nom de l event
    */
  }

}
