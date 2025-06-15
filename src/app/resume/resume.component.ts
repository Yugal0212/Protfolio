import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  resume: any = {
    name: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    gender: "",
    skills: [],
    languagesKnown: [],
    linkedInUrl: "",
    workExperience: "",
    education: [{}]
  };

  education: any = {};

  // Method to handle general form inputs
  fill_info(e: any) {
    this.resume = { ...this.resume, [e.target.name]: e.target.value };
  }

  // Method to handle education form inputs
  addEducation(e: any) {
    this.education = { ...this.education, [e.target.name]: e.target.value };
  }

  // Add education entry to resume and reset education form
  educationQulitify(e: any) {
    e.preventDefault();
    this.resume.education.push({ ...this.education });
    console.log(this.resume);  // Log the updated resume object for debugging purposes
    this.education = {}; // Reset education form
  }
}
