const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim();
const whatsapp = process.env.NEXT_PUBLIC_CONTACT_WHATSAPP?.trim();
const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID?.trim();

const isInternationalNumber = (value: string | undefined): value is string =>
  value !== undefined && /^\+[1-9]\d{6,14}$/.test(value);

export const contact = {
  email: email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : undefined,
  phone: isInternationalNumber(phone) ? phone : undefined,
  whatsappUrl: isInternationalNumber(whatsapp)
    ? `https://wa.me/${whatsapp.slice(1)}`
    : undefined,
  officeAddress: process.env.NEXT_PUBLIC_CONTACT_ADDRESS?.trim() || undefined,
  formUrl: formId && /^[a-z0-9]+$/i.test(formId) ? `https://formspree.io/f/${formId}` : undefined,
};
