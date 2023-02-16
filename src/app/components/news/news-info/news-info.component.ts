import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-info',
  templateUrl: './news-info.component.html',
  styleUrls: ['./news-info.component.scss']
})
export class NewsInfoComponent implements OnInit {
  newsIdentifier: string = '';
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
   this.newsIdentifier = (this.route.snapshot.paramMap.get('id')) || ''
  }
}
