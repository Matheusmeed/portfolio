export type Media =
  | { type: "placeholder"; label: string }
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string; label: string };

export type Stat = { value: string; label: string };

export type Fact = { label: string; value: string };

/** A step in "What I did". Text between backticks renders as inline code. */
export type Step = { title: string; body: string };

export type Metric = { prefix: string; value: string; label: string };

export type CaseStudy = {
  slug: string;
  number: string;
  client: string;
  title: string;
  /** Short version used on the home page card and in link previews. */
  summary: string;
  stats: Stat[];
  tags: string[];
  intro: string;
  facts: Fact[];
  media: Media;
  challenge: string[];
  steps: Step[];
  results: {
    metrics?: Metric[];
    highlights?: string[];
    summary?: string;
  };
};

export type ExperienceItem = {
  period: string;
  org: string;
  detail?: string;
  text: string;
};

export type SkillGroup = { name: string; items: string[] };

type SectionCopy = { label: string; title: string };

export type Dictionary = {
  meta: { title: string; description: string };
  a11y: {
    skip: string;
    openMenu: string;
    closeMenu: string;
    mainNav: string;
    language: string;
  };
  nav: {
    work: string;
    experience: string;
    about: string;
    contact: string;
    resume: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    primary: string;
    secondary: string;
    availability: string;
    email: string;
  };
  spin: {
    label: string;
    frame: string;
    /** Read by screen readers, e.g. "Frame {frame} of {total}". */
    valueText: string;
    alt: string;
    caption: string;
  };
  sections: {
    work: SectionCopy;
    experience: SectionCopy;
    skills: SectionCopy;
    about: SectionCopy;
    contact: SectionCopy;
  };
  readCase: string;
  cases: CaseStudy[];
  experience: ExperienceItem[];
  skills: SkillGroup[];
  about: string[];
  contact: {
    label: string;
    text: string;
    location: string;
    resume: string;
  };
  casePage: {
    back: string;
    media: string;
    challenge: string;
    steps: string;
    results: string;
    next: string;
    previous: string;
  };
  footer: { backToTop: string };
  notFound: { title: string; text: string; cta: string };
};
