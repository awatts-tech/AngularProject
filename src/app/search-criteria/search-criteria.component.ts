import { Component, OnInit } from '@angular/core';
import {RecipesApiService} from '../recipes-api.service'

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  // search:string="";

  constructor(public recipeAPI: RecipesApiService) { }

  ngOnInit(): void {
    this.recipeAPI.getRecipes( );
  }

}
