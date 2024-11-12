import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { CarsComponent } from './components/cars/cars.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { ViewvehiclesComponent } from './components/viewvehicles/viewvehicles.component';
import { BookingComponent } from './components/booking/booking.component';
import { ViewordersComponent } from './components/vieworders/vieworders.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { ManagevehiclesComponent } from './components/managevehicles/managevehicles.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'cars',component:CarsComponent},
      {path:'bikes',component:BikesComponent},
      {path:'view/:id',component:ViewvehiclesComponent},
      {path:'booking',component:BookingComponent},
      {path:'vieworders',component:ViewordersComponent},
      {path:'wishlist',component:WishlistComponent},
    ]
  },
  {path:'admin',component:AdmindashboardComponent,
    children:[
      {path:'cars',component:CarsComponent},
      {path:'bikes',component:BikesComponent},
      {path:'manage',component:ManagevehiclesComponent},
      {path:'vieworders',component:ViewordersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
