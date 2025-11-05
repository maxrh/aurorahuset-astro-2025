# ✅ Production Deployment Checklist

Use this checklist before deploying to production with authenticated CMS.

## Pre-Deployment Checks

### 1. Configuration Files
- [x] `public/admin/config.yml` - Local development config (proxy backend)
- [x] `public/admin/config-production.yml` - Production config (DecapBridge)
- [x] `public/admin/index.html` - Auto-detects environment
- [x] Collections match between both configs

### 2. Documentation
- [x] `AUTHENTICATION.md` - Setup guide created
- [x] `CLOUDFLARE-DEPLOY.md` - Deployment guide created
- [x] `PRODUCTION-AUTH-SETUP.md` - Quick reference created
- [x] `README.md` - Updated with CMS instructions

### 3. Code Quality
- [x] All files saved and committed
- [ ] No TypeScript errors
- [ ] No console warnings in local dev
- [ ] Test build runs successfully: `npm run build`

### 4. Content Files
- [x] `src/data/siteInfo.json` - Contains correct production data
- [ ] Review all phone numbers are correct
- [ ] Review all email addresses are correct
- [ ] Verify vacancy count is accurate
- [ ] Check company information is up to date

## DecapBridge Setup

### 5. DecapBridge Account
- [ ] Account created at https://decapbridge.com/
- [ ] Site ID verified: `cfc07566-584e-4a39-8090-6b720205b1e3`
- [ ] Repository connected: `maxrh/aurorahuset-astro-2025`
- [ ] Branch configured: `dev` (or `main`)
- [ ] GitHub permissions granted

### 6. Authorized Users
- [ ] Added primary admin email address
- [ ] Added additional user emails (if any)
- [ ] Test user received invitation email
- [ ] At least one user can login to DecapBridge

## GitHub Repository

### 7. Repository Settings
- [ ] Repository is accessible to DecapBridge
- [ ] Branch protection rules configured (optional)
- [ ] Webhooks enabled (automatic via DecapBridge)

### 8. Push Changes
```bash
# Review your changes
git status

# Add all changes
git add .

# Commit with descriptive message
git commit -m "Setup production CMS authentication with DecapBridge"

# Push to GitHub
git push origin dev
```

## Cloudflare Pages Setup

### 9. Connect Repository
- [ ] Cloudflare Pages project created
- [ ] Repository connected
- [ ] Build settings configured:
  - Build command: `npm run build`
  - Build output: `dist`
  - Root directory: `/`
  - Node version: 18 or higher

### 10. Environment & Build
- [ ] Environment variables set (if needed)
- [ ] Custom domain configured (optional)
- [ ] First build triggered
- [ ] Build completed successfully
- [ ] Preview URL accessible

## Testing

### 11. Production CMS Access
- [ ] Navigate to `https://yourdomain.com/admin`
- [ ] Verify production config is loaded (check console)
- [ ] Click "Login with GitHub"
- [ ] Complete OAuth flow
- [ ] CMS dashboard loads successfully
- [ ] Can view all collections (Site Info, Sider, Blog)

### 12. CMS Functionality
- [ ] Can edit "Site Information"
- [ ] Changes save successfully
- [ ] Changes appear in GitHub commits
- [ ] Can create new page
- [ ] Can edit existing page
- [ ] Media upload works (if configured)

### 13. Website Verification
- [ ] Homepage loads correctly
- [ ] Contact information displays correctly
- [ ] Vacancy count shows correct number
- [ ] All pages accessible
- [ ] No broken links
- [ ] Mobile responsive
- [ ] Dark mode works

## Post-Deployment

### 14. Monitoring
- [ ] Set up uptime monitoring (optional)
- [ ] Configure error logging (optional)
- [ ] Add Google Analytics (if needed)
- [ ] Test contact forms (if any)

### 15. Team Onboarding
- [ ] Share `AUTHENTICATION.md` with team
- [ ] Share CMS admin URL
- [ ] Provide login instructions
- [ ] Document content workflow

### 16. Security
- [ ] Review authorized users list
- [ ] Set up 2FA for GitHub account
- [ ] Document emergency access procedures
- [ ] Schedule regular user access review

## Troubleshooting

If something doesn't work:

1. **Check browser console** for error messages
2. **Review build logs** in Cloudflare Dashboard
3. **Verify DecapBridge** site configuration
4. **Check GitHub** repository permissions
5. **Read documentation** files created
6. **Test locally** first with `npm run dev`

## Success Criteria

Your production deployment is successful when:

✅ Website loads on production URL  
✅ `/admin` requires GitHub login  
✅ Authorized users can access CMS  
✅ Content edits save to GitHub  
✅ Changes trigger automatic deploys  
✅ All contact information displays correctly  

---

**Date Completed**: _______________  
**Deployed By**: _______________  
**Production URL**: _______________  
**Notes**: 

