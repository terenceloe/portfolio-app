import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { animation: 'FilterPage' },
  },
  { path: 'about', component: AboutComponent, data: { animation: 'HomePage' } },
  {
    path: 'profiles',
    component: ContactComponent,
    data: { animation: 'AboutPage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
