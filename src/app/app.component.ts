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
            href: '/'
        }
    ];

    searches = [
        {
            name: 'Dog Search',
            icon: 'search',
            href: '/runner-search'
        },
        {
            name: 'Meeting Search',
            icon: 'search',
            href: '/meeting-search'
        },
        {
            name: 'Owner Search',
            icon: 'search',
            href: '/owner-search'
        },
        {
            name: 'Trainer Search',
            icon: 'search',
            href: '/trainer-search'
        }
    ];

    creating = [
        {
            name: 'New Meeting',
            icon: 'create',
            href: '/new-meeting'
        }
    ];
}
