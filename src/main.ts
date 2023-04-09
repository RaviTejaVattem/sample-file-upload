import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FileUploadComponent } from '../file-upload/file-upload.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FileUploadComponent],
  template: `
  <file-upload requiredFileType="application/pdf"></file-upload>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
