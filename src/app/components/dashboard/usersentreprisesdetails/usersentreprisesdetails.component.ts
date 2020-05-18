import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ClientService } from 'src/app/services/client.service';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-usersentreprisesdetails',
  templateUrl: './usersentreprisesdetails.component.html',
  styleUrls: ['./usersentreprisesdetails.component.scss']
})
export class UsersentreprisesdetailsComponent implements OnInit {

  
  entreprise;
  user;
  idclient;
  iduser;
  constructor(private userservice: UsersService, private clientService: ClientService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.idclient = params.get("id");
      this.iduser = params.get("user");
      this.clientService.getByIdClient(this.idclient).subscribe(response => {
        this.entreprise = response;
      });
      this.userservice.getUserById(this.iduser).subscribe(response => {
        this.user = response;
      });
    })
  }


}
