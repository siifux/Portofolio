import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './home-page/home-page.component';
import { PortraitsPageComponent } from './portraits-page/portraits-page.component';
import { FashionPageComponent } from './fashion-page/fashion-page.component';
import { UrbanPageComponent } from './urban-page/urban-page.component';
import { GalleryComponentComponent } from './gallery-component/gallery-component.component';
import { PortraitsComponentComponent } from './portraits-component/portraits-component.component';
import { FashionComponentComponent } from './fashion-component/fashion-component.component';
import { UrbanComponentComponent } from './urban-component/urban-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    PortraitsPageComponent,
    FashionPageComponent,
    UrbanPageComponent,
    GalleryComponentComponent,
    PortraitsComponentComponent,
    FashionComponentComponent,
    UrbanComponentComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
