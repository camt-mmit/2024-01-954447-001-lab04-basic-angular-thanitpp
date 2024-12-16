import { Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ProflieComponent } from './proflie/proflie.component';
import { FriendComponent } from './friend/friend.component';
import { StatusComponent } from './status/status.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'hello-world',
    pathMatch: 'full',
  },

  {
    path: 'hello-world',
    component: HelloWorldComponent,
  },

  {
    path: 'profile',
    component: ProflieComponent,
  },
  {
    path: 'friend',
    component: FriendComponent,
  },
  {
    path: 'status',
    component: StatusComponent,
  },
];
