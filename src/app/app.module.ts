import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GestureComponent } from './gesture/gesture.component';
import { HomeComponent } from './home/home.component';

const routes:Routes=[
 
  {
    path:'',
    component:HomeComponent
    
  },
  {
    path:'gesture/:gestureNumber',
    component:GestureComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    GestureComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
 
 }
