import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class YoutubeService {
    constructor(private http: Http) {

    }

    search(term: string) {
        let api_url = 'https://www.googleapis.com/youtube/v3/search';
        let api_key = '';
        return this.http.get(`${api_url}?q=${term}&key=${api_key}&part=snippet`).map((response) => response.json()).map((response) => response.items);
    }
}