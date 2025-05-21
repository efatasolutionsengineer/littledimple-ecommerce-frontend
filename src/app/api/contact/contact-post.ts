export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  complain: string;
  tradein: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<boolean> => {
  const res = await fetch('/api/contact_us', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    throw new Error('Failed to submit contact form');
  }

  return true;
};
