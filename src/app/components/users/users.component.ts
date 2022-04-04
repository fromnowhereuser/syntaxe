import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users = new Array<User>();

  constructor() { }

  ngOnInit(): void {
  }

  handleUser(firstname: string, lastname: string) {
    this.users.push(new User(firstname, lastname));

  }

}
/*
Gerer l'ajout d'un utilisateur, avec les donnees (NF/LN),
et afficher le nombre total

Ajouter une prop isAdmin à User.
Gerer l'action toggle admin pour changer isAdmin.
Afficher en vert les admins, et jaune les non admins.

*/
