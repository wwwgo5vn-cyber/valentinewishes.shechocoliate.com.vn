import { labels } from "../constants/labels";
import { useShown } from "../lib/useShown";
import { PaperHeart } from "./PaperHeart";

const lines = labels.letter.message.split("\n\n");

export function LetterSheet() {
  const [ref, shown] = useShown<HTMLElement>(0.32);

  return (
    <article
      ref={ref}
      className={shown ? "sheet reveal is-shown" : "sheet reveal"}
      aria-label={labels.letter.sheetLabel}
    >
      <div className="sheet-petals" aria-hidden="true">
        <PaperHeart />
        <PaperHeart />
        <PaperHeart />
        <PaperHeart />
      </div>
      <div className="wax" aria-hidden="true">
        <PaperHeart className="wax-heart" />
      </div>
      <div className="sheet-inner">
        <p className="salute">{labels.letter.to}</p>
        <p className="wish-name">{labels.letter.recipient}</p>
        <div className="wish-lines">
          {lines.map((line) => (
            <p key={line} className="wish-body wish-line">
              {line}
            </p>
          ))}
        </div>
        <p className="signoff">{labels.letter.sign}</p>
        <p className="wish-name wish-from">{labels.letter.sender}</p>
        <div className="sheet-meta">
          <span>{labels.brand.collection}</span>
          <span>{labels.brand.date}</span>
        </div>
      </div>
    </article>
  );
}
