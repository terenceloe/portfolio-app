import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectDataService } from './services/project-data.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsService } from './services/skills.service';
import { GenericModule } from './generic/generic.module';
import { GenericTagService } from './generic/services/generic-tag.service';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material.module';
import { SidenavListComponent } from './navbar/sidenav-list/sidenav-list.component';
import { DialogContent } from './project-card/project-card.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    HomeComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    SidenavListComponent,
    DialogContent
  ],
  entryComponents: [DialogContent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    GenericModule,
    PopoverModule.forRoot(),
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [
    ProjectDataService,
    SkillsService,
    GenericTagService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
