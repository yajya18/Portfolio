// ---------------------------------------------------------------------------
// PROJECT DATA
// ---------------------------------------------------------------------------
// Every project shown on the site is defined here. To add a project, append
// a new object matching the Project type and it will automatically appear in
// the /projects archive (and on the homepage, if `featured: true`).
//
// visual: which hand-built SVG illustration (src/components/visuals) to use
// image:  optional path to a real screenshot in /public/images/projects/...
//         when set, it is used in place of the illustration — see README
//         "Asset Replacement".
// ---------------------------------------------------------------------------

export type ProjectCategory =
  | 'Software'
  | 'ML'
  | 'Backend'
  | 'Databases'
  | 'Systems'
  | 'IoT';

export type KeyDecision = {
  title: string;
  detail: string;
};

export type ArchitectureFlow = {
  label: string;
  stages: string[];
};

export type Project = {
  id: string;
  number: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  categories: ProjectCategory[];
  technologies: string[];
  role?: string;
  github?: string;
  liveDemo?: string;
  featured?: boolean;
  size: 'large' | 'medium' | 'small';
  visual: string;
  image?: string;
  architecture: ArchitectureFlow[];
  caseStudy: {
    overview: string;
    problem: string;
    approach: string;
    implementation: string[];
    keyDecisions: KeyDecision[];
    results: string;
    lessons: string;
  };
};

export const projects: Project[] = [
  // -------------------------------------------------------------------------
  {
    id: 'loopin',
    number: '01',
    slug: 'loopin',
    title: 'Loopin',
    tagline: 'AI-powered real-time collaborative workspace',
    shortDescription:
      'Task management, live notes, messaging and whiteboarding in one real-time workspace, with a Git-aware native desktop client.',
    description:
      'Loopin is a full-stack real-time collaboration platform combining project and task management, live notes, team messaging, whiteboarding and AI-assisted project workflows. It was built with a four-person team across a web client, a layered backend, and a native desktop companion for developers.',
    categories: ['Software', 'Backend', 'Databases', 'Systems'],
    technologies: [
      'React',
      'Node.js',
      'Express',
      'TypeScript',
      'PostgreSQL',
      'Supabase',
      'Prisma',
      'Socket.io',
      'C++',
      'Qt6',
      'QML',
    ],
    role: 'Team project — 4 engineers',
    github: '',
    liveDemo: '',
    featured: true,
    size: 'medium',
    visual: 'loopin',
    architecture: [
      {
        label: 'Core Architecture',
        stages: [
          'React Web Client',
          'REST / WebSocket Entry Points',
          'Layered Backend',
          'Prisma',
          'PostgreSQL / Supabase',
        ],
      },
      {
        label: 'Real-Time Layer',
        stages: ['Client', 'Socket.io', 'Real-Time Collaboration'],
      },
    ],
    caseStudy: {
      overview:
        'Loopin brings the tools a project team usually splits across separate apps — tasks, notes, chat, a whiteboard, and now an AI layer that reads project activity — into a single, real-time workspace. A companion native desktop client extends it further for developers, monitoring a team\u2019s GitHub repositories directly.',
      problem:
        'Teams working on a shared project typically move between disconnected tools for planning, notes, communication and visual collaboration, and even more time turning the resulting scatter of activity into a clear read on status and blockers.',
      approach:
        'The web client talks to a layered backend through both REST and WebSocket entry points, keeping request/response operations and live collaboration on separate, purpose-built paths. Persistent state is modeled and accessed through Prisma over PostgreSQL, hosted on Supabase. Live features — notes, whiteboard state, presence, messaging — run over a dedicated Socket.io layer so changes propagate to every connected client immediately. On top of this, an AI layer reads project activity to produce daily stand-up summaries, break tasks down, and help diagnose blockers. A separate native desktop client, built in C++ with Qt6 and QML, authenticates against GitHub via OAuth and uses libgit2 to monitor repository activity, going as far as drafting AI-assisted commit messages from a developer\u2019s changes.',
      implementation: [
        'A layered backend architecture separating REST/WebSocket entry points from business logic and data access',
        'Prisma as the data-access layer over a PostgreSQL database hosted on Supabase',
        'A Socket.io real-time layer handling live notes, whiteboarding, messaging and presence',
        'An AI-assisted layer generating stand-up summaries, task decomposition and blocker diagnosis from project activity',
        'A native C++ / Qt6 / QML desktop client with GitHub OAuth and libgit2-based repository monitoring',
        'AI-assisted commit message generation inside the desktop client',
      ],
      keyDecisions: [
        {
          title: 'Separating REST and WebSocket entry points',
          detail:
            'Request/response operations (creating a task, fetching a project) and continuous real-time state (live notes, whiteboard strokes, presence) are handled through distinct entry points into the same layered backend, rather than forcing both through one protocol.',
        },
        {
          title: 'Prisma over PostgreSQL/Supabase',
          detail:
            'Using Prisma as a typed data-access layer kept schema and query logic consistent across a four-person team working on the same backend simultaneously.',
        },
        {
          title: 'A native desktop client alongside the web app',
          detail:
            'Rather than trying to fit Git-aware, repository-monitoring functionality into the browser, that surface was built as a separate C++/Qt6/QML application authenticating with GitHub OAuth and reading repository state through libgit2.',
        },
      ],
      results:
        'The platform integrates task and note management, team messaging and whiteboarding that update in real time across connected clients, an AI layer that summarizes project activity and helps decompose tasks, and a native desktop client that authenticates with GitHub, monitors repository activity, and drafts commit messages with AI assistance.',
      lessons:
        'Splitting REST and WebSocket concerns early made it far easier to reason about state consistency once four people were building against the same backend at once. Building the desktop client alongside the web app also made the trade-offs between browser-based and native development concrete rather than theoretical — particularly around how much system-level access (like local Git state) a feature actually needs.',
    },
  },

  // -------------------------------------------------------------------------
  {
    id: 'thermal-management',
    number: '02',
    slug: 'thermal-management',
    title: 'AI-Driven Proactive Thermal Management',
    tagline: 'Predictive ML cooling for cloud infrastructure',
    shortDescription:
      'A physics-aware Random Forest model that anticipates heat spikes ahead of time — R\u00b2 = 0.9516, MAE \u2248 2.37\u00b0C across 15,757 telemetry samples.',
    description:
      'A predictive machine learning cooling system for cloud infrastructure, designed to anticipate heat spikes rather than reacting after overheating has already begun, targeting the performance impact caused by thermal throttling.',
    categories: ['ML', 'IoT', 'Systems'],
    technologies: [
      'Python',
      'scikit-learn',
      'Pandas',
      'NumPy',
      'Random Forest',
      'Arduino Uno',
      'DS18B20 Sensor',
      'L9110 Fan Module',
    ],
    role: 'Independent project',
    github: '',
    liveDemo: '',
    featured: true,
    size: 'medium',
    visual: 'thermal',
    architecture: [
      {
        label: 'System Pipeline',
        stages: [
          'Telemetry',
          'Feature Engineering',
          'Physics-Aware ML',
          'Temperature Prediction',
          'Proactive Cooling',
        ],
      },
    ],
    caseStudy: {
      overview:
        'This project asks a simple question: instead of cooling a system after it overheats, can you predict the heat spike far enough in advance to act before it happens? A Random Forest model, trained on physics-informed features, predicts near-future temperature from live telemetry.',
      problem:
        'Reactive cooling only responds once a temperature threshold has already been crossed — by which point thermal throttling has often already cost performance.',
      approach:
        'Telemetry was collected from an Arduino Uno rig instrumented with a DS18B20 temperature sensor and an L9110 fan module, sampled at 1 Hz for a dataset of 15,757 readings. Feature engineering combined Newton\u2019s Law of Cooling with lag values and rolling statistics, producing physics-aware, time-series features rather than treating each reading in isolation. A Random Forest model trained on these features outperformed the other algorithms evaluated, reaching an R\u00b2 of 0.9516 with a mean absolute error of about 2.37\u00b0C. The resulting predictions were explored as a basis for proactive fan tuning and pre-emptive VM migration, ahead of an overheating event rather than in response to one.',
      implementation: [
        'A 1 Hz telemetry pipeline from an Arduino Uno, DS18B20 sensor and L9110 fan module — 15,757 samples',
        'Physics-aware feature engineering grounded in Newton\u2019s Law of Cooling',
        'Lag values and rolling statistics capturing time-series behavior',
        'A Random Forest model for near-future temperature prediction',
        'Exploration of proactive fan tuning and pre-emptive VM migration driven by predicted temperature',
      ],
      keyDecisions: [
        {
          title: 'Physics-aware feature engineering',
          detail:
            'Deriving features from Newton\u2019s Law of Cooling gave the model a physically grounded prior instead of treating temperature purely as an unstructured time series, alongside lag and rolling-statistic features.',
        },
        {
          title: 'Random Forest after evaluation against alternatives',
          detail:
            'A Random Forest model was selected after evaluation against other algorithms on the same physics-aware feature set, outperforming them on this dataset.',
        },
        {
          title: '1 Hz sampling for a proactive, not reactive, window',
          detail:
            'Sampling frequently enough to catch the early trajectory of a heat spike was necessary for prediction to be useful — a proactive system only helps if it acts before the threshold is crossed.',
        },
      ],
      results:
        'The final Random Forest model reached an R\u00b2 of 0.9516 and a mean absolute error of approximately 2.37\u00b0C across the 15,757-sample dataset, outperforming the other algorithms evaluated in this project. Beyond the prediction model itself, the project explored proactive fan tuning and pre-emptive VM migration as downstream applications, with the broader goals of reducing energy waste and improving system stability and hardware lifespan.',
      lessons:
        'Grounding a black-box model with a physical law (Newton\u2019s Law of Cooling) rather than relying on raw historical values alone made the resulting features far more informative, and was likely a significant contributor to the model\u2019s accuracy. Working across the hardware and ML boundary — instrumenting the sensor rig itself — also made clear how much of a predictive system\u2019s reliability depends on the quality of the telemetry it is trained on, well before any modeling decision is made.',
    },
  },
  // -------------------------------------------------------------------------
  {
    id: 'air-aware',
    number: '03',
    slug: 'air-aware',
    title: 'Air Aware',
    // image: '/images/projects/air-aware/image.png',
    tagline: 'Spatial DBMS-based air quality monitoring system',
    shortDescription:
      'A PostGIS-powered system modeling stations, pollutants and readings to estimate air quality across space, not just at fixed points.',
    description:
      'Air Aware is a spatial database system for air quality monitoring, built around PostgreSQL and PostGIS. It models monitoring stations, pollutants, readings and alerts, and uses spatial analysis to estimate air quality at locations that have no monitoring station of their own.',
    categories: ['Databases', 'Systems'],
    technologies: ['PostgreSQL', 'PostGIS', 'Supabase', 'SQL', 'Spatial Databases'],
    role: 'Team project — 3 engineers',
    github: '',
    liveDemo: 'https://aqi-aware.netlify.app/',
    featured: true,
    size: 'large',
    visual: 'air-aware',
    architecture: [
      {
        label: 'Core Architecture',
        stages: ['Stations', 'Readings', 'PostGIS', 'AQI Engine', 'Alerts', 'Spatial Analysis'],
      },
      {
        label: 'Spatial AQI Estimation',
        stages: ['Location', 'Nearby Stations', 'Distance-Weighted AQI', 'Estimated AQI'],
      },
    ],
    caseStudy: {
      overview:
        'Air Aware treats air quality as spatial data rather than a set of disconnected readings. Stations, pollutants and readings are modeled directly in PostGIS, and the system uses that geometry to compute AQI, detect pollution spikes, and estimate air quality even where no station exists.',
      problem:
        'Air quality is normally reported only at fixed monitoring stations, so any location between stations has no reliable estimate of the air it actually breathes.',
      approach:
        'Stations, pollutants, readings and alerts are modeled as a relational schema with native spatial geometry through PostGIS, rather than treating a station\u2019s location as a flat latitude/longitude attribute. Database functions, triggers and views compute AQI from incoming multi-pollutant readings, flag pollution spikes, and generate alerts and health advisories directly at the data layer — so derived state stays consistent with new readings as they arrive. For any arbitrary location, the system finds nearby stations through spatial queries and produces a distance-weighted, interpolated AQI estimate rather than requiring a station to be physically present at that point.',
      implementation: [
        'A relational schema for stations, pollutants, readings and alerts with native PostGIS geometry',
        'Database functions and triggers computing AQI from multi-pollutant readings as they arrive',
        'Views exposing current AQI and alert state without duplicating logic in application code',
        'Spatial nearby-station search using PostGIS spatial queries',
        'Pollution spike detection driving automated alerts and health advisories',
        'Distance-weighted spatial interpolation to estimate AQI at locations without a station',
      ],
      keyDecisions: [
        {
          title: 'Modeling location as geometry, not an attribute',
          detail:
            'Storing station positions as PostGIS geometry rather than plain latitude/longitude columns enables genuine spatial queries — nearest-station search and radius queries — instead of manual distance math in application code.',
        },
        {
          title: 'Pushing AQI logic into the database',
          detail:
            'AQI calculation, spike detection and alerting live in database functions, triggers and views, so every client reading the data sees the same derived state without recomputing it independently.',
        },
        {
          title: 'Distance-weighted interpolation for unmonitored locations',
          detail:
            'Rather than leaving areas between stations unaccounted for, nearby readings are combined with distance-based weighting to produce an estimated AQI for any queried location.',
        },
      ],
      results:
        'The system models stations, pollutants, readings and alerts as spatial data, computes AQI and detects pollution spikes at the database layer, supports nearby-station search, and estimates AQI at arbitrary locations through distance-weighted spatial interpolation.',
      lessons:
        'Designing the schema around geometry from the start — instead of bolting spatial queries onto flat tables later — made nearest-station search and interpolation straightforward rather than something to work around. Pushing AQI and alert logic into functions, triggers and views also clarified how much consistency you gain by keeping derived state close to the data it depends on.',
    },
  },
  // -------------------------------------------------------------------------
  {
    id: 'twitter-clone',
    number: '04',
    slug: 'twitter-clone',
    title: 'Twitter Clone',
    tagline: 'Django-based social media platform',
    shortDescription:
      'A Django social platform covering authentication, relational data modeling and API concepts — a foundational step toward backend engineering.',
    description:
      'A Django-based social media platform built to learn core backend fundamentals: user authentication, relational data modeling for a social graph, and exposing that data through API endpoints.',
    categories: ['Software', 'Backend', 'Databases'],
    technologies: ['Django', 'Python', 'PostgreSQL', 'REST APIs', 'Authentication'],
    role: 'Independent project',
    github: '',
    liveDemo: '',
    featured: false,
    size: 'small',
    visual: 'twitter-clone',
    architecture: [
      {
        label: 'Application Architecture',
        stages: ['Django Views / REST Endpoints', 'Authentication', 'Data Models', 'PostgreSQL'],
      },
    ],
    caseStudy: {
      overview:
        'A foundational project rather than a novel system: a Django application that reimplements the core mechanics of a social platform to build fluency with backend fundamentals ahead of larger, more architecturally involved projects like Loopin and Air Aware.',
      problem:
        'Building fluency with backend fundamentals — authentication, relational modeling, and exposing data through APIs — benefits from a well-understood, concrete problem rather than an abstract exercise.',
      approach:
        'The application models the core entities of a social platform — users, posts, follows and likes — as relational data in PostgreSQL, with Django handling authentication and routing, and API/REST concepts used to expose that data. The project was deployed as a full-stack Django application.',
      implementation: [
        'User authentication and session handling in Django',
        'Relational data models for users, posts, follows and likes',
        'API/REST concepts for exposing platform data',
        'PostgreSQL as the underlying database',
        'Deployment as a full-stack Django application',
      ],
      keyDecisions: [
        {
          title: 'Django as a backend-first framework',
          detail:
            'Django\u2019s batteries-included approach to authentication, ORM-based data modeling and routing made it a direct way to practice backend fundamentals without building that infrastructure from scratch.',
        },
      ],
      results:
        'The project implements authentication, a relational social-graph data model, and API-exposed data on top of PostgreSQL, deployed as a working Django application.',
      lessons:
        'This project marks an early step in the progression toward backend engineering — it is intentionally scoped around fundamentals (auth, relational modeling, APIs) rather than novel systems design, and that grounding shows up directly in the architectural decisions made on later projects.',
    },
  },

  // -------------------------------------------------------------------------
  {
    id: 'edge-wake-word',
    number: '05',
    slug: 'edge-wake-word',
    title: 'Edge Wake-Word + Cloud ASR',
    tagline: 'Edge wake-word detection with cloud speech recognition',
    shortDescription:
      'An ESP32 pipeline that captures audio over I2S/DMA, detects a wake word at the edge, and hands off only relevant audio to cloud ASR.',
    description:
      'An embedded audio pipeline built on the ESP32: microphone audio is captured over I2S using DMA, a wake word is detected on-device, and only triggered audio is forwarded to a cloud automatic speech recognition (ASR) service.',
    categories: ['IoT', 'Systems'],
    technologies: ['ESP32', 'I2S', 'DMA', 'Audio Processing', 'Wake-Word Detection', 'Cloud ASR'],
    role: 'Independent project',
    github: '',
    liveDemo: '',
    featured: false,
    size: 'small',
    visual: 'edge-wake-word',
    architecture: [
      {
        label: 'Audio Pipeline',
        stages: ['Microphone', 'I2S', 'DMA', 'ESP32', 'Wake-Word Detection', 'Cloud ASR'],
      },
    ],
    caseStudy: {
      overview:
        'A small embedded system that decides, at the edge, whether audio is worth sending anywhere at all — and only pays the cost of cloud speech recognition once a wake word has actually been heard.',
      problem:
        'Continuously streaming raw microphone audio to the cloud for recognition is wasteful and adds latency, when most captured audio contains no command at all.',
      approach:
        'Audio is acquired from a microphone over I2S directly into the ESP32, using DMA so continuous sampling does not consume CPU cycles that are needed elsewhere. Wake-word detection runs on-device, gating whether any audio needs to leave the ESP32 at all. Only audio following a detected wake word is forwarded to a cloud ASR service for full recognition, splitting the pipeline into a lightweight edge stage and a heavier cloud stage.',
      implementation: [
        'I2S-based audio acquisition from a microphone into the ESP32',
        'DMA-backed sampling to offload continuous audio capture from the CPU',
        'On-device wake-word detection gating what audio is sent onward',
        'A cloud ASR integration handling full speech recognition after a trigger',
      ],
      keyDecisions: [
        {
          title: 'DMA-backed I2S acquisition',
          detail:
            'Using DMA to move audio samples from the microphone into memory keeps continuous sampling from monopolizing the ESP32\u2019s CPU, which matters on a resource-constrained microcontroller.',
        },
        {
          title: 'Splitting detection from recognition',
          detail:
            'Running wake-word detection at the edge and reserving cloud ASR for post-trigger audio only keeps most audio from ever leaving the device, reducing both bandwidth use and unnecessary cloud calls.',
        },
      ],
      results:
        'The pipeline captures audio via I2S/DMA on the ESP32, performs on-device wake-word detection, and forwards only triggered audio to a cloud ASR service for recognition.',
      lessons:
        'Working within the ESP32\u2019s resource constraints made the edge/cloud split feel less like an optimization and more like a necessity — DMA-backed acquisition and on-device gating exist specifically because the alternative (streaming everything, doing nothing locally) does not fit the hardware\u2019s constraints.',
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
