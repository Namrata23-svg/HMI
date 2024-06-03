// src/translations.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const translations = {
    en: {
        search: "Search...",
        searchButton: "Search",
        HMICentreOfExcellenceCoE: "HMI Centre of Excellence (CoE)",
        HMIOverview: "HMI Overview",
        UXUI: "UX/UI",
        HMISoftwareDevelopment: "HMI Software Development",
        HMIVVSolutions: "HMI V&V Solutions",
        HMIAccelerators: "HMI Accelerators",
        HMISoftwareProducts: "HMI Software Products",
        PRESENTATION: "PRESENTATION",
        VIDEO: "VIDEO",
        CASESTUDY: "CASE STUDY"
      },
      de: {
        search: "Suchen...",
        searchButton: "Suchen",
        HMICentreOfExcellenceCoE: "HMI-Zentrum für Exzellenz (CoE)",
        HMIOverview: "HMI-Oberblick",
        UXUI: "UX/UI",
        HMISoftwareDevelopment: "HMI-Softwareentwicklung",
        HMIVVSolutions: "HMI V&V-Lösungen",
        HMIAccelerators: "HMI-Beschleuniger",
        HMISoftwareProducts: "HMI-Softwareprodukte",
        PRESENTATION: "PRÄSENTATION",
        VIDEO: "VIDEOde",
        CASESTUDY: "FALLSTUDIE"
      }
    };

    
i18n
.use(initReactI18next)
.init({
  translations,
  lng: 'en', 
  fallbackLng: 'en', 
  interpolation: {
    escapeValue: false 
  }
});
    
    export default translations;