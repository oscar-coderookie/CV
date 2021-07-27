import { Component, OnInit } from '@angular/core';
import { RendersService } from 'src/app/shared/services/renders.service';

@Component({
  selector: 'app-productdesign',
  templateUrl: './productdesign.component.html',
  styleUrls: ['./productdesign.component.scss'],
})
export class ProductdesignComponent implements OnInit {
  arrayRenders: any[] = [];

  constructor(private rendersService: RendersService) {}

  ngOnInit(): void {
    this.getProjects();
  }
  getProjects() {
    this.rendersService.getProjects().subscribe((data) => {
      this.arrayRenders = []
      data.forEach((element: any) => {
        this.arrayRenders.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        });
        console.log(element.payload.doc.id)
      });
      console.log(this.arrayRenders)
    });
  }
}
