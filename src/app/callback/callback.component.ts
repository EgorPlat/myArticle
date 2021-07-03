import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})

export class CallbackComponent implements OnInit {

  constructor() { }
  
  public collectionOfCallbackWays: CallBacks[] = [
    {
     name: "E-mail",
     src: "https://freepngimg.com/thumb/iphone/64863-outlook.com-computer-email-icons-png-file-hd.png",
     address: "test-email@gmail.com"
    },
    {
     name: "Телефон",
     src: "https://images.ru.prom.st/423630264_423630264.jpg?PIMAGE_ID=423630264",
     address: "+79693463619"
    },
    {
     name: "Инстаграмм",
     src: "https://cdn.stripst.com/cdn/panelImages/c/e/3/ce30012bfb9712193c09e85c764ec67a-thumb",
     address: "@instagrammID"
    }
  ];

  ngOnInit(): void {
  }

}
interface CallBacks {
  name: string,
  src: string,
  address: string
}
