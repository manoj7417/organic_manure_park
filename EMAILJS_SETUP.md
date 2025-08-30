# EmailJS Setup Guide

## Why EmailJS?

EmailJS is a much more reliable solution for sending emails from frontend applications. It eliminates the server-side complexity and works seamlessly with Next.js and Turbopack.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Set Up Email Service

1. **Add Email Service:**
   - Go to EmailJS Dashboard
   - Click "Add New Service"
   - Choose "Gmail" (or your preferred email provider)
   - Connect your Gmail account
   - Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. **Create Template:**

   - Go to "Email Templates" in EmailJS Dashboard
   - Click "Create New Template"
   - Choose "Blank Template"

2. **Template Content:**

   ```html
   <h2>New Contact Form Submission</h2>
   <p><strong>Name:</strong> {{from_name}}</p>
   <p><strong>Email:</strong> {{from_email}}</p>
   <p><strong>Phone:</strong> {{from_phone}}</p>
   <p><strong>Message:</strong></p>
   <p>{{message}}</p>
   <hr />
   <p><small>Sent from Organic Manure Park website</small></p>
   ```

3. **Template Settings:**

   - Subject: `New Contact Form Submission from {{from_name}}`
   - To Email: `info@organicmanurepark.com` (your email)
   - From Name: `Organic Manure Park Website`
   - From Email: `noreply@organicmanurepark.com`

4. **Save Template:**
   - Click "Save"
   - Note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to "Account" → "API Keys" in EmailJS Dashboard
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Update Your Code

Replace the placeholder values in `components/ContactUsSection.jsx`:

```javascript
const serviceId = "YOUR_EMAILJS_SERVICE_ID"; // Replace with your actual Service ID
const templateId = "YOUR_EMAILJS_TEMPLATE_ID"; // Replace with your actual Template ID
const publicKey = "YOUR_EMAILJS_PUBLIC_KEY"; // Replace with your actual Public Key
```

## Step 6: Test the Setup

1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out the form and submit
4. Check your email for the notification

## Step 7: Optional - Add Confirmation Email

To send a confirmation email to the user, create a second template:

1. **Create Confirmation Template:**

   ```html
   <div
     style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;"
   >
     <h2 style="color: #16a34a;">Thank you for contacting us!</h2>
     <p>Dear {{from_name}},</p>
     <p>
       We have received your message and will get back to you as soon as
       possible.
     </p>

     <div
       style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;"
     >
       <h3 style="color: #1e40af; margin-top: 0;">Your Message Details:</h3>
       <p><strong>Name:</strong> {{from_name}}</p>
       <p><strong>Email:</strong> {{from_email}}</p>
       <p><strong>Phone:</strong> {{from_phone}}</p>
       <p><strong>Message:</strong> {{message}}</p>
     </div>

     <p>In the meantime, you can reach us at:</p>
     <ul>
       <li>Phone: +91 8080738225</li>
       <li>Email: info@organicmanurepark.com</li>
       <li>
         Address: B-402, Brindavan Apts, Krishnanagar, Maharanipeta,
         Vishakapatanam – 530002, Andhra Pradesh, India
       </li>
     </ul>

     <p>
       Best regards,<br />
       <strong>Organic Manure Park Team</strong>
     </p>
   </div>
   ```

2. **Update the component to send both emails:**

   ```javascript
   // Send notification to admin
   await emailjs.send(serviceId, adminTemplateId, templateParams, publicKey);

   // Send confirmation to user
   await emailjs.send(serviceId, userTemplateId, templateParams, publicKey);
   ```

## Benefits of EmailJS

✅ **No server-side setup required**  
✅ **Works perfectly with Next.js and Turbopack**  
✅ **Free tier includes 200 emails/month**  
✅ **Professional email templates**  
✅ **Reliable delivery**  
✅ **Easy to maintain**

## Troubleshooting

- **"Service not found"**: Double-check your Service ID
- **"Template not found"**: Verify your Template ID
- **"Invalid public key"**: Ensure your Public Key is correct
- **Emails not sending**: Check your email service connection in EmailJS dashboard

## Security Notes

- Public Key is safe to expose in frontend code
- EmailJS handles all security on their servers
- No sensitive credentials stored in your code
