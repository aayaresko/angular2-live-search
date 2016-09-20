import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { YoutubeService } from './youtube.service';

@Component({
    selector: 'youtube-demo',
    templateUrl: './youtube.component.html',
    providers: [YoutubeService]
})
export class YoutubeComponent {
    constructor(private youtubeService: YoutubeService) {

    }

    private searchTermStream = new Subject<string>();

    search(term: string) {
        this.searchTermStream.next(term);
    }

    items: Observable<string[]> = this.searchTermStream
        .debounceTime(500)
        .distinctUntilChanged()
        .switchMap((term) => this.youtubeService.search(term));
}