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
    {display: 'Mercury', value: 'Mercury'},
    {display: 'Venus', value: 'Venus'},
    {display: 'Earth', value: 'Earth'},
    {display: 'Mars', value: 'Mars'},
    {display: 'Jupiter', value: 'Jupiter'},
    {display: 'Saturn', value: 'Saturn'},
    {display: 'Uranus', value: 'Uranus'},
    {display: 'Neptune', value: 'Neptune'},
    {display: 'Pluto', value: 'Pluto'}
  ]

  planetFacts = [
    {
      moon: `Mercury has no moon!`,
      year: `One year on Mercury is 88 Earth days!`,
      type: `Mercury is a terrestrial planet`,
    },
    {
      moon: `Venus has no moon!`,
      year: `One year on Venus is 225 Earth days!`,
      type: `Venus is a terrestrial planet`,
    },
    {
      moon: `Earth's moon is The Moon!`,
      year: `One year on Earth is 365 days!`,
      type: `Earth is a terrestrial planet`,
    },
    {
      moon: `Mars has two moons, Phobos and Deimos!`,
      year: `One year on Mars is 687 Earth days!`,
      type: `Mars is a terrestrial planet`,
    },
    {
      moon: `Jupiter is surrounded by more than 50 moons, the four main moons are Europa, Callisto, Ganymede and Io!`,
      year: `One year on Jupiter is 4,333 Earth days!`,
      type: `Jupiter is a Jovian planet`,
    },
    {
      moon: `Saturn is surrounded by more than 50 moons, the five main moons are Lapetus, Rhea, Dione, Tethys, and Hyperion!`,
      year: `One year on Saturn is 10,759 Earth days!`,
      type: `Saturn is a Jovian planet`,
    },
    {
      moon: `Uranus is surrounded by 27 moons, the five main moons are Ariel, Miranda, Titania, Oberon, and Umbriel!`,
      year: `One year on Uranus is 30,688 Earth days!`,
      type: `Uranus is a Jovian planet`,
    },
    {
      moon: `Neptune is surrounded by 13 moons, the five main moons are Triton, Nereid, Naiad, Thalssa, and Despina!`,
      year: `One year on Neptune is 60,182 Earth days!`,
      type: `Neptune is a Jovian planet`,
    },
    {
      moon: `Pluto is surrounded by 5 moons, they are Charon, Styx, Nix, Kerberos, and Hydra!`,
      year: `One year on Pluto is 90,500 Earth days!`,
      type: `Pluto is a rocky ice planet`,
    },
  ]
  planetSelected;
  planetInfo;
  planetService: PlanetSearchService;

  constructor(planetService: PlanetSearchService) {
    this.planetService = planetService;
  }

  ngOnInit() {}

  onSubmit(submittedForm) {
    console.log(submittedForm.value.planet);
    this.planetService.onSubmit(submittedForm.value.planet);
    this.planetSelected = `Interesting Facts About ` + submittedForm.value.planet + ' :';

    if (submittedForm.value.planet === 'Mercury') {
      this.planetInfo = this.planetFacts[0];
    } else if (submittedForm.value.planet === 'Venus') {
      this.planetInfo = this.planetFacts[1];
    } else if (submittedForm.value.planet === 'Earth') {
      this.planetInfo = this.planetFacts[2];
    } else if (submittedForm.value.planet === 'Mars') {
      this.planetInfo = this.planetFacts[3];
    } else if (submittedForm.value.planet === 'Jupiter') {
      this.planetInfo = this.planetFacts[4];
    } else if (submittedForm.value.planet === 'Saturn') {
      this.planetInfo = this.planetFacts[5];
    } else if (submittedForm.value.planet === 'Uranus') {
      this.planetInfo = this.planetFacts[6];
    } else if (submittedForm.value.planet === 'Neptune') {
      this.planetInfo = this.planetFacts[7];
    } else if (submittedForm.value.planet === 'Pluto') {
      this.planetInfo = this.planetFacts[8];
    }
  }

}
