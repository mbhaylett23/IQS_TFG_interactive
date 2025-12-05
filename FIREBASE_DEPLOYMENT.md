# Firebase Hosting Deployment Guide

This guide will help you deploy the IQS TFG Explorer to Firebase Hosting.

## Prerequisites

1. **Node.js and npm** installed on your machine
2. **Firebase account** (free tier is sufficient)
3. **Firebase CLI** installed globally

## Step 1: Install Firebase CLI

If you haven't installed the Firebase CLI yet, run:

```bash
npm install -g firebase-tools
```

## Step 2: Login to Firebase

```bash
firebase login
```

This will open a browser window for you to authenticate with your Google account.

## Step 3: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name (e.g., "iqs-tfg-explorer")
4. Follow the setup wizard (you can disable Google Analytics if you don't need it)
5. Once created, copy your project ID

## Step 4: Link Your Local Project

Update the `.firebaserc` file with your actual project ID:

```json
{
  "projects": {
    "default": "your-actual-project-id"
  }
}
```

Or use the Firebase CLI:

```bash
firebase use --add
```

Then select your project from the list.

## Step 5: Deploy to Firebase Hosting

```bash
firebase deploy --only hosting
```

After deployment completes, you'll receive a hosting URL like:
```
https://your-project-id.web.app
```

## Step 6: (Optional) Set Up Custom Domain

1. Go to Firebase Console > Hosting
2. Click "Add custom domain"
3. Follow the instructions to verify domain ownership
4. Add the required DNS records
5. Wait for SSL certificate provisioning (usually 24-48 hours)

## Updating the Site

Whenever you make changes to your site, simply run:

```bash
firebase deploy --only hosting
```

## Configuration Details

The `firebase.json` file includes:

- **Public directory**: Current directory (`.`)
- **Single Page Application**: Rewrites all routes to `/index.html`
- **Cache control**: 1 year cache for static assets
- **Clean URLs**: Removes `.html` extensions

## Troubleshooting

### Error: "Permission denied"

Make sure you're logged in:
```bash
firebase login --reauth
```

### Error: "No project active"

Link your project:
```bash
firebase use your-project-id
```

### Deploy to different environment

Create multiple environments:
```bash
firebase use --add  # Add production
firebase use --add  # Add staging
```

Switch between them:
```bash
firebase use production
firebase use staging
```

## Cost Considerations

Firebase Hosting free tier includes:
- **Storage**: 10 GB
- **Transfer**: 360 MB/day
- **Custom domain**: Included

This should be more than sufficient for this static website.

## Support

For issues, visit:
- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [Firebase Support](https://firebase.google.com/support)
