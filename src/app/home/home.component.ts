import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() gestureNumber = 1;
  @Input() gestureImgSrc = '';
  constructor(private router:Router) {}

  recognize() {
    console.log('recognize');
 
    this.router.navigate(["gesture", this.gestureNumber]);

  }
  ngOnInit(): void {}
}
