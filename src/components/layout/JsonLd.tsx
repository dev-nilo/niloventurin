import { serializeJsonLd } from "../../agents/jsonLd";

// Structured data is data, not code, so a plain <script> is right here
// (next/script is for executable scripts).
export const JsonLd = ({ data }: { data: unknown }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />
);
