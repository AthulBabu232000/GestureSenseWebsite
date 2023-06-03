import { Component, OnInit } from '@angular/core';
import{Params, Router,ActivatedRoute} from '@angular/router';
import { GestureService } from '../gesture.service';

@Component({
  selector: 'app-gesture',
  templateUrl: './gesture.component.html',
  styleUrls: ['./gesture.component.css']
})
export class GestureComponent implements OnInit {

  constructor(private route:ActivatedRoute,  private router:Router,private gestureService:GestureService) { }

 gestureNumber:number=0;
 gestureImgSrc:string='';
 gestureName:string='';

 GoHome(){
  this.router.navigate([''])
 }
 GoDisplayer(){
  this.router.navigate(['displayer']);
 }
 GoSave(){
  this.gestureService.saveData();
 }
  ngOnInit(): void {
    this.gestureService.fetchAllValues;
    console.log(this.gestureImgSrc);
    this.route.params.subscribe((params:Params)=>{
 
      if(params['gestureNumber']){
        this.gestureNumber=params['gestureNumber'];
        if (this.gestureNumber == 1) {
          this.gestureImgSrc =
            'https://img.freepik.com/free-photo/counting-fingers-four_628469-449.jpg?w=2000';
            this.gestureName="One Finger";
        } else if (this.gestureNumber == 2) {
          this.gestureImgSrc =
            'https://img.freepik.com/free-photo/crop-hand-gesturing-peace_23-2147795491.jpg?w=2000';
        this.gestureName="Two Finger";
          } else if (this.gestureNumber == 3) {
          this.gestureImgSrc =
            'https://thumbs.dreamstime.com/b/open-hand-26546482.jpg';
       this.gestureName="Three Finger";
          } else if (this.gestureNumber == 4) {
          this.gestureImgSrc =
            'https://static.toiimg.com/thumb/imgsize-23456,msid-94098534,width-400,resizemode-4/94098534.jpg';
        this.gestureName="Four Finger";
          }
      }
      
    })
  }

}
