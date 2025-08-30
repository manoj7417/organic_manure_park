# Resend Email Setup Guide

## Why Resend?

Resend is a modern, reliable email API that works perfectly with Next.js and doesn't have the import issues we experienced with Nodemailer.

## Step 1: Create Resend Account

1. Go to [Resend.com](https://resend.com/) and sign up for a free account
2. Verify your email address

## Step 2: Get API Key

1. Go to your Resend Dashboard
2. Click on "API Keys" in the sidebar
3. Click "Create API Key"
4. Give it a name (e.g., "Organic Manure Park")
5. Copy the API key (starts with `re_`)

## Step 3: Add Environment Variable

Create a `.env.local` file in your project root (if it doesn't exist) and add:

```env
RESEND_API_KEY=re_your_api_key_here
```

Replace `re_your_api_key_here` with your actual Resend API key.

## Step 4: Update Email Address

In the file `app/api/contact/route.js`, replace `info@organicmanurepark.com` with your actual email address:

```javascript
to: ['your-email@gmail.com'], // Replace with your email
```

## Step 5: Test the Setup

1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out the form and submit
4. Check your email for the notification

## Benefits of Resend

✅ **Free tier**: 3,000 emails/month free  
✅ **No import issues**: Works perfectly with Next.js  
✅ **Professional delivery**: High deliverability rates  
✅ **Simple setup**: Just one API key  
✅ **Modern API**: Clean, easy-to-use interface

## Troubleshooting

- **"Invalid API key"**: Make sure your API key is correct and starts with `re_`
- **"Unauthorized"**: Check that your API key is properly set in `.env.local`
- **Emails not sending**: Verify your email address in the API route
- **Environment variable not working**: Restart your development server after adding `.env.local`

## Security Notes

- Never commit your `.env.local` file to version control
- The API key is safe to use in server-side code
- Resend handles all email security and delivery
