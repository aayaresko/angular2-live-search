import { Component, OnInit } from '@angular/core';
import './rxjs-operators';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'my-app',
    template: `
    <div id="counter"></div>
    <button id="increment" value="1">+</button>
    <button id="decrement" value="-1">-</button>
    <hero-list></hero-list>
    <hero-list-promise></hero-list-promise>
    <my-wiki></my-wiki>
    <my-wiki-smart></my-wiki-smart>
    `
})
export class AppComponent implements OnInit {
    constructor() {
        /*let promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve('promise timeout');
            }, 2000)
        });
        promise.then((value) => console.log(value));
        let stream = new Observable(
            (observer) => {
                let timeout = setTimeout(() => {
                    observer.next('observer timeout');
                }, 2000);
                // when all subscribers are unsubscribe - this function is called - this allow us to clean make a clean up
                return () => {
                    clearTimeout(timeout);
                }
            }
        );
        let disposable = stream.subscribe((value) => console.log(value));
        // executes unsubscribe function witch will cancel main function execution
        setTimeout(() => {
            disposable.unsubscribe();
        }, 1000);*/
        /*let stream= new Observable(
            (observer) => {
                let counter = 0 ;
                let interval = setInterval(() => {
                    observer.next(counter++);
                }, 1000);
                return () => clearInterval(interval);
            },
        );*/
        //stream.subscribe((value) => console.log(value));
        //stream.filter((value: number) => value % 2 === 0).subscribe((value: number) => console.log(value));
        //stream.map((value: number) => value * value).subscribe((value: number) => console.log(value));
    }

    ngOnInit() {
        let increment = document.getElementById('increment');
        let decrement = document.getElementById('decrement');
        let counter = document.getElementById('counter');

        let incrementClick = Observable.fromEvent(increment, 'click');
        let decrementClick = Observable.fromEvent(decrement, 'click');
        /*incrementClick.subscribe((event) => console.log(event));
        decrementClick.subscribe((event) => console.log(event));*/
        let clicks = Observable
            .merge(incrementClick, decrementClick)
            .map((event: any) => parseInt(event.target.value, 10));
        let totalCount = clicks
            .scan((total, value) => total + value, 0);
        totalCount.subscribe((total) => {
            counter.innerText = total.toString();
        })
    }
}