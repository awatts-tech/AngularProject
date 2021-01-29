import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesApiService {
  apiKey = "8397f4d2eeb257f413c10cc2b892b043";
  appId = "de013f42";
  url = "https://api.edamam.com/search";
  recipes: any[] = [];
  favorites: any[] = [];
  searchTerm: string = "";
  constructor(private http: HttpClient) {}

  getRecipes() {
    const requestUrl =
      this.getUrlWithAPIKey() + ""; // add whatever params you want from here: https://developers.themoviedb.org/3/discover/movie-discover

    this.http.get(requestUrl).subscribe(
      (response: any) => {
        // console.log(response);
        this.recipes = response.hits;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getRecipesFiltered(peanutFree: boolean, dairyFree: boolean){
    let requestUrl =
    this.getUrlWithAPIKey() + "&q=" + this.searchTerm;
    if (peanutFree) {
      requestUrl+="&diet=peanut-free"
    }
    if (dairyFree) {
      requestUrl+="&diet=dairy-free"
    }
  this.http.get(requestUrl).subscribe(
    (response: any) => {
      // console.log(response);
      this.recipes = response.hits;
    },
    (error) => {
      console.error(error);
    }
  );
  }

  getRecipesBySearchTerm(searchTerm: string){
    const requestUrl =
    this.getUrlWithAPIKey() + "&q=" + searchTerm;
    this.searchTerm=searchTerm

  this.http.get(requestUrl).subscribe(
    (response: any) => {
      // console.log(response);
      this.recipes = response.hits;
    },
    (error) => {
      console.error(error);
    }
  );
  }

  getUrlWithAPIKey() {
    return `${this.url}?app_id=${this.appId}&app_key=${this.apiKey}`;
  }
}
