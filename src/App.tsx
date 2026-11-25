import { useState } from "react";
import { ChocolateBox } from "./components/ChocolateBox";
import { LetterSheet } from "./components/LetterSheet";
import { Wordmark } from "./components/Wordmark";
import { labels } from "./constants/labels";

export default function App() {
  const [boxOpen, setBoxOpen] = useState(true);

  return (
    <div className="page">
      <a className="skip" href="#letter">
        {labels.hero.skip}
      </a>

      <header className="skyband">
        <Wordmark />
        <p className="hero-happy">{labels.hero.happy}</p>
        <h1 className="hero-title">{labels.hero.title}</h1>
        <p className="hero-lede">{labels.hero.lede}</p>
        <a className="btn" href="#letter">
          {labels.hero.cta}
        </a>
      </header>

      <img className="scene-photo" src="/scene.jpg" alt={labels.scene.alt} />

      <main>
        <section className="atelier" id="letter">
          <p className="story">{labels.scene.line}</p>
          <ChocolateBox open={boxOpen} onToggle={() => setBoxOpen((open) => !open)} />
          <p className="gift-caption">{labels.gift.caption}</p>
          <h2 className="letter-heading">{labels.letter.heading}</h2>
          <LetterSheet />
        </section>
      </main>

      <footer className="footer">
        <Wordmark />
        <p>{labels.footer.signature}</p>
        <p>{labels.footer.rights}</p>
      </footer>
    </div>
  );
}
