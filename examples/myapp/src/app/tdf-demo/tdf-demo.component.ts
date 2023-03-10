import { Component } from '@angular/core';

@Component({
  selector: 'app-tdf-demo',
  templateUrl: './tdf-demo.component.html',
  styleUrls: ['./tdf-demo.component.css']
})
export class TdfDemoComponent {

  handleSubmit(userInfo: any) {
    console.log(userInfo.user);
    console.log(userInfo.pass);
  }
}
