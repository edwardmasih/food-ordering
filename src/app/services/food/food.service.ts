import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { foods } from 'src/app/shared/models/food.models';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  public foodImagesAPI = 'https://foodish-api.herokuapp.com/api/images/';
  /*
    GET /api/images/:food
   */

  public foodItem = ['biryani', 'burger', 'dessert', 'pasta', 'pizza'];

  // gets random images of food item using specific food name
  // Github : Foodish
  getFoodImage(foodName: any): Observable<any> {
    return this.http.get(this.foodImagesAPI + foodName).pipe(
      catchError((error: HttpErrorResponse) => {
        throw new Error(error.error);
      })
    );
  }

  getAllFood(foodName: any): foods[] {
    return [
      {
        id: 1,
        price: this.getRandomInt(100,400),
        name: foodName + " - " + this.getRandomInt(1,20),
        favorite: Math.random() < 0.5,
        star: this.getRandomInt(0,5),
        imageUrl: `/assets/images/${foodName}/${foodName}-1.jpg`,
      },
      {
        id: 2,
        price: this.getRandomInt(100,400),
        name: foodName + " - " + this.getRandomInt(1,20),
        favorite: Math.random() < 0.5,
        star: this.getRandomInt(0,5),
        imageUrl: `/assets/images/${foodName}/${foodName}-2.jpg`,
      },
      {
        id: 3,
        price: this.getRandomInt(100,400),
        name: foodName + " - " + this.getRandomInt(1,20),
        favorite: Math.random() < 0.5,
        star: this.getRandomInt(0,5),
        imageUrl: `/assets/images/${foodName}/${foodName}-3.jpg`,
      },
      {
        id: 4,
        price: this.getRandomInt(100,400),
        name: foodName + " - " + this.getRandomInt(1,20),
        favorite: Math.random() < 0.5,
        star: this.getRandomInt(0,5),
        imageUrl: `/assets/images/${foodName}/${foodName}-4.jpg`,
      },
    ];
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
}
