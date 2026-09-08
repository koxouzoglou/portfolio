"use client";

import { Github, Linkedin, Mail, MapPin, Printer } from "lucide-react";
import { useState } from "react";

type Language = "en" | "el";

const content = {
  en: {
    role: "Junior Robotics, Embedded Systems, Software & AI Engineer",
    print: "Save as PDF",
    summaryTitle: "Profile",
    summary:
      "Computer Science graduate with all degree requirements completed in July 2026, interested in building intelligent systems across embedded hardware, real-time software, machine learning and cross-platform applications. Strong project-based experience turning technical requirements into tested prototypes and maintainable software.",
    educationTitle: "Education",
    degree: "BSc (Hons) Computer Science",
    institution: "University of East London",
    educationDate: "2022–2026 · Coursework completed July 2026",
    educationDetail:
      "Final-year thesis focused on embedded diagnostics and real-time BIOS acoustic signal analysis.",
    projectsTitle: "Selected Projects",
    projects: [
      {
        name: "BIOS Beep Code Analyzer",
        type: "BSc Thesis · Embedded Systems",
        bullets: [
          "Designed an Arduino Uno diagnostic device that decodes motherboard beep signals and presents hardware fault guidance on a 128×64 OLED.",
          "Implemented approximately 1,900 lines of C++ firmware using edge detection, dual finite-state machines, EEPROM persistence and BIOS-specific timing.",
          "Supported AMI, Award and Phoenix patterns; passed 7/7 defined hardware test scenarios.",
        ],
      },
      {
        name: "Heart Disease Neural Network",
        type: "Academic AI Project",
        bullets: [
          "Built a TensorFlow/Keras MLP for binary classification of the Cleveland Heart Disease dataset from 13 clinical features.",
          "Achieved 95.56% accuracy on a 45-sample test split, with precision, recall and F1 score around 0.95–0.96.",
          "Applied data cleaning, standardisation, stratified splitting, dropout, batch normalisation and early stopping.",
        ],
      },
      {
        name: "FoodRush",
        type: "Full-stack & Mobile Project",
        bullets: [
          "Developed React web and Expo/React Native clients sharing a Node.js/Express REST API and LowDB data layer.",
          "Implemented authentication, cart and checkout flows, order tracking, geolocation, WebAuthn and mobile biometrics.",
        ],
      },
      {
        name: "AI Keychain",
        type: "Embedded Edge-AI Concept · In Planning",
        bullets: [
          "Designed a modular ESP32-S3 architecture for wake word, speech, hybrid local/cloud AI, I2S audio and power management.",
        ],
      },
    ],
    skillsTitle: "Technical Skills",
    skillGroups: [
      ["Embedded", "C/C++, Arduino, finite-state machines, I2C, I2S, signal processing"],
      ["AI & Data", "Python, TensorFlow, Keras, scikit-learn, Pandas, NumPy"],
      ["Software", "JavaScript, React, React Native, Expo, Node.js, Express, REST APIs"],
      ["Tools", "Git, GitHub, PlatformIO, Arduino IDE, VS Code"],
    ],
    languagesTitle: "Languages",
    languages: "Greek — Native · English — C2 / Proficient",
    additionalTitle: "Additional",
    additional: "Driving licence",
  },
  el: {
    role: "Junior Robotics, Embedded Systems, Software & AI Engineer",
    print: "Αποθήκευση PDF",
    summaryTitle: "Προφίλ",
    summary:
      "Απόφοιτος Πληροφορικής με ολοκληρωμένες όλες τις απαιτήσεις του πτυχίου τον Ιούλιο 2026 και ενδιαφέρον στην ανάπτυξη ευφυών συστημάτων που συνδυάζουν embedded hardware, real-time software, machine learning και cross-platform εφαρμογές. Ισχυρή εμπειρία μέσω projects στη μετατροπή τεχνικών απαιτήσεων σε δοκιμασμένα prototypes και συντηρήσιμο λογισμικό.",
    educationTitle: "Εκπαίδευση",
    degree: "BSc (Hons) Computer Science",
    institution: "University of East London",
    educationDate: "2022–2026 · Ολοκλήρωση μαθημάτων Ιούλιος 2026",
    educationDetail:
      "Πτυχιακή εργασία σε embedded diagnostics και real-time ανάλυση ακουστικών σημάτων BIOS.",
    projectsTitle: "Επιλεγμένα Projects",
    projects: [
      {
        name: "BIOS Beep Code Analyzer",
        type: "Πτυχιακή · Embedded Systems",
        bullets: [
          "Σχεδίασα διαγνωστική συσκευή Arduino Uno που αποκωδικοποιεί motherboard beep signals και εμφανίζει οδηγίες βλάβης σε OLED 128×64.",
          "Υλοποίησα περίπου 1.900 γραμμές C++ firmware με edge detection, δύο finite-state machines, EEPROM persistence και timing ανά BIOS.",
          "Υποστήριξη AMI, Award και Phoenix· επιτυχία σε 7/7 καθορισμένα hardware test scenarios.",
        ],
      },
      {
        name: "Heart Disease Neural Network",
        type: "Ακαδημαϊκό AI Project",
        bullets: [
          "Ανέπτυξα TensorFlow/Keras MLP για δυαδική ταξινόμηση του Cleveland Heart Disease dataset από 13 κλινικά χαρακτηριστικά.",
          "Πέτυχα 95,56% accuracy σε test split 45 δειγμάτων, με precision, recall και F1 περίπου 0,95–0,96.",
          "Εφάρμοσα data cleaning, standardisation, stratified splitting, dropout, batch normalisation και early stopping.",
        ],
      },
      {
        name: "FoodRush",
        type: "Full-stack & Mobile Project",
        bullets: [
          "Ανέπτυξα React web και Expo/React Native clients πάνω σε κοινό Node.js/Express REST API και LowDB.",
          "Υλοποίησα authentication, cart/checkout, order tracking, geolocation, WebAuthn και mobile biometrics.",
        ],
      },
      {
        name: "AI Keychain",
        type: "Embedded Edge-AI Concept · Σχεδιασμός",
        bullets: [
          "Σχεδίασα modular ESP32-S3 αρχιτεκτονική για wake word, speech, hybrid local/cloud AI, I2S audio και power management.",
        ],
      },
    ],
    skillsTitle: "Τεχνικές Δεξιότητες",
    skillGroups: [
      ["Embedded", "C/C++, Arduino, finite-state machines, I2C, I2S, signal processing"],
      ["AI & Data", "Python, TensorFlow, Keras, scikit-learn, Pandas, NumPy"],
      ["Software", "JavaScript, React, React Native, Expo, Node.js, Express, REST APIs"],
      ["Εργαλεία", "Git, GitHub, PlatformIO, Arduino IDE, VS Code"],
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
          <div>
            <p className="cv-kicker">CURRICULUM VITAE</p>
            <h1>Konstantinos<br />Oxouzoglou</h1>
            <p className="cv-role">{t.role}</p>
          </div>
          <address className="cv-contact">
            <span><MapPin size={13} /> Thessaloniki, Greece</span>
            <a href="mailto:koxouzoglou@gmail.com"><Mail size={13} /> koxouzoglou@gmail.com</a>
            <a href="https://github.com/koxouzoglou"><Github size={13} /> github.com/koxouzoglou</a>
            <a href="https://www.linkedin.com/in/konstantinos-oxouzoglou-850248334">
              <Linkedin size={13} /> LinkedIn profile
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
                      <h3>{project.name}</h3>
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
