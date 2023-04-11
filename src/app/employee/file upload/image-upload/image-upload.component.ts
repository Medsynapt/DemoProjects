import { Component, OnInit } from '@angular/core';
import {  MessageService } from 'primeng/api';
import { EmployeeService } from 'src/app/admin/service/employee.service';
import { FileToUpload } from '../FileUpload';
declare var $: any;

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {


   theFile: any = null;
 
   url = "";
  constructor( private fileService : EmployeeService) { }

  ngOnInit(): void {
  }


  readAndUploadFile(theFile: any) {

    let file = new FileToUpload();
    
    // Set File Information
    file.fileName = theFile.name;
    file.fileSize = theFile.size;
    file.fileType = theFile.type;
    file.lastModifiedTime = theFile.lastModified;
    file.lastModifiedDate = new Date();
    
    // Use FileReader() object to get file to upload
    // NOTE: FileReader only works with newer browsers
     
    let reader = new FileReader();
   
    // Setup onload event for reader
    reader.onload = (event) => {
        // Store base64 encoded representation of file
        console.log(">>>> " + reader.result.toString().split(',')[0])
         file.fileAsBase64 = reader.result.toString().split(',')[1];

         //this.url = event.target.result;
         //file.fileAsBase64 =file.fileAsBase64.replace('data:', '').replace(/^.+,/, '');
        // POST to server
        this.fileService.uploadFile(file).subscribe(resp => { 
     
          
            alert("Upload complete"); 
          
          });         
    }

  
    // Read the file
    reader.readAsDataURL(theFile);

}


fileToUP(): void {

  this.readAndUploadFile(this.theFile);
}


onFileChange(event) {
    this.theFile = null;
    this.theFile = event.target.files[0];
  
}
  
}

