import { Injectable } from '@angular/core';
import { Base } from './global-urls';
import { Http,Headers,Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

    constructor(private http: Http) { }
	
	public getMovieList(){
		return this.http.get(Base.url)
		    .pipe(
			    map(
				    (response: Response) => {
						return response.json();
					}))
	}
	
}
