import { FoodService } from './../services/food/food.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute
  ) {}

  public foodItemList: string[] = this.foodService.foodItem;
  public finalMenu: any = [];

  ngOnInit(): void {
    // let foodItemCategory = this.foodItemList[this.foodServic.getRandomInt(0,this.foodItemList.length)]
    // this.foodService.getFoodImage(foodItemCategory).subscribe(data => {
    //   console.log(data)
    // });

    for (let i = 0; i < this.foodItemList.length; i++) {
      this.finalMenu[i] = [];
      for (let j = 0; j < 4; j++) {
        // this.foodService.getFoodImage(this.foodItemList[i]).subscribe(data => {
        //   // console.log(data)
        //   this.finalMenu[i].push(data)
        // });

        // this.finalMenu[i] = this.foodService.getAllFood(this.foodItemList[i]);

        this.route.params.subscribe((params) => {
          if (params['searchItem']) {
            this.finalMenu[i] = this.foodService
              .getAllFood(this.foodItemList[i])
              .filter((food) =>
                food.name
                  .toLowerCase()
                  .includes(params['searchItem'].toLowerCase())
              );
          } else {
            this.finalMenu[i] = this.foodService.getAllFood(this.foodItemList[i]);
          }
        });
      }
    }
    console.log(this.finalMenu);
  }
}
