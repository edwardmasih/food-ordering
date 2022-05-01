import { FoodService } from './../services/food/food.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private foodService: FoodService) {}

  public foodItemList: string[] = this.foodService.foodItem;
  public finalMenu: any = []

  ngOnInit(): void {
    // let foodItemCategory = this.foodItemList[this.getRandomInt(0,this.foodItemList.length)]
    // this.foodService.getFoodImage(foodItemCategory).subscribe(data => {
    //   console.log(data)
    // });

    for (let i = 0; i < this.foodItemList.length; i++) {
      this.finalMenu[i] = []
      for (let j = 0; j < 4; j++) {
        this.foodService.getFoodImage(this.foodItemList[i]).subscribe(data => {
          // console.log(data)
          this.finalMenu[i].push(data)
        });
      }
    }
    console.log(this.finalMenu);
    
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
}
