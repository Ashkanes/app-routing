import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users = [
    {
      id: 1,
      name:'ترنم'
    },
    {
      id:2,
      name:'ترانه',
    },
    {
      id:3,
      name:'مهسا'
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
