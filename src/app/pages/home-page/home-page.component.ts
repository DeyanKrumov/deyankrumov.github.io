import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
        const mainVideo: any = document.getElementById('main-video');
        mainVideo.play();
    }

    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
    }
}
