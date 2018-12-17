import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'child-comp',
    templateUrl:'./child.component.html'
})

export class childComm{
    title='In child';
    public name='Sagar Patil';
    @Input() name1='Sagar Patil, from Child Component';

    @Output() send:EventEmitter<any>=new EventEmitter<any>();

    public sendInformation(){
        this.send.emit(this.name1);
    }
}
