import { Fonction } from './fonction';
import { Departement } from './departement';
import { Entreprise } from './entreprise';

export interface Utilisateur {
  id: string;
  login: string;
  password:string;
  telephone:string;
  prenom: string;
  nom: string;
  email: string;
  matricule: string;
  role: string;
  actif: string;
  entreprise: Entreprise;
  fonction: Fonction;
  departement: Departement;
}
