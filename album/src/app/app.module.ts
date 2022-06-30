import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from "swiper/angular";
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { SwiperComponent } from './swiper/swiper.component';
import { CommonModule } from '@angular/common';
import { LastComponent } from './last/last.component';


@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    SwiperComponent,
    LastComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
