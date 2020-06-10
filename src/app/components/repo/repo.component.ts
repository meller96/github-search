import { Component, OnInit } from '@angular/core';
import { RepoService } from './repo.service'

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {

  data = this.repoService.data

  constructor(private repoService: RepoService) { }

  ngOnInit() {
    console.log(this.data)
  }

}
