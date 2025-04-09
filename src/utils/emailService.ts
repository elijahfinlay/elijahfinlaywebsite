import emailjs from '@emailjs/browser';

// Email sending interface
export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  budget?: string;
  date?: string;
  message: string;
}

// Initialize EmailJS on the client side only
const initEmailJSOnClient = () => {
  if (typeof window !== 'undefined') {
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || 'your_user_id';
    emailjs.init(userId);
  }
};

// Function to send email using EmailJS
export async function sendEmail(data: EmailData): Promise<{ success: boolean; error?: string }> {
  try {
    // Initialize EmailJS if it hasn't been already
    initEmailJSOnClient();
    
    // Replace these with your actual EmailJS service and template IDs
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
    
    const templateParams = {
      name: data.name,
      email: data.email,
      phone: data.phone || 'Not provided',
      projectType: data.projectType,
      budget: data.budget || 'Not specified',
      date: data.date || 'Not specified',
      message: data.message,
    };
    
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams
    );
    
    if (response.status === 200) {
      return { success: true };
    } else {
      throw new Error(`Email service returned status code: ${response.status}`);
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    };
  }
} 