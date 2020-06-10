import { SortByFieldPipe } from './components/search/sort-by-field.pipe';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        SortByFieldPipe
    ],
    exports: [
        SortByFieldPipe
    ]
})
export class ApplicationPipesModule { }