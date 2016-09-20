import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { WikipediaService } from './wikipedia-service';

@Component({
    selector: 'my-wiki-smart',
    templateUrl: './wiki.component.html',
    providers: [WikipediaService]
})
export class WikiSmartComponent {
    title = 'Fetches when typing stops';

    constructor(private wikipediaSerice: WikipediaService) {

    }

    private searchTermStream = new Subject<string>();

    search(term: string) {
        this.searchTermStream.next(term);
    }

    items: Observable<string[]> = this.searchTermStream
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap((term: string) => this.wikipediaSerice.search(term));
}