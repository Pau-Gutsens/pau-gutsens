/**
 * PAU GUTSENS - PORTFOLIO INTERACTIVE LOGIC & MULTILINGUAL CONTENT ENGINE (ES / CA / EN)
 * Level Design & Video Game QA Portfolio
 */

// ==========================================================================
// 1. Multilingual Content Dictionary (ES / CA / EN)
// ==========================================================================
const translations = {
    es: {
        page_title: "Pau Gutsens | Level Design & QA",
        meta_desc: "Portfolio de Pau Gutsens. Diseño de niveles y QA para videojuegos.",

        nav_role: "LEVEL DESIGN & QA",
        nav_projects: "Proyectos",
        nav_qa: "QA & Testing",
        nav_ld: "Level Design",
        nav_about: "Sobre mí",
        nav_contact: "Contacto",

        hero_title: "Hola, soy Pau. Diseño niveles y me aseguro de que los juegos funcionen bien.",
        hero_subtitle: "Estudiante de Diseño y Desarrollo de Videojuegos en el CITM (UPC). Me muevo entre el diseño de niveles, technical art y QA: me gusta tanto construir espacios jugables como buscar fallos y asegurar que la experiencia sea sólida.",

        pill_ld_title: "Level Design",
        pill_ld_desc: "Layout • Blockout • Puzzles • Iteración",
        pill_qa_title: "QA & Testing",
        pill_qa_desc: "Playtesting • Bug reporting • Regresión",

        stat_projects: "Proyectos",
        stat_games: "Juegos en equipo",
        stat_engine: "Motores & Herramientas",
        stat_rigor: "QA & Testing",

        btn_explore: "Ver proyectos",
        btn_qa_samples: "Cómo hago QA",

        projects_pre: "MIS PROYECTOS",
        projects_title: "Proyectos en los que he trabajado",
        projects_desc: "Juegos desarrollados en equipo y proyectos individuales donde he trabajado en Level Design, Technical Art y QA.",

        filter_all: "Todos los proyectos",
        filter_ld: "Level Design",
        filter_qa: "QA & Testing",

        qa_pre: "QA & TESTING",
        qa_title: "Cómo testeo y busco bugs",
        qa_desc: "Para mí testear no es solo darle a los botones hasta que algo falle: es entender por qué ocurre, registrar pasos exactos para reproducirlo y ayudar a resolverlo antes de que llegue al jugador.",

        qa_pillar_1_title: "Smoke & Functional Testing",
        qa_pillar_1_desc: "Comprobar el bucle principal de cada build nueva (menús, guardado, transiciones y controles) antes de entrar en pruebas a fondo.",
        qa_pillar_2_title: "Límites y Colisiones",
        qa_pillar_2_desc: "Buscar huecos en mallas, fallos de colisión con dashes/saltos y situaciones donde el jugador pueda salirse del mapa.",
        qa_pillar_3_title: "Testing de Regresión",
        qa_pillar_3_desc: "Verificar que al corregir un bug o retocar la geometría de un nivel no reaparezcan errores anteriores ni se rompa nada.",
        qa_pillar_4_title: "Playtesting con Jugadores",
        qa_pillar_4_desc: "Ver jugar a personas sin darles indicaciones para detectar dónde se atascan, si entienden las mecánicas y cómo evoluciona la dificultad.",

        bug_badge: "BUG DE EJEMPLO",
        bug_summary_title: "Teleport involuntario al encadenar Dash con colisión de estatua en Sala 2",
        bug_steps_title: "Pasos para reproducir:",
        bug_step_1: "Cargar la Sala 2 con la habilidad Dash equipada.",
        bug_step_2: "Ir hacia la esquina izquierda de la zona de estatuas.",
        bug_step_3: "Hacer Dash justo al tocar la base de la columna.",
        bug_step_4: "El personaje atraviesa la colisión y cae al vacío.",
        bug_actual_label: "Comportamiento actual:",
        bug_actual_desc: "A alta velocidad el personaje atraviesa el collider sin disparar zona de respawn ni frenar.",
        bug_expected_label: "Comportamiento esperado:",
        bug_expected_desc: "El Dash debe detenerse contra la columna sin atravesar la geometría.",
        bug_res_title: "Solución aplicada:",
        bug_res_desc: "Se ajustó el collider de la columna y se activó Continuous Collision Detection (CCD) en el personaje.",

        ld_pre: "LEVEL DESIGN",
        ld_title: "Cómo planteo un nivel",
        ld_desc: "El proceso que sigo para pasar de una idea en papel a un nivel jugable, claro y con buen ritmo.",

        wf_1_title: "Concepto y Ritmo",
        wf_1_desc: "Definir qué queremos que sienta el jugador, qué mecánica nueva aprende y el equilibrio entre momentos de tensión y descanso.",
        wf_2_title: "Plano 2D y Recorrido",
        wf_2_desc: "Esquemas cenitales marcando el camino principal (Golden Path), desvíos opcionales, puntos de referencia visual y checkpoints.",
        wf_3_title: "Blockout / Greybox",
        wf_3_desc: "Construir la geometría básica en el motor (UE5 / Unity / Tiled) para probar proporciones, distancias de salto y coberturas antes del arte final.",
        wf_4_title: "Playtesting e Iteración",
        wf_4_desc: "Poner a prueba el nivel con gente que no lo conoce, observar dónde se desorientan y retocar el diseño con feedback real.",

        about_pre: "SOBRE MÍ",
        about_title: "Pau Gutsens Sanz",
        about_bio_1: "Estudio el Grado en Diseño y Desarrollo de Videojuegos en el <strong>CITM (UPC Terrassa)</strong>. Me interesa especialmente el diseño de niveles y el testeo de calidad (QA).",
        about_bio_2: "He trabajado en proyectos de equipo con motores propios en C++ (Wave Engine, Team 1) y Unreal Engine 5. Me gusta entender cómo juegan las personas y colaborar mano a mano con programadores y artistas para que cada nivel sea divertido, intuitivo y sólido.",
        about_langs: "Español (Nativo) • Catalán (Nativo) • Inglés (B2)",

        skills_ld_title: "Herramientas de Level Design",
        skills_qa_title: "QA & Testing",

        contact_pre: "CONTACTO",
        contact_title: "¿Tienes un proyecto o buscas a alguien para el equipo?",
        contact_sub: "Escríbeme si buscas un Level Designer o Tester de QA con ganas de sumar.",
        footer_rights: "Portfolio de Pau Gutsens Sanz",

        modal_tab_overview: "Detalles",
        modal_tab_ld: "Level Design",
        modal_tab_qa: "QA & Testing",
        modal_tab_gallery: "Galería",
        view_case_study: "Ver Proyecto Detallado",

        // Dedicated Project Page Translations
        proj_back_btn: "← Volver a proyectos",
        proj_breadcrumb_home: "Inicio",
        proj_breadcrumb_projects: "Proyectos",
        proj_engine_label: "Motor / Herramientas",
        proj_roles_label: "Mis Roles",
        proj_team_label: "Equipo",
        proj_duration_label: "Duración",
        proj_overview_title: "Sobre el proyecto",
        proj_role_title: "Qué hice en el proyecto",
        proj_what_why_title: "Qué hice y por qué (decisiones de diseño y técnicas)",
        proj_ld_title: "Detalles de Level Design",
        proj_qa_title: "Aseguramiento de Calidad (QA) y Testing",
        proj_gallery_title: "Galería y capturas",
        proj_prev_label: "Proyecto anterior",
        proj_next_label: "Siguiente proyecto",
        proj_challenge_label: "El reto",
        proj_what_label: "Qué hice",
        proj_why_label: "Por qué lo hice",
        proj_zoom_hint: "Click para ampliar",

        // Page intro banner (index.html)
        page_intro_title: "Pau Gutsens — Level Design & QA",
        page_intro_sub: "Diseñador de niveles y tester de QA para videojuegos. Estudiante en CITM (UPC).",

        // About page extras
        about_tagline: "Level Designer & QA Tester · CITM (UPC)",
        about_location: "Barcelona, España",
        about_edu: "CITM (UPC) — 2023 - Presente",
        about_what_pre: "LO QUE HAGO",
        about_what_title: "Mis especialidades",
        about_ld_card_title: "Level Design",
        about_ld_card_desc: "Diseño espacios jugables desde el concepto hasta el blockout: definiendo el ritmo, guiando a los jugadores con referencias visuales y validando cada nivel con playtests reales antes de iterar.",
        about_qa_card_title: "QA & Testing",
        about_qa_card_desc: "Pruebo builds de forma sistemática: redactando informes de bugs claros con pasos de reproducción, ejecutando planes de prueba y haciendo tests de regresión para asegurar que las correcciones no rompan nada.",
        about_art_card_title: "Technical Art",
        about_art_card_desc: "Colaboro en el cruce entre arte y código: materiales, shaders, iluminación básica y Grid Materials para que el lenguaje visual apoye la legibilidad del nivel."
    },
    ca: {
        page_title: "Pau Gutsens | Level Design & QA",
        meta_desc: "Portfolio de Pau Gutsens. Disseny de nivells i QA per a videojocs.",

        nav_role: "LEVEL DESIGN & QA",
        nav_projects: "Projectes",
        nav_qa: "QA & Testing",
        nav_ld: "Level Design",
        nav_about: "Sobre mi",
        nav_contact: "Contacte",

        hero_title: "Hola, sóc en Pau. Dissenyo nivells i m'asseguro que els jocs funcionin bé.",
        hero_subtitle: "Estudiant de Disseny i Desenvolupament de Videojocs al CITM (UPC). Em moc entre el disseny de nivells, technical art i QA: m'agrada tant construir espais jugables com buscar errors i assegurar que l'experiència sigui sòlida.",

        pill_ld_title: "Level Design",
        pill_ld_desc: "Layout • Blockout • Puzles • Iteració",
        pill_qa_title: "QA & Testing",
        pill_qa_desc: "Playtesting • Bug reporting • Regressió",

        stat_projects: "Projectes",
        stat_games: "Jocs en equip",
        stat_engine: "Motors & Eines",
        stat_rigor: "QA & Testing",

        btn_explore: "Veure projectes",
        btn_qa_samples: "Com faig QA",

        projects_pre: "ELS MEUS PROJECTES",
        projects_title: "Projectes en què he treballat",
        projects_desc: "Jocs desenvolupats en equip i projectes individuals on he treballat en Level Design, Technical Art i QA.",

        filter_all: "Tots els projectes",
        filter_ld: "Level Design",
        filter_qa: "QA & Testing",

        qa_pre: "QA & TESTING",
        qa_title: "Com testejo i busco bugs",
        qa_desc: "Per a mi testejar no és només prémer botons fins que alguna cosa falli: és entendre per què passa, registrar passos exactes per reproduir-ho i ajudar a resoldre-ho abans que arribi al jugador.",

        qa_pillar_1_title: "Smoke & Functional Testing",
        qa_pillar_1_desc: "Comprovar el bucle principal de cada build nova (menús, desat, transicions i controls) abans d'entrar en proves a fons.",
        qa_pillar_2_title: "Límits i Col·lisions",
        qa_pillar_2_desc: "Buscar forats en malles, fallades de col·lisió amb dashes/salts i situacions on el jugador pugui sortir del mapa.",
        qa_pillar_3_title: "Testing de Regressió",
        qa_pillar_3_desc: "Verificar que en corregir un bug o retocar la geometria d'un nivell no reapareguin errors anteriors ni es trenqui res.",
        qa_pillar_4_title: "Playtesting amb Jugadors",
        qa_pillar_4_desc: "Veure jugar a persones sense donar-los indicacions per detectar on s'encallen, si entenen les mecàniques i com evoluciona la dificultat.",

        bug_badge: "BUG D'EXEMPLE",
        bug_summary_title: "Teleport involuntari en encadenar Dash amb col·lisió d'estàtua a Sala 2",
        bug_steps_title: "Passos per reproduir:",
        bug_step_1: "Carregar la Sala 2 amb l'habilitat Dash equipada.",
        bug_step_2: "Anar cap a la cantonada esquerra de la zona d'estàtues.",
        bug_step_3: "Fer Dash just en tocar la base de la columna.",
        bug_step_4: "El personatge travessa la col·lisió i cau al buit.",
        bug_actual_label: "Comportament actual:",
        bug_actual_desc: "A alta velocitat el personatge travessa el collider sense disparar zona de respawn ni frenar.",
        bug_expected_label: "Comportament esperat:",
        bug_expected_desc: "El Dash s'ha d'aturar contra la columna sense travessar la geometria.",
        bug_res_title: "Solució aplicada:",
        bug_res_desc: "Es va ajustar el collider de la columna i es va activar Continuous Collision Detection (CCD) al personatge.",

        ld_pre: "LEVEL DESIGN",
        ld_title: "Com plantejo un nivell",
        ld_desc: "El procés que segueixo per passar d'una idea en paper a un nivell jugable, clar i amb bon ritme.",

        wf_1_title: "Concepte i Ritme",
        wf_1_desc: "Definir què volem que senti el jugador, quina mecànica nova aprèn i l'equilibri entre moments de tensió i descans.",
        wf_2_title: "Plànol 2D i Recorregut",
        wf_2_desc: "Esquemes zenitals marcant el camí principal (Golden Path), desviaments opcionals, punts de referència visual i checkpoints.",
        wf_3_title: "Blockout / Greybox",
        wf_3_desc: "Construir la geometria bàsica al motor (UE5 / Unity / Tiled) per provar proporcions, distàncies de salt i cobertures abans de l'art final.",
        wf_4_title: "Playtesting i Iteració",
        wf_4_desc: "Posar a prova el nivell amb gent que no el coneix, observar on es desorienten i retocar el disseny amb feedback real.",

        about_pre: "SOBRE MI",
        about_title: "Pau Gutsens Sanz",
        about_bio_1: "Estudio el Grau en Disseny i Desenvolupament de Videojocs al <strong>CITM (UPC Terrassa)</strong>. M'interessa especialment el disseny de nivells i el testatge de qualitat (QA).",
        about_bio_2: "He treballat en projectes d'equip amb motors propis en C++ (Wave Engine, Team 1) i Unreal Engine 5. M'agrada entendre com juguen les persones i col·laborar braç a braç amb programadors i artistes perquè cada nivell sigui divertit, intuïtiu i sòlid.",
        about_langs: "Espanyol (Natiu) • Català (Natiu) • Anglès (B2)",

        skills_ld_title: "Eines de Level Design",
        skills_qa_title: "QA & Testing",

        contact_pre: "CONTACTE",
        contact_title: "Tens un projecte o busques algú per a l'equip?",
        contact_sub: "Escriu-me si busques un Level Designer o Tester de QA amb ganes de sumar.",
        footer_rights: "Portfolio de Pau Gutsens Sanz",

        modal_tab_overview: "Detalls",
        modal_tab_ld: "Level Design",
        modal_tab_qa: "QA & Testing",
        modal_tab_gallery: "Galeria",
        view_case_study: "Veure Projecte Detallat",

        // Dedicated Project Page Translations
        proj_back_btn: "← Tornar a projectes",
        proj_breadcrumb_home: "Inici",
        proj_breadcrumb_projects: "Projectes",
        proj_engine_label: "Motor / Eines",
        proj_roles_label: "Els Meus Rols",
        proj_team_label: "Equip",
        proj_duration_label: "Durada",
        proj_overview_title: "Sobre el projecte",
        proj_role_title: "Què vaig fer al projecte",
        proj_what_why_title: "Què vaig fer i per què (decisions de disseny i tècniques)",
        proj_ld_title: "Detalls de Level Design",
        proj_qa_title: "Assegurament de Qualitat (QA) i Testing",
        proj_gallery_title: "Galeria i captures",
        proj_prev_label: "Projecte anterior",
        proj_next_label: "Següent projecte",
        proj_challenge_label: "El repte",
        proj_what_label: "Què vaig fer",
        proj_why_label: "Per què ho vaig fer",
        proj_zoom_hint: "Clic per ampliar",

        // Page intro banner (index.html)
        page_intro_title: "Pau Gutsens — Level Design & QA",
        page_intro_sub: "Dissenyador de nivells i tester de QA per a videojocs. Estudiant al CITM (UPC).",

        // About page extras
        about_tagline: "Level Designer & QA Tester · CITM (UPC)",
        about_location: "Barcelona, Catalunya",
        about_edu: "CITM (UPC) — 2023 - Present",
        about_what_pre: "EL QUE FAIG",
        about_what_title: "Les meves especialitats",
        about_ld_card_title: "Level Design",
        about_ld_card_desc: "Dissenyo espais jugables des del concepte fins al blockout: definint el ritme, guiant els jugadors amb referències visuals i validant cada nivell amb playtests reals abans d'iterar.",
        about_qa_card_title: "QA & Testing",
        about_qa_card_desc: "Provo builds de forma sistemàtica: redactant informes de bugs clars amb passos de reproducció, executant plans de prova i fent tests de regressió per assegurar que els canvis no trenquin res.",
        about_art_card_title: "Technical Art",
        about_art_card_desc: "Col·laboro a la intersecció entre art i codi: materials, shaders, il·luminació bàsica i Grid Materials perquè el llenguatge visual recolzi la llegibilitat del nivell."
    },
    en: {
        page_title: "Pau Gutsens | Level Design & QA",
        meta_desc: "Portfolio of Pau Gutsens. Level Design and QA for video games.",

        nav_role: "LEVEL DESIGN & QA",
        nav_projects: "Projects",
        nav_qa: "QA & Testing",
        nav_ld: "Level Design",
        nav_about: "About Me",
        nav_contact: "Contact",

        hero_title: "Hi, I'm Pau. I design levels and make sure games play and run well.",
        hero_subtitle: "Game Design & Development student at CITM (UPC). Working across level design, technical art, and QA — I enjoy building playable spaces just as much as breaking them to make them rock-solid.",

        pill_ld_title: "Level Design",
        pill_ld_desc: "Layout • Blockout • Puzzles • Iteration",
        pill_qa_title: "QA & Testing",
        pill_qa_desc: "Playtesting • Bug Reporting • Regression",

        stat_projects: "Projects",
        stat_games: "Team Games",
        stat_engine: "Engines & Tools",
        stat_rigor: "QA & Testing",

        btn_explore: "View Projects",
        btn_qa_samples: "How I Do QA",

        projects_pre: "MY WORK",
        projects_title: "Projects I've Worked On",
        projects_desc: "Team games and solo showcases where I contributed across Level Design, Technical Art, and QA.",

        filter_all: "All Projects",
        filter_ld: "Level Design",
        filter_qa: "QA & Testing",

        qa_pre: "QA & TESTING",
        qa_title: "How I Test & Find Bugs",
        qa_desc: "For me, testing isn't just pressing buttons until something breaks: it's figuring out why it broke, writing clear reproduction steps, and helping programmers and designers fix it quickly.",

        qa_pillar_1_title: "Smoke & Functional Testing",
        qa_pillar_1_desc: "Verifying the core loop of each new build (menus, saving, level transitions, and controls) before digging into deeper tests.",
        qa_pillar_2_title: "Boundaries & Collision",
        qa_pillar_2_desc: "Hunting for geometry gaps, clipping, physics glitches with dashes/jumps, and ways players can escape the playable map.",
        qa_pillar_3_title: "Regression Testing",
        qa_pillar_3_desc: "Checking that bug fixes and level geometry tweaks don't bring back old bugs or break existing features.",
        qa_pillar_4_title: "Player Playtesting",
        qa_pillar_4_desc: "Watching players test blind without hints to see where they get stuck, how they read the environment, and whether the difficulty feels right.",

        bug_badge: "EXAMPLE BUG",
        bug_summary_title: "Unintended teleport when dashing into pillar collision in Room 2",
        bug_steps_title: "Steps to reproduce:",
        bug_step_1: "Load Room 2 with the Dash skill equipped.",
        bug_step_2: "Walk toward the left pillar in the puzzle area.",
        bug_step_3: "Dash right as the character makes contact with the pillar base.",
        bug_step_4: "Character clips through collision and falls out of the map.",
        bug_actual_label: "Actual behavior:",
        bug_actual_desc: "At high dash speeds, collision sweep fails and the player falls out of bounds.",
        bug_expected_label: "Expected behavior:",
        bug_expected_desc: "The dash should stop against the pillar surface without penetrating collision.",
        bug_res_title: "Fix applied:",
        bug_res_desc: "Thickened the pillar collision volume and enabled Continuous Collision Detection (CCD) on the character controller.",

        ld_pre: "LEVEL DESIGN",
        ld_title: "How I Approach a Level",
        ld_desc: "The process I follow to go from an idea on paper to a level that's fun, easy to read, and well paced.",

        wf_1_title: "Concept & Pacing",
        wf_1_desc: "Clarifying what the player should feel, what new mechanic is being introduced, and balancing tension with breathing room.",
        wf_2_title: "2D Layout & Flow",
        wf_2_desc: "Top-down sketches mapping the main path, side routes, visual landmarks, and checkpoints.",
        wf_3_title: "Blockout / Greybox",
        wf_3_desc: "Building basic geometry in-engine (UE5 / Unity / Tiled) to test jump distances, cover heights, and sightlines before adding final art.",
        wf_4_title: "Playtesting & Iteration",
        wf_4_desc: "Putting the level in front of fresh eyes, seeing where they get lost, and tuning the layout based on actual gameplay.",

        about_pre: "ABOUT ME",
        about_title: "Pau Gutsens Sanz",
        about_bio_1: "I'm studying Game Design and Development at <strong>CITM (UPC Terrassa)</strong>, with a focus on level design and quality assurance (QA).",
        about_bio_2: "I've worked on team projects across custom C++ engines (Wave Engine, Team 1) and Unreal Engine 5. I enjoy understanding how players think and working closely with programmers and artists to make levels that are fun, intuitive, and solid.",
        about_langs: "Spanish (Native) • Catalan (Native) • English (B2)",

        skills_ld_title: "Level Design Tools",
        skills_qa_title: "QA & Testing",

        contact_pre: "CONTACT",
        contact_title: "Have a project or an open role?",
        contact_sub: "Feel free to reach out if you're looking for a Level Designer or QA Tester to join your team.",
        footer_rights: "Portfolio by Pau Gutsens Sanz",

        modal_tab_overview: "Overview",
        modal_tab_ld: "Level Design",
        modal_tab_qa: "QA & Testing",
        modal_tab_gallery: "Gallery",
        view_case_study: "View Full Project",

        // Dedicated Project Page Translations
        proj_back_btn: "← Back to projects",
        proj_breadcrumb_home: "Home",
        proj_breadcrumb_projects: "Projects",
        proj_engine_label: "Engine / Tools",
        proj_roles_label: "My Roles",
        proj_team_label: "Team Size",
        proj_duration_label: "Duration",
        proj_overview_title: "About the Project",
        proj_role_title: "What I Did on the Project",
        proj_what_why_title: "What I Did & Why (Design & Technical Decisions)",
        proj_ld_title: "Level Design Details",
        proj_qa_title: "QA & Testing Process",
        proj_gallery_title: "Gallery & Screenshots",
        proj_prev_label: "Previous project",
        proj_next_label: "Next project",
        proj_challenge_label: "The challenge",
        proj_what_label: "What I did",
        proj_why_label: "Why I did it",
        proj_zoom_hint: "Click to expand",

        // Page intro banner (index.html)
        page_intro_title: "Pau Gutsens \u2014 Level Design & QA",
        page_intro_sub: "Level designer and QA tester for video games. Student at CITM (UPC).",

        // About page extras
        about_tagline: "Level Designer & QA Tester \u00b7 CITM (UPC)",
        about_location: "Barcelona, Spain",
        about_edu: "CITM (UPC) \u2014 2023 - Present",
        about_what_pre: "WHAT I DO",
        about_what_title: "My specialties",
        about_ld_card_title: "Level Design",
        about_ld_card_desc: "I design playable spaces from concept to blockout: defining pacing, guiding players with visual cues, and validating each level with real playtests before iterating.",
        about_qa_card_title: "QA & Testing",
        about_qa_card_desc: "I test builds systematically: writing clear bug reports with reproduction steps, running test plans and doing regression testing so fixes don't break anything else.",
        about_art_card_title: "Technical Art",
        about_art_card_desc: "I collaborate at the art-code intersection: materials, shaders, blocking lighting, and Grid Materials so the visual language supports level readability."
    }
};

// ==========================================================================
// 2. Comprehensive Projects Database (with ES, CA & EN Content)
// ==========================================================================
const projectsData = [
    {
        id: "son-of-ithaca",
        categories: ["ld", "qa"],
        coverImage: "assets/images/Son of Ithaca/ithaca_combat.png",
        githubUrl: "https://github.com/NobodyGamesStudio/WaveEngine",
        githubUrl: "https://github.com/NobodyGamesStudio/WaveEngine",
        roles: {
            es: ["Technical Artist", "QA", "Diseñador de Niveles"],
            ca: ["Technical Artist", "QA", "Dissenyador de Nivells"],
            en: ["Technical Artist", "QA", "Level Designer"]
        },
        engine: {
            es: "Wave Engine (Motor Propio C++ / OpenGL 4.6)",
            ca: "Wave Engine (Motor Propi C++ / OpenGL 4.6)",
            en: "Wave Engine (Custom C++ / OpenGL 4.6 Engine)"
        },
        title: {
            es: "Son of Ithaca",
            ca: "Son of Ithaca",
            en: "Son of Ithaca"
        },
        genre: {
            es: "Aventura de Puzzles en 3D (Mitología Griega)",
            ca: "Aventura de Puzles en 3D (Mitologia Grega)",
            en: "3D Puzzle-Adventure (Greek Mythology)"
        },
        excerpt: {
            es: "Technical Art, integración de assets y colliders PhysX, diseño de puzzles y QA continuo en Wave Engine (motor propio 3D en C++ de Nobody Games) con un equipo de 30+ personas.",
            ca: "Technical Art, integració d'assets i colliders PhysX, disseny de puzles i QA continu a Wave Engine (motor propi 3D en C++ de Nobody Games) amb un equip de 30+ persones.",
            en: "Technical Art, asset integration & PhysX colliders, puzzle design, and continuous QA in Wave Engine (Nobody Games' custom 3D C++ engine) within a 30+ person team."
        },
        highlights: {
            es: [
                "Colocación e integración de assets y colliders en niveles 1 y 2",
                "Rediseño de puzzles para mejorar la curva de dificultad y el aprendizaje progresivo",
                "QA continuo con sesiones de playtesting en cada milestone del proyecto"
            ],
            ca: [
                "Col·locació i integració d'assets i colliders als nivells 1 i 2",
                "Redisseny de puzles per millorar la corba de dificultat i l'aprenentatge progressiu",
                "QA continu amb sessions de playtesting a cada milestone del projecte"
            ],
            en: [
                "Asset and collider placement and integration across levels 1 and 2",
                "Puzzle redesigns to improve difficulty curve and progressive skill teaching",
                "Continuous QA with dedicated playtesting sessions at every project milestone"
            ]
        },
        tags: ["Wave Engine (C++)", "OpenGL 4.6", "PhysX Colliders", "Lua Scripting", "Level Design & Puzzles", "QA & Playtesting"],
        team: {
            es: "30+ miembros de equipo (CITM Projecte 3 — Nobody Games)",
            ca: "30+ membres d'equip (CITM Projecte 3 — Nobody Games)",
            en: "30+ team members (CITM Projecte 3 — Nobody Games)"
        },
        duration: {
            es: "5 meses (Primavera 2026)",
            ca: "5 mesos (Primavera 2026)",
            en: "5 months (Spring 2026)"
        },
        
        details: {
            es: {
                projectOverview: `
                    <p class="project-prose"><strong>Son of Ithaca</strong> es una aventura de puzzles en 3D inspirada en la mitología griega, desarrollada por un equipo multidisciplinar de más de 30 personas en el marco del Projecte 3 del CITM. El juego fue construido sobre <strong>Wave Engine</strong>, un motor propio 3D desarrollado en C++ y OpenGL 4.6 con físicas NVIDIA PhysX y scripting en Lua (<a href="https://github.com/NobodyGamesStudio/WaveEngine" target="_blank" rel="noopener noreferrer" class="prose-link"><i class="fa-brands fa-github"></i> Repositorio de WaveEngine</a>). El juego se estructura en dos niveles con puzzles progresivos, mecánicas de máscaras y un diseño de mundo cuidadosamente construido colaborativamente. Yo formé parte del Scrum Group 3, con rol principal de <strong>Technical Artist</strong>, complementado con tareas de <strong>QA</strong> y <strong>Level Design</strong>.</p>
                `,
                myContribution: `
                    <p class="project-prose">Mi trabajo en el proyecto abarcó tres áreas complementarias. Como <strong>Technical Artist</strong>, fui responsable de la integración de assets en <strong>Wave Engine</strong>, ajuste y colocación precisa de Rigidbodies y colliders PhysX en ambos niveles, corrección del navmesh, limpieza de geometría invisible para optimizar el rendimiento e implementación del sistema de transición entre escenas con scripts Lua (<code>SceneLoader_lvl2.lua</code>). Como <strong>Level Designer</strong>, creé el layout definitivo del Nivel 1 y rediseñé dos puzzles clave detectando problemas de dificultad en playtesting. Como <strong>QA</strong>, mantuve sesiones de testing continuas (>40h) a lo largo de todos los milestones del proyecto (Alpha 1 hasta Gold).</p>
                `,
                whatAndWhy: [
                    {
                        title: "Integración de Assets y Colliders en los Niveles",
                        challenge: "A medida que el equipo de arte iba entregando assets terminados, era necesario integrarlos en el motor respetando la ambientación del nivel y colocar colliders precisos que maximizaran la optimización y evitaran que el jugador accediera a zonas no deseadas.",
                        what: "Implementé los assets terminados en el motor y los dispuse a lo largo de los niveles 1 y 2 siguiendo la dinámica y la ambientación propuesta. Coloqué y ajusté colliders en todas las zonas críticas, incluyendo montañas, desniveles y superficies especiales, coordinándome con el resto del equipo del Scrum Group.",
                        why: "Garantizar que la geometría de colisión fuera precisa, coherente y justa es crítico para la experiencia de juego. Un collider impreciso rompe la inmersión y puede provocar que el jugador acceda a zonas fuera del diseño previsto o que experimente frustración por colisiones injustas."
                    },
                    {
                        title: "Rediseño de Puzzles — Dificultad y Aprendizaje Progresivo",
                        challenge: "Durante el playtesting detecté que dos puzzles clave del juego tenían una dificultad demasiado baja para su posición en el nivel: el segundo puzzle de Apolo y el puzzle final del Nivel 2 tenían soluciones demasiado evidentes y no representaban el reto esperado para su posición en la curva de dificultad.",
                        what: "Rediseñé el segundo puzzle de Apolo introduciendo una mecánica que luego se da por aprendida, permitiendo que el jugador la descubra de forma natural antes de necesitarla. Recreé el puzzle final del Nivel 2 potenciando el uso de las tres máscaras e integrando todas las mecánicas aprendidas a lo largo del juego.",
                        why: "Un buen puzzle de cierre debe poner a prueba lo que el jugador ha aprendido y funcionar como culminación coherente de su progresión. Aumentar la complejidad sin añadir nuevas mecánicas permite crear un reto satisfactorio y alineado con las expectativas de la fase final."
                    },
                    {
                        title: "Sistema de Transición de Escena y Optimización Técnica",
                        challenge: "La transición entre el Nivel 1 y el Nivel 2 era visualmente brusca y carecía de feedback de estado para el jugador. Además, la jerarquía del motor estaba desorganizada, generando quejas internas y dificultando el trabajo colaborativo.",
                        what: "Implementé un sistema de fade-in/fade-out para la transición entre niveles, con animaciones del personaje durante el cambio y efectos de sonido. El sistema solo se activa cuando el jugador recoge un número determinado de 'claus' (llaves), condición configurable desde el motor. También limpié la geometría invisible de ambos niveles y reorganicé la jerarquía agrupando y renombrando objetos.",
                        why: "Una transición suave reduce la disonancia cognitiva y mejora la sensación de continuidad narrativa. La condición por 'claus' protege la progresión del diseño. La limpieza y organización del motor son fundamentales para el trabajo en equipo escalable y para mantener un rendimiento óptimo del juego."
                    },
                    {
                        title: "QA Continuo — Playtesting en Cada Milestone",
                        challenge: "En un equipo de más de 30 personas con entregas frecuentes, los bugs y los problemas de balance de dificultad eran inevitables y podían acumularse entre milestones si no se monitorizaban de forma activa.",
                        what: "Realicé sesiones de playtesting sistemáticas en cada entrega del proyecto (Alpha 1, vs2, vs3, Alpha 2, Beta y Gold), cubriendo el flujo principal del juego, los puzzles, el comportamiento del jugador en zonas límite, las transiciones de escena y los estados del juego.",
                        why: "El QA continuo integrado en el ciclo de desarrollo, en lugar de relegarlo al final, permite detectar y priorizar issues mientras aún son solucionables sin grandes costes. Ayudé a asegurar que cada entrega presentara un estado estable y jugable del producto."
                    }
                ],
                overview: `
                    <p class="modal-p"><strong>Son of Ithaca</strong> es una aventura de puzzles en 3D ambientada en la mitología griega, desarrollada por un equipo de más de 30 personas. El juego presenta dos niveles con mecánicas de máscaras, puzzles progresivos y un mundo construido colaborativamente.</p>
                    <p class="modal-p">Mi rol fue principalmente de <strong>Technical Artist</strong> — integrando assets, gestionando colliders y optimizando el motor — con contribuciones de <strong>Level Design</strong> (layout del Nivel 1, rediseño de puzzles) y <strong>QA</strong> continuo a lo largo de todos los milestones.</p>
                `,
                ldBreakdown: `
                    <h4 class="modal-section-h3">1. Layout del Nivel 1</h4>
                    <p class="modal-p">En las fases tempranas del proyecto, creé a partir del concepto un <strong>layout definitivo del Nivel 1</strong> indicando las zonas más importantes, su posicionamiento y cómo se accedía a ellas. Esto sirvió de referencia para el resto del equipo de diseño y arte.</p>

                    <h4 class="modal-section-h3">2. Rediseño del Puzzle de Apolo</h4>
                    <p class="modal-p">Tras detectar que la dificultad original era demasiado baja para su posición en el nivel, modifiqué el segundo puzzle de Apolo. Introduje una mecánica que más adelante se da por aprendida, de forma que el jugador pueda descubrirla de forma natural antes de necesitarla. El resultado fue una progresión de aprendizaje más fluida y un reto más ajustado al contexto del nivel.</p>

                    <h4 class="modal-section-h3">3. Recreación del Puzzle Final (Nivel 2)</h4>
                    <p class="modal-p">El último puzzle del Nivel 2 presentaba una solución demasiado evidente y una baja complejidad. Lo recreé potenciando el uso de las tres máscaras e integrando de forma activa las distintas mecánicas que el jugador ha ido aprendiendo. El objetivo: un reto que funcione como culminación coherente de la progresión jugable, sin necesitar nuevas funcionalidades.</p>
                `,
                qaBreakdown: `
                    <h4 class="modal-section-h3">QA Continuo a lo Largo del Proyecto</h4>
                    <p class="modal-p">Realicé sesiones de playtesting en cada milestone del proyecto — Alpha 1, vs2, vs3, Alpha 2, Beta y Gold — con un total acumulado de más de 40 horas de testing. Cubrí el flujo principal de juego, los puzzles, las transiciones de escena, el comportamiento del jugador en zonas límite y el estado general de la build.</p>
                    <p class="modal-p">El QA integrado en el ciclo de desarrollo fue clave para mantener cada entrega en un estado estable y detectar issues mientras aún eran solucionables. Informé de bugs encontrados y colaboré directamente con el equipo para priorizar y validar correcciones.</p>
                `,
                gallery: [
                    { src: "assets/images/Son of Ithaca/ithaca_combat.png", caption: "Nivel 1 — Integración de assets y colisiones en Wave Engine" },
                    { src: "assets/images/Son of Ithaca/Captura de pantalla 2026-04-07 211929.png", caption: "Wave Engine Editor — Inspector de componentes, Rigidbody, colliders PhysX y script SceneLoader_lvl2.lua" },
                    { src: "assets/images/Son of Ithaca/Captura de pantalla 2026-04-07 212034.png", caption: "Wave Engine — Setup de Trigger Box Collider y script Collectible.lua con visualización de métricas" },
                    { src: "assets/images/Son of Ithaca/Captura de pantalla 2026-04-18 192452.png", caption: "Inspección en tiempo real de Navmesh y límites de terreno para prevenir soft-locks y caídas" },
                    { src: "assets/images/Son of Ithaca/Captura de pantalla 2026-05-26 214444 - copia - copia.png", caption: "Puzle de pedestales y mecánicas de máscaras con shaders dinámicos de agua y niebla en Wave Engine" },
                    { src: "assets/images/Son of Ithaca/ithaca_arena.png", caption: "Layout definitivo del Nivel 1 — Zonas, flujo y accesos" },
                    { src: "assets/images/Son of Ithaca/ithaca_boss.png", caption: "Puzle rediseñado en Nivel 2 — Integración de las tres máscaras" },
                    { src: "assets/images/Son of Ithaca/ithaca_environment.png", caption: "Iluminación y composición escénica en Wave Engine" }
                ]
            },
            ca: {
                projectOverview: `
                    <p class="project-prose"><strong>Son of Ithaca</strong> és una aventura de puzles en 3D inspirada en la mitologia grega, desenvolupada per un equip multidisciplinar de més de 30 persones en el marc del Projecte 3 del CITM. El joc va ser construït sobre <strong>Wave Engine</strong>, un motor propi 3D desenvolupat en C++ i OpenGL 4.6 amb físiques NVIDIA PhysX i scripting en Lua (<a href="https://github.com/NobodyGamesStudio/WaveEngine" target="_blank" rel="noopener noreferrer" class="prose-link"><i class="fa-brands fa-github"></i> Repositori de WaveEngine</a>). El joc s'estructura en dos nivells amb puzles progressius, mecàniques de màscares i un disseny de món acuradament construït col·laborativament. Vaig formar part de l'Scrum Group 3, amb rol principal de <strong>Technical Artist</strong>, complementat amb tasques de <strong>QA</strong> i <strong>Level Design</strong>.</p>
                `,
                myContribution: `
                    <p class="project-prose">La meva feina al projecte va abraçar tres àrees complementàries. Com a <strong>Technical Artist</strong>, vaig ser responsable de la integració d'assets a <strong>Wave Engine</strong>, ajust i col·locació precisa de Rigidbodies i colliders PhysX a ambdós nivells, correcció del navmesh, neteja de geometria invisible per optimitzar el rendiment i implementació del sistema de transició entre escenes amb scripts Lua (<code>SceneLoader_lvl2.lua</code>). Com a <strong>Level Designer</strong>, vaig crear el layout definitiu del Nivell 1 i vaig redissenyar dos puzles clau detectant problemes de dificultat en playtesting. Com a <strong>QA</strong>, vaig mantenir sessions de testing contínues (>40h) al llarg de tots els milestones del projecte (Alpha 1 fins a Gold).</p>
                `,
                whatAndWhy: [
                    {
                        title: "Integració d'Assets i Colliders als Nivells",
                        challenge: "A mesura que l'equip d'art anava lliurant assets acabats, calia integrar-los al motor respectant l'ambientació del nivell i col·locar colliders precisos que maximitzessin l'optimització i evitessin que el jugador accedís a zones no desitjades.",
                        what: "Vaig implementar els assets acabats al motor i els vaig disposar al llarg dels nivells 1 i 2 seguint la dinàmica i l'ambientació proposada. Vaig col·locar i ajustar colliders en totes les zones crítiques, incloent-hi muntanyes, desnivells i superfícies especials, coordinant-me amb la resta de l'equip de l'Scrum Group.",
                        why: "Garantir que la geometria de col·lisió fos precisa, coherent i justa és crític per a l'experiència de joc. Un collider imprecís trenca la immersió i pot provocar que el jugador accedeixi a zones fora del disseny previst o pateixi frustració per col·lisions injustes."
                    },
                    {
                        title: "Redisseny de Puzles — Dificultat i Aprenentatge Progressiu",
                        challenge: "Durant el playtesting vaig detectar que dos puzles clau del joc tenien una dificultat massa baixa per a la seva posició al nivell: el segon puzle d'Apol·lo i el puzle final del Nivell 2 tenien solucions massa evidents i no representaven el repte esperat per a la corba de dificultat.",
                        what: "Vaig redissenyar el segon puzle d'Apol·lo introduint una mecànica que després es dóna per apresa, permetent que el jugador la descobreixi de forma natural abans de necessitar-la. Vaig recrear el puzle final del Nivell 2 potenciant l'ús de les tres màscares i integrant totes les mecàniques apreses al llarg del joc.",
                        why: "Un bon puzle de tancament ha de posar a prova el que el jugador ha après i funcionar com a culminació coherent de la seva progressió. Augmentar la complexitat sense afegir noves mecàniques permet crear un repte satisfactori i alineat amb les expectatives de la fase final."
                    },
                    {
                        title: "Sistema de Transició d'Escena i Optimització Tècnica",
                        challenge: "La transició entre el Nivell 1 i el Nivell 2 era visualment brusca i mancava de feedback d'estat per al jugador. A més, la jerarquia del motor estava desorganitzada, generant queixes internes i dificultant el treball col·laboratiu.",
                        what: "Vaig implementar un sistema de fade-in/fade-out per a la transició entre nivells, amb animacions del personatge durant el canvi i efectes de so. El sistema només s'activa quan el jugador recull un nombre determinat de claus, condició configurable des del motor. També vaig netejar la geometria invisible d'ambdós nivells i vaig reorganitzar la jerarquia agrupant i reanomenant objectes.",
                        why: "Una transició suau redueix la dissonància cognitiva i millora la sensació de continuïtat narrativa. La condició per claus protegeix la progressió del disseny. La neteja i organització del motor són fonamentals per al treball en equip escalable i per mantenir un rendiment òptim del joc."
                    },
                    {
                        title: "QA Continu — Playtesting a Cada Milestone",
                        challenge: "En un equip de més de 30 persones amb lliuraments freqüents, els bugs i els problemes de balanç de dificultat eren inevitables i podien acumular-se entre milestones si no es monitoritzaven activament.",
                        what: "Vaig realitzar sessions de playtesting sistemàtiques a cada entrega del projecte (Alpha 1, vs2, vs3, Alpha 2, Beta i Gold), cobrint el flux principal del joc, els puzles, el comportament del jugador en zones límit, les transicions d'escena i els estats del joc.",
                        why: "El QA continu integrat en el cicle de desenvolupament, en lloc de relegar-lo al final, permet detectar i prioritzar incidències mentre encara són solucionables sense grans costos. Vaig ajudar a assegurar que cada lliurament presentés un estat estable i jugable del producte."
                    }
                ],
                overview: `
                    <p class="modal-p"><strong>Son of Ithaca</strong> és una aventura de puzles en 3D ambientada en la mitologia grega, desenvolupada per un equip de més de 30 persones. El joc presenta dos nivells amb mecàniques de màscares, puzles progressius i un món construït col·laborativament.</p>
                    <p class="modal-p">El meu rol va ser principalment de <strong>Technical Artist</strong> — integrant assets, gestionant colliders i optimitzant el motor — amb contribucions de <strong>Level Design</strong> (layout del Nivell 1, redisseny de puzles) i <strong>QA</strong> continu al llarg de tots els milestones.</p>
                `,
                ldBreakdown: `
                    <h4 class="modal-section-h3">1. Layout del Nivell 1</h4>
                    <p class="modal-p">En les fases inicials del projecte, vaig crear a partir del concepte un <strong>layout definitiu del Nivell 1</strong> indicant les zones més importants, el seu posicionament i com s'hi accedia. Això va servir de referència per a la resta de l'equip de disseny i art.</p>

                    <h4 class="modal-section-h3">2. Redisseny del Puzle d'Apol·lo</h4>
                    <p class="modal-p">Després de detectar que la dificultat original era massa baixa per a la seva posició al nivell, vaig modificar el segon puzle d'Apol·lo. Vaig introduir una mecànica que més endavant es dóna per apresa, de manera que el jugador pugui descobrir-la de forma natural abans de necessitar-la. El resultat va ser una progressió d'aprenentatge més fluida i un repte més ajustat al context del nivell.</p>

                    <h4 class="modal-section-h3">3. Recreació del Puzle Final (Nivell 2)</h4>
                    <p class="modal-p">L'últim puzle del Nivell 2 presentava una solució massa evident i una baixa complexitat. El vaig recrear potenciant l'ús de les tres màscares i integrant de manera activa les diferents mecàniques que el jugador ha anat aprenent. L'objectiu: un repte que funcioni com a culminació coherent de la progressió jugable, sense necessitar noves funcionalitats.</p>
                `,
                qaBreakdown: `
                    <h4 class="modal-section-h3">QA Continu al Llarg del Projecte</h4>
                    <p class="modal-p">Vaig realitzar sessions de playtesting a cada milestone del projecte — Alpha 1, vs2, vs3, Alpha 2, Beta i Gold — amb un total acumulat de més de 40 hores de testing. Vaig cobrir el flux principal de joc, els puzles, les transicions d'escena, el comportament del jugador en zones límit i l'estat general de la build.</p>
                    <p class="modal-p">El QA integrat en el cicle de desenvolupament va ser clau per mantenir cada entrega en un estat estable i detectar problemes mentre encara eren solucionables. Vaig reportar bugs trobats i vaig col·laborar directament amb l'equip per prioritzar i validar correccions.</p>
                `,
                gallery: [
                    { src: "assets/images/Son of Ithaca/ithaca_combat.png", caption: "Nivell 1 — Integració d'assets i col·lisions a Wave Engine" },
                    { src: "assets/images/Son of Ithaca/Captura de pantalla 2026-04-07 211929.png", caption: "Wave Engine Editor — Inspector de components, Rigidbody, colliders PhysX i script SceneLoader_lvl2.lua" },
                    { src: "assets/images/Son of Ithaca/Captura de pantalla 2026-04-07 212034.png", caption: "Wave Engine — Setup de Trigger Box Collider i script Collectible.lua amb visualització de mètriques" },
                    { src: "assets/images/Son of Ithaca/Captura de pantalla 2026-04-18 192452.png", caption: "Inspecció en temps real de Navmesh i límits de terreny per prevenir soft-locks i caigudes" },
                    { src: "assets/images/Son of Ithaca/Captura de pantalla 2026-05-26 214444 - copia - copia.png", caption: "Puzle de pedestals i mecàniques de màscares amb shaders dinàmics d'aigua i boira a Wave Engine" },
                    { src: "assets/images/Son of Ithaca/ithaca_arena.png", caption: "Layout definitiu del Nivell 1 — Zones, flux i accessos" },
                    { src: "assets/images/Son of Ithaca/ithaca_boss.png", caption: "Puzle redissenyat al Nivell 2 — Integració de les tres màscares" },
                    { src: "assets/images/Son of Ithaca/ithaca_environment.png", caption: "Il·luminació i composició escènica a Wave Engine" }
                ]
            },
            en: {
                projectOverview: `
                    <p class="project-prose"><strong>Son of Ithaca</strong> is a 3D puzzle-adventure set in Greek mythology, developed by a 30+ person multidisciplinary team as part of CITM's Projecte 3. The game was built on <strong>Wave Engine</strong>, a custom 3D game engine developed in C++ and OpenGL 4.6 with NVIDIA PhysX and Lua scripting (<a href="https://github.com/NobodyGamesStudio/WaveEngine" target="_blank" rel="noopener noreferrer" class="prose-link"><i class="fa-brands fa-github"></i> WaveEngine Repository</a>). The game features two levels with progressive puzzles, mask mechanics and a collaboratively built world. I was part of Scrum Group 3, primarily as <strong>Technical Artist</strong>, with contributions in <strong>QA</strong> and <strong>Level Design</strong>.</p>
                `,
                myContribution: `
                    <p class="project-prose">My work covered three complementary areas. As <strong>Technical Artist</strong>, I was responsible for integrating assets into <strong>Wave Engine</strong>, precisely configuring Rigidbodies and PhysX colliders across both levels, correcting the navmesh, cleaning up invisible geometry to improve performance, and implementing the scene transition system via Lua scripts (<code>SceneLoader_lvl2.lua</code>). As <strong>Level Designer</strong>, I created the definitive layout for Level 1 and redesigned two key puzzles after detecting difficulty issues. As <strong>QA</strong>, I ran continuous playtesting passes (>40h) throughout every milestone of the project from Alpha 1 to Gold.</p>
                `,
                whatAndWhy: [
                    {
                        title: "Asset & Collider Integration Across Both Levels",
                        challenge: "As the art team delivered finished assets, they needed to be integrated into the engine respecting the level's ambiance, with precise colliders placed to prevent the player from accessing unintended areas while maximizing performance.",
                        what: "I implemented finished assets in the engine and arranged them across levels 1 and 2 following the established dynamic and ambiance. I placed and adjusted colliders in all critical zones — mountains, uneven terrain, and special surfaces — coordinating with the rest of the Scrum Group.",
                        why: "Accurate, consistent, and fair collision geometry is critical for player experience. Imprecise colliders break immersion and can cause players to reach out-of-bounds areas or experience frustrating unfair collisions."
                    },
                    {
                        title: "Puzzle Redesign — Difficulty & Progressive Teaching",
                        challenge: "During playtesting I detected that two key puzzles had difficulty levels too low for their position in the level: the second Apollo puzzle and the final Level 2 puzzle had solutions too obvious and didn't represent the expected challenge for the late-game placement.",
                        what: "I redesigned the second Apollo puzzle by introducing a mechanic that is later taken for granted — allowing the player to discover it naturally before needing it. I recreated the final Level 2 puzzle by reinforcing the use of all three masks and actively integrating mechanics learned throughout the game.",
                        why: "A good closing puzzle should test what the player has learned and work as a coherent culmination of their progression. Increasing complexity without adding new mechanics creates a satisfying challenge aligned with final-act expectations."
                    },
                    {
                        title: "Scene Transition System & Technical Optimization",
                        challenge: "The transition between Level 1 and Level 2 was visually abrupt and lacked player state feedback. Additionally, the engine hierarchy was disorganized, generating internal complaints and hindering collaborative work.",
                        what: "I implemented a fade-in/fade-out system for the level transition, including player animations during the change and sound effects. The system only triggers when the player collects a set number of 'claus' (keys), a value configurable from the engine. I also cleaned invisible geometry from both levels and reorganized the hierarchy by grouping and renaming objects.",
                        why: "A smooth transition reduces cognitive dissonance and improves narrative continuity. The key-based condition protects design progression. Cleaning and organizing the engine is fundamental for scalable teamwork and maintaining optimal game performance."
                    },
                    {
                        title: "Continuous QA — Playtesting at Every Milestone",
                        challenge: "In a 30+ person team with frequent deliveries, bugs and difficulty balance issues were inevitable and could accumulate between milestones if not actively monitored.",
                        what: "I ran systematic playtesting sessions at each project milestone (Alpha 1, vs2, vs3, Alpha 2, Beta and Gold), covering the main game flow, puzzles, player behavior in boundary zones, scene transitions, and overall build state.",
                        why: "Continuous QA integrated into the development cycle — rather than relegated to the end — enables detecting and prioritizing issues while they are still solvable without major costs. I helped ensure each delivery presented a stable and playable product."
                    }
                ],
                overview: `
                    <p class="modal-p"><strong>Son of Ithaca</strong> is a 3D puzzle-adventure set in Greek mythology, developed by a 30+ person team. The game features two levels with mask mechanics, progressive puzzles, and a collaboratively built world.</p>
                    <p class="modal-p">My role was primarily <strong>Technical Artist</strong> — integrating assets, managing colliders, and optimizing the engine — with contributions in <strong>Level Design</strong> (Level 1 layout, puzzle redesigns) and ongoing <strong>QA</strong> across all milestones.</p>
                `,
                ldBreakdown: `
                    <h4 class="modal-section-h3">1. Level 1 Layout</h4>
                    <p class="modal-p">In the early stages, I created a <strong>definitive layout for Level 1</strong> from the concept, indicating the most important zones, their positioning, and how the player reaches them. This served as a reference for the rest of the design and art team.</p>

                    <h4 class="modal-section-h3">2. Apollo Puzzle Redesign</h4>
                    <p class="modal-p">After detecting that the original difficulty was too low for its position in the level, I modified the second Apollo puzzle. I introduced a mechanic that is later expected to be known, so the player can discover it naturally before needing it. The result was a smoother learning progression and a challenge better calibrated to the level's context.</p>

                    <h4 class="modal-section-h3">3. Final Puzzle Recreation (Level 2)</h4>
                    <p class="modal-p">The final Level 2 puzzle had a too-obvious solution and low complexity. I recreated it by reinforcing the use of all three masks and actively integrating the various mechanics learned throughout the game. The goal: a challenge that works as a coherent culmination of the player's progression, without requiring new features.</p>
                `,
                qaBreakdown: `
                    <h4 class="modal-section-h3">Continuous QA Throughout the Project</h4>
                    <p class="modal-p">I ran playtesting sessions at every project milestone — Alpha 1, vs2, vs3, Alpha 2, Beta and Gold — accumulating over 40 hours of total testing time. Coverage included the main game flow, puzzles, scene transitions, player behavior in boundary zones, and overall build health.</p>
                    <p class="modal-p">Continuous QA integrated into the development cycle was key to keeping each delivery in a stable state and detecting issues while still solvable. I reported bugs and collaborated directly with the team to prioritize and validate fixes.</p>
                `,
                gallery: [
                    { src: "assets/images/Son of Ithaca/ithaca_combat.png", caption: "Level 1 — Asset integration and PhysX collisions in Wave Engine" },
                    { src: "assets/images/Son of Ithaca/Captura de pantalla 2026-04-07 211929.png", caption: "Wave Engine Editor — Component inspector, Rigidbody, PhysX colliders & SceneLoader_lvl2.lua script" },
                    { src: "assets/images/Son of Ithaca/Captura de pantalla 2026-04-07 212034.png", caption: "Wave Engine — Trigger Box Collider setup and Collectible.lua script with metric debug lines" },
                    { src: "assets/images/Son of Ithaca/Captura de pantalla 2026-04-18 192452.png", caption: "Real-time Navmesh and terrain boundary inspection preventing out-of-bounds player fallthroughs" },
                    { src: "assets/images/Son of Ithaca/Captura de pantalla 2026-05-26 214444 - copia - copia.png", caption: "Pedestal puzzle and mask mechanics featuring dynamic water shaders and volumetric fog in Wave Engine" },
                    { src: "assets/images/Son of Ithaca/ithaca_arena.png", caption: "Level 1 Definitive Layout — Zones, player flow and access routes" },
                    { src: "assets/images/Son of Ithaca/ithaca_boss.png", caption: "Redesigned Level 2 puzzle — Active integration of all three masks" },
                    { src: "assets/images/Son of Ithaca/ithaca_environment.png", caption: "Lighting and environmental composition in custom Wave Engine" }
                ]
            }
        }
    },
    {
        id: "ue5-blockout",
        categories: ["ld"],
        engine: "Unreal Engine 5",
        coverImage: "assets/images/blockout_extracted/ue5_blockout_1.png",
        roles: {
            es: ["Diseñador de Niveles"],
            ca: ["Dissenyador de Nivells"],
            en: ["Solo Level Designer"]
        },
        title: {
            es: "UE5 3D Level Blockout & Greyboxing",
            ca: "UE5 3D Level Blockout & Greyboxing",
            en: "UE5 3D Level Blockout & Greyboxing"
        },
        genre: {
            es: "Nivel de Acción y Exploración en 3D (Blockout Modular)",
            ca: "Nivell d'Acció i Exploració en 3D (Blockout Modular)",
            en: "3D Action & Exploration Level (Modular Blockout)"
        },
        excerpt: {
            es: "Blockout arquitectónico modular en Unreal Engine 5 enfocado en escala y 3Cs (Third Person), guía visual no diegética, ritmo espacial y documentación LDD completa.",
            ca: "Blockout arquitectònic modular a Unreal Engine 5 enfocat en escala i 3Cs (Third Person), guia visual no diegètica, ritme espacial i documentació LDD completa.",
            en: "Modular architectural greybox in Unreal Engine 5 focused on scale & 3Cs (Third Person), non-diegetic visual guiding, spatial pacing, and full LDD documentation."
        },
        highlights: {
            es: [
                "Escala y 3Cs: adaptación métrica rigurosa para Third Person Controller en Unreal Engine",
                "Composición espacial, POIs, POAs, framing y landmarks para guiar la atención del jugador sin HUD",
                "Integración técnica en UE5: Modeling Mode, Grid materials por código de color, Blueprints de interacción y LDD exhaustivo"
            ],
            ca: [
                "Escala i 3Cs: adaptació mètrica rigorosa per a Third Person Controller a Unreal Engine",
                "Composició espacial, POIs, POAs, framing i landmarks per guiar l'atenció del jugador sense HUD",
                "Integració tècnica a UE5: Modeling Mode, Grid materials per codi de color, Blueprints d'interacció i LDD exhaustiu"
            ],
            en: [
                "Scale and 3Cs: rigorous metric calibration tailored for Third Person Controller in Unreal Engine",
                "Spatial composition, POIs, POAs, framing, and landmarks guiding player intuition without HUD",
                "Technical UE5 integration: Modeling Mode, color-coded Grid materials, interaction Blueprints, and exhaustive LDD"
            ]
        },
        tags: ["Unreal Engine 5", "Greyboxing", "3Cs Metrics", "Sightlines & Framing", "Level Design Document", "Pacing & POI"],
        team: {
            es: "Proyecto individual (CITM Level Design)",
            ca: "Projecte individual (CITM Level Design)",
            en: "Individual Project (CITM Level Design)"
        },
        duration: {
            es: "1 mes (Invierno 2026)",
            ca: "1 mes (Hivern 2026)",
            en: "1 month (Winter 2026)"
        },
        
        details: {
            es: {
                projectOverview: `
                    <p class="project-prose">Proyecto de <strong>Level Design en Unreal Engine 5</strong> centrado en el diseño y validación de un blockout modular para una experiencia jugable en tercera persona (Third Person Controller). Siguiendo las directrices profesionales del diseño de niveles (requisitos de escala, 3Cs, ritmo espacial y navegación), el objetivo fue construir un entorno legible y funcional que comunique el camino principal y las mecánicas antes de aplicar cualquier fase de dressing artístico.</p>
                `,
                myContribution: `
                    <p class="project-prose">Diseño integral en solitario: redacción del <strong>Level Design Document (LDD)</strong> con puntos de interés (POI), puntos de acción (POA), ruta crítica (Critical Path) y curvas de pacing; construcción del blockout en UE5 utilizando Modeling Mode y Grid Materials con código de color; setup de iluminación direccional y de contraste; y validación jugable de las métricas del personaje y colisiones de cámara.</p>
                `,
                whatAndWhy: [
                    {
                        title: "Escala y Adecuación a las 3Cs (Third Person Controller)",
                        challenge: "Las proporciones arquitectónicas de la vida real no funcionan bien en un videojuego en tercera persona: techos bajos atascan la cámara, pasillos estrechos rompen el control y las alturas de salto se sienten frustrantes si no hay holgura métrica.",
                        what: "Diseñé todo el blockout adaptado a la cápsula y cámara de UE5: pasillos de combate con anchura mínima de 400 cm para evitar recortes de cámara, alturas de repisas estandarizadas a 200 cm (salto raso) y 300 cm (trepado con mantle), y coberturas a 100 cm y 220 cm.",
                        why: "El jugador necesita una respuesta cinestésica predecible. Ajustar la escala a las 3Cs (Character, Camera, Control) garantiza que el espacio premie la habilidad y que la cámara nunca entorpezca la visión del jugador."
                    },
                    {
                        title: "Guía Visual, Framing de Landmarks y Pacing",
                        challenge: "Guiar al jugador a través de la fortaleza y arenas sin recurrir a flechas en el suelo, minimapas ni marcadores de interfaz invasivos.",
                        what: "Utilicé técnicas de composición clásicas: aperturas arquitectónicas y arcos de piedra que enmarcan la torre de destino (Weenie/Landmark), puntos de observación elevados que revelan el objetivo antes de bajar, y focos lumínicos cenitales que señalan los puntos de acción (POA) y escaleras.",
                        why: "Fomenta la orientación intuitiva y el descubrimiento autónomo. El jugador lee la arquitectura de forma subconsciente, sintiéndose inteligente al avanzar sin ayuda artificial."
                    },
                    {
                        title: "Integración Técnica en Unreal Engine y Código de Color",
                        challenge: "Mantener el blockout limpio, modular y fácil de interpretar tanto para testers como para futuros artistas de entorno.",
                        what: "Utilicé el Modeling Mode de UE5 junto con Grid Materials aplicados con código de color funcional (zonas transitables en gris neutro, superficies de escalada en acento claro, zonas de combate delimitadas y volúmenes de bloqueo claramente identificables). Además, integré Blueprints de interacción, Postprocess Volume calibrado y Kill Triggers en todos los fosos.",
                        why: "Un blockout profesional debe separar claramente la intención mecánica del acabado cosmético. El código de color y las métricas de grid permiten validar la jugabilidad con total objetividad antes de invertir semanas en producción artística."
                    }
                ],
                overview: `
                    <p class="modal-p">Demostración técnica de <strong>Level Design y Blockout en Unreal Engine 5</strong>. El proyecto pone el foco en la construcción de una experiencia jugable real, adaptando cada espacio a las métricas del personaje, la cámara y el control (3Cs).</p>
                    <p class="modal-p">Incluye un <strong>Level Design Document (LDD)</strong> completo con análisis de POIs/POAs, desglose del Critical Path, ritmo espacial y material complementario.</p>
                `,
                ldBreakdown: `
                    <h4 class="modal-section-h3">1. Composición, Guiding y Pacing</h4>
                    <p class="modal-p">Implementación de técnicas avanzadas de navegación visual en el entorno 3D:</p>
                    <ul class="modal-list">
                        <li><strong>Framing & Landmarks:</strong> Puertas y aberturas que encuadran hitos visuales lejanos en cada transición de área.</li>
                        <li><strong>POIs y POAs:</strong> Distribución estratégica de puntos de interés visual y puntos de acción interactiva para modular el ritmo de exploración y combate.</li>
                        <li><strong>Diferenciación de Rutas:</strong> Camino crítico despejado y luminoso frente a desvíos secundarios elevados que ofrecen ventajas tácticas o coleccionables.</li>
                    </ul>

                    <h4 class="modal-section-h3">2. Escala, Métricas y 3Cs</h4>
                    <p class="modal-p">Estandarización rigurosa de dimensiones en torno al Third Person Controller:</p>
                    <ul class="modal-list">
                        <li>Salto base del personaje: plataformas calibradas a 200 cm (salto directo) y 300 cm (animación de trepado).</li>
                        <li>Pasillos y pasajes: anchura mínima de 400 cm y techos abiertos para garantizar libertad a la cámara de tercera persona.</li>
                        <li>Coberturas modulares: bloques a 100 cm (cobertura agachado) y 220 cm (cobertura total de pie).</li>
                    </ul>
                `,
                qaBreakdown: `
                    <h4 class="modal-section-h3">Verificación y Robustez Técnica en UE5</h4>
                    <p class="modal-p">Control de calidad aplicado durante la fase de blockout:</p>
                    <ul class="modal-list">
                        <li><strong>Grid Materials y Código de Color:</strong> Texturas de cuadrícula métrica para verificar proporciones al instante en el editor.</li>
                        <li><strong>Navmesh & IA Bounds:</strong> Validación de mallas de navegación continuas para que los enemigos no queden atascados.</li>
                        <li><strong>Control de Colisiones y Kill Volumes:</strong> Erradicación de huecos entre piezas modulares y colocación de Kill Triggers en caídas para evitar caídas al vacío infinito.</li>
                    </ul>
                `,
                gallery: [
                    { src: "assets/images/blockout_extracted/ue5_blockout_1.png", caption: "Vista panorámica del blockout en UE5 - Enmarcado visual y jerarquía de alturas" },
                    { src: "assets/images/blockout_extracted/ue5_blockout_2.png", caption: "Ruta de exploración secundaria con iluminación direccional y métricas de salto" },
                    { src: "assets/images/blockout_extracted/ue5_blockout_3.png", caption: "Arena de combate intermedia con coberturas modulares y escaleras" },
                    { src: "assets/images/blockout_extracted/Captura de pantalla 2026-01-01 114153.png", caption: "Prototipado en Unreal Engine - Grid materials métricos, iluminación y escala del personaje" },
                    { src: "assets/images/blockout_extracted/Captura de pantalla 2026-01-11 131109.png", caption: "Validación de líneas de visión, landmarks y enmarcado arquitectónico" },
                    { src: "assets/images/blockout_extracted/Captura de pantalla 2026-01-11 185842.png", caption: "Detalle de alturas de cobertura y espacio de combate en tercera persona" }
                ]
            },
            ca: {
                projectOverview: `
                    <p class="project-prose">Projecte de <strong>Level Design a Unreal Engine 5</strong> centrat en el disseny i validació d'un blockout modular per a una experiència jugable en tercera persona (Third Person Controller). Seguint les directrius professionals del disseny de nivells (requisits d'escala, 3Cs, ritme espacial i navegació), l'objectiu va ser construir un entorn llegible i funcional que comuniqui el camí principal i les mecàniques abans d'aplicar qualsevol fase de dressing artístic.</p>
                `,
                myContribution: `
                    <p class="project-prose">Disseny integral en solitari: redacció del <strong>Level Design Document (LDD)</strong> amb punts d'interès (POI), punts d'acció (POA), ruta crítica (Critical Path) i corbes de pacing; construcció del blockout a UE5 utilitzant Modeling Mode i Grid Materials amb codi de color; setup d'il·luminació direccional i de contrast; i validació jugable de les mètriques del personatge i col·lisions de càmera.</p>
                `,
                whatAndWhy: [
                    {
                        title: "Escala i Adequació a les 3Cs (Third Person Controller)",
                        challenge: "Les proporcions arquitectòniques de la vida real no funcionen bé en un videojoc en tercera persona: sostres baixos encallen la càmera, passadissos estrets trenquen el control i les altures de salt es tornen frustrants si no hi ha marge mètric.",
                        what: "Vaig dissenyar tot el blockout adaptat a la càpsula i càmera d'UE5: passadissos de combat amb amplada mínima de 400 cm per evitar retalls de càmera, alçades de replans estandarditzades a 200 cm (salt net) i 300 cm (grimpat amb mantle), i cobertures a 100 cm i 220 cm.",
                        why: "El jugador necessita una resposta cinestèsica predictible. Ajustar l'escala a les 3Cs (Character, Camera, Control) garanteix que l'espai premiï l'habilitat i que la càmera mai no entorpeixi la visió del jugador."
                    },
                    {
                        title: "Guia Visual, Framing de Landmarks i Pacing",
                        challenge: "Guiar el jugador a través de la fortalesa i arenes sense recórrer a fletxes a terra, minimapes ni marcadors d'interfície invasius.",
                        what: "Vaig utilitzar tècniques de composició clàssiques: obertures arquitectòniques i arcs de pedra que emmarquen la torre de destí (Weenie/Landmark), punts d'observació elevats que revelen l'objectiu abans de baixar, i focus lumínics zenitals que assenyalen els punts d'acció (POA) i escales.",
                        why: "Fomenta l'orientació intuïtiva i el descobriment autònom. El jugador llegeix l'arquitectura de forma subconscient, sentint-se intel·ligent en avançar sense ajudes artificials."
                    },
                    {
                        title: "Integració Tècnica a Unreal Engine i Codi de Color",
                        challenge: "Mantenir el blockout net, modular i fàcil d'interpretar tant per a testers com per a futurs artistes d'entorn.",
                        what: "Vaig emprar el Modeling Mode d'UE5 juntament amb Grid Materials aplicats amb codi de color funcional (zones transitables en gris neutre, superfícies d'escalada en accent clar, zones de combat delimitades i volums de bloqueig clarament identificables). A més, vaig integrar Blueprints d'interacció, Postprocess Volume calibrat i Kill Triggers a tots els fossats.",
                        why: "Un blockout professional ha de separar clarament la intenció mecànica de l'acabat cosmètic. El codi de color i les mètriques de grid permeten validar la jugabilitat amb total objectivitat abans d'invertir setmanes en producció artística."
                    }
                ],
                overview: `
                    <p class="modal-p">Demostració tècnica de <strong>Level Design i Blockout a Unreal Engine 5</strong>. El projecte posa el focus en la construcció d'una experiència jugable real, adaptant cada espai a les mètriques del personatge, la càmera i el control (3Cs).</p>
                    <p class="modal-p">Inclou un <strong>Level Design Document (LDD)</strong> complet amb anàlisi de POIs/POAs, desglossament del Critical Path, ritme espacial i material complementari.</p>
                `,
                ldBreakdown: `
                    <h4 class="modal-section-h3">1. Composició, Guiding i Pacing</h4>
                    <p class="modal-p">Implementació de tècniques avançades de navegació visual a l'entorn 3D:</p>
                    <ul class="modal-list">
                        <li><strong>Framing & Landmarks:</strong> Portes i obertures que emmarquen fites visuals llunyanes a cada transició d'àrea.</li>
                        <li><strong>POIs i POAs:</strong> Distribució estratègica de punts d'interès visual i punts d'acció interactiva per modular el ritme d'exploració i combat.</li>
                        <li><strong>Diferenciació de Rutes:</strong> Camí crític clar i lluminós enfront de desviaments secundaris elevats que ofereixen avantatges tàctics o col·leccionables.</li>
                    </ul>

                    <h4 class="modal-section-h3">2. Escala, Mètriques i 3Cs</h4>
                    <p class="modal-p">Estandardització rigorosa de dimensions entorn del Third Person Controller:</p>
                    <ul class="modal-list">
                        <li>Salt base del personatge: plataformes calibrades a 200 cm (salt directe) i 300 cm (animació de grimpar).</li>
                        <li>Passadissos i passos: amplada mínima de 400 cm i sostres oberts per garantir llibertat a la càmera de tercera persona.</li>
                        <li>Cobertures modulars: blocs a 100 cm (cobertura ajupit) i 220 cm (cobertura total dempeus).</li>
                    </ul>
                `,
                qaBreakdown: `
                    <h4 class="modal-section-h3">Verificació i Robustesa Tècnica a UE5</h4>
                    <p class="modal-p">Control de qualitat aplicat durant la fase de blockout:</p>
                    <ul class="modal-list">
                        <li><strong>Grid Materials i Codi de Color:</strong> Textures de quadrícula mètrica per verificar proporcions a l'instant a l'editor.</li>
                        <li><strong>Navmesh & IA Bounds:</strong> Validació de malles de navegació contínues perquè els enemics no quedin atrapats.</li>
                        <li><strong>Control de Col·lisions i Kill Volumes:</strong> Erradicació d'escletxes entre peces modulars i col·locació de Kill Triggers en caigudes per evitar caigudes al buit infinit.</li>
                    </ul>
                `,
                gallery: [
                    { src: "assets/images/blockout_extracted/ue5_blockout_1.png", caption: "Vista panoràmica del blockout a UE5 - Emmarcat visual i jerarquia d'alçades" },
                    { src: "assets/images/blockout_extracted/ue5_blockout_2.png", caption: "Ruta d'exploració secundària amb il·luminació direccional i mètriques de salt" },
                    { src: "assets/images/blockout_extracted/ue5_blockout_3.png", caption: "Arena de combat intermèdia amb cobertures modulars i escales" },
                    { src: "assets/images/blockout_extracted/Captura de pantalla 2026-01-01 114153.png", caption: "Prototipatge a Unreal Engine - Grid materials mètrics, il·luminació i escala del personatge" },
                    { src: "assets/images/blockout_extracted/Captura de pantalla 2026-01-11 131109.png", caption: "Validació de línies de visió, landmarks i emmarcat arquitectònic" },
                    { src: "assets/images/blockout_extracted/Captura de pantalla 2026-01-11 185842.png", caption: "Detall d'alçades de cobertura i espai de combat en tercera persona" }
                ]
            },
            en: {
                projectOverview: `
                    <p class="project-prose">A dedicated <strong>Unreal Engine 5 Level Design</strong> showcase focused on designing, prototyping, and validating a modular greybox level for a third-person action experience (Third Person Controller). Adhering to professional level design standards (scale, 3Cs, spatial pacing, and navigation), the goal was to craft a readable and functional environment communicating mechanics and golden path flow before art dressing.</p>
                `,
                myContribution: `
                    <p class="project-prose">Solo Level Designer responsible for end-to-end execution: drafting a complete <strong>Level Design Document (LDD)</strong> with points of interest (POI), points of action (POA), critical path analysis, and pacing curves; constructing the blockout in UE5 using Modeling Mode and color-coded Grid Materials; setting up directional and contrast lighting; and validating player metrics and camera clearance.</p>
                `,
                whatAndWhy: [
                    {
                        title: "Scale & 3Cs Adaptation (Third Person Controller)",
                        challenge: "Real-life architectural proportions fail in third-person games: low ceilings cause camera clipping, narrow hallways restrict character maneuvers, and jump heights feel punishing without metric clearance.",
                        what: "Standardized the blockout around UE5 character metrics: 400 cm minimum combat corridor clearance to prevent camera occlusion, platform ledges calibrated at 200 cm (clean vault) and 300 cm (mantle grab), and asymmetric low/high cover blocks at 100 cm and 220 cm.",
                        why: "Players require predictable kinesthetic feedback. Calibrating scale to the 3Cs (Character, Camera, Control) ensures the space rewards skill and keeps camera angles clean and readable."
                    },
                    {
                        title: "Non-Diegetic Visual Guidance, Sightline Framing & Pacing",
                        challenge: "Guiding player progression across the fortress and arenas without relying on floor arrows, minimaps, or intrusive HUD markers.",
                        what: "Utilized classical composition techniques: architectural portals and archways that frame the destination tower (Weenie/Landmark), elevated observation points revealing objectives before descent, and skylights highlighting points of action (POA) and ladders.",
                        why: "Encourages intuitive spatial navigation and autonomous discovery. The player subconsciously reads the architecture, feeling intelligent when advancing without artificial prompts."
                    },
                    {
                        title: "Unreal Engine Technical Integration & Color Coding",
                        challenge: "Keeping the modular blockout clean, readable, and production-ready for testers and downstream environment artists.",
                        what: "Leveraged UE5 Modeling Mode alongside functional color-coded Grid Materials (walkable floors in neutral grey, traversal accents on climbable ledges, defined combat arenas, and blocking bounds). Integrated Blueprint interactions, calibrated Postprocess Volumes, and placed Kill Triggers in all hazard pits.",
                        why: "A professional blockout must isolate gameplay mechanics from visual dressing. Grid textures and color coding allow objective gameplay validation before committing weeks to artistic production."
                    }
                ],
                overview: `
                    <p class="modal-p">A pure <strong>Level Design and Blockout showcase in Unreal Engine 5</strong>. The project focuses on building a functional playable experience, adapting each volume to player metrics, camera, and control (3Cs).</p>
                    <p class="modal-p">Includes a comprehensive <strong>Level Design Document (LDD)</strong> with POI/POA analysis, Critical Path breakdown, spatial pacing, and supplementary flow diagrams.</p>
                `,
                ldBreakdown: `
                    <h4 class="modal-section-h3">1. Composition, Guiding & Spatial Pacing</h4>
                    <p class="modal-p">Advanced 3D environmental composition techniques:</p>
                    <ul class="modal-list">
                        <li><strong>Framing & Landmarks:</strong> Portals and gateways consistently framing distant visual landmarks across area thresholds.</li>
                        <li><strong>POIs & POAs:</strong> Strategic placement of visual points of interest and action hubs to modulate exploration and combat intensity.</li>
                        <li><strong>Route Hierarchy:</strong> Broad, well-lit Golden Path contrasted against tucked-away vertical branches offering tactical high-ground advantages.</li>
                    </ul>

                    <h4 class="modal-section-h3">2. Player Metrics, Scale & 3Cs</h4>
                    <p class="modal-p">Rigorous dimensional discipline tuned for third-person action:</p>
                    <ul class="modal-list">
                        <li>Character jump clearance: 200 cm platforms for smooth jumps, 300 cm for mandatory mantle grabs.</li>
                        <li>Combat corridors: minimum 400 cm width with open ceilings to preserve 3rd-person camera freedom.</li>
                        <li>Tactical covers: 100 cm (crouch cover) and 220 cm (full standing obstruction).</li>
                    </ul>
                `,
                qaBreakdown: `
                    <h4 class="modal-section-h3">Technical Verification & Engine Robustness</h4>
                    <p class="modal-p">Quality assurance passes applied during the greybox phase:</p>
                    <ul class="modal-list">
                        <li><strong>Grid Materials & Color Coding:</strong> Metric texture grids for instantaneous visual validation in editor.</li>
                        <li><strong>Navmesh & AI Bounds:</strong> Validating contiguous navigation volumes to prevent AI snagging or pathfinding failures.</li>
                        <li><strong>Collision & Kill Volumes:</strong> Eradicating geometry seams between modular pieces and configuring instant death triggers in pits.</li>
                    </ul>
                `,
                gallery: [
                    { src: "assets/images/blockout_extracted/ue5_blockout_1.png", caption: "Panoramic UE5 greybox view - Visual framing and height hierarchy" },
                    { src: "assets/images/blockout_extracted/ue5_blockout_2.png", caption: "Secondary exploration branch with directional lighting and jump metrics" },
                    { src: "assets/images/blockout_extracted/ue5_blockout_3.png", caption: "Intermediate combat courtyard with modular cover blocks and stairs" },
                    { src: "assets/images/blockout_extracted/Captura de pantalla 2026-01-01 114153.png", caption: "Unreal Engine prototyping - Metric grid materials, lighting cues, and player scale" },
                    { src: "assets/images/blockout_extracted/Captura de pantalla 2026-01-11 131109.png", caption: "Sightlines, landmarks, and architectural visual framing validation" },
                    { src: "assets/images/blockout_extracted/Captura de pantalla 2026-01-11 185842.png", caption: "Cover heights and third-person combat arena spatial clearance" }
                ]
            }
        }
    },
    {
        id: "the-apprentice",
        categories: ["ld", "qa"],
        engine: {
            es: "Motor Propio C++ & Tiled",
            ca: "Motor Propi C++ & Tiled",
            en: "Custom C++ Engine & Tiled"
        },
        coverImage: "assets/images/apprentice/apprentice_level_1.jpg",
        roles: {
            es: ["Diseñador", "QA"],
            ca: ["Dissenyador", "QA"],
            en: ["Designer", "QA"]
        },
        title: {
            es: "The Apprentice",
            ca: "The Apprentice",
            en: "The Apprentice"
        },
        genre: {
            es: "Metroidvania / Plataformas 2D en C++",
            ca: "Metroidvania / Plataformes 2D en C++",
            en: "2D Metroidvania / Action Platformer (C++)"
        },
        excerpt: {
            es: "Diseño de 5 niveles jugables y 2 niveles de jefes en Tiled, sistema de 8 tipos de enemigos y 2 bosses, y testing diario con reporte en Loom y playtesting con usuarios externos.",
            ca: "Disseny de 5 nivells jugables i 2 nivells de caps en Tiled, sistema de 8 tipus d'enemics i 2 bosses, i testing diari amb report en Loom i playtesting amb usuaris externs.",
            en: "Design of 5 playable levels and 2 boss levels in Tiled, design and balancing of 8 enemy types and 2 bosses, and daily QA with Loom video reports and external user playtesting."
        },
        highlights: {
            es: [
                "Diseño de 5 niveles jugables y 2 niveles contra jefes (DungBeetle y Nullwarden) con prototipado en Dungeon Scrawl y Tiled",
                "Diseño, catalogación y balanceado de 8 tipos de enemigos con curva de aparición progresiva a lo largo de los biomas",
                "QA sistemático: testing diario de builds, bug reporting en vídeo con Loom y pruebas de balance con 3 usuarios externos"
            ],
            ca: [
                "Disseny de 5 nivells jugables i 2 nivells contra caps (DungBeetle i Nullwarden) amb prototipatge en Dungeon Scrawl i Tiled",
                "Disseny, catalogació i balanceig de 8 tipus d'enemics amb corba d'aparició progressiva al llarg dels biomes",
                "QA sistemàtic: testing diari de builds, bug reporting en vídeo amb Loom i proves de balanç amb 3 usuaris externs"
            ],
            en: [
                "Design of 5 playable levels and 2 boss levels (DungBeetle & Nullwarden) with prototyping in Dungeon Scrawl and Tiled",
                "Design, cataloging, and balancing of 8 enemy types with progressive difficulty scaling across biomes",
                "Systematic QA: daily build testing, video bug reporting via Loom, and usability/balancing sessions with 3 external users"
            ]
        },
        tags: ["Motor Propio C++", "Tiled Map Editor", "Metroidvania 2D", "Diseño de Enemigos", "Bug Reporting en Vídeo (Loom)", "Playtesting con Usuarios"],
        team: {
            es: "Equipo 1 (CITM Projecte 2)",
            ca: "Equip 1 (CITM Projecte 2)",
            en: "Team 1 (CITM Projecte 2)"
        },
        duration: {
            es: "4 meses (Projecte 2)",
            ca: "4 mesos (Projecte 2)",
            en: "4 months (Projecte 2)"
        },
        
        details: {
            es: {
                projectOverview: `
                    <p class="project-prose"><strong>The Apprentice</strong> es un juego de acción y plataformas en 2D con estructura Metroidvania, desarrollado sobre un motor propio en C++ por el Equipo 1 en el marco de la asignatura Projecte 2 del CITM. El jugador recorre distintos biomas interconectados (Tutorial, Manglar, Bosque Boreal y Bosque Calcinado), combinando secciones de plataformeo de precisión, combate frente a enemigos dinámicos y dos enfrentamientos contra jefes finales.</p>
                `,
                myContribution: `
                    <p class="project-prose">En el proyecto asumí dos roles fundamentales: <strong>Designer</strong> y <strong>QA</strong>. Como Designer, fui responsable de la creación del sistema de progresión de niveles, diseñando <strong>5 niveles jugables y 2 niveles de jefes</strong> en Tiled Map Editor tras prototipar al menos 3 versiones de cada nivel en Dungeon Scrawl. También diseñé y balanceé el <strong>sistema de enemigos</strong>, creando 8 tipos de enemigos con comportamientos progresivos y dos jefes (DungBeetle y Nullwarden). Como QA, establecí el proceso de testing diario de builds con el equipo de programación, gestioné el reporte sistemático de bugs grabado en vídeo con <strong>Loom</strong>, coordiné sesiones de testeo con 3 usuarios externos y verifiqué las pruebas de regresión tras cada corrección.</p>
                `,
                whatAndWhy: [
                    {
                        title: "Diseño de 5 Niveles Jugables y 2 Niveles contra Jefes en Tiled",
                        challenge: "Construir una estructura de niveles que enseñara progresivamente las mecánicas del jugador, mantuviera el engagement constante y evitara picos injustos de frustración desde el tutorial hasta los desafíos avanzados.",
                        what: "Analicé patrones de diseño en referentes del género (Metroid Dread, Blasphemous, Hollow Knight y Animal Well). Boceté un mínimo de 3 versiones por nivel en herramientas como Dungeon Scrawl antes de pasar al motor. En Tiled, estructuré cada nivel en capas rigurosas (Background, Platforms, Collision, Enemies, Props), calculé las distancias óptimas entre plataformas, definí checkpoints mediante objetos y ajusté los colliders con los tilesets finales del equipo de arte.",
                        why: "Iterar primero en bocetos 2D rápidos ahorra tiempo de desarrollo técnico y permite validar el flujo de juego. La organización estricta por capas en Tiled evita confusiones entre geometría transitable y arte de fondo, asegurando que el control de colisiones sea limpio y confiable."
                    },
                    {
                        title: "Diseño y Balanceado de 8 Tipos de Enemigos y 2 Bosses",
                        challenge: "Complementar las secciones de plataformas con peligros dinámicos que obligaran al jugador a usar sus habilidades y crearan tensión rítmica sin entorpecer el avance injustamente.",
                        what: "Investigué patrones de comportamiento en Hollow Knight y Blasphemous, catalogando 9 tipos de conductas. Diseñé e introduje escalonadamente 8 enemigos a lo largo de los niveles: Creebler y Hypnoviper (Tutorial); Thumpod, Dreadspire y Scurver (Manglar 1-3); Bloodrusher, Mireborn, Broodheart y Noctilume (Bosque Boreal 1-3); y Shyver (Bosque Calcinado). Diseñé además las arenas y mecánicas de los 2 jefes: DungBeetle (Bosque Boreal 4) y Nullwarden (Bosque Calcinado 2), ajustando velocidades, áreas de ataque y colisiones mediante playtesting.",
                        why: "Una curva de enemigos escalonada permite que el jugador aprenda a lidiar con amenazas básicas antes de combinar enemigos terrestres, voladores o de embestida. Los jefes actúan como examen de maestría de todas las mecánicas aprendidas en el bioma."
                    },
                    {
                        title: "QA Sistemático: Testing Diario, Loom Video Reporting y Tests Externos",
                        challenge: "Al trabajar sobre un motor propio en C++ con cambios continuos de programación, los bugs de físicas, atascos de colisión y desajustes de dificultad amenazaban con bloquear el desarrollo si no se detectaban al instante.",
                        what: "Ejecuté pruebas diarias sobre cada build nueva para validar el bucle principal y mecánicas core. Documenté cada bug con pasos exactos de reproducción, capturas y grabaciones en vídeo mediante Loom para que programación pudiera ver el error en acción. Coordiné sesiones de playtesting con 3 usuarios externos para observar sin intervenir dónde se atascaban o frustraban, y realicé pruebas de regresión específicas antes de dar por cerrado cada bug.",
                        why: "El reporte en vídeo mediante Loom elimina malentendidos y reduce a la mitad el tiempo de resolución de bugs complejos en motores propios. Las pruebas con usuarios externos ajenos al equipo son imprescindibles para identificar puntos ciegos de dificultad y accesibilidad que los desarrolladores ya no perciben."
                    }
                ],
                overview: `
                    <p class="modal-p"><strong>The Apprentice</strong> es un juego de acción y plataformas en 2D desarrollado por el Equipo 1 sobre un motor propio en C++ durante el Projecte 2 del CITM. Combina exploración de biomas hostiles, combate contra criaturas biomecánicas y plataformeo de precisión.</p>
                    <p class="modal-p">Mis aportaciones clave según el Reporte Individual del proyecto abarcaron el rol de <strong>Designer</strong> (diseño de los 5 niveles jugables, 2 niveles de jefes y sistema completo de 8 tipos de enemigos + 2 bosses en Tiled) y el rol de <strong>QA</strong> (testing diario de builds, bug reporting en vídeo con Loom, tests con usuarios externos y verificación de regresión).</p>
                `,
                ldBreakdown: `
                    <h4 class="modal-section-h3">1. Sistema de Progresión de Niveles (5 Niveles + 2 Jefes)</h4>
                    <p class="modal-p">A partir del análisis de referentes como <em>Metroid Dread</em>, <em>Blasphemous</em>, <em>Hollow Knight</em> y <em>Animal Well</em>, diseñé la progresión de niveles del juego:</p>
                    <ul class="modal-list">
                        <li><strong>Prototipado Previo:</strong> Mínimo 3 versiones de cada nivel bocetadas y exportadas en herramientas como Dungeon Scrawl antes de la implementación final.</li>
                        <li><strong>Estructura por Capas en Tiled:</strong> Separación rigurosa entre capas de Background, Platforms, Collision, Enemies y Props para garantizar total legibilidad mecánica.</li>
                        <li><strong>Métricas y Puntos de Control:</strong> Ajuste milimétrico de saltos y plataformas, dimensionamiento óptimo para la cápsula del personaje y colocación de checkpoints mediante objetos de Tiled.</li>
                    </ul>

                    <h4 class="modal-section-h3">2. Sistema de Enemigos y Curva de Dificultad</h4>
                    <p class="modal-p">Catalogación de 9 patrones de comportamiento y distribución progresiva por biomas:</p>
                    <ul class="modal-list">
                        <li><strong>Tutorial:</strong> Creebler + Hypnoviper (enseñanza de patrones básicos).</li>
                        <li><strong>Manglar 1 a 3:</strong> Thumpod, Dreadspire y Scurver sumados a los anteriores.</li>
                        <li><strong>Bosque Boreal 1 a 3:</strong> Bloodrusher, Mireborn, Broodheart y Noctilume.</li>
                        <li><strong>Arenas de Jefes:</strong> 1er Boss (<strong>DungBeetle</strong> en Bosque Boreal 4) y 2º Boss (<strong>Nullwarden</strong> en Bosque Calcinado 2).</li>
                    </ul>
                `,
                qaBreakdown: `
                    <h4 class="modal-section-h3">Proceso Integral de QA & Bug Tracking</h4>
                    <p class="modal-p">Metodología de control de calidad documentada en el reporte individual:</p>
                    <ul class="modal-list">
                        <li><strong>Testing Diario de Builds:</strong> Verificación de cada nueva versión compilada por programación, validando estabilidad del bucle jugable y mecánicas principales.</li>
                        <li><strong>Bug Reporting en Vídeo (Loom):</strong> Grabación sistemática de sesiones de playtesting y bugs encontrados, detallando pasos de reproducción y evidencias visuales para el equipo.</li>
                        <li><strong>Pruebas con 3 Usuarios Externos:</strong> Sesiones observadas con jugadores ajenos al proyecto para evaluar objetivamente la curva de aprendizaje, tiempos y frustración.</li>
                        <li><strong>Testing de Regresión y Pre-entrega:</strong> Comprobación de cada corrección marcada por desarrollo para asegurar que no generase nuevos fallos colaterales.</li>
                    </ul>
                `,
                gallery: [
                    { src: "assets/images/apprentice/apprentice_level_1.jpg", caption: "Diseño de niveles en Tiled - Distribución de capas de colisión, plataformas y enemigos" },
                    { src: "assets/images/apprentice/Captura de pantalla 2026-10-13 182830.png", caption: "Layout en Dungeon Scrawl - Arena del jefe DungBeetle, puzles de placas, puertas y pinchos" },
                    { src: "assets/images/apprentice/Captura de pantalla 2026-10-13 182847.png", caption: "Mapa interconectado del Manglar / Tutorial con distribución de enemigos Creebler, Thumpod y checkpoints" },
                    { src: "assets/images/apprentice/Captura de pantalla 2026-10-13 182906.png", caption: "Bioma Boreal: progresión vertical, estalactitas, mecánicas de hook y balance de enemigos" },
                    { src: "assets/images/apprentice/apprentice_level_2.jpg", caption: "Zona de plataformeo y desafío con integración de enemigos y obstáculos" },
                    { src: "assets/images/apprentice/apprentice_dash_jump.jpg", caption: "Testing de métricas de salto y dimensiones de paso del personaje" }
                ]
            },
            ca: {
                projectOverview: `
                    <p class="project-prose"><strong>The Apprentice</strong> és un joc d'acció i plataformes en 2D amb estructura Metroidvania, desenvolupat sobre un motor propi en C++ per l'Equip 1 en el marc de l'assignatura Projecte 2 del CITM. El jugador recorre diferents biomes interconnectats (Tutorial, Manglar, Bosc Boreal i Bosc Calcinat), combinant seccions de plataformeu de precisió, combat contra enemics dinàmics i dos enfrontaments contra caps finals.</p>
                `,
                myContribution: `
                    <p class="project-prose">En el projecte vaig assumir dos rols fonamentals: <strong>Designer</strong> i <strong>QA</strong>. Com a Designer, vaig ser responsable de la creació del sistema de progressió de nivells, dissenyant <strong>5 nivells jugables i 2 nivells de caps</strong> en Tiled Map Editor després de prototipar com a mínim 3 versions de cada nivell a Dungeon Scrawl. També vaig dissenyar i balancejar el <strong>sistema d'enemics</strong>, creant 8 tipus d'enemics amb comportaments progressius i dos caps (DungBeetle i Nullwarden). Com a QA, vaig establir el procés de testing diari de builds amb l'equip de programació, vaig gestionar el report sistemàtic de bugs enregistrat en vídeo amb <strong>Loom</strong>, vaig coordinar sessions de testatge amb 3 usuaris externs i vaig verificar les proves de regressió després de cada correcció.</p>
                `,
                whatAndWhy: [
                    {
                        title: "Disseny de 5 Nivells Jugables i 2 Nivells contra Caps en Tiled",
                        challenge: "Construir una estructura de nivells que ensenyés progressivament les mecàniques del jugador, mantingués l'engagement constant i evités pics injustos de frustració des del tutorial fins als reptes avançats.",
                        what: "Vaig analitzar patrons de disseny en referents del gènere (Metroid Dread, Blasphemous, Hollow Knight i Animal Well). Vaig esbossar un mínim de 3 versions per nivell en eines com Dungeon Scrawl abans de passar al motor. A Tiled, vaig estructurar cada nivell en capes rigoroses (Background, Platforms, Collision, Enemies, Props), vaig calcular les distàncies òptimes entre plataformes, vaig definir checkpoints mitjançant objectes i vaig ajustar els colliders amb els tilesets finals de l'equip d'art.",
                        why: "Iterar primer en esbossos 2D ràpids estalvia temps de desenvolupament tècnic i permet validar el flux de joc. L'organització estricta per capes a Tiled evita confusions entre geometria transitable i art de fons, assegurant que el control de col·lisions sigui net i fiable."
                    },
                    {
                        title: "Disseny i Balanceig de 8 Tipus d'Enemics i 2 Bosses",
                        challenge: "Complementar les seccions de plataformes amb perills dinàmics que obliguessin el jugador a utilitzar les seves habilitats i creessin tensió rítmica sense entorpir l'avanç injustament.",
                        what: "Vaig investigar patrons de comportament a Hollow Knight i Blasphemous, catalogant 9 tipus de conductes. Vaig dissenyar i introduir esglaonadament 8 enemics al llarg dels nivells: Creebler i Hypnoviper (Tutorial); Thumpod, Dreadspire i Scurver (Manglar 1-3); Bloodrusher, Mireborn, Broodheart i Noctilume (Bosc Boreal 1-3); i Shyver (Bosc Calcinat). Vaig dissenyar a més les arenes i mecàniques dels 2 caps: DungBeetle (Bosc Boreal 4) i Nullwarden (Bosc Calcinat 2), ajustant velocitats, àrees d'atac i col·lisions mitjançant playtesting.",
                        why: "Una corba d'enemics esglaonada permet que el jugador aprengui a lidiar amb amenaces bàsiques abans de combinar enemics terrestres, voladors o d'envestida. Els caps actuen com a examen de mestratge de totes les mecàniques apreses al bioma."
                    },
                    {
                        title: "QA Sistemàtic: Testing Diari, Loom Video Reporting i Tests Externs",
                        challenge: "En treballar sobre un motor propi en C++ amb canvis continus de programació, els bugs de físiques, enganxades de col·lisió i desajustos de dificultat amenaçaven de bloquejar el desenvolupament si no es detectaven a l'instant.",
                        what: "Vaig executar proves diàries sobre cada build nova per validar el bucle principal i mecàniques core. Vaig documentar cada bug amb passos exactes de reproducció, captures i gravacions en vídeo mitjançant Loom perquè programació pogués veure l'error en acció. Vaig coordinar sessions de playtesting amb 3 usuaris externs per observar sense intervenir on s'encallaven o frustraven, i vaig fer proves de regressió específiques abans de donar per tancat cada bug.",
                        why: "El report en vídeo mitjançant Loom elimina malentesos i redueix a la meitat el temps de resolució de bugs complexos en motors propis. Les proves amb usuaris externs aliens a l'equip són imprescindibles per identificar punts cecs de dificultat i accessibilitat que els desenvolupadors ja no perceben."
                    }
                ],
                overview: `
                    <p class="modal-p"><strong>The Apprentice</strong> és un joc d'acció i plataformes en 2D desenvolupat per l'Equip 1 sobre un motor propi en C++ durant el Projecte 2 del CITM. Combina exploració de biomes hostils, combat contra criatures biomecàniques i plataformeu de precisió.</p>
                    <p class="modal-p">Les meves aportacions clau segons el Report Individual del projecte van abraçar el rol de <strong>Designer</strong> (disseny dels 5 nivells jugables, 2 nivells de caps i sistema complet de 8 tipus d'enemics + 2 bosses en Tiled) i el rol de <strong>QA</strong> (testing diari de builds, bug reporting en vídeo amb Loom, tests amb usuaris externs i verificació de regressió).</p>
                `,
                ldBreakdown: `
                    <h4 class="modal-section-h3">1. Sistema de Progressió de Nivells (5 Nivells + 2 Caps)</h4>
                    <p class="modal-p">A partir de l'anàlisi de referents com <em>Metroid Dread</em>, <em>Blasphemous</em>, <em>Hollow Knight</em> i <em>Animal Well</em>, vaig dissenyar la progressió de nivells del joc:</p>
                    <ul class="modal-list">
                        <li><strong>Prototipatge Previ:</strong> Mínim 3 versions de cada nivell esbossades i exportades en eines com Dungeon Scrawl abans de la implementació final.</li>
                        <li><strong>Estructura per Capes a Tiled:</strong> Separació rigorosa entre capes de Background, Platforms, Collision, Enemies i Props per garantir total llegibilitat mecànica.</li>
                        <li><strong>Mètriques i Punts de Control:</strong> Ajust mil·limètric de salts i plataformes, dimensionament òptim per a la càpsula del personatge i col·locació de checkpoints mitjançant objectes de Tiled.</li>
                    </ul>

                    <h4 class="modal-section-h3">2. Sistema d'Enemics i Corba de Dificultat</h4>
                    <p class="modal-p">Catalogació de 9 patrons de comportament i distribució progressiva per biomes:</p>
                    <ul class="modal-list">
                        <li><strong>Tutorial:</strong> Creebler + Hypnoviper (ensenyament de patrons bàsics).</li>
                        <li><strong>Manglar 1 a 3:</strong> Thumpod, Dreadspire i Scurver sumats als anteriors.</li>
                        <li><strong>Bosc Boreal 1 a 3:</strong> Bloodrusher, Mireborn, Broodheart i Noctilume.</li>
                        <li><strong>Arenes de Caps:</strong> 1r Boss (<strong>DungBeetle</strong> a Bosc Boreal 4) i 2n Boss (<strong>Nullwarden</strong> a Bosc Calcinat 2).</li>
                    </ul>
                `,
                qaBreakdown: `
                    <h4 class="modal-section-h3">Procés Integral de QA & Bug Tracking</h4>
                    <p class="modal-p">Metodologia de control de qualitat documentada al report individual:</p>
                    <ul class="modal-list">
                        <li><strong>Testing Diari de Builds:</strong> Verificació de cada nova versió compilada per programació, validant estabilitat del bucle jugable i mecàniques principals.</li>
                        <li><strong>Bug Reporting en Vídeo (Loom):</strong> Gravació sistemàtica de sessions de playtesting i bugs trobats, detallant passos de reproducció i evidències visuals per a l'equip.</li>
                        <li><strong>Proves amb 3 Usuaris Externs:</strong> Sessions observades amb jugadors aliens al projecte per avaluar objectivament la corba d'aprenentatge, temps i frustració.</li>
                        <li><strong>Testing de Regressió i Pre-entrega:</strong> Comprovació de cada correcció marcada per desenvolupament per assegurar que no generés nous errors col·laterals.</li>
                    </ul>
                `,
                gallery: [
                    { src: "assets/images/apprentice/apprentice_level_1.jpg", caption: "Disseny de nivells a Tiled - Distribució de capes de col·lisió, plataformes i enemics" },
                    { src: "assets/images/apprentice/Captura de pantalla 2026-10-13 182830.png", caption: "Layout a Dungeon Scrawl - Arena del cap DungBeetle, puzles de plaques, portes i punxes" },
                    { src: "assets/images/apprentice/Captura de pantalla 2026-10-13 182847.png", caption: "Mapa interconnectat del Manglar / Tutorial amb distribució d'enemics Creebler, Thumpod i checkpoints" },
                    { src: "assets/images/apprentice/Captura de pantalla 2026-10-13 182906.png", caption: "Bosc Boreal: progressió vertical, estalactites, mecàniques de hook i balanç d'enemics" },
                    { src: "assets/images/apprentice/apprentice_level_2.jpg", caption: "Zona de plataformeu i repte amb integració d'enemics i obstacles" },
                    { src: "assets/images/apprentice/apprentice_dash_jump.jpg", caption: "Testing de mètriques de salt i dimensions de pas del personatge" }
                ]
            },
            en: {
                projectOverview: `
                    <p class="project-prose"><strong>The Apprentice</strong> is a 2D Metroidvania action platformer developed on a custom C++ engine by Team 1 for the Projecte 2 course at CITM (UPC). Players traverse diverse interconnected biomes (Tutorial, Mangrove, Boreal Forest, and Calcinated Forest), overcoming precision platforming challenges, battling dynamic enemies, and conquering two major boss encounters.</p>
                `,
                myContribution: `
                    <p class="project-prose">I served in two primary roles: <strong>Designer</strong> and <strong>QA</strong>. As Designer, I authored the level progression architecture, designing <strong>5 playable levels and 2 boss levels</strong> in Tiled Map Editor after prototyping at least 3 layouts per level in Dungeon Scrawl. I also designed and balanced the <strong>enemy system</strong> (8 distinct enemy types plus two bosses: DungBeetle and Nullwarden). As QA, I managed daily build testing with the programming team, documented bugs via <strong>Loom</strong> video recordings with clear reproduction steps, coordinated external playtesting sessions with 3 external users, and ran regression passes on every fix.</p>
                `,
                whatAndWhy: [
                    {
                        title: "5 Playable Levels & 2 Boss Levels Designed in Tiled",
                        challenge: "Structuring level progression to teach core mechanics incrementally and maintain engagement without sudden spikes in frustration from the tutorial to late-game areas.",
                        what: "Researched genre benchmarks (Metroid Dread, Blasphemous, Hollow Knight, Animal Well). Sketched at least 3 layouts per level in Dungeon Scrawl before committing to engine builds. In Tiled, organized each level into strict layers (Background, Platforms, Collision, Enemies, Props), tuned platform distances, placed checkpoint trigger objects, and aligned final colliders with art tilesets.",
                        why: "Fast 2D paper/digital prototyping saves engineering time by proving pacing and spatial flow before production. Strict layer hierarchy in Tiled ensures collision fidelity and visual readability, preventing player disorientation."
                    },
                    {
                        title: "Design & Balancing of 8 Enemy Types and 2 Bosses",
                        challenge: "Complementing platforming sequences with dynamic threats that demand mastery of learned mechanics without introducing unfair obstacles.",
                        what: "Studied enemy AI patterns in Hollow Knight and Blasphemous, cataloging 9 behavior archetypes. Progressively introduced 8 enemy types across biomes: Creebler & Hypnoviper (Tutorial); Thumpod, Dreadspire & Scurver (Mangrove); Bloodrusher, Mireborn, Broodheart & Noctilume (Boreal Forest); and Shyver (Calcinated Forest). Designed the boss encounter mechanics for DungBeetle (Boreal Forest 4) and Nullwarden (Calcinated Forest 2), tuning speeds, attack ranges, and hitboxes through iterative testing.",
                        why: "Gradual enemy pacing ensures players learn basic threat evasion before encountering combined aerial, ground, and charge hazards. Boss encounters serve as high-stakes mastery exams for all mechanics taught within their biomes."
                    },
                    {
                        title: "Systematic QA: Daily Build Testing, Loom Video Reports & External Sessions",
                        challenge: "Working on a custom C++ engine with frequent code pushes meant physics anomalies, collision snags, and difficulty issues could block team progress if not identified immediately.",
                        what: "Ran daily test passes on every new build from the programming team to validate core mechanics and loop stability. Logged each bug with exact reproduction steps, screenshots, and Loom video recordings. Coordinated blind playtest sessions with 3 external users to observe choke points and qualitative feedback, and conducted regression testing before closing resolved tickets.",
                        why: "Video reporting via Loom eliminates ambiguity when reproducing bugs in custom engines, cutting resolution time in half. Testing with fresh external users reveals blind spots in learning curves and difficulty tuning that internal teams overlook."
                    }
                ],
                overview: `
                    <p class="modal-p"><strong>The Apprentice</strong> is a 2D action platformer built on a custom C++ engine by Team 1 during CITM's Projecte 2 course. It combines biome exploration, biomechanical enemy combat, and precision platforming.</p>
                    <p class="modal-p">My core contributions as documented in the official project individual report encompassed <strong>Designer</strong> responsibilities (5 playable levels, 2 boss levels, 8 enemy types, and 2 bosses in Tiled) and <strong>QA</strong> leadership (daily build testing, Loom video bug logging, 3-user external playtests, and regression verification).</p>
                `,
                ldBreakdown: `
                    <h4 class="modal-section-h3">1. Level Progression System (5 Levels + 2 Boss Arenas)</h4>
                    <p class="modal-p">Informed by genre benchmarks like <em>Metroid Dread</em>, <em>Blasphemous</em>, <em>Hollow Knight</em>, and <em>Animal Well</em>:</p>
                    <ul class="modal-list">
                        <li><strong>Pre-Production Prototyping:</strong> At least 3 iterations per level sketched and exported via tools like Dungeon Scrawl before final Tiled assembly.</li>
                        <li><strong>Tiled Layer Discipline:</strong> Clean segregation of Background, Platforms, Collision, Enemies, and Props layers for instant readability.</li>
                        <li><strong>Metrics & Checkpoints:</strong> Grid-calibrated platform intervals, optimal player capsule clearance, and object-based checkpoint placement.</li>
                    </ul>

                    <h4 class="modal-section-h3">2. Enemy System & Progressive Difficulty Scaling</h4>
                    <p class="modal-p">Cataloging 9 behavioral patterns with gradual roll-out across biomes:</p>
                    <ul class="modal-list">
                        <li><strong>Tutorial:</strong> Creebler + Hypnoviper (fundamental hazard teaching).</li>
                        <li><strong>Mangrove 1–3:</strong> Thumpod, Dreadspire, and Scurver introduced alongside prior enemies.</li>
                        <li><strong>Boreal Forest 1–3:</strong> Bloodrusher, Mireborn, Broodheart, and Noctilume.</li>
                        <li><strong>Boss Encounters:</strong> 1st Boss (<strong>DungBeetle</strong> in Boreal Forest 4) and 2nd Boss (<strong>Nullwarden</strong> in Calcinated Forest 2).</li>
                    </ul>
                `,
                qaBreakdown: `
                    <h4 class="modal-section-h3">End-to-End QA & Bug Tracking Process</h4>
                    <p class="modal-p">Methodical QA workflows detailed in the individual project report:</p>
                    <ul class="modal-list">
                        <li><strong>Daily Build Testing:</strong> Daily sanity and smoke passes on each compilation generated by programmers, verifying core loop stability.</li>
                        <li><strong>Loom Video Bug Reporting:</strong> Systematic recording of playtest sessions and bugs with visual reproduction proofs for developers.</li>
                        <li><strong>External User Testing (3 Players):</strong> Moderated sessions with 3 external testers to evaluate pacing, difficulty spikes, and UX friction.</li>
                        <li><strong>Regression Passes:</strong> Re-testing every resolved bug ticket to guarantee fixes did not create regression side-effects.</li>
                    </ul>
                `,
                gallery: [
                    { src: "assets/images/apprentice/apprentice_level_1.jpg", caption: "Tiled level design - Layer structure across collision, platforms, and enemy spawns" },
                    { src: "assets/images/apprentice/Captura de pantalla 2026-10-13 182830.png", caption: "Dungeon Scrawl Layout - DungBeetle boss arena, plate puzzles, doors, and spikes" },
                    { src: "assets/images/apprentice/Captura de pantalla 2026-10-13 182847.png", caption: "Mangrove / Tutorial interconnected map with Creebler, Thumpod enemy spawns, and checkpoints" },
                    { src: "assets/images/apprentice/Captura de pantalla 2026-10-13 182906.png", caption: "Boreal Forest: vertical progression, stalactite hazards, hook mechanics, and enemy balancing" },
                    { src: "assets/images/apprentice/apprentice_level_2.jpg", caption: "Platforming challenge section integrating dynamic enemy obstacles" },
                    { src: "assets/images/apprentice/apprentice_dash_jump.jpg", caption: "Jump metric testing and character traversal clearance" }
                ]
            }
        }
    },
    {
        id: "baba-is-you",
        categories: ["ld", "qa"],
        engine: {
            es: "Motor de Baba Is You",
            ca: "Motor de Baba Is You",
            en: "Baba Is You Engine"
        },
        coverImage: "assets/images/baba_extracted/page1_img1.png",
        roles: {
            es: ["Diseñador de Puzzles y Niveles"],
            ca: ["Dissenyador de Puzles i Nivells"],
            en: ["Puzzle & Level Designer"]
        },
        title: {
            es: "Baba Is You - Dungeon Caves (Puzzles & Level Design)",
            ca: "Baba Is You - Dungeon Caves (Puzles & Level Design)",
            en: "Baba Is You - Dungeon Caves (Puzzle & Level Design)"
        },
        genre: {
            es: "Diseño de Puzzles Lógicos & Mecánicas Emergentes (3 Niveles)",
            ca: "Disseny de Puzles Lògics & Mecàniques Emergents (3 Nivells)",
            en: "Logic Puzzle Design & Emergent Mechanics (3 Levels)"
        },
        excerpt: {
            es: "Suite de 3 niveles jugables (Dungeon Caves 1, 2 y 3) con códigos de nivel reales, mecánicas de 'open'/'shut', teleports multidireccionales, enemigos en patrulla e iteración basada en playtesting.",
            ca: "Suite de 3 nivells jugables (Dungeon Caves 1, 2 i 3) amb codis de nivell reals, mecàniques de 'open'/'shut', teleports multidireccionals, enemics en patrulla i iteració basada en playtesting.",
            en: "Suite of 3 playable custom levels (Dungeon Caves 1, 2, and 3) featuring actual level codes, 'open'/'shut' mechanics, multi-room teleports, patrolling hazards, and real feedback iteration."
        },
        highlights: {
            es: [
                "Diseño de 3 niveles completos: Dungeon Caves 1 (KW3J-TNY7), Caves 2 (JUVJ-ZBJQ) y Caves 3 (HMHW-92NT)",
                "Mecánicas clave: dualidad Open/Shut aplicada a puertas, llaves y personaje; salas A-B-C conectadas por teleports",
                "Iteración con feedback real: descarte del Nivel 1 original por simplicidad excesiva y rediseño completo del Nivel 3"
            ],
            ca: [
                "Disseny de 3 nivells complets: Dungeon Caves 1 (KW3J-TNY7), Caves 2 (JUVJ-ZBJQ) i Caves 3 (HMHW-92NT)",
                "Mecàniques clau: dualitat Open/Shut aplicada a portes, claus i personatge; sales A-B-C connectades per teleports",
                "Iteració amb feedback real: descart del Nivell 1 original per simplicitat excessiva i redisseny complet del Nivell 3"
            ],
            en: [
                "Design of 3 complete levels: Dungeon Caves 1 (KW3J-TNY7), Caves 2 (JUVJ-ZBJQ), and Caves 3 (HMHW-92NT)",
                "Core mechanics: Open/Shut duality applied to doors, keys, and character; multi-room A-B-C layouts via teleports",
                "Playtest iteration: cut original Level 1 due to lack of depth, promoted Level 2, and completely redesigned Level 3"
            ]
        },
        tags: ["Baba Is You", "Puzzle Design", "Open / Shut Mechanics", "Teleport Systems", "Playtesting Iteration", "Level Codes"],
        team: {
            es: "Proyecto individual (Pau Gutsens — CITM Level Design)",
            ca: "Projecte individual (Pau Gutsens — CITM Level Design)",
            en: "Individual Project (Pau Gutsens — CITM Level Design)"
        },
        duration: {
            es: "3 semanas (Otoño 2025)",
            ca: "3 setmanes (Tardor 2025)",
            en: "3 weeks (Fall 2025)"
        },
        
        details: {
            es: {
                projectOverview: `
                    <p class="project-prose">Suite de 3 niveles de puzzles diseñados sobre el motor de <strong>Baba Is You</strong> para la asignatura de Diseño de Niveles (CITM, UPC): <strong>Dungeon Caves 1</strong> (Código: <code>KW3J-TNY7</code>), <strong>Dungeon Caves 2</strong> (Código: <code>JUVJ-ZBJQ</code>) y <strong>Dungeon Caves 3</strong> (Código: <code>HMHW-92NT</code>).</p>
                    <p class="project-prose">En Baba Is You, las leyes de la física y la lógica existen como palabras físicas empujables (ej. <code>BABA IS YOU</code>, <code>DOOR IS SHUT</code>, <code>KEY IS OPEN</code>). El proyecto exploró la mecánica de <strong>Open / Shut</strong>, teleports interconectados entre múltiples salas, enemigos con rutas de patrulla y una profunda iteración basada en playtesting con usuarios reales.</p>
                `,
                myContribution: `
                    <p class="project-prose">Como <strong>Puzzle & Level Designer</strong> en solitario, conceptualicé la progresión mecánica de los tres niveles, diseñé los layouts 2D y la paleta cromática diferenciada (paredes y piedras contrastadas para máxima claridad cognitiva), testeé la resolución lógica y gestioné el proceso de feedback: tras comprobar que el primer prototipo resultaba excesivamente plano para los jugadores, reorganicé la jerarquía de niveles y rediseñé el nivel final por completo.</p>
                `,
                whatAndWhy: [
                    {
                        title: "Nivel 1 — Dungeon Caves 1 (KW3J-TNY7): Dualidad 'Open' y 'Shut'",
                        challenge: "Presentar la mecánica de abrir y cerrar puertas con llaves sin limitarla a una simple cerradura genérica, demostrando que manipular estas propiedades tiene consecuencias directas y letales sobre el propio jugador y los enemigos.",
                        what: "Diseñé un nivel donde Baba debe esquivar enemigos que patrullan horizontalmente mientras empuja una llave hacia la puerta superior. Al encontrarla inaccesible, el jugador desciende por un pasillo con dos enemigos más para completar una condición lingüística, abrir la puerta y luego deshacer la regla interna para volver, cruzar las rocas y alcanzar la meta. Ajusté los colores de paredes y piedras para maximizar la legibilidad.",
                        why: "Permite al jugador asimilar el impacto sistémico de las palabras: una condición mal planteada provoca la derrota inmediata, logrando una enseñanza profunda y activa desde el primer reto."
                    },
                    {
                        title: "Nivel 2 — Dungeon Caves 2 (JUVJ-ZBJQ): Red de Teleports y Salas A-B-C",
                        challenge: "Elevar la complejidad espacial introduciendo teleports bidireccionales y obligando al jugador a planificar el orden de transporte de objetos a través de estados cambiantes.",
                        what: "Estructuré el nivel en tres salas interconectadas (A, B y C) mediante teleports de tubería. En la fase inicial (A → C), el jugador transporta la llave pero se topa con obstáculos intransitables. Al regresar a la sala A y entrar a la B, manipula las frases globales del nivel: al empujar 'SHUT' hacia arriba hace que las rocas sean atravesables, pero activa el patrullaje vertical de los monstruos, obligando a Baba a esquivarlos con precisión para abrir la puerta con la llave previamente depositada.",
                        why: "Introduce el concepto de persistencia espacial y consecuencias diferidas: las acciones realizadas en una sala modifican radicalmente la seguridad y transitabilidad de otra."
                    },
                    {
                        title: "Nivel 3 — Dungeon Caves 3 (HMHW-92NT): Culminación e Integración Sistémica",
                        challenge: "Diseñar un clímax que una todo lo aprendido (open/shut, teleports múltiples y enemigos) aumentando el reto mental y la satisfacción sin generar frustración por soft-locks.",
                        what: "Baba debe hacer primero que los tocones sean empujables mediante un teleport de tubería, empujándolos al agua para construir un puente de retorno. Desde el vestíbulo central se abren dos alas: en la sala izquierda (teleport de nube), enemigos patrullan en cuadrado sosteniendo una condición en los 4 costados que debe desmantelarse esquivándolos; en la sala derecha inferior, se sincroniza el movimiento tras los enemigos para cumplir la regla de la llave, cruzar las rocas, alcanzar el teleport de polvo y abrir la meta.",
                        why: "Ofrece un cierre gratificante donde cada mecánica interactúa armónicamente con las demás, premiando la capacidad de deducción analítica y ejecución del jugador."
                    },
                    {
                        title: "Iteración Basada en Playtesting y Feedback Real",
                        challenge: "Durante las pruebas iniciales, los jugadores indicaron que el primer nivel original era demasiado simple y básico, no motivaba curiosidad ni ofrecía decisiones tácticas reales; además, los niveles 2 y 3 no presentaban un giro mecánico suficientemente diferenciado.",
                        what: "Apliqué un rediseño valiente documentado en la entrega: eliminé por completo el Nivel 1 original; promocioné el Nivel 2 a nuevo nivel introductorio (ofrecía la tensión justa con monstruos y decisiones espaciales accesibles); introduje un giro más marcado en el segundo nivel; y rediseñé desde cero el Nivel 3 con mayor escala, bifurcación de salas y duración.",
                        why: "El diseño de niveles exige desprenderse de contenido que no funciona. Escuchar el feedback de los testers transformó una progresión plana en una curva de aprendizaje atractiva y con ritmo ascendente."
                    }
                ],
                overview: `
                    <p class="modal-p"><strong>Baba Is You - Dungeon Caves</strong> es una suite académica de 3 niveles de lógica pura (Dungeon Caves 1, 2 y 3) desarrollados sobre el motor original de Baba Is You por Pau Gutsens (3º de Diseño y Desarrollo de Videojuegos, CITM).</p>
                    <p class="modal-p">Cada nivel cuenta con su <strong>código oficial para jugarlo en el motor</strong> (<code>KW3J-TNY7</code>, <code>JUVJ-ZBJQ</code> y <code>HMHW-92NT</code>), demostrando dominio en economía de reglas, sistemas de teleports bidireccionales y ciclos iterativos de feedback.</p>
                `,
                ldBreakdown: `
                    <h4 class="modal-section-h3">1. Desglose de Niveles y Códigos Oficiales</h4>
                    <ul class="modal-list">
                        <li><strong>Nivel 1 — Dungeon Caves 1 (Código: KW3J-TNY7):</strong> Introducción a la dualidad 'open' y 'shut' con llaves y enemigos, evitando derrotas por contacto y enseñando a deshacer condiciones internas.</li>
                        <li><strong>Nivel 2 — Dungeon Caves 2 (Código: JUVJ-ZBJQ):</strong> Estructura en tres salas interconectadas (A, B y C) mediante teleports bidireccionales, alteración de frases globales y activación de patrullas móviles.</li>
                        <li><strong>Nivel 3 — Dungeon Caves 3 (Código: HMHW-92NT):</strong> Síntesis avanzada con tocones empujables al agua, múltiples teleports (tubería, nube, polvo) y desmontaje de reglas resguardadas por patrullas cuadradas.</li>
                    </ul>

                    <h4 class="modal-section-h3">2. Claridad Cognitiva y Paleta Cromática</h4>
                    <p class="modal-p">Para evitar la sobrecarga cognitiva típica de los puzles de texto, ajusté la diferenciación de color entre paredes y piedras, asegurando que los elementos interactivos resalten de forma limpia respecto a los bordes impasables.</p>
                `,
                qaBreakdown: `
                    <h4 class="modal-section-h3">Metodología de QA, Playtesting y Rediseño por Feedback</h4>
                    <p class="modal-p">Proceso de validación empírica documentado en la entrega técnica:</p>
                    <ul class="modal-list">
                        <li><strong>Detección de Falta de Reto Inicial:</strong> Las pruebas evidenciaron que el primer mapa original mostraba las mecánicas en su estado más trivial sin generar intriga.</li>
                        <li><strong>Poda y Reestructuración:</strong> Se tomó la decisión de suprimir el nivel 1 original y transformar el nivel 2 en la nueva puerta de entrada, calibrando una curva accesible pero estimulante.</li>
                        <li><strong>Rediseño Integral del Nivel 3:</strong> Ante la falta de diferenciación mecánica, el tercer nivel se rehizo desde los cimientos para integrar tocones interactivos, teleports simultáneos y resolución asimétrica.</li>
                        <li><strong>Prevención de Estados Irreversibles (Soft-locks):</strong> Comprobación de que empujar palabras contra muros no bloquease fatalmente la partida sin posibilidad de deshacer.</li>
                    </ul>
                `,
                gallery: [
                    { src: "assets/images/baba_extracted/page1_img1.png", caption: "Portada y presentación del proyecto Dungeon Caves en Baba Is You" },
                    { src: "assets/images/baba_extracted/page2_img1.png", caption: "Nivel 1: Dungeon Caves 1 (KW3J-TNY7) - Mecánicas Open/Shut y llaves" },
                    { src: "assets/images/baba_extracted/page3_img1.png", caption: "Nivel 2: Dungeon Caves 2 (JUVJ-ZBJQ) - Salas A, B y C con teleports" },
                    { src: "assets/images/baba_extracted/page4_img1.png", caption: "Nivel 3: Dungeon Caves 3 (HMHW-92NT) - Tocones, agua y patrullas" },
                    { src: "assets/images/baba_extracted/page6_img1.png", caption: "Primer prototipo del Nivel 1 (posteriormente descartado por feedback)" },
                    { src: "assets/images/baba_extracted/page6_img2.png", caption: "Primer prototipo del Nivel 2 (promocionado a nuevo introductorio)" },
                    { src: "assets/images/baba_extracted/page6_img3.png", caption: "Primer prototipo del Nivel 3 (rehecho para mayor profundidad)" }
                ]
            },
            ca: {
                projectOverview: `
                    <p class="project-prose">Suite de 3 nivells de puzles dissenyats sobre el motor de <strong>Baba Is You</strong> per a l'assignatura de Disseny de Nivells (CITM, UPC): <strong>Dungeon Caves 1</strong> (Codi: <code>KW3J-TNY7</code>), <strong>Dungeon Caves 2</strong> (Codi: <code>JUVJ-ZBJQ</code>) i <strong>Dungeon Caves 3</strong> (Codi: <code>HMHW-92NT</code>).</p>
                    <p class="project-prose">A Baba Is You, les lleis de la física i la lògica existeixen com a paraules físiques empenyibles (ex. <code>BABA IS YOU</code>, <code>DOOR IS SHUT</code>, <code>KEY IS OPEN</code>). El projecte va explorar la mecànica d'<strong>Open / Shut</strong>, teleports interconnectats entre múltiples sales, enemics amb rutes de patrulla i una profunda iteració basada en playtesting amb usuaris reals.</p>
                `,
                myContribution: `
                    <p class="project-prose">Com a <strong>Puzzle & Level Designer</strong> en solitari, vaig conceptualitzar la progressió mecànica dels tres nivells, vaig dissenyar els layouts 2D i la paleta cromàtica diferenciada (parets i pedres contrastades per a màxima claredat cognitiva), vaig testejar la resolució lògica i vaig gestionar el procés de feedback: després de comprovar que el primer prototip resultava excessivament pla per als jugadors, vaig reorganitzar la jerarquia de nivells i vaig redissenyar el nivell final completament.</p>
                `,
                whatAndWhy: [
                    {
                        title: "Nivell 1 — Dungeon Caves 1 (KW3J-TNY7): Dualitat 'Open' i 'Shut'",
                        challenge: "Presentar la mecànica d'obrir i tancar portes amb claus sense limitar-la a un pany genèric, demostrant que manipular aquestes propietats té conseqüències directes i letals sobre el personatge i els enemics.",
                        what: "Vaig dissenyar un nivell on Baba ha d'esquivar enemics que patrullen horitzontalment mentre empeny una clau cap a la porta superior. En trobar-la inaccessible, el jugador baixa per un passadís amb dos enemics més per completar una condició lingüística, obrir la porta i després desfer la regla interna per tornar, creuar les roques i assolir la meta. Vaig ajustar els colors de parets i pedres per a una major claredat.",
                        why: "Permet al jugador assimilar l'impacte sistèmic de les paraules: una condició mal plantejada provoca la derrota immediata, assolint un aprenentatge profund i actiu des del primer repte."
                    },
                    {
                        title: "Nivell 2 — Dungeon Caves 2 (JUVJ-ZBJQ): Xarxa de Teleports i Sales A-B-C",
                        challenge: "Elevar la complexitat espacial introduint teleports bidireccionals i obligant el jugador a planificar l'ordre de transport d'objectes a través d'estats canviants.",
                        what: "Vaig estructurar el nivell en tres sales interconnectades (A, B i C) mitjançant teleports de canonada. A la fase inicial (A → C), el jugador transporta la clau però topa amb obstacles intransitables. En tornar a la sala A i accedir a la B, manipula les frases globals del nivell: en moure 'SHUT' cap amunt fa que les roques siguin travessables, però activa el patrullatge vertical dels monstres, obligant Baba a esquivar-los amb precisió per obrir la porta amb la clau prèviament deixada.",
                        why: "Introdueix el concepte de persistència espacial i conseqüències diferides: les accions realitzades en una sala modifiquen radicalment la seguretat i transitabilitat d'una altra."
                    },
                    {
                        title: "Nivell 3 — Dungeon Caves 3 (HMHW-92NT): Culminació i Integració Sistèmica",
                        challenge: "Dissenyar un clímax que uneixi tot el que s'ha après (open/shut, teleports múltiples i enemics) augmentant el repte mental i la satisfacció sense generar frustració per soft-locks.",
                        what: "Baba ha de fer primer que les soques siguin empenyibles mitjançant un teleport de canonada, empenyent-les a l'aigua per bastir un pont de retorn. Des del vestíbul central s'obren dues ales: a la sala esquerra (teleport de núvol), enemics patrullen en quadrat mantenint una condició als 4 costats que cal desmantellar esquivant-los; a la sala dreta inferior, se sincronitza el moviment rere els enemics per complir la regla de la clau, travessar les roques, arribar al teleport de pols i obrir la meta.",
                        why: "Ofereix un tancament gratificant on cada mecànica interactua harmònicament amb les altres, premiant la capacitat de deducció analítica i execució del jugador."
                    },
                    {
                        title: "Iteració Basada en Playtesting i Feedback Real",
                        challenge: "Durant les primeres proves, els jugadors van indicar que el primer nivell original era massa simple i bàsic, no motivava curiositat ni oferia decisions tàctiques reals; a més, els nivells 2 i 3 no presentaven un gir mecànic prou diferenciat.",
                        what: "Vaig aplicar un redisseny valent documentat al lliurament: vaig eliminar completament el Nivell 1 original; vaig promocionar el Nivell 2 a nou nivell introductori (oferia la tensió justa amb monstres i decisions espacials accessibles); vaig introduir un gir més marcat al segon nivell; i vaig redissenyar des de zero el Nivell 3 amb més escala, bifurcació de sales i durada.",
                        why: "El disseny de nivells exigeix desprendre's de contingut que no funciona. Escoltar el feedback dels testers va transformar una progressió plana en una corba d'aprenentatge atractiva i amb ritme ascendent."
                    }
                ],
                overview: `
                    <p class="modal-p"><strong>Baba Is You - Dungeon Caves</strong> és una suite acadèmica de 3 nivells de lògica pura (Dungeon Caves 1, 2 i 3) desenvolupats sobre el motor original de Baba Is You per Pau Gutsens (3r de Disseny i Desenvolupament de Videojocs, CITM).</p>
                    <p class="modal-p">Cada nivell compta amb el seu <strong>codi oficial per jugar-lo al motor</strong> (<code>KW3J-TNY7</code>, <code>JUVJ-ZBJQ</code> i <code>HMHW-92NT</code>), demostrant domini en economia de regles, sistemes de teleports bidireccionals i cicles iteratius de feedback.</p>
                `,
                ldBreakdown: `
                    <h4 class="modal-section-h3">1. Desglossament de Nivells i Codis Oficials</h4>
                    <ul class="modal-list">
                        <li><strong>Nivell 1 — Dungeon Caves 1 (Codi: KW3J-TNY7):</strong> Introducció a la dualitat 'open' i 'shut' amb claus i enemics, evitant derrotes per contacte i ensenyant a desfer condicions internes.</li>
                        <li><strong>Nivell 2 — Dungeon Caves 2 (Codi: JUVJ-ZBJQ):</strong> Estructura en tres sales interconnectades (A, B i C) mitjançant teleports bidireccionals, alteració de frases globals i activació de patrulles mòbils.</li>
                        <li><strong>Nivell 3 — Dungeon Caves 3 (Codi: HMHW-92NT):</strong> Síntesi avançada amb soques empenyibles a l'aigua, múltiples teleports (canonada, núvol, pols) i desmuntatge de regles protegides per patrulles quadrades.</li>
                    </ul>

                    <h4 class="modal-section-h3">2. Claredat Cognitiva i Paleta Cromàtica</h4>
                    <p class="modal-p">Per evitar la sobrecàrrega cognitiva habitual dels puzles de text, vaig ajustar la diferenciació de color entre parets i pedres, assegurant que els elements interactius destaquin de manera neta respecte als límits impassables.</p>
                `,
                qaBreakdown: `
                    <h4 class="modal-section-h3">Metodologia de QA, Playtesting i Redisseny per Feedback</h4>
                    <p class="modal-p">Procés de validació empírica documentat al lliurament tècnic:</p>
                    <ul class="modal-list">
                        <li><strong>Detecció de Manca de Repte Inicial:</strong> Les proves van evidenciar que el primer mapa original mostrava les mecàniques en el seu estat més trivial sense generar intriga.</li>
                        <li><strong>Poda i Reestructuració:</strong> Es va prendre la decisió de suprimir el nivell 1 original i transformar el nivell 2 en la nova porta d'entrada, calibrant una corba accessible però estimulant.</li>
                        <li><strong>Redisseny Integral del Nivell 3:</strong> Davant la manca de diferenciació mecànica, el tercer nivell es va refer des dels fonaments per integrar soques interactives, teleports simultanis i resolució asimètrica.</li>
                        <li><strong>Prevenció d'Estats Irreversibles (Soft-locks):</strong> Comprovació que empènyer paraules contra murs no bloquegés fatalment la partida sense possibilitat de desfer.</li>
                    </ul>
                `,
                gallery: [
                    { src: "assets/images/baba_extracted/page1_img1.png", caption: "Portada i presentació del projecte Dungeon Caves a Baba Is You" },
                    { src: "assets/images/baba_extracted/page2_img1.png", caption: "Nivell 1: Dungeon Caves 1 (KW3J-TNY7) - Mecàniques Open/Shut i claus" },
                    { src: "assets/images/baba_extracted/page3_img1.png", caption: "Nivell 2: Dungeon Caves 2 (JUVJ-ZBJQ) - Sales A, B i C amb teleports" },
                    { src: "assets/images/baba_extracted/page4_img1.png", caption: "Nivell 3: Dungeon Caves 3 (HMHW-92NT) - Soques, aigua i patrulles" },
                    { src: "assets/images/baba_extracted/page6_img1.png", caption: "Primer prototip del Nivell 1 (posteriorment descartat per feedback)" },
                    { src: "assets/images/baba_extracted/page6_img2.png", caption: "Primer prototip del Nivell 2 (promocionat a nou introductori)" },
                    { src: "assets/images/baba_extracted/page6_img3.png", caption: "Primer prototip del Nivell 3 (refet per a major profunditat)" }
                ]
            },
            en: {
                projectOverview: `
                    <p class="project-prose">A suite of 3 pure logic puzzle levels created within the original <strong>Baba Is You</strong> engine for the Level Design curriculum (CITM, UPC): <strong>Dungeon Caves 1</strong> (Code: <code>KW3J-TNY7</code>), <strong>Dungeon Caves 2</strong> (Code: <code>JUVJ-ZBJQ</code>), and <strong>Dungeon Caves 3</strong> (Code: <code>HMHW-92NT</code>).</p>
                    <p class="project-prose">In Baba Is You, physical rules and world parameters exist as movable words (e.g. <code>BABA IS YOU</code>, <code>DOOR IS SHUT</code>, <code>KEY IS OPEN</code>). This suite explored <strong>Open / Shut</strong> mechanics, multi-room bidirectional teleports, moving patrolling hazards, and an iterative design loop guided by blind playtesting feedback.</p>
                `,
                myContribution: `
                    <p class="project-prose">As solo <strong>Puzzle & Level Designer</strong>, I conceptualized the mechanic progression across all 3 levels, authored 2D layouts and high-contrast color palettes (differentiating walls and rocks for cognitive clarity), conducted permutation and logic QA, and executed design changes based on player feedback: discarding the initial Level 1 prototype and completely redesigning the final level.</p>
                `,
                whatAndWhy: [
                    {
                        title: "Level 1 — Dungeon Caves 1 (KW3J-TNY7): 'Open' & 'Shut' Duality",
                        challenge: "Teaching the open/shut mechanic beyond standard key-and-door locks, demonstrating that manipulating word states has immediate and fatal consequences for both character and monsters.",
                        what: "Designed a chamber where Baba navigates past horizontally patrolling monsters while escorting a key toward the upper door. Finding it barricaded, players descend down a corridor past two more enemies to assemble a linguistic condition, unlock the door, and reverse the inner rule to backtrack across rocks toward the goal. Adjusted rock and wall hues for readability.",
                        why: "Empowers players to internalize the systemic weight of words: ill-formed sentences cause instant failure, instilling active comprehension from the very first level."
                    },
                    {
                        title: "Level 2 — Dungeon Caves 2 (JUVJ-ZBJQ): Teleport Mesh & Rooms A-B-C",
                        challenge: "Escalating spatial complexity with bidirectional pipe teleporters, compelling players to stage item transit across evolving environment states.",
                        what: "Structured the layout across three interconnected chambers (A, B, and C) linked by pipe teleporters. Initially (A → C), players transport the key but face dead-ends. Returning to Room A and traversing to Room B, they reconfigure global sentences: pushing 'SHUT' upward dissolves rock barriers while triggering vertical patrol routines on monsters, requiring precise evasion to reach the goal with the staged key.",
                        why: "Introduces spatial persistence and delayed consequences: interventions executed in one chamber fundamentally alter navigability and threat levels in another."
                    },
                    {
                        title: "Level 3 — Dungeon Caves 3 (HMHW-92NT): Climax & Systemic Synthesis",
                        challenge: "Crafting a climactic challenge combining learned mechanics (open/shut, multi-teleports, patrols) while increasing intellectual reward without inducing soft-lock frustration.",
                        what: "Baba must first make tree stumps pushable via pipe teleporter, driving them into water to form a bridge back to the central hub. Two branches then unfold: in the left wing (cloud teleporter), enemies patrol in a square locking down conditions on 4 sides that must be undone while evading; in the lower right wing, players pace behind guards to fulfill key rules, navigate across rocks, reach dust teleporters, and unlock the goal.",
                        why: "Delivers an intellectually satisfying finale where every subsystem interlocks, rewarding deliberate planning, pattern recognition, and precise execution."
                    },
                    {
                        title: "Playtest-Driven Iteration & Design Trimming",
                        challenge: "Early blind playtests revealed that the initial Level 1 was overly trivial, lacking decision-making or curiosity; additionally, levels 2 and 3 lacked a sharp mechanical twist relative to one another.",
                        what: "Enacted major design pivots: eliminated the original Level 1 entirely; promoted Level 2 as the new introductory stage (providing balanced tension with mobile monsters and clear choices); introduced a sharper mechanical shift in the second stage; and redesigned Level 3 from scratch with multi-wing layout and expanded scope.",
                        why: "Level design requires the willingness to cut content that underdelivers. Player feedback transformed a flat progression into an engaging, ascending learning curve."
                    }
                ],
                overview: `
                    <p class="modal-p"><strong>Baba Is You - Dungeon Caves</strong> is an academic suite of 3 pure logic levels (Dungeon Caves 1, 2, and 3) developed on the original Baba Is You engine by Pau Gutsens (CITM, UPC).</p>
                    <p class="modal-p">Each level includes its <strong>official engine code</strong> (<code>KW3J-TNY7</code>, <code>JUVJ-ZBJQ</code>, and <code>HMHW-92NT</code>), demonstrating mastery of rule economy, multi-room teleports, and iterative playtesting.</p>
                `,
                ldBreakdown: `
                    <h4 class="modal-section-h3">1. Level Suite & Official Engine Codes</h4>
                    <ul class="modal-list">
                        <li><strong>Level 1 — Dungeon Caves 1 (Code: KW3J-TNY7):</strong> Introduces open/shut duality, keys, and patrol evasion while preventing contact defeats.</li>
                        <li><strong>Level 2 — Dungeon Caves 2 (Code: JUVJ-ZBJQ):</strong> 3-room layout (A, B, and C) connected by bidirectional pipe teleporters, global rule toggles, and dynamic monster patrols.</li>
                        <li><strong>Level 3 — Dungeon Caves 3 (Code: HMHW-92NT):</strong> Advanced synthesis with pushable stumps bridging water hazards, multiple teleports (pipe, cloud, dust), and dismantle puzzles guarded by box patrols.</li>
                    </ul>

                    <h4 class="modal-section-h3">2. Cognitive Clarity & Chromatic Palette</h4>
                    <p class="modal-p">To reduce cognitive friction common in text-based puzzle environments, wall and rock palettes were calibrated to distinct hues, ensuring actionable entities contrast sharply against impassable boundaries.</p>
                `,
                qaBreakdown: `
                    <h4 class="modal-section-h3">Empirical QA, Blind Testing & Feedback Pivots</h4>
                    <p class="modal-p">Rigorous design iteration documented in the submission report:</p>
                    <ul class="modal-list">
                        <li><strong>Early Simplicity Detection:</strong> Testing revealed that the original map 1 demonstrated mechanics too plainly without engaging player curiosity.</li>
                        <li><strong>Decisive Pruning:</strong> Cut original level 1 and elevated level 2 as the new entry point, establishing an approachable yet engaging challenge.</li>
                        <li><strong>Full Redesign of Level 3:</strong> Redesigned from the ground up to incorporate water bridging, dual-wing branching, and asymmetric resolution.</li>
                        <li><strong>Soft-Lock Safeguards:</strong> Perimeter and push-margin testing ensuring players never get irrevocably stuck without undo capacity.</li>
                    </ul>
                `,
                gallery: [
                    { src: "assets/images/baba_extracted/page1_img1.png", caption: "Cover and presentation of the Dungeon Caves project in Baba Is You" },
                    { src: "assets/images/baba_extracted/page2_img1.png", caption: "Level 1: Dungeon Caves 1 (KW3J-TNY7) - Open/Shut mechanics and keys" },
                    { src: "assets/images/baba_extracted/page3_img1.png", caption: "Level 2: Dungeon Caves 2 (JUVJ-ZBJQ) - Rooms A, B, and C with teleports" },
                    { src: "assets/images/baba_extracted/page4_img1.png", caption: "Level 3: Dungeon Caves 3 (HMHW-92NT) - Stumps, water bridges, and patrols" },
                    { src: "assets/images/baba_extracted/page6_img1.png", caption: "Initial Level 1 prototype (discarded following tester feedback)" },
                    { src: "assets/images/baba_extracted/page6_img2.png", caption: "Initial Level 2 prototype (promoted to new introductory stage)" },
                    { src: "assets/images/baba_extracted/page6_img3.png", caption: "Initial Level 3 prototype (redesigned for greater depth)" }
                ]
            }
        }
    }
];

// ==========================================================================
// 3. State & Initialization
// ==========================================================================
let currentLang = localStorage.getItem("pg_portfolio_lang") || "es";
let currentFilter = "all";
let activeModalProject = null;

function getLocalizedVal(field, lang = currentLang) {
    if (!field) return "";
    if (typeof field === "object" && !Array.isArray(field)) {
        return field[lang] || field.es || Object.values(field)[0] || "";
    }
    return field;
}

function getLocalizedList(field, lang = currentLang) {
    if (!field) return [];
    if (Array.isArray(field)) return field;
    if (typeof field === "object") {
        return field[lang] || field.es || Object.values(field)[0] || [];
    }
    return [field];
}

document.addEventListener("DOMContentLoaded", () => {
    initLanguageSwitcher();
    initMobileNav();
    initFilters();
    renderProjects();
    initModalEvents();
    initLightboxEvents();
    renderProjectDetailPage();
    applyLanguage(currentLang);
});

// ==========================================================================
// 4. Language Switcher Logic (ES / CA / EN)
// ==========================================================================
function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll(".lang-btn");
    langBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const selectedLang = btn.getAttribute("data-lang");
            if (selectedLang && selectedLang !== currentLang) {
                currentLang = selectedLang;
                localStorage.setItem("pg_portfolio_lang", currentLang);
                applyLanguage(currentLang);
            }
        });
    });
}

function applyLanguage(lang) {
    if (!translations[lang]) lang = "es";
    currentLang = lang;

    // Update active button state
    document.querySelectorAll(".lang-btn").forEach(btn => {
        const isActive = btn.getAttribute("data-lang") === lang;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    // Update HTML lang attribute
    document.documentElement.setAttribute("lang", lang);

    // Update document title & meta description if on index page
    const trans = translations[lang];
    if (trans) {
        if (!document.getElementById("projectDetailContainer")) {
            document.title = trans.page_title || "Pau Gutsens | Level Design & QA";
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc && trans.meta_desc) {
                metaDesc.setAttribute("content", trans.meta_desc);
            }
        }

        // Update all i18n text nodes
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (trans[key]) {
                el.innerHTML = trans[key];
            }
        });
    }

    // Re-render projects grid if present
    if (document.getElementById("projectsGrid")) {
        renderProjects();
    }

    // Re-populate modal if currently open
    if (activeModalProject) {
        populateModal(activeModalProject);
    }

    // Re-render dedicated project detail page if present
    if (document.getElementById("projectDetailContainer")) {
        renderProjectDetailPage();
    }
}

// ==========================================================================
// 5. Mobile Navigation
// ==========================================================================
function initMobileNav() {
    const mobileBtn = document.getElementById("mobileMenuBtn");
    const mainNav = document.getElementById("mainNav");

    if (mobileBtn && mainNav) {
        mobileBtn.addEventListener("click", () => {
            mainNav.classList.toggle("active");
            const icon = mobileBtn.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-xmark");
            }
        });

        // Close on link click
        mainNav.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                mainNav.classList.remove("active");
                const icon = mobileBtn.querySelector("i");
                if (icon) {
                    icon.classList.add("fa-bars");
                    icon.classList.remove("fa-xmark");
                }
            });
        });
    }
}

// ==========================================================================
// 6. Filter Toolbar Logic
// ==========================================================================
function initFilters() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter = btn.getAttribute("data-filter");
            renderProjects();
        });
    });
}

function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;

    grid.innerHTML = "";

    const filtered = currentFilter === "all"
        ? projectsData
        : projectsData.filter(p => p.categories.includes(currentFilter));

    filtered.forEach(project => {
        const card = document.createElement("article");
        card.className = "project-card";
        card.setAttribute("data-project-id", project.id);

        const badgesHtml = project.categories.map(cat => {
            if (cat === "ld") return `<span class="badge badge-ld">LEVEL DESIGN</span>`;
            if (cat === "qa") return `<span class="badge badge-qa">QA & TESTING</span>`;
            return "";
        }).join("");

        const langKey = project.highlights[currentLang] ? currentLang : "es";
        const highlightsHtml = (project.highlights[langKey] || []).map(hl => `
            <li><i class="fa-solid fa-chevron-right"></i> <span>${hl}</span></li>
        `).join("");

        const tagsList = Array.isArray(project.tags) ? project.tags : [];
        const tagsHtml = tagsList.map(t => `<span class="card-tag">${t}</span>`).join("");
        const titleText = project.title[currentLang] || project.title.es;
        const excerptText = project.excerpt[currentLang] || project.excerpt.es;
        const viewCaseText = translations[currentLang] ? translations[currentLang].view_case_study : "Ver Proyecto";

        const engineText = getLocalizedVal(project.engine);
        const rolesList = getLocalizedList(project.roles);
        const rolesLine = rolesList.join(" • ");

        card.innerHTML = `
            <div class="card-media-wrap">
                <div class="card-badges">${badgesHtml}</div>
                <div class="card-engine">${engineText}</div>
                <img src="${project.coverImage}" alt="${titleText}" class="card-img" loading="lazy">
            </div>
            <div class="card-content">
                <div class="card-role-line">${rolesLine}</div>
                <h3 class="card-title">${titleText}</h3>
                <p class="card-excerpt">${excerptText}</p>
                
                <ul class="card-key-highlights">
                    ${highlightsHtml}
                </ul>

                <div class="card-footer">
                    <div class="card-tags">${tagsHtml}</div>
                    <a href="project.html?id=${project.id}" class="card-action-btn" aria-label="${viewCaseText}: ${titleText}">
                        <span>${viewCaseText}</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        `;

        // Card Click opens dedicated project page
        card.addEventListener("click", (e) => {
            window.location.href = `project.html?id=${project.id}`;
        });

        grid.appendChild(card);
    });
}

// ==========================================================================
// 7. Case Study Interactive Modal
// ==========================================================================
function initModalEvents() {
    const modal = document.getElementById("projectModal");
    const closeBtn = document.getElementById("modalCloseBtn");

    if (closeBtn && modal) {
        closeBtn.addEventListener("click", closeProjectModal);
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeProjectModal();
            }
        });
    }

    // Keyboard ESC listener
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            const lightbox = document.getElementById("lightboxOverlay");
            const modal = document.getElementById("projectModal");
            if (lightbox && lightbox.classList.contains("active")) {
                closeLightbox();
            } else if (modal && modal.classList.contains("active")) {
                closeProjectModal();
            }
        }
    });
}

function openProjectModal(project) {
    activeModalProject = project;
    populateModal(project);

    const modal = document.getElementById("projectModal");
    if (modal) {
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }
}

function closeProjectModal() {
    activeModalProject = null;
    const modal = document.getElementById("projectModal");
    if (modal) {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }
}

function populateModal(project) {
    const content = document.getElementById("modalContent");
    if (!content) return;

    const t = translations[currentLang] || translations.es;
    const details = project.details[currentLang] || project.details.es;
    const titleText = project.title[currentLang] || project.title.es;
    const genreText = project.genre[currentLang] || project.genre.es;

    const galleryHtml = (details.gallery || []).map(item => `
        <div class="gallery-thumb" onclick="openLightbox('${item.src}', '${item.caption}')">
            <img src="${item.src}" alt="${item.caption}" loading="lazy">
            <div class="gallery-thumb-caption">${item.caption}</div>
        </div>
    `).join("");

    content.innerHTML = `
        <div class="modal-hero">
            <h2 class="modal-title" id="modalTitle">${titleText}</h2>
            <div class="modal-subtitle">${genreText}</div>

            <div class="modal-meta-grid">
                <div class="modal-meta-item">
                    <strong>${t.proj_engine_label || "Engine / Tools"}</strong>
                    <span>${getLocalizedVal(project.engine)}</span>
                </div>
                <div class="modal-meta-item">
                    <strong>${t.proj_roles_label || "My Roles"}</strong>
                    <span>${getLocalizedList(project.roles).join(", ")}</span>
                </div>
                <div class="modal-meta-item">
                    <strong>${t.proj_team_label || "Team Size"}</strong>
                    <span>${getLocalizedVal(project.team)}</span>
                </div>
                <div class="modal-meta-item">
                    <strong>${t.proj_duration_label || "Timeline"}</strong>
                    <span>${getLocalizedVal(project.duration)}</span>
                </div>
            </div>
        </div>

        <div class="modal-tabs">
            <button class="modal-tab-btn active" data-tab="overview">${t.modal_tab_overview}</button>
            <button class="modal-tab-btn" data-tab="ld">${t.modal_tab_ld}</button>
            <button class="modal-tab-btn" data-tab="qa">${t.modal_tab_qa}</button>
            <button class="modal-tab-btn" data-tab="gallery">${t.modal_tab_gallery}</button>
        </div>

        <div class="modal-tab-pane active" id="tab-overview">
            ${details.overview}
        </div>

        <div class="modal-tab-pane" id="tab-ld">
            ${details.ldBreakdown}
        </div>

        <div class="modal-tab-pane" id="tab-qa">
            ${details.qaBreakdown}
        </div>

        <div class="modal-tab-pane" id="tab-gallery">
            <div class="modal-gallery-grid">
                ${galleryHtml}
            </div>
        </div>
    `;

    // Modal Tabs logic
    const tabBtns = content.querySelectorAll(".modal-tab-btn");
    const tabPanes = content.querySelectorAll(".modal-tab-pane");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            tabPanes.forEach(p => p.classList.remove("active"));

            btn.classList.add("active");
            const tabId = `tab-${btn.getAttribute("data-tab")}`;
            const targetPane = document.getElementById(tabId);
            if (targetPane) {
                targetPane.classList.add("active");
            }
        });
    });
}

// ==========================================================================
// 8. Image Lightbox for High-Res Inspection
// ==========================================================================
function initLightboxEvents() {
    const lightbox = document.getElementById("lightboxOverlay");
    const closeBtn = document.getElementById("lightboxCloseBtn");

    if (closeBtn && lightbox) {
        closeBtn.addEventListener("click", closeLightbox);
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
}

window.openLightbox = function(src, caption) {
    const lightbox = document.getElementById("lightboxOverlay");
    const img = document.getElementById("lightboxImg");
    const captionEl = document.getElementById("lightboxCaption");

    if (lightbox && img) {
        img.src = src;
        img.alt = caption || "";
        if (captionEl) captionEl.textContent = caption || "";
        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");
    }
};

window.closeLightbox = function() {
    const lightbox = document.getElementById("lightboxOverlay");
    if (lightbox) {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
    }
};

// ==========================================================================
// 9. Dedicated Project Page Rendering Logic (project.html)
// ==========================================================================
function renderProjectDetailPage() {
    const container = document.getElementById("projectDetailContainer");
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const projectId = params.get("id") || "son-of-ithaca";
    const projectIndex = projectsData.findIndex(p => p.id === projectId);
    const project = projectIndex !== -1 ? projectsData[projectIndex] : projectsData[0];
    const currentIndex = projectIndex !== -1 ? projectIndex : 0;

    const t = translations[currentLang] || translations.es;
    const d = project.details[currentLang] || project.details.es;
    const titleText = project.title[currentLang] || project.title.es;
    const genreText = project.genre[currentLang] || project.genre.es;

    // Update document title
    document.title = `${titleText} | Pau Gutsens`;

    // Calculate prev / next projects
    const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
    const nextIndex = (currentIndex + 1) % projectsData.length;
    const prevProject = projectsData[prevIndex];
    const nextProject = projectsData[nextIndex];
    const prevTitle = prevProject.title[currentLang] || prevProject.title.es;
    const nextTitle = nextProject.title[currentLang] || nextProject.title.es;

    // Role tags & engine badges
    const rolesList = getLocalizedList(project.roles);
    const rolesHtml = rolesList.map(r => `<span class="badge badge-ld">${r}</span>`).join(" ");
    const tagsList = Array.isArray(project.tags) ? project.tags : [];
    const tagsHtml = tagsList.map(tagItem => `<span class="tag">${tagItem}</span>`).join(" ");

    // What & Why Cards HTML
    const whatAndWhyHtml = (d.whatAndWhy || []).map((item, idx) => `
        <div class="what-why-card">
            <div class="what-why-header">
                <span class="what-why-num">0${idx + 1}</span>
                <h3 class="what-why-title">${item.title}</h3>
            </div>
            <div class="what-why-blocks">
                <div class="what-why-block challenge">
                    <strong><i class="fa-solid fa-circle-question"></i> ${t.proj_challenge_label}</strong>
                    <p>${item.challenge}</p>
                </div>
                <div class="what-why-block what">
                    <strong><i class="fa-solid fa-cube"></i> ${t.proj_what_label}</strong>
                    <p>${item.what}</p>
                </div>
                <div class="what-why-block why">
                    <strong><i class="fa-solid fa-lightbulb"></i> ${t.proj_why_label}</strong>
                    <p>${item.why}</p>
                </div>
            </div>
        </div>
    `).join("");

    // Gallery HTML
    const galleryHtml = (d.gallery || []).map(img => `
        <div class="gallery-thumb" onclick="openLightbox('${img.src}', '${img.caption}')">
            <img src="${img.src}" alt="${img.caption}" loading="lazy">
            <div class="gallery-thumb-caption">${img.caption}</div>
        </div>
    `).join("");

    container.innerHTML = `
        <!-- Breadcrumb -->
        <nav class="project-breadcrumb" aria-label="Breadcrumb">
            <a href="index.html">${t.proj_breadcrumb_home}</a>
            <span>/</span>
            <a href="index.html#projects">${t.proj_breadcrumb_projects}</a>
            <span>/</span>
            <span class="breadcrumb-current">${titleText}</span>
        </nav>

        <!-- Project Hero Header -->
        <header class="project-hero">
            <div class="project-roles-badges">${rolesHtml}</div>
            <h1 class="project-hero-title">${titleText}</h1>
            <div class="project-hero-genre">${genreText}</div>

            <div class="project-meta-strip">
                <div class="meta-strip-item">
                    <strong>${t.proj_engine_label}</strong>
                    <span>${getLocalizedVal(project.engine)}</span>
                </div>
                <div class="meta-strip-item">
                    <strong>${t.proj_roles_label}</strong>
                    <span>${rolesList.join(", ")}</span>
                </div>
                <div class="meta-strip-item">
                    <strong>${t.proj_team_label}</strong>
                    <span>${getLocalizedVal(project.team)}</span>
                </div>
                <div class="meta-strip-item">
                    <strong>${t.proj_duration_label}</strong>
                    <span>${getLocalizedVal(project.duration)}</span>
                </div>
            </div>

            <div class="project-hero-cover-wrap" onclick="openLightbox('${project.coverImage}', '${titleText}')">
                <img src="${project.coverImage}" alt="${titleText}" class="project-hero-img" loading="eager">
                <div class="cover-zoom-hint"><i class="fa-solid fa-expand"></i> ${t.proj_zoom_hint || "Click per ampliar"}</div>
            </div>
        </header>

        <!-- Main Project Content Sections -->
        <div class="project-content-body">
            <!-- 1. El Proyecto por Encima -->
            <section class="project-section">
                <div class="project-section-header">
                    <i class="fa-solid fa-gamepad"></i>
                    <h2>${titleText}</h2>
                </div>
                <div class="project-section-content">
                    ${d.projectOverview}
                </div>
            </section>

            <!-- 2. Mi Rol y Aportación Principal -->
            <section class="project-section">
                <div class="project-section-header">
                    <i class="fa-solid fa-user-check"></i>
                    <h2>${t.proj_role_title}</h2>
                </div>
                <div class="project-section-content">
                    ${d.myContribution}
                </div>
            </section>

            <!-- 3. Qué Hice y Por Qué lo Hice (Decisiones de Diseño con Rationale) -->
            <section class="project-section">
                <div class="project-section-header">
                    <i class="fa-solid fa-compass-drafting"></i>
                    <h2>${t.proj_what_why_title}</h2>
                </div>
                <div class="what-why-grid">
                    ${whatAndWhyHtml}
                </div>
            </section>

            <!-- 4. Desglose de Level Design -->
            <section class="project-section">
                <div class="project-section-header">
                    <i class="fa-solid fa-cubes"></i>
                    <h2>${t.proj_ld_title}</h2>
                </div>
                <div class="project-section-content project-prose">
                    ${d.ldBreakdown}
                </div>
            </section>

            <!-- 5. Metodología de QA & Testing -->
            <section class="project-section">
                <div class="project-section-header">
                    <i class="fa-solid fa-bug"></i>
                    <h2>${t.proj_qa_title}</h2>
                </div>
                <div class="project-section-content project-prose">
                    ${d.qaBreakdown}
                </div>
            </section>

            <!-- 6. Galería de Capturas & Materiales -->
            <section class="project-section">
                <div class="project-section-header">
                    <i class="fa-solid fa-images"></i>
                    <h2>${t.proj_gallery_title}</h2>
                </div>
                <div class="modal-gallery-grid">
                    ${galleryHtml}
                </div>
            </section>

            <!-- Tags -->
            <div class="project-tags-wrap">
                <strong style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 0.85rem; margin-right: 0.5rem;">TAGS:</strong>
                ${tagsHtml}
            </div>

            <!-- 7. Paginación entre Proyectos -->
            <nav class="project-nav-bar" aria-label="Navegació entre projectes">
                <a href="project.html?id=${prevProject.id}" class="project-nav-btn prev">
                    <span class="nav-direction"><i class="fa-solid fa-arrow-left"></i> ${t.proj_prev_label}</span>
                    <strong class="nav-project-title">${prevTitle}</strong>
                </a>
                <a href="project.html?id=${nextProject.id}" class="project-nav-btn next">
                    <span class="nav-direction">${t.proj_next_label} <i class="fa-solid fa-arrow-right"></i></span>
                    <strong class="nav-project-title">${nextTitle}</strong>
                </a>
            </nav>
        </div>
    `;
}
