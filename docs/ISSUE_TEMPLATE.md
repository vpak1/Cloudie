# Issue Tracking Template

---

## Issue Details 1

| Field | Value |
|-------|-------|
| **Issue ID** | PROJ-001 |
| **Title** | CI Pipeline Fails on Docker Build due to Uppercase Repo Name |
| **Type** | 🐛 Bug  |
| **Priority** | 🟠 High  |
| **Status** | ✅ Done (Resolved)|
| **Assignee** | Viktoriya |
| **Reporter** | Viktoriya |
| **Created Date** | [2025-12-11] |
| **Due Date** | [2025-12-14] |

---

## Description

### Summary
> The CI pipeline was failing during the "Docker Build Test" job. The failure occurs because the repository name "Cloudie" contains an upper case letter, but we are passing it directly to the Docker build command as a tag. Docker strictly requires image tags to be lowercase

### For Bugs: Steps to Reproduce
1. Push a commit to any branch to trigger the CI Pipeline
2. Go to the Actions tab in GitHub
3. Click on the running workflow
4. Observe the failure in the build-docker job

### Expected Behavior
> The CI pipeline should successfully build the Docker image to verify the Dockerfile is valid, regardless of the repository casing

### Actual Behavior
> The pipeline fails with an error stating the repository name must be lowercase

---

## Technical Details

### Affected Components
- [ ] Frontend
- [ ] Backend API
- [ ] Database
- [ ] Docker/Deployment
- [x] CI/CD Pipeline

### Error Messages/Logs
```
/usr/bin/docker buildx build ... --tag vpak1/Cloudie:test ...
ERROR: failed to build: invalid tag "vpak1/Cloudie:test": repository name must be lowercase
Error: buildx failed with: ERROR: failed to build: invalid tag "vpak1/Cloudie:test": repository name must be lowercase
```

---

## Acceptance Criteria

-[x] The build-docker job in ci.yml automatically converts the repository name to lowercase
-[x] The CI pipeline passes successfully (green checkmark) on the next push

---

## Resolution

### Solution Implemented

Updated .github/workflows/ci.yml to use the official docker/metadata-action. This action automatically handles the casing of the repository name and generates valid Docker tags without manual string manipulation

### Pull Request(s)
- PR #___: Fix CI Docker build casing

### Resolution Date

2025-12-11
---

## Issue Details 2

| Field | Value |
|-------|-------|
| **Issue ID** | PROJ-002 |
| **Title** | Smoke Tests Fail with "Cross Origin Forbidden" & Connection Refused |
| **Type** | 🐛 Bug  |
| **Priority** | 🟠 High  |
| **Status** | ✅ Done (Resolved)|
| **Assignee** | Viktoriya |
| **Reporter** | Viktoriya |
| **Created Date** | [2025-12-11] |
| **Due Date** | [2025-12-14] |

---

## Description

### Summary
> The smoke tests (src/smoke.test.js) fail immediately when running

### For Bugs: Steps to Reproduce
1. Run npm test src/smoke.test.js without specific environment settings
2. Observe errors

### Expected Behavior
> Smoke tests should run in a Node.js environment (ignoring browser security rules) and allow network requests to the local Docker container

### Actual Behavior
> he test runner throws a security error: Error: Cross origin http://localhost forbidden

---

## Technical Details

### Affected Components
- [ ] Frontend
- [ ] Backend API
- [ ] Database
- [ ] Docker/Deployment
- [x] CI/CD Pipeline
- [x] Testing

### Error Messages/Logs
```
console.error
  Error: Cross origin http://localhost forbidden
      at dispatchError (.../jsdom/living/xhr/xhr-utils.js:63:19)
      at Object.validCORSHeaders (.../jsdom/living/xhr/xhr-utils.js:75:5)
```

---

## Acceptance Criteria

-[x] Smoke tests run in node environment instead of jsdom
-[x] cross-fetch is used to handle network requests in Node
-[x] Tests pass successfully against the Docker container

---

## Resolution

### Solution Implemented

Switched the Jest environment to node directly inside the test file and imported cross-fetch to enable server-side HTTP requests

### Pull Request(s)
- PR #___: Fix Jest environment and smoke test network logic

### Resolution Date

2025-12-11
---

