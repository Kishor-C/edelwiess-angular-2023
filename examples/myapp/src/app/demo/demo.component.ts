import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  username : string = "Kishor";
  gender : string = "Male";
  salary : number = 50000;
  dob : string = "1988-11-24"; // ISO format : yyyy-MM-dd
  items = ["Laptop", "Shoes", "Mobile"];
  // display the user details in a table format using <table>
  users = [ 
    {id: 100, name: "Alex", age: 35}, 
    {id: 200, name: "Bruce", age: 40},
    {id: 300, name: "Charles", age: 50} 
  ];
  status = false;
  toggle() : void {
    this.status = !this.status;
  }
  handleClick(x: string) {
    this.username = x;
  }
}
