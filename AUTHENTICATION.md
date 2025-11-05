# Decap CMS Authentication Setup

This project uses **DecapBridge** with PKCE authentication for production CMS access.

## Overview

- **Local Development**: Uses proxy backend (no authentication required)
- **Staging** (https://aurorahuset-astro-2025.pages.dev/): Uses DecapBridge PKCE authentication (password protected)
- **Production** (https://aurorahuset.dk): Uses DecapBridge PKCE authentication (password protected)

The admin page automatically detects the environment and loads the appropriate configuration.

## For Local Development

1. Start the CMS proxy server:
   ```bash
   npm run dev:cms:start
   ```

2. Start the Astro dev server:
   ```bash
   npm run dev
   ```

3. Access CMS at `http://localhost:4321/admin` (no login required)

## For Staging & Production

### Initial Setup (One-time)

1. **Create a DecapBridge account**:
   - Go to https://decapbridge.com/
   - Sign up for a free account
   - Your site ID is already configured: `cfc07566-584e-4a39-8090-6b720205b1e3`

2. **Configure GitHub Repository**:
   - In DecapBridge dashboard, connect your GitHub repository
   - Repository: `maxrh/aurorahuset-astro-2025`
   - Branch: `dev`
   - Grant necessary permissions

3. **Add Authorized Users**:
   - In DecapBridge dashboard, go to "Users" section
   - Add email addresses for authorized CMS users
   - Each user will receive an email invitation

### User Login Flow

**Staging:**
1. Navigate to `https://aurorahuset-astro-2025.pages.dev/admin`
2. Click "Login with GitHub"
3. Complete GitHub OAuth flow
4. If authorized, you'll be redirected to the CMS dashboard

**Production (when configured):**
1. Navigate to `https://aurorahuset.dk/admin`
2. Same login flow as staging

### Managing Users

**Add a new user:**
1. Go to DecapBridge dashboard
2. Navigate to your site settings
3. Add user's email address
4. User receives invitation email

**Remove a user:**
1. Go to DecapBridge dashboard
2. Navigate to Users section
3. Remove user's email from authorized list

## Configuration Files

- `public/admin/config.yml` - Local development config (proxy backend)
- `public/admin/config-production.yml` - Production config (DecapBridge PKCE)
- `public/admin/index.html` - Auto-detects environment and loads appropriate config

## Security Features

✅ **Password Protected**: Only authorized GitHub users can access  
✅ **OAuth Authentication**: Uses secure GitHub OAuth flow  
✅ **PKCE Flow**: Enhanced security for single-page applications  
✅ **Audit Trail**: All changes tracked with author information  
✅ **Branch Protection**: Changes committed to `dev` branch (can be reviewed before merging to `main`)

## Troubleshooting

### "Error: Unable to access"
- Ensure you're added to the authorized users list in DecapBridge
- Check that you're logged into the correct GitHub account
- Verify repository permissions in GitHub settings

### "Config error"
- Check that `config-production.yml` is deployed correctly
- Verify site ID matches your DecapBridge site ID
- Check browser console for detailed error messages

### Changes not appearing
- Ensure changes are committed to the repository
- Check that build/deploy pipeline completed successfully
- Verify you're viewing the correct branch

## Alternative Authentication Options

If you prefer a different authentication method:

### Option 1: Netlify Identity
Replace backend in `config-production.yml`:
```yaml
backend:
  name: git-gateway
  branch: dev
```
Then set up Netlify Identity in your Netlify dashboard.

### Option 2: GitHub Backend (Direct)
Replace backend in `config-production.yml`:
```yaml
backend:
  name: github
  repo: maxrh/aurorahuset-astro-2025
  branch: dev
```
Users must have GitHub repository access.

### Option 3: Basic Auth (Cloudflare Pages)
Add Cloudflare Workers for HTTP Basic Auth on `/admin` path.

## Support

- **DecapBridge Documentation**: https://decapbridge.com/docs
- **Decap CMS Documentation**: https://decapcms.org/docs
- **GitHub Issues**: Report problems in the repository
