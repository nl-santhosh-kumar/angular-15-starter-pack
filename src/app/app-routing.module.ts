import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactChildComponent } from './components/contact/contact-child/contact-child.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NewsInfoComponent } from './components/news/news-info/news-info.component';
import { NewsComponent } from './components/news/news.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'news',
  component: NewsComponent
},
{
  path: 'contact',
  component: ContactComponent, 
  children: [{
    path: ':id',
    component: ContactChildComponent
  }]
},
{
  path: 'news/:id',
  component: NewsInfoComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: '**', component: PageNotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
