import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MovieService } from './services/movie.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { routing } from './app.routing';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchPipe } from './pipes/search.pipe';
import { CountryfilterPipe } from './pipes/countryfilter.pipe';
import { LanguagefilterPipe } from './pipes/languagefilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchPipe,
    CountryfilterPipe,
    LanguagefilterPipe,
  ],
  imports: [
    BrowserModule,
	routing,
	HttpModule,
	FormsModule,
	NgxPaginationModule,
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
