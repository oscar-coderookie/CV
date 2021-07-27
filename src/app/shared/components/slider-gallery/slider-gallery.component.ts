import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-gallery',
  templateUrl: './slider-gallery.component.html',
  styleUrls: ['./slider-gallery.component.scss']
})
export class SliderGalleryComponent implements OnInit {
  @Input() images:any;

  constructor() { }

  ngOnInit(): void {
  }

}
