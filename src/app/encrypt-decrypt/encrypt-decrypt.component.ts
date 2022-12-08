import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-encrypt-decrypt',
  templateUrl: './encrypt-decrypt.component.html',
  styleUrls: ['./encrypt-decrypt.component.scss']
})
export class EncryptDecryptComponent implements OnInit {

  tokenFromUI: string ="0123456789123456";
  encrypted:any ="";
  decrypted: string;

  request:string;
  response:string;


  constructor() { }

  
  ngOnInit(): void {
  }



encryptData(){
  let key= CryptoJS.enc.Utf8.parse(this.tokenFromUI);
  let _iv= CryptoJS.enc.Utf8.parse(this.tokenFromUI);

  let encrypted =CryptoJS.AES.encrypt(
    JSON.stringify(this.request), key,{

      keySize:16,
      iv: _iv,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });

    this.encrypted =encrypted.toString();
}

decryptData() {
  let _key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
  let _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);

  this.decrypted = CryptoJS.AES.decrypt(this.encrypted, _key, {
    keySize: 16,
    iv: _iv,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }).toString(CryptoJS.enc.Utf8);
  
}

}
  