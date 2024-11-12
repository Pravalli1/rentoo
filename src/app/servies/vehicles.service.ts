import { Injectable } from '@angular/core';
import { vehicle } from './vehicles';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  vehicle:any;
  constructor() { }

  vehicleList:vehicle[]=[
    {
      vehicleId:1,
      vehicleName:"Model Tesla 5",
      vehicleCompany:"Tesla",
      vehiclePrice:80000,
      avialableTime:"immediate",
      fuelType:"electric",
      seatingCapacity:5,
      vehicleType:"car",
      vehicleImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3_km983y26lu1-umBIbky-ZcKTSUi4gnWZA&s",
      rating:4.5,
    },
    {
      vehicleId: 2,
      vehicleName: "Toyota Corolla",
      vehicleCompany: "Toyota",
      vehiclePrice: 20000,
      avialableTime: "1 week",
      fuelType: "gasoline",
      seatingCapacity: 5,
      vehicleType: "car",
      vehicleImage: "https://imgd.aeplcdn.com/664x374/cw/ec/26588/Toyota-Corolla-Altis-Exterior-92974.jpg?wm=0&q=80",
      rating: 4.5
    },
    {
      vehicleId: 3,
      vehicleName: "Ford F-150",
      vehicleCompany: "Ford",
      vehiclePrice: 35000,
      avialableTime: "2 weeks",
      fuelType: "gasoline",
      seatingCapacity: 6,
      vehicleType: "car",
      vehicleImage: "https://vehicle-images.dealerinspire.com/stock-images/ford/7a6a9c80b30f888de968a72c056b9070.png",
      rating: 4.6
    },
    {
      vehicleId: 4,
      vehicleName: "Honda CR-V",
      vehicleCompany: "Honda",
      vehiclePrice: 28000,
      avialableTime: "1 week",
      fuelType: "gasoline",
      seatingCapacity: 5,
      vehicleType: "car",
      vehicleImage: "https://imgd.aeplcdn.com/664x374/n/cw/ec/34457/cr-v-exterior-right-front-three-quarter.jpeg?q=80",
      rating: 4.7
    },
    {
      vehicleId: 5,
      vehicleName: "BMW X5",
      vehicleCompany: "BMW",
      vehiclePrice: 60000,
      avialableTime: "immediate",
      fuelType: "diesel",
      seatingCapacity: 5,
      vehicleType: "car",
      vehicleImage: "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/model-navigation/bmw-m8-competition-gran-coupe-flyout-2022.png",
      rating: 4.9
    },

    //bikes
   {
    vehicleId: 1,
    vehicleName: "Royal Enfield Classic 350",
    vehicleCompany: "Royal Enfield",
    vehiclePrice: 200000,
    avialableTime: "immediate",
    fuelType: "gasoline",
    seatingCapacity: 2,
    vehicleType: "bike",
    vehicleImage: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/royalenfield-classic-350-heritage1725274941405.jpg?q=80",
    rating: 4.7
   },
   {
    vehicleId: 2,
    vehicleName: "Honda CBR 650R",
    vehicleCompany: "Honda",
    vehiclePrice: 900000,
    avialableTime: "2 weeks",
    fuelType: "gasoline",
    seatingCapacity: 2,
    vehicleType: "bike",
    vehicleImage: "https://imgd.aeplcdn.com/476x268/bw/models/honda-cbr300r.jpg?20190103151915",
    rating: 4.8
   },
   {
    vehicleId: 3,
    vehicleName: "Yamaha MT-15",
    vehicleCompany: "Yamaha",
    vehiclePrice: 160000,
    avialableTime: "immediate",
    fuelType: "gasoline",
    seatingCapacity: 2,
    vehicleType: "bike",
    vehicleImage: "https://www.yamaha-motor-india.com/theme/v4/images/webp_images/mt_series/mt15v2/color/mt15_motogp.webp",
    rating: 4.5
   },
   {
    vehicleId: 4,
    vehicleName: "Kawasaki Ninja 300",
    vehicleCompany: "Kawasaki",
    vehiclePrice: 330000,
    avialableTime: "1 month",
    fuelType: "gasoline",
    seatingCapacity: 2,
    vehicleType: "bike",
    vehicleImage: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/kawasaki-select-model-mirror-coated-matte-spark-black-1676442407791.png?q=80",
    rating: 4.6
   },
   {
    vehicleId: 5,
    vehicleName: "Bajaj Pulsar 150",
    vehicleCompany: "Bajaj",
    vehiclePrice: 100000,
    avialableTime: "immediate",
    fuelType: "gasoline",
    seatingCapacity: 2,
    vehicleType: "bike",
    vehicleImage: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/bajaj-select-model-sparkle-black-blue-single-disc-1671022733142.png?q=80",
    rating: 4.4
   }

  ];

  getAllVehicles(){
    return of(this.vehicleList);
  }

  addVehicle(newveh:vehicle){
    this.vehicleList.push(newveh);
    return "added successfully";
  }

  deleteVehicle(id:any){
    let index=this.vehicleList.findIndex(vehicle=>vehicle.vehicleId==id);
    if(index!=-1){
      this.vehicleList.splice(index,1);
    }
  }

  updateVehicle(id:any,newveh:any){
     let index=this.vehicleList.findIndex(vehicle=>vehicle.vehicleId==id);
     if(index!=-1){
       this.vehicleList.splice(index,1,newveh);
     }
  }

  getVehicleById(id:any){
    return this.vehicleList.find(vehicle=>vehicle.vehicleId==id);
  }

  getBikes(){
    return of (this.vehicleList.filter(vehicle=>vehicle.vehicleType=="bike"));
  }

  getCars(){
    return  of (this.vehicleList.filter(vehicle=>vehicle.vehicleType=="car"));
  }
}
