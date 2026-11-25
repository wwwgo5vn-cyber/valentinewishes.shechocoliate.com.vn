import { labels } from "../constants/labels";

export function Wordmark({ large = false }: { large?: boolean }) {
  return (
    <img
      className={large ? "brand-logo is-large" : "brand-logo"}
      src="/she-logo.png"
      alt={labels.brand.logoAlt}
    />
  );
}
