import { UserService } from './../user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user.model';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit{

  users: User[] = [];
  displayedColumns = ['id','name', 'birthdate', 'cpf', 'action']
  @ViewChild(MatTable) table!: MatTable<User[]>;


  constructor(private userService: UserService){}

  ngOnInit(): void {
      this.userService.read().subscribe(users =>{
        this.users = users
        console.log(users)
      })
  }

}
