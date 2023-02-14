import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
  currentClasses: Record<string, string> = {};
  currentStyles: Record<string, string> = {};
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      'default': 'paragraph'
    };
  }
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'margin-top': '10px;'
    };
  }

  ngOnInit() {
    this.setCurrentClasses();
    this.setCurrentStyles()
  }

}
