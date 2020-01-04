import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';
import { AuthGuard } from './auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { NewRestaurantComponent } from './restaurants/new-restaurant/new-restaurant.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user/user.component';


const routes: Routes = [
  {
    path : '',
    component : HomepageComponent
  },
  {
    path : 'restaurants/:restaurant/menu',
    component : RestaurantComponent
  },
  {
    path : 'restaurants/:city',
    component : RestaurantsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'orders',
    component: OrderListComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'orders/create',
    component :OrderComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'newrestaurant',
    component: NewRestaurantComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
