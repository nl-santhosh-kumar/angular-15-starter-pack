import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ContactChildComponent } from './components/contact/contact-child/contact-child.component';
import { NewsInfoComponent } from './components/news/news-info/news-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavBarComponent,
    HomeComponent,
    NewsComponent,
    ContactComponent,
    AboutComponent,
    ContactChildComponent,
    NewsInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
