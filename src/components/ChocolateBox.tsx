import { labels } from "../constants/labels";

type ChocolateBoxProps = {
  open: boolean;
  onToggle: () => void;
};

export function ChocolateBox({ open, onToggle }: ChocolateBoxProps) {
  return (
    <figure className="gift-photo">
      <img
        src={open ? "/gift-top.png" : "/gift-angle.png"}
        alt={open ? labels.gift.photoOpenAlt : labels.gift.photoAlt}
      />
      <button
        type="button"
        className="btn btn-ghost"
        aria-expanded={open}
        onClick={onToggle}
      >
        {open ? labels.gift.close : labels.gift.open}
      </button>
    </figure>
  );
}
