// ---------------------------------------------------------------------------
// SKILLS DATA
// ---------------------------------------------------------------------------
// Skills are organized by domain, not rated. `relatedTo` links a skill to the
// project(s) or research slug(s) that actually evidence it — this powers the
// click-to-highlight behavior on the Skills page. A skill with no relatedTo
// entry simply won't offer a highlight; that's expected for foundational
// skills (e.g. coursework) that aren't tied to one specific build.
// ---------------------------------------------------------------------------

export type SkillItem = {
  name: string;
  relatedTo?: string[]; // project slugs and/or research slugs
};

export type SkillDomain = {
  id: string;
  title: string;
  items: SkillItem[];
};

export const skillDomains: SkillDomain[] = [
  {
    id: 'languages',
    title: 'Languages',
    items: [
      { name: 'Python' },
      { name: 'C++', relatedTo: ['loopin'] },
      { name: 'C' },
      { name: 'JavaScript' },
      { name: 'TypeScript', relatedTo: ['loopin'] },
      { name: 'SQL', relatedTo: ['air-aware'] },
      { name: 'R' },
      { name: 'MATLAB' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    items: [
      { name: 'Node.js', relatedTo: ['loopin'] },
      { name: 'Express', relatedTo: ['loopin'] },
      { name: 'Django REST Framework', relatedTo: ['twitter-clone'] },
      { name: 'FastAPI' },
      { name: 'Prisma', relatedTo: ['loopin'] },
      { name: 'REST APIs', relatedTo: ['loopin', 'twitter-clone'] },
      { name: 'WebSockets', relatedTo: ['loopin'] },
      { name: 'Socket.io', relatedTo: ['loopin'] },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    items: [
      { name: 'React', relatedTo: ['loopin'] },
      { name: 'Vite' },
      { name: 'TypeScript' },
      { name: 'React Router' },
      { name: 'Material UI' },
      { name: 'shadcn/ui' },
      { name: 'Tailwind' },
      { name: 'HTML' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    items: [
      { name: 'PostgreSQL', relatedTo: ['air-aware', 'loopin', 'twitter-clone'] },
      { name: 'PostGIS', relatedTo: ['air-aware'] },
      { name: 'Supabase', relatedTo: ['air-aware', 'loopin'] },
      { name: 'Oracle' },
      { name: 'PL/SQL' },
      { name: 'MongoDB' },
    ],
  },
  {
    id: 'ml-data',
    title: 'Machine Learning / Data',
    items: [
      { name: 'scikit-learn', relatedTo: ['thermal-management'] },
      { name: 'NumPy', relatedTo: ['thermal-management'] },
      { name: 'Pandas', relatedTo: ['thermal-management'] },
      { name: 'Matplotlib' },
      { name: 'Seaborn' },
      { name: 'Random Forest', relatedTo: ['thermal-management', '5g-mimo-antenna'] },
      { name: 'Linear Regression', relatedTo: ['5g-mimo-antenna'] },
      { name: 'Logistic Regression' },
      { name: 'XGBoost' },
      { name: 'Feature Engineering', relatedTo: ['thermal-management'] },
      { name: 'Probability Distributions' },
      { name: 'Statistical Inference' },
      { name: 'Time-Series Analysis', relatedTo: ['thermal-management'] },
      { name: 'Physics-Aware ML', relatedTo: ['thermal-management'] },
    ],
  },
  {
    id: 'systems-realtime',
    title: 'Systems / Real-Time',
    items: [
      { name: 'WebSockets', relatedTo: ['loopin'] },
      { name: 'Socket.io', relatedTo: ['loopin'] },
      { name: 'REST APIs', relatedTo: ['loopin', 'twitter-clone'] },
      { name: 'LLM APIs', relatedTo: ['loopin'] },
      { name: 'GitHub OAuth', relatedTo: ['loopin'] },
      { name: 'Real-Time Systems', relatedTo: ['loopin'] },
    ],
  },
  {
    id: 'tools-platforms',
    title: 'Tools / Platforms',
    items: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Docker' },
      { name: 'VS Code' },
      { name: 'Jupyter Notebook' },
      { name: 'LeetCode' },
      { name: 'Codeforces' },
      { name: 'Arduino', relatedTo: ['thermal-management'] },
      { name: 'CST Studio', relatedTo: ['5g-mimo-antenna'] },
      { name: 'HFSS', relatedTo: ['5g-mimo-antenna'] },
      { name: 'GNS3' },
      { name: 'Cisco Packet Tracer' },
      { name: 'AWS' },
      { name: 'Supabase', relatedTo: ['air-aware', 'loopin'] },
    ],
  },
  {
    id: 'core-cs',
    title: 'Core Computer Science',
    items: [
      { name: 'Data Structures & Algorithms' },
      { name: 'DBMS', relatedTo: ['air-aware'] },
      { name: 'Computer Networks' },
      { name: 'Object-Oriented Programming' },
    ],
  },
];
