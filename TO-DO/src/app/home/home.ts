import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  features = [
    {
      icon: '✓',
      title: 'Create Tasks',
      description: 'Add new tasks quickly with a simple input field',
    },
    {
      icon: '☑️',
      title: 'Mark Complete',
      description: 'Check off tasks as you complete them',
    },
    {
      icon: '📋',
      title: 'View Progress',
      description: 'See all your completed tasks in one place',
    },
    {
      icon: '💾',
      title: 'Auto Save',
      description: 'Your tasks are saved automatically in your browser',
    },
  ];

  stats = [
    { number: '∞', label: 'Tasks You Can Add' },
    { number: '100%', label: 'Data Privacy' },
    { number: '⚡', label: 'Lightning Fast' },
  ];
}
