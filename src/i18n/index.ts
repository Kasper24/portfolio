import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const year = new Date().getFullYear();

const resources = {
  en: {
    translation: {
      Projects: "Projects",
      "About Me": "About Me",
      Skills: "Skills",
      "Get in Touch": "Get in Touch",
      Copyright: `© ${year} made by Ofek. All rights reserved.`,
    },
  },
  fr: {
    translation: {
      Projects: "Projets",
      "About Me": "À propos de moi",
      Skills: "Compétences",
      "Get in Touch": "Contactez-moi",
      Copyright: `© ${year} créé par Ofek. Tous droits réservés.`,
    },
  },
  de: {
    translation: {
      Projects: "Projekte",
      "About Me": "Über mich",
      Skills: "Fähigkeiten",
      "Get in Touch": "Kontakt aufnehmen",
      Copyright: `© ${year} von Ofek erstellt. Alle Rechte vorbehalten.`,
    },
  },
  it: {
    translation: {
      Projects: "Progetti",
      "About Me": "Su di me",
      Skills: "Competenze",
      "Get in Touch": "Contattami",
      Copyright: `© ${year} creato da Ofek. Tutti i diritti riservati.`,
    },
  },
  pt: {
    translation: {
      Projects: "Projetos",
      "About Me": "Sobre mim",
      Skills: "Habilidades",
      "Get in Touch": "Entre em contato",
      Copyright: `© ${year} feito por Ofek. Todos os direitos reservados.`,
    },
  },
  ru: {
    translation: {
      Projects: "Проекты",
      "About Me": "Обо мне",
      Skills: "Навыки",
      "Get in Touch": "Связаться",
      Copyright: `© ${year} создано Офеком. Все права защищены.`,
    },
  },
  ja: {
    translation: {
      Projects: "プロジェクト",
      "About Me": "私について",
      Skills: "スキル",
      "Get in Touch": "お問い合わせ",
      Copyright: `© ${year} Ofekによる作成。全著作権所有。`,
    },
  },
  ko: {
    translation: {
      Projects: "프로젝트",
      "About Me": "내 소개",
      Skills: "기술",
      "Get in Touch": "문의하기",
      Copyright: `© ${year} Ofek 제작. 모든 권리 보유.`,
    },
  },
  ar: {
    translation: {
      Projects: "المشاريع",
      "About Me": "عنّي",
      Skills: "المهارات",
      "Get in Touch": "تواصل معي",
      Copyright: `© ${year} صنع بواسطة أوفيك. جميع الحقوق محفوظة.`,
    },
  },
  he: {
    translation: {
      Projects: "פרויקטים",
      "About Me": "עליי",
      Skills: "מיומנויות",
      "Get in Touch": "צור קשר",
      Copyright: `© ${year} נוצר על ידי אופק. כל הזכויות שמורות.`,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lng") || undefined,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
