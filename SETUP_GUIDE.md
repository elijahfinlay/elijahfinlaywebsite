# Contact Form Setup Guide

This guide explains how to set up the contact form functionality for this website. The contact form integrates with both Supabase and EmailJS to ensure messages are stored in a database and sent to your email.

## Prerequisites

- A Supabase account (free tier available)
- An EmailJS account (free tier available)
- Access to your website's environment variables

## Step 1: Set Up Supabase

Follow these steps to configure Supabase for storing contact form submissions:

1. Sign up at [Supabase](https://supabase.com/) and create a new project
2. Set up the `messages` table using the SQL below:

```sql
CREATE TABLE public.messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  projectType TEXT NOT NULL,
  budget TEXT,
  date TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Set up row level security (RLS)
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserts only
CREATE POLICY "Allow anonymous inserts" ON public.messages
  FOR INSERT
  TO anon
  USING (true);

-- Create a policy that allows reading only with auth
CREATE POLICY "Allow authenticated reads" ON public.messages
  FOR SELECT
  TO authenticated
  USING (true);
```

3. Get your Supabase URL and anon key from your project settings under "API"

## Step 2: Set Up EmailJS

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Add an email service:
   - Go to **Email Services** in the dashboard
   - Click **Add New Service**
   - Connect your email provider (Gmail, Outlook, etc.)
   - Name your service and save
   - Copy the **Service ID**

3. Create an email template:
   - Go to **Email Templates**
   - Create a new template
   - Design your email using these variables:
     - `{{name}}`: The sender's name
     - `{{email}}`: The sender's email
     - `{{phone}}`: The sender's phone number
     - `{{projectType}}`: The type of project
     - `{{budget}}`: The project budget range
     - `{{date}}`: The project date
     - `{{message}}`: The main message
   - Save the template and copy the **Template ID**

4. Get your **User ID** (Public Key) from **Account** > **API Keys**

## Step 3: Configure Environment Variables

Create or update your `.env.local` file with these variables:

```
# Supabase configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# EmailJS configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_public_key
```

## Step 4: Testing the Contact Form

1. Start your development server with `npm run dev`
2. Fill out the contact form and submit
3. Verify these results:
   - You should be redirected to the thank-you page
   - The message should appear in your Supabase database
   - You should receive an email with the message details

## Troubleshooting

### Supabase Issues

- Check your browser console for errors
- Verify your Supabase URL and anon key are correct
- Make sure the `messages` table exists with the correct schema
- Ensure row level security policies are set up correctly

### EmailJS Issues

- Check if emails are going to spam/junk folders
- Verify your EmailJS credentials in the environment variables
- Make sure your email template variables match the form fields
- Check your EmailJS dashboard for any error logs
- Ensure you haven't exceeded the free tier limit (200 emails/month)

## Security Notes

- The current setup allows anonymous form submissions
- Consider adding CAPTCHA protection for production use
- For high-traffic sites, implement rate limiting
- Never expose your Supabase admin keys or sensitive EmailJS credentials 