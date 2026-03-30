import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  tr: {
    'nav.about': 'Hakkımda',
    'nav.resume': 'Özgeçmiş',
    'nav.contact': 'İletişim',
    'role': 'Öğrenci & Dijital İçerik Üreticisi',
    
    'about.title': 'Hakkımda',
    'about.p1': 'Sosyal medya alanında kendimi geliştirmeye çalışan üniversite öğrencisiyim. Yeni medya bölümünde eğitim alarak, dijital içerik üretimi ve sosyal medya stratejileri konusunda bilgi ve becerilerimi artırıyorum. Aynı zamanda video çekimi ve editi ile ilgileniyorum, bu alanda çeşitli projeler yaparak deneyim kazanıyorum.',
    'about.p2': 'Kreatif ve analitik düşünme yeteneklerimi kullanarak etkili dijital içerikler oluşturmayı hedefliyorum. İyi iletişim becerilerim sayesinde müşteri ilişkilerinde başarılıyım ve bu becerilerimi daha da geliştirmek için istekliyim. Ayrıca, B2 seviyesinde İngilizce bilgimle uluslararası misafirlerle etkili iletişim kurabilirim.',
    'about.uni.title': 'Üniversite',
    'about.uni.name': 'Üsküdar Üniversitesi',
    'about.uni.desc': '3. Sınıf Öğrencisi',
    'about.dept.title': 'Bölüm',
    'about.dept.name': 'Yeni Medya ve İletişim',
    'about.loc.title': 'Konum',
    'about.loc.name': 'Marmaris / Muğla',
    
    'resume.title': 'Özgeçmiş',
    'resume.subtitle': 'Eğitim, yetenekler ve deneyimlerim.',
    'resume.edu': 'Eğitim',
    'resume.edu.1.school': 'Üsküdar Üniversitesi',
    'resume.edu.1.degree': 'Yeni Medya ve İletişim (3. Sınıf)',
    'resume.edu.2.school': 'Gelenbevi Anadolu Lisesi',
    'resume.edu.2.degree': 'Dil Alanı (İngilizce)',
    'resume.lang': 'Diller',
    'resume.lang.tr': 'Türkçe',
    'resume.lang.tr.level': 'Anadil',
    'resume.lang.en': 'İngilizce',
    'resume.lang.en.level': 'B2 Seviye',
    'resume.skills': 'Yetenekler',
    'resume.skills.1': 'Arama Motoru Optimizasyonu (SEO)',
    'resume.skills.2': 'Sosyal Medya Yöneticiliği',
    'resume.skills.3': 'Video Editleme',
    'resume.skills.4': 'Fotoğrafçılık',
    'resume.programs': 'Programlar',
    'resume.hobbies': 'Hobiler',
    'resume.hobbies.1': 'Doğa içinde bisiklet sürmek',
    'resume.hobbies.2': 'Tarihi/Ören yerlerini gezmek',
    'resume.hobbies.3': 'Fotoğrafçılık',
    
    'contact.title': 'İletişim',
    'contact.subtitle': 'Benimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz.',
    'contact.email': 'E-posta',
    'contact.phone': 'Telefon',
    'contact.location': 'Konum',
    'contact.social': 'Sosyal Medya',
    'contact.form.title': 'Mesaj Gönder',
    'contact.form.name': 'İsim',
    'contact.form.name.placeholder': 'Adınız Soyadınız',
    'contact.form.email': 'E-posta',
    'contact.form.email.placeholder': 'ornek@email.com',
    'contact.form.message': 'Mesaj',
    'contact.form.message.placeholder': 'Mesajınızı buraya yazın...',
    'contact.form.send': 'Gönder'
  },
  en: {
    'nav.about': 'About',
    'nav.resume': 'Resume',
    'nav.contact': 'Contact',
    'role': 'Student & Digital Content Creator',
    
    'about.title': 'About Me',
    'about.p1': 'I am a university student striving to improve myself in the field of social media. By studying new media, I am increasing my knowledge and skills in digital content creation and social media strategies. I am also interested in video shooting and editing, gaining experience by doing various projects in this field.',
    'about.p2': 'I aim to create effective digital content using my creative and analytical thinking skills. Thanks to my good communication skills, I am successful in customer relations and eager to further develop these skills. In addition, with my B2 level English, I can communicate effectively with international guests.',
    'about.uni.title': 'University',
    'about.uni.name': 'Üsküdar University',
    'about.uni.desc': '3rd Year Student',
    'about.dept.title': 'Department',
    'about.dept.name': 'New Media and Communication',
    'about.loc.title': 'Location',
    'about.loc.name': 'Marmaris / Mugla, Turkey',
    
    'resume.title': 'Resume',
    'resume.subtitle': 'Education, skills, and experiences.',
    'resume.edu': 'Education',
    'resume.edu.1.school': 'Üsküdar University',
    'resume.edu.1.degree': 'New Media and Communication (3rd Year)',
    'resume.edu.2.school': 'Gelenbevi Anatolian High School',
    'resume.edu.2.degree': 'Language Track (English)',
    'resume.lang': 'Languages',
    'resume.lang.tr': 'Turkish',
    'resume.lang.tr.level': 'Native',
    'resume.lang.en': 'English',
    'resume.lang.en.level': 'B2 Level',
    'resume.skills': 'Skills',
    'resume.skills.1': 'Search Engine Optimization (SEO)',
    'resume.skills.2': 'Social Media Management',
    'resume.skills.3': 'Video Editing',
    'resume.skills.4': 'Photography',
    'resume.programs': 'Programs',
    'resume.hobbies': 'Hobbies',
    'resume.hobbies.1': 'Cycling in nature',
    'resume.hobbies.2': 'Visiting historical sites',
    'resume.hobbies.3': 'Photography',
    
    'contact.title': 'Contact',
    'contact.subtitle': 'You can use the information below to get in touch with me.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.social': 'Social Media',
    'contact.form.title': 'Send a Message',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Your Full Name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'example@email.com',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Write your message here...',
    'contact.form.send': 'Send'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['tr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
