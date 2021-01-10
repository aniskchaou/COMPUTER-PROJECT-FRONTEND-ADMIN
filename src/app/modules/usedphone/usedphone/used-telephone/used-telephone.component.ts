import { Component, OnInit } from '@angular/core';
import { URLLoader } from './../../../../configs/URLLoader';

@Component({
  selector: 'app-used-telephone',
  templateUrl: './used-telephone.component.html',
  styleUrls: ['./used-telephone.component.css']
})
export class UsedTelephoneComponent extends URLLoader implements OnInit {

  showsummary:boolean=false
  showgraphic:boolean=false
  
  constructor() {
    super()
   }
  

ngOnInit() {
 super.loadScripts();
}


}
