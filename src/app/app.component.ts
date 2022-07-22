import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'angular ivy';

  header=['brand','model','price'];
  rows=[
    {
      brand:'audi',
      model: 'A5',
      price:'2000',
    },
    {
      brand:'bmw',
      model: 'q2',
      price:'3000'
    },
    {
      brand:'tata',
      model: 'nano',
      price:'10'
    }
  ]

}

