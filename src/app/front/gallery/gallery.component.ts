import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgImageSliderModule } from 'ng-image-slider';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, TranslateModule, NgImageSliderModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  imageSize = {
    width: '100%',
    height: "auto"
  };

  imageObject: Array<object> = [{
    image: 'assets/img/slider-1.jpg',
    thumbImage: 'assets/img/slider-1.jpg',
  }, {
    image: 'assets/img/slider-2.jpg',
    thumbImage: 'assets/img/slider-2.jpg',
  }, {
    image: 'assets/img/slider-3.jpg',
    thumbImage: 'assets/img/slider-3.jpg',
  }
  ];
}
