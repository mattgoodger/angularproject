import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) { 
    console.log("constructor ran");
  }

  ngOnInit() {
    console.log("ngOnInit ran");

    this.name="Welcome";
    this.age=30;
    this.email = 'johndoe@test.com';
    this.address = {
      street: "1 One St",
      city: 'The City',
      country: 'The Country'
    }
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
    this.dataService.getPosts().subscribe((posts)=> {
      //console.log(posts);
      this.posts = posts;
    });
  }

  onClick(){
    this.name='Matthew Goodger';
    this.hobbies.push('New Hobby');
  }
  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby){
    for(let m = 0;m <this.hobbies.length;m++){
      if(this.hobbies[m] == hobby){
        this.hobbies.splice(m, 1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address{
  street:string,
  city:string,
  country:string
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}