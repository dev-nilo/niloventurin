import { CSSProperties, Fragment, ReactNode } from "react";

// Splits a heading into words that rise from behind their own mask, one
// after another. "scroll" ties the rise to the heading scrolling into view;
// "load" plays it once on page load, for headings already on screen. Screen
// readers get the plain text.
export const MaskedText = ({
  text,
  mode = "scroll",
  suffix,
}: {
  text: string;
  mode?: "scroll" | "load";
  suffix?: ReactNode;
}) => {
  const words = text.split(" ");

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className={mode === "scroll" ? "mask-scroll-root block" : "block"}>
        {words.map((word, i) => (
          <Fragment key={i}>
            {i > 0 && " "}
            <span className="mask-word">
              <span className={`mask-inner mask-${mode}`} style={{ "--w": i } as CSSProperties}>
                {word}
                {i === words.length - 1 && suffix}
              </span>
            </span>
          </Fragment>
        ))}
      </span>
    </>
  );
};
