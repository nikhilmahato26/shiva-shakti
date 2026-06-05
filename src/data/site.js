// Central source of truth for business identity & contact details.
// Update these once and the whole site reflects the change.

export const site = {
  brandLine: "U Media's",
  name: 'Shiva Shakthi Jyothisha Madom',
  shortName: 'Shiva Shakthi',
  tagline: 'Ancient Wisdom. Divine Guidance. Modern Solutions.',
  location: {
    name: 'Shiva Shakthi Jyothisha Madom',
    city: 'Kochi, Ernakulam',
    state: 'Kerala, India',
    full: 'Kochi, Ernakulam, Kerala, India',
  },
  phones: ['+91 8858354438', '+91 8921454439'],
  emails: ['umediavirtual@gmail.com', 'maheie99@gmail.com'],
  youtubeHandle: '@UMediaAstro',
  youtubeUrl: 'https://www.youtube.com/@UMediaAstro',
  serviceLanguages: ['English', 'Tamil', 'Malayalam'],
};

// Primary phone digits (no spaces) for tel: and wa.me links
export const primaryPhoneDigits = '918858354438';
export const secondaryPhoneDigits = '918921454439';

export const telLink = (digits = primaryPhoneDigits) => `tel:+${digits}`;

export const whatsappLink = (
  message = "Namaste, I'd like to book a consultation with Dr. Uma Mahesh N Acharya.",
  digits = primaryPhoneDigits
) => `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;

export const mailLink = (email = site.emails[0]) => `mailto:${email}`;

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Poojas', href: '#poojas' },
  { label: 'Yantras', href: '#yantras' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Awards', href: '#awards' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const socials = [
  { label: 'WhatsApp', href: whatsappLink(), icon: 'FaWhatsapp' },
  { label: 'Instagram', href: '#', icon: 'FaInstagram' },
  { label: 'Facebook', href: '#', icon: 'FaFacebookF' },
  { label: 'YouTube', href: site.youtubeUrl, icon: 'FaYoutube' },
];
