# Branch Setup Guide

This repository is configured for a three-branch workflow with Changesets automation.

## Branch Structure

### 1. Development Branch
- **Purpose**: Feature development and integration
- **Automation**: Validates that changesets exist on PRs
- **Workflow File**: `.github/workflows/validate-changeset.yml`

### 2. Staging Branch  
- **Purpose**: Pre-release testing with release candidates
- **Automation**: Enters prerelease mode (rc) and creates version PRs
- **Workflow File**: `.github/workflows/staging-release.yml`

### 3. Main Branch
- **Purpose**: Production releases
- **Automation**: Exits prerelease mode and creates final version PRs
- **Workflow File**: `.github/workflows/production-release.yml`

## Setting Up Branches

To set up the branch structure in your repository:

```bash
# Create and push development branch
git checkout -b development
git push -u origin development

# Create and push staging branch  
git checkout -b staging
git push -u origin staging

# Ensure main branch exists
git checkout main
git push -u origin main
```

## Workflow Usage

### 1. Feature Development
```bash
# Work on development branch
git checkout development

# Make your changes
# ...

# Create a changeset
npx changeset

# Commit and push
git add .
git commit -m "feat: your feature description"
git push

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

## Notes

- The GitHub Actions require `GITHUB_TOKEN` to create PRs
- Changesets are consumed during versioning
- Always create changesets for user-facing changes
- The automation will handle version bumping and changelog generation