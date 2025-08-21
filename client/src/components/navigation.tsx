import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import passportLogo from "@assets/a1c5a1_9514ede9e3124d7a9adf78f5dcf07f28~mv2_1755803448396.png";

interface NavigationProps {
  t: (key: string) => string;
  onSectionClick: (sectionId: string) => void;
  onBookingClick: () => void;
}

export default function Navigation({ t, onSectionClick, onBookingClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsOpen(false);
  };

  const navItems = [
    { key: 'nav.home', id: 'inicio' },
    { key: 'nav.howItWorks', id: 'como-funciona' },
    { key: 'nav.plans', id: 'planes' },
    { key: 'nav.teachers', id: 'coaches' },
    { key: 'nav.testimonials', id: 'testimonios' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src={passportLogo} alt="Passport to Fluency Logo" className="h-10 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-passport-gray hover:text-passport-blue px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block">
            <Button 
              onClick={onBookingClick}
              className="passport-orange text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              {t('nav.freeTrial')}
            </Button>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-passport-gray hover:text-passport-blue py-2 text-left border-b border-gray-200"
                    >
                      {t(item.key)}
                    </button>
                  ))}
                  <Button 
                    onClick={() => {
                      onBookingClick();
                      setIsOpen(false);
                    }}
                    className="passport-orange text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors mt-6"
                  >
                    {t('nav.freeTrial')}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
