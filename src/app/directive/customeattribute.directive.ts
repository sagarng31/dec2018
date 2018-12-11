import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector:'[customover]'
})

export class CustomOverDirective{
    @Input() myColor:string;
    constructor(private el:ElementRef){
        this.el.nativeElement.style.backgroundColor='red';
    }
    @HostListener('mouseenter') onmouseenter(){
        this.el.nativeElement.style.backgroundColor= this.myColor;
    }
    @HostListener('mouseleave') onmouseleave(){
        this.el.nativeElement.style.backgroundColor="red";
    }
}
