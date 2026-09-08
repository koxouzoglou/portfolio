"use client";

import {
  ArrowDownRight,
  BrainCircuit,
  Braces,
  Cpu,
  FileText,
  Github,
  Linkedin,
  Mail,
  Microchip,
  Radio,
  Rocket,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Language = "en" | "el";

const copy = {
  en: {
    nav: ["Work", "Expertise", "About"],
    status: "ENGINEERING INTELLIGENT SYSTEMS",
    titleA: "AI, Robotics",
    titleB: "& Software.",
    intro:
      "I build systems that connect intelligence with the physical world — from embedded devices and robotic platforms to machine learning models and full-stack products.",
    viewWork: "Explore selected work",
    aboutCta: "About me",
    cvCta: "View CV",
    sensing: "SENSING / REASONING / ACTING",
    online: "SYSTEMS ONLINE",
    selectedLabel: "SELECTED WORK",
    selectedTitle: "Built to think. Designed to work.",
    selectedIntro:
      "A selection of engineering work across robotics, artificial intelligence, embedded systems and product development.",
    thesisType: "THESIS · FEATURED PROJECT",
    thesisTitle: "BIOS Beep Code Analyzer",
    thesisDescription:
      "My principal academic project: an Arduino-based embedded diagnostic device that captures a motherboard speaker signal, decodes BIOS beep sequences and displays the probable hardware fault in real time.",
    architecture: "BIOS families",
    integration: "tests passed",
    focus: "firmware",
    aiKeychain: "AI Keychain",
    aiKeychainDescription:
      "A compact voice-first AI device currently in planning, designed around ESP32-S3, I2S audio and a hybrid local/cloud intelligence pipeline.",
    active: "PLANNING",
    heartTitle: "Heart Disease AI",
    heartDescription:
      "A neural network trained on the Cleveland Heart Disease dataset to support binary risk classification from 13 clinical features.",
    accuracy: "test accuracy",
    foodTitle: "FoodRush",
    foodDescription:
      "A complete ordering platform with React web and Expo mobile clients sharing an Express REST API, including authentication, biometrics, geolocation and order tracking.",
    crossPlatform: "CROSS-PLATFORM",
    expertiseLabel: "CORE EXPERTISE",
    expertiseTitle: "Where hardware meets intelligence.",
    expertiseIntro:
      "My focus is the complete system: electronics and embedded constraints, intelligent behaviour, reliable software and the interface people use.",
    expertise: [
      ["Robotics", "Sensing, control and autonomous system integration."],
      ["Artificial Intelligence", "Machine learning, neural networks and AI-enabled products."],
      ["Embedded Systems", "Hardware-aware software and connected edge devices."],
      ["Software Engineering", "Maintainable full-stack and cross-platform applications."],
    ],
    aboutLabel: "ABOUT",
    aboutTitle: "Curious by design.",
    aboutA:
      "I’m Konstantinos Oxouzoglou, a developer and engineer interested in the point where software leaves the screen and starts interacting with the real world.",
    aboutB:
      "My work moves between robotics, AI, embedded systems and application development. I enjoy learning the whole stack behind a problem and turning early ideas into systems that can be tested, measured and improved.",
    stack: "TOOLS & TECHNOLOGIES",
    contactLabel: "LET’S BUILD SOMETHING",
    contactTitle: "Have an ambitious idea?",
    contactText:
      "I’m interested in opportunities and collaborations around robotics, AI, embedded products and software engineering.",
    emailMe: "Email me",
    footer: "Built with Next.js & TypeScript",
  },
  el: {
    nav: ["Έργα", "Εξειδίκευση", "Σχετικά"],
    status: "ΑΝΑΠΤΥΞΗ ΕΥΦΥΩΝ ΣΥΣΤΗΜΑΤΩΝ",
    titleA: "AI, Ρομποτική",
    titleB: "& Software.",
    intro:
      "Δημιουργώ συστήματα που συνδέουν τη νοημοσύνη με τον φυσικό κόσμο — από embedded συσκευές και ρομποτικές πλατφόρμες έως μοντέλα machine learning και full-stack προϊόντα.",
    viewWork: "Δες επιλεγμένα έργα",
    aboutCta: "Σχετικά με εμένα",
    cvCta: "Προβολή CV",
    sensing: "ΑΙΣΘΗΣΗ / ΣΚΕΨΗ / ΔΡΑΣΗ",
    online: "SYSTEMS ONLINE",
    selectedLabel: "ΕΠΙΛΕΓΜΕΝΑ ΕΡΓΑ",
    selectedTitle: "Κατασκευασμένα για να σκέφτονται.",
    selectedIntro:
      "Επιλεγμένα έργα μηχανικής σε ρομποτική, τεχνητή νοημοσύνη, embedded συστήματα και ανάπτυξη ψηφιακών προϊόντων.",
    thesisType: "ΠΤΥΧΙΑΚΗ · ΚΕΝΤΡΙΚΟ PROJECT",
    thesisTitle: "BIOS Beep Code Analyzer",
    thesisDescription:
      "Το σημαντικότερο ακαδημαϊκό μου έργο: μια embedded διαγνωστική συσκευή με Arduino που καταγράφει το σήμα του motherboard speaker, αποκωδικοποιεί BIOS beep sequences και εμφανίζει σε πραγματικό χρόνο την πιθανή βλάβη hardware.",
    architecture: "BIOS families",
    integration: "tests passed",
    focus: "firmware",
    aiKeychain: "AI Μπρελόκ",
    aiKeychainDescription:
      "Μια μικρή voice-first AI συσκευή σε στάδιο σχεδιασμού, βασισμένη σε ESP32-S3, I2S audio και υβριδική local/cloud αρχιτεκτονική νοημοσύνης.",
    active: "ΣΧΕΔΙΑΣΜΟΣ",
    heartTitle: "AI Ανίχνευσης Καρδιακής Νόσου",
    heartDescription:
      "Νευρωνικό δίκτυο εκπαιδευμένο στο Cleveland Heart Disease dataset για δυαδική ταξινόμηση κινδύνου από 13 κλινικά χαρακτηριστικά.",
    accuracy: "test accuracy",
    foodTitle: "FoodRush",
    foodDescription:
      "Ολοκληρωμένη πλατφόρμα παραγγελιών με React web και Expo mobile clients σε κοινό Express REST API, με authentication, biometrics, geolocation και order tracking.",
    crossPlatform: "CROSS-PLATFORM",
    expertiseLabel: "ΚΥΡΙΑ ΕΞΕΙΔΙΚΕΥΣΗ",
    expertiseTitle: "Εκεί που το hardware συναντά τη νοημοσύνη.",
    expertiseIntro:
      "Εστιάζω στο ολοκληρωμένο σύστημα: ηλεκτρονικά και embedded περιορισμούς, ευφυή συμπεριφορά, αξιόπιστο software και το interface που χρησιμοποιεί ο άνθρωπος.",
    expertise: [
      ["Ρομποτική", "Αισθητήρες, έλεγχος και ενοποίηση αυτόνομων συστημάτων."],
      ["Τεχνητή Νοημοσύνη", "Machine learning, νευρωνικά δίκτυα και AI προϊόντα."],
      ["Embedded Systems", "Hardware-aware software και συνδεδεμένες edge συσκευές."],
      ["Software Engineering", "Συντηρήσιμες full-stack και cross-platform εφαρμογές."],
    ],
    aboutLabel: "ΣΧΕΤΙΚΑ",
    aboutTitle: "Περιέργεια από σχεδιασμό.",
    aboutA:
      "Είμαι ο Κωνσταντίνος Οξούζογλου, developer και engineer με ενδιαφέρον στο σημείο όπου το software βγαίνει από την οθόνη και αλληλεπιδρά με τον πραγματικό κόσμο.",
    aboutB:
      "Η δουλειά μου κινείται ανάμεσα στη ρομποτική, το AI, τα embedded συστήματα και την ανάπτυξη εφαρμογών. Μου αρέσει να κατανοώ ολόκληρο το stack ενός προβλήματος και να μετατρέπω τις αρχικές ιδέες σε συστήματα που μπορούν να δοκιμαστούν, να μετρηθούν και να βελτιωθούν.",
    stack: "ΕΡΓΑΛΕΙΑ & ΤΕΧΝΟΛΟΓΙΕΣ",
    contactLabel: "ΑΣ ΦΤΙΑΞΟΥΜΕ ΚΑΤΙ",
    contactTitle: "Έχεις μια φιλόδοξη ιδέα;",
    contactText:
      "Με ενδιαφέρουν ευκαιρίες και συνεργασίες γύρω από ρομποτική, AI, embedded προϊόντα και software engineering.",
    emailMe: "Στείλε email",
    footer: "Κατασκευάστηκε με Next.js & TypeScript",
  },
} as const;

const expertiseIcons = [Radio, BrainCircuit, Microchip, Braces];

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = copy[language];

  return (
    <main className="site">
      <div className="noise" />

      <nav className="nav">
        <div className="shell nav-inner">
          <a className="brand" href="#top" aria-label="Back to top">
            <span className="brand-mark" />
            KONSTANTINOS OXOUZOGLOU
          </a>
          <div className="nav-links">
            <a href="#work">{t.nav[0]}</a>
            <a href="#expertise">{t.nav[1]}</a>
            <a href="#about">{t.nav[2]}</a>
            <div className="language-switch" aria-label="Language">
              <button
                className={language === "en" ? "active" : ""}
                onClick={() => setLanguage("en")}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                className={language === "el" ? "active" : ""}
                onClick={() => setLanguage("el")}
                aria-label="Αλλαγή στα Ελληνικά"
              >
                EL
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="shell hero" id="top">
        <div>
          <p className="eyebrow">{t.status}</p>
          <h1>
            {t.titleA}
            <br />
            <span>{t.titleB}</span>
          </h1>
          <p className="hero-copy">{t.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              {t.viewWork} <ArrowDownRight size={16} />
            </a>
            <a className="button" href="#about">
              {t.aboutCta}
            </a>
            <Link className="button" href="/cv">
              <FileText size={16} /> {t.cvCta}
            </Link>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="orb" />
          <div className="system-label label-one">{t.sensing}</div>
          <div className="system-label label-two">{t.online}</div>
        </div>
      </section>

      <section className="shell section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t.selectedLabel}</p>
            <h2>{t.selectedTitle}</h2>
          </div>
          <p>{t.selectedIntro}</p>
        </div>

        <article className="featured">
          <div className="project-visual">
            <Image
              className="poster-image"
              src="/projects/bios-beep-analyser-poster.png"
              alt={
                language === "en"
                  ? "BIOS Beep Code Analyzer thesis poster"
                  : "Poster πτυχιακής BIOS Beep Code Analyzer"
              }
              width={700}
              height={1024}
              priority
            />
          </div>
          <div className="project-content">
            <span className="project-number">01 / {t.thesisType}</span>
            <h3>{t.thesisTitle}</h3>
            <p>{t.thesisDescription}</p>
            <div className="stats">
              <div className="stat">
                <strong>3</strong>
                <span>{t.architecture}</span>
              </div>
              <div className="stat">
                <strong>7 / 7</strong>
                <span>{t.integration}</span>
              </div>
              <div className="stat">
                <strong>1.9K LOC</strong>
                <span>{t.focus}</span>
              </div>
            </div>
            <div className="tags">
              <span className="tag">Arduino Uno</span>
              <span className="tag">C++</span>
              <span className="tag">Signal Processing</span>
              <span className="tag">State Machine</span>
            </div>
          </div>
        </article>

        <div className="project-grid">
          <article className="project-card">
            <div className="icon">
              <Cpu size={22} />
            </div>
            <span className="metric">
              AI
              <small>{t.active}</small>
            </span>
            <span className="project-number">02 / EMBEDDED AI</span>
            <h3>{t.aiKeychain}</h3>
            <p>{t.aiKeychainDescription}</p>
            <div className="tags">
              <span className="tag">Embedded AI</span>
              <span className="tag">ESP32-S3</span>
              <span className="tag">I2S Audio</span>
              <span className="tag">TinyML</span>
            </div>
          </article>

          <article className="project-card">
            <div className="icon">
              <BrainCircuit size={22} />
            </div>
            <span className="metric">
              95.56%
              <small>{t.accuracy}</small>
            </span>
            <span className="project-number">03 / MACHINE LEARNING</span>
            <h3>{t.heartTitle}</h3>
            <p>{t.heartDescription}</p>
            <div className="tags">
              <span className="tag">Python</span>
              <span className="tag">TensorFlow</span>
              <span className="tag">Keras</span>
              <span className="tag">scikit-learn</span>
            </div>
          </article>

          <article className="project-card">
            <div className="icon">
              <Smartphone size={22} />
            </div>
            <span className="metric">
              Web + Mobile
              <small>{t.crossPlatform}</small>
            </span>
            <span className="project-number">04 / SOFTWARE PRODUCT</span>
            <h3>{t.foodTitle}</h3>
            <p>{t.foodDescription}</p>
            <div className="tags">
              <span className="tag">React</span>
              <span className="tag">Node.js / Express</span>
              <span className="tag">React Native</span>
              <span className="tag">REST API</span>
              <span className="tag">WebAuthn</span>
            </div>
          </article>

          <article className="project-card">
            <div className="icon">
              <Rocket size={22} />
            </div>
            <span className="project-number">05 / NEXT EXPERIMENT</span>
            <h3>{language === "en" ? "Always building." : "Πάντα σε δημιουργία."}</h3>
            <p>
              {language === "en"
                ? "More robotics, embedded and AI experiments will be documented here as they move from prototype to working system."
                : "Περισσότερα πειράματα σε ρομποτική, embedded και AI θα παρουσιάζονται εδώ καθώς εξελίσσονται από prototype σε λειτουργικό σύστημα."}
            </p>
            <div className="tags">
              <span className="tag">Research</span>
              <span className="tag">Build</span>
              <span className="tag">Iterate</span>
            </div>
          </article>
        </div>
      </section>

      <section className="shell section" id="expertise">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t.expertiseLabel}</p>
            <h2>{t.expertiseTitle}</h2>
          </div>
          <p>{t.expertiseIntro}</p>
        </div>
        <div className="expertise">
          {t.expertise.map(([title, description], index) => {
            const Icon = expertiseIcons[index];
            return (
              <article className="expertise-item" key={title}>
                <Icon size={25} strokeWidth={1.6} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="shell section about-grid" id="about">
        <div className="about-title">
          <p className="eyebrow">{t.aboutLabel}</p>
          <h2>{t.aboutTitle}</h2>
        </div>
        <div className="about-copy">
          <p>{t.aboutA}</p>
          <p>{t.aboutB}</p>
          <p className="eyebrow">{t.stack}</p>
          <div className="stack-list">
            {[
              "Python",
              "TensorFlow",
              "C / C++",
              "Embedded",
              "React",
              "React Native",
              "TypeScript",
              "Node.js",
              "Git",
              "SQL",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="contact">
        <p className="eyebrow" style={{ justifyContent: "center" }}>
          {t.contactLabel}
        </p>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactText}</p>
        <div className="contact-links">
          <a className="button button-primary" href="mailto:koxouzoglou@gmail.com">
            <Mail size={16} /> {t.emailMe}
          </a>
          <a
            className="button"
            href="https://github.com/koxouzoglou"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            className="button"
            href="https://www.linkedin.com/in/konstantinos-oxouzoglou-850248334"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </section>

      <footer className="shell footer">
        <span>© {new Date().getFullYear()} Konstantinos Oxouzoglou</span>
        <span>{t.footer}</span>
      </footer>
    </main>
  );
}
