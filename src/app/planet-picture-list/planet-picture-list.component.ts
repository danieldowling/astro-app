import { Component, OnInit } from '@angular/core';
import { PlanetSearchService } from '../planet-search/planet-search.service';
import { PlanetPictureComponent } from '../planet-picture/planet-picture.component';

@Component({
  selector: 'app-planet-picture-list',
  templateUrl: './planet-picture-list.component.html',
  styleUrls: ['./planet-picture-list.component.css']
})
export class PlanetPictureListComponent implements OnInit {
planetInfo: Object[] = this.planetService.planetInfo;

  constructor(public planetService: PlanetSearchService) {

  }

  ngOnInit() {
  }

}
