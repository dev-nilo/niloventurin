import type { MetadataRoute } from "next";
import { ENVIRONMENT } from "../environment/environment";
import { robotsFor } from "../site/crawlers";

export default function robots(): MetadataRoute.Robots {
  return robotsFor(ENVIRONMENT);
}
