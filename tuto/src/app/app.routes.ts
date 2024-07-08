import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddFaceSnapComponent } from './add-face-snap/add-face-snap.component';
import { SingleFaceSnapComponent } from './single-face-snap-component/single-face-snap-component.component';
import { SnapFaceCreatedComponent } from './snap-face-created/snap-face-created.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
    { path: 'create', component: AddFaceSnapComponent },
    { path: 'facesnaps/:id' , component: SingleFaceSnapComponent},
    { path: 'facesnaps', component: FaceSnapListComponent },
    { path: '', component: LandingPageComponent },
    { path: 'facesnaps/posted', component: SnapFaceCreatedComponent },
    { path: 'login', component: LoginPageComponent }
];
