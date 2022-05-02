import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public searchItem: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {

    // getting data from URL if given directly

    this.route.params.subscribe((params) => {
      if (params['searchItem']) this.searchItem = params['searchItem'];
    });
  }

  search(): void {
    if (this.searchItem) {
      this.router.navigateByUrl('/search/' + this.searchItem);
    }
  }
}
