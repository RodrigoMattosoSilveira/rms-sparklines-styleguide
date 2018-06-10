import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SparklineLineComponent } from './components/sparkline-line/sparkline-line.component';

const appRoutes: Routes = [
    { path: 'home',                   component: LandingPageComponent },
    { path: 'sparkline-line',         component: SparklineLineComponent },
    { path: '',   redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full'  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
