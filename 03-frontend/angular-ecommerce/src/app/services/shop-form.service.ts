import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../common/country';
import { State } from '../common/state';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopFormService {


  private countriesUrl = process.env["environment.luv2shopApiUrl"] + '/countries';
  private statesUrl = process.env["environment.luv2shopApiUrl"] + '/states';

  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<Country[]> {

    return this.httpClient.get<GetResponseCountries>(this.countriesUrl).pipe(
      map(response => response._embedded.countries)
    )
  }

  getStates(theCountryCode: string): Observable<State[]> {

    // search url
    const searchStatesUrl = `${this.statesUrl}/search/findByCountryCode?code=${theCountryCode}`;

    return this.httpClient.get<GetResponseStates>(searchStatesUrl).pipe(
      map(response => response._embedded.states)
    );
  }

  getCredictCardMonths(startMonth: number): Observable<number[]> {
    let data: number[] = [];

    // build array for "month" dropdown list
    // start at current month and loop until

    for (let theMonth = startMonth; theMonth <= 12; theMonth++) {
      data.push(theMonth);
    }

    return of(data);
  }

  getCredictCardYears(): Observable<number[]> {

    let data: number[] = [];

    // build array for "year" dropdown list
    // start at current year and loop for next 10 years

    const startYear: number = new Date().getFullYear(); // get the current year

    for (let theYear = startYear; theYear <= startYear + 10; theYear++) {
      data.push(theYear);

    }
    return of(data);
  }
}

interface GetResponseCountries {
  _embedded: {
    countries: Country[];
  }
}

interface GetResponseStates {
  _embedded: {
    states: State[];
  }
}


