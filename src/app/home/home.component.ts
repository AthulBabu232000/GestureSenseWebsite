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
  @Input() gestureNumber:any=0;
  @Input() gestureImgSrc = '';
  @Input() gestureName?:any;
  constructor(private router:Router,private gestureService:GestureService) {}

  recognize() {
    console.log('recognize');
    var counter=0;
   this.listOfGesture=this.gestureService.updatedListOfGesture;
   console.log(this.listOfGesture);
for(var i in this.listOfGesture){
  counter+=1;
  console.log(counter);
  if(counter==1){
    console.log("this is running");
    this.gestureNumber=this.listOfGesture[i];
  }
  else if(counter==2){
    this.gestureName=this.listOfGesture[i];
  }
}

    this.router.navigate(["gesture", this.gestureNumber]);

  }
  ngOnInit(): void {
  this.gestureService.fetchData();
  // this.gestureService.fetchAllValues()
}
}
