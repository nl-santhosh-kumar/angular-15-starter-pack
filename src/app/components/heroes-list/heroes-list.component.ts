import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit{
 name: string = '';
 constructor(
  private route: ActivatedRoute,
) {}
ngOnInit() {
  this.route.url.subscribe(params => {
    this.name = params[0].path
  })
}
}
