import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, BookOpen, Calculator, Trophy, Phone, Sparkles } from 'lucide-react';

interface MobileBottomNavProps {
  onOpenEnquire?: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenEnquire }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (path: string, e: React.MouseEvent) => {
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Courses', path: '/courses', icon: BookOpen },
    { name: 'Tools', path: '/tools', icon: Calculator },
    { name: 'Results', path: '/results', icon: Trophy },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  return (
    <aside
      aria-label="Mobile Navigation Bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-[9999] pointer-events-auto bg-[#060F1E] border-t-2 border-amber-500/50 shadow-[0_-10px_30px_rgba(0,0,0,0.6)]"
      style={{ paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 6px)' }}
    >
      <nav className="max-w-md mx-auto px-2 py-1.5 flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.path}
              onClick={(e) => handleNavClick(item.path, e)}
              className={`flex flex-col items-center justify-center min-w-[56px] py-1 px-1 rounded-xl transition-all cursor-pointer select-none active:scale-95 ${
                isActive
                  ? 'text-amber-400 font-black'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <div className={`p-1 rounded-lg transition-colors ${isActive ? 'bg-amber-400/20 text-amber-300' : 'text-slate-300'}`}>
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className={`text-[10px] tracking-tight mt-0.5 ${isActive ? 'font-black text-amber-300' : 'font-semibold text-slate-300'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}

        {/* Highlighted Enquire Button */}
        <button
          type="button"
          onClick={() => {
            if (onOpenEnquire) onOpenEnquire();
          }}
          className="flex flex-col items-center justify-center min-w-[58px] py-1 px-2 rounded-xl bg-gradient-to-br from-[#E87500] to-[#D96900] text-white font-black shadow-lg shadow-orange-500/30 active:scale-95 transition-transform cursor-pointer shrink-0"
        >
          <Sparkles className="w-4 h-4 text-amber-200 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-wider mt-0.5">Enquire</span>
        </button>
      </nav>
    </aside>
  );
};
