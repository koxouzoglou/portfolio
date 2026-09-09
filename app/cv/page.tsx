"use client";

import { Github, Globe2, Linkedin, Mail, MapPin, Printer } from "lucide-react";
import { useState } from "react";

type Language = "en" | "el";

const content = {
  en: {
    role: "Junior Embedded Software, Robotics & AI Engineer",
    print: "Save as PDF",
    summaryTitle: "Profile",
    summary:
      "Computer Science graduate focused on embedded systems, robotics, artificial intelligence and software engineering. Project experience spans real-time Arduino firmware, neural networks and cross-platform products, with an emphasis on translating technical requirements into tested, maintainable systems.",
    educationTitle: "Education",
    degree: "BSc (Hons) Computer Science",
    institution: "University of East London",
    educationDate: "2022–2026",
    educationDetail:
      "All degree requirements completed July 2026. Programme delivered with Metropolitan College, Thessaloniki. Final classification pending.",
    projectsTitle: "Selected Projects",
    projects: [
      {
        name: "BIOS Beep Code Analyzer",
        type: "BSc Thesis · Embedded Systems",
        url: "https://github.com/koxouzoglou/bios-beep-code-analyzer",
        bullets: [
          "Designed an Arduino Uno diagnostic device that decodes motherboard beep signals and presents hardware fault guidance on a 128×64 OLED.",
          "Implemented approximately 1,900 lines of C++ firmware using edge detection, dual finite-state machines, EEPROM persistence and BIOS-specific timing.",
          "Supported AMI, Award and Phoenix patterns; passed 7/7 defined hardware test scenarios.",
        ],
      },
      {
        name: "Heart Disease Neural Network",
        type: "Academic AI Project",
        url: "https://github.com/koxouzoglou/heart-disease-neural-network",
        bullets: [
          "Built a TensorFlow/Keras MLP for binary classification of the Cleveland Heart Disease dataset from 13 clinical features.",
          "Coursework run reported 95.56% accuracy on a selected 45-sample test split; the public version documents dataset limitations and uses leakage-safe preprocessing.",
        ],
      },
      {
        name: "FoodRush",
        type: "Full-stack & Mobile Project",
        url: "https://github.com/koxouzoglou/foodrush",
        bullets: [
          "Developed React web and Expo/React Native clients sharing a Node.js/Express REST API and LowDB data layer.",
          "Implemented authentication, cart and checkout flows, order tracking, geolocation, WebAuthn and mobile biometrics.",
        ],
      },
      {
        name: "Theatre Booking System",
        type: "Distributed Mobile Systems",
        url: "https://github.com/koxouzoglou/theatre-booking",
        bullets: [
          "Built an Expo/React Native booking app with JWT authentication, interactive seat selection, an Express API, MariaDB and transactional conflict protection.",
        ],
      },
    ],
    skillsTitle: "Technical Skills",
    skillGroups: [
      ["Embedded", "C/C++, Arduino, finite-state machines, I2C, I2S, signal processing"],
      ["AI & Data", "Python, TensorFlow, Keras, scikit-learn, Pandas, NumPy"],
      ["Software", "TypeScript, JavaScript, React, React Native, Node.js, Express, REST APIs"],
      ["Data & Tools", "SQL, MariaDB, Git, GitHub, PlatformIO, Arduino IDE"],
    ],
    languagesTitle: "Languages",
    languages: "Greek — Native · English — C2 / Proficient",
    additionalTitle: "Additional",
    additional: "Driving licence",
  },
  el: {
    role: "Junior Embedded Software, Robotics & AI Engineer",
    print: "Αποθήκευση PDF",
    summaryTitle: "Προφίλ",
    summary:
      "Απόφοιτος Πληροφορικής με εστίαση στα embedded systems, τη ρομποτική, την τεχνητή νοημοσύνη και το software engineering. Εμπειρία μέσω projects σε real-time Arduino firmware, νευρωνικά δίκτυα και cross-platform προϊόντα, με έμφαση στη μετατροπή τεχνικών απαιτήσεων σε δοκιμασμένα και συντηρήσιμα συστήματα.",
    educationTitle: "Εκπαίδευση",
    degree: "BSc (Hons) Computer Science",
    institution: "University of East London",
    educationDate: "2022–2026",
    educationDetail:
      "Ολοκλήρωση όλων των απαιτήσεων τον Ιούλιο 2026. Πρόγραμμα σε συνεργασία με το Metropolitan College Θεσσαλονίκης. Αναμένεται η τελική κατάταξη πτυχίου.",
    projectsTitle: "Επιλεγμένα Projects",
    projects: [
      {
        name: "BIOS Beep Code Analyzer",
        type: "Πτυχιακή · Embedded Systems",
        url: "https://github.com/koxouzoglou/bios-beep-code-analyzer",
        bullets: [
          "Σχεδίασα διαγνωστική συσκευή Arduino Uno που αποκωδικοποιεί motherboard beep signals και εμφανίζει οδηγίες βλάβης σε OLED 128×64.",
          "Υλοποίησα περίπου 1.900 γραμμές C++ firmware με edge detection, δύο finite-state machines, EEPROM persistence και timing ανά BIOS.",
          "Υποστήριξη AMI, Award και Phoenix· επιτυχία σε 7/7 καθορισμένα hardware test scenarios.",
        ],
      },
      {
        name: "Heart Disease Neural Network",
        type: "Ακαδημαϊκό AI Project",
        url: "https://github.com/koxouzoglou/heart-disease-neural-network",
        bullets: [
          "Ανέπτυξα TensorFlow/Keras MLP για δυαδική ταξινόμηση του Cleveland Heart Disease dataset από 13 κλινικά χαρακτηριστικά.",
          "Το coursework run κατέγραψε 95,56% accuracy σε επιλεγμένο test split 45 δειγμάτων· η δημόσια έκδοση τεκμηριώνει τους περιορισμούς και χρησιμοποιεί leakage-safe preprocessing.",
        ],
      },
      {
        name: "FoodRush",
        type: "Full-stack & Mobile Project",
        url: "https://github.com/koxouzoglou/foodrush",
        bullets: [
          "Ανέπτυξα React web και Expo/React Native clients πάνω σε κοινό Node.js/Express REST API και LowDB.",
          "Υλοποίησα authentication, cart/checkout, order tracking, geolocation, WebAuthn και mobile biometrics.",
        ],
      },
      {
        name: "Theatre Booking System",
        type: "Distributed Mobile Systems",
        url: "https://github.com/koxouzoglou/theatre-booking",
        bullets: [
          "Ανέπτυξα Expo/React Native εφαρμογή κρατήσεων με JWT authentication, επιλογή θέσεων, Express API, MariaDB και transactional προστασία από conflicts.",
        ],
      },
    ],
    skillsTitle: "Τεχνικές Δεξιότητες",
    skillGroups: [
      ["Embedded", "C/C++, Arduino, finite-state machines, I2C, I2S, signal processing"],
      ["AI & Data", "Python, TensorFlow, Keras, scikit-learn, Pandas, NumPy"],
      ["Software", "TypeScript, JavaScript, React, React Native, Node.js, Express, REST APIs"],
      ["Data & Εργαλεία", "SQL, MariaDB, Git, GitHub, PlatformIO, Arduino IDE"],
    ],
    languagesTitle: "Γλώσσες",
    languages: "Ελληνικά — Μητρική · Αγγλικά — C2 / Άριστη γνώση",
    additionalTitle: "Επιπλέον",
    additional: "Άδεια οδήγησης",
  },
} as const;

export function CvDocument({ initialLanguage = "en" }: { initialLanguage?: Language }) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const t = content[language];

  return (
    <main className="cv-page">
      <div className="cv-toolbar">
        <div className="language-switch">
          <button
            className={language === "en" ? "active" : ""}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
          <button
            className={language === "el" ? "active" : ""}
            onClick={() => setLanguage("el")}
          >
            EL
          </button>
        </div>
        <button className="button button-primary" onClick={() => window.print()}>
          <Printer size={15} /> {t.print}
        </button>
      </div>

      <article className="cv-sheet">
        <header className="cv-header">
          <div className="cv-identity">
            <p className="cv-kicker">ENGINEERING · SOFTWARE · INTELLIGENCE</p>
            <h1>Konstantinos <span>Oxouzoglou</span></h1>
            <p className="cv-role">{t.role}</p>
          </div>
          <address className="cv-contact">
            <span><MapPin size={13} /> Thessaloniki, Greece</span>
            <a href="mailto:koxouzoglou@gmail.com"><Mail size={13} /> koxouzoglou@gmail.com</a>
            <a href="https://github.com/koxouzoglou"><Github size={13} /> github.com/koxouzoglou</a>
            <a href="https://www.linkedin.com/in/konstantinos-oxouzoglou">
              <Linkedin size={13} /> linkedin.com/in/konstantinos-oxouzoglou
            </a>
            <a href="https://koxouzoglou.github.io/portfolio/">
              <Globe2 size={13} /> koxouzoglou.github.io/portfolio
            </a>
          </address>
        </header>

        <div className="cv-layout">
          <div className="cv-main">
            <section className="cv-section">
              <h2>{t.summaryTitle}</h2>
              <p>{t.summary}</p>
            </section>

            <section className="cv-section">
              <h2>{t.projectsTitle}</h2>
              <div className="cv-projects">
                {t.projects.map((project) => (
                  <article className="cv-project" key={project.name}>
                    <div className="cv-project-heading">
                      <h3><a href={project.url}>{project.name}</a></h3>
                      <span>{project.type}</span>
                    </div>
                    <ul>
                      {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="cv-sidebar">
            <section className="cv-section">
              <h2>{t.educationTitle}</h2>
              <h3>{t.degree}</h3>
              <p className="cv-muted">{t.institution}</p>
              <p className="cv-date">{t.educationDate}</p>
              <p>{t.educationDetail}</p>
            </section>

            <section className="cv-section">
              <h2>{t.skillsTitle}</h2>
              <div className="cv-skills">
                {t.skillGroups.map(([group, skills]) => (
                  <div key={group}>
                    <h3>{group}</h3>
                    <p>{skills}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="cv-section">
              <h2>{t.languagesTitle}</h2>
              <p>{t.languages}</p>
            </section>

            <section className="cv-section">
              <h2>{t.additionalTitle}</h2>
              <p>{t.additional}</p>
            </section>
          </aside>
        </div>
      </article>
    </main>
  );
}

export default function CvPage() {
  return <CvDocument />;
}
