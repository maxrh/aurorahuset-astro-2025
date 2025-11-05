# Cloudflare Pages Deployment Guide

## Quick Deploy Steps

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Setup production CMS authentication"
   git push origin dev
   ```

2. **Connect to Cloudflare Pages**:
   - Go to Cloudflare Dashboard → Pages
   - Click "Create a project" → "Connect to Git"
   - Select repository: `maxrh/aurorahuset-astro-2025`
   - Select branch: `dev` (or `main` for production)

3. **Configure Build Settings**:
   ```
   Build command: npm run build
   Build output directory: dist
   Root directory: /
   ```

4. **Environment Variables** (if needed):
   - Click "Environment variables"
   - Add any required variables

5. **Deploy**:
   - Click "Save and Deploy"
   - Wait for build to complete

## CMS Authentication on Cloudflare Pages

The `/admin` route is automatically protected on both staging and production using DecapBridge PKCE authentication.

### How it works:
1. User visits `/admin` on staging or production:
   - Staging: `https://aurorahuset-astro-2025.pages.dev/admin`
   - Production: `https://aurorahuset.dk/admin` (when configured)
2. Decap CMS loads `config-production.yml`
3. User clicks "Login with GitHub"
4. GitHub OAuth flow authenticates the user
5. DecapBridge verifies user is authorized
6. User gains access to CMS

### No additional Cloudflare configuration needed!

The authentication is handled entirely client-side by:
- Decap CMS JavaScript
- DecapBridge OAuth service
- GitHub OAuth

## Optional: Add Additional Security Layer

If you want to add HTTP Basic Auth or Cloudflare Access to `/admin`:

### Option 1: Cloudflare Access (Recommended)
1. Go to Cloudflare Dashboard → Zero Trust
2. Create an Access Application
3. Set path to `/admin` or `/admin/*`
4. Configure authentication (email, Google, etc.)
5. Add authorized users

### Option 2: HTTP Basic Auth via Worker
1. Create a Cloudflare Worker
2. Add route for `/admin/*`
3. Implement Basic Auth in Worker code

**Note**: These are additional layers. DecapBridge authentication is already secure.

## Deployment Environments

### Staging (Testing)
- **URL**: https://aurorahuset-astro-2025.pages.dev/
- **Branch**: `dev`
- **Purpose**: Test changes before production
- **CMS Access**: `/admin` with DecapBridge authentication

### Production
- **URL**: https://aurorahuset.dk (when configured)
- **Branch**: `main` (when ready)
- **Purpose**: Live public website

## Deployment Workflow

### For Content Updates
1. Edit content in `/admin` interface
2. Changes auto-commit to GitHub `dev` branch
3. Cloudflare Pages auto-deploys to staging
4. Test at https://aurorahuset-astro-2025.pages.dev/
5. Merge to `main` when ready for production

### For Code/Design Updates
```bash
# 1. Development branch
git checkout dev
git add .
git commit -m "Your changes"
git push origin dev
# Auto-deploys to staging: https://aurorahuset-astro-2025.pages.dev/

# 2. Test on staging
# Visit https://aurorahuset-astro-2025.pages.dev/
# Test all functionality
# Verify changes look correct

# 3. Production deployment (when ready)
git checkout main
git merge dev
git push origin main
# Auto-deploys to production domain
```

## Custom Domain Setup (When Ready for Production)

1. **Add Custom Domain in Cloudflare Pages**:
   - Go to your Pages project
   - Click "Custom domains"
   - Add `aurorahuset.dk` and `www.aurorahuset.dk`

2. **Update DNS** (if domain not in Cloudflare):
   - Add CNAME record pointing to your Pages URL

3. **Update CMS Config**:
   - Update `site_url` in `config-production.yml` to your custom domain
   - Commit and push changes

## Monitoring

- **Build Logs**: Cloudflare Dashboard → Pages → Your Project → Deployments
- **CMS Activity**: Check GitHub commits for CMS changes
- **Errors**: Browser console when accessing `/admin`

## Troubleshooting

### Build Failures
- Check build logs in Cloudflare Dashboard
- Verify `package.json` scripts are correct
- Ensure all dependencies are in `package.json`

### CMS Login Issues
- Verify DecapBridge site ID is correct
- Check user is authorized in DecapBridge dashboard
- Clear browser cache and try again
- Check browser console for errors

### 404 on /admin
- Ensure `public/admin/` folder is in build output
- Check `dist/admin/` exists after build
- Verify `public/_redirects` file is deployed
- **Important**: Do NOT create `src/pages/admin.astro` - it conflicts with static `/admin` folder
- Cloudflare Pages reads `public/_redirects` for redirect rules

### Admin redirect not working
- Check `public/_redirects` exists with correct format:
  ```
  /admin /admin/index.html 200
  ```
- Verify in browser DevTools → Network that `/admin` returns 200, not 404
- Clear Cloudflare cache if needed (Cloudflare Dashboard → Caching → Purge Everything)
