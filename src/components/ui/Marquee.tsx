// Two identical copies side by side scroll by half their combined width, so
// the loop is seamless. The second copy is hidden from screen readers.
export const Marquee = ({ items }: { items: string[] }) => (
  <div className="overflow-hidden border-t border-line py-3">
    <div className="marquee flex w-max">
      {[0, 1].map((copy) => (
        <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0">
          {items.map((item) => (
            <li key={item} className="hud-label flex items-center gap-3 px-5 text-muted">
              <span className="size-1 bg-cyan-500" />
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);
