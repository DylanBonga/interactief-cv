import { Component, Input } from '@angular/core';

@Component({
  selector: 'timeline',
  styleUrls: ['./timeline.component.css'],
  templateUrl: './timeline.component.html',
  providers: []
})

export class TimelineComponent {
  NEXTCollapsed : boolean = true;
  SACollapsed : boolean = true;
  TUTCollapsed : boolean = true;


  toggleNEXT(){
    this.NEXTCollapsed = !this.NEXTCollapsed;
  }
  toggleSA(){
    this.SACollapsed = !this.SACollapsed;
  }
  toggleTUT(){
    this.TUTCollapsed = !this.TUTCollapsed; 
  }

}
