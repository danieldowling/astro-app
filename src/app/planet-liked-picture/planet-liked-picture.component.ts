import { Component, OnInit, Input } from '@angular/core';
import { PlanetLikedComponent } from '../planet-liked/planet-liked.component';
import { PlanetSearchService } from '../planet-search/planet-search.service';

@Component({
  selector: 'app-planet-liked-picture',
  templateUrl: './planet-liked-picture.component.html',
  styleUrls: ['./planet-liked-picture.component.css']
})
export class PlanetLikedPictureComponent implements OnInit {
  @Input() likedPhotos;
  constructor(public planetService: PlanetSearchService) { }

  ngOnInit() {
  }

}
