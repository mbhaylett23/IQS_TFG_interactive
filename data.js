// IQS TFG Research Data
// Extracted from NotebookLM Mind Map and TFG PDFs 2025-2026

const researchData = {
    areas: [
        {
            id: "biomedical",
            name: "Biomedical Engineering & Nanomedicine",
            icon: "🧬",
            description: "Drug delivery systems, tissue engineering, and advanced biomaterials",
            topics: [
                {
                    id: "sev-dds",
                    title: "Extracellular Vesicles (SEVs, Vaults) for AAT Deficiency/DDS",
                    description: "Development of innovative methods for exosome isolation in disease research and diagnosis. Focus on neuronal exosomes for Alzheimer's disease biomarkers.",
                    fullDescription: "Alzheimer's disease (AD) is a neurodegenerative disease and the first cause of human dementia. Unfortunately, the finding of an effective treatment to slow down the cognitive decline in AD patients remains elusive. In the last years, a revolutionary method has emerged that allows to study the alterations occurring in the brain of alive AD patients through a blood sample. This method consists of the isolation and characterization of blood stream isolated small vesicles, named exosomes, originated in almost all kind of cells including neurons, and secreted to the circulatory system.\n\nNeuronal exosomes are isolated from other exosomes originated in non-neuronal tissues by means of an antibody against the neuron-specific protein L1CAM. However, in the last years, it was found that L1CAM is also expressed in non-neural tissues and certain types of cancer, casting doubts on the purity of the exosomes isolated by this method. Thus, it is crucial to find out new exosomal proteins that show a stronger and a more specific neuronal expression, for the isolation and study of neuronal exosomes derived from the blood of AD patients, in order to advance in our understanding of this devastating disorder. Preliminary data from our laboratories suggests that GRIN2A could be a good candidate for the isolation of neuron-specific EVs from plasma.",
                    objective: "The present proposal aims to compare the efficiency of three different methods for the isolation of exosomes based on three different antibodies against neuronal proteins: an antibody against L1CAM (standard protocol), an antibody against the neuronal membrane glycoprotein M6alpha (GPM6A) and an antibody against the brain-specific receptor GRIN2A. These three methods will be compared in terms of their capacity to isolate exosomes from the media of a neuroblastoma cell line expressing a protein related to AD (SH-SY5Y-APP). Then exosomes will be analyzed and characterized by NTA, by flow cytometry, western blot and ELISA. The presence of proteins related to AD in the isolated exosomes will be assessed.\n\nThis proposal belongs to the project PID2022-138334OB-I00 kindly founded by the Ministerio de Ciencia e Innovación (Plan Estatal de Investigación Científica y Innovación)",
                    methodology: "Cell culture techniques, exosome isolation protocols using three different antibody-based approaches, characterization by Nanoparticle Tracking Analysis (NTA), flow cytometry, western blot, and ELISA. Analysis of Alzheimer's disease-related protein markers in isolated exosomal fractions.",
                    subtopics: ["Exosome Isolation", "Alzheimer's Disease", "Biomarkers", "L1CAM", "GRIN2A"],
                    keywords: ["extracellular vesicles", "drug delivery", "AAT deficiency", "neuronal exosomes"],
                    supervisors: ["Dr. Martí Lecina Veciana", "Dr. Francesc Xavier Guix Ràfols"]
                },
                {
                    id: "lipid-nano",
                    title: "Lipid/Polymeric Nanoparticles (mRNA, Cancer, Transdermal)",
                    description: "Design and development of novel DNA nanotechnology for selective and synergistic treatment of metastatic cancer using ASOs.",
                    subtopics: ["mRNA Delivery", "Cancer Treatment", "Transdermal Delivery", "pBAE Nanoparticles"],
                    keywords: ["nanoparticles", "mRNA", "cancer therapy", "transdermal"],
                    supervisors: ["Dra. Núria Oliva Jorge", "Dra. Cristina Fornaguera Puigvert", "Dr. Michael Bruyns-Haylett"]
                },
                {
                    id: "polymer-coatings",
                    title: "Polymer Coatings for AAV/Lentiviral Vectors (DMD, T-cell)",
                    description: "Development of polymer coatings for viral vectors targeting Duchenne Muscular Dystrophy and T-cell therapies.",
                    subtopics: ["AAV Vectors", "Lentiviral Vectors", "DMD Therapy", "T-cell Engineering"],
                    keywords: ["polymer coatings", "viral vectors", "gene therapy", "DMD"],
                    supervisors: ["Dr. Carles Bofill Bonet", "Dra. Núria Oliva Jorge"]
                },
                {
                    id: "glyconano",
                    title: "Glyconanoparticles as Glycovaccines (Immune therapy)",
                    description: "Engineering glyconanoparticles for immune therapy applications and vaccine development.",
                    subtopics: ["Glycovaccines", "Immunotherapy", "Nanoparticle Design"],
                    keywords: ["glyconanoparticles", "vaccines", "immunotherapy"],
                    supervisors: ["Dr. Antoni Planas Sauter"]
                },
                {
                    id: "synthetic-receptors",
                    title: "Synthetic Protein Receptors (Brain Targeting)",
                    description: "Development of synthetic protein receptors for targeted brain delivery systems.",
                    subtopics: ["Brain Targeting", "Protein Engineering", "BBB Crossing"],
                    keywords: ["synthetic receptors", "brain targeting", "protein design"],
                    supervisors: ["Dr. Benjamí Oller Salvia"]
                },
                {
                    id: "bioinks",
                    title: "Human Collagen Bioinks (Cartilage/Bone Regeneration)",
                    description: "Development of human collagen-based bioinks for cartilage and bone tissue regeneration applications.",
                    subtopics: ["Bioinks", "Cartilage Regeneration", "Bone Regeneration", "3D Bioprinting"],
                    keywords: ["collagen", "bioinks", "tissue regeneration", "3D printing"],
                    supervisors: ["Dr. Carlos Semino", "Dra. Loli Molina Jiménez"]
                },
                {
                    id: "hydrogels",
                    title: "Conductive/Viscoelastic Hydrogels (Wound Healing, Skin Models)",
                    description: "Engineering advanced hydrogels with conductive and viscoelastic properties for wound healing and skin model applications.",
                    subtopics: ["Conductive Hydrogels", "Wound Healing", "Skin Models", "Viscoelastic Materials"],
                    keywords: ["hydrogels", "wound healing", "skin models", "biomaterials"],
                    supervisors: ["Dr. Robert Texidó Bartés", "Dra. Gloria Nieva Esteve"]
                },
                {
                    id: "stents",
                    title: "Polymeric Stents (Degradation and Coating Optimization)",
                    description: "Optimization of biodegradable polymeric stents with focus on degradation profiles and coating technologies.",
                    subtopics: ["Biodegradable Stents", "Polymer Degradation", "Coating Technology"],
                    keywords: ["polymeric stents", "biodegradation", "coatings"],
                    supervisors: ["Dr. Joaquín Menacho Solà-Morales", "Dra. Ibuki Kusano"]
                }
            ]
        },
        {
            id: "tissue-regen",
            name: "Tissue Engineering & Regeneration",
            icon: "🔬",
            description: "Stem cells, regenerative medicine, and cellular therapies",
            topics: [
                {
                    id: "insulin-regen",
                    title: "Low-Dose Insulin for Skin Regeneration/Wound Healing",
                    description: "Investigation of low-dose insulin effects on skin regeneration and wound healing processes.",
                    subtopics: ["Insulin Therapy", "Skin Regeneration", "Wound Healing"],
                    keywords: ["insulin", "skin regeneration", "wound healing"],
                    supervisors: ["Dra. Marta Guerra Rebollo", "Dra. Loli Molina Jiménez"]
                },
                {
                    id: "planarian",
                    title: "Planarian Stem Cell Culture Systems",
                    description: "Development of planarian stem cell culture systems for regeneration research.",
                    subtopics: ["Planarian Biology", "Stem Cell Culture", "Regeneration"],
                    keywords: ["planarian", "stem cells", "regeneration research"],
                    supervisors: ["Dra. Marta Guerra Rebollo"]
                },
                {
                    id: "tpi-myoblast",
                    title: "TPI Role in Myoblast Differentiation (DMD)",
                    description: "Study of triose phosphate isomerase (TPI) subcellular localization in the proliferation-differentiation balance of myoblasts with implications for Duchenne Muscular Dystrophy.",
                    subtopics: ["TPI Localization", "Myoblast Differentiation", "DMD", "Cell Fate"],
                    keywords: ["TPI", "myoblasts", "DMD", "cell differentiation"],
                    supervisors: ["Dra. Marta Guerra Rebollo", "Dr. Francesc Xavier Guix Ràfols"]
                }
            ]
        },
        {
            id: "disease",
            name: "Disease Mechanisms & Diagnostics",
            icon: "🩺",
            description: "Biomarkers, disease mechanisms, and diagnostic approaches",
            topics: [
                {
                    id: "ev-biomarkers",
                    title: "EVs as Biomarkers (Lafora, Alzheimer's)",
                    description: "Investigation of extracellular vesicles as diagnostic biomarkers for Lafora disease and Alzheimer's disease.",
                    subtopics: ["EV Biomarkers", "Lafora Disease", "Alzheimer's Diagnosis"],
                    keywords: ["extracellular vesicles", "biomarkers", "Lafora", "Alzheimer's"],
                    supervisors: ["Dr. Jordi Duran Castells", "Dr. Francesc Xavier Guix Ràfols"]
                },
                {
                    id: "insulin-emt",
                    title: "Insulin-induced EMT in Ovarian Cancer",
                    description: "Study of insulin-induced epithelial-mesenchymal transition mechanisms in ovarian cancer.",
                    subtopics: ["EMT", "Ovarian Cancer", "Insulin Signaling"],
                    keywords: ["EMT", "ovarian cancer", "insulin", "metastasis"],
                    supervisors: ["Dra. Marta Guerra Rebollo"]
                },
                {
                    id: "bone-properties",
                    title: "Comparison of Adult/Paediatric Bone Properties",
                    description: "Comparative analysis of adult and pediatric bone mechanical and material properties.",
                    subtopics: ["Bone Mechanics", "Pediatric vs Adult", "Material Properties"],
                    keywords: ["bone properties", "pediatric", "biomechanics"],
                    supervisors: ["Dra. Ana Cardoso de Sousa"]
                }
            ]
        },
        {
            id: "enzyme",
            name: "Enzyme Engineering & Modification",
            icon: "⚗️",
            description: "Biocatalysis, enzyme design, and protein engineering",
            topics: [
                {
                    id: "bio-glycosidases",
                    title: "Bio-orthogonal Glycosidases (Prodrug Therapies)",
                    description: "Development of bio-orthogonal glycosidases for prodrug activation therapies.",
                    subtopics: ["Glycosidases", "Prodrug Activation", "Bio-orthogonal Chemistry"],
                    keywords: ["glycosidases", "prodrug", "bio-orthogonal"],
                    supervisors: ["Dr. Antoni Planas Sauter", "Dra. Magda Faijes Simona"]
                },
                {
                    id: "pgn-deacetylases",
                    title: "PGN Deacetylases (Antimicrobial Targets)",
                    description: "Study of peptidoglycan deacetylases as potential antimicrobial targets.",
                    subtopics: ["PGN Deacetylases", "Antimicrobials", "Target Discovery"],
                    keywords: ["deacetylases", "antimicrobial", "peptidoglycan"],
                    supervisors: ["Dr. Antoni Planas Sauter", "Dr. Xevi Biarnés Fontal"]
                },
                {
                    id: "amylase-lafora",
                    title: "In-silico Amylase Engineering (Lafora Disease)",
                    description: "Computational engineering of amylases for Lafora disease therapeutic applications.",
                    subtopics: ["Amylase Engineering", "Lafora Disease", "In-silico Design"],
                    keywords: ["amylase", "Lafora", "computational design"],
                    supervisors: ["Dr. Jordi Duran Castells", "Dr. Xevi Biarnés Fontal"]
                },
                {
                    id: "hmo-evolution",
                    title: "HMO Production (Directed Evolution)",
                    description: "Directed evolution approaches for human milk oligosaccharide production.",
                    subtopics: ["HMO", "Directed Evolution", "Enzyme Engineering"],
                    keywords: ["HMO", "directed evolution", "oligosaccharides"],
                    supervisors: ["Dra. Magda Faijes Simona", "Dr. Xevi Biarnés Fontal"]
                }
            ]
        },
        {
            id: "biotech",
            name: "Biotechnology & Bioprocesses",
            icon: "🧪",
            description: "Cell factories, bioprocess engineering, and synthetic biology",
            topics: [
                {
                    id: "microalgae",
                    title: "Microalgae Engineering (Rhamnolipids, Optogenetics)",
                    description: "Engineering microalgae for sustainable production of rhamnolipid biosurfactants using optogenetic tools.",
                    subtopics: ["Microalgae", "Rhamnolipids", "Optogenetics", "Synthetic Biology"],
                    keywords: ["microalgae", "rhamnolipids", "optogenetics", "biosurfactants"],
                    supervisors: ["Dr. Pau Leivar Rico", "Dra. Elena Monte", "Dr. Marçal Gallemí Rovira"]
                },
                {
                    id: "plant-stem",
                    title: "Plant Stem Cells (Cosmetic Bioactive compounds)",
                    description: "Development of plant stem cell cultures for production of cosmetic bioactive compounds.",
                    subtopics: ["Plant Stem Cells", "Cosmetics", "Bioactive Compounds"],
                    keywords: ["plant stem cells", "cosmetics", "bioactives"],
                    supervisors: ["Dra. Margalida Artigues Cladera", "Dr. Martí Lecina Veciana"]
                },
                {
                    id: "sev-production",
                    title: "Large-Scale sEV Production (HEK293)",
                    description: "Bioprocess scale-up for large-scale production of small extracellular vesicles using HEK293 cells.",
                    subtopics: ["sEV Production", "HEK293", "Bioprocess Scale-up"],
                    keywords: ["extracellular vesicles", "HEK293", "bioprocess", "scale-up"],
                    supervisors: ["Dr. Martí Lecina Veciana"]
                },
                {
                    id: "yeast-phyto",
                    title: "Engineered Yeast for Phytoceramide Production",
                    description: "Metabolic engineering of yeast for production of phytoceramides.",
                    subtopics: ["Yeast Engineering", "Phytoceramides", "Metabolic Engineering"],
                    keywords: ["yeast", "phytoceramides", "metabolic engineering"],
                    supervisors: ["Dra. Norma Fàbregas Vallvé", "Dr. Xevi Biarnés Fontal"]
                },
                {
                    id: "ecoli-secretory",
                    title: "Secretory Pathway Engineering (E. coli)",
                    description: "Engineering of E. coli secretory pathways for improved protein production.",
                    subtopics: ["E. coli Engineering", "Secretory Pathways", "Protein Production"],
                    keywords: ["E. coli", "secretory pathway", "protein engineering"],
                    supervisors: ["Dr. Marc Carnicer Heras", "Dr. Antoni Planas Sauter"]
                }
            ]
        },
        {
            id: "micro-genomics",
            name: "Microbiology & Genomics",
            icon: "🦠",
            description: "Microorganisms, sequencing, and antimicrobial research",
            topics: [
                {
                    id: "nanopore",
                    title: "Nanopore Sequencing (Antibiotic Resistance Genes, Genomes)",
                    description: "Application of nanopore sequencing for detecting antibiotic resistance genes and genome analysis.",
                    subtopics: ["Nanopore Sequencing", "Antibiotic Resistance", "Genomics"],
                    keywords: ["nanopore", "sequencing", "antibiotic resistance", "genomics"],
                    supervisors: ["Dr. Cristian Gómez Canela"]
                },
                {
                    id: "coffee-microorg",
                    title: "Beneficial Microorganisms in Coffee Plants (Guatemala)",
                    description: "Study of beneficial microorganisms associated with coffee plants in Guatemala.",
                    subtopics: ["Plant Microbiome", "Coffee Plants", "Beneficial Microbes"],
                    keywords: ["microorganisms", "coffee", "plant health", "Guatemala"],
                    supervisors: ["Dra. Montserrat Agut Bonsfills"]
                },
                {
                    id: "biocides",
                    title: "Natural Biocides/Essential Oils (Antimicrobial activity)",
                    description: "Investigation of natural biocides and essential oils for antimicrobial applications.",
                    subtopics: ["Essential Oils", "Antimicrobials", "Natural Products"],
                    keywords: ["biocides", "essential oils", "antimicrobial"],
                    supervisors: ["Dra. Montserrat Agut Bonsfills"]
                }
            ]
        },
        {
            id: "ai",
            name: "AI/ML in Biosciences",
            icon: "🤖",
            description: "Machine learning, computational biology, and data analytics",
            topics: [
                {
                    id: "ml-nanoparticle",
                    title: "ML Prediction for Nanoparticle Uptake/ASOs",
                    description: "Development of machine learning models to predict nanoparticle uptake and ASO efficacy based on cellular and material properties.",
                    subtopics: ["Machine Learning", "Nanoparticle Prediction", "ASO Optimization"],
                    keywords: ["machine learning", "nanoparticles", "prediction", "ASO"],
                    supervisors: ["Dra. Núria Oliva Jorge", "Dra. Cristina Fornaguera Puigvert", "Dr. Michael Bruyns-Haylett"]
                },
                {
                    id: "bindscan",
                    title: "In-silico Protein Engineering (BindScan)",
                    description: "Computational protein engineering using BindScan for improved protein design.",
                    subtopics: ["Protein Engineering", "BindScan", "Computational Design"],
                    keywords: ["protein engineering", "BindScan", "computational biology"],
                    supervisors: ["Dr. Xevi Biarnés Fontal", "Dr. Giovanni Dalmasso"]
                },
                {
                    id: "glycan-modeling",
                    title: "Glycan/CAZyme Recognition Site Modeling",
                    description: "Computational modeling of glycan recognition sites and CAZyme structures.",
                    subtopics: ["Glycan Modeling", "CAZymes", "Structural Bioinformatics"],
                    keywords: ["glycans", "CAZymes", "molecular modeling"],
                    supervisors: ["Dr. Xevi Biarnés Fontal", "Dr. Antoni Planas Sauter"]
                },
                {
                    id: "ai-drug",
                    title: "AI in Drug Development & Personalized Treatment",
                    description: "Application of artificial intelligence for drug development and personalized medicine approaches.",
                    subtopics: ["AI Drug Development", "Personalized Medicine", "Drug Design"],
                    keywords: ["AI", "drug development", "personalized medicine"],
                    supervisors: ["Dr. Roger Estrada Tejedor", "Dr. Ricardo A. M. Serafim"]
                },
                {
                    id: "digital-twins",
                    title: "Digital Twins & Robotic Simulation",
                    description: "Development of digital twins and robotic simulations for industrial applications.",
                    subtopics: ["Digital Twins", "Robotics", "Simulation"],
                    keywords: ["digital twins", "robotics", "simulation", "Industry 4.0"],
                    supervisors: ["Dr. Horacio Rostro González", "Dr. Andrés García Granada"]
                },
                {
                    id: "topology-opt",
                    title: "Topology Optimization (AI-based Alveolar Graft)",
                    description: "AI-based topology optimization for alveolar bone graft design.",
                    subtopics: ["Topology Optimization", "Bone Grafts", "AI Design"],
                    keywords: ["topology optimization", "AI", "bone graft", "design"],
                    supervisors: ["Dr. Giovanni Gómez Gras"]
                }
            ]
        },
        {
            id: "computational",
            name: "Computational Methods & Data Analytics",
            icon: "💻",
            description: "Simulations, modeling, and data-driven approaches",
            topics: [
                {
                    id: "industrial-modeling",
                    title: "AI Multi-Agent Systems & Vision AI (Industrial Applications)",
                    description: "Development of multi-agent AI systems and computer vision for industrial applications.",
                    subtopics: ["Multi-Agent Systems", "Vision AI", "Industrial Automation"],
                    keywords: ["AI", "multi-agent", "vision", "industrial"],
                    supervisors: ["Dr. Horacio Rostro González"]
                },
                {
                    id: "biomass-sim",
                    title: "Simulation of Biomass Gasification/Refrigeration Systems",
                    description: "Computer simulation and optimization of biomass gasification and refrigeration systems.",
                    subtopics: ["Biomass Gasification", "Refrigeration", "Process Simulation"],
                    keywords: ["biomass", "gasification", "simulation", "refrigeration"],
                    supervisors: ["Dr. Javier Fernández García", "Dr. Rafael González Olmos"]
                },
                {
                    id: "bioinformatics",
                    title: "Structural Bioinformatics & Data Mining (CAZymes)",
                    description: "Application of structural bioinformatics and data mining for CAZyme research.",
                    subtopics: ["Structural Bioinformatics", "Data Mining", "CAZymes"],
                    keywords: ["bioinformatics", "data mining", "CAZymes", "structure"],
                    supervisors: ["Dr. Xevi Biarnés Fontal"]
                },
                {
                    id: "hci-emotion",
                    title: "Multimodal HCI & Emotion Recognition (Physiological Signals)",
                    description: "Development of multimodal human-computer interfaces with emotion recognition from physiological signals.",
                    subtopics: ["HCI", "Emotion Recognition", "Physiological Signals"],
                    keywords: ["HCI", "emotion recognition", "physiological", "multimodal"],
                    supervisors: ["Dr. Horacio Rostro González"]
                },
                {
                    id: "digital-ethics",
                    title: "Digital Ethics (Smartphone Adoption in Adolescents)",
                    description: "Study of digital ethics related to smartphone adoption patterns in adolescents.",
                    subtopics: ["Digital Ethics", "Smartphone Adoption", "Adolescents"],
                    keywords: ["digital ethics", "smartphone", "adolescents", "technology"],
                    supervisors: ["Dra. Meritxell Sáez Cornellana", "Dr. Jordi Cuadros Margarit"]
                },
                {
                    id: "pinns",
                    title: "Physics-Informed Neural Networks (PINNs) for ODE/PDE",
                    description: "Application of physics-informed neural networks for solving ordinary and partial differential equations.",
                    subtopics: ["PINNs", "Neural Networks", "ODE/PDE", "Scientific Computing"],
                    keywords: ["PINNs", "neural networks", "differential equations", "physics-informed"],
                    supervisors: ["Dr. Jordi Cuadros Margarit"]
                }
            ]
        },
        {
            id: "pharmacy",
            name: "Pharmaceutical Sciences & Clinical Practice",
            icon: "💊",
            description: "Clinical pharmacy, drug problems, and patient care",
            topics: [
                {
                    id: "pharma-interventions",
                    title: "Pharmaceutical Interventions (Internal Medicine, Mental Health)",
                    description: "Study of pharmaceutical interventions in internal medicine and mental health settings.",
                    subtopics: ["Internal Medicine", "Mental Health", "Drug Interventions"],
                    keywords: ["pharmaceutical interventions", "internal medicine", "mental health"],
                    supervisors: ["Dra. Maria Auset Vallejo"]
                },
                {
                    id: "prm",
                    title: "Drug Related Problems (PRM) & Pharmacotherapeutic Follow-up",
                    description: "Analysis of drug-related problems and pharmacotherapeutic follow-up in clinical settings.",
                    subtopics: ["Drug Problems", "Pharmacotherapy", "Clinical Follow-up"],
                    keywords: ["drug problems", "pharmacotherapy", "patient care"],
                    supervisors: ["Dra. Maria Auset Vallejo"]
                },
                {
                    id: "medication-adapt",
                    title: "Medication Adaptation (Dysphagia, Gestation)",
                    description: "Study of medication adaptation for patients with dysphagia and during gestation.",
                    subtopics: ["Dysphagia", "Gestation", "Medication Adaptation"],
                    keywords: ["medication", "dysphagia", "gestation", "adaptation"],
                    supervisors: ["Dra. Judith Báguena Polo"]
                },
                {
                    id: "patient-perception",
                    title: "Patient Perception of Professional Services",
                    description: "Investigation of patient perceptions regarding pharmaceutical professional services.",
                    subtopics: ["Patient Perception", "Professional Services", "Pharmacy Practice"],
                    keywords: ["patient perception", "pharmacy services", "healthcare"],
                    supervisors: ["Dra. Maria Auset Vallejo"]
                },
                {
                    id: "health-outcomes",
                    title: "Evaluation of Health Outcomes (Onco-hematology, Cancer)",
                    description: "Evaluation of health outcomes in onco-hematology and cancer patients.",
                    subtopics: ["Health Outcomes", "Onco-hematology", "Cancer Care"],
                    keywords: ["health outcomes", "oncology", "hematology", "cancer"],
                    supervisors: ["Dra. Maria Auset Vallejo"]
                },
                {
                    id: "sex-gender",
                    title: "Evaluation of Sex/Gender Perspective in Research (Hipatia Checklist)",
                    description: "Application of the Hipatia checklist for evaluating sex/gender perspectives in research.",
                    subtopics: ["Sex/Gender Research", "Hipatia Checklist", "Research Ethics"],
                    keywords: ["sex", "gender", "research perspective", "Hipatia"],
                    supervisors: ["Dra. Laura Fernández Ruano", "Dr. Jordi Cuadros Margarit"]
                },
                {
                    id: "objection-pharmacy",
                    title: "Objection of Conscience in Pharmacy",
                    description: "Study of conscientious objection issues in pharmacy practice.",
                    subtopics: ["Conscientious Objection", "Pharmacy Ethics", "Professional Practice"],
                    keywords: ["conscience", "ethics", "pharmacy practice"],
                    supervisors: ["Dra. Maria Auset Vallejo"]
                }
            ]
        },
        {
            id: "nutrition",
            name: "Nutrition & Health Evaluation",
            icon: "🥗",
            description: "Food science, nutrition labeling, and health impacts",
            topics: [
                {
                    id: "vegetal-microbiota",
                    title: "Impact of Vegetal Drinks on Microbiota",
                    description: "Study of how plant-based beverages affect gut microbiota composition.",
                    subtopics: ["Plant-based Drinks", "Microbiota", "Gut Health"],
                    keywords: ["vegetal drinks", "microbiota", "gut health"],
                    supervisors: ["Dra. Judith Báguena Polo"]
                },
                {
                    id: "foodborne-dementia",
                    title: "Relation between Foodborne diseases and Dementia",
                    description: "Investigation of potential links between foodborne diseases and dementia development.",
                    subtopics: ["Foodborne Disease", "Dementia", "Epidemiology"],
                    keywords: ["foodborne", "dementia", "disease correlation"],
                    supervisors: ["Dra. Judith Báguena Polo"]
                },
                {
                    id: "nutriscore",
                    title: "Nutriscore vs Chilean System (Labeling)",
                    description: "Comparative analysis of Nutriscore and Chilean food labeling systems.",
                    subtopics: ["Nutriscore", "Chilean System", "Food Labeling"],
                    keywords: ["nutriscore", "food labeling", "nutrition"],
                    supervisors: ["Dra. Judith Báguena Polo"]
                },
                {
                    id: "meat-cancer",
                    title: "Red/Processed Meats and Colorectal Cancer Etiology",
                    description: "Study of the relationship between red and processed meat consumption and colorectal cancer.",
                    subtopics: ["Red Meat", "Colorectal Cancer", "Diet and Cancer"],
                    keywords: ["meat", "colorectal cancer", "diet", "etiology"],
                    supervisors: ["Dra. Judith Báguena Polo"]
                }
            ]
        },
        {
            id: "medicinal-chem",
            name: "Medicinal & Organic Chemistry",
            icon: "⚗️",
            description: "Drug synthesis, kinase inhibitors, and novel compounds",
            topics: [
                {
                    id: "kinase-inhibitors",
                    title: "Molecular Design of Kinase Inhibitors (Scaffold Hopping, Covalent)",
                    description: "Design of novel kinase inhibitors using scaffold hopping and covalent approaches.",
                    subtopics: ["Kinase Inhibitors", "Scaffold Hopping", "Covalent Drugs"],
                    keywords: ["kinase inhibitors", "scaffold hopping", "drug design"],
                    supervisors: ["Dr. Roger Estrada Tejedor", "Dr. Ricardo A. M. Serafim"]
                },
                {
                    id: "psychedelic-synth",
                    title: "Synthesis of Novel Psychedelic/Antimicrobial Compounds",
                    description: "Synthesis of novel compounds with psychedelic and antimicrobial properties.",
                    subtopics: ["Psychedelics", "Antimicrobials", "Organic Synthesis"],
                    keywords: ["psychedelics", "antimicrobials", "synthesis"],
                    supervisors: ["Dr. David Sánchez García"]
                },
                {
                    id: "lymphoma-compounds",
                    title: "Compounds for Lymphoma Treatment (Dual Inhibitors, PROTAC precursors)",
                    description: "Development of dual inhibitors and PROTAC precursors for lymphoma treatment.",
                    subtopics: ["Lymphoma", "Dual Inhibitors", "PROTACs"],
                    keywords: ["lymphoma", "dual inhibitors", "PROTAC", "cancer"],
                    supervisors: ["Dr. Roger Estrada Tejedor"]
                },
                {
                    id: "synthetic-methods",
                    title: "New Synthetic Methodologies (Ru/Pd Catalysis, C-H Functionalization)",
                    description: "Development of new synthetic methodologies using ruthenium/palladium catalysis and C-H functionalization.",
                    subtopics: ["Catalysis", "C-H Activation", "Synthetic Methods"],
                    keywords: ["catalysis", "C-H functionalization", "Ru", "Pd"],
                    supervisors: ["Dra. Ana Belén Cuenca González", "Dr. Andrés Seoane Fernández"]
                }
            ]
        },
        {
            id: "chem-synth",
            name: "Chemical Synthesis & Drug Development",
            icon: "🔬",
            description: "Flow chemistry, formulation, and process chemistry",
            topics: [
                {
                    id: "flow-chem",
                    title: "Flow Chemistry (Electrochemical, Reaction Optimization, OM-PBAE Synthesis)",
                    description: "Application of flow chemistry for electrochemical processes, reaction optimization, and OM-PBAE synthesis.",
                    subtopics: ["Flow Chemistry", "Electrochemistry", "OM-PBAE"],
                    keywords: ["flow chemistry", "electrochemical", "optimization"],
                    supervisors: ["Dra. Ana Belén Cuenca González"]
                },
                {
                    id: "asymmetric-liposomes",
                    title: "Asymmetric Liposomes by Reversible Reactions",
                    description: "Development of asymmetric liposomes using reversible reaction strategies.",
                    subtopics: ["Asymmetric Liposomes", "Reversible Reactions", "Drug Delivery"],
                    keywords: ["liposomes", "asymmetric", "formulation"],
                    supervisors: ["Dra. Cristina Fornaguera Puigvert"]
                },
                {
                    id: "polymorphism",
                    title: "Polymorphism of APIs and Excipient Compatibility",
                    description: "Study of API polymorphism and excipient compatibility for pharmaceutical formulation.",
                    subtopics: ["Polymorphism", "APIs", "Excipients"],
                    keywords: ["polymorphism", "API", "excipient", "formulation"],
                    supervisors: ["Dra. Núria Llaverias Baqués"]
                },
                {
                    id: "solid-perfume",
                    title: "Development of Sustainable Solid Perfume",
                    description: "Development of sustainable solid perfume formulations.",
                    subtopics: ["Solid Perfume", "Sustainability", "Cosmetics"],
                    keywords: ["perfume", "sustainable", "cosmetics"],
                    supervisors: ["Dra. Núria Llaverias Baqués"]
                }
            ]
        },
        {
            id: "materials",
            name: "Advanced Materials Synthesis",
            icon: "💎",
            description: "Novel materials, optoelectronics, and functional compounds",
            topics: [
                {
                    id: "bn-arenes",
                    title: "BN-doped Arenes (Optoelectronic materials)",
                    description: "Synthesis and characterization of BN-doped arenes for optoelectronic applications.",
                    subtopics: ["BN-doped Arenes", "Optoelectronics", "Materials"],
                    keywords: ["BN-doped", "arenes", "optoelectronics"],
                    supervisors: ["Dr. David Sánchez García"]
                },
                {
                    id: "metal-oxalates",
                    title: "Synthesis/Characterization of Metal Oxalates/Iron Oxides",
                    description: "Synthesis and characterization of metal oxalates and iron oxide materials.",
                    subtopics: ["Metal Oxalates", "Iron Oxides", "Materials Characterization"],
                    keywords: ["metal oxalates", "iron oxides", "synthesis"],
                    supervisors: ["Dr. Manuel David Abad Roldán"]
                }
            ]
        },
        {
            id: "sustainability",
            name: "Sustainability & Environmental Technology",
            icon: "🌱",
            description: "CO2 capture, waste valorization, and green technologies",
            topics: [
                {
                    id: "dac",
                    title: "Direct Air Capture (DAC) and In-situ Use",
                    description: "Development of direct air capture technology for CO2 capture and its in-situ utilization in agricultural applications.",
                    subtopics: ["DAC", "CO2 Capture", "Agricultural Applications"],
                    keywords: ["direct air capture", "CO2", "sustainability"],
                    supervisors: ["Dr. Rafael González Olmos"]
                },
                {
                    id: "co2-methanol",
                    title: "CO2 Conversion to Methanol (DBD Plasma Reactor)",
                    description: "Conversion of CO2 to methanol using dielectric barrier discharge plasma reactors.",
                    subtopics: ["CO2 Conversion", "Methanol", "Plasma Technology"],
                    keywords: ["CO2", "methanol", "plasma", "conversion"],
                    supervisors: ["Dr. Oriol Pou Ibar", "Dr. Rafael González Olmos"]
                },
                {
                    id: "co2-simulation",
                    title: "Simulation/Optimization of CO2 Capture Plants",
                    description: "Computer simulation and optimization of CO2 capture plant operations.",
                    subtopics: ["CO2 Capture", "Process Simulation", "Optimization"],
                    keywords: ["CO2 capture", "simulation", "optimization"],
                    supervisors: ["Dr. Raul Calvo Serrano", "Dr. Daniel Vazquez Vazquez"]
                },
                {
                    id: "iqs-decarbonization",
                    title: "IQS Decarbonization/Photovoltaic Capacity",
                    description: "Analysis of IQS campus decarbonization strategies and photovoltaic capacity.",
                    subtopics: ["Decarbonization", "Photovoltaics", "Campus Sustainability"],
                    keywords: ["decarbonization", "photovoltaic", "IQS", "sustainability"],
                    supervisors: ["Dr. Raul Calvo Serrano"]
                },
                {
                    id: "plastics-pyrolysis",
                    title: "Pyrolysis of Plastics for Fuels",
                    description: "Study of plastic waste pyrolysis for fuel production.",
                    subtopics: ["Pyrolysis", "Plastic Waste", "Fuel Production"],
                    keywords: ["pyrolysis", "plastics", "fuels", "waste"],
                    supervisors: ["Dr. Javier Fernández García"]
                },
                {
                    id: "elastomers",
                    title: "Revalorization of Elastomers in Recycled Thermoplastics",
                    description: "Incorporation of elastomers in recycled thermoplastics for circular economy applications.",
                    subtopics: ["Elastomers", "Recycled Plastics", "Circular Economy"],
                    keywords: ["elastomers", "recycling", "thermoplastics"],
                    supervisors: ["Dra. Núria Agulló Chaler"]
                },
                {
                    id: "biomethane",
                    title: "Biomethane Production (Dual Anaerobic Reactors)",
                    description: "Production of biomethane using dual anaerobic reactor systems.",
                    subtopics: ["Biomethane", "Anaerobic Digestion", "Biogas"],
                    keywords: ["biomethane", "anaerobic", "biogas"],
                    supervisors: ["Dr. Yeray Asensio Ramírez"]
                },
                {
                    id: "circular-lab",
                    title: "Circular Economy in Teaching Laboratory (Reutilization)",
                    description: "Implementation of circular economy principles in teaching laboratories.",
                    subtopics: ["Circular Economy", "Teaching Labs", "Waste Reduction"],
                    keywords: ["circular economy", "laboratory", "education"],
                    supervisors: ["Dr. Jordi Cuadros Margarit"]
                }
            ]
        },
        {
            id: "pollution",
            name: "Pollution Monitoring & Treatment",
            icon: "🔍",
            description: "Environmental monitoring, PFAS, and water treatment",
            topics: [
                {
                    id: "pfas",
                    title: "PFAS Mineralization (Electrochemical Strategies)",
                    description: "Development of electrochemical strategies for PFAS mineralization and treatment.",
                    subtopics: ["PFAS", "Electrochemistry", "Water Treatment"],
                    keywords: ["PFAS", "mineralization", "electrochemical"],
                    supervisors: ["Dr. Yeray Asensio Ramírez"]
                },
                {
                    id: "cyanotoxins",
                    title: "Cyanotoxins Monitoring (HPLC-MS/MS, Drones)",
                    description: "Development of cyanotoxin monitoring methods using HPLC-MS/MS and drone technology.",
                    subtopics: ["Cyanotoxins", "HPLC-MS/MS", "Drone Monitoring"],
                    keywords: ["cyanotoxins", "monitoring", "drones", "HPLC"],
                    supervisors: ["Dr. Xavier Ortiz Almirall"]
                },
                {
                    id: "microplastics",
                    title: "Microplastics and Pharmaceuticals Risk Assessment (Rivers)",
                    description: "Risk assessment of microplastics and pharmaceutical contamination in river systems.",
                    subtopics: ["Microplastics", "Pharmaceuticals", "River Contamination"],
                    keywords: ["microplastics", "pharmaceuticals", "risk assessment"],
                    supervisors: ["Dr. Cristian Gómez Canela"]
                },
                {
                    id: "ai-lca",
                    title: "AI/ML for Emission Factor Prediction/LCA Uncertainty",
                    description: "Application of AI/ML for predicting emission factors and addressing LCA uncertainty.",
                    subtopics: ["AI/ML", "Emission Factors", "LCA"],
                    keywords: ["AI", "emissions", "LCA", "prediction"],
                    supervisors: ["Dr. Raul Calvo Serrano"]
                }
            ]
        },
        {
            id: "process-eng",
            name: "Process & Safety Engineering",
            icon: "⚙️",
            description: "Process design, optimization, and safety analysis",
            topics: [
                {
                    id: "refrigeration-sim",
                    title: "Refrigeration Systems Simulation/Optimization",
                    description: "Simulation and optimization of industrial refrigeration systems.",
                    subtopics: ["Refrigeration", "Process Simulation", "Optimization"],
                    keywords: ["refrigeration", "simulation", "optimization"],
                    supervisors: ["Dr. Javier Fernández García"]
                },
                {
                    id: "styrene-plant",
                    title: "Design of Styrene/Absorption Plants (Heat Integration)",
                    description: "Design of styrene and absorption plants with heat integration strategies.",
                    subtopics: ["Styrene Plant", "Absorption", "Heat Integration"],
                    keywords: ["styrene", "plant design", "heat integration"],
                    supervisors: ["Dr. Daniel Vazquez Vazquez"]
                },
                {
                    id: "risk-green-lab",
                    title: "Risk Assessment/Green Lab Certification",
                    description: "Risk assessment methodologies and green laboratory certification processes.",
                    subtopics: ["Risk Assessment", "Green Lab", "Safety"],
                    keywords: ["risk assessment", "green lab", "certification"],
                    supervisors: ["Dr. Raul Calvo Serrano"]
                },
                {
                    id: "absorption-control",
                    title: "Modelatge and Control of Absorption Column Level",
                    description: "Modeling and control strategies for absorption column level management.",
                    subtopics: ["Absorption Column", "Process Control", "Modeling"],
                    keywords: ["absorption", "control", "modeling"],
                    supervisors: ["Dr. Daniel Vazquez Vazquez"]
                }
            ]
        },
        {
            id: "industrial-eng",
            name: "Industrial & Physical Engineering",
            icon: "🏭",
            description: "Mechanical design, biomechanics, and additive manufacturing",
            topics: [
                {
                    id: "reliability",
                    title: "Reliability Analysis of Simple Structures",
                    description: "Probabilistic failure analysis of simple structures considering uncertainty in loading and material properties.",
                    subtopics: ["Reliability Analysis", "Structural Analysis", "Monte Carlo"],
                    keywords: ["reliability", "structures", "probability"],
                    supervisors: ["Dra. Ibuki Kusano"]
                },
                {
                    id: "biomechanics",
                    title: "Biomechanics (Neck Joint, Cycling Simulation, Pelvic Coil)",
                    description: "Biomechanical studies including neck joint analysis, cycling simulations, and pelvic coil deployment.",
                    subtopics: ["Biomechanics", "Cycling", "Pelvic Veins"],
                    keywords: ["biomechanics", "neck joint", "cycling", "pelvic coil"],
                    supervisors: ["Dra. Ana Cardoso de Sousa", "Dr. Joaquín Menacho Solà-Morales"]
                },
                {
                    id: "additive-mfg",
                    title: "Additive Manufacturing Optimization (Bio-inspired Structures)",
                    description: "Optimization of additive manufacturing processes for bio-inspired structural designs.",
                    subtopics: ["Additive Manufacturing", "Bio-inspired", "Optimization"],
                    keywords: ["additive manufacturing", "3D printing", "bio-inspired"],
                    supervisors: ["Dr. Giovanni Gómez Gras"]
                },
                {
                    id: "offshore-wind",
                    title: "End of Design Life Challenges (Offshore Wind Farms)",
                    description: "Study of end-of-life challenges and sustainable decommissioning strategies for offshore wind farms.",
                    subtopics: ["Offshore Wind", "Decommissioning", "Sustainability"],
                    keywords: ["offshore wind", "decommissioning", "end of life"],
                    supervisors: ["Dra. Ibuki Kusano"]
                }
            ]
        },
        {
            id: "analytical",
            name: "Analytical & Physical Methods",
            icon: "📊",
            description: "Sensors, spectroscopy, and analytical techniques",
            topics: [
                {
                    id: "photodynamic",
                    title: "Photodynamic Therapy (Controlled-Oxygen Microscopy, Metallodrug Uptake)",
                    description: "Development of photodynamic therapy approaches with controlled-oxygen microscopy and metallodrug uptake studies.",
                    subtopics: ["Photodynamic Therapy", "Microscopy", "Metallodrugs"],
                    keywords: ["photodynamic therapy", "oxygen", "metallodrugs"],
                    supervisors: ["Dr. Roger Bresolí Obach", "Dr. Santi Nonell Marrugat"]
                },
                {
                    id: "iter-sensors",
                    title: "ITER Fusion Project Sensors (Hydrogen/Oxygen/Lithium Conductors)",
                    description: "Development of sensors for the ITER fusion project including hydrogen, oxygen, and lithium conductors.",
                    subtopics: ["ITER", "Fusion", "Sensors", "Conductors"],
                    keywords: ["ITER", "fusion", "sensors", "hydrogen"],
                    supervisors: ["Dr. Sergi Colominas Fuster", "Dr. Jordi Abellà Iglesias"]
                },
                {
                    id: "electrochemical-sensors",
                    title: "Development of Electrochemical/Bio-electrochemical Sensors",
                    description: "Development of electrochemical and bio-electrochemical sensor platforms.",
                    subtopics: ["Electrochemical Sensors", "Biosensors", "Detection"],
                    keywords: ["electrochemical", "biosensors", "detection"],
                    supervisors: ["Dr. Sergi Colominas Fuster"]
                },
                {
                    id: "calorimetry",
                    title: "Calorimetry and Reaction Kinetics",
                    description: "Application of calorimetric methods for studying reaction kinetics.",
                    subtopics: ["Calorimetry", "Reaction Kinetics", "Thermodynamics"],
                    keywords: ["calorimetry", "kinetics", "thermodynamics"],
                    supervisors: ["Dr. Eduard Serra Hosta"]
                }
            ]
        }
    ],

    // Complete lecturer database
    lecturers: [
        { name: "Dr. Andrés García Granada", department: "Industrial Engineering", topics: 3 },
        { name: "Dr. Andrés Seoane Fernández", department: "Chemistry", topics: 2 },
        { name: "Dr. Antoni Planas Sauter", department: "Bioengineering", topics: 8 },
        { name: "Dr. Antonio Gabino Salazar Martín", department: "Engineering", topics: 1 },
        { name: "Dr. Benjamí Oller Salvia", department: "Bioengineering", topics: 2 },
        { name: "Dr. Carles Bofill Bonet", department: "Bioengineering", topics: 4 },
        { name: "Dr. Carlos Semino", department: "Bioengineering", topics: 2 },
        { name: "Dr. Cristian Gómez Canela", department: "Analytical Chemistry", topics: 4 },
        { name: "Dr. Daniel Vazquez Vazquez", department: "Chemical Engineering", topics: 4 },
        { name: "Dr. David Sánchez García", department: "Chemistry", topics: 2 },
        { name: "Dr. Eduard Serra Hosta", department: "Analytical Chemistry", topics: 2 },
        { name: "Dr. Francesc Xavier Guix Ràfols", department: "Bioengineering", topics: 5 },
        { name: "Dr. Giovanni Dalmasso", department: "Bioengineering", topics: 3 },
        { name: "Dr. Giovanni Gómez Gras", department: "Industrial Engineering", topics: 3 },
        { name: "Dr. Guillermo Reyes Pozo", department: "Engineering", topics: 1 },
        { name: "Dr. Horacio Rostro González", department: "Industrial Engineering", topics: 6 },
        { name: "Dr. Javier Fernández García", department: "Chemical Engineering", topics: 3 },
        { name: "Dr. Joaquín Menacho Solà-Morales", department: "Industrial Engineering", topics: 5 },
        { name: "Dr. Jordi Abellà Iglesias", department: "Analytical Chemistry", topics: 2 },
        { name: "Dr. Jordi Cuadros Margarit", department: "Chemistry", topics: 6 },
        { name: "Dr. Jordi Duran Castells", department: "Bioengineering", topics: 3 },
        { name: "Dr. Jordi Díaz Ferrero", department: "Analytical Chemistry", topics: 1 },
        { name: "Dr. Jordi Martorell López", department: "Engineering", topics: 1 },
        { name: "Dr. Josep M. Puigoriol Forcada", department: "Industrial Engineering", topics: 3 },
        { name: "Dr. Manuel David Abad Roldán", department: "Materials", topics: 1 },
        { name: "Dr. Marc Carnicer Heras", department: "Bioengineering", topics: 4 },
        { name: "Dr. Marco Antonio Pérez Martínez", department: "Engineering", topics: 1 },
        { name: "Dr. Marçal Gallemí Rovira", department: "Bioengineering", topics: 2 },
        { name: "Dr. Martí Lecina Veciana", department: "Bioengineering", topics: 6 },
        { name: "Dr. Michael Bruyns-Haylett", department: "Bioengineering", topics: 3 },
        { name: "Dr. Oriol Pou Ibar", department: "Chemical Engineering", topics: 4 },
        { name: "Dr. Pau Leivar Rico", department: "Bioengineering", topics: 5 },
        { name: "Dr. Pere Palacín Farré", department: "Chemistry", topics: 1 },
        { name: "Dr. Rafael González Olmos", department: "Chemical Engineering", topics: 5 },
        { name: "Dr. Raimon Puig de la Bellacasa Cazorla", department: "Chemistry", topics: 2 },
        { name: "Dr. Raul Calvo Serrano", department: "Chemical Engineering", topics: 5 },
        { name: "Dr. Ricardo A. M. Serafim", department: "Chemistry", topics: 2 },
        { name: "Dr. Robert Texidó Bartés", department: "Bioengineering", topics: 5 },
        { name: "Dr. Roger Bresolí Obach", department: "Chemistry", topics: 4 },
        { name: "Dr. Roger Estrada Tejedor", department: "Chemistry", topics: 4 },
        { name: "Dr. Santi Nonell Marrugat", department: "Chemistry", topics: 4 },
        { name: "Dr. Sauro Yagüe Yagüe", department: "Industrial Engineering", topics: 4 },
        { name: "Dr. Sergi Colominas Fuster", department: "Analytical Chemistry", topics: 4 },
        { name: "Dr. Sergi Novell", department: "Bioengineering", topics: 2 },
        { name: "Dr. Xavier Berzosa Rodríguez", department: "Chemistry", topics: 4 },
        { name: "Dr. Xavier Biarnés Fontal", department: "Bioengineering", topics: 10 },
        { name: "Dr. Xavier Casanovas Combalia", department: "Engineering", topics: 1 },
        { name: "Dr. Xavier Ortiz Almirall", department: "Analytical Chemistry", topics: 4 },
        { name: "Dr. Yeray Asensio Ramírez", department: "Chemical Engineering", topics: 4 },
        { name: "Dra. Ana Belén Cuenca González", department: "Chemistry", topics: 3 },
        { name: "Dra. Ana Cardoso de Sousa", department: "Industrial Engineering", topics: 4 },
        { name: "Dra. Ana Cuartero Albesa", department: "Analytical Chemistry", topics: 1 },
        { name: "Dra. Ariadna Verdaguer Ferrer", department: "Chemistry", topics: 1 },
        { name: "Dra. Cristina Díaz Perlas", department: "Chemistry", topics: 1 },
        { name: "Dra. Cristina Fornaguera Puigvert", department: "Bioengineering", topics: 6 },
        { name: "Dra. Elena Monte", department: "Bioengineering", topics: 2 },
        { name: "Dra. Gloria Nieva Esteve", department: "Materials", topics: 2 },
        { name: "Dra. Ibuki Kusano", department: "Industrial Engineering", topics: 5 },
        { name: "Dra. Jennifer Fernandez-Alarcon", department: "Bioengineering", topics: 1 },
        { name: "Dra. Judith Báguena Polo", department: "Pharmacy", topics: 5 },
        { name: "Dra. Laura Fernández Ruano", department: "Chemistry", topics: 2 },
        { name: "Dra. Loli Molina Jiménez", department: "Bioengineering", topics: 4 },
        { name: "Dra. Magda Faijes Simona", department: "Bioengineering", topics: 6 },
        { name: "Dra. Margalida Artigues Cladera", department: "Bioengineering", topics: 5 },
        { name: "Dra. Maria Auset Vallejo", department: "Pharmacy", topics: 5 },
        { name: "Dra. Marta Guerra Rebollo", department: "Bioengineering", topics: 7 },
        { name: "Dra. Meritxell Sáez Cornellana", department: "Chemistry", topics: 2 },
        { name: "Dra. Montserrat Agut Bonsfills", department: "Microbiology", topics: 2 },
        { name: "Dra. Norma Fàbregas Vallvé", department: "Bioengineering", topics: 5 },
        { name: "Dra. Núria Agulló Chaler", department: "Materials", topics: 3 },
        { name: "Dra. Núria Llaverias Baqués", department: "Pharmacy", topics: 3 },
        { name: "Dra. Núria Oliva Jorge", department: "Bioengineering", topics: 7 },
        { name: "Dra. Patricia González Sáenz", department: "Bioengineering", topics: 2 },
        { name: "Dra. Teresa Cortadellas Benítez", department: "Bioengineering", topics: 1 }
    ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = researchData;
}
