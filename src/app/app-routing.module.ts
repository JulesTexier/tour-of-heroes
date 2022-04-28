import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailsComponent } from './component/hero-details/hero-details.component';
import { HeroesComponent } from './component/heroes/heroes.component';

const routes: Routes = [
  { path:'heroes', component: HeroesComponent},
  { path:'heroes/:id', component: HeroDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
