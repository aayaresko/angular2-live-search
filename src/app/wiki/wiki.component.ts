import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WikipediaService } from './wikipedia-service';

@Component({
    selector: 'my-wiki',
    templateUrl: './wiki.component.html',
    providers: [WikipediaService]
})
export class WikiComponent {
    items: Observable<string[]>;
    title = 'Fetches after each keystroke';

    constructor(private wikipediaService: WikipediaService) {

    }

    search(term: string) {
        this.items = this.wikipediaService.search(term);
    }
}