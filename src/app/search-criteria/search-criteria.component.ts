import { Component, OnInit } from '@angular/core';
import {RecipesApiService} from '../recipes-api.service'

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  searchTerm:string="";

  constructor(public recipeAPI: RecipesApiService) {}

  search(){
    // this function should say get recipe by search term
    //add function in recipe-list to say get recipe by API
  }

  ngOnInit(): void {
    this.recipeAPI.getRecipes( );
  }

}
