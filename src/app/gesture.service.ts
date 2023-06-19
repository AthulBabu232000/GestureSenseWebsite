import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Gesture } from './gesture.model';
@Injectable({
  providedIn: 'root',
})
export class GestureService {
  listOfGesture: Gesture[] = [];
  constructor(private http: HttpClient) {}
  saveData() {
    this.http
      .post(
        'https://gesturesense-4c7d8-default-rtdb.firebaseio.com/allvalues.json',
        this.updatedListOfGesture
      )
      .subscribe((res) => {
        
      });
      this.fetchAllValues();

  }
fetchAllValuesAsList(){
  return this.listOfGesture;
}

  fetchAllValues() {
    this.http
      .get<Gesture[]>(
        'https://gesturesense-4c7d8-default-rtdb.firebaseio.com/allvalues.json'
      )
      .pipe(
        tap((listOfGestures: any[]) => {
          this.listOfGesture = listOfGestures;
        })
      )
      .subscribe();
    
  }

  updatedListOfGesture: Gesture[] = [];

  fetchData() {
    this.http
      .get<Gesture[]>(
        'https://gesturesense-4c7d8-default-rtdb.firebaseio.com/gesture.json'
      )
      .pipe(
        tap((listOfGestures: Gesture[]) => {
          this.updatedListOfGesture = listOfGestures;
        })
      )
      .subscribe();
  }
}
