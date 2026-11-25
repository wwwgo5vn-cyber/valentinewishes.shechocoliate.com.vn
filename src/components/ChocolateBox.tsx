import { useEffect, useState } from "react";
import { labels } from "../constants/labels";
import { useShown } from "../lib/useShown";

type ChocolateBoxProps = {
  open: boolean;
  onToggle: () => void;
};

export function ChocolateBox({ open, onToggle }: ChocolateBoxProps) {
  const [ref, shown] = useShown<HTMLElement>(0.22);
  const [visibleOpen, setVisibleOpen] = useState(open);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (visibleOpen === open) return;
    setFading(true);
    const timer = window.setTimeout(() => {
      setVisibleOpen(open);
      setFading(false);
    }, 220);
    return () => window.clearTimeout(timer);
  }, [open, visibleOpen]);

  return (
    <figure ref={ref} className={shown ? "gift-photo reveal is-shown" : "gift-photo reveal"}>
      <div className="gift-stage">
        <img
          className={fading ? "is-fading" : ""}
          src={visibleOpen ? "/gift-top.png" : "/gift-angle.png"}
          alt={visibleOpen ? labels.gift.photoOpenAlt : labels.gift.photoAlt}
        />
      </div>
      <button type="button" className="btn btn-ghost" aria-expanded={open} onClick={onToggle}>
        {open ? labels.gift.close : labels.gift.open}
      </button>
    </figure>
  );
}
