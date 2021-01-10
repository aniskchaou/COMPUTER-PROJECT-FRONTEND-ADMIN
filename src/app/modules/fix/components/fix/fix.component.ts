import { Component, OnInit } from '@angular/core';
import { URLLoader } from './../../../../configs/URLLoader';

@Component({
  selector: 'app-fix',
  templateUrl: './fix.component.html',
  styleUrls: ['./fix.component.css']
})
export class FixComponent extends URLLoader implements OnInit {

  showsummary:boolean=false
  showgraphic:boolean=false
  
  constructor() {
    super()
   }
  

ngOnInit() {
 super.loadScripts();
}


}
