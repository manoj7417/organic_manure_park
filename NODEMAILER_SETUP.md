# Nodemailer Setup Guide

Based on the [official Nodemailer documentation](https://nodemailer.com/), this guide will help you set up Nodemailer for your contact form.

## Why Nodemailer?

According to the [Nodemailer documentation](https://nodemailer.com/), Nodemailer offers:

- **Zero runtime dependencies** – the entire implementation lives in one audited package
- **Security first** – avoids known RCE vectors that have affected other Node.js mailers
- **Unicode everywhere** – send any characters, including emoji 💪
- **Cross‑platform** – no native addons, works the same on Linux, macOS, and Windows
- **HTML e‑mails** with **plain‑text fallbacks** out of the box
- **Attachments** & **embedded images** without pain
- Out‑of‑the‑box **TLS/STARTTLS** encryption
- Multiple **transports** (SMTP, Sendmail, SES, streams, and more)
- **DKIM** signing & **OAuth2** authentication

## Step 1: Environment Variables Setup

Create a `.env.local` file in your project root with the following content:

```env
# Email Configuration for Nodemailer
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=your-email@gmail.com
```

## Step 2: Gmail App Password Setup

Since we're using Gmail SMTP, you need to set up an App Password:

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Enable **2-Step Verification** if not already enabled
3. Go to **Security** > **App passwords**
4. Select "Mail" as the app and "Other" as the device
5. Generate the app password
6. Copy the generated password and use it in `EMAIL_PASS`

## Step 3: Alternative Email Services

According to the [Nodemailer documentation](https://nodemailer.com/), you can use various transports:

### For Outlook/Hotmail:

```javascript
const transporter = nodemailer.default.createTransport({
  service: "outlook",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### For Custom SMTP:

```javascript
const transporter = nodemailer.default.createTransport({
  host: "your-smtp-host.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### For Ethereal Email (Testing):

As mentioned in the [Nodemailer documentation](https://nodemailer.com/), you can use Ethereal for testing:

```javascript
// Create a test account
const testAccount = await nodemailer.default.createTestAccount();

const transporter = nodemailer.default.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: testAccount.user,
    pass: testAccount.pass,
  },
});
```

## Step 4: Testing the Setup

1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out the form and submit
4. Check both your admin email and the user's email for confirmation

## Step 5: Troubleshooting

### Common Issues:

1. **Authentication failed**:

   - Make sure you're using an App Password, not your regular Gmail password
   - Verify your email and password are correct

2. **Connection timeout**:

   - Check your internet connection and firewall settings
   - Verify the SMTP settings are correct

3. **Rate limiting**:

   - Gmail has daily sending limits for free accounts
   - Consider using a business email for higher limits

4. **Spam folder**:
   - Check spam folders for test emails
   - Add your email to contacts to improve deliverability

### Debug Mode:

To see detailed error messages, you can temporarily add console.log statements:

```javascript
console.log("Email configuration:", {
  user: process.env.EMAIL_USER,
  adminEmail: process.env.ADMIN_EMAIL,
});
```

## Step 6: Production Considerations

For production deployment:

1. **Use environment variables** in your hosting platform (Vercel, Netlify, etc.)
2. **Consider using a transactional email service** like SendGrid or Mailgun for better deliverability
3. **Implement rate limiting** to prevent spam
4. **Add email validation** on both frontend and backend
5. **Set up proper error handling** and logging

## Security Notes

- Never commit `.env.local` to version control
- Use strong, unique passwords for email accounts
- Consider using environment-specific email configurations
- Regularly rotate app passwords
- Implement proper input validation and sanitization

## Nodemailer Features Used

Based on the [Nodemailer documentation](https://nodemailer.com/), our implementation uses:

- ✅ **SMTP transport** with Gmail
- ✅ **HTML emails** with professional styling
- ✅ **Multiple recipients** (admin notification + user confirmation)
- ✅ **TLS encryption** (automatic with Gmail)
- ✅ **Error handling** with proper try-catch blocks
- ✅ **Dynamic imports** to avoid Next.js compatibility issues

## Example from Nodemailer Documentation

Here's the example from the [Nodemailer documentation](https://nodemailer.com/) adapted for our use case:

```javascript
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const info = await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: "recipient@example.com",
  subject: "Contact Form Submission",
  html: "<b>Hello world?</b>",
});

console.log("Message sent:", info.messageId);
```

This implementation follows the [Nodemailer documentation](https://nodemailer.com/) best practices and should work reliably with your Next.js application.
