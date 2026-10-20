import { CSSProperties, Fragment, ReactNode } from "react";

// Splits a heading into words that rise from behind their own mask, one
// after another. "view" plays the rise when the heading scrolls into view;
// "load" plays it on page load, for headings already on screen. Screen
// readers get the plain text.
export const MaskedText = ({
  text,
  mode = "view",
  suffix,
}: {
  text: string;
  mode?: "view" | "load";
  suffix?: ReactNode;
}) => {
  const words = text.split(" ");

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className={mode === "view" ? "mask-root block" : "block"}>
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
