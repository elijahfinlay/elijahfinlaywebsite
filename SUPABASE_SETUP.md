# Supabase Setup Instructions

This project uses Supabase for contact form submission storage. Follow these steps to set up your Supabase project:

## 1. Create a Supabase Account

- Go to [Supabase](https://supabase.com/) and sign up for a free account
- Create a new project

## 2. Set Up the Messages Table

Once your Supabase project is created, set up the database table for contact messages:

1. Navigate to the SQL Editor in your Supabase dashboard
2. Create a new query and run the following SQL:

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

## 3. Configure Environment Variables

1. Replace the placeholder values in the `.env.local` file with your actual Supabase URL and anon key:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-actual-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key
```

You can find these values in your Supabase project settings under "API".

## 4. Access Submitted Messages

All submitted messages will be stored in the `messages` table in your Supabase project. You can view them in the Table Editor section of your Supabase dashboard.

## 5. Testing

To test the contact form:
1. Make sure you have set the correct environment variables
2. Fill out the contact form on the website and submit
3. Check that the data appears in your Supabase `messages` table 