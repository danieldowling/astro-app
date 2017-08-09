import { Component, OnInit } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { PlanetSearchService } from './planet-search.service';

@Component({
  selector: 'app-planet-search',
  templateUrl: './planet-search.component.html',
  styleUrls: ['./planet-search.component.css']
})
export class PlanetSearchComponent implements OnInit {
   planetOptions = [
    {display: 'Mercury', value: 'mercury'},
    {display: 'Venus', value: 'venus'},
    {display: 'Earth', value: 'earth'},
    {display: 'Mars', value: 'mars'},
    {display: 'Jupiter', value: 'jupiter'},
    {display: 'Saturn', value: 'saturn'},
    {display: 'Uranus', value: 'uranus'},
    {display: 'Neptune', value: 'neptune'},
    {display: 'Pluto', value: 'pluto'}
  ]
  planetService: PlanetSearchService;

  constructor(planetService: PlanetSearchService) {
    this.planetService = planetService;
  }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    console.log(submittedForm.value.planet);
    this.planetService.onSubmit(submittedForm.value.planet);
  }

}
