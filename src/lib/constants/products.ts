export type Product = {
  id: string;
  slug: string;
  collection: string;
  price: number;
  image: string;
  scent: string[];
  burnTime: string;
  size: string;
  wick: string;
  name: { en: string; es: string };
  tagline: { en: string; es: string };
  description: { en: string; es: string };
  ritual: { en: string; es: string };
};

export const products: Product[] = [
  {
    id: "full-moon",
    slug: "full-moon",
    collection: "moon-phases",
    price: 48,
    image: "/products/full-moon.jpg",
    scent: ["White Gardenia", "Sea Salt", "Sandalwood", "Amber"],
    burnTime: "~50 hours",
    size: "8 oz",
    wick: "Cotton",
    name: { en: "Full Moon", es: "Luna Llena" },
    tagline: {
      en: "She returns every time.",
      es: "Ella regresa cada vez.",
    },
    description: {
      en: "Full Moon is the candle you light when something is about to shift. A warm, round scent built from white gardenia, soft sandalwood, and a whisper of sea salt — luminous without being loud.",
      es: "Luna Llena es la vela que enciendes cuando algo está a punto de cambiar. Un aroma cálido y redondo, construido con gardenia blanca, sándalo suave y un susurro de sal marina — luminoso sin estridencia.",
    },
    ritual: {
      en: "Light during journaling, intention-setting, or a long bath on the night of the full moon.",
      es: "Enciéndela mientras escribes, manifiestas, o te das un largo baño en noche de luna llena.",
    },
  },
  {
    id: "new-moon",
    slug: "new-moon",
    collection: "moon-phases",
    price: 48,
    image: "/products/new-moon.jpg",
    scent: ["White Tea", "Cedar", "Green Fig"],
    burnTime: "~50 hours",
    size: "8 oz",
    wick: "Cotton",
    name: { en: "New Moon", es: "Luna Nueva" },
    tagline: {
      en: "Begin again.",
      es: "Empieza de nuevo.",
    },
    description: {
      en: "New Moon is the scent of fresh starts. White tea opens with clarity, cedar grounds the intention, and green fig brings a softness that says: this time, go gently.",
      es: "Luna Nueva es el aroma de los comienzos. Té blanco abre con claridad, el cedro ancla la intención, y el higo verde trae una suavidad que dice: esta vez, ve despacio.",
    },
    ritual: {
      en: "Light on the first night of each lunar cycle. Set your intentions. Let the wax pool fully before extinguishing.",
      es: "Enciéndela la primera noche de cada ciclo lunar. Establece tus intenciones. Deja que la cera se derrita por completo antes de apagar.",
    },
  },
  {
    id: "scorpio",
    slug: "scorpio",
    collection: "zodiac",
    price: 52,
    image: "/products/scorpio.jpg",
    scent: ["Black Currant", "Dark Plum", "Vetiver", "Smoked Oud"],
    burnTime: "~45 hours",
    size: "8 oz",
    wick: "Wood",
    name: { en: "Scorpio", es: "Escorpio" },
    tagline: {
      en: "Depth is your native language.",
      es: "La profundidad es tu lengua materna.",
    },
    description: {
      en: "For the one who lives beneath the surface. Scorpio opens with dark plum and black currant, settles into vetiver and smoked oud — an intensity that rewards patience.",
      es: "Para quien vive debajo de la superficie. Escorpio abre con ciruela oscura y grosella negra, y se asienta en vetiver y oud ahumado — una intensidad que recompensa la paciencia.",
    },
    ritual: {
      en: "Light before solitude. Before a conversation that matters. Before you decide.",
      es: "Enciéndela antes de la soledad. Antes de una conversación que importa. Antes de decidir.",
    },
  },
  {
    id: "pisces",
    slug: "pisces",
    collection: "zodiac",
    price: 52,
    image: "/products/pisces.jpg",
    scent: ["Sea Salt", "Blue Lotus", "Driftwood"],
    burnTime: "~45 hours",
    size: "8 oz",
    wick: "Wood",
    name: { en: "Pisces", es: "Piscis" },
    tagline: {
      en: "You feel everything. That is your power.",
      es: "Lo sientes todo. Ese es tu poder.",
    },
    description: {
      en: "Pisces drifts in on salt water and blue lotus, carried by driftwood. A scent that understands tenderness isn't weakness — it's the deepest form of knowing.",
      es: "Piscis llega con agua salada y loto azul, llevada por madera a la deriva. Un aroma que entiende que la ternura no es debilidad — es la forma más profunda de saber.",
    },
    ritual: {
      en: "Light during creative work, daydreaming, or when the world feels too sharp.",
      es: "Enciéndela durante el trabajo creativo, al soñar despierta, o cuando el mundo se siente demasiado agudo.",
    },
  },
  {
    id: "leo",
    slug: "leo",
    collection: "zodiac",
    price: 52,
    image: "/products/leo.jpg",
    scent: ["Saffron", "Neroli", "Warm Leather"],
    burnTime: "~45 hours",
    size: "8 oz",
    wick: "Wood",
    name: { en: "Leo", es: "Leo" },
    tagline: {
      en: "The room knows when you arrive.",
      es: "El cuarto sabe cuando llegas.",
    },
    description: {
      en: "Leo enters with saffron and neroli — warm, golden, impossible to ignore. Warm leather in the base gives it staying power. This candle doesn't whisper.",
      es: "Leo entra con azafrán y neroli — cálida, dorada, imposible de ignorar. El cuero cálido en la base le da permanencia. Esta vela no susurra.",
    },
    ritual: {
      en: "Light when hosting. When celebrating. When you need the room to match your energy.",
      es: "Enciéndela al recibir invitados. Al celebrar. Cuando necesitas que el cuarto iguale tu energía.",
    },
  },
  {
    id: "supernova",
    slug: "supernova",
    collection: "nebula",
    price: 65,
    image: "/products/supernova.jpg",
    scent: ["Bergamot", "Cardamom", "Smoked Oud"],
    burnTime: "~70 hours",
    size: "12 oz",
    wick: "Wood",
    name: { en: "Supernova", es: "Supernova" },
    tagline: {
      en: "The most beautiful things burn the brightest.",
      es: "Las cosas más bellas arden con más fuerza.",
    },
    description: {
      en: "Supernova is bold, explosive, unapologetic. Bergamot and cardamom ignite, while smoked oud lingers long after the flame goes out. Our prestige candle for rooms that demand presence.",
      es: "Supernova es audaz, explosiva, sin disculpas. Bergamota y cardamomo se encienden, mientras el oud ahumado permanece mucho después de que la llama se apaga. Nuestra vela de prestigio para espacios que exigen presencia.",
    },
    ritual: {
      en: "Light for evenings that matter. Dinner parties, intimate gatherings, or the night you decide to change everything.",
      es: "Enciéndela para las noches que importan. Cenas, reuniones íntimas, o la noche en que decides cambiarlo todo.",
    },
  },
  {
    id: "biscayne-night",
    slug: "biscayne-night",
    collection: "florida-cosmos",
    price: 48,
    image: "/products/biscayne-night.jpg",
    scent: ["Coconut Water", "Night-Blooming Jasmine", "Warm Sand"],
    burnTime: "~50 hours",
    size: "8 oz",
    wick: "Cotton",
    name: { en: "Biscayne Night", es: "Noche de Biscayne" },
    tagline: {
      en: "The bay remembers everything.",
      es: "La bahía lo recuerda todo.",
    },
    description: {
      en: "Biscayne Night captures the coast after dark — coconut water, night-blooming jasmine, and warm sand. A candle that smells like the best night of your summer.",
      es: "Noche de Biscayne captura la costa después del atardecer — agua de coco, jazmín nocturno, y arena cálida. Una vela que huele a la mejor noche de tu verano.",
    },
    ritual: {
      en: "Light on warm evenings with the windows open. Let the breeze carry it.",
      es: "Enciéndela en noches cálidas con las ventanas abiertas. Deja que la brisa la lleve.",
    },
  },
  {
    id: "event-horizon",
    slug: "event-horizon",
    collection: "nebula",
    price: 65,
    image: "/products/event-horizon.jpg",
    scent: ["Tonka Bean", "Black Pepper", "Iris"],
    burnTime: "~70 hours",
    size: "12 oz",
    wick: "Wood",
    name: { en: "Event Horizon", es: "Horizonte de Eventos" },
    tagline: {
      en: "Past this point, there is no return.",
      es: "Más allá de este punto, no hay retorno.",
    },
    description: {
      en: "Event Horizon pulls you in — tonka bean and iris create a dark, gravitational warmth, while black pepper gives it edge. The candle for the moment before everything changes.",
      es: "Horizonte de Eventos te atrae — tonka e iris crean una calidez oscura y gravitacional, mientras la pimienta negra le da filo. La vela para el momento antes de que todo cambie.",
    },
    ritual: {
      en: "Light when you need to sit with a decision. When the answer is already inside you.",
      es: "Enciéndela cuando necesitas sentarte con una decisión. Cuando la respuesta ya está dentro de ti.",
    },
  },
];

export const collections = [
  {
    id: "moon-phases",
    slug: "moon-phases",
    image: "/collections/moon-phases.jpg",
    name: { en: "Moon Phases", es: "Fases Lunares" },
    description: {
      en: "Eight candles mapping the lunar cycle. Clean to complex, mirroring the moon's energy arc.",
      es: "Ocho velas que trazan el ciclo lunar. De lo limpio a lo complejo, reflejando el arco energético de la luna.",
    },
  },
  {
    id: "zodiac",
    slug: "zodiac",
    image: "/collections/zodiac.jpg",
    name: { en: "Zodiac", es: "Zodiaco" },
    description: {
      en: "Twelve candles, each with a sign-specific scent profile grounded in elemental astrology.",
      es: "Doce velas, cada una con un perfil aromático único basado en la astrología elemental.",
    },
  },
  {
    id: "nebula",
    slug: "nebula",
    image: "/collections/nebula.jpg",
    name: { en: "Nebula", es: "Nebulosa" },
    description: {
      en: "Large-format prestige candles representing cosmic phenomena. Galaxy-effect vessels, gift-box ready.",
      es: "Velas de gran formato y prestigio que representan fenómenos cósmicos. Envase galáctico, listas para regalar.",
    },
  },
  {
    id: "florida-cosmos",
    slug: "florida-cosmos",
    image: "/collections/florida-cosmos.jpg",
    name: { en: "Florida Cosmos", es: "Cosmos Florida" },
    description: {
      en: "Seasonal and geographically specific. Celestial identity meets local sense-memory.",
      es: "Estacionales y específicas de nuestra tierra. Identidad celestial con memoria sensorial local.",
    },
  },
];
