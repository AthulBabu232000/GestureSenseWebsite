import { Component, OnInit } from '@angular/core';
import { GestureService } from '../gesture.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-displayer',
  templateUrl: './displayer.component.html',
  styleUrls: ['./displayer.component.css']
})
export class DisplayerComponent implements OnInit {
  isReloaded:boolean=false;
  allValues: any[] = [];
  imgIds: number[] = [];
  imgSrcs: string[] = [];
  imgNames: string[] = [];

  constructor(private gestureService: GestureService,private router:Router) {
  
   
    
  }
  ngOnInit(): void {
  //  window.onbeforeunload=()=>{this.isReloaded=true;}
    // console.log(this.isReloaded);
    if(this.allValues.length==0){
    this.allValues = this.gestureService.fetchAllValuesAsList();
    console.log("is this the one repeating");
      setTimeout(() => {
        this.ngOnInit();
      }, 500);
    }
    console.log(this.allValues);
    for (var key in this.allValues) {
      if (this.allValues.hasOwnProperty(key)) {
        var obj = this.allValues[key];
        this.imgIds.push(parseInt(obj.heartrate) - 1);
      }
    }

    for (let i in this.imgIds) {
      if (parseInt(i) == 1) {
        this.imgSrcs.push('https://img.freepik.com/free-photo/counting-fingers-four_628469-449.jpg?w=2000');
        this.imgNames.push('One Finger');
      } else if (parseInt(i) == 2) {
        this.imgSrcs.push('https://img.freepik.com/free-photo/crop-hand-gesturing-peace_23-2147795491.jpg?w=2000');
        this.imgNames.push('Two Finger');
      } else if (parseInt(i) == 3) {
        this.imgSrcs.push('https://thumbs.dreamstime.com/b/open-hand-26546482.jpg');
        this.imgNames.push('Three Finger');
      } else if (parseInt(i) == 4) {
        this.imgSrcs.push('https://static.toiimg.com/thumb/imgsize-23456,msid-94098534,width-400,resizemode-4/94098534.jpg');
        this.imgNames.push('Four Finger');
      }
    }
   
  }
}

