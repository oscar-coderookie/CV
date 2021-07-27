import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-galleryrenders',
  templateUrl: './galleryrenders.component.html',
  styleUrls: ['./galleryrenders.component.scss']
})
export class GalleryrendersComponent implements OnInit {

   @Input() renders:any;

   

  constructor( ) { }

  ngOnInit(): void {
    
  }

}
