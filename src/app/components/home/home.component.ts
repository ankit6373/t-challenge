import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    movies: any[];
    p:       Number = 1;
	movie_name: String;
	selectedCountry: String;
	selectedLanguage: String;
	
	countries: Array<any> = [];
	languages: Array<any> = [];
	
    constructor(private movieservice: MovieService) { }

    ngOnInit() {
		this.getAllMovies();
    }
	
	public getAllMovies(){
		this.movieservice.getMovieList()
		    .subscribe(
			    response => {
					this.movies = response;
					
					for(let i= 0; i < response.length;i++){
						if(! this.countries.includes(response[i].country) ){
							this.countries.push(response[i].country);
						}
                        if(! this.languages.includes(response[i].language)){						
						    this.languages.push(response[i].language);
					    }
                    }						
				},
				error => {
					console.log(error);
				}
			);
	}


}
