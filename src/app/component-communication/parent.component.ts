import { Component } from '@angular/core';

@Component({
    selector:'parent-comp',
    templateUrl:'./parent.component.html'
})

export class parentComm{
    title='In parent';
    myOrg="Cuelogic";

    public myCurrentOrg;

    receiveInfo(data){
        alert(data);
        this.myCurrentOrg=data;
    }
}
