import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'celebiemre67@gmail.com',
      href: 'mailto:celebiemre67@gmail.com',
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+90 531 221 16 14',
      href: 'tel:+905312211614',
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: 'Hisarönü Mah. Değirmenyanı, Marmaris / Muğla',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/emre_celebi48',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/emre-%C3%A7elebi-181337157/',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="space-y-12"
    >
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-main)]">{t('contact.title')}</h2>
        <p className="text-[var(--text-muted)] text-base md:text-lg">{t('contact.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] shrink-0 shadow-sm">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="pt-1">
                  <p className="text-sm font-medium text-[var(--text-muted)]">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-[var(--text-main)] hover:text-[var(--accent-bg)] transition-colors mt-1 block">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[var(--text-main)] mt-1">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-[var(--border-subtle)]">
            <p className="text-sm font-medium text-[var(--text-muted)] mb-4">{t('contact.social')}</p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-bg)] hover:border-[var(--accent-bg)] transition-all shadow-sm"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form (UI Only) */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 md:p-8 rounded-3xl shadow-sm">
          <h3 className="text-xl font-semibold text-[var(--text-main)] mb-6">{t('contact.form.title')}</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-[var(--text-muted)]">{t('contact.form.name')}</label>
              <input
                type="text"
                id="name"
                className="w-full bg-[var(--bg-main)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-bg)] transition-all"
                placeholder={t('contact.form.name.placeholder')}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-[var(--text-muted)]">{t('contact.form.email')}</label>
              <input
                type="email"
                id="email"
                className="w-full bg-[var(--bg-main)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-bg)] transition-all"
                placeholder={t('contact.form.email.placeholder')}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-[var(--text-muted)]">{t('contact.form.message')}</label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-[var(--bg-main)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-bg)] transition-all resize-none"
                placeholder={t('contact.form.message.placeholder')}
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full bg-[var(--accent-bg)] text-[var(--accent-text)] font-semibold rounded-xl px-4 py-3 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mt-2"
            >
              <Send className="w-4 h-4" />
              {t('contact.form.send')}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
