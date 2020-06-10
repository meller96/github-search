import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Subject, throwError } from 'rxjs'
import { map, debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators'
import { SearchService } from './search.service'
import { SortByFieldPipe } from './sort-by-field.pipe'
import { RepoService } from '../repo/repo.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  constructor(private router: Router, private searchService: SearchService, private sortByField: SortByFieldPipe, private repoService: RepoService) { }

  public loading: boolean
  public searchTerm = new Subject<string>()
  public searchResults: any
  public errorMessage: any
  public searchForm = new FormGroup({
    search: new FormControl('', Validators.required)
  })
  private sortingField: string


  ngOnInit() {
    this.search();
  }

  ngOnDestroy() {
    this.searchTerm.unsubscribe();
  }

  public search() {
    this.searchTerm.pipe(
      map((i: any) => {
        return i.currentTarget.value
      }),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => {
        this.loading = true
        return this.searchService._searchEntries(term)
      }),
      catchError((err) => {
        console.log(err)
        this.loading = false
        this.errorMessage = err.message
        return throwError(err)
      })
    ).subscribe(v => {
      this.loading = false
      this.searchResults = v
    })
  }

  private sortBy = (type) => {
    this.sortingField = type
  }

  goToRepo(data): void {
    this.repoService.data = { ...data };
    this.router.navigate(['repo']);
  }
}
