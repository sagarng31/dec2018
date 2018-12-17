import { Component, ViewChild } from '@angular/core';
import { ViewChildComm } from './viewchild.component';

@Component({
    selector:'parent-comp',
    templateUrl:'./parent.component.html'
})

export class parentComm{
    title='In parent';
    myOrg="Cuelogic";

    @ViewChild(ViewChildComm) myChild: ViewChildComm=new ViewChildComm();

    public myCurrentOrg;

    receiveInfo(data){
        alert(data);
        this.myCurrentOrg=data;
    }

    sendDatatoViewChild(){
        this.myChild.message="I am from parent Component"
    }
}
