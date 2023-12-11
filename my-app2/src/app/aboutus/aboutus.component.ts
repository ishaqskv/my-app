import { Component } from '@angular/core';
import { TownService } from '../townservices/town.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent {
  constructor(private townserobject: TownService, private http: HttpClient) { }
  
  cityName = this.townserobject.cityName;
  population = this.townserobject.population;
  state = this.townserobject.state;

  x: any;
  getdata() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/todos').subscribe((e) => {

      this.x = e;

    })

  }

  ngOnInit() {
    console.log('hello');
    this.getdata();
  }

  ngOnDestroy() {
    console.log('about us component says bye bye');
  }


}
