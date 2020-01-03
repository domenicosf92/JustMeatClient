import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter-restaurants/filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { OrderComponent } from './order/order.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { FilterRestaurantsComponent } from './filter-restaurants/filter-restaurants.component';
import { RestaurantsListComponent } from './restaurants/restaurants-list/restaurants-list.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { NewRestaurantComponent } from './restaurants/new-restaurant/new-restaurant.component';
import { OrderListComponent } from './order/order-list/order-list.component';

@NgModule({
  declarations: [
    FilterPipe,
    AppComponent,
    LoginComponent,
    UsersComponent,
    RegisterComponent,
    OrderComponent,
    NavbarComponent,
    HomepageComponent,
    RestaurantComponent,
    FilterRestaurantsComponent,
    RestaurantComponent,
    RestaurantsComponent,
    RestaurantsListComponent,
    NewRestaurantComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [AuthService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
