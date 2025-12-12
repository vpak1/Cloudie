# Code Review Template

**PR Title:** Add completed project with docker, smoke, functional + non-functional tests, test fixtures, and governance templates  
**PR Link:** https://github.com/vpak1/Cloudie  
**Author:** Sofya  
**Reviewer:** Sofya  
**Date:** 2025-12-11  
**Branch:** staging → main

---

## 1. Overview

**Summary of Changes:**
- Added successfuly builded Dockerfile
- Added docker-compose.yml with staging & production
- Added 2 smoke tests
- Added 3 working workflows
- Added 2 functional tests (API call + UI rendering)
- Added 1 non-functional test (checks `units=imperial` configuration)
- Added shared test fixture (`weatherFixture.js`)
- Added governance templates (issue + code review)

**Related Issues/Tickets:**
- [ ] Issue #PROJ-001: CI Pipeline Fails on Docker Build due to Uppercase Repo Name 
- [ ] Issue #PROJ-002: Smoke Tests Fail with "Cross Origin Forbidden" & Connection Refused
- [ ] Issue #PROJ-003: Add functional + non-functional tests and fixture data

---

## 2. Code Quality

- [x] Code is easy to read and understand  
- [x] Follows project style conventions  
- [x] No duplication  
- [x] Appropriate comments where needed  

**Notes:**
> Test files are clearly separated (functional, nonfunctional, smoke).  
> Fixture file improves test clarity and avoids duplication.

---

## 3. Testing

- [x] Tests if Dockerfile builds successfully
- [x] Tests added or updated  
- [x] Tests pass locally  
- [x] Tests pass in CI (GitHub Actions)  

**How was this tested?**
> Ran `npm test -- --watch=false`. 
> Verified all 5 tests pass: 2 smoke (existing), 2 functional, 1 non-functional.
> Confirmed test workflow triggers on push to `staging`.
> Confirmed docker-compose up workd correctly

---

## 4. Risks & Impact

- [x] Low  

**Impact Description:**
> Completed project with all functionalities.  
> Everything was tested and all workflows running correctly, so risk is minimal.

---

## 5. Reviewer Decision

- [x] Approve  
- [ ] Request changes  

**Final Comments:**
> Everything meets assignment requirements.  
> Safe to merge into `main`.
