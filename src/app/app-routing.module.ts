import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NestedTableComponent } from './nested-table/nested-table.component';
import { SingleDatatableComponent } from './single-datatable/single-datatable.component';
import { ShowTableGroupComponent } from './show-table-group/show-table-group.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/table', pathMatch: 'full'

  },
  {
    path: 'heroes', component: HeroesComponent
  },

  {
    path: 'dashboard', component: DashboardComponent
  },
  { path: 'detail/:id', component: HeroDetailComponent },
  {
    path: 'table', component: NestedTableComponent
  },
  {
    path: 'table2', component: SingleDatatableComponent
  },
  {
    path: 'table3', component: ShowTableGroupComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
