import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent, pathMatch:'full', data: { routeIdx: 0 }},
  {path: 'portfolio', component: PortfolioComponent, data: { routeIdx: 1 }},
  {path: 'about', component: AboutComponent, data: { routeIdx: 2 }},
  {path: 'profiles', component: ContactComponent, data: { routeIdx: 3 }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
