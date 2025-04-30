import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../assets/photos/logo.jpg";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("fr"); // Langue par défaut est le français
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/expositions", label: "Expositions" },
    { path: "/evenements", label: "Événements" },
    { path: "/artistes", label: "Artistes" },
    { path: "/contact", label: "Contact" },
    { path: "/shop", label: "Boutique" },
  ];

  useEffect(() => {
    // Ajouter le script de Google Translate si nécessaire
    if (typeof window.google === "undefined") {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "fr",
          includedLanguages: "en,fr", // Langues supportées
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    setLanguageDropdownOpen(false);

    // Changer la langue de Google Translate
    const translateCombo = document.querySelector(".goog-te-combo");
    if (translateCombo) {
      translateCombo.value = lang;
      translateCombo.dispatchEvent(new Event("change"));
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo de la galerie */}
            <img src={logo} alt="Logo de la galerie" className="h-12" />
            <Link to="/" className="text-xl font-bold">
              Galerie Pol Lemétais
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === path
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Sélecteur de langue avec drapeaux */}
            <div className="relative">
              <button
                onClick={() => setLanguageDropdownOpen((prev) => !prev)}
                className="flex items-center px-3 py-2 border rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <span className="mr-2">{language === "fr" ? "🇫🇷" : "🇬🇧"}</span>
                {language.toUpperCase()}
                <ChevronDown className="ml-2 h-4 w-4" />
              </button>

              {/* Dropdown des langues */}
              {languageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg z-50">
                  <button
                    onClick={() => toggleLanguage("fr")}
                    className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    🇫🇷 Français
                  </button>
                  <button
                    onClick={() => toggleLanguage("en")}
                    className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    🇬🇧 English
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Menu Hamburger (Mobile) */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-blue-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile (Animation) */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-200 py-4"
          >
            <div className="flex flex-col items-center space-y-4">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-sm font-medium ${
                    location.pathname === path
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {label}
                </Link>
              ))}
              {/* Button Langue */}
              <div className="flex items-center space-x-2">
                <button onClick={() => toggleLanguage("fr")} className="text-sm">
                  🇫🇷
                </button>
                <button onClick={() => toggleLanguage("en")} className="text-sm">
                  🇬🇧
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Élément Google Translate caché */}
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </nav>
  );
};

export default Navbar;
