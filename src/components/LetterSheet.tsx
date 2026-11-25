import { labels } from "../constants/labels";
import { PaperHeart } from "./PaperHeart";

export function LetterSheet() {
  return (
    <article className="sheet" aria-label={labels.letter.sheetLabel}>
      <div className="wax" aria-hidden="true">
        <PaperHeart className="wax-heart" />
      </div>
      <div className="sheet-inner">
        <p className="salute">{labels.letter.to}</p>
        <p className="wish-name">{labels.letter.recipient}</p>
        <p className="wish-body">{labels.letter.message}</p>
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
