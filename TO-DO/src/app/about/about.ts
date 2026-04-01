import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'Angular',
      role: 'Framework',
      icon: '⚡',
      description: 'Modern, powerful web framework for building scalable applications',
    },
    {
      name: 'TypeScript',
      role: 'Language',
      icon: '📘',
      description: 'Type-safe language that compiles to clean, readable JavaScript',
    },
    {
      name: 'Ocean Blue Theme',
      role: 'Design',
      icon: '🌊',
      description: 'Calm, professional design system for optimal user experience',
    },
  ];

  milestones = [
    { year: '2024', title: 'Project Started', description: 'Created modern TO-DO app with Angular' },
    { year: '2025', title: 'Features Added', description: 'Implemented completed tasks view and persistent storage' },
    { year: '2026', title: 'Enhancement', description: 'Added home page and improved UI/UX' },
  ];
}
