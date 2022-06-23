import { Injectable } from '@angular/core';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private Users : User[] = [
    {
      id: "111",
      firstName: "One",
      lastName: "User",
      age: 21,
      login: "User1",
      password: "UserOne",
      isDeleted: false
    },
    {
      id: "123",
      firstName: "Two",
      lastName: "User",
      age: 43,
      login: "User2",
      password: "UserTwo",
      isDeleted: true
    },
    {
      id: "124",
      firstName: "Three",
      lastName: "User",
      age: 34,
      login: "User3",
      password: "UserThree",
      isDeleted: false
    },
    {
      id: "534",
      firstName: "Four",
      lastName: "User",
      age: 34,
      login: "User4",
      password: "UserFour",
      isDeleted: false
    },
    {
      id: "232",
      firstName: "Five",
      lastName: "User",
      age: 23,
      login: "User5",
      password: "UserFive",
      isDeleted: true
    },
    {
      id: "923",
      firstName: "Six",
      lastName: "User",
      age: 27,
      login: "User6",
      password: "UserSix",
      isDeleted: true
    },
    {
      id: "548",
      firstName: "Seven",
      lastName: "User",
      age: 43,
      login: "User7",
      password: "UserSeven",
      isDeleted: false
    },
    {
      id: "933",
      firstName: "Eight",
      lastName: "User",
      age: 1,
      login: "User8",
      password: "UserEight",
      isDeleted: true
    },
    {
      id: "844",
      firstName: "Nine",
      lastName: "User",
      age: 1,
      login: "User9",
      password: "UserNine",
      isDeleted: false
    },
    {
      id: "836",
      firstName: "Ten",
      lastName: "User",
      age: 1,
      login: "User10",
      password: "UserTen",
      isDeleted: true
    },
    
  ];

  dummyUser: User = {
    id: "dummy",
    firstName: "dummy",
    lastName: "dummy",
    age: 1,
    login: "dummy",
    password: "dummy",
    isDeleted: true
  }
  constructor() { }

  getUsers(): User[]{
    return this.Users;
  }

  getUser(num:String): User{
    console.log(num);
    for(var i=0;i<this.Users.length;i++){

      if(this.Users[i].id === num){
        return this.Users[i];
      }
    }
    return this.dummyUser;
  }
}
