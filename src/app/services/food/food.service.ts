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
    'butter-chicken',
    'dessert',
    'dosa',
    'idly',
    'pasta',
    'pizza',
    'rice',
    'samosa',
  ];

  getFoodImage(foodName: any): Observable<any> {
    return this.http.get(this.foodImagesAPI+foodName).pipe(
      catchError((error: HttpErrorResponse) => {
        throw new Error(error.error);
      })
    );
  }
}
