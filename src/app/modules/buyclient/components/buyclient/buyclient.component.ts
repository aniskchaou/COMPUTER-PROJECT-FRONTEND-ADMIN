import { Component, OnInit } from '@angular/core';
import { URLLoader } from './../../../../configs/URLLoader';

@Component({
  selector: 'app-buyclient',
  templateUrl: './buyclient.component.html',
  styleUrls: ['./buyclient.component.css']
})
export class BuyclientComponent extends URLLoader implements OnInit {

  showsummary:boolean=false
  showgraphic:boolean=false
  
  constructor() {
    super()
   }
  

ngOnInit() {
 super.loadScripts();
}


}
