import { Component, OnInit, Input } from '@angular/core';
import { PlanetSearchService } from '../planet-search/planet-search.service';

@Component({
  selector: 'app-planet-liked',
  templateUrl: './planet-liked.component.html',
  styleUrls: ['./planet-liked.component.css']
})
export class PlanetLikedComponent implements OnInit {
  likedList: Object[] = this.planetService.likedPhotos;
  constructor(public planetService: PlanetSearchService) { }

  ngOnInit() {
  }

}
