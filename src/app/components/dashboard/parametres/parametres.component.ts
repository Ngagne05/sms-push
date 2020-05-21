import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.scss']
})
export class ParametresComponent implements OnInit {

  nom_departement;
  nom_fonction;
  departements;
  fonctions ;
  iseditDep = false;
  iseditFonc = false;
  

  constructor(private userservice: UsersService){}
  ngOnInit() {
    this.userservice.getDeps().subscribe(data => {
        this.departements = data;
      
    });

    this.userservice.getFoncs().subscribe(data => {
        this.fonctions = data;
      
    });

   
  }

  addDep() {
    if (this.nom_departement === '') {
      alert('Veuillez renseigner le nom du département.');
    } else {
      if (!this.iseditDep) {
        this.userservice.createDep(this.nom_departement).subscribe(data => {
            this.nom_departement = '';
            this.userservice.getDeps().subscribe(data2 => {
                this.departements = data2;
              
            });
          
        });
      } else {
        this.userservice.updateDep(this.nom_departement).subscribe(data => {
          
            this.nom_departement = '';
            this.userservice.getDeps().subscribe(data2 => {
                this.departements = data2;
            });
          
        });
        this.iseditDep = false;
      }
    }
  }

 

  addFonc() {
    if (this.nom_fonction === '') {
      alert('Veuillez renseigner le nom du fonction.');
    } else {
      if (!this.iseditFonc) {
        this.userservice.createFonc(this.nom_fonction).subscribe(data => {
            this.nom_fonction = '';
            this.userservice.getFoncs().subscribe(data2 => {
                this.fonctions = data2;
            });
        
        });
      } else {
        this.userservice.updateFonc(this.nom_fonction).subscribe(data => {
         
            this.nom_fonction = '';
            this.userservice.getFoncs().subscribe(data2 => {
                this.fonctions = data2;
            });
         
        });
        this.iseditFonc = false;
      }
    }
  }

  editDep(departement) {
    this.nom_departement = departement.nom;
    this.iseditDep = true;
  }

  

  editFonc(fonction) {
    this.nom_fonction = fonction.nom;
    this.iseditFonc = true;
  }

  deleteFonc(fonction) {
      if(confirm("Voulez-vous vraiment supprimer cette fonction?"))
     this.userservice.deleteFonc(fonction.id).subscribe( data => {
      alert(data.data.message);
      this.userservice.getFoncs().subscribe( d => {
        this.fonctions = d;
      });
    },error => alert(error.message));
  }

 

  deleteDep(departement) {
      if(confirm("Voulez-vous vraiment supprimer ce département?"))
     this.userservice.deleteDep(departement.id).subscribe( data => {
      alert(data.data.message);
      this.userservice.getDeps().subscribe( d => {
        this.departements = d;
      },error=>alert(error.message));
    });
  }

  annulerDep() {
    this.iseditDep = false;
    this.nom_departement= '';
  }

 

  annulerFonc() {
    this.iseditFonc = false;
    this.nom_fonction = '';
  }

}
