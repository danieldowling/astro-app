import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlanetPictureComponent } from './planet-picture/planet-picture.component';
import { PlanetSearchComponent } from './planet-search/planet-search.component';
import { PlanetPictureListComponent } from './planet-picture-list/planet-picture-list.component';
import { PlanetSearchService } from './planet-search/planet-search.service';
import { TabsComponent } from './tabs/tabs.component';
import { PlanetLikedComponent } from './planet-liked/planet-liked.component';
import { PlanetLikedPictureComponent } from './planet-liked-picture/planet-liked-picture.component';

const routes = [
  { path: '', component: PlanetSearchComponent },
  { path: 'search', component: PlanetSearchComponent },
  { path: 'liked', component: PlanetLikedComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlanetPictureComponent,
    PlanetSearchComponent,
    PlanetPictureListComponent,
    TabsComponent,
    PlanetLikedComponent,
    PlanetLikedPictureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PlanetSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
