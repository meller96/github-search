import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of, empty } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  public baseUrl = 'https://api.github.com/search/repositories'
  public searchResults: any

  //request to api

  public searchEntries(term): Observable<any> {
    if (term === '') {
      return of(null)
    } else {
      let params = { q: term }
      return this.httpClient.get(this.baseUrl, { params }).pipe(
        map(response => {
          return this.searchResults = response['items']
        })
      )
    }
  }

  //return result

  public _searchEntries(term) {
    return this.searchEntries(term);
  }

}
