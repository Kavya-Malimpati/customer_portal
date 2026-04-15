# Developer Guide - React Hub Application

## Overview
This is a modern React application built with TypeScript, featuring a component library, multi-step forms, and JSON-driven configurations. The app uses a clean architecture with reusable components and follows accessibility best practices.

## Tech Stack
- **Frontend**: React 19.2, TypeScript, Vite
- **Styling**: TailwindCSS with custom CSS variables
- **Testing**: Vitest, Testing Library, Storybook
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Linting/Formatting**: ESLint, Prettier

## App Architecture

### Project Structure
```
src/
├── common/              # Reusable components and layouts
│   ├── components/      # UI component library
│   ├── Header/          # App header component
│   └── MainLayout/      # Main page layout wrapper
├── config/              # JSON configuration files
├── pages/               # Page components (routes)
├── scripts/             # Utility functions and services
├── styles/              # Global styles and design tokens
└── test/                # Testing utilities
```

### Data Flow Pattern

#### 1. JSON Configuration System
The app uses JSON files to configure forms and components dynamically:

**Location**: `src/config/`
- `login.json` - Field configurations for login form
- Additional JSON configs can be added for different forms

**Structure**:
```json
{
  "fieldName": {
    "id": "email",
    "type": "email", 
    "label": "Email Address",
    "placeholder": "Enter your email",
    "value": "",
    "isRequired": true,
    "hasError": false,
    "validationRules": {
      "required": { "value": true, "errorMessage": "Email is required" },
      "pattern": { "value": "EMAIL", "errorMessage": "Invalid email" }
    }
  }
}
```

#### 2. Component Communication
- **Props Flow**: Data flows down from parent to child components
- **Event Handling**: Child components communicate up via callback functions
- **State Management**: Local React state for form data and UI state

#### 3. Form Data Management
- Form state is managed in the `MultiStepForm` component
- Each step's data is stored in a `FormData` object with step names as keys
- Data persists across steps until form submission

## MultiStepForm Component

### What It Does
The `MultiStepForm` is a flexible component that creates wizard-style forms with multiple steps. It can work in two modes:

1. **JSON Mode**: Automatically generates form fields from JSON configuration
2. **Custom Mode**: Uses custom React components for each step

### How to Use It

#### Basic Setup
```typescript
import { MultiStepForm } from './common/components/MultiStepForm';

// For JSON-driven form
const jsonConfig = {
  formTitle: "User Registration",
  totalSteps: 3,
  steps: {
    step1: {
      title: "Personal Info",
      fields: {
        firstName: { /* field config */ },
        lastName: { /* field config */ }
      }
    }
  }
};

// Use the component
<MultiStepForm
  jsonConfig={jsonConfig}
  onSubmit={(data) => console.log('Form submitted:', data)}
  onCancel={() => console.log('Form cancelled')}
/>
```

#### Key Features
- **Navigation**: Automatic next/previous buttons with validation
- **Progress Tracking**: Built-in stepper component shows current progress
- **Data Persistence**: Form data is preserved when moving between steps
- **Validation**: Supports field-level validation rules from JSON
- **Accessibility**: Full keyboard navigation and screen reader support

### JSON Configuration for Forms

#### Step Configuration
```json
{
  "step1": {
    "title": "Step Title",
    "description": "Optional description",
    "fields": {
      "fieldName": {
        "type": "text|email|number|select|checkbox|radio|textarea|file",
        "label": "Display Label",
        "isRequired": true,
        "validationRules": { /* validation config */ }
      }
    }
  }
}
```

#### Supported Field Types
- **text**: Regular text input
- **email**: Email input with validation
- **number**: Numeric input
- **select**: Dropdown with options
- **checkbox**: Single checkbox
- **radio**: Radio button group
- **textarea**: Multi-line text
- **file**: File upload

## Component Library

### Common Components
All components are located in `src/common/components/` and include:

- **Button**: Accessible buttons with variants
- **TextField**: Text inputs with validation
- **Select**: Dropdown selectors
- **Checkbox/Radio**: Form controls
- **Card**: Content containers
- **Modal**: Dialog overlays
- **Table**: Data tables with sorting
- **And many more...**

### Component Usage Pattern
```typescript
// Components are designed to spread JSON configuration directly
const fieldConfig = {
  id: "email",
  type: "email",
  label: "Email",
  value: "user@example.com",
  isRequired: true
};

// Use with spread operator
<TextField {...fieldConfig} onChange={handleChange} />
```

## Application Flow

### 1. App Entry Point
- **File**: `src/main.tsx`
- Sets up React Router and renders the main App component

### 2. Routing
- **File**: `src/App.tsx`
- Defines routes:
  - `/` → Login page
  - `/home` → Home page wrapped in MainLayout
  - `*` → Redirects to login

### 3. Layout System
- **MainLayout**: Provides consistent header and page structure
- **Header**: Contains navigation and logout functionality
- **Pages**: Individual route components

### 4. Styling System
- **TailwindCSS**: Utility-first CSS framework
- **CSS Variables**: Custom design tokens in `src/styles/tokens.css`
- **Component Styles**: Each component can have its own CSS

## Key Development Concepts

### 1. Type Safety
- Full TypeScript support with strict typing
- Interface definitions for all component props
- Type-safe form data handling

### 2. Accessibility First
- All components follow WCAG 2.2 guidelines
- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility

### 3. Testing Strategy
- **Unit Tests**: Component testing with Vitest
- **Integration Tests**: Testing Library for user interactions
- **Storybook**: Component documentation and testing
- **Coverage**: Test coverage reporting available

### 4. Form Validation
- JSON-driven validation rules
- Real-time validation feedback
- Accessible error messages
- Custom validation patterns

## Getting Started

### Development Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Launch Storybook
npm run storybook
```

### Creating New Components
1. Create component folder in `src/common/components/`
2. Add TypeScript interface for props
3. Implement component with accessibility in mind
4. Create Storybook story for documentation
5. Write unit tests
6. Export from `index.ts`

### Adding New Pages
1. Create page folder in `src/pages/`
2. Implement page component
3. Add route to `App.tsx`
4. Update navigation if needed

### Working with JSON Configuration
1. Define field schemas in `src/config/`
2. Use existing field types when possible
3. Follow validation rule patterns
4. Test with MultiStepForm component

## Best Practices

### Code Organization
- Keep components small and focused
- Use TypeScript interfaces for all props
- Follow naming conventions (PascalCase for components)
- Group related functionality

### Performance
- Use React hooks appropriately
- Avoid unnecessary re-renders
- Lazy load components when beneficial
- Optimize bundle size

### Accessibility
- Always provide proper labels
- Use semantic HTML
- Test with keyboard navigation
- Include ARIA attributes when needed

### Testing
- Write tests for critical user flows
- Test component props and interactions
- Include accessibility testing
- Maintain good test coverage

## Common Patterns

### 1. Form Component Pattern
```typescript
// Component accepts JSON config and spreads it
interface ComponentProps extends FieldConfig {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Component: React.FC<ComponentProps> = ({ onChange, ...config }) => {
  return <input {...config} onChange={onChange} />;
};
```

### 2. Data Flow Pattern
```typescript
// Parent manages state and passes data down
const Parent = () => {
  const [formData, setFormData] = useState({});
  
  const handleStepChange = (stepName: string, data: unknown) => {
    setFormData(prev => ({ ...prev, [stepName]: data }));
  };
  
  return <MultiStepForm onStepChange={handleStepChange} />;
};
```

### 3. Event Handling Pattern
```typescript
// Consistent event handling across components
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  onDataChange({ [name]: value });
};
```

## Troubleshooting

### Common Issues
1. **TypeScript Errors**: Check interface definitions match component props
2. **Styling Issues**: Verify TailwindCSS classes and CSS variable usage
3. **Form Validation**: Ensure JSON validation rules are properly defined
4. **Component Imports**: Use proper import paths and index files

### Development Tips
- Use browser dev tools for debugging React components
- Leverage Storybook for component development
- Run tests frequently during development
- Use TypeScript's strict mode for better error catching

This guide provides the foundation for understanding and working with the React Hub application. The architecture promotes reusability, maintainability, and accessibility while providing flexibility for different use cases.