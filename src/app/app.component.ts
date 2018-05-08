import { Component } from '@angular/core';

import { Address } from '../interfaces/address.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name: string;
  address: Address;
  showSkill :boolean;
  skills : string[];
  constructor() {
      this.name = 'test2';
      this.address = {
          province: '福建',
          city: '厦门'
      };
      this.showSkill = true;
      this.skills = ['AngularJS 1.x', 'Angular 2.x', 'Angular 4.x'];
  }

  toggleSkill(){
    this.showSkill = !this.showSkill;
  }
  addSkill(skill:string){
    let skillStr = skill.trim();
    if(this.skills.indexOf(skillStr) === -1){
      this.skills.push(skillStr);
    }
  }
 
}
