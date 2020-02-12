import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interactief-cv';

  cvModeBool : boolean = false;
  cvMode(){
    this.cvModeBool = !this.cvModeBool;
    // Add if-statement
    if(this.cvModeBool == true){
      document.getElementById('welcome-o').style.opacity = "0.9";
      document.getElementById('middle-o').style.opacity = "0.9";
      document.getElementById('edu-o').style.opacity = "0.9";
      document.getElementById('muzikale-o').style.opacity = "0.9";
      document.getElementById('software-o').style.opacity = "0.9";
      document.getElementById('ling-o').style.opacity = "0.9";
      document.getElementById('bye-o').style.opacity = "0.9";
    }else{
      document.getElementById('welcome-o').style.opacity = "0";
      document.getElementById('middle-o').style.opacity = "0";
      document.getElementById('edu-o').style.opacity = "0";
      document.getElementById('muzikale-o').style.opacity = "0";
      document.getElementById('software-o').style.opacity = "0";
      document.getElementById('ling-o').style.opacity = "0";
      document.getElementById('bye-o').style.opacity = "0";
    }
  }
}
