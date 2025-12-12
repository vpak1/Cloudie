# Code Review Template

**PR Title:** Add functional + non-functional tests, test fixtures, and governance templates  
**PR Link:** https://github.com/vpak1/Cloudie  
**Author:** Sofya  
**Reviewer:** Sofya  
**Date:** 2025-12-11  
**Branch:** feature/sofya → staging

---

## 1. Overview

**Summary of Changes:**
- Added 2 functional tests (API call + UI rendering)
- Added 1 non-functional test (checks `units=imperial` configuration)
- Added shared test fixture (`weatherFixture.js`)
- Added governance templates (issue + code review)

**Related Issues/Tickets:**
- [ ] Issue #001: Missing functional tests  
- [ ] Issue #002: Missing non-functional test  
- [ ] Issue #003: Missing governance templates  

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

- [x] Tests added or updated  
- [x] Tests pass locally  
- [x] Tests pass in CI (GitHub Actions)  

**How was this tested?**
> Ran `npm test -- --watch=false`.  
> Verified all 5 tests pass: 2 smoke (existing), 2 functional, 1 non-functional.  
> Confirmed test workflow triggers on push to `staging`.

---

## 4. Risks & Impact

- [x] Low  

**Impact Description:**
> Only test-related files and documentation were added.  
> No production code was modified, so risk is minimal.

---

## 5. Reviewer Decision

- [x] Approve  
- [ ] Request changes  

**Final Comments:**
> Everything meets assignment requirements.  
> Safe to merge into `staging`.
