# Troubleshooting Guide

## Common Issues and Solutions

### 1. "Failed to find where HEAD diverged from main"

This warning appears when the main branch doesn't exist or isn't synced. This is normal for new repositories.

**Solution**: Create and push the main branch:
```bash
git checkout main
git push -u origin main
```

### 2. GitHub Actions Not Running

**Check**: 
- Repository has Actions enabled
- Correct branch names in workflow files
- `GITHUB_TOKEN` has sufficient permissions

### 3. Changeset Validation Failing

**Common causes**:
- No changeset file in `.changeset/` directory
- Changeset file is `.changeset/README.md` (not counted)
- Changeset was already consumed by versioning

**Solution**: Create a new changeset:
```bash
npx changeset
```

### 4. Prerelease Mode Issues

**Check if in prerelease mode**:
```bash
cat .changeset/pre.json
```

**Exit prerelease manually**:
```bash
npx changeset pre exit
```

**Enter prerelease manually**:
```bash
npx changeset pre enter rc
```

### 5. Version PR Not Created

**Common causes**:
- No changesets to process
- Already in version PR state
- Insufficient GitHub token permissions

**Solution**: Check changeset status:
```bash
npx changeset status
```

### 6. Merge Conflicts in Generated Files

**For package.json conflicts**:
1. Keep the higher version number
2. Merge dependency changes carefully

**For CHANGELOG.md conflicts**:
1. Keep both changelog entries
2. Maintain chronological order (newest first)

## Testing the Setup

### Test Changeset Creation
```bash
npx changeset
# Follow prompts to create test changeset
```

### Test Versioning  
```bash
npm run version
# Should update package.json and CHANGELOG.md
# Reset with: git checkout HEAD -- package.json CHANGELOG.md
```

### Test Branch Protection

Set up branch protection rules in GitHub:
- Require PR reviews
- Require status checks to pass
- Include "Validate Changeset" check for development

## Getting Help

1. Check the [Changesets documentation](https://github.com/changesets/changesets)
2. Review workflow logs in GitHub Actions tab
3. Verify branch structure matches configuration