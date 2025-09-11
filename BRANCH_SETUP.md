# Branch Setup Guide

This repository is configured for a three-branch workflow with Changesets automation.

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
