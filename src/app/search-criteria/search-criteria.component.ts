import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesApiService } from '../recipes-api.service'

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  searchTerm: string = "";

  constructor(public recipeAPI: RecipesApiService, private router: Router) { }

  search() {
    console.log("search was called");
    this.recipeAPI.getRecipesBySearchTerm(this.searchTerm);
    this.redirect();
  }

  redirect(){
    this.router.navigate(["/Recipes"])
  }

  ngOnInit(): void {
    this.recipeAPI.getRecipes();
  }
}