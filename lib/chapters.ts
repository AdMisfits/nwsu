import { Chapter, QuizQuestion } from '@/types';

export const CHAPTERS: Chapter[] = [
  // Chapter 1: Introduction to Water Treatment
  {
    title: 'Introduction to Water Treatment',
    subtitle: 'Understanding the fundamentals of water treatment and the role of a Water Specialist',
    sections: [
      {
        title: 'The Role of a Water Specialist',
        content: 'As a National Water Systems Water Specialist, you are responsible for assessing customer water quality, recommending appropriate treatment solutions, and ensuring proper installation and maintenance. Your expertise directly impacts the health and safety of the families you serve.',
        bullets: [
          'Conduct in-home water quality assessments',
          'Recommend customized treatment solutions',
          'Educate customers on water quality issues',
          'Ensure proper system installation and maintenance',
          'Build lasting customer relationships through trust and expertise',
        ],
      },
      {
        title: 'Why Water Treatment Matters',
        content: 'Municipal water treatment plants do an important job, but water can pick up contaminants between the treatment facility and your customer\'s tap. Lead from old pipes, chlorine byproducts, and emerging contaminants like PFAS (forever chemicals) are growing concerns for homeowners.',
        bullets: [
          'Over 77 million Americans are served by water systems with violations',
          'Lead service lines still deliver water to an estimated 6-10 million homes',
          'PFAS contamination has been detected in water supplies across all 50 states',
          'Homeowners increasingly want control over their water quality',
        ],
      },
      {
        title: 'The NWS Difference',
        content: 'National Water Systems provides a complete business-in-a-box model. You get proprietary water testing equipment, exclusive treatment products, comprehensive training, marketing support, and ongoing technical assistance. Our approach focuses on education-first selling — helping customers understand their water before recommending solutions.',
      },
    ],
    callouts: [
      {
        type: 'tip',
        title: 'Pro Tip',
        content: 'The best Water Specialists are educators first and salespeople second. When customers understand their water quality issues, the solution sells itself.',
      },
    ],
    keyTerms: {
      'TDS': 'Total Dissolved Solids — a measure of the combined content of all inorganic and organic substances in water',
      'PPM': 'Parts Per Million — a unit of measurement for concentration of contaminants',
      'PFAS': 'Per- and Polyfluoroalkyl Substances — synthetic chemicals that don\'t break down in the environment',
      'Point of Entry (POE)': 'Treatment system installed where water enters the home, treating all water',
      'Point of Use (POU)': 'Treatment system installed at a specific faucet or fixture',
    },
    quizQuestions: [
      {
        id: 'ch1q1',
        question: 'What is the primary role of an NWS Water Specialist?',
        options: {
          A: 'Selling as many systems as possible',
          B: 'Assessing water quality and recommending appropriate treatment solutions',
          C: 'Replacing municipal water treatment',
          D: 'Installing plumbing fixtures',
        },
        correctAnswer: 'B',
        explanation: 'Water Specialists assess customer water quality, recommend appropriate treatment solutions, and educate customers on water quality issues.',
      },
      {
        id: 'ch1q2',
        question: 'What does PFAS stand for?',
        options: {
          A: 'Primary Filtration and Sanitation',
          B: 'Per- and Polyfluoroalkyl Substances',
          C: 'Post-Filtration Assessment Standards',
          D: 'Purified Fresh Aquatic Solutions',
        },
        correctAnswer: 'B',
        explanation: 'PFAS stands for Per- and Polyfluoroalkyl Substances — synthetic chemicals often called "forever chemicals" because they don\'t break down in the environment.',
      },
      {
        id: 'ch1q3',
        question: 'What is a Point of Entry (POE) treatment system?',
        options: {
          A: 'A portable water filter',
          B: 'A system installed at a specific faucet',
          C: 'A system installed where water enters the home, treating all water',
          D: 'A municipal treatment facility',
        },
        correctAnswer: 'C',
        explanation: 'A Point of Entry (POE) system is installed where water enters the home and treats all water used throughout the entire house.',
      },
    ],
  },

  // Chapter 2: Water Chemistry Basics
  {
    title: 'Water Chemistry Basics',
    subtitle: 'Understanding pH, hardness, TDS, and other key water quality parameters',
    sections: [
      {
        title: 'pH and Water Balance',
        content: 'pH measures how acidic or alkaline water is on a scale of 0-14. Pure water has a pH of 7 (neutral). Most drinking water falls between 6.5 and 8.5. Water with low pH (acidic) can corrode pipes and leach metals. Water with high pH (alkaline) can cause scale buildup and taste issues.',
        bullets: [
          'pH below 7 = acidic (can cause blue-green stains, pipe corrosion)',
          'pH of 7 = neutral',
          'pH above 7 = alkaline (can cause scale, soap scum)',
          'EPA recommends drinking water pH between 6.5 and 8.5',
          'Always test pH as part of every water assessment',
        ],
      },
      {
        title: 'Water Hardness',
        content: 'Hard water contains dissolved calcium and magnesium minerals. It\'s measured in grains per gallon (gpg) or parts per million (ppm). Hard water causes scale buildup in pipes, water heaters, and appliances, reduces soap effectiveness, and leaves spots on dishes and fixtures.',
        bullets: [
          'Soft: 0-1 gpg',
          'Slightly Hard: 1-3.5 gpg',
          'Moderately Hard: 3.5-7 gpg',
          'Hard: 7-10.5 gpg',
          'Very Hard: 10.5+ gpg',
        ],
      },
      {
        title: 'Total Dissolved Solids (TDS)',
        content: 'TDS is a measure of all dissolved minerals, salts, and metals in water. It\'s measured in parts per million (ppm). While not all TDS is harmful, high TDS can indicate the presence of contaminants and affect taste. The EPA recommends TDS below 500 ppm for drinking water.',
      },
      {
        title: 'Chlorine and Chloramines',
        content: 'Municipal water systems use chlorine or chloramines to disinfect water. While necessary for safety, these chemicals can cause taste and odor issues, dry skin and hair, and produce harmful disinfection byproducts (DBPs) like trihalomethanes (THMs). Carbon filtration effectively removes chlorine; catalytic carbon is needed for chloramines.',
      },
    ],
    keyTerms: {
      'GPG': 'Grains Per Gallon — standard unit for measuring water hardness',
      'TDS': 'Total Dissolved Solids — total concentration of dissolved substances',
      'DBPs': 'Disinfection Byproducts — chemicals formed when disinfectants react with organic matter',
      'THMs': 'Trihalomethanes — a group of disinfection byproducts linked to health concerns',
    },
    quizQuestions: [
      {
        id: 'ch2q1',
        question: 'What pH range does the EPA recommend for drinking water?',
        options: {
          A: '5.0 to 6.0',
          B: '6.5 to 8.5',
          C: '8.0 to 10.0',
          D: '7.0 exactly',
        },
        correctAnswer: 'B',
        explanation: 'The EPA recommends drinking water pH between 6.5 and 8.5. Water outside this range can cause corrosion or scaling issues.',
      },
      {
        id: 'ch2q2',
        question: 'Water with a hardness of 8 gpg would be classified as:',
        options: {
          A: 'Soft',
          B: 'Moderately Hard',
          C: 'Hard',
          D: 'Very Hard',
        },
        correctAnswer: 'C',
        explanation: 'Water between 7-10.5 grains per gallon is classified as Hard. This level typically requires treatment to prevent scale buildup.',
      },
      {
        id: 'ch2q3',
        question: 'What type of carbon is needed to remove chloramines from water?',
        options: {
          A: 'Standard activated carbon',
          B: 'Catalytic carbon',
          C: 'Coconut shell carbon',
          D: 'Bone char carbon',
        },
        correctAnswer: 'B',
        explanation: 'Catalytic carbon is specifically designed to break down chloramines. Standard activated carbon effectively removes chlorine but is not sufficient for chloramines.',
      },
    ],
  },

  // Chapter 3: Water Quality Testing
  {
    title: 'Water Quality Testing',
    subtitle: 'How to perform comprehensive water testing and interpret results',
    sections: [
      {
        title: 'The Water Assessment Process',
        content: 'Every customer interaction starts with a thorough water assessment. This is your most important tool — it builds credibility, educates the customer, and provides the data needed to recommend the right solution. Never skip or rush this step.',
        bullets: [
          'Always test at the kitchen sink (primary drinking water source)',
          'Run water for 30 seconds before collecting sample',
          'Test both hot and cold water when possible',
          'Document all results on the NWS Water Assessment Form',
          'Explain each test to the customer as you perform it',
        ],
      },
      {
        title: 'Essential Tests',
        content: 'The NWS water testing kit includes tests for all major water quality parameters. You should perform every test during each assessment — even if the customer has a specific complaint. Comprehensive testing often reveals issues the customer didn\'t know about.',
        bullets: [
          'pH — use electronic meter for accuracy',
          'TDS — digital TDS meter reading in ppm',
          'Hardness — test strips or drop test kit (gpg)',
          'Chlorine/Chloramines — DPD reagent test',
          'Iron — colorimetric test (ferrous and ferric)',
          'Bacteria — presence/absence test (48-hour)',
        ],
      },
      {
        title: 'Interpreting Results',
        content: 'Understanding how to read and explain test results is critical. Always compare results to EPA Maximum Contaminant Levels (MCLs) and Secondary Standards. Use the NWS Result Interpretation Guide to identify which treatment solutions address each finding.',
      },
    ],
    callouts: [
      {
        type: 'warning',
        title: 'Important',
        content: 'Never diagnose water as "unsafe" or make health claims. Instead, share the test results and EPA standards, and let customers draw their own conclusions. We provide information and solutions — not medical advice.',
      },
    ],
    quizQuestions: [
      {
        id: 'ch3q1',
        question: 'How long should you run water before collecting a test sample?',
        options: {
          A: 'No need to run it first',
          B: '10 seconds',
          C: '30 seconds',
          D: '5 minutes',
        },
        correctAnswer: 'C',
        explanation: 'Run water for 30 seconds before collecting a sample to ensure you\'re testing representative water from the supply, not stagnant water from the pipes.',
      },
      {
        id: 'ch3q2',
        question: 'What reagent is used to test for chlorine levels?',
        options: {
          A: 'Silver nitrate',
          B: 'DPD reagent',
          C: 'Phenolphthalein',
          D: 'Litmus solution',
        },
        correctAnswer: 'B',
        explanation: 'DPD (N,N-diethyl-p-phenylenediamine) reagent is the standard method for testing free and total chlorine levels in drinking water.',
      },
      {
        id: 'ch3q3',
        question: 'When performing a water assessment, which faucet should you primarily test?',
        options: {
          A: 'Bathroom sink',
          B: 'Kitchen sink',
          C: 'Outdoor hose bib',
          D: 'Laundry faucet',
        },
        correctAnswer: 'B',
        explanation: 'Always test at the kitchen sink as it is the primary drinking water source in most homes.',
      },
      {
        id: 'ch3q4',
        question: 'What should you NEVER do when discussing water test results with a customer?',
        options: {
          A: 'Show them the EPA standards',
          B: 'Explain each test result clearly',
          C: 'Diagnose their water as "unsafe" or make health claims',
          D: 'Recommend treatment solutions',
        },
        correctAnswer: 'C',
        explanation: 'Never diagnose water as "unsafe" or make health claims. Share test results and EPA standards, and let customers draw their own conclusions.',
      },
    ],
  },

  // Chapter 4: Treatment Technologies
  {
    title: 'Treatment Technologies',
    subtitle: 'Overview of water treatment methods and when to use each one',
    sections: [
      {
        title: 'Carbon Filtration',
        content: 'Activated carbon is the most common water treatment media. It works through adsorption — contaminants stick to the surface of the carbon. It\'s excellent for removing chlorine, taste, odor, and many organic chemicals. Different carbon types serve different purposes.',
        bullets: [
          'Granular Activated Carbon (GAC) — general purpose filtration',
          'Carbon Block — higher contaminant removal, slower flow rate',
          'Catalytic Carbon — specifically designed for chloramine removal',
          'Coconut Shell Carbon — preferred for drinking water, finer pore structure',
        ],
      },
      {
        title: 'Ion Exchange',
        content: 'Ion exchange systems swap unwanted ions in water for more desirable ones. Water softeners are the most common example — they exchange calcium and magnesium ions (hardness) for sodium or potassium ions. Ion exchange can also be used for nitrate, arsenic, and other contaminant removal.',
      },
      {
        title: 'Reverse Osmosis',
        content: 'Reverse osmosis (RO) forces water through a semi-permeable membrane that blocks contaminants at the molecular level. RO systems remove 95-99% of dissolved solids, heavy metals, bacteria, and most contaminants. They produce the purest drinking water available for residential applications.',
      },
      {
        title: 'UV Disinfection',
        content: 'Ultraviolet (UV) disinfection uses UV-C light to destroy bacteria, viruses, and other microorganisms by damaging their DNA. UV treatment adds no chemicals to water and leaves no residual taste or odor. It\'s effective against chlorine-resistant organisms like Cryptosporidium and Giardia.',
      },
    ],
    quizQuestions: [
      {
        id: 'ch4q1',
        question: 'What is the primary mechanism by which activated carbon removes contaminants?',
        options: {
          A: 'Absorption (soaking up water)',
          B: 'Adsorption (contaminants stick to the surface)',
          C: 'Chemical reaction',
          D: 'Magnetic attraction',
        },
        correctAnswer: 'B',
        explanation: 'Activated carbon works through adsorption — contaminants adhere to the extremely large surface area of the carbon particles.',
      },
      {
        id: 'ch4q2',
        question: 'What percentage of dissolved solids can reverse osmosis typically remove?',
        options: {
          A: '50-60%',
          B: '70-80%',
          C: '85-90%',
          D: '95-99%',
        },
        correctAnswer: 'D',
        explanation: 'Reverse osmosis systems typically remove 95-99% of dissolved solids, making them the most thorough residential water purification technology.',
      },
      {
        id: 'ch4q3',
        question: 'Which treatment method is effective against chlorine-resistant organisms like Cryptosporidium?',
        options: {
          A: 'Carbon filtration',
          B: 'Water softening',
          C: 'UV disinfection',
          D: 'Ion exchange',
        },
        correctAnswer: 'C',
        explanation: 'UV disinfection destroys microorganisms including chlorine-resistant pathogens like Cryptosporidium and Giardia by damaging their DNA.',
      },
    ],
  },

  // Chapter 5: Filtration Systems
  {
    title: 'Filtration Systems',
    subtitle: 'Understanding sediment filters, carbon filters, and whole-home filtration',
    sections: [
      {
        title: 'Sediment Filtration',
        content: 'Sediment filters remove physical particles from water — sand, rust, dirt, and other suspended solids. They\'re rated by micron size: the smaller the micron rating, the finer the filtration. Sediment filters protect downstream equipment and improve water clarity.',
        bullets: [
          '50 micron — removes visible particles',
          '20 micron — removes fine sand and silt',
          '5 micron — removes most visible turbidity',
          '1 micron — removes fine sediment and some cysts',
          'Sediment filters should be the first stage in any treatment system',
        ],
      },
      {
        title: 'Whole-Home Filtration Systems',
        content: 'Point-of-entry (POE) filtration systems treat all water entering the home. NWS offers several whole-home configurations based on water quality needs. These systems typically combine sediment pre-filtration, carbon filtration for chemical removal, and may include additional media for specific contaminants.',
      },
      {
        title: 'Filter Maintenance and Replacement',
        content: 'Regular filter maintenance is critical for system performance and customer satisfaction. Every system has a recommended replacement schedule based on usage and water quality. A well-maintained customer is a long-term customer — filter replacements are also an important revenue stream.',
        bullets: [
          'Sediment pre-filters: every 3-6 months',
          'Carbon filters: every 6-12 months',
          'RO membranes: every 2-3 years',
          'UV lamps: annually (regardless of apparent function)',
          'Always log replacement dates in the customer file',
        ],
      },
    ],
    quizQuestions: [
      {
        id: 'ch5q1',
        question: 'What should be the first stage in any water treatment system?',
        options: {
          A: 'Carbon filter',
          B: 'UV lamp',
          C: 'Sediment filter',
          D: 'RO membrane',
        },
        correctAnswer: 'C',
        explanation: 'Sediment filters should always be the first stage to remove physical particles and protect downstream treatment equipment.',
      },
      {
        id: 'ch5q2',
        question: 'How often should UV lamps typically be replaced?',
        options: {
          A: 'Every 3 months',
          B: 'Every 6 months',
          C: 'Annually',
          D: 'Only when they burn out',
        },
        correctAnswer: 'C',
        explanation: 'UV lamps should be replaced annually regardless of whether they appear to still be working. UV output degrades over time even though the lamp may still emit visible light.',
      },
      {
        id: 'ch5q3',
        question: 'A 5-micron sediment filter removes:',
        options: {
          A: 'Only visible rocks and debris',
          B: 'Most visible turbidity',
          C: 'Dissolved chemicals',
          D: 'Bacteria and viruses',
        },
        correctAnswer: 'B',
        explanation: 'A 5-micron sediment filter removes most visible turbidity (cloudiness) from water, including fine sand, silt, and particulate matter.',
      },
    ],
  },

  // Chapter 6: Disinfection Methods
  {
    title: 'Disinfection Methods',
    subtitle: 'Understanding chlorination, UV, ozone, and other disinfection approaches',
    sections: [
      {
        title: 'Chlorination',
        content: 'Chlorine is the most widely used water disinfectant. Municipal systems add chlorine to kill bacteria, viruses, and other pathogens. While effective for public health, residual chlorine can cause taste and odor issues and form disinfection byproducts. Many customers want to remove chlorine at the point of use.',
      },
      {
        title: 'UV Disinfection Details',
        content: 'UV systems use UV-C light at 254 nanometers wavelength to disable microorganisms. The UV dose is measured in millijoules per square centimeter (mJ/cm²). The NSF/ANSI 55 standard specifies Class A systems (40 mJ/cm²) for disinfection and Class B systems (16 mJ/cm²) for supplemental treatment.',
        bullets: [
          'Class A (40 mJ/cm²) — for microbiologically unsafe water',
          'Class B (16 mJ/cm²) — for supplemental treatment of already safe water',
          'Water must be clear (low turbidity) for UV to be effective',
          'Pre-filtration is required before UV treatment',
          'UV leaves no chemical residual in the water',
        ],
      },
      {
        title: 'Ozone Treatment',
        content: 'Ozone (O3) is a powerful oxidizer that effectively destroys bacteria, viruses, and many chemical contaminants. It works faster than chlorine and reverts to oxygen, leaving no chemical residual. Ozone systems are less common in residential applications but are used in some premium whole-home systems.',
      },
    ],
    quizQuestions: [
      {
        id: 'ch6q1',
        question: 'What wavelength does UV-C light operate at for water disinfection?',
        options: {
          A: '180 nanometers',
          B: '254 nanometers',
          C: '365 nanometers',
          D: '500 nanometers',
        },
        correctAnswer: 'B',
        explanation: 'UV-C light at 254 nanometers is the optimal wavelength for disrupting microbial DNA and disabling pathogens.',
      },
      {
        id: 'ch6q2',
        question: 'What NSF/ANSI 55 Class is required for disinfecting microbiologically unsafe water?',
        options: {
          A: 'Class B (16 mJ/cm²)',
          B: 'Class A (40 mJ/cm²)',
          C: 'Class C (8 mJ/cm²)',
          D: 'Any class is acceptable',
        },
        correctAnswer: 'B',
        explanation: 'Class A UV systems deliver 40 mJ/cm², which is the standard required for treating microbiologically unsafe water.',
      },
      {
        id: 'ch6q3',
        question: 'What must be done to water BEFORE UV treatment for it to be effective?',
        options: {
          A: 'Add chlorine',
          B: 'Heat it to 100°F',
          C: 'Pre-filter it to reduce turbidity',
          D: 'Add a pH buffer',
        },
        correctAnswer: 'C',
        explanation: 'Water must be clear and have low turbidity for UV light to penetrate effectively. Pre-filtration removes particles that could shield microorganisms from UV exposure.',
      },
    ],
  },

  // Chapter 7: Water Softening
  {
    title: 'Water Softening',
    subtitle: 'Ion exchange softeners, salt-free alternatives, and sizing systems',
    sections: [
      {
        title: 'How Ion Exchange Softening Works',
        content: 'Traditional water softeners use ion exchange resin beads charged with sodium (or potassium) ions. As hard water flows through the resin bed, calcium and magnesium ions swap places with sodium ions. When the resin is exhausted, it regenerates by flushing with a salt (brine) solution.',
        bullets: [
          'Resin beads hold sodium/potassium ions',
          'Hard water minerals (Ca²⁺, Mg²⁺) exchange for Na⁺ or K⁺',
          'Resin regenerates with salt brine when exhausted',
          'Regeneration sends mineral-rich water to drain',
          'Typical regeneration cycle takes 60-90 minutes',
        ],
      },
      {
        title: 'Sizing a Water Softener',
        content: 'Proper sizing ensures the softener can handle the household\'s water demand between regenerations. The formula accounts for hardness level, daily water usage, and desired days between regeneration.',
        bullets: [
          'Calculate daily softening demand: Hardness (gpg) × Daily usage (gallons)',
          'Multiply by days between regeneration (typically 7)',
          'Select a softener with grain capacity to match',
          'Average household uses 75 gallons per person per day',
          'Always account for iron when calculating — each 1 ppm iron = 4 gpg additional capacity needed',
        ],
      },
      {
        title: 'Salt-Free Alternatives',
        content: 'Some customers prefer salt-free water conditioning. Template Assisted Crystallization (TAC) systems convert hardness minerals into microscopic crystals that won\'t stick to surfaces. While they don\'t technically "soften" water (minerals remain), they prevent scale buildup effectively.',
      },
    ],
    quizQuestions: [
      {
        id: 'ch7q1',
        question: 'In ion exchange softening, calcium and magnesium ions are exchanged for:',
        options: {
          A: 'Iron ions',
          B: 'Chlorine ions',
          C: 'Sodium or potassium ions',
          D: 'Hydrogen ions',
        },
        correctAnswer: 'C',
        explanation: 'Water softeners exchange calcium and magnesium (hardness) ions for sodium or potassium ions through the ion exchange resin.',
      },
      {
        id: 'ch7q2',
        question: 'When sizing a water softener, each 1 ppm of iron requires how much additional grain capacity?',
        options: {
          A: '1 gpg',
          B: '2 gpg',
          C: '4 gpg',
          D: '10 gpg',
        },
        correctAnswer: 'C',
        explanation: 'Each 1 ppm of iron in the water requires 4 gpg of additional softener capacity. Iron fouls resin and must be accounted for in sizing.',
      },
      {
        id: 'ch7q3',
        question: 'What does TAC stand for in salt-free water conditioning?',
        options: {
          A: 'Total Alkalinity Control',
          B: 'Template Assisted Crystallization',
          C: 'Treatment and Conditioning',
          D: 'Total Activated Carbon',
        },
        correctAnswer: 'B',
        explanation: 'TAC (Template Assisted Crystallization) converts dissolved hardness minerals into microscopic crystals that won\'t adhere to surfaces.',
      },
    ],
  },

  // Chapter 8: Reverse Osmosis Systems
  {
    title: 'Reverse Osmosis Systems',
    subtitle: 'RO technology, system components, installation, and maintenance',
    sections: [
      {
        title: 'How Reverse Osmosis Works',
        content: 'Reverse osmosis applies pressure to push water through a semi-permeable membrane with pore sizes of approximately 0.0001 microns. Water molecules pass through, but dissolved salts, metals, and contaminants are rejected and flushed to drain. RO systems typically produce a concentrate (reject) stream and a permeate (purified) stream.',
      },
      {
        title: 'System Components',
        content: 'A standard residential RO system includes multiple stages of filtration to protect the membrane and polish the final product water.',
        bullets: [
          'Stage 1: Sediment pre-filter (removes particles)',
          'Stage 2: Carbon pre-filter (removes chlorine that damages membranes)',
          'Stage 3: RO membrane (primary purification)',
          'Stage 4: Carbon post-filter (polishes taste)',
          'Storage tank (holds purified water for on-demand use)',
          'Dedicated faucet (separate from the regular kitchen faucet)',
        ],
      },
      {
        title: 'Recovery Rate and Waste Water',
        content: 'RO systems produce waste water (concentrate) as part of the purification process. The recovery rate indicates how much of the incoming water becomes purified. Standard residential RO systems have a 25-30% recovery rate (3-4 gallons of waste per 1 gallon of purified water). High-efficiency systems can achieve 50% or better recovery.',
      },
    ],
    callouts: [
      {
        type: 'info',
        title: 'Customer FAQ',
        content: 'Customers often ask about RO "waste water." Explain that the concentrate isn\'t wasted — it carries away the contaminants that were removed. Many customers use it for watering plants or other non-drinking purposes.',
      },
    ],
    quizQuestions: [
      {
        id: 'ch8q1',
        question: 'What is the approximate pore size of an RO membrane?',
        options: {
          A: '5 microns',
          B: '1 micron',
          C: '0.01 microns',
          D: '0.0001 microns',
        },
        correctAnswer: 'D',
        explanation: 'RO membranes have pore sizes of approximately 0.0001 microns, small enough to reject dissolved salts and metals at the molecular level.',
      },
      {
        id: 'ch8q2',
        question: 'Why is a carbon pre-filter necessary before the RO membrane?',
        options: {
          A: 'To add minerals to the water',
          B: 'To remove chlorine that would damage the membrane',
          C: 'To increase water pressure',
          D: 'To warm the water',
        },
        correctAnswer: 'B',
        explanation: 'Chlorine degrades RO membranes over time. The carbon pre-filter removes chlorine to protect the membrane and extend its lifespan.',
      },
      {
        id: 'ch8q3',
        question: 'What is the typical recovery rate of a standard residential RO system?',
        options: {
          A: '10-15%',
          B: '25-30%',
          C: '50-60%',
          D: '80-90%',
        },
        correctAnswer: 'B',
        explanation: 'Standard residential RO systems have a 25-30% recovery rate, meaning 3-4 gallons of water are sent to drain for every 1 gallon of purified water produced.',
      },
    ],
  },

  // Chapter 9: Distribution & Plumbing
  {
    title: 'Distribution & Plumbing',
    subtitle: 'Understanding home plumbing systems, pipe materials, and installation basics',
    sections: [
      {
        title: 'Common Pipe Materials',
        content: 'Understanding the plumbing in a customer\'s home helps you assess water quality risks and plan installations. Different pipe materials affect water quality differently.',
        bullets: [
          'Copper — durable, can leach copper with acidic water (blue-green stains)',
          'PVC/CPVC — plastic, chemical-resistant, no metallic leaching',
          'PEX — flexible plastic, easy to install, increasingly common',
          'Galvanized Steel — older homes, rusts over time, releases iron',
          'Lead — found in older service lines and solder, serious health risk',
        ],
      },
      {
        title: 'Water Pressure Basics',
        content: 'Residential water pressure typically ranges from 40-80 PSI. Treatment equipment requires adequate pressure to function properly. Low pressure can reduce RO production rates and affect softener performance. High pressure can damage equipment and cause leaks.',
        bullets: [
          'Normal range: 40-80 PSI',
          'Minimum for most treatment equipment: 40 PSI',
          'RO systems work best at 60+ PSI',
          'Pressure above 80 PSI may need a pressure reducing valve',
          'Always check pressure during the water assessment',
        ],
      },
      {
        title: 'Installation Considerations',
        content: 'Proper installation is critical for system performance and customer satisfaction. Always follow NWS installation guidelines and local plumbing codes. Key considerations include location selection, bypass valve installation, drain connections, and proper support for equipment.',
      },
    ],
    quizQuestions: [
      {
        id: 'ch9q1',
        question: 'Which pipe material can cause blue-green stains when water is acidic?',
        options: {
          A: 'PVC',
          B: 'PEX',
          C: 'Copper',
          D: 'Galvanized steel',
        },
        correctAnswer: 'C',
        explanation: 'Copper pipes can leach copper into acidic water, causing characteristic blue-green stains on fixtures and sinks.',
      },
      {
        id: 'ch9q2',
        question: 'What is the minimum water pressure needed for most treatment equipment?',
        options: {
          A: '20 PSI',
          B: '30 PSI',
          C: '40 PSI',
          D: '60 PSI',
        },
        correctAnswer: 'C',
        explanation: 'Most water treatment equipment requires a minimum of 40 PSI to function properly. Below this, performance may be significantly reduced.',
      },
      {
        id: 'ch9q3',
        question: 'At what pressure should a pressure reducing valve be considered?',
        options: {
          A: 'Above 60 PSI',
          B: 'Above 70 PSI',
          C: 'Above 80 PSI',
          D: 'Above 100 PSI',
        },
        correctAnswer: 'C',
        explanation: 'Water pressure above 80 PSI can damage plumbing fixtures and treatment equipment. A pressure reducing valve should be installed to protect the system.',
      },
    ],
  },

  // Chapter 10: Regulatory Compliance
  {
    title: 'Regulatory Compliance',
    subtitle: 'EPA standards, state regulations, and certifications for water treatment',
    sections: [
      {
        title: 'EPA Drinking Water Standards',
        content: 'The EPA sets two types of drinking water standards. Primary standards (Maximum Contaminant Levels, or MCLs) are legally enforceable limits for contaminants that pose health risks. Secondary standards are non-enforceable guidelines for contaminants that affect taste, odor, or appearance.',
        bullets: [
          'Primary MCLs — legally enforceable, health-based',
          'Secondary Standards — non-enforceable, aesthetic-based',
          'MCL for lead: 0.015 mg/L (action level)',
          'MCL for arsenic: 0.010 mg/L',
          'Secondary standard for TDS: 500 mg/L',
          'Secondary standard for chloride: 250 mg/L',
        ],
      },
      {
        title: 'NSF/ANSI Certifications',
        content: 'NSF International certifies water treatment products to specific standards. Always recommend NSF-certified products to customers — it demonstrates third-party validation of performance claims.',
        bullets: [
          'NSF/ANSI 42 — Aesthetic effects (taste, odor, chlorine)',
          'NSF/ANSI 44 — Water softeners',
          'NSF/ANSI 53 — Health effects (lead, cysts, VOCs)',
          'NSF/ANSI 55 — UV disinfection',
          'NSF/ANSI 58 — Reverse osmosis systems',
          'NSF/ANSI 401 — Emerging contaminants (pharmaceuticals, PFAS)',
        ],
      },
      {
        title: 'State and Local Regulations',
        content: 'Water treatment regulations vary by state. Some states require contractor licenses, permits for installation, or specific certifications. Always verify local requirements before performing installations. NWS provides state-specific compliance guides for each operating territory.',
      },
    ],
    quizQuestions: [
      {
        id: 'ch10q1',
        question: 'What is the EPA action level for lead in drinking water?',
        options: {
          A: '0.001 mg/L',
          B: '0.015 mg/L',
          C: '0.050 mg/L',
          D: '0.100 mg/L',
        },
        correctAnswer: 'B',
        explanation: 'The EPA action level for lead in drinking water is 0.015 mg/L (15 parts per billion). Above this level, water systems must take action to reduce lead exposure.',
      },
      {
        id: 'ch10q2',
        question: 'Which NSF/ANSI standard covers reverse osmosis systems?',
        options: {
          A: 'NSF/ANSI 42',
          B: 'NSF/ANSI 53',
          C: 'NSF/ANSI 55',
          D: 'NSF/ANSI 58',
        },
        correctAnswer: 'D',
        explanation: 'NSF/ANSI 58 is the standard specifically for reverse osmosis systems, covering contaminant reduction performance and system integrity.',
      },
      {
        id: 'ch10q3',
        question: 'What is the difference between EPA Primary and Secondary drinking water standards?',
        options: {
          A: 'Primary are for hot water, Secondary for cold',
          B: 'Primary are legally enforceable health-based limits, Secondary are non-enforceable aesthetic guidelines',
          C: 'Primary are for residential, Secondary for commercial',
          D: 'There is no difference',
        },
        correctAnswer: 'B',
        explanation: 'Primary standards (MCLs) are legally enforceable and protect health. Secondary standards address aesthetic qualities like taste, odor, and appearance and are not enforceable.',
      },
    ],
  },

  // Chapter 11: Customer Consultation
  {
    title: 'Customer Consultation',
    subtitle: 'Building rapport, presenting solutions, and closing with confidence',
    sections: [
      {
        title: 'The Consultation Framework',
        content: 'The NWS consultation follows a proven framework: Connect, Assess, Educate, Recommend, Confirm. This process ensures every customer receives a thorough, professional experience that builds trust and leads to informed decisions.',
        bullets: [
          'Connect — build rapport, understand their concerns',
          'Assess — perform comprehensive water testing',
          'Educate — explain results and what they mean',
          'Recommend — present customized solution options',
          'Confirm — address questions and secure commitment',
        ],
      },
      {
        title: 'Presenting Solutions',
        content: 'Always present at least two solution options: a comprehensive solution and a targeted solution. This gives customers a choice and makes them feel in control. Never pressure — educate. Use the test results to justify each recommendation.',
        bullets: [
          'Lead with the most comprehensive solution',
          'Explain what each component does and why it\'s recommended',
          'Present a more targeted option as an alternative',
          'Use visual aids (test results, comparison charts)',
          'Address total cost of ownership, not just purchase price',
        ],
      },
      {
        title: 'Handling Objections',
        content: 'Common objections include price, timing ("let me think about it"), and skepticism. The best approach is to understand the underlying concern. Price objections often mean the customer doesn\'t see enough value — circle back to the test results and health implications.',
      },
    ],
    callouts: [
      {
        type: 'tip',
        title: 'Sales Tip',
        content: 'The test results are your most powerful closing tool. When a customer says "let me think about it," ask which specific test results concern them most. Refocus the conversation on the problem, not the price.',
      },
    ],
    quizQuestions: [
      {
        id: 'ch11q1',
        question: 'What is the correct order of the NWS consultation framework?',
        options: {
          A: 'Assess, Connect, Recommend, Educate, Confirm',
          B: 'Connect, Assess, Educate, Recommend, Confirm',
          C: 'Educate, Assess, Connect, Recommend, Confirm',
          D: 'Connect, Recommend, Assess, Educate, Confirm',
        },
        correctAnswer: 'B',
        explanation: 'The NWS framework follows: Connect (build rapport), Assess (test water), Educate (explain results), Recommend (present solutions), Confirm (secure commitment).',
      },
      {
        id: 'ch11q2',
        question: 'How many solution options should you present to a customer?',
        options: {
          A: 'Only one — the best solution',
          B: 'At least two — comprehensive and targeted',
          C: 'As many as possible',
          D: 'None — let them choose from a catalog',
        },
        correctAnswer: 'B',
        explanation: 'Always present at least two options: a comprehensive solution and a more targeted alternative. This gives customers choice and a sense of control.',
      },
      {
        id: 'ch11q3',
        question: 'When a customer objects to price, the best approach is to:',
        options: {
          A: 'Immediately offer a discount',
          B: 'Tell them competitors charge more',
          C: 'Refocus on the test results and the value of the solution',
          D: 'Walk away and follow up later',
        },
        correctAnswer: 'C',
        explanation: 'Price objections usually indicate the customer hasn\'t fully connected the solution to their problem. Refocusing on test results and health implications rebuilds the value proposition.',
      },
    ],
  },

  // Chapter 12: Installation & Maintenance
  {
    title: 'Installation & Maintenance',
    subtitle: 'Proper installation procedures, maintenance schedules, and customer follow-up',
    sections: [
      {
        title: 'Pre-Installation Checklist',
        content: 'Before any installation, complete the NWS Pre-Installation Checklist. This ensures you have the right equipment, understand the plumbing layout, and can complete the installation efficiently and professionally.',
        bullets: [
          'Verify water pressure and flow rate',
          'Confirm installation location with the homeowner',
          'Check for adequate drainage for waste water',
          'Ensure electrical outlet availability (for UV, RO booster pump)',
          'Verify all components and tools are on the truck',
          'Review local plumbing code requirements',
        ],
      },
      {
        title: 'Installation Best Practices',
        content: 'Professional installation builds customer confidence and prevents callbacks. Follow NWS standards for every installation, regardless of system complexity.',
        bullets: [
          'Always install a bypass valve on whole-home systems',
          'Use Teflon tape on all threaded connections',
          'Flush all new filters before connecting to household plumbing',
          'Check for leaks at every connection point',
          'Run system through a complete cycle before leaving',
          'Program any electronic components (softener timer, UV alarm)',
        ],
      },
      {
        title: 'Customer Handoff and Follow-Up',
        content: 'The installation isn\'t complete until the customer understands their new system. Walk them through basic operation, filter locations, and the maintenance schedule. Schedule a 30-day follow-up call and the first maintenance visit.',
        bullets: [
          'Demonstrate system operation to the homeowner',
          'Explain filter replacement schedule and costs',
          'Provide the NWS Customer Care card with contact info',
          'Schedule 30-day follow-up call',
          'Schedule first maintenance visit (typically 6 months)',
          'Register warranty with NWS',
        ],
      },
    ],
    callouts: [
      {
        type: 'warning',
        title: 'Critical',
        content: 'Never leave an installation without testing for leaks and running the system through a complete cycle. A leak discovered after you leave damages customer trust and costs time and money to resolve.',
      },
    ],
    quizQuestions: [
      {
        id: 'ch12q1',
        question: 'What should always be installed on whole-home water treatment systems?',
        options: {
          A: 'A water meter',
          B: 'A bypass valve',
          C: 'A pressure booster',
          D: 'A flow restrictor',
        },
        correctAnswer: 'B',
        explanation: 'A bypass valve allows water to flow around the treatment system during maintenance or service, ensuring the home always has water access.',
      },
      {
        id: 'ch12q2',
        question: 'When should you schedule the first follow-up call after installation?',
        options: {
          A: '1 week',
          B: '30 days',
          C: '3 months',
          D: '6 months',
        },
        correctAnswer: 'B',
        explanation: 'Schedule a 30-day follow-up call to check on system performance, answer questions, and reinforce the customer relationship.',
      },
      {
        id: 'ch12q3',
        question: 'What must you do before leaving any installation?',
        options: {
          A: 'Collect payment',
          B: 'Take a photo for social media',
          C: 'Test for leaks and run the system through a complete cycle',
          D: 'Leave extra filters with the customer',
        },
        correctAnswer: 'C',
        explanation: 'Never leave without testing for leaks at every connection point and running the system through a complete operating cycle to verify proper function.',
      },
    ],
  },
];

// 20-question final exam — pulls from across all chapters
export const FINAL_EXAM_QUESTIONS: QuizQuestion[] = [
  {
    id: 'fe1',
    question: 'What does TDS stand for and what does it measure?',
    options: {
      A: 'Total Dissolved Solids — combined dissolved substances in water',
      B: 'Treatment Delivery System — how water is treated',
      C: 'Temperature Detection Standard — water temperature',
      D: 'Total Disinfection Scale — chlorine effectiveness',
    },
    correctAnswer: 'A',
    explanation: 'TDS stands for Total Dissolved Solids and measures the combined content of all dissolved inorganic and organic substances in water.',
  },
  {
    id: 'fe2',
    question: 'The EPA action level for lead in drinking water is:',
    options: {
      A: '0.05 mg/L',
      B: '0.015 mg/L',
      C: '0.001 mg/L',
      D: '0.1 mg/L',
    },
    correctAnswer: 'B',
    explanation: 'The EPA action level for lead is 0.015 mg/L (15 parts per billion).',
  },
  {
    id: 'fe3',
    question: 'Which water treatment technology removes 95-99% of dissolved solids?',
    options: {
      A: 'Carbon filtration',
      B: 'Water softening',
      C: 'Reverse osmosis',
      D: 'UV disinfection',
    },
    correctAnswer: 'C',
    explanation: 'Reverse osmosis systems remove 95-99% of dissolved solids by forcing water through a semi-permeable membrane.',
  },
  {
    id: 'fe4',
    question: 'Water with a pH below 7 is considered:',
    options: {
      A: 'Alkaline',
      B: 'Neutral',
      C: 'Acidic',
      D: 'Saturated',
    },
    correctAnswer: 'C',
    explanation: 'Water with pH below 7 is acidic. It can corrode pipes and leach metals into the water supply.',
  },
  {
    id: 'fe5',
    question: 'What is the primary purpose of a sediment pre-filter in a treatment system?',
    options: {
      A: 'Remove chlorine',
      B: 'Kill bacteria',
      C: 'Remove physical particles and protect downstream equipment',
      D: 'Soften the water',
    },
    correctAnswer: 'C',
    explanation: 'Sediment pre-filters remove sand, rust, dirt, and other particles to protect more sensitive downstream treatment components.',
  },
  {
    id: 'fe6',
    question: 'Ion exchange water softeners replace calcium and magnesium with:',
    options: {
      A: 'Iron ions',
      B: 'Sodium or potassium ions',
      C: 'Chlorine ions',
      D: 'Hydrogen ions',
    },
    correctAnswer: 'B',
    explanation: 'Water softeners use ion exchange to replace hardness minerals (calcium and magnesium) with sodium or potassium ions.',
  },
  {
    id: 'fe7',
    question: 'NSF/ANSI Standard 58 covers which type of treatment system?',
    options: {
      A: 'Water softeners',
      B: 'UV disinfection',
      C: 'Reverse osmosis',
      D: 'Carbon filtration',
    },
    correctAnswer: 'C',
    explanation: 'NSF/ANSI 58 is the standard for reverse osmosis systems.',
  },
  {
    id: 'fe8',
    question: 'The correct NWS consultation framework order is:',
    options: {
      A: 'Assess, Connect, Educate, Recommend, Confirm',
      B: 'Connect, Assess, Educate, Recommend, Confirm',
      C: 'Educate, Assess, Recommend, Connect, Confirm',
      D: 'Connect, Recommend, Assess, Educate, Confirm',
    },
    correctAnswer: 'B',
    explanation: 'The NWS consultation framework: Connect, Assess, Educate, Recommend, Confirm.',
  },
  {
    id: 'fe9',
    question: 'UV disinfection is effective against which chlorine-resistant organisms?',
    options: {
      A: 'Iron bacteria only',
      B: 'Cryptosporidium and Giardia',
      C: 'Dissolved minerals',
      D: 'Chloramines',
    },
    correctAnswer: 'B',
    explanation: 'UV disinfection effectively destroys chlorine-resistant organisms like Cryptosporidium and Giardia by damaging their DNA.',
  },
  {
    id: 'fe10',
    question: 'What type of carbon is required to remove chloramines?',
    options: {
      A: 'Coconut shell carbon',
      B: 'Bone char carbon',
      C: 'Catalytic carbon',
      D: 'Standard GAC',
    },
    correctAnswer: 'C',
    explanation: 'Catalytic carbon is specifically designed to break down and remove chloramines, which standard activated carbon cannot effectively address.',
  },
  {
    id: 'fe11',
    question: 'The minimum water pressure for most treatment equipment is:',
    options: {
      A: '20 PSI',
      B: '30 PSI',
      C: '40 PSI',
      D: '60 PSI',
    },
    correctAnswer: 'C',
    explanation: 'Most water treatment equipment requires a minimum of 40 PSI to function properly.',
  },
  {
    id: 'fe12',
    question: 'How often should RO membranes typically be replaced?',
    options: {
      A: 'Every 3 months',
      B: 'Every 6-12 months',
      C: 'Every 2-3 years',
      D: 'Every 5-7 years',
    },
    correctAnswer: 'C',
    explanation: 'RO membranes typically last 2-3 years before needing replacement, depending on water quality and usage.',
  },
  {
    id: 'fe13',
    question: 'Which pipe material in older homes poses the most serious health risk?',
    options: {
      A: 'Copper',
      B: 'PVC',
      C: 'PEX',
      D: 'Lead',
    },
    correctAnswer: 'D',
    explanation: 'Lead pipes and lead solder found in older homes pose serious health risks, especially for children and pregnant women.',
  },
  {
    id: 'fe14',
    question: 'What does a water hardness reading of 8 gpg indicate?',
    options: {
      A: 'Soft water',
      B: 'Moderately hard water',
      C: 'Hard water',
      D: 'Very hard water',
    },
    correctAnswer: 'C',
    explanation: 'Water between 7-10.5 grains per gallon is classified as Hard.',
  },
  {
    id: 'fe15',
    question: 'A bypass valve on a whole-home system allows:',
    options: {
      A: 'Higher water pressure',
      B: 'Water to flow around the system during maintenance',
      C: 'Remote monitoring',
      D: 'Automatic regeneration',
    },
    correctAnswer: 'B',
    explanation: 'A bypass valve allows water to flow around the treatment system during maintenance or service, ensuring uninterrupted water supply.',
  },
  {
    id: 'fe16',
    question: 'When should the first follow-up call be scheduled after installation?',
    options: {
      A: '1 week',
      B: '30 days',
      C: '3 months',
      D: '6 months',
    },
    correctAnswer: 'B',
    explanation: 'Schedule a 30-day follow-up call to check on system performance and reinforce the customer relationship.',
  },
  {
    id: 'fe17',
    question: 'What UV dose (mJ/cm²) classifies a UV system as Class A under NSF 55?',
    options: {
      A: '16 mJ/cm²',
      B: '25 mJ/cm²',
      C: '40 mJ/cm²',
      D: '60 mJ/cm²',
    },
    correctAnswer: 'C',
    explanation: 'Class A UV systems deliver 40 mJ/cm², the standard for treating microbiologically unsafe water.',
  },
  {
    id: 'fe18',
    question: 'The standard recovery rate for a residential RO system is approximately:',
    options: {
      A: '10-15%',
      B: '25-30%',
      C: '50-60%',
      D: '75-80%',
    },
    correctAnswer: 'B',
    explanation: 'Standard residential RO systems have a 25-30% recovery rate (3-4 gallons of waste per 1 gallon of purified water).',
  },
  {
    id: 'fe19',
    question: 'What reagent is used to test for chlorine in drinking water?',
    options: {
      A: 'Phenolphthalein',
      B: 'DPD reagent',
      C: 'Silver nitrate',
      D: 'Bromothymol blue',
    },
    correctAnswer: 'B',
    explanation: 'DPD (N,N-diethyl-p-phenylenediamine) reagent is the standard method for testing chlorine levels in water.',
  },
  {
    id: 'fe20',
    question: 'When handling a price objection from a customer, the best approach is to:',
    options: {
      A: 'Offer an immediate discount',
      B: 'Refocus on test results and the value of the solution',
      C: 'Tell them to shop around',
      D: 'Reduce the recommended system components',
    },
    correctAnswer: 'B',
    explanation: 'Price objections usually indicate insufficient perceived value. Refocusing on the test results and health implications rebuilds the value proposition.',
  },
];
