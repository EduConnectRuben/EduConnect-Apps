// EduConnectRuben - Lógica de Interfaz y Generación de Prompts

const mallaCurricular = {
    "Semestre 1: Nivel Técnico Básico - Ensamblaje y Mantenimiento Físico": {
        "Módulo 1: Construyendo Bestias: Ensamblaje de PCs Gamers": {
            "Tema 1: Componentes de PC (Placa Madre, CPU, RAM, GPU).": [
                "1.1 Identificación de Sockets y Generaciones de procesadores (Intel vs AMD).",
                "1.2 Tamaños y factores de forma de Placas Madre (ATX, Micro-ATX, Mini-ITX).",
                "1.3 Frecuencias, latencias y canales de la Memoria RAM (DDR4 / DDR5).",
                "1.4 Tarjetas gráficas (GPU): Arquitectura básica y conectores de alimentación de video.",
                "1.5 Almacenamiento: Diferencias de velocidad entre HDD, SSD SATA y NVMe M.2."
            ],
            "Tema 2: Compatibilidad y evitar Cuellos de Botella.": [
                "2.1 Uso de calculadoras de cuello de botella (Bottleneck) para equilibrar CPU y GPU.",
                "2.2 Cálculo del consumo total en Watts para la elección correcta de la Fuente de Poder.",
                "2.3 Diferencias entre fuentes genéricas y certificadas (80 Plus Blanco, Bronce, Oro).",
                "2.4 Verificación de dimensiones: Que la GPU y el disipador quepan en el gabinete.",
                "2.5 Selección de refrigeración adecuada (Disipador de aire vs Refrigeración líquida)."
            ],
            "Tema 3: Ensamblaje físico paso a paso y gestión de cables.": [
                "3.1 Instalación del procesador evitando pines doblados.",
                "3.2 Colocación de la memoria RAM y unidades M.2 en la placa fuera del chasis.",
                "3.3 Montaje de la placa base en el gabinete usando los separadores (Standoffs) correctos.",
                "3.4 Conexión del panel frontal (Botón de encendido, Reset, LEDs de lectura).",
                "3.5 Técnica de \"Cable Management\" (Gestión de cables) usando precintos por la tapa trasera."
            ],
            "Tema 4: Encendido, POST y configuración de BIOS/UEFI.": [
                "4.1 Qué es el POST (Power-On Self-Test) y lectura de luces de error (EZ Debug LED).",
                "4.2 Acceso a la interfaz UEFI y actualización segura (Flasheo de BIOS por USB).",
                "4.3 Activación de perfiles XMP/EXPO para que la RAM funcione a su máxima velocidad.",
                "4.4 Ajuste de las curvas de ventilación (Fan Control) para optimizar el silencio y el frío.",
                "4.5 Configuración del order de arranque (Boot Priority) para instalar el sistema."
            ]
        },
        "Módulo 2: Dejando Todo Como Nuevo: Mantenimiento Preventivo": {
            "Tema 1: Herramientas, cuidado antiestático y ambiental.": [
                "1.1 Uso obligatorio de la pulsera antiestática o guantes de nitrilo.",
                "1.2 Herramientas: Destornilladores magnéticos, paletas de apertura y sopladoras industriales.",
                "1.3 Aplicación de alcohol isopropílico para limpieza de contactos electrónicos.",
                "1.4 Organización de tornillos para no dañar componentes durante el armado.",
                "1.5 Protección eléctrica y climática: Uso de UPS, reguladores y gestión del polvo extremo."
            ],
            "Tema 2: Cambio de pasta térmica y disipadores.": [
                "2.1 Identificación de pasta térmica seca (Efecto \"cemento\").",
                "2.2 Limpieza del procesador sin derramar residuos en el socket.",
                "2.3 Técnicas de aplicación de la pasta térmica (Gota, X, Espátula).",
                "2.4 Conductividad térmica: Diferencia entre pastas económicas y de alto rendimiento.",
                "2.5 Cambio de almohadillas térmicas (Thermal Pads) en chips de video y VRMs."
            ],
            "Tema 3: Mantenimiento físico de Laptops (Desarme seguro).": [
                "3.1 Búsqueda de tornillos ocultos debajo de las gomas antideslizantes.",
                "3.2 Apertura del chasis usando púas de guitarra para no marcar los bordes.",
                "3.3 Desconexión inmediata de la batería interna antes de tocar la placa.",
                "3.4 Limpieza del ventilador tipo turbina y extracción de \"alfombras\" de polvo.",
                "3.5 Lubricación del eje del ventilador en caso de ruidos molestos."
            ],
            "Tema 4: Cuidado de periféricos (Teclados mecánicos, ratones).": [
                "4.1 Extracción de teclas (Keycaps) y limpieza profunda de teclados mecánicos.",
                "4.2 Sustitución de interruptores (Switches) dañados (Hot-swap vs Soldados).",
                "4.3 Limpieza del sensor óptico del ratón y cambio de patines (Glides o Skates).",
                "4.4 Desarme de auriculares Gamer y soldadura básica de cables trozados.",
                "4.5 Mantenimiento y limpieza de monitores usando productos no abrasivos."
            ]
        },
        "Módulo 3: El Alma de la Máquina: Sistemas Operativos y Rescate": {
            "Tema 1: Creación de memorias USB booteables.": [
                "1.1 Descarga de imágenes ISO originales desde los servidores de Microsoft.",
                "1.2 Diferencia de esquemas de partición: MBR (Equipos antiguos) vs GPT (Equipos modernos UEFI).",
                "1.3 Uso del software Rufus para formateos de un solo sistema.",
                "1.4 Configuración de Ventoy para tener múltiples instaladores en un solo pendrive.",
                "1.5 Inserción de herramientas de diagnóstico dentro del disco USB."
            ],
            "Tema 2: Entornos Live USB para rescate de datos.": [
                "2.1 Qué es un sistema operativo \"Live\" (Que se ejecuta desde la RAM sin instalarse).",
                "2.2 Preparación de un pendrive con Hiren's BootCD PE o Medicat.",
                "2.3 Ingreso de emergencia a un equipo de cliente con Windows dañado o pantalla azul.",
                "2.4 Respaldo de carpetas de Usuario (Documentos, Escritorio, Descargas) hacia un disco externo.",
                "2.5 Uso de herramientas de reseteo de contraseña de Windows cuando el cliente la olvida."
            ],
            "Tema 3: Formateo e instalación de Windows 10/11.": [
                "3.1 Eliminación y creación correcta de particiones durante el instalador.",
                "3.2 Instalación de Windows 11 evadiendo los requisitos de hardware (TPM 2.0 y Secure Boot).",
                "3.3 Diferencia y beneficios de crear una cuenta local vs una cuenta Microsoft ligada.",
                "3.4 Particionamiento inteligente: Disco Local C (Sistema) y Disco Local D (Datos).",
                "3.5 Personalización inicial del escritorio y desactivación de telemetría invasiva."
            ],
            "Tema 4: Instalación de Drivers y Antivirus.": [
                "4.1 Verificación del Administrador de Dispositivos (Signos de interrogación amarillos).",
                "4.2 Descarga de controladores oficiales desde la página del fabricante de la placa.",
                "4.3 Uso de herramientas como Snappy Driver Installer para casos sin red.",
                "4.4 Instalación de paquetes de software básico (Navegadores, Office, Lectores PDF, WinRAR).",
                "4.5 Configuración de Windows Defender y debate sobre el uso de antivirus de terceros."
            ]
        },
        "Módulo 4: Diagnóstico Básico de Fallas": {
            "Tema 1: ¿Por qué la PC no enciende?": [
                "1.1 Comprobación física de cables de poder y tomacorrientes (Descarte de Nivel 1).",
                "1.2 Prueba puente (Clip) en la Fuente de Poder para verificar si arranca sola.",
                "1.3 Limpieza de pines de la memoria RAM con borrador de goma (Solución al \"Giro de ventiladores sin pantalla\").",
                "1.4 Desconexión de unidades de disco duro dañadas que bloquean el encendido.",
                "1.5 Reseteo de BIOS (Clear CMOS) puenteando los pines de la placa."
            ],
            "Tema 2: Pruebas de estrés y medición de temperaturas.": [
                "2.1 Uso del software HWMonitor para vigilar sensores de temperatura en tiempo real.",
                "2.2 Ejecución de Cinebench para probar la estabilidad del procesador bajo carga máxima.",
                "2.3 Uso de FurMark para estresar la tarjeta de video e identificar apagones.",
                "2.4 Diagnóstico de memoria RAM con MemTest86 ante reinicios aleatorios.",
                "2.5 Comprobación de salud y sectores dañados de Discos Duros usando CrystalDiskInfo."
            ],
            "Tema 3: Pitidos de la placa madre y su significado.": [
                "3.1 Instalación del altavoz de diagnóstico (Buzzer/Speaker) en el panel frontal.",
                "3.2 Interpretación del pitido único corto (POST exitoso).",
                "3.3 Pitidos continuos o pitido largo y dos cortos: Problemas clásicos de RAM o Tarjeta de Video.",
                "3.4 Uso de tarjetas de diagnóstico POST conectadas por puerto PCI-Express.",
                "3.5 Elaboración de tabla de códigos según el fabricante de la BIOS (AMI, Award)."
            ],
            "Tema 4: Atención al cliente y recepción del equipo.": [
                "4.1 Generación de una ficha de ingreso con el número de serie de las partes críticas.",
                "4.2 Encendido obligatorio del equipo frente al cliente antes de aceptarlo.",
                "4.3 Escucha activa: Anotar textualmente los síntomas (\"Hace un ruido raro al jugar\").",
                "4.4 Redacción de notas de descargo para equipos que llegan apagados o severamente golpeados.",
                "4.5 Cálculo transparente del presupuesto previo a tocar el hardware."
            ]
        },
        "Módulo 5: Configuración de Entornos de Streaming": {
            "Tema 1: Software de transmisión (OBS Studio).": [
                "1.1 Configuración inicial de OBS.",
                "1.2 Creación de escenas y fuentes.",
                "1.3 Configuración de bitrate y resoluciones.",
                "1.4 Transiciones personalizadas.",
                "1.5 Grabación local vs Streaming."
            ],
            "Tema 2: Hardware para streaming.": [
                "2.1 Cámaras web y cámaras reflex (Capturadoras).",
                "2.2 Micrófonos (Condensador vs Dinámico).",
                "2.3 Interfaces de audio.",
                "2.4 Iluminación (Aros de luz, Paneles LED).",
                "2.5 Stream Decks y controladores."
            ],
            "Tema 3: Plataformas de transmisión.": [
                "3.1 Twitch (Paneles, Bots, Alertas).",
                "3.2 YouTube Gaming.",
                "3.3 Kick.",
                "3.4 Transmisión simultánea (Restream).",
                "3.5 Moderación de chat."
            ],
            "Tema 4: Optimización de red para streaming.": [
                "4.1 QoS en routers para priorizar OBS.",
                "4.2 Pruebas de velocidad de subida.",
                "4.3 Prevención de caídas de frames.",
                "4.4 Uso de VPNs en streaming.",
                "4.5 Diagnóstico de conexión en vivo."
            ]
        }
    },
    "Semestre 2: Nivel Técnico Auxiliar - Optimización, Redes y Soporte Avanzado": {
        "Módulo 1: Aceleración y Optimización del Sistema": {
            "Tema 1: Eliminación de malware y virus profundos.": [
                "1.1 Diferencia práctica entre un virus, un troyano y un programa potencialmente no deseado (PUP).",
                "1.2 Ingreso a Windows en Modo Seguro para evitar que el virus se ejecute al inicio.",
                "1.3 Limpieza con herramientas especializadas (Malwarebytes, AdwCleaner).",
                "1.4 Eliminación de extensiones maliciosas inyectadas en los navegadores web.",
                "1.5 Reparación de los archivos del sistema tras la infección usando el comando sfc /scannow."
            ],
            "Tema 2: Optimización de inicio y servicios de Windows.": [
                "2.1 Desactivación de programas pesados en la pestaña \"Inicio\" del Administrador de Tareas.",
                "2.2 Optimización de servicios en segundo plano usando msconfig.",
                "2.3 Ajuste de los efectos visuales para máximo rendimiento en PCs lentas.",
                "2.4 Desinstalación de Bloatware (Aplicaciones de fábrica inútiles) con scripts automatizados.",
                "2.5 Limpieza de archivos temporales (Prefetch, Temp, %Temp%) y visor de eventos."
            ],
            "Tema 3: Clonación de discos (Migración HDD a SSD).": [
                "3.1 Justificación de venta: Por qué un disco de estado sólido (SSD) revive una PC vieja.",
                "3.2 Conexión de ambas unidades mediante adaptadores SATA-USB o internamente.",
                "3.3 Uso de software de clonación (Macrium Reflect, AOMEI Backupper).",
                "3.4 Redimensionamiento automático de particiones al clonar de un disco grande a uno pequeño.",
                "3.5 Cambio de la unidad principal en la BIOS y prueba final de velocidad de arranque."
            ],
            "Tema 4: Recuperación de datos borrados accidentalmente.": [
                "4.1 Teoría de los sectores marcados como libres: Por qué los datos no desaparecen inmediatamente.",
                "4.2 La regla de oro: No instalar nada en el disco que se va a recuperar.",
                "4.3 Uso de software de recuperación lógico (Recuva, EaseUS Data Recovery).",
                "4.4 Búsqueda profunda (Deep Scan) por firmas de archivos (Fotos JPG, Docs).",
                "4.5 Exportación de los datos rescatados a un disco externo diferente."
            ]
        },
        "Módulo 2: Conexión Básica de Redes de Oficina": {
            "Tema 1: Ponchado de cables de red y rosetas.": [
                "1.1 Herramientas: Crimpadora, Pelacables, Impactadora (Punch-down tool).",
                "1.2 Código de colores normativo T568B para cables de red UTP.",
                "1.3 Crimpeado de conectores RJ45 (Cable macho).",
                "1.4 Impacto correcto de los hilos en una roseta de pared o Patch Panel (Hembra).",
                "1.5 Pruebas de par a par con el tester o certificador de cable básico."
            ],
            "Tema 2: Configuración de IP fija en Windows.": [
                "2.1 Ingreso a las opciones del adaptador de red (ncpa.cpl).",
                "2.2 Asignación manual de la Dirección IPv4, Máscara de subred y Puerta de Enlace.",
                "2.3 Diferencia entre usar IP fija (Para impresoras/servidores) y DHCP (Para laptops/clientes).",
                "2.4 Asignación de servidores DNS comerciales (Google, Cloudflare) para navegación rápida.",
                "2.5 Solución al conflicto de direcciones IP duplicadas en la oficina."
            ],
            "Tema 3: Compartir carpetas e impresoras en red local.": [
                "3.1 Activación de la detección de redes y el uso compartido de archivos en Windows.",
                "3.2 Creación de una carpeta compartida y asignación de permisos de Lectura/Escritura.",
                "3.3 Protección de las carpetas mediante contraseñas de red.",
                "3.4 Mapeo de unidades de red para que aparezcan como un \"Disco Z:\" en la PC del cliente.",
                "3.5 Configuración de una impresora por USB en la máquina Host y compartición por Wi-Fi."
            ],
            "Tema 4: Solución de problemas: 'Sin acceso a internet'.": [
                "4.1 Lectura del ícono de red: Triángulo amarillo (Conectado, sin internet) vs Globo terráqueo (Sin conexión).",
                "4.2 Uso de comandos de consola: ipconfig /release y ipconfig /renew.",
                "4.3 Ping hacia el router (Gateway) vs Ping hacia el internet (8.8.8.8) para aislar la falla.",
                "4.4 Restablecimiento completo de los adaptadores de red de Windows.",
                "4.5 Diagnóstico físico: Cambio de puertos en el Switch o verificación del cable UTP."
            ]
        },
        "Módulo 3: Técnico a Distancia: Soporte Remoto": {
            "Tema 1: Uso de herramientas comerciales (AnyDesk, TeamViewer).": [
                "1.1 Descarga e indicación al cliente de cómo proporcionar su ID y contraseña.",
                "1.2 Elevación de privilegios de administrador para poder instalar programas remotamente.",
                "1.3 Uso de la transferencia de archivos bidireccional.",
                "1.4 Configuración de accesos desatendidos (Con contraseña permanente).",
                "1.5 Problemática y bloqueos por \"Uso comercial detectado\"."
            ],
            "Tema 2: Alternativas gratuitas sin límite de licencia.": [
                "2.1 Instalación y configuración de RustDesk (Código abierto y libre de bloqueos).",
                "2.2 Configuración del Escritorio Remoto de Chrome (Chrome Remote Desktop) ligado al correo del usuario.",
                "2.3 Habilitación del Escritorio Remoto nativo de Windows (RDP) para conexiones locales.",
                "2.4 Explicación al cliente de la seguridad y el cierre de sesión remoto.",
                "2.5 Optimización de la calidad de imagen vs velocidad en conexiones de internet lentas."
            ],
            "Tema 3: Gestión de tickets y cobro por soporte remoto.": [
                "3.1 Manejo de sistemas de soporte por WhatsApp Business o formularios web.",
                "3.2 Tiempo máximo de respuesta y resolución en el primer contacto.",
                "3.3 Estructuración del cobro por hora o fracción para soporte a distancia.",
                "3.4 Uso de enlaces de pago rápidos, códigos QR o transferencias bancarias locales previas.",
                "3.5 Redacción de informes de solución por escrito tras finalizar la sesión."
            ],
            "Tema 4: Configuración de correos corporativos (Outlook).": [
                "4.1 Diferencia de puertos y protocolos: IMAP (Sincronizado) vs POP3 (Descarga local).",
                "4.2 Configuración de la cuenta en Microsoft Outlook y servidores SMTP.",
                "4.3 Exportación y respaldo de la bandeja de correos en archivos de datos (.PST).",
                "4.4 Solución al error de bloqueo de envío por buzón lleno.",
                "4.5 Inserción de firmas corporativas con formato HTML."
            ]
        },
        "Módulo 4: Proyecto General de Optimización y Mantenimiento": {
            "Tema 1: Estructura de presupuestos de mantenimiento.": [
                "1.1 Análisis de costos de traslados, insumos (pasta, alcohol) y horas-hombre.",
                "1.2 Diferenciación de tarifas: Diagnóstico, Mantenimiento Preventivo y Mantenimiento Correctivo.",
                "1.3 Redacción formal en PDF con logotipo del taller.",
                "1.4 Claridad en la validez del presupuesto (Ej. \"Válido por 15 días\").",
                "1.5 Políticas de repuestos: Obligar al pago adelantado del 50% al pedir piezas caras."
            ],
            "Tema 2: Contratos de soporte para pequeñas empresas.": [
                "2.1 Beneficios de vender \"Tranquilidad mensual\" frente a reparaciones esporádicas.",
                "2.2 Definición del alcance del contrato: Número de horas mensuales y SLA (Acuerdo de nivel de servicio).",
                "2.3 Exclusiones claras (Ej: \"La compra de hardware dañado se cobra por separado\").",
                "2.4 Firma de contratos de confidencialidad para proteger la data comercial de la empresa.",
                "2.5 Entregables mensuales: El reporte de tareas ejecutadas en el mes."
            ],
            "Tema 3: Caso Práctico: Diagnóstico, rescate de datos y formateo.": [
                "3.1 Recepción de una PC infectada de virus y que no arranca.",
                "3.2 Inicio desde Live USB para rescate de la data del cliente al disco externo.",
                "3.3 Formateo y reinstalación de Windows y drivers en blanco.",
                "3.4 Reintegración de la información rescatada a la partición de documentos.",
                "3.5 Limpieza física básica como cortesía del servicio."
            ],
            "Tema 4: Entrega del equipo y recomendaciones al cliente.": [
                "4.1 Encendido demostrativo demostrando la nueva velocidad adquirida.",
                "4.2 Explicación pedagógica de cómo cuidar la batería (en laptops) y la ventilación.",
                "4.3 Recomendaciones contra el phishing (evitar abrir links falsos).",
                "4.4 Entrega de la boleta de servicio, garantía y facturación.",
                "4.5 Oferta cruzada: Venta de licencias de antivirus, teclados o mantenimientos a futuro."
            ]
        },
        "Módulo 5: Herramientas de Productividad y Ofimática": {
            "Tema 1: Microsoft Office Avanzado.": [
                "1.1 Macros en Excel.",
                "1.2 Tablas dinámicas y gráficos.",
                "1.3 Combinación de correspondencia en Word.",
                "1.4 Presentaciones interactivas en PowerPoint.",
                "1.5 Integración entre aplicaciones."
            ],
            "Tema 2: Google Workspace.": [
                "2.1 Gestión de Google Drive.",
                "2.2 Colaboración en tiempo real en Docs/Sheets.",
                "2.3 Formularios de Google.",
                "2.4 Configuración de Google Meet.",
                "2.5 Uso de Google Keep y Calendar."
            ],
            "Tema 3: Herramientas PDF.": [
                "3.1 Edición de PDFs.",
                "3.2 Combinar y dividir documentos.",
                "3.3 Firmas digitales.",
                "3.4 Conversión de formatos.",
                "3.5 Protección con contraseñas."
            ],
            "Tema 4: Automatización de tareas de oficina.": [
                "4.1 Uso de Zapier básico.",
                "4.2 Reglas de correo electrónico en Outlook/Gmail.",
                "4.3 Atajos de teclado productivos.",
                "4.4 Gestores de portapapeles.",
                "4.5 Organización de archivos y carpetas."
            ]
        }
    },
    "Semestre 3: Nivel Técnico Medio I - Reparación Física de Laptops": {
        "Módulo 1: Rescate Físico: Plásticos y Pantallas": {
            "Tema 1: Reparación de bisagras (Resina y técnicas locales).": [
                "1.1 Diagnóstico de postes de tornillos arrancados por la presión de apertura.",
                "1.2 Aflojamiento de la tensión mecánica de las bisagras metálicas con alicate y aceite.",
                "1.3 Reconstrucción de anclajes usando resina epóxica líquida.",
                "1.4 Técnica rápida de cianoacrilato (Súper glue) y bicarbonato para crear plásticos sólidos de alta resistencia.",
                "1.5 Limado, perforación y colocación de tuercas de bronce en el nuevo plástico."
            ],
            "Tema 2: Cambio de pantallas de laptops.": [
                "2.1 Desarme seguro de marcos frontales (Bezel) unidos por cinta doble cara.",
                "2.2 Identificación técnica de la pantalla mediante el número de parte (Part Number).",
                "2.3 Conteo de pines del flex de video eDP (30 Pines clásicos vs 40 Pines Touch/Alta resolución).",
                "2.4 Retiro absoluto de la batería antes de conectar el flex para no quemar el fusible de backlight.",
                "2.5 Fijación de la pantalla nueva y reensamble a presión cuidando no ejercer fuerza en el cristal."
            ],
            "Tema 3: Cambio de teclados remachados.": [
                "3.1 Diferencia entre teclados atornillados externos y teclados fundidos al reposamuñecas (Palmrest).",
                "3.2 Desensamble total de la laptop (Retirar la Motherboard por completo).",
                "3.3 Uso del cautín plano o temperatura para derretir y romper los remaches plásticos.",
                "3.4 Instalación del teclado nuevo sin doblarlo.",
                "3.5 Reconstrucción de los puntos de anclaje derritiendo nuevamente el plástico o usando pegamento."
            ],
            "Tema 4: Cambio de flex de video y solución a pantallas blancas.": [
                "4.1 Diagnóstico visual: La imagen vuelve al mover la tapa hacia adelante y hacia atrás.",
                "4.2 Diferencia entre falla del chip de video y falla del cable flex (Falso contacto).",
                "4.3 Pantalla blanca o pérdida de colores (Líneas de datos trozadas en la bisagra).",
                "4.4 Ruteo exacto del cable flex original por las canaletas para evitar que vuelva a cortarse.",
                "4.5 Aseguramiento de la conexión con cinta acetato en el conector de la pantalla."
            ]
        },
        "Módulo 2: Electrónica Básica para Laptops": {
            "Tema 1: Uso del multímetro en placas base.": [
                "1.1 Entendimiento de las escalas de Voltaje Continuo, Resistencia y Continuidad de forma aplicada.",
                "1.2 Punta negra a chasis (GND) y medición de voltajes de espera (Always On - 3.3V y 5V).",
                "1.3 Búsqueda de cortocircuitos midiendo la impedancia de las bobinas grandes contra tierra.",
                "1.4 Precaución para no cortocircuitar dos pines cercanos con las puntas de medición.",
                "1.5 Diagnóstico rápido del estado del fusible principal de entrada (19V)."
            ],
            "Tema 2: Identificación de componentes SMD.": [
                "2.1 Reconocimiento de resistencias superficiales (SMD) y lectura de su código numérico.",
                "2.2 Identificación de condensadores cerámicos polarizados y no polarizados.",
                "2.3 Qué es una Bobina (Inductor) y su relación con los circuitos conversores (Buck Converters).",
                "2.4 Reconocimiento físico de Mosfets (Transistores interruptores de 8 pines) de entrada de corriente.",
                "2.5 Detección visual de componentes carbonizados, perforados o sulfatados."
            ],
            "Tema 3: Diagnóstico del pin de carga soldado a la placa.": [
                "3.1 Comprobación del voltaje de salida del cargador original del cliente.",
                "3.2 Pines de carga con cable vs Pines soldados directamente (Centro de carga).",
                "3.3 Desoldado del centro de carga utilizando la estación de calor o soldadura por arrastre.",
                "3.4 Limpieza de los orificios pasantes (Thru-holes) usando malla desoldadora.",
                "3.5 Resoldadura del pin nuevo asegurando soldadura que atraviese la placa por ambos lados."
            ],
            "Tema 4: Detección de cortos básicos con fuente de poder.": [
                "4.1 Soldadura de un cable adaptador a la primera línea de entrada (Vin) tras el pin de carga.",
                "4.2 Ajuste de la fuente de alimentación a 19V y amperaje de seguridad bajo.",
                "4.3 Consumo estático alto al conectar: Evidencia absoluta de un cortocircuito.",
                "4.4 Palpado táctil y uso de alcohol/resina para detectar el Mosfet o condensador que calienta.",
                "4.5 Extracción del componente en corto y verificación de recuperación de voltaje en placa."
            ]
        },
        "Módulo 3: Fallas Comunes: BIOS y Encendido": {
            "Tema 1: Laptop 'enciende pero no da video'.": [
                "1.1 Verificación del giro del ventilador y el LED de encendido iluminado.",
                "1.2 Conexión de un monitor externo por puerto HDMI (Descartar flex o pantalla dañada).",
                "1.3 Realización del descarte básico: Limpieza e intercambio de bancos de memoria RAM.",
                "1.4 Diagnóstico de fallos por software de la BIOS corrupto.",
                "1.5 Observación del consumo cíclico en la fuente de alimentación para confirmar fallo de procesamiento."
            ],
            "Tema 2: Uso del programador CH341A para flashear BIOS.": [
                "2.1 Extracción y lectura de seguridad (Backup) del chip de BIOS existente.",
                "2.2 Uso de la pinza SOIC8 para lectura en placa vs desoldado directo del chip para mejor lectura.",
                "2.3 Instalación de drivers del programador CH341A y software AsProgrammer o NeoProgrammer.",
                "2.4 Descarga del archivo \".bin\" (Dump de BIOS original) de foros técnicos especializados.",
                "2.5 Borrado del chip, escritura del archivo sano, y comprobación final (Verify)."
            ],
            "Tema 3: Reemplazo de pila CMOS y errores de arranque.": [
                "3.1 Lectura en pantalla del fallo \"CMOS Checksum Error\" o desconfiguración de Fecha y Hora.",
                "3.2 El problema del bloqueo de navegación web por la fecha atrasada de la máquina.",
                "3.3 Medición del voltaje de la batería CR2032 (Menos de 2.8V exige cambio).",
                "3.4 Adaptación de baterías CMOS envueltas en cinta termorretráctil con conector.",
                "3.5 Ingreso a la BIOS para configurar fecha, hora y modo de booteo (UEFI) por última vez."
            ],
            "Tema 4: Lavado químico de placas con derrame de líquidos.": [
                "4.1 Regla de oro: No conectar nunca a la energía eléctrica ni presionar encender.",
                "4.2 Retiro de la batería interna, batería CMOS y plásticos/cintas protectoras.",
                "4.3 Inmersión o cepillado intensivo de la placa base con alcohol isopropílico.",
                "4.4 Secado exhaustivo con aire comprimido o estación de calor en bajo nivel.",
                "4.5 Búsqueda de pistas consumidas por la electrólisis e intentos de puenteo de datos."
            ]
        },
        "Módulo 4: Elaboración de Informes Técnicos": {
            "Tema 1: Redacción de informes para seguros o empresas.": [
                "1.1 Estructura de un dictamen técnico oficial: Datos del cliente, Serie del equipo, y Daños.",
                "1.2 Inclusión de evidencia fotográfica del componente dañado (Ej. Quemadura de un rayo).",
                "1.3 Conclusión definitiva sobre la viabilidad o no de la reparación.",
                "1.4 Firma sellada del taller para validación ante instituciones aseguradoras.",
                "1.5 Cobro por el servicio de peritaje técnico y elaboración de la carta."
            ],
            "Tema 2: Cómo decir 'no tiene arreglo' y cobrar el diagnóstico.": [
                "2.1 Valorización del tiempo técnico invertido en la búsqueda de la falla.",
                "2.2 Comunicación clara y honesta del fallo catastrófico (Procesador principal calcinado o placa partida).",
                "2.3 Manejo de la reacción del cliente frente a la pérdida de su equipo.",
                "2.4 Oferta de rescate de disco duro para mitigar el dolor de la pérdida del hardware.",
                "2.5 Reensamble completo y entrega del equipo muerto de manera digna y ordenada."
            ],
            "Tema 3: Proyección de repuestos desde AliExpress/Amazon.": [
                "3.1 Identificación del número de parte de placas base completas (Motherboards) para reemplazo total.",
                "3.2 Cálculo de tiempos de importación y gestión de aduanas/impuestos en tu país.",
                "3.3 Comunicación de riesgos de garantía internacional al cliente (Cobro del repuesto más mano de obra).",
                "3.4 Comprobación del historial del vendedor y reputación antes de comprar.",
                "3.5 Cotización final y cobro del 100% del repuesto por adelantado."
            ],
            "Tema 4: Proyecto Práctico: Reparación física de una laptop.": [
                "4.1 El instructor entrega una laptop con fallas combinadas (Bisagra rota y no arranca el OS).",
                "4.2 El estudiante desarma, reconstruye plásticos y aplica pasta térmica de mantenimiento.",
                "4.3 Medición del pin de carga y descarte de electrónica básica.",
                "4.4 Formateo y corrección lógica.",
                "4.5 Entrega de informe final detallado y cotización de la reparación real."
            ]
        },
        "Módulo 5: Virtualización y Servidores Básicos": {
            "Tema 1: Conceptos de virtualización.": [
                "1.1 Máquinas virtuales vs Contenedores.",
                "1.2 Hypervisores Tipo 1 vs Tipo 2.",
                "1.3 Ventajas de virtualizar.",
                "1.4 Requisitos de hardware.",
                "1.5 Activación en BIOS/UEFI."
            ],
            "Tema 2: Uso de VirtualBox y VMware.": [
                "2.1 Creación de una VM.",
                "2.2 Asignación de recursos (CPU, RAM).",
                "2.3 Redes virtuales (NAT, Bridged).",
                "2.4 Snapshots (Instantáneas).",
                "2.5 Instalación de Guest Additions/Tools."
            ],
            "Tema 3: Servidores NAS caseros.": [
                "3.1 ¿Qué es un NAS?",
                "3.2 Hardware para NAS.",
                "3.3 Sistemas operativos (TrueNAS, Unraid).",
                "3.4 Configuración de RAID (0, 1, 5).",
                "3.5 Compartición de archivos por red (SMB)."
            ],
            "Tema 4: Servidores de juegos.": [
                "4.1 Creación de servidor de Minecraft.",
                "4.2 Apertura de puertos (Port Forwarding).",
                "4.3 Servidores dedicados vs VPS.",
                "4.4 Gestión de mods y plugins.",
                "4.5 Seguridad contra ataques DDoS."
            ]
        }
    },
    "Semestre 4: Nivel Técnico Medio II - Administrador IT para Oficinas y Colegios": {
        "Módulo 1: Servidores Locales (Windows Server Básico)": {
            "Tema 1: Transformando una PC antigua en un Servidor.": [
                "1.1 Beneficio de centralizar datos en lugar de tenerlos en memorias USB rodando por la oficina.",
                "1.2 Instalación de un sistema base estable o Windows Server sin interfaz gráfica pesada.",
                "1.3 Asignación obligatoria de IP Fija al servidor y ubicación en un lugar fresco y seguro.",
                "1.4 Instalación de discos duros de gran capacidad para almacenamiento.",
                "1.5 Configuración de energía y protección: Uso de UPS y encendido automático tras corte de luz."
            ],
            "Tema 2: Creación de usuarios y permisos.": [
                "2.1 Configuración de Active Directory (Básico) o Gestión de Usuarios y Grupos de Windows.",
                "2.2 Diseño del árbol de carpetas compartidas.",
                "2.3 Asignación de permisos de seguridad estricta: RRHH no puede ver Finanzas.",
                "2.4 Evitar el problema de que los usuarios eliminen archivos (Permisos de lectura/escritura vs eliminación).",
                "2.5 Configuración del acceso mediante mapeo en los escritorios de cada empleado."
            ],
            "Tema 3: Compartición de impresoras en red centralizada.": [
                "3.1 Instalación de los controladores base en el equipo servidor.",
                "3.2 Compartición de la impresora pesada a la red (Print Server).",
                "3.3 Automatización de instalación para los clientes (Despliegue del controlador).",
                "3.4 Manejo de las colas de impresión cuando se traban documentos (Reinicio del Print Spooler).",
                "3.5 Auditoría básica de consumo de papel."
            ],
            "Tema 4: Monitoreo de actividad de usuarios.": [
                "4.1 Por qué la empresa necesita medir qué hacen los equipos.",
                "4.2 Uso del Visor de Eventos para verificar arranques, apagados y fallos del sistema.",
                "4.3 Monitoreo remoto del uso de ancho de banda.",
                "4.4 Instalación de herramientas de control para bloqueo de pantallas (En colegios o cibercafés).",
                "4.5 Políticas éticas y notificación al empleado sobre el uso de recursos de la empresa."
            ]
        },
        "Módulo 2: El Salvavidas IT: Backups Automáticos": {
            "Tema 1: El peligro del Ransomware.": [
                "1.1 Qué es el secuestro de datos por cifrado (Ransomware) y cómo infecta correos falsos.",
                "1.2 Comprobación del daño: Archivos que cambian de extensión y notas de rescate.",
                "1.3 La regla infalible: Nunca pagar el rescate de datos.",
                "1.4 Aislamiento inmediato del equipo infectado de la red local para salvar a los demás.",
                "1.5 Importancia de la desconexión física de los discos de respaldo (Air-Gap)."
            ],
            "Tema 2: Configuración de respaldos automáticos diarios.": [
                "2.1 Diferencia entre un respaldo manual (Copiar/Pegar) y un respaldo automatizado y programado.",
                "2.2 Instalación y configuración de herramientas gratuitas/comerciales (Cobian Backup / Acronis).",
                "2.3 Backups Completos, Incrementales y Diferenciales (Optimización de espacio).",
                "2.4 Programación de tareas de respaldo en horario nocturno.",
                "2.5 Lectura de los archivos de registro (Logs) para confirmar que el respaldo se hizo sin errores."
            ],
            "Tema 3: Uso de discos externos y Nubes empresariales.": [
                "3.1 Rotación física de discos duros externos (Backup 1 se guarda, Backup 2 entra en función).",
                "3.2 Configuración de clientes de sincronización como Google Drive Desktop o OneDrive.",
                "3.3 Exclusión de archivos pesados y videos innecesarios para optimizar el almacenamiento en la nube.",
                "3.4 Encriptación del disco de respaldo por si el disco se roba o extravía (BitLocker).",
                "3.5 Control de versiones en la nube para recuperar un archivo modificado por error."
            ],
            "Tema 4: Simulacro: Restaurar oficina completa tras un ataque.": [
                "4.1 Planeación del escenario de desastre y cálculo de los tiempos de inactividad de la oficina.",
                "4.2 Limpieza y formateo absoluto de los discos comprometidos.",
                "4.3 Instalación limpia del sistema operativo y las aplicaciones clave.",
                "4.4 Búsqueda y extracción de las copias de seguridad de la fecha anterior al desastre.",
                "4.5 Validación con el cliente y entrega final del sistema operativo restituido."
            ]
        },
        "Módulo 3: Sistemas de Laboratorios y Despliegues por Red": {
            "Tema 1: Congeladores de disco (DeepFreeze).": [
                "1.1 Problema de los colegios/cibercafés: Usuarios instalando juegos y virus.",
                "1.2 Instalación y configuración de la contraseña maestra de DeepFreeze o Shadow Defender.",
                "1.3 Congelación del Disco C (Sistema) dejando descongelado el Disco D (Guardado de estudiantes).",
                "1.4 Estado (Thawed) Descongelado para la actualización de Windows y programas.",
                "1.5 Eliminación de problemas simplemente reiniciando la máquina."
            ],
            "Tema 2: Clonación masiva por Red (PXE Boot).": [
                "2.1 El problema de formatear 30 PCs con pendrives de una por una.",
                "2.2 Configuración de un servidor de implementación basado en red (AOMEI PXE Boot o Serva).",
                "2.3 Modificación del orden de arranque de las computadoras esclavas para buscar la red (Boot from LAN).",
                "2.4 Inyección (Multicast) de la imagen de Windows a múltiples computadoras simultáneamente por el cable de red.",
                "2.5 Renombramiento automático y unión del equipo al grupo de trabajo tras la clonación."
            ],
            "Tema 3: Restricción masiva de USBs y descargas.": [
                "3.1 Evitar robos de información o ingreso de virus usando Políticas de Grupo Locales (gpedit.msc).",
                "3.2 Deshabilitación de los puertos de almacenamiento USB (Manteniendo teclados y ratones funcionales).",
                "3.3 Configuración de DNS familiares y educativos en los routers para bloquear webs de adultos y virus.",
                "3.4 Restricción en los permisos de instalación de ejecutables .exe (Solo el Administrador).",
                "3.5 Retiro de la línea de comandos CMD y Regedit al usuario normal."
            ],
            "Tema 4: Mantenimiento programado sin interrumpir trabajo.": [
                "4.1 Creación de scripts de mantenimiento básicos (.bat) para limpieza programada nocturna.",
                "4.2 Desfragmentación de discos mecánicos en días no laborables.",
                "4.3 Programación remota de reinicios automáticos para aplicar parches de seguridad.",
                "4.4 Planificación del mantenimiento de las sopladoras e infraestructura física en vacaciones del colegio.",
                "4.5 Gestión visual de inventarios de los equipos activos."
            ]
        },
        "Módulo 4: Contratos Corporativos y Métricas (Outsourcing IT)": {
            "Tema 1: Cómo venderle tus servicios técnicos a una empresa.": [
                "1.1 Identificación del \"dolor\" del gerente: Equipos lentos, secretarias sin red, pérdida de dinero por inactividad.",
                "1.2 Preparación de un portafolio de servicios impreso y digital.",
                "1.3 Realización de una auditoría técnica inicial \"Gratuita\" para revelar las carencias del lugar.",
                "1.4 Elaboración de la propuesta económica y justificación de costos.",
                "1.5 Presentación formal como aliado tecnológico y no como \"el que arregla las compus\"."
            ],
            "Tema 2: Cobro mensual por 'Iguala' (Mantenimiento fijo).": [
                "2.1 Diseño del contrato Póliza: Pago fijo mensual a cambio de un número de visitas pactado.",
                "2.2 Cálculo del precio por PC conectada a la red (A mayor cantidad, ajuste de tarifa).",
                "2.3 Tiempos de respuesta (SLA) para fallas críticas (Servidor caído) vs fallas bajas (Impresora de un asistente).",
                "2.4 Qué incluye (Soporte remoto, limpieza física) y qué se cobra aparte (Cambio de discos quemados).",
                "2.5 Estrategias para mantener la relación comercial a largo plazo mes a mes."
            ],
            "Tema 3: Elaboración de contratos de confidencialidad.": [
                "3.1 Qué es un NDA (Acuerdo de no divulgación) y por qué el cliente de oficina lo exige.",
                "3.2 Penalizaciones legales por sustracción o venta de la base de datos de la empresa.",
                "3.3 Manejo de credenciales y contraseñas maestras del router y del servidor de la oficina.",
                "3.4 Destrucción segura y certificada de discos duros desechados.",
                "3.5 Separación absoluta entre la información privada del cliente y los equipos personales del técnico."
            ],
            "Tema 4: KPI y Métricas de soporte corporativo.": [
                "4.1 Tiempo de primera respuesta al cliente.",
                "4.2 Tiempo medio de resolución del problema.",
                "4.3 Tasa de resolución en primera llamada.",
                "4.4 Encuestas de satisfacción (CSAT).",
                "4.5 Análisis de tendencias de fallas para reportes de SLA corporativo."
            ]
        },
        "Módulo 5: ITIL, Mesa de Ayuda y Proyecto Final": {
            "Tema 1: Fundamentos de ITIL.": [
                "1.1 ¿Qué es ITIL?",
                "1.2 Gestión de incidentes vs problemas.",
                "1.3 Ciclo de vida del servicio.",
                "1.4 Acuerdos de nivel de servicio (SLA).",
                "1.5 Catálogo de servicios."
            ],
            "Tema 2: Sistemas de Tickets.": [
                "2.1 Uso de GLPI o osTicket.",
                "2.2 Creación y asignación de tickets.",
                "2.3 Priorización (Urgencia vs Impacto).",
                "2.4 Escalamiento a nivel 2/3.",
                "2.5 Cierre y documentación."
            ],
            "Tema 3: Comunicación con el usuario.": [
                "3.1 Empatía y escucha activa.",
                "3.2 Traducción de términos técnicos.",
                "3.3 Manejo de usuarios difíciles.",
                "3.4 Redacción de correos claros.",
                "3.5 Manuales de usuario rápido."
            ],
            "Tema 4: Proyecto Final Integrador: Simulación de Venta y HelpDesk.": [
                "4.1 Rol de la entrevista de negocios: Estudiante (Técnico) frente a Instructor (Gerente).",
                "4.2 Defensa de la auditoría técnica propuesta por el estudiante.",
                "4.3 Resolución de objeciones comerciales (\"Tu competidor cobra más barato el mantenimiento\").",
                "4.4 Registro y gestión del servicio simulado mediante el sistema de tickets (GLPI/osTicket).",
                "4.5 Evaluación general de las competencias técnicas, ofimáticas y gerenciales aprendidas en la carrera."
            ]
        }
    }
};

let selectNivel, selectModulo, selectTema;

document.addEventListener('DOMContentLoaded', () => {
    selectNivel = document.getElementById('nivel');
    selectModulo = document.getElementById('modulo');
    selectTema = document.getElementById('tema');

    // Llenar Niveles Inmediatamente
    Object.keys(mallaCurricular).forEach(nivel => {
        let option = document.createElement('option');
        option.value = nivel;
        option.textContent = nivel;
        selectNivel.appendChild(option);
    });

    // Evento: Seleccionar Nivel -> Llenar Módulo
    selectNivel.addEventListener('change', function() {
        selectModulo.innerHTML = '<option value="">-- Elige un Módulo --</option>';
        selectTema.innerHTML = '<option value="">-- Primero elige un Módulo --</option>';
        
        selectModulo.disabled = true;
        selectTema.disabled = true;

        if (this.value) {
            selectModulo.disabled = false;
            Object.keys(mallaCurricular[this.value]).forEach(modulo => {
                let option = document.createElement('option');
                option.value = modulo;
                option.textContent = modulo;
                selectModulo.appendChild(option);
            });
        }
    });

    // Evento: Seleccionar Módulo -> Llenar Tema
    selectModulo.addEventListener('change', function() {
        selectTema.innerHTML = '<option value="">-- Elige un Tema --</option>';
        selectTema.disabled = true;

        if (this.value) {
            selectTema.disabled = false;
            const nivel = selectNivel.value;
            Object.keys(mallaCurricular[nivel][this.value]).forEach(tema => {
                let option = document.createElement('option');
                option.value = tema;
                option.textContent = tema; // Mostrar corto
                selectTema.appendChild(option);
            });
        }
    });
});

function ejecutarPromptPlanificacion(promptTexto) {
    navigator.clipboard.writeText(promptTexto).then(() => {
        showToast("¡Prompt copiado! Abriendo Gemini...");
        setTimeout(() => {
            window.open('https://gemini.google.com/app', '_blank');
        }, 1200);
    }).catch(err => {
        alert('Hubo un error al intentar copiar el prompt. Asegúrate de dar permisos al navegador.');
        console.error(err);
    });
}

function obtenerTratoProfesional(nivelStr) {
    // Extraer el número del semestre de la cadena del Nivel (ej. "Semestre 1" o asume 1 si dice Básico)
    let semestre = 1;
    const match = nivelStr.match(/Semestre\s*(\d+)/i);
    if (match) {
        semestre = parseInt(match[1]);
    } else {
        if (nivelStr.toLowerCase().includes("auxiliar")) semestre = 2;
        else if (nivelStr.toLowerCase().includes("medio i")) semestre = 3;
        else if (nivelStr.toLowerCase().includes("medio ii")) semestre = 4;
        else if (nivelStr.toLowerCase().includes("superior i")) semestre = 5;
        else if (nivelStr.toLowerCase().includes("superior ii")) semestre = 6;
        else if (nivelStr.toLowerCase().includes("ingenier")) semestre = 7;
    }

    let trato = "Técnico";
    let enfoque = "Fundamentos y manejo de herramientas";

    if (semestre === 1) {
        trato = "Técnico Básico";
        enfoque = "Fundamentos, introducción a la disciplina y manejo de herramientas básicas";
    } else if (semestre === 2) {
        trato = "Técnico Auxiliar";
        enfoque = "Asistencia técnica, soporte operativo y ejecución de rutinas";
    } else if (semestre === 3) {
        trato = "Técnico Medio (en formación)";
        enfoque = "Resolución de problemas intermedios y trabajo autónomo";
    } else if (semestre === 4) {
        trato = "Técnico Medio";
        enfoque = "Consolidación operativa y ejecución de proyectos de baja/mediana complejidad";
    } else if (semestre === 5) {
        trato = "Técnico Superior (en formación)";
        enfoque = "Diseño de soluciones, análisis de sistemas y administración de recursos";
    } else if (semestre === 6) {
        trato = "Técnico Superior";
        enfoque = "Especialización tecnológica, supervisión de equipos y arquitectura de soluciones";
    } else if (semestre >= 7 && semestre <= 10) {
        trato = "Ingeniero o Licenciado";
        if (semestre === 7) enfoque = "Matemáticas avanzadas, modelado científico y metodologías de investigación";
        if (semestre === 8) enfoque = "Formulación de proyectos, arquitectura empresarial y dirección de equipos";
        if (semestre === 9) enfoque = "Innovación tecnológica, alta especialización e investigación pura";
        if (semestre === 10) enfoque = "Prácticas industriales, defensa de grado y gerencia tecnológica";
    }

    return { trato, enfoque };
}

function generarPrompt(plataforma) {
    const nivel = selectNivel.value;
    const modulo = selectModulo.value;
    const tema = selectTema.value; 

    if (!nivel || !modulo || !tema) {
        alert("⚠️ Por favor, selecciona todas las opciones antes de generar.");
        return;
    }

    const subtitulosArr = mallaCurricular[nivel][modulo][tema];
    const subtitulosTexto = subtitulosArr ? subtitulosArr.map(s => `- ${s}`).join('\n') : '';

    const temaTitulo = tema.toUpperCase();
    const perfilProfesional = obtenerTratoProfesional(nivel);
    
    const promptMaestro = `${temaTitulo}
Actúa como un experto desarrollador de currículas técnicas y redactor académico senior. Tu tarea es generar un documento de estudio exhaustivo, didáctico y visualmente excelente sobre este tema para el módulo de ${modulo} dirigido a estudiantes de Sistemas Informáticos (Nivel: ${perfilProfesional.trato}) de la Academia Educativa EduConectRuben.

CONTEXTO INSTITUCIONAL OBLIGATORIO:
Todos los ejemplos, problemas, laboratorios y casos de uso prácticos DEBEN estar enfocados y adaptados a la realidad de la Academia Educativa EduConectRuben. Utiliza como escenarios de los problemas situaciones reales de emprendimientos tecnológicos, desarrollo de software moderno, startups y digitalización de negocios locales que resuenen con la visión innovadora de la Academia Educativa EduConectRuben.
• PROHIBICIÓN DE LUGARES ESPECÍFICOS (REGLA DE UNIVERSALIDAD): Cuando crees ejemplos o casos prácticos de negocios locales, NUNCA inventes nombres propios de calles, tiendas, canchas, ciudades o apellidos específicos. Usa siempre escenarios genéricos y universales (por ejemplo: 'una farmacia de barrio', 'una clínica dental', 'un supermercado local') para que CUALQUIER PERSONA, sin importar en qué país o ciudad viva, entienda el ejemplo inmediatamente sin confundirse con geografía inventada.

Asegúrate de cubrir exhaustivamente los siguientes subtítulos principales de nuestra malla curricular:
${subtitulosTexto}

OBLIGACIÓN DE EXPANSIÓN PROFUNDA Y JERÁRQUICA (¡MUY IMPORTANTE!):
No te limites únicamente a mencionar o definir brevemente estos subtítulos. Para que el tema sea verdaderamente completo y de nivel superior, DEBES desglosar cada uno de ellos en múltiples niveles de profundidad utilizando una NUMERACIÓN JERÁRQUICA ESTRICTA.
Para cada subtítulo principal, debes generar automáticamente:
- Subtítulos de niveles inferiores perfectamente ordenados (ejemplo: 1.1, 1.1.1, 1.1.2, 1.1.2.1, etc.).
- Debajo de cada nivel jerárquico numérico, desarrolla el contenido con puntos clave, guiones o incisos (a, b, c) con explicaciones detalladas y ejemplos prácticos.
- Clasificaciones, conceptos avanzados y desgloses técnicos profundos.
¡Tu objetivo es expandir la información al máximo para crear un documento magistral, rigurosamente estructurado y sumamente detallado!

REGLAS ESTRICTAS DE GENERACIÓN:
• Tono de Escritura: Didáctico, motivador, empático y profesional, evitando palabras rebuscadas para que un estudiante principiante lo comprenda fácilmente.
• Analogías Cotidianas (OBLIGATORIO): Para explicar los conceptos más abstractos o difíciles del tema, DEBES usar siempre una "Analogía de la vida cotidiana" (por ejemplo, comparar una base de datos con una biblioteca, o un algoritmo con una receta de cocina). Esto asegurará que absolutamente CUALQUIER PERSONA, incluso sin conocimientos previos, pueda entender el tema a la primera.
• Nomenclatura y Enfoque Obligatorio: NUNCA utilices términos equivocados. Dirígete al estudiante OBLIGATORIAMENTE como "${perfilProfesional.trato}". Además, los ejemplos y la profundidad de la teoría deben estar enfocados en: "${perfilProfesional.enfoque}".
• Extensión, Profundidad y Calidad (SIN RELLENO): El documento DEBE tener estrictamente entre 2000 y 2500 palabras (aproximadamente de 10 a 13 páginas). Está TOTALMENTE PROHIBIDO usar texto de 'relleno' o redundante. Para alcanzar esta extensión de forma orgánica, debes profundizar con casos de uso reales, ejemplos prácticos detallados, ventajas/desventajas, guías paso a paso y analogías claras para que cualquier estudiante principiante lo entienda a la perfección sin aburrirse.
• Traductor de Jerga (OBLIGATORIO): Cada vez que introduzcas un término técnico complejo, DEBES poner inmediatamente entre paréntesis su traducción al lenguaje coloquial para que cualquiera lo entienda.
• El Error Clásico del Novato: Dentro de la teoría, incluye siempre una advertencia que explique el error más común que cometen los principiantes al aprender este tema y cómo evitarlo.
• Prohibición de Arte ASCII: TIENES ESTRICTAMENTE PROHIBIDO generar diagramas dibujados con símbolos de texto. Usa ÚNICAMENTE tablas Markdown estandarizadas o listas con viñetas.
• Tablas: Usa tablas Markdown con encabezados en negrita y contenido centrado.
• Códigos y Consolas: NO uses bloques de código negros de Markdown (\`\`\`). En su lugar, escribe todo fragmento de código usando texto normal indentado o viñetas para evitar que se mezclen al copiar a Word.
• Marcadores Visuales: OBLIGATORIAMENTE, al final de CADA UNO de los subtítulos de teoría (dentro del MOMENTO 2), debes sugerir que el profesor inserte un gráfico explicativo, usando este formato resaltado: [🖼️ PROFESOR: Inserte aquí un diagrama/imagen detallado que muestre...]. En total deben haber al menos 5 marcadores visuales (uno por subtítulo).

ESTRUCTURA EXACTA DEL DOCUMENTO:
# ${temaTitulo}
## HOJA DE RUTA (Introducción)
• "El Concepto en 1 Minuto": Antes que nada, explica de qué trata todo este tema en solo 3 líneas, usando lenguaje súper sencillo (como para un niño de 12 años).
• Título: "En este tema serás capaz de..."
• Plantea 3 objetivos de aprendizaje directos y motivadores.
## MOMENTO 1: PRÁCTICA
• Inicia con una pregunta detonante.
• Plantea un problema tecnológico real enfocado ESPECÍFICAMENTE en el contexto de EduConnectRuben. Sin teoría, solo inducción.
## MOMENTO 2: TEORÍA (Núcleo del aprendizaje)
• IMPORTANTE: Usa encabezados de Nivel 3 (###) para cada uno de los 5 subtítulos principales, y Nivel 4 (####) para las jerarquías numéricas (ej. 1.1).
• Desarrolla 8 subtítulos en total: Los 5 primeros DEBEN ser los obligatorios de la malla curricular. Los 3 últimos deben ser subtítulos avanzados propuestos por ti (por ejemplo, el uso de la Inteligencia Artificial).
• Cada subtítulo debe contener explicaciones directas y muy bien explicadas con casos prácticos.
• Cierre Teórico Obligatorio:
  - Mitos vs. Realidades: Tabla comparativa desmintiendo 2 creencias erróneas comunes.
  - Glosario de Términos: Lista de los 5 conceptos más técnicos.
  - Ponte a Prueba: 3 preguntas rápidas de opción múltiple.
  - Preguntas Frecuentes (FAQ) del Principiante: Responde con mucha empatía las 3 dudas más básicas o "tontas" que tendría alguien que recién empieza.
## MOMENTO 3: VALORACIÓN
• Reflexión profunda sobre el impacto ético, social y medioambiental.
## MOMENTO 4: PRODUCCIÓN
• Diseña un 'Reto Final' o 'Laboratorio' paso a paso basado en un "Caso Práctico Cotidiano" (no corporativo, algo tangible y diario) para aplicar lo aprendido en la computadora.
## RECURSOS ADICIONALES
• Proporciona 3 enlaces a documentación oficial. REGLA: Cada recurso debe estar acompañado de una breve descripción (1 o 2 líneas) explicando por qué es útil.

6. FORMATO DE ENTREGA (REGLA CRÍTICA)
• PROHIBIDO GENERAR PDF: Tienes terminantemente prohibido usar Python o cualquier otra herramienta para generar un archivo PDF.
• Inicio Directo (Sin Saludos): Tu respuesta debe comenzar ÚNICA Y EXCLUSIVAMENTE con el Título Principal en Markdown (ejemplo: # ${temaTitulo}). NO incluyas saludos iniciales.
• Jerarquía de Títulos (PANEL DE NAVEGACIÓN): Es ESTRICTAMENTE OBLIGATORIO usar los símbolos (#, ##, ###, ####) para que el documento genere un 'Esquema de Documento' o 'Panel de Navegación' perfecto al pasarlo a Word o Docs.
• Exportación a Google Docs: Escribe toda tu respuesta ÚNICA Y EXCLUSIVAMENTE como texto directamente aquí en la ventana del chat. NO añadas mensajes de despedida.`;

    ejecutarPromptPlanificacion(promptMaestro);
}

function generarPlanGeneral() {
    const nivel = selectNivel.value;
    if (!nivel) {
        alert("⚠️ Por favor, selecciona el Nivel para generar la Planificación General.");
        return;
    }
    
    const partesNivel = nivel.split('-');
    const parteAntesGuion = partesNivel[0];
    const soloNivel = parteAntesGuion.includes(':') ? parteAntesGuion.split(':')[1].trim().toUpperCase() : parteAntesGuion.trim().toUpperCase();
    const tituloDoc = `PLANIFICACIÓN SEMESTRAL - ${soloNivel}`;
    
    const modulosDelNivel = Object.keys(mallaCurricular[nivel] || {}).join('\n- ');

    const promptTexto = `${tituloDoc}\nActúa como un Experto en Planificación Curricular.
Genera la Planificación para el nivel: "${nivel}".
Módulos que componen este nivel:
- ${modulosDelNivel}

REGLAS ESTRICTAS DE FORMATO Y REDACCIÓN:
1. Tu respuesta DEBE SER MUY RESUMIDA.
2. Entrégalo LISTO PARA IMPRIMIR. NO incluyas saludos ni explicaciones de relleno.
3. El Objetivo General debe ser 1 solo párrafo directo.
4. Las Competencias Específicas deben ser viñetas cortas.
5. La Estructura Modular debe ser una tabla Markdown estricta. Debe tener exactamente una fila por cada módulo listado y 3 columnas obligatorias: "Mes" (Ej: Primer Mes), "Módulo" (Nombre del módulo) y "Descripción" (Resumen de 1 o 2 líneas del contenido). NO incluyas horas.
6. La Estrategia Metodológica y Evaluación debe ser 1 párrafo corto.
7. DEBE EMPEZAR EXACTAMENTE con el siguiente diseño:

# ${tituloDoc}
- **Nivel:** ${nivel}
- **Objetivo General:** 
- **Competencias Específicas:** 

**Estructura Modular (Tabla de Meses):**
(Crea la tabla aquí asegurándote de usar formato Markdown correcto)

**Estrategia Metodológica y Evaluación:**`;
    ejecutarPromptPlanificacion(promptTexto);
}

function generarPlanModular() {
    const nivel = selectNivel.value;
    const modulo = selectModulo.value;

    if (!nivel || !modulo) {
        alert("⚠️ Por favor, selecciona el Nivel y Módulo para generar la Planificación del Módulo.");
        return;
    }

    const romanMatch = modulo.match(/MÓDULO (\d+|[IVXLCDM]+):/i);
    const numRomano = romanMatch ? romanMatch[1] : "";
    const tituloDoc = `PLANIFICACIÓN DEL MÓDULO ${numRomano}`;

    const temasObj = mallaCurricular[nivel][modulo] || {};
    let listaTemas = "";
    for (const [tema, subtemas] of Object.entries(temasObj)) {
        listaTemas += "- " + tema + ":\n";
    }

    const promptTexto = `${tituloDoc}\nActúa como un Experto en Planificación Educativa.
Nivel: "${nivel}" | Módulo: "${modulo}".
Temas del módulo:
${listaTemas}

REGLAS ESTRICTAS DE FORMATO Y REDACCIÓN:
1. Tu respuesta DEBE SER MUY RESUMIDA (Máximo 1 página).
2. Entrégalo LISTO PARA IMPRIMIR. NO incluyas saludos, explicaciones, ni notas finales. El documento debe terminar exactamente donde termina la tabla del cronograma, sin ninguna palabra extra.
3. El Objetivo del Módulo debe ser 1 párrafo.
4. Los Resultados de Aprendizaje deben ser viñetas cortas.
5. El Cronograma debe ser una tabla Markdown estricta con exactamente 4 filas de datos (una por cada tema del módulo) y 4 columnas: "Tema", "Contenido", "Actividad", y "Evaluación". REGLA PARA ACTIVIDAD Y EVALUACIÓN: Deduce un método pedagógico y de evaluación basándote directamente en el nombre del tema. Mantenlo directo y lógico (Ej: "Laboratorio práctico", "Prueba escrita"). Obligatoriamente debe haber una fila independiente por cada Tema proporcionado sin omitir ninguna.
6. DEBE EMPEZAR EXACTAMENTE con el siguiente diseño:

# ${tituloDoc}
- **Módulo:** ${modulo}
- **Objetivo del Módulo:** 
- **Resultados de Aprendizaje:** 
- **Cronograma (Resumen):**`;
    ejecutarPromptPlanificacion(promptTexto);
}

function generarPlanTema() {
    const nivel = selectNivel.value;
    const modulo = selectModulo.value;
    const temaString = selectTema.value; 

    if (!nivel || !modulo || !temaString) {
        alert("⚠️ Por favor, selecciona todas las opciones para generar la Planificación de la Clase.");
        return;
    }

    const temaTitulo = temaString.toUpperCase();
    const temaMatch = temaString.match(/TEMA (\d+)/i);
    const numTema = temaMatch ? temaMatch[1] : "";
    const tituloDoc = `PLANIFICACIÓN DEL TEMA ${numTema}`;

    const subtemasArr = (mallaCurricular[nivel][modulo][temaString] || []);
    const subtitulosTexto = subtemasArr.join('\n');

    const promptMaestro = `${tituloDoc}\nActúa como un Experto en Planificación Educativa.
Tema: "${temaTitulo}"
Subtemas a dictar:
${subtitulosTexto}

REGLAS ESTRICTAS DE FORMATO Y REDACCIÓN:
1. Tu respuesta DEBE SER EXTREMADAMENTE RESUMIDA (Máximo 1 página).
2. Entrégalo LISTO PARA IMPRIMIR. NO redactes la teoría para los estudiantes.
3. NO repitas mis instrucciones en el documento final.
4. Práctica, Teoría, Valoración y Producción deben tener máximo 2 líneas cada uno.
5. Los criterios de evaluación deben tener exactamente 1 línea cada uno.
6. DEBE EMPEZAR EXACTAMENTE con el siguiente diseño:

# ${tituloDoc}
- **Tema:** ${temaTitulo}
- **Objetivo de la Clase:** [Escribe un solo objetivo corto aquí]
- **Recursos y Materiales Necesarios:** [Lista todos los recursos aquí, en esta misma línea, separados por comas. PROHIBIDO repetir este título o crear viñetas adicionales]

**Tabla de Planificación:**
(Crea una tabla estricta en Markdown de EXACTAMENTE 2 FILAS y 4 COLUMNAS. NO ESCRIBAS "(Formato 2 Filas...)" EN EL TÍTULO.
- La FILA 1: "Momentos Metodológicos", "Subtítulos", "Descripción Breve", "Criterios de Evaluación".
- La FILA 2: UNA SOLA CELDA GIGANTE por columna. Agrupa la información usando saltos de línea dobles '<br><br>' para dar buen interlineado, SIN USAR GUIONES NI VIÑETAS.
Ejemplo EXACTO de la estructura a generar:
| Momentos Metodológicos | Subtítulos | Descripción Breve | Criterios de Evaluación |
| :--- | :--- | :--- | :--- |
| **Práctica:** ... <br><br> **Teoría:** ... <br><br> **Valoración:** ... <br><br> **Producción:** ... | 1.1 ... <br><br> 1.2 ... <br><br> 1.3 ... <br><br> 1.4 ... <br><br> 1.5 ... | Desc 1.1 <br><br> Desc 1.2 <br><br> Desc 1.3 <br><br> Desc 1.4 <br><br> Desc 1.5 | **Ser:** ... <br><br> **Saber:** ... <br><br> **Hacer:** ... <br><br> **Decidir:** ... |`;

    ejecutarPromptPlanificacion(promptMaestro);
}

function generarPlanEvaluacion() {
    const nivel = selectNivel.value;
    const modulo = selectModulo.value;

    if (!nivel || !modulo) {
        alert("⚠️ Por favor, selecciona el Nivel y el Módulo para generar la Rúbrica de Evaluación.");
        return;
    }

    const romanMatch = modulo.match(/MÓDULO (\d+|[IVXLCDM]+):/i);
    const numRomano = romanMatch ? romanMatch[1] : "";
    const tituloDoc = `PLAN DE EVALUACIÓN MÓDULO ${numRomano}`;

    const promptTexto = `${tituloDoc}\nActúa como un Experto en Evaluación Educativa Tecnológica.
Módulo: "${modulo}".

REGLAS ESTRICTAS DE FORMATO Y REDACCIÓN:
1. Tu respuesta DEBE SER EXTREMADAMENTE RESUMIDA (Máximo 1 página).
2. Entrégalo LISTO PARA IMPRIMIR. NO incluyas saludos ni explicaciones de relleno.
3. Ve directo al grano, es un resumen ejecutivo para el docente.
4. DEBE EMPEZAR EXACTAMENTE con el siguiente diseño:

# ${tituloDoc}
- **Proyecto Final Práctico:** (Describe el proyecto en máximo 2 líneas)
- **Entregables:** (3 viñetas cortas de lo que debe entregar el estudiante)

## RÚBRICA DE EVALUACIÓN SUMATIVA
(Crea una tabla Markdown muy concisa y sin texto extra evaluando 4 criterios esenciales con 4 niveles de logro: Excelente, Bueno, Regular, Deficiente).`;

    ejecutarPromptPlanificacion(promptTexto);
}

function generarPromptImagen(plataforma) {
    const nivel = selectNivel.value;
    const modulo = selectModulo.value;
    const tema = selectTema.value;

    if (!nivel || !modulo || !tema) {
        alert('¡Ups! Selecciona Nivel, Módulo y Tema para generar imagen de infografía.');
        return;
    }

    const temaTitulo = tema.toUpperCase();
    const perfilProfesional = obtenerTratoProfesional(nivel);
    const subtitulosArr = mallaCurricular[nivel][modulo][tema] || [];
    const sub1 = subtitulosArr[0] || "";
    const sub2 = subtitulosArr[1] || "";
    const sub3 = subtitulosArr[2] || "";
    const sub4 = subtitulosArr[3] || "";
    const sub5 = subtitulosArr[4] || "";

    let promptImagen = `Actúa como un diseñador gráfico experto en infografías educativas.
Genera una infografía estilo collage dividida exactamente en 6 paneles (una cuadrícula de 3 columnas por 2 filas).
REGLA DE ESTILO VISUAL: Ajusta el arte al perfil del estudiante. Como este tema es para un "${perfilProfesional.trato}", el diseño gráfico debe ser acorde. Si es un Técnico Básico/Auxiliar, usa gráficos amigables, coloridos y didácticos. Si es un Técnico Medio/Superior, usa un estilo corporativo y estructurado. Si es un Ingeniero, diseña algo altamente técnico, futurista, complejo (tipo plano arquitectónico o blueprint) y sumamente profesional.

REGLA CRÍTICA Y ESTRICTA: Tienes TOTALMENTE PROHIBIDO generar o escribir las palabras "Rojo", "Amarillo", "Verde", "Azul", "Violeta" o "Multicolor" dentro de la imagen, ya sea como títulos, etiquetas o marcas. Esos nombres de colores son solo instrucciones para que sepas de qué color pintar el fondo de cada panel. NO los escribas como texto.

El contenido visual debe ser exactamente este:
- Panel 1 (Arriba a la izquierda): Fondo con combinación de colores. Título principal bien centrado en el medio del panel en letras grandes: "${temaTitulo}". Alrededor del título, dibuja nubes, iconos y pequeñas ilustraciones tecnológicas decorativas.
- Panel 2 (Arriba al centro): Fondo de color rojo. En la parte superior del panel escribe textualmente el subtítulo completo: "${sub1}". Debajo, diseña la información visual dentro de sub-cuadros o contenedores gráficos.
- Panel 3 (Arriba a la derecha): Fondo de color amarillo. En la parte superior del panel escribe textualmente el subtítulo completo: "${sub2}". Debajo, diseña la información visual dentro de sub-cuadros o contenedores gráficos.
- Panel 4 (Abajo a la izquierda): Fondo de color verde. En la parte superior del panel escribe textualmente el subtítulo completo: "${sub3}". Debajo, diseña la información visual dentro de sub-cuadros o contenedores gráficos.
- Panel 5 (Abajo al centro): Fondo de color azul. En la parte superior del panel escribe textualmente el subtítulo completo: "${sub4}". Debajo, diseña la información visual dentro de sub-cuadros o contenedores gráficos.
- Panel 6 (Abajo a la derecha): Fondo de color violeta. En la parte superior del panel escribe textualmente el subtítulo completo: "${sub5}". Debajo, diseña la información visual dentro de sub-cuadros o contenedores gráficos.

INSTRUCCIÓN ESTRUCTURAL PARA LOS PANELES 2 AL 6:
Adapta el diseño interno de la ilustración según el tema que trate el subtítulo:
- Si el subtítulo trata sobre "Ventajas y desventajas", dibuja obligatoriamente DOS sub-cuadros divididos (uno para ventajas con un ícono de check, y otro para desventajas con una X).
- Si el subtítulo trata sobre "Comparativa" o "Diferencia", dibuja un diseño comparativo en columnas o tablas visuales.
- Si es un concepto general, dibuja diagramas bien organizados dentro de un cuadro o lienzo que resalte sobre el fondo.

Estilo visual: Arte digital educativo, diseño plano (flat design), vectores limpios, corporativo moderno. Muestra elementos tecnológicos.
Formato de imagen: Horizontal panorámico (relación de aspecto 16:9) para acomodar perfectamente la cuadrícula.`;
    ejecutarPromptPlanificacion(promptImagen);
}

function generarPromptImagenModulo(opcion) {
    const nivel = selectNivel.value;
    const modulo = selectModulo.value;

    if (!nivel || !modulo) {
        alert('⚠️ Por favor, selecciona el Nivel y Módulo antes de generar la imagen de la carátula.');
        return;
    }

    const perfilProfesional = obtenerTratoProfesional(nivel);
    const temasObj = mallaCurricular[nivel][modulo] || {};
    const listaTemas = Object.keys(temasObj).map(t => (t.split(':')[1] || t).trim()).join(', ');

    let promptImagen = `Actúa como un diseñador gráfico experto. Genera una imagen con fondo TOTALMENTE TRANSPARENTE (sin fondo), ideal para la carátula de un módulo educativo.
REGLA DE ESTILO VISUAL: Ajusta el arte de la portada al perfil del estudiante. Como este módulo es para un "${perfilProfesional.trato}", el diseño debe reflejarlo. Si es para un Técnico, usa colores vivos y elementos prácticos/didácticos. Si es para un Ingeniero, usa un estilo hiperrealista, abstracto, arquitectónico o de alta ingeniería corporativa.
El módulo se llama: "${modulo.replace(/^MÓDULO (\d+|[IVXLCDM]+):\s*/i, '')}".
Este módulo abarca los siguientes temas: ${listaTemas}.
Tu objetivo es crear una ilustración que englobe y represente todos estos conceptos de forma general y visual.

`;

    if (opcion === 1) {
        promptImagen += `Estilo y composición (OPCIÓN 1):
- Diseño radial o de red: En el centro coloca un elemento principal representativo del tema.
- Alrededor, distribuye múltiples íconos coloridos y modernos relacionados con informática y tecnología.
- Conecta el elemento central con los íconos mediante flechas o líneas dinámicas que apunten hacia afuera.
- Estilo: Arte digital, iconos 3D o flat design brillante, muy llamativo y educativo.`;
    } else {
        promptImagen += `Estilo y composición (OPCIÓN 2):
- Diseño tipo explosión o árbol de ideas: En la parte inferior coloca un elemento base.
- Desde este elemento base, haz brotar hacia arriba muchas líneas o ramas de colores brillantes.
- Cada rama debe terminar en un círculo o burbuja que contenga un ícono tecnológico diferente.
- Estilo: Vectores limpios, muy colorido, vibrante, con estilo corporativo y moderno.`;
    }

    promptImagen += `

RECUERDA: La imagen debe tener fondo 100% transparente y no incluir texto escrito, solo elementos visuales e íconos. Formato de imagen: Cuadrado (relación de aspecto 1:1).`;
    ejecutarPromptPlanificacion(promptImagen);
}

// --- Theme Toggle Logic ---
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-theme');
    
    const themeIcon = document.getElementById('theme-icon');
    if (body.classList.contains('light-theme')) {
        themeIcon.innerHTML = '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>';
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.innerHTML = '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>';
        localStorage.setItem('theme', 'dark');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        toggleTheme();
    } else {
        const themeIcon = document.getElementById('theme-icon');
        if(themeIcon) themeIcon.innerHTML = '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>';
    }
});

// --- Dynamic Toast Logic ---
function showToast(mensaje) {
    const toast = document.getElementById("toast");
    const toastText = document.getElementById("toast-text");
    if(!toast) return;
    toastText.textContent = mensaje;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show"); 
    }, 3000);
}
