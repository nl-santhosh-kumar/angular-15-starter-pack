import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.scss']
})
export class ServiceExampleComponent implements OnInit {
  name: string = ''

  constructor(
    private route: ActivatedRoute,
  ) {}
  ngOnInit() {
    this.route.url.subscribe(params => {
      this.name = params[0].path
    })
  }
}
