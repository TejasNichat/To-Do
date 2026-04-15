# TO-DO Application

A modern, responsive Angular to-do list application built with Angular 18+ and standalone components. The app allows users to create, manage, and track their tasks with a clean, intuitive interface.

## Features

- ✅ **Add Tasks** - Quickly add new tasks with input field or Enter key
- ☑️ **Toggle Completion** - Mark tasks as done with one click
- 🗑️ **Delete Tasks** - Remove tasks from the list
- 📋 **Completed Tasks View** - Separate section displaying only completed tasks
- 💾 **Persistent Storage** - All tasks are automatically saved to browser's localStorage
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI** - Clean, minimalist design with smooth interactions

## Project Structure

```
src/
├── app/
│   ├── app.ts                 # Root component with main task management logic
│   ├── app.html               # Main template with task input and list
│   ├── app.css                # Global styles
│   ├── selected-todos/        # Completed tasks component
│   │   ├── selected-todos.ts
│   │   ├── selected-todos.html
│   │   ├── selected-todos.css
│   │   └── selected-todos.spec.ts
│   ├── app.routes.ts          # Route configuration
│   └── app.config.ts          # App configuration
├── main.ts                    # Application bootstrap
├── index.html                 # HTML entry point
└── styles.css                 # Base styles
```

## Component Architecture

### 1. **App Component** (`app.ts`)
The root component that manages the entire application state.

**Responsibilities:**
- Manages the main to-do list state using Angular signals
- Handles task operations: add, toggle, remove
- Persists data to localStorage
- Passes data to child components

**Key Methods:**
```typescript
add(text?: string, input?: HTMLInputElement)    // Add new task
toggle(id: number)                               // Toggle task completion status
remove(id: number)                               // Remove task from list
```

**Data Model:**
```typescript
interface Todo {
  id: number;        // Unique identifier (timestamp)
  text: string;      // Task description
  done: boolean;     // Completion status
}
```

### 2. **SelectedTodos Component** (`selected-todos/`)
A child component that displays only completed tasks.

**Responsibilities:**
- Receives all todos via `@Input()`
- Filters and displays only tasks where `done === true`
- Emits toggle and remove events to parent

**Inputs & Outputs:**
```typescript
@Input() todos: Todo[] = [];              // All tasks from parent
@Output() toggle = new EventEmitter<number>();   // Emit toggle event
@Output() remove = new EventEmitter<number>();   // Emit remove event
```

**Features:**
- Shows "Completed Tasks" heading
- Lists only finished tasks with strikethrough text
- Allows unchecking completed tasks
- Allows deleting completed tasks
- Shows empty state message when no tasks are completed

## How Components are Connected

```
┌─────────────────────────────────────────────────────────┐
│                    App Component                        │
│  - Manages todos signal                                 │
│  - Handles add/toggle/remove logic                      │
│  - Persists to localStorage                             │
└─────────────────────────────────────────────────────────┘
            │                              │
            ├─ [todos]                     ├─ [todos]
            │                              │
    ┌───────▼──────────┐          ┌───────▼────────────────┐
    │  Main Todo List  │          │  SelectedTodos Comp.   │
    │  - All tasks     │          │  - Completed tasks     │
    │  - Add new       │          │  - Filtered view       │
    │  - Toggle/Delete │          │  - Filtered list       │
    └──────────────────┘          └────────────────────────┘
            │                              │
            ├─ (toggle)="toggle($event)"  ├─ (toggle)="toggle($event)"
            │ (remove)="remove($event)"   │ (remove)="remove($event)"
            │                              │
            └──────────────────┬───────────┘
                               │
                    Parent methods called
```

## Data Flow

### Adding a Task
```
1. User types in input field
2. Presses Enter or clicks "Add" button
3. add() method creates new Todo object
4. Adds to todos signal
5. Signal change triggers localStorage persistence
6. Both components re-render with updated todos
```

### Toggling Task Completion
```
1. User clicks checkbox on any task
2. toggle() method updates done property
3. Todos signal updates
4. localStorage persists changes
5. App component re-renders
6. SelectedTodos component filters and displays updated list
```

### Removing a Task
```
1. User clicks delete (✕) button
2. remove() method filters out task
3. Todos signal updates
4. localStorage persists changes
5. Both lists update automatically
```

## State Management

The application uses **Angular Signals** for reactive state management:

```typescript
todos = signal<Todo[]>([]);  // Main state container
```

**Benefits:**
- Fine-grained reactivity
- Automatic change detection
- Clean, readable code
- No RxJS overhead for simple use cases

**Persistence with Effects:**
```typescript
effect(() => {
  // Runs whenever todos signal changes
  localStorage.setItem('todos', JSON.stringify(this.todos()));
});
```

## Styling

The application uses a modern color scheme with CSS variables:

```css
--bg: #f7f7fb              /* Light background */
--card: #ffffff            /* Card background */
--muted: #6b7280           /* Secondary text */
--accent: #2563eb          /* Primary accent color (blue) */
```

### Responsive Design
- Centered layout with max-width of 600px
- Flexible for mobile and desktop screens
- Smooth hover effects and transitions
- Clean typography with standardized spacing

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Angular CLI (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TejasNichat/To-Do.git
   cd To-Do
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open in browser**
   ```
   http://localhost:4200
   ```

### Build for Production
```bash
npm run build
# or
ng build
```

## Usage

### Adding Tasks
- Type your task in the input field
- Press **Enter** or click the **Add** button
- Task appears in the main list

### Managing Tasks
- **Check off**: Click the checkbox to mark as complete
- **Delete**: Click the ✕ button to remove a task
- **Uncheck**: Click checkbox again to mark as incomplete

### View Completed Tasks
- Scroll down to see the "Completed Tasks" section
- Only finished tasks appear here
- You can still toggle or delete from this section

## Technologies Used

- **Angular 18+** - Modern web framework with standalone components
- **TypeScript** - Type-safe JavaScript
- **Angular Signals** - Reactive state management
- **CSS3** - Modern styling with CSS variables
- **localStorage API** - Browser-based persistence

## Key Angular Features Demonstrated

- ✅ Standalone Components
- ✅ Angular Signals (`signal()`, `effect()`)
- ✅ Two-way data binding (`[(ngModel)]`)
- ✅ Property binding (`[property]`)
- ✅ Event binding (`(event)`)
- ✅ Template syntax (`*ngIf`, `*ngFor`)
- ✅ Component communication (`@Input()`, `@Output()`)
- ✅ Dependency injection
- ✅ Component exports and imports

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Development

### File Naming Convention
- Components: `*.component.ts` or `*.ts`
- Templates: `*.html`
- Styles: `*.css`
- Tests: `*.spec.ts`

### Testing
```bash
npm test
# or
ng test
```

Unit tests are included for:
- App component functionality
- SelectedTodos filtering logic

## Future Enhancements

Potential features to add:
- 🏷️ Task categories/tags
- 🔍 Search functionality
- 📅 Due dates
- 🔄 Task priority levels
- 🌙 Dark mode toggle
- 📊 Statistics dashboard
- 🔄 Undo/Redo functionality
- ☁️ Cloud sync (Firebase, etc.)

## Project Status

This is a demonstration project showcasing Angular best practices and modern standalone component architecture. It's suitable for learning Angular fundamentals and as a starting point for more complex applications.

## License

MIT License - Feel free to use this project for learning or as a template.

## Author

Created by [Your Name] - Built with Angular 18+

## Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Happy task managing!** 📝✨

## PR Updates

<!-- PR-UPDATES-START -->
No updates yet
<!-- PR-UPDATES-END -->
