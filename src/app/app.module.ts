import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlanetPictureComponent } from './planet-picture/planet-picture.component';
import { PlanetSearchComponent } from './planet-search/planet-search.component';
import { PlanetPictureListComponent } from './planet-picture-list/planet-picture-list.component';
import { PlanetSearchService } from './planet-search/planet-search.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlanetPictureComponent,
    PlanetSearchComponent,
    PlanetPictureListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [PlanetSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
