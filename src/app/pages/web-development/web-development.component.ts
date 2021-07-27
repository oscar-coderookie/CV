import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.scss'],
})
export class WebDevelopmentComponent implements OnInit {
  arrayImagesGot: any[] = [
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-curriculum-oscar.appspot.com/o/PORTFOLIO%2FWEB-DEVELOPMENT%2FGOT-ANGULAR%2FGOT-1.jpg?alt=media&token=c2cd1997-f18d-4d33-aac3-3e6d708ff4e7',
      
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-curriculum-oscar.appspot.com/o/PORTFOLIO%2FWEB-DEVELOPMENT%2FGOT-ANGULAR%2FGOT-2.jpg?alt=media&token=42c91a8d-d134-4b6c-b54a-a3f47845406a'
      
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-curriculum-oscar.appspot.com/o/PORTFOLIO%2FWEB-DEVELOPMENT%2FGOT-ANGULAR%2FGOT-3.jpg?alt=media&token=f0bedf85-d9eb-4017-bac7-cb80dd0d41eb'
      
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-curriculum-oscar.appspot.com/o/PORTFOLIO%2FWEB-DEVELOPMENT%2FGOT-ANGULAR%2FGOT-4.jpg?alt=media&token=973079d2-0bc3-4c19-b2c7-7f25561ae641'
      
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-curriculum-oscar.appspot.com/o/PORTFOLIO%2FWEB-DEVELOPMENT%2FGOT-ANGULAR%2FGOT-5.jpg?alt=media&token=edc14e52-b956-42f1-9a20-0d1307f4e1a9'
     
    },
  ];

  arrayImagesIiea: any[] = [
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-curriculum-oscar.appspot.com/o/PORTFOLIO%2FWEB-DEVELOPMENT%2FIIEA-NODEJS%2FIIEA-1.jpg?alt=media&token=a81ac6da-f61c-4d69-9dda-dc2d23880eae',
      
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-curriculum-oscar.appspot.com/o/PORTFOLIO%2FWEB-DEVELOPMENT%2FIIEA-NODEJS%2FIIEA-2.jpg?alt=media&token=3d753698-e1a8-44bc-be3d-b3992147c75d'
      
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-curriculum-oscar.appspot.com/o/PORTFOLIO%2FWEB-DEVELOPMENT%2FIIEA-NODEJS%2FIIEA-3.jpg?alt=media&token=3b8aa9b6-f670-4eee-865e-36fb3bd3f9d4'
      
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-curriculum-oscar.appspot.com/o/PORTFOLIO%2FWEB-DEVELOPMENT%2FIIEA-NODEJS%2FIIEA-4.jpg?alt=media&token=29e94b52-a811-4810-a8c7-11c94d4e2659'
      
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-curriculum-oscar.appspot.com/o/PORTFOLIO%2FWEB-DEVELOPMENT%2FIIEA-NODEJS%2FIIEA-5.jpg?alt=media&token=90d0f534-5e93-4574-ae4a-07a81fad032d'
    },


  ]


  constructor() {}

  ngOnInit(): void {}
}
