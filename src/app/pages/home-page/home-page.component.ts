import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    public currentSection = 'section1';

    constructor(private _router: Router, private _route: ActivatedRoute, private _location: Location) {}

    ngOnInit(): void {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');

        this._route.params.subscribe((params) => {
            this.currentSection = params['sectionId'];
            this.scrollTo(this.currentSection);
        });

        this.playAllVideos();
    }

    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
    }

    scrollTo(section: string) {
        document.querySelector('#' + section).scrollIntoView();
    }

    onSectionChange(sectionId: string) {
        this._location.go('/home-page/' + sectionId);
        this.currentSection = sectionId;
    }

    private playAllVideos() {
        const videos = document.querySelectorAll('video');
        videos.forEach((video) => {
            video.muted = true;
            video.play();
        });
    }
}
