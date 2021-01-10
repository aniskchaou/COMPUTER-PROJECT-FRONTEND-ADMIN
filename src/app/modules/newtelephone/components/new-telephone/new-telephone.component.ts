import { Component, OnInit } from '@angular/core';
import { URLLoader } from './../../../../configs/URLLoader';

@Component({
  selector: 'app-new-telephone',
  templateUrl: './new-telephone.component.html',
  styleUrls: ['./new-telephone.component.css']
})
export class NewTelephoneComponent extends URLLoader implements OnInit {

  showsummary:boolean=false
  showgraphic:boolean=false
  
  constructor() {
    super()
   }
  

ngOnInit() {
 super.loadScripts();
}


}
