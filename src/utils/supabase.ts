import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
// Replace these with your actual Supabase URL and anon key in production
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Message interface
export interface ContactMessage {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  budget?: string;
  date?: string;
  message: string;
  created_at?: string;
}

// Function to submit contact message to Supabase
export async function submitContactMessage(formData: ContactMessage): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('messages')
      .insert([formData]);
    
    if (error) throw error;
    
    return { success: true };
  } catch (error) {
    console.error('Error submitting message:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    };
  }
} 