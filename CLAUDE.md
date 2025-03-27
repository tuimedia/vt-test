# CLAUDE.md - AI Assistant Guidelines

## Commands
- **Dev server**: `yarn dev`
- **Build**: `yarn build`
- **Preview**: `yarn preview`
- **Lint**: 
  - `yarn lint` (all linting)
  - `yarn lint:oxlint` (correctness)
  - `yarn lint:eslint` (style)
- **Format**: `yarn format` (prettier)

## Code Style
- **Formatting**: No semicolons, single quotes, 2-space indent, 100 char line limit
- **Imports**: Use path alias `@/` for src directory imports
- **File Structure**: Follow Vue 3 Composition API patterns
- **Components**: SFC pattern with <script setup>, kebab-case for component names
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Error Handling**: Use try/catch for async operations

This Vue.js project uses Vite, Vue Router, and modern Vue 3.5+ features.
Run all lint commands before committing changes.