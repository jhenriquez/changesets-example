# changesets-example
A basic repository to show case the changeset tool

## Workflow

This repository demonstrates automated versioning and changelog management using Changesets with a three-branch workflow:

### Branch Structure
- **development**: Feature development and integration
- **staging**: Pre-release testing with release candidates
- **main**: Production releases

### Automated Workflows

1. **Pull Requests to Development**
   - Validates that a changeset exists
   - Ensures proper change documentation

2. **Merges to Staging** 
   - Enters prerelease mode (rc)
   - Creates version PR with updated changelogs and prerelease versions

3. **Merges to Main**
   - Exits prerelease mode
   - Creates version PR with final versions and updated changelogs

### Usage

1. **Create a changeset**: `npx changeset`
2. **Version packages**: `npm run version`
3. **Release**: `npm run release`

### Getting Started

```bash
npm install
npx changeset  # Create your first changeset
```
