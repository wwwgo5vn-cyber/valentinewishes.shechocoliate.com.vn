import { useState } from "react";
import { ChocolateBox } from "./components/ChocolateBox";
import { HeartField } from "./components/HeartField";
import { LetterSheet } from "./components/LetterSheet";
import { Wordmark } from "./components/Wordmark";
import { labels } from "./constants/labels";
import { useShown } from "./lib/useShown";

export default function App() {
  const [boxOpen, setBoxOpen] = useState(true);
  const [storyRef, storyShown] = useShown<HTMLParagraphElement>(0.4);
  const [whisperRef, whisperShown] = useShown<HTMLParagraphElement>(0.6);

  return (
    <div className="page">
      <a className="skip" href="#letter">
        {labels.hero.skip}
      </a>

      <div className="overture">
        <div className="sky-glow" aria-hidden="true" />
        <HeartField />

        <header className="skyband">
          <Wordmark />
          <p className="hero-happy">{labels.hero.happy}</p>
          <p className="hero-for">{labels.hero.dedication}</p>
          <h1 className="hero-title">{labels.hero.title}</h1>
          <p className="hero-lede">{labels.hero.lede}</p>
          <a className="btn" href="#letter">
            {labels.hero.cta}
          </a>
        </header>

        <figure className="scene-frame">
          <img className="scene-photo" src="/scene.jpg" alt={labels.scene.alt} />
        </figure>
      </div>

      <main>
        <section className="atelier" id="letter">
          <p ref={storyRef} className={storyShown ? "story reveal is-shown" : "story reveal"}>
            {labels.scene.line}
          </p>
          <ChocolateBox open={boxOpen} onToggle={() => setBoxOpen((open) => !open)} />
          <p className="gift-caption">{labels.gift.caption}</p>
          <p
            ref={whisperRef}
            className={whisperShown ? "letter-whisper reveal is-shown" : "letter-whisper reveal"}
          >
            {labels.letter.whisper}
          </p>
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
