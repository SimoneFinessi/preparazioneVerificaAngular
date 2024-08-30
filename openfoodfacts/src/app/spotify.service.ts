import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) { }
  searchItem(item: string) {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${item}&page_size=2&json=true`;
    const headers = new HttpHeaders({Authorization: environment.oauthToken});
    //, { headers }
    return this.http.get(url);
  }
}
