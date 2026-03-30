import { NavLink, Outlet } from 'react-router-dom';
import { User, FileText, Mail, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function Layout() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { name: t('nav.about'), path: '/', icon: User },
    { name: t('nav.resume'), path: '/resume', icon: FileText },
    { name: t('nav.contact'), path: '/contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-20 flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Sidebar Navigation */}
        <aside className="md:w-64 shrink-0">
          <div className="sticky top-8 md:top-20">
            <div className="mb-6 md:mb-8 flex items-center justify-between md:block">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-[var(--text-main)]">Emre Çelebi</h1>
                <p className="text-[var(--text-muted)] mt-1 text-sm md:text-base">{t('role')}</p>
              </div>
              
              {/* Mobile Toggles */}
              <div className="flex md:hidden items-center gap-2">
                <button
                  onClick={toggleLanguage}
                  className="p-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
                  aria-label="Toggle Language"
                >
                  <span className="text-xs font-bold uppercase">{language}</span>
                </button>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
                  aria-label="Toggle Theme"
                >
                  {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                </button>
              </div>
            </div>
            
            <nav className="flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'bg-[var(--nav-active-bg)] text-[var(--nav-active-text)] font-medium shadow-sm ring-1 ring-[var(--border-subtle)]'
                        : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card-hover)]'
                    }`
                  }
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Toggles */}
            <div className="hidden md:flex items-center gap-3 mt-8 pt-8 border-t border-[var(--border-subtle)]">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors text-sm font-medium"
              >
                <Globe className="w-4 h-4" />
                {language === 'tr' ? 'English' : 'Türkçe'}
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
