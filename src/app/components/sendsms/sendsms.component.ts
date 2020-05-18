import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as XLSX from 'xlsx';
import { SmspushService } from 'src/app/services/smspush.service';
@Component({
  selector: 'app-sendsms',
  templateUrl: './sendsms.component.html',
  styleUrls: ['./sendsms.component.scss']
})
export class SendsmsComponent implements OnInit {
  un = false;
  sender;
  numero;
  text;
  campagne;
  nbrdest = 1;
  destinataires;
  constructor(private fb: FormBuilder,private smspushservice: SmspushService) { }

  // formGroup: FormGroup = this.fb.group({
  //   sender: ['', Validators.required],
  //   text: ['', Validators.required],
  //   returl: ['http://196.207.202.189:9090', Validators.required],
  //   indicatif: [""],
  //   numero: ['']

  // });

  fileUploaded: File;
  worksheet: any;
  storeData;
  csvData;

  resetSMS(){
    this.sender=null;
    this.numero=null;
    this.text=null;
    this.campagne=null;
    this.nbrdest = 1;
    this.destinataires =null;
    this.fileUploaded = null;
  }

  uploadFile(event) {
    this.fileUploaded = event.target.files[0];
    console.log(this.fileUploaded.type);
    switch(this.fileUploaded.type){
      // case "application/vnd.ms-excel":
      //   this.readExcel();
      //   break;
      case "text/csv": 
        this.readAsCSV();
        break;
      default: 
        alert("Veuillez choisir un fichier csv (separateur: ; ).");
        this.fileUploaded =null;
        break;

    };
    // this.readExcel();
  }

  readExcel() {
    let readFile = new FileReader();
    readFile.onload = (e) => {
      this.storeData = readFile.result;
      var data = new Uint8Array(this.storeData);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      this.worksheet = workbook.Sheets[first_sheet_name];
      var _JsonData = XLSX.utils.sheet_to_json(this.worksheet, { raw: true });
      console.log(_JsonData);
    }
  }
  readAsCSV() {
    let destinataires = [];
    let readFile = new FileReader();
    readFile.readAsText(this.fileUploaded);
    readFile.onload = (e) =>{
      let csv = readFile.result;
      let lines = csv.toString().split(/\r|\n|\r/);
      let headers = lines[0].split(";");
      let indexTelephone;
      for(let i = 0 ; i< headers.length; i++){
        if(headers[i].toUpperCase()=="TELEPHONE"){
          indexTelephone = i;
          break;
        }
      }
      if(indexTelephone==undefined){
        alert("Le fichier ne contient pas de colonne TELEPHONE");
        return;
      }
      for(let i = 1; i<lines.length; i++){
        let row = lines[i].split(";");
        if(row[indexTelephone].trim()=="")continue;
        destinataires.push(
          {
            indicatif: row[indexTelephone].substr(0,4),
            numero: row[indexTelephone].substr(4,row[indexTelephone].length+1)
          }
          );
      }
      this.destinataires = destinataires;
    }

  }

  
  ngOnInit(): void {
  }

  onSubmit(){
    if(this.text == undefined || this.text.trim() == '' || this.sender == undefined || this.sender == ''){
      alert('Veuillez renseigner tous les champs');
      return;
    }
    if(this.nbrdest==1){
      if(this.numero == undefined || this.numero == ''){
        alert('Veuillez renseigner le destinataire');
      }else{
        //TODO
        let sms = {
          sender: this.sender,
          text: this.text,
          destinataires: [
            {
              indicatif: "221",
              numero: this.numero
            }
          ]
        };
        this.smspushservice.send(sms).subscribe(response =>{
          alert(response.data.message);
          if(response.data.code==200){
            this.resetSMS();
          }
        },error => {
          alert(error.message);
        })

      }
    }else{
      if(this.campagne == undefined || this.campagne.trim() == ""){
        alert("Veuillez donner un identifiant de campagne.");
      }else{
        let sms = {
          sender: this.sender,
          text: this.text,
          destinataires: this.destinataires
        };
        this.smspushservice.send(sms).subscribe(response =>{
          alert(response.data.message);
          if(response.data.code==200){
            this.resetSMS();
          }
        },error => {
          alert(error.message);
        })
      }
    }
  }

}

interface Destinataire {
  indicatif: string;
  numero: string;
}
