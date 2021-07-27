import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-iiea-gallery',
  templateUrl: './iiea-gallery.component.html',
  styleUrls: ['./iiea-gallery.component.scss']
})
export class IieaGalleryComponent implements OnInit {
  @Input() iieaImages: any;

  constructor() { }

  ngOnInit(): void {
  }

}
