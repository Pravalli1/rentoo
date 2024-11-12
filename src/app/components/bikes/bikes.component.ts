import { Component } from '@angular/core';
import { VehiclesService } from '../../servies/vehicles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrl: './bikes.component.css'
})
export class BikesComponent {
  bikes:any;
  constructor(private service:VehiclesService, private router:Router){}
  ngOnInit(){
      this.service.getBikes().subscribe((data)=>
      {
        this.bikes=data;
        console.log(this.bikes);
      })
  }
  openVehicle(id:any){
     this.router.navigateByUrl("/user/view" + id);
  }
}
