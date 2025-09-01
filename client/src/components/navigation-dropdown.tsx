import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";

interface NavigationDropdownProps {
  language: 'en' | 'es';
  currentPath?: string;
}

export default function NavigationDropdown({ language, currentPath }: NavigationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const content = language === 'en' ? {
    // Spanish site content (English speakers learning Spanish)
    programs: "Programs",
    adultSpanish: "Spanish for Adults",
    childrenSpanish: "Spanish for Children", 
    businessSpanish: "Spanish for Companies"
  } : {
    // English site content (Spanish speakers learning English)
    programs: "Programas",
    adultEnglish: "Inglés para Adultos", 
    childrenEnglish: "Inglés para Niños",
    businessEnglish: "Inglés para Empresas"
  };

  const basePath = language === 'en' ? '/es' : '/en';
  
  const dropdownItems = language === 'en' ? [
    { label: content.adultSpanish, href: `${basePath}/adults` },
    { label: content.childrenSpanish, href: `${basePath}/children` },
    { label: content.businessSpanish, href: `${basePath}/business` }
  ] : [
    { label: content.adultEnglish, href: `${basePath}/adults` },
    { label: content.childrenEnglish, href: `${basePath}/children` },
    { label: content.businessEnglish, href: `${basePath}/business` }
  ];

  const isActive = currentPath && typeof currentPath === 'string' && (
    currentPath.includes('/adults') ||
    currentPath.includes('/children') || 
    currentPath.includes('/business')
  );

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // 150ms delay before closing
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        className={`flex items-center space-x-1 transition-colors ${
          isActive 
            ? language === 'en' 
              ? 'text-passport-orange font-semibold' 
              : 'text-passport-blue font-semibold'
            : 'text-gray-700 hover:text-passport-blue'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{content.programs}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="py-2">
            {dropdownItems.map((item, index) => (
              <Link 
                key={index}
                href={item.href}
                className={`block px-4 py-3 text-sm transition-colors ${
                  currentPath && typeof currentPath === 'string' && currentPath === item.href
                    ? language === 'en'
                      ? 'text-passport-orange bg-orange-50 font-semibold'
                      : 'text-passport-blue bg-blue-50 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-passport-blue'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}