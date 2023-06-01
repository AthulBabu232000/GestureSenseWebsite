import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GestureComponent } from './gesture/gesture.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayerComponent } from './displayer/displayer.component';

const routes:Routes=[
 
  {
    path:'',
    component:HomeComponent
    
  },
  {
    path:'gesture/:gestureNumber',
    component:GestureComponent
  },
  {path:'displayer',
component:DisplayerComponent
},
]
@NgModule({
  declarations: [
    AppComponent,
    GestureComponent,
    HomeComponent,
    DisplayerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
 
 }
