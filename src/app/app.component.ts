import { Component, ViewChild, ElementRef } from '@angular/core';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('content', {static: false}) el!: ElementRef;

  title = 'PrintPDF';

  generatePDF() {
    let pdf = new jsPDF('portrait','pt','a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("contrato.pdf");
      }
    });
  }

}
