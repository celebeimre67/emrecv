import { motion } from 'motion/react';
import { MapPin, GraduationCap, Building2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="space-y-12"
    >
      <section className="flex flex-col md:flex-row gap-8 items-start">
        <div className="relative shrink-0 mx-auto md:mx-0">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl overflow-hidden ring-4 ring-[var(--border-subtle)] shadow-xl relative z-10">
            <img
              src="https://i.imgur.com/woy7m3O.jpeg"
              alt="Emre Çelebi"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-bg)] to-transparent rounded-3xl blur-xl opacity-20 -z-10 transform translate-y-2 scale-105"></div>
        </div>

        <div className="space-y-4 pt-2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-main)]">{t('about.title')}</h2>
          <p className="text-[var(--text-muted)] leading-relaxed text-base md:text-lg">
            {t('about.p1')}
          </p>
          <p className="text-[var(--text-muted)] leading-relaxed text-base md:text-lg">
            {t('about.p2')}
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 flex flex-col gap-3 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-[var(--bg-card-hover)] flex items-center justify-center text-[var(--text-main)]">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--text-muted)] uppercase tracking-wider">{t('about.uni.title')}</h3>
            <p className="text-[var(--text-main)] font-medium mt-1">{t('about.uni.name')}</p>
            <p className="text-sm text-[var(--text-muted)]">{t('about.uni.desc')}</p>
          </div>
        </div>

        <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 flex flex-col gap-3 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-[var(--bg-card-hover)] flex items-center justify-center text-[var(--text-main)]">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--text-muted)] uppercase tracking-wider">{t('about.dept.title')}</h3>
            <p className="text-[var(--text-main)] font-medium mt-1">{t('about.dept.name')}</p>
          </div>
        </div>

        <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 flex flex-col gap-3 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-[var(--bg-card-hover)] flex items-center justify-center text-[var(--text-main)]">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--text-muted)] uppercase tracking-wider">{t('about.loc.title')}</h3>
            <p className="text-[var(--text-main)] font-medium mt-1">{t('about.loc.name')}</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
