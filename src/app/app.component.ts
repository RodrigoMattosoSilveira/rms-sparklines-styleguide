import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

    navItems = [
        {
            name: 'Home',
            icon: 'home',
            href: ''
        }
    ];

    searches = [
        {
            name: 'Dog Search',
            icon: 'search',
            href: 'sparkline-line'
        },
        {
            name: 'Meeting Search',
            icon: 'search',
            href: 'home'
        },
        {
            name: 'Owner Search',
            icon: 'search',
            href: ''
        },
        {
            name: 'Trainer Search',
            icon: 'search',
            href: 'sparkline-line'
        }
    ];

    creating = [
        {
            name: 'New Meeting',
            icon: 'create',
            href: ''
        }
    ];
}
