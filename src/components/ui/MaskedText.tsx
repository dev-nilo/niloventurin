import { CSSProperties, Fragment, ReactNode } from "react";

// Splits a heading into words that rise from behind their own mask, one
// after another, when the heading scrolls into view. Screen readers get the
// plain text.
export const MaskedText = ({
  text,
  suffix,
}: {
  text: string;
  suffix?: ReactNode;
}) => {
  const words = text.split(" ");

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="mask-root block">
        {words.map((word, i) => (
          <Fragment key={i}>
            {i > 0 && " "}
            <span className="mask-word">
              <span className="mask-inner mask-view" style={{ "--w": i } as CSSProperties}>
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
