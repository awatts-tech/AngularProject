import { Component, OnInit } from '@angular/core';
import { RecipesApiService } from '../recipes-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchTerm: string = "";

  constructor(public recipeAPI: RecipesApiService) {}

  search() {
    console.log("search was called");
    this.recipeAPI.getRecipesBySearchTerm(this.searchTerm);
  }

  ngOnInit(): void {
  }

}
