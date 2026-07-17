// Datos de las mallas curriculares
const currData = {
    "Desarrollador de Software y Especialista en IA": {
        "Técnico Básico": ["Módulo I: El Idioma de las Máquinas: Lógica y Algoritmos", "Módulo II: Creando Interfaces Impactantes: HTML5 y CSS3", "Módulo III: Dando Vida a la Web: Javascript", "Módulo IV: Portafolio, Control de Versiones y Freelance", "Módulo V: Diseño UI/UX y Herramientas Visuales (Figma)"],
        "Técnico Auxiliar": ["Módulo VI: Entendiendo la Matrix: Servidores y Bases de Datos", "Módulo VII: Programación Servidor (Python y Django)", "Módulo VIII: Seguridad Infranqueable y Autenticación", "Módulo IX: A la Nube: Despliegue a Producción", "Módulo X: Arquitectura de Microservicios y APIs RESTful"],
        "Técnico Medio I": ["Módulo XI: Interfaces del Futuro: React.js", "Módulo XII: Datos sin Límites y Tiempo Real", "Módulo XIII: Trabajo en Equipo y Calidad (QA)", "Módulo XIV: Proyecto de Grado: Tienda E-Commerce", "Módulo XV: DevOps, Contenedores y Automatización (CI/CD) (Módulo Actualizado)"],
        "Técnico Medio II": ["Módulo XVI: Tu App en el Celular: Introducción a React Native", "Módulo XVII: Funciones Avanzadas Móviles", "Módulo XVIII: El Futuro Hoy: Integración de Inteligencia Artificial", "Módulo XIX: Gran Proyecto Integrador Final", "Módulo XX: Ética en la IA y Ciberseguridad Aplicada"]
    },
    "Experto en Domótica y Smart Homes": {
        "Técnico Básico": ["Módulo I: El Primer Paso Seguro: Electricidad Domiciliaria sin Miedo", "Módulo II: Conectando Todo: Herramientas y Cableado", "Módulo III: Magia en tu Casa: Dispositivos Comerciales", "Módulo IV: La Base del Hogar Smart: Redes Wi-Fi Estables", "Módulo V: Diseño de Interfaz y Control de Usuario"],
        "Técnico Auxiliar": ["Módulo VI: Módulos Ocultos: Inteligencia Detrás del Interruptor", "Módulo VII: Movimiento Automático: Cortinas y Persianas", "Módulo VIII: Clima Perfecto: Termostatos y Eficiencia Energética", "Módulo IX: Tu Voz es el Control: Integración con Alexa", "Módulo X: Mantenimiento y Diagnóstico de Sistemas"],
        "Técnico Medio I": ["Módulo XI: Alexa, Abre la Puerta: Cerraduras Inteligentes", "Módulo XII: Acceso Vehicular: Portones Automáticos para Negocios", "Módulo XIII: ¿Quién Toca?: Videoporteros IP", "Módulo XIV: Seguridad Comercial: Cámaras y Sirenas Wi-Fi", "Módulo XV: Domótica Aplicada a Entornos Agro-comerciales"],
        "Técnico Medio II": ["Módulo XVI: El Cerebro del Maker: Arduino y ESP32", "Módulo XVII: Domótica a Medida: Control de Relés Múltiples y Presentación", "Módulo XVIII: Independencia Total: Servidores Locales (Home Assistant)", "Módulo XIX: Proyecto Final: La Casa del Futuro", "Módulo XX: Innovaciones y Tendencias en Domótica"]
    },
    "Experto en Conexión de Redes Domiciliarias, WISP y CCTV": {
        "Técnico Básico": ["Módulo I: Fundamentos y Direccionamiento IP", "Módulo II: Configuración de Routers y Seguridad Wi-Fi", "Módulo III: Médico de Redes: Diagnóstico y Troubleshooting", "Módulo IV: Instalaciones que no Fallan: Cableado Estructurado", "Módulo V: Diseño Lógico de Redes (Subnetting)"],
        "Técnico Auxiliar": ["Módulo VI: El Ojo que Todo lo Ve: CCTV Analógico y Grabadores (DVR)", "Módulo VII: Vigilancia Moderna: Redes POE y Cámaras IP", "Módulo VIII: Control Total: Alarmas y Control de Acceso", "Módulo IX: Monitoreo Remoto y Proyecto de Producción", "Módulo X: Mantenimiento y Certificación de Cableado"],
        "Técnico Medio I": ["Módulo XI: Proveedor de Internet: Estructura WISP y Gestión", "Módulo XII: Cruzando el Cielo: Enlaces Punto a Punto y Mikrotik", "Módulo XIII: Domina la Luz: Instalación de Fibra Óptica", "Módulo XIV: Equipos de Cabecera y Proyecto FTTH", "Módulo XV: Nodos WISP Autónomos y Redes Rurales"],
        "Técnico Medio II": ["Módulo XVI: Ruteo Profesional Avanzado con Mikrotik", "Módulo XVII: El Negocio WISP: Fichas Wi-Fi (Hotspots)", "Módulo XVIII: Servidores de Almacenamiento (NAS) para Cámaras", "Módulo XIX: Telefonía IP y Proyecto Final", "Módulo XX: Legislación y Gestión de Proyectos"]
    },
    "Técnico Especialista en Microsoldadura y Reparación de Celulares": {
        "Técnico Básico": ["Módulo I: Anatomía Móvil: Desarmando Celulares y Tablets", "Módulo II: El Toque Perfecto: Cambio de Pantallas y Táctiles", "Módulo III: Energía y Baterías", "Módulo IV: Periféricos: Cámaras y Parlantes", "Módulo V: Atención al Cliente y Diagnóstico Rápido"],
        "Técnico Auxiliar": ["Módulo VI: Cirugía Electrónica: Microsoldadura Básica", "Módulo VII: Diagnóstico con Fuente de Alimentación", "Módulo VIII: Lectura Básica de Planos Esquemáticos", "Módulo IX: Reviviendo el Cerebro: Software, Flasheo y Legalidad", "Módulo X: Reparación Avanzada de Pantallas (Glass/OCA)"],
        "Técnico Medio I": ["Módulo XI: El Ecosistema Apple y Software IOS", "Módulo XII: Mantenimiento y Cambio de Piezas en iPhone", "Módulo XIII: Solución a Fallas Comunes de iPhone", "Módulo XIV: Trato al Cliente y Presupuestos Premium", "Módulo XV: Recuperación de Datos y Forense Móvil"],
        "Técnico Medio II": ["Módulo XVI: Herramientas Avanzadas: Osciloscopio y Diagnóstico", "Módulo XVII: Reballing y Trabajo en ICs (Chips)", "Módulo XVIII: Recuperación de Datos Extrema", "Módulo XIX: El Negocio: Tu Propio Taller y Marketing Digital", "Módulo XX: Administración del Servicio Técnico y Proyecto Final"]
    },
    "Especialista IT: Ensamblaje, Soporte y Mantenimiento": {
        "Técnico Básico": ["Módulo I: Construyendo Bestias: Ensamblaje de PCs Gamers", "Módulo II: Dejando Todo Como Nuevo: Mantenimiento Preventivo", "Módulo III: El Alma de la Máquina: Sistemas Operativos y Rescate", "Módulo IV: Diagnóstico Básico de Fallas", "Módulo V: Configuración de Entornos de Streaming"],
        "Técnico Auxiliar": ["Módulo VI: Aceleración y Optimización del Sistema", "Módulo VII: Conexión Básica de Redes de Oficina", "Módulo VIII: Técnico a Distancia: Soporte Remoto", "Módulo IX: Proyecto General de Optimización y Mantenimiento", "Módulo X: Herramientas de Productividad y Ofimática"],
        "Técnico Medio I": ["Módulo XI: Rescate Físico: Plásticos y Pantallas", "Módulo XII: Electrónica Básica para Laptops", "Módulo XIII: Fallas Comunes: BIOS y Encendido", "Módulo XIV: Elaboración de Informes Técnicos", "Módulo XV: Virtualización y Servidores Básicos"],
        "Técnico Medio II": ["Módulo XVI: Servidores Locales (Windows Server Básico)", "Módulo XVII: El Salvavidas IT: Backups Automáticos", "Módulo XVIII: Sistemas de Laboratorios y Despliegues por Red", "Módulo XIX: Contratos Corporativos y Métricas (Outsourcing IT)", "Módulo XX: ITIL, Mesa de Ayuda y Proyecto Final"]
    }
};

// Siglas y números romanos que siempre deben ir en MAYÚSCULAS
const acronyms = [
    "IA", "HTML5", "CSS3", "JS", "UI", "UX", "API", "REST", "QA", "CI", "CD",
    "ESP32", "IP", "WI-FI", "WISP", "CCTV", "POE", "DVR", "FTTH", "NAS", "IOS", 
    "IC", "BIOS", "ITIL", "PC", "IT", "I", "II", "III", "IV", "V", "VI", "VII", 
    "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX"
];

// Palabras menores que no se capitalizan (a menos que sean la primera palabra)
const minorWords = ["y", "de", "del", "en", "el", "la", "las", "los", "a", "con", "sin", "para", "por", "un", "una"];

// Función formateadora solicitada por el usuario (Title Case + Siglas en Mayúsculas)
function formatText(text) {
    if (!text) return "";
    
    // Primero todo a minúsculas
    let lower = text.toLowerCase();
    
    return lower.split(/\s+/).map((word, index) => {
        // Limpiamos la palabra de puntuación para verificar si es sigla
        let cleanWord = word.replace(/[^\w\sáéíóúüñ]/gi, '').toUpperCase();
        
        // Si es una sigla o número romano, la devolvemos en mayúsculas (manteniendo puntuación)
        if (acronyms.includes(cleanWord)) {
            return word.toUpperCase();
        }
        
        // Si es una palabra menor y no es la primera palabra, la dejamos en minúscula
        if (index > 0 && minorWords.includes(word.toLowerCase())) {
            return word.toLowerCase();
        }
        
        // Capitalizamos la primera letra y el resto minúscula
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}

// Prompts estáticos
const PROMPT_AUDIO = `Actúen como presentadores expertos en tecnología y generen un análisis de audio extenso, profundo y muy completo. Identifiquen y extraigan automáticamente el tema principal del documento cargado. La conversación debe estar dirigida a todos los estudiantes y al público en general de la Academia Educativa EduConnectRuben.
Directrices estrictas de locución y lenguaje:
1. Secuencia de Apertura Obligatoria:
Voz Masculina Primero: Es absolutamente obligatorio que el presentador MASCULINO sea el primero en hablar dando la bienvenida.
Tema y Puntos Clave: Inmediatamente después de la bienvenida, anuncien con entusiasmo de qué van a hablar (el tema principal extraído del documento) y hagan un resumen rápido, claro y atractivo de los puntos más importantes que se analizarán.
Identidad y Autoridad: Preséntense con total naturalidad como los locutores o presentadores expertos de este espacio. Aclaren a un el principio y al finalizar el audio que están analizando y desglosando una clase magistral íntegramente creada, diseñada y estructurada por el Profesor Rubén Condori, docente y fundador de la academia. Denle absolutamente todo el crédito inicial como el autor intelectual y guía de este material educativo.
2. Estructura Pedagógica Obligatoria (Los 4 Momentos): A lo largo de la conversación, deben dividir, estructurar y mencionar explícitamente los cuatro momentos metodológicos: PRÁCTICA, TEORÍA, VALORACIÓN y PRODUCCIÓN. Asegúrense de guiar a los estudiantes a través de cada uno de estos momentos, anunciando claramente de forma hablada cuando pasan de un momento a otro para que el estudiante no se confunda.
3. Regla CRÍTICA de Lectura (Cero palabras de acción): Tienen ESTRICTAMENTE PROHIBIDO decir, escribir o incluir la palabra "pausa", "silencio", "respira" o usar corchetes con indicaciones. Si lo hacen, el motor de audio lo leerá en voz alta. Para generar silencios naturales, disminuir la velocidad o simular respiraciones, utilice EXCLUSIVAMENTE puntos suspensivos (...) y comas.
4. Restricción de idioma: Tienen terminantemente prohibido usar español de España. Cero uso de 'vosotros', 'os', 'sois', 'estáis', 'habéis', 'tenéis', 'podéis', 'vais', 'queréis', 'mirad', 'fijaos', 'haced', 'poned', 'escuchad', 'recordad', 'imaginad', 'pulsad', 'clicade', 'coged', 'chavales', 'hostia', 'guay', 'mola', 'flipa', 'curro', 'currar', 'ordenador', 'fichero', 'a por ello', 'vale'.
5. Acento y Tono: Utilicen un español latino neutro, profesional y cálido, con un trato de 'ustedes' o 'tú'. El ritmo debe ser notoriamente pausado, tranquilo y reflexivo.
6. Profundidad: Desglosen cada concepto paso a paso con analogías aplicadas al contexto de Santa Cruz, Bolivia.
7. Cierre y Despedida: Al despedirse, es VITAL que vuelvan a mencionar al Profesor Rubén Condori, recordando a los estudiantes que esta sesión de audio fue posible gracias a su diseño curricular.`;

const PROMPT_VIDEO = `¡REGLA DE MÁXIMA PRIORIDAD!: todo el audio, la voz del narrador y los textos en pantalla deben generarse estrictamente en idioma español latino. tienes terminantemente prohibido el inglés.
Actúa como mi guionista técnico audiovisual experto. Identifica automáticamente el tema central del documento adjunto y convierte la teoría en un guion largo, completo y exhaustivo para una clase magistral en video dirigida a todos los estudiantes de la Academia Educativa EduConnectRuben, sin importar su nivel de conocimientos.
Reglas de oro del guion:
Perfil del Presentador (Obligatorio): El narrador y presentador debe ser un HOMBRE (voz masculina adulta) de principio a fin.
Idioma y Tono: Español latinoamericano (Bolivia). Prohibido el español de España. Ritmo pausado y reflexivo.
Estructura Pedagógica Obligatoria (Los 4 Momentos): Es obligatorio que el guion se divide y mencione explícitamente los cuatro momentos metodológicos bolivianos: PRÁCTICA, TEORÍA, VALORACIÓN y PRODUCCIÓN . 
Secuencia de Apertura (Obligatoria):
Paso 1: Anuncia el tema central y reanuda los puntos clave.
Paso 2: Preséntate con naturalidad como el locutor experto encargado de la narración.
Paso 3: Otorga el crédito absoluto: Menciona que esta clase ha sido íntegramente diseñada y estructurada por su autor intelectual, el Prof. Rubén Condori , docente y fundador de la academia. (Prohibido decir "no soy el profesor", simplemente asumir el rol de locutor).
Estructura requerida por cada escena:
Para cada escena detallada, debes incluir obligatoriamente:
[INDICACIÓN VISUAL]: Fondo del video siempre azul cielo . El título del tema y los nombres de los 4 momentos metodológicos (PRÁCTICA, TEORÍA,VALORACIÓN,PRODUCCIÓN) deben aparecer siempre encolor ROJOy en tamaño grande al centro para evitar confusiones.Incluye detalles sobre código,diagramas y esquemas.
[LOCUCIÓN DEL PRESENTADOR - VOZ MASCULINA]:Las palabras exactas que el narrador dirá en español.El narrador debe anunciar cada momento metodológico antes de explicarlo (Ej:"Pasemos ahora al momento de la TEORÍA...").
[MARCAS DE RITMO Y TONO]:Etiquetas como[Hablar lento]o[Acento cruceño/boliviano]. EXTREMA MODERACIÓN:Prohibido usar o repetir la palabra "pausa".Usa puntos suspensivos (...) para los silencios.
Cierre del Video: Finaliza reforzando que todo el contenido técnico y curricular es autoridad delProfesor Rubén Condoriy despídete con calidez boliviana.
¿Qué logramos con esta actualización?
Orden Pedagógico:Al incluir la PRÁCTICA,TEORÍA,VALORACIÓN y PRODUCCIÓN,el video sigue el modelo educativo oficial.
Claridad Visual:Al forzar los títulos de los momentos en Rojo sobre el fondo Azul Cielo,el estudiante sabe exactamente en qué parte de la lección se encuentra.
Identidad Local:Mantiene el tono boliviano y el crédito a tu autoría.`;

const PROMPT_MAPA = `Actúa como mi asistente pedagógico. Identifica el tema principal de los documentos y genera un esquema conceptual en texto estrictamente vertical (de arriba hacia abajo).
Aplica las siguientes reglas:
Jerarquía visual: Usa sangrías, viñetas y saltos de línea para simular un mapa mental vertical. El tema principal debe ser el nodo superior.
Conceptos integrados: Debajo de cada título o subtítulo, incluye una explicación breve (máximo 1 o 2 líneas).
Exclusividad de fuente: Limite a usar la información de los documentos cargados.`;

const PROMPT_TARJETAS = `Actúa como mi asistente pedagógico experto. Identifica automáticamente el tema principal y los conceptos clave de cualquier documento cargado. Basado exclusivamente en esa información, genera EXACTAMENTE 15 TARJETAS DIDÁCTICAS para mis estudiantes del Academia educativa EduConnectRuben. Tienes prohibido generar una cantidad menor.
REGLAS DE FORMATO ESTRICTAS:
Idioma: Español latino (Bolivia). Terminantemente prohibido usar modismos de España.
Parte delantera (Anverso - TIPO PREGUNTA OBLIGATORIO): Tienes prohibido poner solo títulos o fragmentos de código. El anverso debe formularse EXCLUSIVAMENTE como una pregunta de evaluación, corta y muy directa (ejemplo: "¿Para qué sirve exactamente esta herramienta/concepto?" o "¿Qué función cumple esta estructura en el sistema?").
Parte trasera (Reverso): Tienes PROHIBIDO dar definiciones de diccionario aburridas. Responde a la pregunta con una explicación directa acompañada de una analogía práctica de la vida real que cualquier persona o estudiante en Santa Cruz entendería al instante.
Longitud (CRÍTICO): El reverso debe tener como MÁXIMO 2 o 3 oraciones cortas. Debe ser rápido de leer y fácil de memorizar.`;

const PROMPT_CUESTIONARIO = `Actúa como mi asistente de evaluación técnica. Identifica automáticamente el tema principal del documento adjunto y diseña un cuestionario de EXACTAMENTE 15 PREGUNTAS para mis estudiantes del Academia educativa EduConnectRuben.
REGLAS ESTRICTAS DE EVALUACIÓN:
Idioma y tono: Español latino (Bolivia). Dirígete a los estudiantes como 'ustedes'. Terminantemente prohibido usar modismos de España.
Enfoque Práctico (Cero memorización): Tienes prohibido hacer preguntas teóricas de diccionario (Ej: "¿Qué es...?"). Diseña preguntas basadas en casos de estudio, depuración de errores lógicos o escenarios de la vida real que cualquier persona en Santa Cruz enfrentaría en su día a día.
Variedad Obligatoria (5 de cada tipo): Debes generar exactamente 5 preguntas de Verdadero/Falso, 5 preguntas de Opción Múltiple (una sola respuesta correcta) y 5 preguntas de Selección Múltiple (varias respuestas correctas) . Mezcla todos los tipos de forma aleatoria a lo largo de la evaluación.
Trampas Técnicas (Distractores): Crea opciones incorrectas que no sean evidentes; Deben representar errores comunes, de lógica o de sintaxis que suelen cometer los estudiantes y profesionales principiantes.
Retroalimentación: Al final de cada pregunta, incluye una justificación técnica clara detallando por qué esa es la respuesta correcta y por qué los distractores fallan.
Formato Limpio: Entrega el cuestionario estructurado en texto normal de lectura. Marca claramente la opción correcta. NO utilice formatos de código para exportar a plataformas virtuales (como Aiken o GIFT).`;

// Plantilla Dinámica
function generateSlidePrompt(carrera, nivel, modulo) {
    const formattedCarrera = formatText(carrera);
    const formattedNivel = formatText(nivel);
    
    // Separar el prefijo ("Módulo I") del título ("El Idioma de las Máquinas...")
    let moduloPrefix = "Módulo";
    let moduloTitle = modulo;
    
    const splitIndex = modulo.indexOf(":");
    if (splitIndex !== -1) {
        moduloPrefix = formatText(modulo.substring(0, splitIndex).trim()); // Ej: "Módulo I"
        moduloTitle = modulo.substring(splitIndex + 1).trim();
    }
    
    let formattedModuloTitle = formatText(moduloTitle);
    // Asegurar que la primerísima letra del título esté en mayúscula
    formattedModuloTitle = formattedModuloTitle.charAt(0).toUpperCase() + formattedModuloTitle.slice(1);

    return `Actúa como mi asistente experto en diseño curricular técnico-tecnológico. Identifica automáticamente el tema central de los documentos cargados para estructurar una presentación de diapositivas extensa, profesional y muy completa.

REGLAS ESTRICTAS DE REDACCIÓN Y FORMATO:
Restricción de idioma: Todo en español latino (Bolivia). Terminantemente prohibido el español de España.
Extensión Obligatoria (ANTI-RESUMEN): Tienes TERMINANTEMENTE PROHIBIDO limitar la presentación a solo 5 diapositivas. Debes generar múltiples diapositivas para cada momento metodológico. Especialmente el momento de TEORÍA debe dividirse en varias diapositivas para desglosar cada concepto con profundidad técnica. (Mínimo 15 a 20 diapositivas en total).

Momentos Metodológicos:
Estructura la clase en: PRÁCTICA, TEORÍA, VALORACIÓN y PRODUCCIÓN. Los títulos de estos momentos deben ir en MAYÚSCULAS, CENTRADOS y en color ROJO.
Adaptación Curricular: Si el documento es teórico, propón actividades prácticas y de producción acordes al contexto de cualquier estudiante o profesional en Santa Cruz, Bolivia.

FORMATO OBLIGATORIO DE LA CARÁTULA (DIAPOSITIVA 1):
La carátula debe ocupar el 90% de la diapositiva, con toda la información centrada y organizada de forma vertical (en filas):
Título del Tema (Arriba y al Centro): En tamaño EXTRAGRANDE y color AZUL VIBRANTE.
Módulo (Fila destacada): La palabra "${moduloPrefix}:" en color ROJO y el nombre "${formattedModuloTitle}" en color CELESTE (en tamaño más grande que los siguientes datos).

Datos Informativos (En filas separadas, una debajo de otra):
Academia: (Etiqueta en ROJO) EduConnectRuben (Respuesta en AZUL)
Carrera: (Etiqueta en ROJO) (${formattedCarrera}) (Respuesta en VERDE)
Nivel: (Etiqueta en ROJO) (${formattedNivel}) (Respuesta en CELESTE)
Profesor: (Etiqueta en ROJO) Rubén Condori (Respuesta en AMARILLO)
Gestión: (Etiqueta en ROJO) 2026 (Respuesta en VERDE)

Apoyo Visual: Describa la inclusión de dos imágenes medianas situadas a los lados de este bloque de texto.

ESTRUCTURA DE LAS SIGUIENTES DIAPOSITIVAS:
Organizadas por los Momentos Metodológicos, cada una debe tener:
🖥️ 1. Texto Visual (Para la pantalla): Exactamente de 4 a 5 viñetas técnicas, precisas y de alto impacto. Títulos en color CELESTE.
🎤 2. Notas del Orador (Para el Prof. Rubén Condori): Redacta el guion de apoyo en primera persona. Usa un lenguaje técnico pero cercano, profesional y muy comprensible, manteniendo la calidez característica de Bolivia. Explica con profundidad el contenido para que el estudiante no solo lea la pantalla, sino que comprenda la lógica técnica.`;
}

// Inicialización y eventos DOM
document.addEventListener("DOMContentLoaded", () => {
    const selCarrera = document.getElementById("carrera-select");
    const selNivel = document.getElementById("nivel-select");
    const selModulo = document.getElementById("modulo-select");
    
    // Poblar prompts estáticos
    document.getElementById("text-audio").innerText = PROMPT_AUDIO;
    document.getElementById("text-video").innerText = PROMPT_VIDEO;
    document.getElementById("text-mapa").innerText = PROMPT_MAPA;
    document.getElementById("text-tarjetas").innerText = PROMPT_TARJETAS;
    document.getElementById("text-cuestionario").innerText = PROMPT_CUESTIONARIO;

    // Poblar carreras
    for (const carrera in currData) {
        let option = document.createElement("option");
        option.value = carrera;
        option.text = formatText(carrera);
        selCarrera.add(option);
    }

    // Al cambiar carrera
    selCarrera.addEventListener("change", function() {
        selNivel.innerHTML = '<option value="">Selecciona un nivel...</option>';
        selModulo.innerHTML = '<option value="">Selecciona un módulo...</option>';
        selModulo.disabled = true;

        if (this.value) {
            selNivel.disabled = false;
            for (const nivel in currData[this.value]) {
                let option = document.createElement("option");
                option.value = nivel;
                option.text = formatText(nivel);
                selNivel.add(option);
            }
        } else {
            selNivel.disabled = true;
        }
        updateDynamicPrompt();
    });

    // Al cambiar nivel
    selNivel.addEventListener("change", function() {
        selModulo.innerHTML = '<option value="">Selecciona un módulo...</option>';

        if (this.value) {
            selModulo.disabled = false;
            const modulos = currData[selCarrera.value][this.value];
            modulos.forEach(modulo => {
                let option = document.createElement("option");
                option.value = modulo;
                option.text = formatText(modulo);
                selModulo.add(option);
            });
        } else {
            selModulo.disabled = true;
        }
        updateDynamicPrompt();
    });

    // Al cambiar módulo
    selModulo.addEventListener("change", function() {
        updateDynamicPrompt();
    });

    function updateDynamicPrompt() {
        const carrera = selCarrera.value;
        const nivel = selNivel.value;
        const modulo = selModulo.value;
        const el = document.getElementById("text-diapositivas");

        if (carrera && nivel && modulo) {
            el.innerText = generateSlidePrompt(carrera, nivel, modulo);
            el.style.color = "#f8fafc";
        } else {
            el.innerText = "Selecciona una Carrera, Nivel y Módulo para generar el prompt dinámico de Diapositivas.";
            el.style.color = "#94a3b8";
        }
    }

    // Tabs logic
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            tab.classList.add("active");
            document.getElementById(tab.getAttribute("data-target")).classList.add("active");
        });
    });

    // Copy logic
    const copyBtns = document.querySelectorAll(".copy-btn");
    const toast = document.getElementById("toast");

    copyBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-target");
            const textToCopy = document.getElementById(targetId).innerText;
            
            // Check if user selected everything for dynamic prompt
            if (targetId === "text-diapositivas" && (!selCarrera.value || !selNivel.value || !selModulo.value)) {
                alert("Por favor, selecciona Carrera, Nivel y Módulo primero.");
                return;
            }

            navigator.clipboard.writeText(textToCopy).then(() => {
                toast.classList.add("show");
                setTimeout(() => {
                    toast.classList.remove("show");
                }, 2000);
            });
        });
    });
});
