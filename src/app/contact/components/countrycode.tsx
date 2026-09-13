"use client";

import React, { useState, useEffect, useRef } from "react";
import { Check, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Define country data interface
interface CountryData {
  code: string;
  name: string;
  dialCode: string;
}

// Country data - US first, then alphabetical order
const countries: CountryData[] = [
  { code: "US", name: "United States", dialCode: "+1" },
  { code: "AF", name: "Afghanistan", dialCode: "+93" },
  { code: "AL", name: "Albania", dialCode: "+355" },
  { code: "DZ", name: "Algeria", dialCode: "+213" },
  { code: "AS", name: "American Samoa", dialCode: "+1684" },
  { code: "AD", name: "Andorra", dialCode: "+376" },
  { code: "AO", name: "Angola", dialCode: "+244" },
  { code: "AI", name: "Anguilla", dialCode: "+1264" },
  { code: "AG", name: "Antigua and Barbuda", dialCode: "+1268" },
  { code: "AR", name: "Argentina", dialCode: "+54" },
  { code: "AM", name: "Armenia", dialCode: "+374" },
  { code: "AW", name: "Aruba", dialCode: "+297" },
  { code: "AU", name: "Australia", dialCode: "+61" },
  { code: "AT", name: "Austria", dialCode: "+43" },
  { code: "AZ", name: "Azerbaijan", dialCode: "+994" },
  { code: "BS", name: "Bahamas", dialCode: "+1242" },
  { code: "BH", name: "Bahrain", dialCode: "+973" },
  { code: "BD", name: "Bangladesh", dialCode: "+880" },
  { code: "BB", name: "Barbados", dialCode: "+1246" },
  { code: "BY", name: "Belarus", dialCode: "+375" },
  { code: "BE", name: "Belgium", dialCode: "+32" },
  { code: "BZ", name: "Belize", dialCode: "+501" },
  { code: "BJ", name: "Benin", dialCode: "+229" },
  { code: "BM", name: "Bermuda", dialCode: "+1441" },
  { code: "BT", name: "Bhutan", dialCode: "+975" },
  { code: "BO", name: "Bolivia", dialCode: "+591" },
  { code: "BA", name: "Bosnia and Herzegovina", dialCode: "+387" },
  { code: "BW", name: "Botswana", dialCode: "+267" },
  { code: "BR", name: "Brazil", dialCode: "+55" },
  { code: "IO", name: "British Indian Ocean Territory", dialCode: "+246" },
  { code: "BN", name: "Brunei Darussalam", dialCode: "+673" },
  { code: "BG", name: "Bulgaria", dialCode: "+359" },
  { code: "BF", name: "Burkina Faso", dialCode: "+226" },
  { code: "BI", name: "Burundi", dialCode: "+257" },
  { code: "KH", name: "Cambodia", dialCode: "+855" },
  { code: "CM", name: "Cameroon", dialCode: "+237" },
  { code: "CA", name: "Canada", dialCode: "+1" },
  { code: "CV", name: "Cape Verde", dialCode: "+238" },
  { code: "KY", name: "Cayman Islands", dialCode: "+1345" },
  { code: "CF", name: "Central African Republic", dialCode: "+236" },
  { code: "TD", name: "Chad", dialCode: "+235" },
  { code: "CL", name: "Chile", dialCode: "+56" },
  { code: "CN", name: "China", dialCode: "+86" },
  { code: "CO", name: "Colombia", dialCode: "+57" },
  { code: "KM", name: "Comoros", dialCode: "+269" },
  { code: "CG", name: "Congo", dialCode: "+242" },
  { code: "CD", name: "Congo, Democratic Republic", dialCode: "+243" },
  { code: "CK", name: "Cook Islands", dialCode: "+682" },
  { code: "CR", name: "Costa Rica", dialCode: "+506" },
  { code: "CI", name: "Cote d'Ivoire", dialCode: "+225" },
  { code: "HR", name: "Croatia", dialCode: "+385" },
  { code: "CU", name: "Cuba", dialCode: "+53" },
  { code: "CY", name: "Cyprus", dialCode: "+357" },
  { code: "CZ", name: "Czech Republic", dialCode: "+420" },
  { code: "DK", name: "Denmark", dialCode: "+45" },
  { code: "DJ", name: "Djibouti", dialCode: "+253" },
  { code: "DM", name: "Dominica", dialCode: "+1767" },
  { code: "DO", name: "Dominican Republic", dialCode: "+1849" },
  { code: "EC", name: "Ecuador", dialCode: "+593" },
  { code: "EG", name: "Egypt", dialCode: "+20" },
  { code: "SV", name: "El Salvador", dialCode: "+503" },
  { code: "GQ", name: "Equatorial Guinea", dialCode: "+240" },
  { code: "ER", name: "Eritrea", dialCode: "+291" },
  { code: "EE", name: "Estonia", dialCode: "+372" },
  { code: "ET", name: "Ethiopia", dialCode: "+251" },
  { code: "FK", name: "Falkland Islands", dialCode: "+500" },
  { code: "FO", name: "Faroe Islands", dialCode: "+298" },
  { code: "FJ", name: "Fiji", dialCode: "+679" },
  { code: "FI", name: "Finland", dialCode: "+358" },
  { code: "FR", name: "France", dialCode: "+33" },
  { code: "GF", name: "French Guiana", dialCode: "+594" },
  { code: "PF", name: "French Polynesia", dialCode: "+689" },
  { code: "GA", name: "Gabon", dialCode: "+241" },
  { code: "GM", name: "Gambia", dialCode: "+220" },
  { code: "GE", name: "Georgia", dialCode: "+995" },
  { code: "DE", name: "Germany", dialCode: "+49" },
  { code: "GH", name: "Ghana", dialCode: "+233" },
  { code: "GI", name: "Gibraltar", dialCode: "+350" },
  { code: "GR", name: "Greece", dialCode: "+30" },
  { code: "GL", name: "Greenland", dialCode: "+299" },
  { code: "GD", name: "Grenada", dialCode: "+1473" },
  { code: "GP", name: "Guadeloupe", dialCode: "+590" },
  { code: "GU", name: "Guam", dialCode: "+1671" },
  { code: "GT", name: "Guatemala", dialCode: "+502" },
  { code: "GN", name: "Guinea", dialCode: "+224" },
  { code: "GW", name: "Guinea-Bissau", dialCode: "+245" },
  { code: "GY", name: "Guyana", dialCode: "+592" },
  { code: "HT", name: "Haiti", dialCode: "+509" },
  { code: "HN", name: "Honduras", dialCode: "+504" },
  { code: "HK", name: "Hong Kong", dialCode: "+852" },
  { code: "HU", name: "Hungary", dialCode: "+36" },
  { code: "IS", name: "Iceland", dialCode: "+354" },
  { code: "IN", name: "India", dialCode: "+91" },
  { code: "ID", name: "Indonesia", dialCode: "+62" },
  { code: "IR", name: "Iran", dialCode: "+98" },
  { code: "IQ", name: "Iraq", dialCode: "+964" },
  { code: "IE", name: "Ireland", dialCode: "+353" },
  { code: "IL", name: "Israel", dialCode: "+972" },
  { code: "IT", name: "Italy", dialCode: "+39" },
  { code: "JM", name: "Jamaica", dialCode: "+1876" },
  { code: "JP", name: "Japan", dialCode: "+81" },
  { code: "JO", name: "Jordan", dialCode: "+962" },
  { code: "KZ", name: "Kazakhstan", dialCode: "+7" },
  { code: "KE", name: "Kenya", dialCode: "+254" },
  { code: "KI", name: "Kiribati", dialCode: "+686" },
  { code: "KP", name: "Korea, North", dialCode: "+850" },
  { code: "KR", name: "Korea, South", dialCode: "+82" },
  { code: "KW", name: "Kuwait", dialCode: "+965" },
  { code: "KG", name: "Kyrgyzstan", dialCode: "+996" },
  { code: "LA", name: "Laos", dialCode: "+856" },
  { code: "LV", name: "Latvia", dialCode: "+371" },
  { code: "LB", name: "Lebanon", dialCode: "+961" },
  { code: "LS", name: "Lesotho", dialCode: "+266" },
  { code: "LR", name: "Liberia", dialCode: "+231" },
  { code: "LY", name: "Libya", dialCode: "+218" },
  { code: "LI", name: "Liechtenstein", dialCode: "+423" },
  { code: "LT", name: "Lithuania", dialCode: "+370" },
  { code: "LU", name: "Luxembourg", dialCode: "+352" },
  { code: "MO", name: "Macao", dialCode: "+853" },
  { code: "MK", name: "Macedonia", dialCode: "+389" },
  { code: "MG", name: "Madagascar", dialCode: "+261" },
  { code: "MW", name: "Malawi", dialCode: "+265" },
  { code: "MY", name: "Malaysia", dialCode: "+60" },
  { code: "MV", name: "Maldives", dialCode: "+960" },
  { code: "ML", name: "Mali", dialCode: "+223" },
  { code: "MT", name: "Malta", dialCode: "+356" },
  { code: "MH", name: "Marshall Islands", dialCode: "+692" },
  { code: "MQ", name: "Martinique", dialCode: "+596" },
  { code: "MR", name: "Mauritania", dialCode: "+222" },
  { code: "MU", name: "Mauritius", dialCode: "+230" },
  { code: "YT", name: "Mayotte", dialCode: "+262" },
  { code: "MX", name: "Mexico", dialCode: "+52" },
  { code: "FM", name: "Micronesia", dialCode: "+691" },
  { code: "MD", name: "Moldova", dialCode: "+373" },
  { code: "MC", name: "Monaco", dialCode: "+377" },
  { code: "MN", name: "Mongolia", dialCode: "+976" },
  { code: "ME", name: "Montenegro", dialCode: "+382" },
  { code: "MS", name: "Montserrat", dialCode: "+1664" },
  { code: "MA", name: "Morocco", dialCode: "+212" },
  { code: "MZ", name: "Mozambique", dialCode: "+258" },
  { code: "MM", name: "Myanmar", dialCode: "+95" },
  { code: "NA", name: "Namibia", dialCode: "+264" },
  { code: "NR", name: "Nauru", dialCode: "+674" },
  { code: "NP", name: "Nepal", dialCode: "+977" },
  { code: "NL", name: "Netherlands", dialCode: "+31" },
  { code: "NC", name: "New Caledonia", dialCode: "+687" },
  { code: "NZ", name: "New Zealand", dialCode: "+64" },
  { code: "NI", name: "Nicaragua", dialCode: "+505" },
  { code: "NE", name: "Niger", dialCode: "+227" },
  { code: "NG", name: "Nigeria", dialCode: "+234" },
  { code: "NU", name: "Niue", dialCode: "+683" },
  { code: "NF", name: "Norfolk Island", dialCode: "+672" },
  { code: "MP", name: "Northern Mariana Islands", dialCode: "+1670" },
  { code: "NO", name: "Norway", dialCode: "+47" },
  { code: "OM", name: "Oman", dialCode: "+968" },
  { code: "PK", name: "Pakistan", dialCode: "+92" },
  { code: "PW", name: "Palau", dialCode: "+680" },
  { code: "PS", name: "Palestine", dialCode: "+970" },
  { code: "PA", name: "Panama", dialCode: "+507" },
  { code: "PG", name: "Papua New Guinea", dialCode: "+675" },
  { code: "PY", name: "Paraguay", dialCode: "+595" },
  { code: "PE", name: "Peru", dialCode: "+51" },
  { code: "PH", name: "Philippines", dialCode: "+63" },
  { code: "PL", name: "Poland", dialCode: "+48" },
  { code: "PT", name: "Portugal", dialCode: "+351" },
  { code: "PR", name: "Puerto Rico", dialCode: "+1939" },
  { code: "QA", name: "Qatar", dialCode: "+974" },
  { code: "RE", name: "Reunion", dialCode: "+262" },
  { code: "RO", name: "Romania", dialCode: "+40" },
  { code: "RU", name: "Russian Federation", dialCode: "+7" },
  { code: "RW", name: "Rwanda", dialCode: "+250" },
  { code: "KN", name: "Saint Kitts and Nevis", dialCode: "+1869" },
  { code: "LC", name: "Saint Lucia", dialCode: "+1758" },
  { code: "VC", name: "Saint Vincent and Grenadines", dialCode: "+1784" },
  { code: "WS", name: "Samoa", dialCode: "+685" },
  { code: "SM", name: "San Marino", dialCode: "+378" },
  { code: "ST", name: "Sao Tome and Principe", dialCode: "+239" },
  { code: "SA", name: "Saudi Arabia", dialCode: "+966" },
  { code: "SN", name: "Senegal", dialCode: "+221" },
  { code: "RS", name: "Serbia", dialCode: "+381" },
  { code: "SC", name: "Seychelles", dialCode: "+248" },
  { code: "SL", name: "Sierra Leone", dialCode: "+232" },
  { code: "SG", name: "Singapore", dialCode: "+65" },
  { code: "SK", name: "Slovakia", dialCode: "+421" },
  { code: "SI", name: "Slovenia", dialCode: "+386" },
  { code: "SB", name: "Solomon Islands", dialCode: "+677" },
  { code: "SO", name: "Somalia", dialCode: "+252" },
  { code: "ZA", name: "South Africa", dialCode: "+27" },
  { code: "SS", name: "South Sudan", dialCode: "+211" },
  { code: "ES", name: "Spain", dialCode: "+34" },
  { code: "LK", name: "Sri Lanka", dialCode: "+94" },
  { code: "SD", name: "Sudan", dialCode: "+249" },
  { code: "SR", name: "Suriname", dialCode: "+597" },
  { code: "SZ", name: "Swaziland", dialCode: "+268" },
  { code: "SE", name: "Sweden", dialCode: "+46" },
  { code: "CH", name: "Switzerland", dialCode: "+41" },
  { code: "SY", name: "Syrian Arab Republic", dialCode: "+963" },
  { code: "TW", name: "Taiwan", dialCode: "+886" },
  { code: "TJ", name: "Tajikistan", dialCode: "+992" },
  { code: "TZ", name: "Tanzania", dialCode: "+255" },
  { code: "TH", name: "Thailand", dialCode: "+66" },
  { code: "TL", name: "Timor-Leste", dialCode: "+670" },
  { code: "TG", name: "Togo", dialCode: "+228" },
  { code: "TK", name: "Tokelau", dialCode: "+690" },
  { code: "TO", name: "Tonga", dialCode: "+676" },
  { code: "TT", name: "Trinidad and Tobago", dialCode: "+1868" },
  { code: "TN", name: "Tunisia", dialCode: "+216" },
  { code: "TR", name: "Turkey", dialCode: "+90" },
  { code: "TM", name: "Turkmenistan", dialCode: "+993" },
  { code: "TC", name: "Turks and Caicos Islands", dialCode: "+1649" },
  { code: "TV", name: "Tuvalu", dialCode: "+688" },
  { code: "UG", name: "Uganda", dialCode: "+256" },
  { code: "UA", name: "Ukraine", dialCode: "+380" },
  { code: "AE", name: "United Arab Emirates", dialCode: "+971" },
  { code: "GB", name: "United Kingdom", dialCode: "+44" },
  { code: "UY", name: "Uruguay", dialCode: "+598" },
  { code: "UZ", name: "Uzbekistan", dialCode: "+998" },
  { code: "VU", name: "Vanuatu", dialCode: "+678" },
  { code: "VE", name: "Venezuela", dialCode: "+58" },
  { code: "VN", name: "Vietnam", dialCode: "+84" },
  { code: "VG", name: "Virgin Islands, British", dialCode: "+1284" },
  { code: "VI", name: "Virgin Islands, U.S.", dialCode: "+1340" },
  { code: "YE", name: "Yemen", dialCode: "+967" },
  { code: "ZM", name: "Zambia", dialCode: "+260" },
  { code: "ZW", name: "Zimbabwe", dialCode: "+263" }
];

// Flag component using Next.js Image for better optimization
const CountryFlag = ({ countryCode }: { countryCode: string }) => {
  // Use SVG flags from flagcdn for high resolution
  const flagUrl = `https://flagcdn.com/${countryCode.toLowerCase()}.svg`;
  
  return (
    <div className="w-8 h-6 mr-3 overflow-hidden flex-shrink-0 rounded-sm border border-gray-100 shadow-sm">
      <Image 
        src={flagUrl} 
        alt={`Flag of ${countryCode}`} 
        width={32}
        height={24}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
};

interface CountryCodeProps {
  value?: string;
  onChange: (value: string) => void;
  className?: string;
}

const CountryCode: React.FC<CountryCodeProps> = ({
  value = "+1",
  onChange,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSelection, setHasSelection] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Set initial selected country based on value prop
    const country = countries.find((c) => c.dialCode === value);
    if (country) {
      setSelectedCountry(country);
      setHasSelection(true);
    }
  }, [value]);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setSearchQuery("");
  };

  const handleCountrySelect = (country: CountryData) => {
    setSelectedCountry(country);
    setHasSelection(true);
    onChange(country.dialCode);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleDropdown();
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  // Function to find exact country by dialCode (handling the +1 case properly)
  const findExactCountry = (dialCode: string, code?: string): CountryData | null => {
    // If we have a specific country code, use that first
    if (code) {
      const exactMatch = countries.find(c => c.code === code && c.dialCode === dialCode);
      if (exactMatch) return exactMatch;
    }
    
    // For dial code +1 (US and Canada), we should handle specially
    if (dialCode === "+1") {
      // If code is provided and matches Canada, return Canada
      if (code === "CA") {
        return countries.find(c => c.code === "CA") || null;
      }
      // Otherwise default to US
      return countries.find(c => c.code === "US") || null;
    }
    
    // For all other dial codes, just find the first match
    return countries.find(c => c.dialCode === dialCode) || null;
  };

  // Initialize with proper country
  useEffect(() => {
    const country = findExactCountry(value);
    if (country) {
      setSelectedCountry(country);
      setHasSelection(true);
    }
  }, [value]);

  const filteredCountries = countries.filter((country) => {
    const query = searchQuery.toLowerCase();
    return (
      country.name.toLowerCase().includes(query) ||
      country.code.toLowerCase().includes(query) ||
      country.dialCode.toLowerCase().includes(query)
    );
  });

  return (
    <div
      className={`relative ${className}`}
      ref={dropdownRef}
      aria-label="Country code selector"
    >
      <div
        className="h-11 px-3 py-2 flex items-center justify-between border border-gray-300 rounded-lg shadow-sm bg-gray-50 cursor-pointer hover:border-gray-400 focus:border-blue-400 focus:ring-blue-200 focus:outline-none focus:ring-2"
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        style={{
          backgroundColor: hasSelection ? "white" : "",
        }}
      >
        {hasSelection && selectedCountry ? (
          <div className="flex items-center w-full">
            <CountryFlag countryCode={selectedCountry.code} />
            <span className="text-gray-600 text-sm truncate flex-1 mr-2">
              {selectedCountry.name}
            </span>
            <span className="text-sm font-medium whitespace-nowrap">{selectedCountry.dialCode}</span>
          </div>
        ) : (
          <div className="flex items-center justify-between w-full">
            <span className="text-gray-500 text-sm flex-1">Select country</span>
            <ChevronDown size={16} className="text-gray-400 ml-2" />
          </div>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 left-0 mt-1 w-80 max-h-60 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="sticky top-0 bg-white z-10 p-2 border-b border-gray-100">
              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search countries..."
                  className="w-full pl-8 pr-2 py-1.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="max-h-48 overflow-y-auto">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country) => (
                  <div
                    key={country.code}
                    className={`flex items-center px-3 py-2 hover:bg-blue-50 cursor-pointer ${
                      selectedCountry?.code === country.code
                        ? "bg-blue-50"
                        : ""
                    }`}
                    onClick={() => handleCountrySelect(country)}
                    tabIndex={0}
                    role="option"
                    aria-selected={selectedCountry?.code === country.code}
                  >
                    <CountryFlag countryCode={country.code} />
                    <span className="flex-1 text-sm text-gray-600">
                      {country.name}
                    </span>
                    <span className="text-sm font-medium whitespace-nowrap">
                      {country.dialCode}
                    </span>
                    {selectedCountry?.code === country.code && (
                      <Check size={16} className="ml-2 text-blue-600" />
                    )}
                  </div>
                ))
              ) : (
                <div className="px-3 py-2 text-gray-500 text-center">
                  No countries found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CountryCode;