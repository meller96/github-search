import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component'


const routes: Routes = [
  { path: "", loadChildren: () => import('./components/search/search.module').then(n => n.SearchModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
