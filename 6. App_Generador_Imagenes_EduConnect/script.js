
const basesDeDatos = {
    carreras: [
        {
            titulo: "Desarrollador de Software e IA",
            elementoCentral: "un cerebro digital cibernético brillando o una computadora holográfica escribiendo código",
            temas: [
                "Lógica de Programación y Algoritmos (Ícono: Engranajes lógicos)",
                "Desarrollo Web HTML5 y CSS3 (Ícono: Navegador web estructurado)",
                "Programación JavaScript y React (Ícono: Código interactivo)",
                "Bases de Datos SQL (Ícono: Servidor de base de datos)",
                "Backend con Python y Django (Ícono: Motor de servidor)",
                "Inteligencia Artificial y Machine Learning (Ícono: Neurona IA conectada)",
                "Control de Versiones Git y GitHub (Ícono: Nodos de ramificación)",
                "Desarrollo de Software y Arquitectura (Ícono: Estructura de bloques)"
            ]
        },
        {
            titulo: "Domótica y SmartHome",
            elementoCentral: "un motor de persiana automatizado futurista o un panel central táctil holográfico para casa inteligente",
            temas: [
                "Electricidad Domiciliaria Inteligente (Ícono: Enchufe con rayo de energía verde)",
                "Redes Inalámbricas y Wi-Fi (Ícono: Señal WiFi radiante azul)",
                "Dispositivos Sonoff y Domótica (Ícono: Interruptor táctil inteligente)",
                "Asistentes Virtuales y Alexa (Ícono: Altavoz inteligente)",
                "Seguridad y Cerraduras Biométricas (Ícono: Candado digital o huella dactilar)",
                "Sensores Ambientales Inteligentes (Ícono: Termómetro o medidor de clima)",
                "Motores Automatizados de Persianas (Ícono: Engranaje mecánico inteligente)",
                "Control Centralizado en Nube (Ícono: Nube con servidor)"
            ]
        },
        {
            titulo: "Redes Domiciliarias y CCTV",
            elementoCentral: "un router avanzado de múltiples antenas con flujos de datos o un panel de distribución de red de fibra óptica",
            temas: [
                "Cableado Estructurado y Fibra (Ícono: Cables de red Ethernet UTP)",
                "Configuración de Routers y Switches (Ícono: Router emitiendo ondas)",
                "Instalación de Cámaras IP y CCTV (Ícono: Cámara de seguridad moderna)",
                "Gestión de NVR y DVR (Ícono: Servidor de grabación de video)",
                "Topología de Redes Inalámbricas WISP (Ícono: Antena de telecomunicaciones)",
                "Seguridad Perimetral Electrónica (Ícono: Muro de fuego o escudo cibernético)",
                "Administración de Ancho de Banda (Ícono: Medidor de velocidad de internet)",
                "Sistemas de Alarma y Monitoreo (Ícono: Sirena de alarma digital)"
            ]
        },
        {
            titulo: "Reparación de Celulares y Microsoldadura",
            elementoCentral: "un microscopio estereoscópico digital con luz láser o una placa base de celular (Motherboard) ultra detallada",
            temas: [
                "Arquitectura y Hardware Móvil (Ícono: Placa electrónica de smartphone)",
                "Diagnóstico Multímetro y Fuentes (Ícono: Pantalla de multímetro digital)",
                "Microsoldadura SMD y BGA (Ícono: Cautín soldando un microchip)",
                "Sustitución de Pantallas y Baterías (Ícono: Batería con porcentaje de carga)",
                "Restauración de Software y Flasheo (Ícono: Cable USB transfiriendo datos)",
                "Planos Esquemáticos y Bornes (Ícono: Plano azul arquitectónico electrónico)",
                "Reparación de Cámaras y Sensores (Ícono: Lente de cámara de celular)",
                "Recuperación de Dispositivos Mojados (Ícono: Gota de agua sobre circuito)"
            ]
        },
        {
            titulo: "Especialista IT y Soporte",
            elementoCentral: "una torre de computadora Gamer desensamblada flotando en 3D o un holograma de mantenimiento de servidores",
            temas: [
                "Ensamblaje y Hardware PC (Ícono: Tarjeta gráfica moderna)",
                "Instalación de Sistemas Operativos (Ícono: Logo genérico de OS)",
                "Mantenimiento Preventivo (Ícono: Herramientas de destornillador y llave inglesa)",
                "Recuperación de Datos y Backups (Ícono: Disco duro con un escudo)",
                "Soporte Remoto a Usuarios (Ícono: Diadema de auriculares con micrófono)",
                "Optimización de Rendimiento (Ícono: Velocímetro al máximo)",
                "Gestión de Antivirus y Malware (Ícono: Escudo con símbolo de virus bloqueado)",
                "Administración de Redes Locales LAN (Ícono: Red de computadoras conectadas)"
            ]
        }
    ],
    institucionales: [
        {titulo: "¿Qué es EduConnectRuben?", elementoCentral: "el escudo brillante de la academia EduConnect o un libro digital holográfico abriéndose al mundo", temas: ["Educación Gratuita Global (Ícono: Globo terráqueo)", "Tecnología de Vanguardia (Ícono: Microchip)", "Aulas Virtuales Modernas (Ícono: Pantalla interactiva)", "Accesibilidad Sin Límites (Ícono: Símbolo de infinito)", "Comunidad Estudiantil (Ícono: Grupo de personas conectadas)", "Certificación Profesional (Ícono: Diploma brillante)"]},
        {titulo: "Nuestra Misión", elementoCentral: "una brújula dorada tecnológica apuntando al éxito o una antorcha digital de luz de conocimiento", temas: ["Democratizar la Educación (Ícono: Puertas abiertas)", "Práctica sobre Teoría (Ícono: Manos trabajando)", "Innovación Constante (Ícono: Foco de luz)", "Apoyo al Estudiante (Ícono: Manos estrechándose)", "Desarrollo del Talento (Ícono: Estrella en ascenso)", "Herramientas Gratuitas (Ícono: Caja de herramientas abierta)"]},
        {titulo: "Nuestra Visión", elementoCentral: "un ojo cibernético futurista mirando hacia el horizonte o un telescopio digital avanzado", temas: ["Liderazgo Educativo (Ícono: Corona o cima de montaña)", "Expansión Internacional (Ícono: Cohete espacial)", "Tecnología del Futuro (Ícono: Reloj del futuro)", "Transformación Social (Ícono: Árbol creciendo fuertemente)", "Ecosistema Tecnológico (Ícono: Hexágonos conectados)", "Reconocimiento Mundial (Ícono: Medalla global)"]},
        {titulo: "Beneficios de Estudiar", elementoCentral: "un cofre del tesoro digital derramando herramientas tecnológicas o un árbol de recompensas brillante", temas: ["Cero Costos Ocultos (Ícono: Moneda tachada o gratis)", "Acceso 24/7 (Ícono: Reloj 24 horas)", "Material Descargable (Ícono: Nube con flecha abajo)", "Profesores Expertos (Ícono: Mentor con puntero)", "Comunidad de Apoyo (Ícono: Red de soporte)", "Portafolio de Proyectos (Ícono: Carpeta llena de archivos)"]},
        {titulo: "Casos de Éxito", elementoCentral: "un podio brillante de ganadores en 3D o una escalera luminosa que lleva a la cima", temas: ["Emprendimientos Propios (Ícono: Maletín de negocios)", "Mejores Empleos (Ícono: Gráfico de crecimiento)", "Habilidades Altamente Demandadas (Ícono: Imán atrayendo oportunidades)", "Proyectos Reales Lanzados (Ícono: Satélite en órbita)", "Testimonios Reales (Ícono: Burbuja de chat con estrella)", "Cambio de Vida (Ícono: Mariposa digital)"]}
    ],
    tutoriales: [
        {titulo: "Acceso a Plataforma", elementoCentral: "una puerta de bóveda futurista abriéndose o una tarjeta de acceso biométrica escaneando un rostro", temas: ["Registro de Usuario (Ícono: Tarjeta de ID)", "Inicio de Sesión Seguro (Ícono: Candado digital)", "Recuperación de Contraseña (Ícono: Llave brillante)", "Configuración de Perfil (Ícono: Avatar de usuario)", "Navegación del Panel (Ícono: Tablero de instrumentos)", "Cerrar Sesión (Ícono: Puerta de salida)"]},
        {titulo: "Uso de Aulas Virtuales", elementoCentral: "un pupitre flotante holográfico en 3D o una pizarra inteligente proyectando gráficos interactivos", temas: ["Estructura de Módulos (Ícono: Bloques apilados)", "Acceso a las Clases (Ícono: Puerta de aula)", "Navegación de Temas (Ícono: Mapa de ruta)", "Seguimiento de Progreso (Ícono: Barra de porcentaje al 100%)", "Foros de Discusión (Ícono: Burbujas de diálogo cruzadas)", "Notificaciones del Curso (Ícono: Campana dorada)"]},
        {titulo: "Descargas de PDFs", elementoCentral: "un libro en 3D con páginas de luz desprendiendo hojas digitales o una impresora de luz holográfica", temas: ["Ubicar Materiales (Ícono: Lupa buscando un archivo)", "Formatos de Archivo (Ícono: Ícono de documento PDF)", "Velocidad de Descarga (Ícono: Flecha de descarga rápida)", "Lector Integrado (Ícono: Lentes de lectura)", "Organización de Archivos (Ícono: Estantería de carpetas)", "Material Offline (Ícono: Nube desconectada)"]},
        {titulo: "Reproductor Multimedia", elementoCentral: "una pantalla de cine envolvente holográfica o un botón de Play (Reproducir) de cristal suspendido en el aire", temas: ["Calidad de Video HD (Ícono: Monitor 4K)", "Control de Volumen (Ícono: Altavoz con ondas sonoras)", "Ajuste de Velocidad (Ícono: Engranaje con reloj)", "Pantalla Completa (Ícono: Cuatro flechas expandiéndose)", "Subtítulos Opcionales (Ícono: Cuadro de texto CC)", "Controles Táctiles (Ícono: Mano tocando pantalla)"]},
        {titulo: "Soporte Técnico", elementoCentral: "un robot asistente amigable en 3D o un centro de ayuda con pantallas holográficas y un micrófono de soporte", temas: ["Ticket de Ayuda (Ícono: Boleto de soporte)", "Chat en Vivo (Ícono: Chatbot sonriente)", "Preguntas Frecuentes (FAQ) (Ícono: Signo de interrogación luminoso)", "Reporte de Errores (Ícono: Señal de advertencia)", "Contacto Directo (Ícono: Sobre de correo electrónico)", "Base de Conocimientos (Ícono: Cerebro con un foco)"]}
    ]
};

const selectCategoria = document.getElementById('categoria');
const selectSubcategoria = document.getElementById('subcategoria');

function cargarSubcategorias() {
    const categoria = selectCategoria.value;
    selectSubcategoria.innerHTML = '<option value="">-- Elige una Opción --</option>';
    
    if (!categoria) {
        selectSubcategoria.disabled = true;
        return;
    }
    
    selectSubcategoria.disabled = false;
    
    basesDeDatos[categoria].forEach((item, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${index + 1}. ${item.titulo}`;
        selectSubcategoria.appendChild(option);
    });
}

function generarPromptImagenRadial(estilo) {
    const catId = selectCategoria.value;
    const subId = selectSubcategoria.value;
    
    if (!catId || subId === "") {
        alert("⚠️ Por favor, selecciona la Categoría y el Tema Específico.");
        return;
    }
    
    const info = basesDeDatos[catId][subId];
    
    // Armado de los íconos radiales
    let listaTemas = info.temas.map((tema, index) => `${index + 1}. ${tema}`).join("\n");
    
    let estiloVisual = "";
    let estructuraImagen = "";

    if (estilo === 'radial') {
        estiloVisual = "Diseño radial cibernético (Concepto de Inteligencia Central conectada a nodos radiales).";
        estructuraImagen = `1. EN EL CENTRO: Dibuja un elemento principal 3D altamente detallado, hiperrealista y luminoso que represente de forma espectacular: [ ${info.elementoCentral} ].
2. CONEXIONES: Alrededor de este elemento central, dibuja ramificaciones, líneas de circuito (circuit board lines) brillantes, hilos de fibra óptica o trazos de luz (glowing lines) que fluyan hacia afuera.
3. NODOS PERIFÉRICOS: Las líneas de conexión terminan en íconos circulares tipo 'burbujas' o 'escudos' flotantes alrededor del elemento central.`;
    } else if (estilo === 'brutal') { // Now Holograma Antigravedad
        estiloVisual = "Diseño Cinematográfico Espectacular: Hologramas 3D en Antigravedad (Estilo Película Sci-Fi).";
        estructuraImagen = `1. EN EL CENTRO: Dibuja el elemento principal suspendido majestuosamente en el aire, desafiando la gravedad, emitiendo ondas de luz volumétrica y polvo estelar: [ ${info.elementoCentral} ].
2. DINÁMICA: No uses cuadros ni líneas rígidas. Los elementos deben sentirse libres, flotando mágicamente en un campo de energía invisible.
3. NODOS PERIFÉRICOS: Encapsula los íconos secundarios dentro de esferas de cristal resplandecientes o burbujas de energía líquida que orbitan dinámicamente alrededor del elemento central, como si fueran planetas alrededor de un sol deslumbrante.`;
    } else if (estilo === 'isometrico') { // Now Portal Cyberpunk
        estiloVisual = "Diseño Épico y Agresivo: Portal Dimensional Cyberpunk de Alta Tecnología.";
        estructuraImagen = `1. EN EL CENTRO: Dibuja un portal cibernético de luz de neón rasgando el espacio, del cual emerge imponentemente el elemento principal: [ ${info.elementoCentral} ].
2. DINÁMICA: La escena debe estar llena de acción, chispas eléctricas, relámpagos de energía neón y una atmósfera de máximo poder tecnológico. 
3. NODOS PERIFÉRICOS: Los íconos secundarios deben ser placas u hologramas de alta tecnología, proyectados violentamente desde el portal y orbitando a gran velocidad alrededor del objeto principal. Calidad Unreal Engine 5, hiper-detallado y sobrecogedor.`;
    }

    const promptMaestro = `Actúa como un diseñador experto en arte digital 3D y dirección de arte cinematográfica. Genera una imagen con fondo TOTALMENTE TRANSPARENTE (para formato PNG sin fondo).

ESTILO VISUAL OBLIGATORIO: ${estiloVisual}
TÍTULO DEL TEMA: "${info.titulo}".

ESTRUCTURA DE LA IMAGEN:
${estructuraImagen}

LOS ÍCONOS DEBEN REPRESENTAR ESTOS CONCEPTOS:
Cada nodo o burbuja debe ser muy colorida (estilo flat design brillante o cristal 3D) y representar visualmente los siguientes temas:
${listaTemas}

REGLA ESTRICTA 1: NO ESCRIBAS NADA DE TEXTO, LETRAS NI PALABRAS DENTRO DE LA IMAGEN. CERO TEXTO. Solo debes dibujar los elementos visuales, íconos y la geometría. El texto lo añadiré yo por separado.
REGLA ESTRICTA 2: La imagen debe tener calidad 8k, renderizado hiperrealista (Unreal Engine 5 style), con luces de neón sutiles (cian, azul, verde, magenta, naranja) rebotando sobre los materiales de cristal y metal. El fondo DEBE ser transparente.`;
    
    navigator.clipboard.writeText(promptMaestro).then(() => {
        showToast("¡Prompt Copiado! Abriendo Gemini...");
        setTimeout(() => {
            window.open('https://gemini.google.com/app', '_blank');
        }, 1000);
    }).catch(err => {
        console.error('Error al copiar: ', err);
        alert("Error al copiar al portapapeles.");
    });
}

function showToast(mensaje) {
    const toast = document.getElementById("toast");
    const toastText = document.getElementById("toast-text");
    if(!toast) return;
    toastText.textContent = mensaje;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show"); 
    }, 3500);
}
