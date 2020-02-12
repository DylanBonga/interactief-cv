import { Component, Input } from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
  providers: []
})

export class HomeComponent{
  NEXTCollapsed : boolean = true;
  SACollapsed : boolean = true;
  TUTCollapsed : boolean = true;
  LINGCollapsed : boolean = true;


  toggleNEXT(){
    this.NEXTCollapsed = !this.NEXTCollapsed;
  }
  toggleSA(){
    this.SACollapsed = !this.SACollapsed;
  }
  toggleTUT(){
    this.TUTCollapsed = !this.TUTCollapsed;
  }
  toggleLING(){
    this.LINGCollapsed = !this.LINGCollapsed;
  }
}
