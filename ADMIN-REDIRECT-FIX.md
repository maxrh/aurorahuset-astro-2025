# Admin Redirect Fix for Cloudflare Pages

## Problem
The `/admin` route returns 404 or doesn't load correctly on Cloudflare Pages staging/production.

## Root Cause
Astro static builds don't support dynamic redirects. The `admin.astro` redirect page doesn't work in production.

## Solution

### 1. Files Required

**`public/_redirects`** (Cloudflare Pages format):
```
# Admin redirect - serve the CMS at /admin
/admin /admin/index.html 200
/admin/* /admin/:splat 200
```

**`public/admin/index.html`** (should already exist):
- Contains the Decap CMS initialization code
- Auto-detects local vs production environment

### 2. Files Configuration

✅ **Keep** `src/pages/admin.astro` - Redirects to admin directory
- Simple redirect: `/admin` → `/admin/` (with trailing slash)
- Needed because `public/admin/` is a static directory
- In production, Cloudflare `_redirects` handles this instead

### 3. Verify Build Output

After building (`npm run build`), check:
```
dist/
├── _redirects          ✓ Should exist (copied from public/)
└── admin/
    ├── index.html      ✓ Should exist
    ├── config.yml      ✓ Should exist
    └── config-production.yml ✓ Should exist
```

## Testing

### Local Testing (Development)
```bash
npm run dev
# Visit http://localhost:4321/admin (redirects to /admin/)
# Or directly: http://localhost:4321/admin/
```

### Local Testing (After Build)
```bash
npm run build
npm run preview
# Visit http://localhost:4321/admin (redirect should work)
```

### Staging Testing
1. Push changes to GitHub
2. Wait for Cloudflare Pages deploy
3. Visit https://aurorahuset-astro-2025.pages.dev/admin
4. Check browser DevTools → Network tab:
   - `/admin` should return **200** (not 404 or 301)
   - Should load `admin/index.html`

## Cloudflare Pages Configuration

### In Cloudflare Dashboard

**Build settings:**
- Build command: `npm run build`
- Build output: `dist`
- Root directory: `/`

**No additional configuration needed** - Cloudflare automatically reads `_redirects` from build output.

## Common Issues

### Issue: Still getting 404
**Solution:**
1. Verify `public/_redirects` exists and has correct syntax
2. Check build logs - ensure no errors
3. Purge Cloudflare cache:
   - Cloudflare Dashboard → Caching → Purge Everything
4. Force a new deployment

### Issue: /admin works but /admin/config.yml returns 404
**Solution:**
- Check wildcard redirect in `public/_redirects`:
  ```
  /admin/* /admin/:splat 200
  ```

### Issue: Redirect works locally but not on Cloudflare
**Solution:**
1. Cloudflare Pages uses different redirect syntax than Netlify
2. Ensure using Cloudflare format (NOT TOML):
   ```
   # ✓ Cloudflare format
   /admin /admin/index.html 200
   
   # ✗ Netlify TOML format (won't work)
   [[redirects]]
     from = "/admin"
     to = "/admin/index.html"
   ```

### What Changed

### Before (Not Working)
```
src/pages/admin.astro → return Astro.redirect('/admin/index.html')
```
- Simple redirect doesn't work in static builds
- Conflicts with trailingSlash: false setting

### After (Working)

**Development:**
```
src/pages/admin.astro → reads and serves public/admin/index.html
```
- Serves CMS at `/admin` (no trailing slash)
- Works with Astro's trailingSlash: false

**Production:**
```
public/_redirects → /admin /admin/index.html 200
```
- Cloudflare Pages native feature
- Works in static builds

## Verification Checklist

- [x] `public/_redirects` exists with correct format
- [x] `src/pages/admin.astro` removed (if exists)
- [x] Build completes without errors
- [x] `dist/_redirects` exists after build
- [x] `dist/admin/index.html` exists after build
- [x] Changes committed and pushed to GitHub
- [ ] Cloudflare Pages deployment successful
- [ ] https://aurorahuset-astro-2025.pages.dev/admin loads
- [ ] CMS login works on staging

## Additional Notes

- The `_redirects` file is automatically copied from `public/` to `dist/` during build
- Cloudflare Pages reads `_redirects` and applies rules at the edge
- No additional Cloudflare Workers or Functions needed
- Redirects are processed before 404 handling
