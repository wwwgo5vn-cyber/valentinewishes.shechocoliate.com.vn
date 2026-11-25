import { PaperHeart } from "./PaperHeart";

const drifts = ["d1", "d2", "d3 is-soft", "d4", "d5 is-soft", "d6", "d7 is-soft", "d8", "d9"] as const;
const linger = ["l1", "l2 is-soft", "l3", "l4 is-soft", "l5", "l6"] as const;

export function HeartField() {
  return (
    <div className="heart-field" aria-hidden="true">
      {linger.map((name) => (
        <span key={name} className={`linger ${name}`}>
          <PaperHeart />
        </span>
      ))}
      {drifts.map((name) => (
        <span key={name} className={`drift ${name}`}>
          <PaperHeart />
        </span>
      ))}
    </div>
  );
}
