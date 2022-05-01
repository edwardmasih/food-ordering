import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  public foodImagesAPI = 'https://foodish-api.herokuapp.com/api/images/';
  /*
    GET /api/images/:food
   */

  public foodItem = [
    'biryani',
    'burger',
    'dessert',
    'pasta',
    'pizza'
  ];

  // gets random images of food item using specific food name 
  // Github : Foodish
  getFoodImage(foodName: any): Observable<any> {
    return this.http.get(this.foodImagesAPI+foodName).pipe(
      catchError((error: HttpErrorResponse) => {
        throw new Error(error.error);
      })
    );
  }

  getAllFood(foodName:any):string[]{
    return [
      `/assets/images/${foodName}/${foodName}-1.jpg`,
      `/assets/images/${foodName}/${foodName}-2.jpg`,
      `/assets/images/${foodName}/${foodName}-3.jpg`,
      `/assets/images/${foodName}/${foodName}-4.jpg`
    ]
  }
}
