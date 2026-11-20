import { ImageResponse } from "next/og";
import { PROFILE } from "../../content/profile";
import { OG_IMAGE, SITE_URL } from "../../site/site";

// The link preview (og:image) shared by every page, drawn at build time in
// the site's dark theme colors.
export const dynamic = "force-static";

export function GET() {
  const { name, location } = PROFILE.en;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#101014",
          color: "#f2f1ee",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#9a9993" }}>
          <div style={{ width: 14, height: 14, background: "#06b6d4" }} />
          {location}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, fontWeight: 600, letterSpacing: -4, lineHeight: 1 }}>{name}</div>
          <div style={{ marginTop: 32, fontSize: 48 }}>{PROFILE.en.role}</div>
          <div style={{ marginTop: 8, fontSize: 40, color: "#9a9993" }}>{PROFILE.pt.role}</div>
        </div>
        <div style={{ fontSize: 26, color: "#9a9993" }}>{SITE_URL.replace("https://", "")}</div>
      </div>
    ),
    { width: OG_IMAGE.width, height: OG_IMAGE.height },
  );
}
