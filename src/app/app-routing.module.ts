import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent, pathMatch:'full', data: { animation: 'LandingPage' } },
  {path: 'portfolio', component: PortfolioComponent, data: { animation: 'FilterPage' }},
  {path: 'about', component: AboutComponent, data: { animation: 'AboutPage' }},
  {path: 'profiles', component: ContactComponent, data: { animation: 'ProfilePage' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
