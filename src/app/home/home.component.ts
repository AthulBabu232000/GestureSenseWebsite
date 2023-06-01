import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import { GestureService } from '../gesture.service';
import { Gesture } from '../gesture.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() listOfGesture?:Gesture[];
  @Input() gestureNumber:any;
  @Input() gestureImgSrc = '';
  @Input() gestureName?:any;
  constructor(private router:Router,private gestureService:GestureService) {}

  recognize() {
    console.log('recognize');
    var counter=0;
   this.listOfGesture=this.gestureService.updatedListOfGesture;
for(var i in this.listOfGesture){
  counter+=1;
  if(counter==1){
    this.gestureNumber=this.listOfGesture[i];
  }
  else if(counter==2){
    this.gestureName=this.listOfGesture[i];
  }
}

    this.router.navigate(["gesture", this.gestureNumber]);

  }
  ngOnInit(): void {
  // this.gestureService.fetchData();
  // this.gestureService.fetchAllValues()
}
}
