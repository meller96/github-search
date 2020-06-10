import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { SearchRoutingModule } from './search-routing.module'
import { SearchComponent } from './search.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatSelectModule } from '@angular/material/select'
import { MatCardModule } from '@angular/material/card'
import { ApplicationPipesModule } from '../../application-pipes.module'
import { RepoComponent } from '../repo/repo.component'
import { MatButtonModule } from '@angular/material/button'



@NgModule({
    imports: [
        SearchRoutingModule,
        ReactiveFormsModule,
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatListModule,
        MatSelectModule,
        ApplicationPipesModule,
        MatCardModule,
        MatButtonModule
    ],
    declarations: [
        SearchComponent,
        RepoComponent
    ]
})

export class SearchModule { }