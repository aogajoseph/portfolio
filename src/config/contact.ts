export const contact = {
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER,
  email: import.meta.env.VITE_CONTACT_EMAIL,
  linkedin: import.meta.env.VITE_LINKEDIN_URL,
  github: import.meta.env.VITE_GITHUB_URL,
} as const;