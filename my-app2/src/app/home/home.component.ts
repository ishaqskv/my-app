import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  topic1 = 'interpolation';

  ebinding() {
    alert('hi this is event binding function');
  }

  userdata = '';

  img = 'data:image/jpeg;base64,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';

  showdata = true;

  myarray = [
    {name:"Tom", age:42, city:"kadapa"},
    {name:"Harry", age:22, city:"kadapa"},
    {name:"Shawn", age:42, city:"kadapa"},
    {name:"Potter", age:12, city:"kadapa"}

  ];


}
