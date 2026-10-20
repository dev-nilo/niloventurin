export const STAGING_BRANCH = "homolog";

export type DeployEnvironment = "production" | "staging" | "preview" | "local";

// VERCEL_ENV is "production" | "preview" | "development"; unset outside Vercel.
export const resolveEnvironment = (
    vercelEnv: string | undefined,
    branch: string | undefined,
): DeployEnvironment => {
    if (vercelEnv === "production") return "production";
    if (vercelEnv === "preview") return branch === STAGING_BRANCH ? "staging" : "preview";
    return "local";
};

export const ENVIRONMENT = resolveEnvironment(
    process.env.VERCEL_ENV,
    process.env.VERCEL_GIT_COMMIT_REF,
);

export const isIndexable = (env: DeployEnvironment) => env === "production" || env === "local";

export const environmentLabel = (env: DeployEnvironment): string | null => {
    if (env === "staging") return "Homologação";
    if (env === "preview") return "Preview";
    return null;
};
