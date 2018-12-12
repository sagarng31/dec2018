import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CountriesService{
    constructor(private http: HttpClient){

    }
    public countryInfo: any;
    public getCountries(){
        const url='https://restcountries.eu/rest/v2/all'

        this.http.get(url).subscribe(res => {
            this.countryInfo = res
        },
        err => {
            this.countryInfo = err
        })
        return this.countryInfo;
    }
}

