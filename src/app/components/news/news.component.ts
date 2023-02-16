import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  newsList = [
    {
      id: 'News1',
      message: 'Phasellus maximus, mauris vitae scelerisque hendrerit, odio ipsum fermentum dui, convallis vulputate lacus sem quis diam. Integer ultrices efficitur metus et cursus. Praesent malesuada nibh at elementum mattis. Donec vitae enim et neque feugiat congue. Curabitur tempor sollicitudin sapien non lobortis. Sed non magna ac nisi condimentum accumsan sed at ligula. Suspendisse vel urna molestie, rutrum sapien a, maximus neque. Sed faucibus lobortis pharetra. Maecenas pulvinar lectus eu feugiat fermentum.'
    },
    {
      id: 'News2',
      message: 'din sapien non lobortis. Sed non magna ac nisi condimentum accumsan sed at ligula. Suspendisse vel urna molestie, rutrum sapien a, maximus neque. Sed faucibus lobortis pharetra. Maecenas pulvinar lectus eu feug'
    }
  ]

  constructor(private router: Router) { }

  /**
   * a method to route the user to news page (selected)
   * 
   */
  onNewsLinkClicked(id =''): void {
    this.router.navigateByUrl('news/' + id);
  }
}
