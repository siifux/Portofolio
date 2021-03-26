import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FashionPageComponent } from './fashion-page/fashion-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PortraitsPageComponent } from './portraits-page/portraits-page.component';
import { UrbanPageComponent } from './urban-page/urban-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, pathMatch: 'full' },
  { path: 'portraits', component: PortraitsPageComponent },
  { path: 'fashion', component: FashionPageComponent },
  { path: 'urban', component: UrbanPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
