import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'cube'
})

export class CubePipe implements PipeTransform{
    transform(val:number){
        return val*val*val;
    }
}
