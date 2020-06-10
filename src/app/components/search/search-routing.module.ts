import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component'
import { RepoComponent } from '../repo/repo.component';


const routes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'repo', component: RepoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SearchRoutingModule { }
