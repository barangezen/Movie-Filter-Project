### What is this project ?
It's a simple movie filtering project

## Getting Started
First, run the project in local server with : 

### `npm start`

Open http://localhost:3000 with your browser to see the result.

Also you can try https://baran-frontend-challenge.netlify.app/ with online.

Build the project: 

### `npm run build`

## Dependencies

-React Query for state management.

-React Router Dom for routing.

-i18next for localization

-React bootstrap for responsive grid and component set.

-Sass, scss for styling.

## Folder Structure
    ├── build                   # Compiled files 
    ├── node_modules            # Node Module files 
    ├── public                  # Static files
     │   ├── feed               # Movie and Series json files
     │   ├── locales            # Local language files
    ├── src                     # Source files 
    │   ├── assets              # Project asset files
    │   ├── components          # Components
    │   └── helpers             # Global helper files
    │   └── hooks               # Custom hooks files
    │   └── lang                # Localization files
    │   └── models              # Data models files
    │   └── screens             # Screens files
    │   └── services            # App services files
    
## Custom Hooks

```javascript
export default function useFetch<T>(getFunction: () => Promise<any>) {
  return useQuery<{ total: number; entries: T[] }>("data", getFunction);
}
```
