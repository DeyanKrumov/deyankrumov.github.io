import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from '../../shared/interfaces/navItem';
import { isLocalLink } from '../../shared/functions/helperFuncs';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
    public isCollapsed = true;
    @Input() public navLabel: string;
    @Input() public navItems: Array<NavItem>;
    public isLocalLink = isLocalLink;

    ngOnInit(): void {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
    }

    toggleCollapse(): void {
        this.isCollapsed = !this.isCollapsed;
    }
}
