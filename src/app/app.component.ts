import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{name}}</h1>
  
  <p><i>{{name}} is at {{street}} in {{city}} in the {{region}} region</i></p>
  <br/>

  <fieldset>
    <label>Name:</label><br/>
    <input [(ngModel)]="name"><br/>
  </fieldset>

  <label><input type="checkbox" [(ngModel)]="hideAddress">Hide Address</label>
  <div [hidden] = "hideAddress">
    <fieldset>
      <label>Street: <input [(ngModel)]="street"></label>
    </fieldset>
    <fieldset>
      <label>City: <input [(ngModel)]="city"></label>
    </fieldset>
    <fieldset>
      <label>Region:</label>
      <select [(ngModel)] = "region">
        <option>East</option>
        <option>North</option>
        <option>South</option>
        <option>West</option>
      </select>
    </fieldset>
  </div>
`
,
})
export class AppComponent {
  name = 'Alex Smith';
  street = 'Myra';
  city = 'Obukhiv';
  region = 'North';
  hideAddress = false;
}
