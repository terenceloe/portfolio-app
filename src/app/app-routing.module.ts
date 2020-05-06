import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'portfolio', component: PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
