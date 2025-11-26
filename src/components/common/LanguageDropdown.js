'use client';

import { setLangugae } from '@/store/slices/languageSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');
  const dispatch = useDispatch();

  const languages = [
    { label: 'English', code: '' },
    { label: 'العربية', code: 'ar' },
    { label: 'Français', code: 'fr' },
    { label: 'Spanish', code: 'es' },
    {label:"German",code:"de"},
    {label:"Italian",code:"it"},
  ];

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const selectLanguage = (lang) => {
    setSelectedLang(lang.label);
    setIsOpen(false);
    dispatch(setLangugae(lang.code));
  };

  return (
    <div className="relative inline-block text-left w-full">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full rounded-lg border border-[#D5D7DA] px-4 py-2 bg-white text-sm font-medium text-gray-700 h-[44px] cursor-pointer focus:outline-none dark:bg-[#0C0E12] dark:border-[#373A41] dark:text-white"
      >
        {selectedLang}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 dark:bg-[#0C0E12]">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => selectLanguage(lang)}
                className="block w-full px-4 py-2 text-sm text-left text-[#414651] dark:text-[#CECFD2] hover:bg-gray-100 dark:hover:bg-[#1C1E24]"
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
