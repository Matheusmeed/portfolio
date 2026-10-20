export const site = {
  name: "Matheus Medeiros",
  legalName: "Matheus Medeiros da Silva",
  jobTitle: "Frontend Engineer",
  email: "mms.medeiros12@gmail.com",
  linkedin: "https://www.linkedin.com/in/matheus-medeiros-da-silva/",
  github: "https://github.com/Matheusmeed",
  resume: "/Matheus_Medeiros_da_Silva_Resume.pdf",
  year: 2026,
} as const;

function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();
