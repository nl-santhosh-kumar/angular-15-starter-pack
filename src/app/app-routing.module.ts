import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ServiceExampleComponent } from './components/service-example/service-example.component';

const routes: Routes = [{
  path: 'heroes',
  component: HeroesListComponent
},
{
  path: 'service',
  component: ServiceExampleComponent
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
