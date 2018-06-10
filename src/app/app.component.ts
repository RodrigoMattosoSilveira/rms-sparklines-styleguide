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
            name: 'Line',
            icon: 'search',
            href: 'sparkline-line'
        },
        {
            name: 'Home',
            icon: 'search',
            href: 'home'
        },
        {
            name: 'Home',
            icon: 'search',
            href: ''
        },
        {
            name: 'Line',
            icon: 'search',
            href: 'sparkline-line'
        }
    ];

    creating = [
        {
            name: 'Home',
            icon: 'create',
            href: ''
        }
    ];
}
