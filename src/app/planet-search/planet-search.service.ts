import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

@Injectable()
export class PlanetSearchService {
  planetInfo = [];

  constructor(private http: Http) { }
  onSubmit(submittedForm) {
    const params = new URLSearchParams();
    params.set('planet', submittedForm);
    return this.http.get(`https://planetpic.herokuapp.com/images/`, { search: params })
    .subscribe(res => {
        console.log(res);
        this.planetInfo = res.json().collection.items;
        console.log(this.planetInfo);
    });
  }
}
