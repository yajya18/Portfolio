// ---------------------------------------------------------------------------
// RESEARCH DATA
// ---------------------------------------------------------------------------
// Research is kept separate from the Projects archive — it's presented with
// an academic structure (Research Question -> ... -> Current Status) rather
// than a product case-study structure. To add a new research entry, append
// an object matching the Research type.
// ---------------------------------------------------------------------------

export type ResearchStatus = 'In Progress' | 'Completed';

export type Research = {
  id: string;
  number: string;
  slug: string;
  title: string;
  status: ResearchStatus;
  timeframe: string;
  domain: string[];
  description: string;
  technologies: string[];
  visual: string;
  content: {
    researchQuestion: string;
    engineeringBackground: string;
    simulationMethod: string;
    datasetGeneration: string;
    mlMethod: string;
    validation: string;
    currentStatus: string;
  };
  progression: string[];
  parameters: { name: string; description: string }[];
  mimoMetrics: { name: string; description: string }[];
  mlModels: string[];
  researchLoop: string[];
};

export const research: Research[] = [
  {
    id: '5g-mimo-antenna',
    number: '01',
    slug: '5g-mimo-antenna',
    title: '2-Element 5G MIMO Antenna Design with ML-Based Dimension Optimization',
    status: 'In Progress',
    timeframe: 'Independent Research Project — June 2026 – Present',
    domain: ['5G', 'RF / EM', 'Antenna Design', 'MIMO', 'Machine Learning', 'Optimization'],
    description:
      'Independent research into a multiband, MIMO-configured microstrip patch antenna for sub-6 GHz 5G operation, paired with a machine learning pipeline that predicts antenna geometry from target specifications and validates it through fresh electromagnetic simulation.',
    technologies: ['CST Studio', 'HFSS', 'Python', 'Linear Regression', 'Random Forest', 'Neural Networks'],
    visual: 'antenna',
    progression: [
      'Single-Element Antenna',
      'Multiband Design',
      'Slots / DGS / Stub Loading',
      '2-Element MIMO',
    ],
    parameters: [
      { name: 'S11 / Return Loss', description: 'How much signal is reflected back at the feed rather than radiated.' },
      { name: 'VSWR', description: 'Voltage standing wave ratio — a measure of impedance match quality.' },
      { name: 'Gain', description: "The antenna's effective signal strength in its peak radiation direction." },
      { name: 'Bandwidth', description: 'The frequency range over which the antenna performs acceptably.' },
      { name: 'Radiation Pattern', description: 'How radiated energy is distributed in space around the antenna.' },
    ],
    mimoMetrics: [
      { name: 'Isolation', description: 'How well the two MIMO elements are electromagnetically decoupled from each other.' },
      { name: 'ECC', description: 'Envelope correlation coefficient — similarity between the two elements\u2019 radiation patterns.' },
      { name: 'Diversity Gain', description: 'Performance benefit gained from using multiple, decorrelated antenna elements.' },
      { name: 'TARC', description: 'Total active reflection coefficient — combined reflection across both driven MIMO elements.' },
    ],
    mlModels: ['Linear Regression', 'Random Forest', 'Neural Networks'],
    researchLoop: [
      'Geometry',
      'EM Simulation',
      'Dataset',
      'ML Model',
      'Predicted Dimensions',
      'Fresh EM Simulation',
      'Validation',
    ],
    content: {
      researchQuestion:
        'Can the dimensions of a multiband, MIMO-configured microstrip patch antenna for 5G sub-6 GHz operation be predicted directly from target specifications using machine learning, and validated through electromagnetic simulation rather than manual iterative design?',
      engineeringBackground:
        'The design progresses from a single-element sub-6 GHz rectangular microstrip patch antenna toward a multiband configuration achieved through slots, defected ground structures (DGS) and stub loading, and finally into a 2-element MIMO configuration. Alongside conventional copper patches, the research also explores silver-graphene conductive structures as an alternative patch material, comparing the two directly.',
      simulationMethod:
        'Full-wave electromagnetic simulation is performed in CST Studio and HFSS. Single-element designs are evaluated on S11/return loss, VSWR, gain, bandwidth and radiation pattern; the MIMO configuration is additionally evaluated on isolation, ECC, diversity gain and TARC.',
      datasetGeneration:
        'A geometry-sweep dataset is generated across simulation runs, varying parameters such as patch length, patch width, feed position and slot dimensions, and pairing each geometry with its simulated electromagnetic performance.',
      mlMethod:
        'Linear Regression, Random Forest and Neural Network models are being explored to learn the mapping between a target frequency/performance specification and the antenna geometry that achieves it.',
      validation:
        'Dimensions predicted by the ML models are re-simulated in fresh CST/HFSS runs — independent of the runs used to train the models — to confirm that the predicted geometry actually achieves the target frequency and performance before it is treated as validated.',
      currentStatus:
        'This is an active, independent research project (June 2026 – Present). The work is structured around the progression from single-element and multiband antenna design toward a 2-element MIMO configuration, alongside development of the geometry-sweep dataset and the ML-based dimension-prediction pipeline described above. As an ongoing project, further simulation results and validation outcomes will be added as they are completed.',
    },
  },
];

export function getResearchBySlug(slug: string): Research | undefined {
  return research.find((item) => item.slug === slug);
}
