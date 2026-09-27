// ---------------------------------------------------------------------------
// SITE CONFIGURATION
// ---------------------------------------------------------------------------
// This file centralizes every editable fact about Yajya used across the site:
// identity, contact links, education, and the two figures that had multiple
// values across resume drafts (CGPA, LeetCode count). Change values here —
// nowhere else — to update the whole site.
// ---------------------------------------------------------------------------

export type Certification = {
  name: string;
  provider: string;
  status: string;
};

export type SiteConfig = {
  name: string;
  initials: string;
  role: string;
  focusAreas: string[];
  heroIntro: string;
  email: string;

  /** Only populate when a real, verified URL exists. Empty string = not shown. */
  socials: {
    github: string;
    linkedin: string;
    leetcode: string;
  };

  education: {
    degree: string;
    institution: string;
    location: string;
    duration: string;
    year: string;
  };

  /**
   * EDITABLE — two resume drafts listed 8.7/10 and 8.74/10.
   * This is the single source of truth; update this one string if needed.
   */
  cgpa: string;

  /**
   * EDITABLE — one resume draft listed 150+, a more recent one listed 180+.
   * The more recent figure is used by default.
   */
  leetcodeCount: string;

  certifications: Certification[];

  /** Path to the resume file inside /public. See README "Resume Replacement". */
  resumeUrl: string;
};

export const siteConfig: SiteConfig = {
  name: 'Yajya Arora',
  initials: 'YA',
  role: 'Software Engineer',
  focusAreas: ['Machine Learning', 'Backend', 'Databases', 'Systems'],
  heroIntro:
    'I build data-driven systems across machine learning, backend infrastructure, databases, real-time applications and applied research.',
  email: 'yajyaarora18@gmail.com',

  socials: {
    github: 'https://github.com/yajya18',
    linkedin: '',
    leetcode: 'https://leetcode.com/u/yajya',
  },

  education: {
    degree: 'B.E. / B.Tech, Computer Science and Engineering',
    institution: 'Thapar Institute of Engineering and Technology',
    location: 'Patiala, India',
    duration: '2024 – Present',
    year: '3rd Year',
  },

  cgpa: '8.74/10',
  leetcodeCount: '180+',

  certifications: [
    {
      name: 'AWS Academy Cloud Foundations',
      provider: 'Amazon Web Services',
      status: 'Present',
    },
  ],

  resumeUrl: '/Yajya_Arora_Resume.pdf',
};
