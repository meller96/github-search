import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatSelectModule } from '@angular/material/select'
import { MatCardModule } from '@angular/material/card'
import { SortByFieldPipe } from './components/search/sort-by-field.pipe'
import {MatButtonModule} from '@angular/material/button'



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule

  ],
  providers: [SortByFieldPipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
