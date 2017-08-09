import { Component, OnInit, Input } from '@angular/core';
import { PlanetSearchService } from '../planet-search/planet-search.service';

@Component({
  selector: 'app-planet-picture',
  templateUrl: './planet-picture.component.html',
  styleUrls: ['./planet-picture.component.css']
})
export class PlanetPictureComponent implements OnInit {
  @Input() planetInfo;

  constructor(planetService: PlanetSearchService) {}

  ngOnInit() {
  }

}
