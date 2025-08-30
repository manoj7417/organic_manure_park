# Email Setup Instructions

## 1. Create Environment Variables File

Create a `.env.local` file in your project root with the following content:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@organicmanurepark.com
```

## 2. Gmail App Password Setup

Since we're using Gmail, you need to set up an App Password:

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Enable **2-Step Verification** if not already enabled
3. Go to **Security** > **App passwords**
4. Select "Mail" as the app and "Other" as the device
5. Generate the app password
6. Copy the generated password and use it in `EMAIL_PASS`

## 3. Alternative Email Services

If you want to use a different email service, update the transporter configuration in `app/api/contact/route.js`:

### For Outlook/Hotmail:

```javascript
const transporter = nodemailer.createTransporter({
  service: "outlook",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### For Custom SMTP:

```javascript
const transporter = nodemailer.createTransporter({
  host: "your-smtp-host.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## 4. Testing the Setup

1. Start your development server: `npm run dev`
2. Go to the contact form on your website
3. Fill out the form and submit
4. Check both your admin email and the user's email for confirmation

## 5. Security Notes

- Never commit `.env.local` to version control
- Use strong, unique passwords for email accounts
- Consider using environment-specific email configurations for production
- Regularly rotate app passwords

## 6. Troubleshooting

### Common Issues:

1. **Authentication failed**: Make sure you're using an App Password, not your regular Gmail password
2. **Connection timeout**: Check your internet connection and firewall settings
3. **Rate limiting**: Gmail has daily sending limits for free accounts
4. **Spam folder**: Check spam folders for test emails

### Debug Mode:

To see detailed error messages, you can temporarily add console.log statements in the API route:

```javascript
console.log("Email configuration:", {
  user: process.env.EMAIL_USER,
  adminEmail: process.env.ADMIN_EMAIL,
});
```
