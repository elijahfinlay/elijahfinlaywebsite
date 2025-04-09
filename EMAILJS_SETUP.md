# EmailJS Setup Instructions

This project uses EmailJS to send contact form submissions directly to your email. Follow these steps to set up EmailJS:

## 1. Create an EmailJS Account

- Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
- Free accounts include 200 emails per month

## 2. Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication instructions for your provider
5. Name your service (e.g., "website-contact-form")
6. Note down the **Service ID** for later use

## 3. Create an Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Design your email template using the visual editor or HTML
4. Use these template variables in your email (they match our form fields):
   - `{{name}}`: The sender's name
   - `{{email}}`: The sender's email
   - `{{phone}}`: The sender's phone number
   - `{{projectType}}`: The type of project
   - `{{budget}}`: The project budget range
   - `{{date}}`: The project date
   - `{{message}}`: The main message
5. Save your template and note down the **Template ID**

## 4. Configure Environment Variables

Update the `.env.local` file with your EmailJS credentials:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_public_key
```

You can find your **User ID** (Public Key) in your EmailJS dashboard under **Account** > **API Keys**.

## 5. Testing

To test the email functionality:
1. Make sure you have set the correct environment variables
2. Fill out the contact form on the website and submit
3. Check your email to see if you receive the message

## Troubleshooting

- If emails aren't being sent, check the browser console for any errors
- Verify your EmailJS credentials are correctly set in the environment variables
- Check your email spam/junk folder
- Ensure your free plan hasn't exceeded the monthly limit of 200 emails 