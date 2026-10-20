import { dictionaries } from "@/content";
import { getLocale } from "@/lib/locale";

export default async function HomePage() {
  const locale = await getLocale();
  const { hero } = dictionaries[locale];

  return (
    <main id="main" className="site-container section-y">
      <p className="eyebrow">{hero.eyebrow}</p>
      <h1 className="mt-7 text-hero font-semibold text-balance">{hero.title}</h1>
      <p className="mt-7 max-w-[34em] text-lead text-muted text-pretty">{hero.lead}</p>
    </main>
  );
}
