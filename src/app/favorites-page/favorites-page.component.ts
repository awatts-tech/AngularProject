import { Component, OnInit } from '@angular/core';
import { RecipesApiService } from '../recipes-api.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

  constructor(public recipeAPI: RecipesApiService) {}

  ngOnInit(): void {
  }

}
