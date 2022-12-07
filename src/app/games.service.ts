import { observable, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  headers = {
    'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',   
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  } ;

  constructor(private _httpclient:HttpClient) { }
  
  getAllGames():Observable<any> {
    return this._httpclient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games `,{
      headers:this.headers,
    })
  }

  getDetails(id:string):Observable<any>{
    return this._httpclient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,{
      headers:this.headers,
    })
  }

  getplatform(platform:any):Observable<any>{
    return this._httpclient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,{
      headers:this.headers,
      params : {
        platform:platform
      }
    })
  }

  getsort_by(sort_by:any):Observable<any>{
    return this._httpclient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,{
      headers:this.headers,
      params : {
        "sort-by":sort_by
      }
    })
  }


  getcategory(category:any):Observable<any>{
    return this._httpclient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,{
      headers:this.headers,
      params : {
        category:category
      }
    })
  }






  
}


// params : {
//   category: category
// }

