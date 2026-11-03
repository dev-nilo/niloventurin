import { describe, expect, it } from "vitest";
import { identityGraph, parsePriceRange, serializeJsonLd } from "./jsonLd";
import { SERVICES } from "../content/services";
import { SITE_URL } from "../site/site";

type Node = Record<string, any>;
const nodes = (graph: ReturnType<typeof identityGraph>) => graph["@graph"] as Node[];
const byType = (graph: ReturnType<typeof identityGraph>, type: string) => nodes(graph).find((n) => n["@type"] === type)!;

describe("identityGraph", () => {
  const graph = identityGraph("en");

  it("describes the person who runs the site", () => {
    const person = byType(graph, "Person");
    expect(person.name).toBe("Nilo Venturin Neto");
    expect(person.jobTitle).toBe("Full-Stack Software Engineer");
    expect(person.url).toBe(`${SITE_URL}/en`);
    expect(person.sameAs).toEqual(["https://github.com/dev-nilo", "https://www.linkedin.com/in/niloventurin/"]);
    expect(person.knowsAbout[0]).toBe("full-stack software engineer");
    expect(person.worksFor.map((o: Node) => o.name)).toContain("PVT Software");
  });

  it("describes the freelance service as an organization with contact point and address", () => {
    const service = byType(graph, "ProfessionalService");
    expect(service.contactPoint).toMatchObject({
      "@type": "ContactPoint",
      contactType: "sales",
      email: "venturin.nilo@gmail.com",
    });
    expect(service.address).toMatchObject({ "@type": "PostalAddress", addressLocality: "Vitória", addressCountry: "BR" });
    expect(service.founder).toEqual({ "@id": byType(graph, "Person")["@id"] });
    expect(service.hasOfferCatalog.itemListElement).toHaveLength(SERVICES.en.items.length);
    expect(service.hasOfferCatalog.itemListElement[0].priceSpecification).toMatchObject({
      priceCurrency: "USD",
      minPrice: 600,
      maxPrice: 1200,
    });
  });

  it("adds a typed page node for subpages", () => {
    expect(byType(identityGraph("pt", "about"), "AboutPage").url).toBe(`${SITE_URL}/pt/about`);
    expect(byType(identityGraph("en", "contact"), "ContactPage").inLanguage).toBe("en");
    expect(nodes(graph).some((n) => /Page$/.test(n["@type"]))).toBe(false);
  });

  it("uses the page's language", () => {
    expect(byType(identityGraph("pt"), "Person").jobTitle).toBe("Engenheiro de Software Full-Stack");
  });
});

describe("parsePriceRange", () => {
  it("reads both number formats", () => {
    expect(parsePriceRange("US$ 1,500 – 3,000")).toEqual([1500, 3000]);
    expect(parsePriceRange("US$ 1.500 – 3.000")).toEqual([1500, 3000]);
  });

  it("skips prices that aren't a range", () => {
    expect(parsePriceRange("Custom quote")).toBeNull();
    expect(parsePriceRange("Sob consulta")).toBeNull();
  });

  it("parses every range in the services list", () => {
    for (const locale of ["pt", "en"] as const) {
      const ranges = SERVICES[locale].items.map((item) => parsePriceRange(item.price));
      expect(ranges.filter(Boolean)).toHaveLength(3);
    }
  });
});

describe("serializeJsonLd", () => {
  it("can't close the script tag it is embedded in", () => {
    const out = serializeJsonLd({ name: "</script><script>alert(1)</script>" });
    expect(out).not.toContain("<");
    expect(JSON.parse(out).name).toBe("</script><script>alert(1)</script>");
  });
});
