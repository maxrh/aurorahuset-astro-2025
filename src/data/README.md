# Site Data

This directory contains centralized site-wide data files that can be edited through Decap CMS.

## siteInfo.json

Contains all the essential contact and company information for AuroraHuset. This data is managed through the Decap CMS "Site Information" collection.

**Fields:**
- `address` - Street address
- `city` - Postal code and city
- `phone` - General contact phone number
- `hotline` - 24/7 emergency hotline number
- `email` - Contact email address
- `companyName` - Legal company name
- `cvr` - Company registration number
- `vacancies` - Number of available spots (displayed on the homepage)

### Usage in Components

Import the site info in any Astro component:

```astro
---
import siteInfo from '~/data/siteInfo.json';
---

<p>{siteInfo.address}, {siteInfo.city}</p>
<p>Tlf: {siteInfo.phone}</p>
<p>Email: {siteInfo.email}</p>
```

Or use the TypeScript utility:

```typescript
import { siteInfo } from '~/utils/siteInfo';
```

### Editing via CMS

1. Navigate to `/admin` (when dev server is running)
2. Select "Site Information" from the collections menu
3. Click on "Kontaktinformation"
4. Edit the fields and click "Save"
5. The changes will be reflected site-wide automatically

### Current Usage

- **Footer** (`src/components/widgets/Footer.astro`) - Displays contact info and company details
- **Homepage Hero** (`src/pages/index.astro`) - Shows vacancy count
- **Help Section** (`src/pages/index.astro`) - Displays hotline number and email in call-to-action
