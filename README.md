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

## Development workflow

### 1. Feature Development
```bash
# Work on development branch
git checkout development
git checkout -b feat/my-changes

# Make your changes
# ...

# Create a changeset
npx changeset

# Commit and push
git add .
git commit -m "feat: your feature description"
git push -u origin feat/my-changes

# Create PR to development
# The validate-changeset action will check for changesets
```

### 2. Staging Release
```bash
# Merge development to staging
git checkout staging
git merge development
git push

# This triggers staging-release.yml which:
# - Enters prerelease mode (rc)
# - Creates a version PR with updated changelogs
```

### 3. Production Release
```bash
# Merge staging to main
git checkout main
git merge staging
git push

# This triggers production-release.yml which:
# - Exits prerelease mode
# - Creates a version PR with final versions
```
