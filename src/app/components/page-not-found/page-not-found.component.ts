import { Component, Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  
})
export class PageNotFoundComponent  {
  name: string = ''
  constructor(
    private route: ActivatedRoute,
  ) {}
}
