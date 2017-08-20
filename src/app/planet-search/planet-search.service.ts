import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

@Injectable()
export class PlanetSearchService {
  planetInfo = [];
  likedPhotos = [];
  planetImage;
  planetTitle;
  planetDescription;

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

  photoLiked(likedPhoto) {
    console.log(this.planetInfo);
    const likedPlanetPhoto = {
      image: likedPhoto.links[0].href,
      title: likedPhoto.data[0].title,
      description: likedPhoto.data[0].description
    };
    this.likedPhotos.push(likedPlanetPhoto);
    console.log(this.likedPhotos);
  }
}


