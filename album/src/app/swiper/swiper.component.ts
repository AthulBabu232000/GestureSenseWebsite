import { Component,ViewEncapsulation, OnInit } from '@angular/core';
import SwiperCore, { FreeMode, Pagination } from "swiper";
SwiperCore.use([FreeMode, Pagination]);
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


