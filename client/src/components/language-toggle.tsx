interface LanguageToggleProps {
  currentLanguage: 'es' | 'en';
  onLanguageChange: (lang: 'es' | 'en') => void;
  className?: string;
}

export default function LanguageToggle({ currentLanguage, onLanguageChange, className = "" }: LanguageToggleProps) {
  return (
    <div className={`fixed top-4 right-4 z-50 bg-white shadow-lg rounded-full p-2 border ${className}`}>
      <div className="flex items-center space-x-2">
        <button 
          onClick={() => onLanguageChange('es')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
            currentLanguage === 'es' 
              ? 'bg-passport-blue text-white' 
              : 'text-gray-600 hover:text-passport-blue'
          }`}
        >
          🇪🇸 ES
        </button>
        <button 
          onClick={() => onLanguageChange('en')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
            currentLanguage === 'en' 
              ? 'bg-passport-blue text-white' 
              : 'text-gray-600 hover:text-passport-blue'
          }`}
        >
          🇺🇸 EN
        </button>
      </div>
    </div>
  );
}
