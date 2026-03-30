import { motion } from 'motion/react';
import { BookOpen, Briefcase, Code, Languages, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Resume() {
  const { t } = useLanguage();

  const education = [
    {
      school: t('resume.edu.1.school'),
      degree: t('resume.edu.1.degree'),
      period: '2023 - 2027',
    },
    {
      school: t('resume.edu.2.school'),
      degree: t('resume.edu.2.degree'),
      period: '2019 - 2023',
    },
  ];

  const skills = [
    t('resume.skills.1'),
    t('resume.skills.2'),
    t('resume.skills.3'),
    t('resume.skills.4'),
  ];

  const programs = ['DaVinci Resolve', 'Canva'];

  const languages = [
    { name: t('resume.lang.tr'), level: t('resume.lang.tr.level') },
    { name: t('resume.lang.en'), level: t('resume.lang.en.level') },
  ];

  const hobbies = [
    t('resume.hobbies.1'),
    t('resume.hobbies.2'),
    t('resume.hobbies.3'),
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="space-y-16"
    >
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-main)]">{t('resume.title')}</h2>
        <p className="text-[var(--text-muted)] text-base md:text-lg">{t('resume.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-12">
          {/* Education */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-[var(--text-main)]">
              <BookOpen className="w-6 h-6 text-[var(--text-muted)]" />
              <h3 className="text-2xl font-semibold">{t('resume.edu')}</h3>
            </div>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-[var(--border-subtle)]">
              {education.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-muted)] shadow-sm shrink-0 z-10">
                    <div className="w-2 h-2 bg-[var(--text-muted)] rounded-full"></div>
                  </div>
                  <div className="flex-1 p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-sm">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium text-[var(--text-muted)]">{item.period}</span>
                      <h4 className="text-lg font-medium text-[var(--text-main)]">{item.school}</h4>
                      <p className="text-[var(--text-muted)]">{item.degree}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-[var(--text-main)]">
              <Languages className="w-6 h-6 text-[var(--text-muted)]" />
              <h3 className="text-2xl font-semibold">{t('resume.lang')}</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {languages.map((lang, index) => (
                <div key={index} className="p-4 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-sm">
                  <h4 className="text-[var(--text-main)] font-medium">{lang.name}</h4>
                  <p className="text-sm text-[var(--text-muted)] mt-1">{lang.level}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-12">
          {/* Skills */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-[var(--text-main)]">
              <Briefcase className="w-6 h-6 text-[var(--text-muted)]" />
              <h3 className="text-2xl font-semibold">{t('resume.skills')}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="px-4 py-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-main)] text-sm font-medium shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Programs */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-[var(--text-main)]">
              <Code className="w-6 h-6 text-[var(--text-muted)]" />
              <h3 className="text-2xl font-semibold">{t('resume.programs')}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {programs.map((program, index) => (
                <span key={index} className="px-4 py-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-main)] text-sm font-medium shadow-sm">
                  {program}
                </span>
              ))}
            </div>
          </section>

          {/* Hobbies */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-[var(--text-main)]">
              <Heart className="w-6 h-6 text-[var(--text-muted)]" />
              <h3 className="text-2xl font-semibold">{t('resume.hobbies')}</h3>
            </div>
            <ul className="space-y-3">
              {hobbies.map((hobby, index) => (
                <li key={index} className="flex items-center gap-3 text-[var(--text-muted)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)]"></div>
                  {hobby}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
