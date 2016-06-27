import { provideRouter, RouterConfig } from '@angular/router';


import { FormtestComponent } from './formtest.component';
import {HomeComponent} from './home.component';

export const routes: RouterConfig = [
 {
    path:'',
    component: HomeComponent,
   
  },
  {
      path:'formtest',
      component: FormtestComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
