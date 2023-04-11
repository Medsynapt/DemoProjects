import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-file',
  templateUrl: './pdf-file.component.html',
  styleUrls: ['./pdf-file.component.scss']
})
export class PdfFileComponent implements OnInit {

  loadedfile:any;
  pdfSrc:any;
  pageVariable=1;
  zoom=0;
  angle=0;




  constructor( ) { }

  ngOnInit(): void {
  }


  download(blob?){
    if(blob){
      var dataView = new DataView(this.pdfSrc);
      const x = new Blob([dataView],  );
      var a = document.createElement("a");
      // Instead of X use blob if you have it
          a.href = URL.createObjectURL(x);
          a.setAttribute("download", "new.pdf");
          a.click()
    }
    
    else {
      // URL Scenario
      const url = "";
      const filename = " ";
      fetch(url).then(function (t) {
        return t.blob().then((b) => {
          var a = document.createElement("a");
          a.href = URL.createObjectURL(b);
          a.setAttribute("download", filename);
          a.click();
        }
        );
      });
    }
  }

/**
   * Print functionality  working as expected
   */
print() {
  var dataView = new DataView(this.pdfSrc);
  const blob = new Blob([dataView], { type: 'application/pdf' });
  const element = document.createElement('iframe');   // Create an IFrame.
  element.style.visibility = "hidden";    // Hide the frame.
  element.src = URL.createObjectURL(blob); // Set source.
  document.body.appendChild(element);  // Add the frame to the web page.
  element.contentWindow.focus();       // Set focus.
  element.contentWindow.print();      // Print it.

  // var wnd = window.open(URL.createObjectURL(x));
  // wnd.print();
}

onFileSelected() {
  let $img: any = document.querySelector('#file');
  this.loadedfile = $img.files[0]

  if (typeof (FileReader) !== 'undefined') {
    let reader = new FileReader();

    reader.onload = (e: any) => {
      this.pdfSrc = e.target.result;
    };

    reader.readAsArrayBuffer($img.files[0]);
  }
}


}
