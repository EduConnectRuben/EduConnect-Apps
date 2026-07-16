// EduConnectRuben - Lógica de Interfaz y Generación de Prompts

const mallaCurricular = {
    "Semestre 1: Nivel Técnico Básico - Conexión de Redes Domiciliarias y Seguridad": {
        "Módulo 1: Fundamentos y Direccionamiento IP": {
            "Tema 1: Conceptos básicos (LAN, MAN, WAN)": [
                "1.1 Definición técnica de una red informática y sus propósitos .",
                "1.2 Escala de redes: Diferencias prácticas entre LAN, MAN y WAN .",
                "1.3 Identificación de hosts y nodos dentro de una red doméstica .",
                "1.4 Simbología estándar de dispositivos de red para lectura de diagramas .",
                "1.5 Medición de velocidad y ancho de banda (Mbps vs MB/s) ."
            ],
            "Tema 2: Topologías y Modelo OSI / TCP/IP": [
                "2.1 Estructuras físicas: Topología en Estrella, Árbol y Malla .",
                "2.2 Ventajas de la topología en Estrella para el diagnóstico de fallas .",
                "2.3 Capas fundamentales del Modelo OSI (Física, Enlace, Red, Transporte) .",
                "2.4 Comparativa práctica con el protocolo estándar TCP/IP .",
                "2.5 Identificación de la capa lógica al momento de resolver problemas ."
            ],
            "Tema 3: Direccionamiento IPv4 y Subnetting básico": [
                "3.1 Estructura de una dirección IPv4 (Octetos y formato decimal) .",
                "3.2 Identificación de clases de IP (Clase A, B y C) para domicilios .",
                "3.3 Función de las direcciones MAC frente a las direcciones IP .",
                "3.4 Concepto de Subnetting: División básica de redes .",
                "3.5 Identificación de IPs públicas (WAN) vs IPs privadas (LAN) ."
            ],
            "Tema 4: Compartición de recursos en red local": [
                "4.1 Creación de grupos de trabajo en sistemas Windows .",
                "4.2 Configuración de permisos de lectura y escritura y compartición segura de carpetas entre distintas computadoras .",
                "4.3 Mapeo de unidades de red para acceso directo .",
                "4.4 Instalación y compartición de impresoras en red por Wi-Fi y cable .",
                "4.5 Solución de problemas comunes de visibilidad de red ."
            ]
        },
        "Módulo 2: Configuración de Routers y Seguridad Wi-Fi": {
            "Tema 1: IP Estática, Dinámica y Servidores DHCP": [
                "1.1 Diferencia entre asignación automática (Dinámica) y manual (Estática) .",
                "1.2 Cómo funciona el protocolo DHCP para entregar IPs .",
                "1.3 Reserva de IPs estáticas para dispositivos críticos (servidores o cámaras) .",
                "1.4 Configuración del rango o Pool de direcciones en el router .",
                "1.5 Renovación y liberación de concesiones IP desde el equipo cliente ."
            ],
            "Tema 2: Enrutamiento, Puerta de enlace y DNS": [
                "2.1 Definición y función del Gateway (Puerta de enlace predeterminada) .",
                "2.2 Qué es y cómo opera un servidor DNS (Sistema de Nombres de Dominio) .",
                "2.3 Cambio de DNS de la operadora a DNS públicos (Google 8.8.8.8, Cloudflare 1.1.1.1) .",
                "2.4 Entendimiento básico del enrutamiento de paquetes hacia el internet .",
                "2.5 Reinicio correcto de la tabla de enrutamiento del equipo ."
            ],
            "Tema 3: Seguridad WPA2, WPA3 y Filtrado MAC": [
                "3.1 Tipos de cifrado inalámbrico y vulnerabilidades de WEP/WPA .",
                "3.2 Implementación de los estándares robustos WPA2 y WPA3 .",
                "3.3 Creación de contraseñas alfanuméricas de alta seguridad para clientes .",
                "3.4 Extracción de direcciones MAC de los dispositivos autorizados .",
                "3.5 Configuración de la lista blanca (Filtrado MAC) en el router ."
            ],
            "Tema 4: Access Points y redes ocultas (SSID)": [
                "4.1 Diferencia operativa entre un Router y un Access Point (AP) .",
                "4.2 Qué es el SSID (Nombre de la red) y la radiofrecuencia (2.4Ghz / 5Ghz) .",
                "4.3 Procedimiento para ocultar el SSID y evitar escaneos externos .",
                "4.4 Conexión manual de teléfonos y PCs a redes invisibles .",
                "4.5 Configuración de aislamiento de clientes (Client Isolation) para redes de invitados ."
            ]
        },
        "Módulo 3: Médico de Redes: Diagnóstico y Troubleshooting": {
            "Tema 1: Comandos vitales (ipconfig, ping, tracert)": [
                "1.1 Uso de la consola (CMD) para diagnóstico de red .",
                "1.2 Ejecución de ipconfig /all para lectura detallada de adaptadores .",
                "1.3 Pruebas de conectividad y lectura de latencia con ping .",
                "1.4 Rastreo de saltos y cuellos de botella con tracert (Traceroute) .",
                "1.5 Interpretación de respuestas de error (Tiempo de espera agotado, Host inaccesible) ."
            ],
            "Tema 2: Análisis de conexiones y escaneo": [
                "2.1 Monitoreo de puertos activos con el comando netstat .",
                "2.2 Identificación de programas que consumen ancho de banda en segundo plano .",
                "2.3 Uso de la herramienta de escaneo Advanced IP Scanner .",
                "2.4 Búsqueda de dispositivos intrusos en la red del cliente .",
                "2.5 Detección de conflictos de IP duplicadas ."
            ],
            "Tema 3: Metodología de resolución rápida de fallas": [
                "3.1 Entrevista técnica inicial con el usuario afectado .",
                "3.2 Aislamiento del problema: ¿Falla el dispositivo, el cable o el router? .",
                "3.3 Aplicación del enfoque De abajo hacia arriba (Modelo OSI físico a software) .",
                "3.4 Documentación del proceso de falla y solución .",
                "3.5 Comprobación de integridad de los cables de red ."
            ],
            "Tema 4: Solución de problemas DNS": [
                "4.1 Identificación del error El servidor DNS no responde .",
                "4.2 Limpieza de la memoria caché de resolución con ipconfig /flushdns .",
                "4.3 Asignación forzada de DNS a nivel del adaptador de red en Windows .",
                "4.4 Comprobación de resolución de nombres usando el comando nslookup .",
                "4.5 Reseteo completo de la pila TCP/IP (netsh winsock reset) ."
            ]
        },
        "Módulo 4: Instalaciones que NO fallan: Cableado Estructurado": {
            "Tema 1: Tipos de cables (Cat5e, Cat6, Cat6a) y blindaje": [
                "1.1 Estructura interna del cable UTP (Pares trenzados) .",
                "1.2 Diferencias de velocidad y frecuencia entre Cat5e, Cat6 y Cat6a .",
                "1.3 Uso de cables blindados (FTP/STP) para evitar interferencia electromagnética (EMI) .",
                "1.4 Cables para interior vs. cables de chaqueta negra UV para exteriores .",
                "1.5 Límites físicos de distancia para la transmisión de datos (Regla de los 100 metros) ."
            ],
            "Tema 2: Normas de Ponchado y conectores": [
                "2.1 Código de colores normativo T568A .",
                "2.2 Código de colores normativo T568B (El estándar comercial) .",
                "2.3 Diferencia entre un cable directo (Straight-through) y cruzado (Crossover) .",
                "2.4 Técnica profesional de corte y destrenzado sin dañar el cobre .",
                "2.5 Crimpeado exacto del conector RJ45 asegurando el recubrimiento plástico ."
            ],
            "Tema 3: Armado de Racks, Patch Panels y Switches": [
                "3.1 Estructura y tamaños de gabinetes de telecomunicaciones (Racks en Unidades U) .",
                "3.2 Diferencia entre Switches No Gestionables y Gestionables .",
                "3.3 Función organizativa y técnica de ponchado en un Patch Panel .",
                "3.4 Uso de ordenadores de cables y Patch Cords cortos para limpieza visual .",
                "3.5 Técnicas de amarre con velcro (evitar el estrangulamiento con precintos de plástico) ."
            ],
            "Tema 4: Proyecto de Producción: Certificación y reporte técnico": [
                "4.1 Uso del tester de cables básico para pruebas de continuidad y cruce de pares .",
                "4.2 Identificación de hilos abiertos o cortocircuitos .",
                "4.3 Etiquetado técnico de rosetas en la pared y puertos en el Patch Panel .",
                "4.4 Elaboración del plano as-built (Cómo quedó la instalación final) .",
                "4.5 Entrega del informe técnico de certificación del nodo y prueba de velocidad real ."
            ]
        },
        "Módulo 5: Diseño Lógico de Redes (Subnetting)": {
            "Tema 1: Direccionamiento IP avanzado": [
                "1.1 Clases de direcciones IP y notación CIDR .",
                "1.2 IPs públicas vs privadas .",
                "1.3 Direcciones especiales .",
                "1.4 Máscaras de red complejas .",
                "1.5 Identificación de subredes a partir de la dirección IP ."
            ],
            "Tema 2: Principios de Subnetting": [
                "2.1 ¿Por qué subdividir redes?",
                "2.2 Fórmulas de subnetting .",
                "2.3 Cálculo de subredes .",
                "2.4 Cálculo de hosts válidos .",
                "2.5 Ejercicios prácticos ."
            ],
            "Tema 3: VLSM (Variable Length Subnet Mask)": [
                "3.1 Concepto de VLSM .",
                "3.2 Optimización de direcciones .",
                "3.3 Cálculo de VLSM paso a paso .",
                "3.4 Diseño jerárquico .",
                "3.5 Implementación en routers ."
            ],
            "Tema 4: IPv6 Básico": [
                "4.1 Necesidad de IPv6 .",
                "4.2 Estructura de la dirección IPv6 .",
                "4.3 Tipos de direcciones (Unicast, Multicast, Anycast) .",
                "4.4 Configuración automática (SLAAC) .",
                "4.5 Transición IPv4 a IPv6 ."
            ]
        }
    },
    "Semestre 2: Nivel Técnico Auxiliar - Videovigilancia y Seguridad Electrónica": {
        "Módulo 1: El Ojo Que Todo lo Ve: CCTV Analógico y Grabadores (DVR)": {
            "Tema 1: Tecnologías de video y resoluciones": [
                "1.1 Evolución de los formatos analógicos de alta definición (AHD, HD-TVI, HD-CVI) .",
                "1.2 Comprensión de las resoluciones comerciales (1MP, 2MP/1080p, 4MP, 4K) .",
                "1.3 Tipos de lentes: Lente fijo vs Lente varifocal .",
                "1.4 Conceptos de iluminación infrarroja (Smart IR) y tecnología ColorVu .",
                "1.5 Configuración de fotogramas por segundo (FPS) y fluidez de la imagen ."
            ],
            "Tema 2: Cableado coaxial vs UTP con Video Baluns": [
                "2.1 Transmisión nativa con cable Coaxial Siamés (RG59) .",
                "2.2 Uso del cable de red UTP para abaratar costos en CCTV analógico .",
                "2.3 Qué es un Video Balun y cómo empareja la impedancia de la señal .",
                "2.4 Centralización de energía utilizando cajas de fuentes de poder de 12V .",
                "2.5 Cálculo de caída de voltaje en tiradas largas y cálculo de atenuación ."
            ],
            "Tema 3: Arquitectura de DVRs y almacenamiento": [
                "3.1 Panel posterior de un DVR: Canales BNC, salidas HDMI/VGA y puertos de audio .",
                "3.2 Selección de Discos Duros mecánicos específicos para videovigilancia .",
                "3.3 Proceso físico de instalación del disco SATA dentro de la placa del DVR .",
                "3.4 Formateo y configuración del modo de sobreescritura automática .",
                "3.5 Cálculo estimado de días de retención de video según capacidad y resolución ."
            ],
            "Tema 4: Configuración y respaldo de evidencia": [
                "4.1 Navegación en el menú principal del grabador digital .",
                "4.2 Configuración de la grabación continua vs grabación por detección de movimiento .",
                "4.3 Máscaras de privacidad para bloquear zonas visuales restringidas .",
                "4.4 Búsqueda de eventos por línea de tiempo y calendario .",
                "4.5 Proceso de corte, extracción en memoria USB y conversión del archivo de evidencia ."
            ]
        },
        "Módulo 2: Vigilancia Moderna: Redes PoE y Cámaras IP": {
            "Tema 1: Principios de cámaras IP y ancho de banda": [
                "1.1 Diferencia arquitectónica entre un DVR analógico y un NVR de red .",
                "1.2 Procesamiento de imagen interno directamente en la placa de la cámara IP .",
                "1.3 Compresión de video eficiente (H.265 y H.265+) .",
                "1.4 Cálculo de consumo de ancho de banda en la red local (Bitrate) .",
                "1.5 Medición del ángulo de visión requerido para el proyecto ."
            ],
            "Tema 2: Estándares PoE (Power over Ethernet)": [
                "2.1 Significado y ventaja operativa de enviar energía y datos por el mismo cable .",
                "2.2 Diferencia entre inyectores PoE pasivos y el estándar PoE Activo (802.3af/at) .",
                "2.3 Dimensionamiento y uso de Switches PoE (Cálculo del presupuesto de potencia total) .",
                "2.4 Distancias máximas de transmisión PoE estándar y Modo Extendido .",
                "2.5 Pruebas de voltaje y crimpeado estricto para evitar dañar los puertos de las cámaras ."
            ],
            "Tema 3: Asignación de IPs y configuración de NVRs": [
                "3.1 Uso de herramientas de descubrimiento en red (SADP Tool, ConfigTool) .",
                "3.2 Asignación de direcciones IP estáticas a cada cámara .",
                "3.3 Inicialización, activación e inserción de contraseñas de seguridad .",
                "3.4 Agregación de las cámaras IP al canal digital del NVR .",
                "3.5 Compatibilidad entre marcas utilizando el protocolo universal ONVIF ."
            ],
            "Tema 4: Integración de cámaras PTZ motorizadas": [
                "4.1 Funcionamiento mecánico de cámaras PTZ (Pan, Tilt, Zoom) .",
                "4.2 Configuración de patrullaje automático (Tour/Crucero) entre puntos clave .",
                "4.3 Establecimiento de Presets o posiciones predefinidas de enfoque .",
                "4.4 Alimentación pesada (PoE+ o Hi-PoE) requerida para los motores .",
                "4.5 Enfoque de venta para monitoreo de amplios espacios exteriores o almacenes ."
            ]
        },
        "Módulo 3: Control Total: Alarmas y Control de Acceso": {
            "Tema 1: Sistemas de alarma contra intrusión": [
                "1.1 Anatomía de un sistema de alarma: Panel, teclado, sirena y batería de respaldo .",
                "1.2 Sensores volumétricos (PIR) e instalación anti-mascotas .",
                "1.3 Contactos magnéticos para cortinas de metal de negocios y puertas .",
                "1.4 Barreras fotoeléctricas infrarrojas para seguridad de muros perimetrales .",
                "1.5 Concepto y cableado del circuito cerrado Normal Cerrado (NC) con resistencias de fin de línea (EOL) ."
            ],
            "Tema 2: Configuración de Paneles de Alarma": [
                "2.1 Conexión de zonas cableadas en la placa principal del panel .",
                "2.2 Programación básica del teclado alfanumérico .",
                "2.3 Tiempos de retardo (Delay) para entrada y salida de la propiedad .",
                "2.4 Definición de tipos de zona (Instantánea, Retardo, Pánico, Fuego) y creación de códigos de usuario maestro y usuarios limitados .",
                "2.5 Pruebas de funcionamiento del sistema de alarma ."
            ],
            "Tema 3: Control de acceso y Chapas magnéticas": [
                "3.1 Componentes de un control de acceso autónomo .",
                "3.2 Tipos de cerraduras: Electroimanes, cantoneras eléctricas y pernos .",
                "3.3 Cálculo de fuerza de sujeción (300lbs, 600lbs, 1200lbs) .",
                "3.4 Instalación lógica de relés para apertura y botones de salida (Push to Exit) .",
                "3.5 Incorporación de fuentes de alimentación ininterrumpidas (UPS) con batería de respaldo ."
            ],
            "Tema 4: Lectores biométricos (Huella/Rostro)": [
                "4.1 Altura e iluminación correcta para instalación de lectores faciales .",
                "4.2 Uso de tarjetas y llaveros de proximidad RFID (125KHz y Mifare 13.56MHz) .",
                "4.3 Protocolo de comunicación Wiegand hacia controladoras externas .",
                "4.4 Enrolamiento correcto de usuarios, huellas y perfiles en el dispositivo .",
                "4.5 Exportación de reportes básicos de asistencia y horarios (Time & Attendance) ."
            ]
        },
        "Módulo 4: Monitoreo Remoto y Proyecto de Producción": {
            "Tema 1: Vinculación a la nube (P2P) y DDNS": [
                "1.1 Activación del servicio P2P en el menú de red del DVR/NVR .",
                "1.2 Solución de problemas comunes cuando el equipo marca Offline .",
                "1.3 Diferencia entre IP pública estática y dinámica .",
                "1.4 Qué es el DDNS y creación de un dominio gratuito .",
                "1.5 Apertura de puertos (Port Forwarding) en el router del proveedor de internet ."
            ],
            "Tema 2: Apps móviles e interfaces de PC": [
                "2.1 Instalación y registro en aplicaciones móviles (SmartPSS, iVMS, DMSS, etc.) .",
                "2.2 Escaneo del código QR para agregación rápida del dispositivo .",
                "2.3 Cambio de flujos de video (Sub Stream para fluidez celular vs Main Stream para calidad HD) .",
                "2.4 Configuración de notificaciones push de cruce de línea e intrusión al celular .",
                "2.5 Operación básica del software de gestión (VMS) desde una computadora central ."
            ],
            "Tema 3: Entrega e inducción al cliente": [
                "3.1 Limpieza de polvo, reajuste de cámaras y fijación final de canaletas .",
                "3.2 Capacitación práctica al cliente final (Cómo revisar y descargar sus videos) .",
                "3.3 Redacción del documento de Acta de entrega y conformidad .",
                "3.4 Resguardo de la confidencialidad: Entrega de la contraseña maestra en sobre cerrado .",
                "3.5 Pautas y cotización del mantenimiento preventivo semestral ."
            ],
            "Tema 4: Proyecto de Producción: Instalación de seguridad híbrida": [
                "4.1 Levantamiento en sitio de requerimientos de seguridad para un negocio .",
                "4.2 Diseño del plano de distribución de cámaras IP y analógicas .",
                "4.3 Instalación integral combinando CCTV en red y chapas magnéticas en la puerta principal .",
                "4.4 Ejecución de pruebas de sabotaje (corte de energía y corte de internet) en el sitio .",
                "4.5 Defensa del proyecto integrado y explicación técnica del despliegue ."
            ]
        },
        "Módulo 5: Mantenimiento y Certificación de Cableado": {
            "Tema 1: Estándares de certificación": [
                "1.1 Normativas TIA/EIA .",
                "1.2 Parámetros de prueba (NEXT, FEXT, Atenuación) .",
                "1.3 Importancia de la certificación .",
                "1.4 Documentación técnica .",
                "1.5 Categorías de cable ."
            ],
            "Tema 2: Uso de certificadores de red": [
                "2.1 Equipos Fluke Networks .",
                "2.2 Configuración del equipo de prueba .",
                "2.3 Interpretación de resultados .",
                "2.4 Identificación de fallas comunes .",
                "2.5 Generación de reportes ."
            ],
            "Tema 3: Solución de problemas en capa física": [
                "3.1 Cables rotos o mal ponchados .",
                "3.2 Interferencia electromagnética (EMI) .",
                "3.3 Distancias máximas excedidas .",
                "3.4 Problemas de conectores .",
                "3.5 Uso del TDR ."
            ],
            "Tema 4: Mantenimiento preventivo": [
                "4.1 Inspección visual periódica .",
                "4.2 Organización de racks (Cable management) .",
                "4.3 Limpieza de equipos activos .",
                "4.4 Revisión de etiquetado .",
                "4.5 Actualización de planos ."
            ]
        }
    },
    "Semestre 3: Nivel Técnico Medio I - Enlaces WISP y Fibra Óptica (FTTH)": {
        "Módulo 1: Proveedor de Internet: Estructura WISP y Gestión": {
            "Tema 1: Estructura de un ISP / WISP local": [
                "1.1 Qué es ser un Wireless Internet Service Provider (WISP) en zonas alejadas .",
                "1.2 Adquisición legal y técnica del ancho de banda mayorista (Línea dedicada) .",
                "1.3 Estructura de la torre principal (Nodo base) y la protección contra descargas atmosféricas .",
                "1.4 Concepto de la última milla hacia la casa del usuario final .",
                "1.5 Medidas de seguridad y equipo de protección personal para trabajos en alturas ."
            ],
            "Tema 2: Elaboración de presupuestos y viabilidad": [
                "2.1 Cálculo del costo total de despliegue por cada cliente nuevo .",
                "2.2 Elaboración de propuestas y paquetes de velocidad (Ej. Plan Básico 10Mbps, Plan Plus 30Mbps) .",
                "2.3 Análisis de retorno de inversión (ROI) del equipo (Antenas y routers de la torre) .",
                "2.4 Redacción de presupuestos formales para instalación comercial .",
                "2.5 Creación de un fondo de contingencia para reposición por tormentas ."
            ],
            "Tema 3: Atención al cliente y comunicación efectiva": [
                "3.1 Creación de protocolos de respuesta de soporte técnico vía WhatsApp .",
                "3.2 Manejo de clientes conflictivos o frustrados por cortes de servicio .",
                "3.3 Redacción de contratos de comodato por los equipos instalados .",
                "3.4 Educación al cliente sobre las limitaciones del Wi-Fi de su casa frente a la velocidad real entregada .",
                "3.5 Estrategias locales de cobranza amigable ."
            ],
            "Tema 4: Uso de software de facturación WISP": [
                "4.1 Entendimiento general de platforms de administración de red ISP (Wispro, Mikrowisp) .",
                "4.2 Registro del perfil del cliente, velocidad asignada y fechas de corte .",
                "4.3 Suspensión y reactivación automática de servicio por mora .",
                "4.4 Envío de avisos de cobro por SMS o pantalla en el navegador .",
                "4.5 Monitoreo remoto del estado online/offline del router del cliente ."
            ]
        },
        "Módulo 2: Cruzando el Cielo: Enlaces Punto a Punto y Mikrotik": {
            "Tema 1: Radioenlaces y Zona de Fresnel": [
                "1.1 Diferencia y selección entre espectro de 2.4GHz (Penetración) y 5GHz (Ancho de banda) .",
                "1.2 Línea de visión directa (LOS): El requisito indispensable .",
                "1.3 Cálculo teórico y entendimiento físico de la Zona de Fresnel .",
                "1.4 Identificación de obstáculos topográficos o vegetación con Google Earth .",
                "1.5 Comprensión de la ganancia de la antena medida en dBi y la potencia de transmisión (dBm) ."
            ],
            "Tema 2: Antenas CPE en mástiles": [
                "2.1 Identificación de componentes de equipos comerciales (Ubiquiti LiteBeam, Mikrotik SXT/Disc) .",
                "2.2 Armado correcto del herraje de fijación metálico .",
                "2.3 Instalación con cable UTP blindado para exteriores (Protección ESD) .",
                "2.4 Uso del inclinómetro o niveles de burbuja para alineación de elevación .",
                "2.5 Prácticas de impermeabilización de conectores y sujeción firme al mástil ."
            ],
            "Tema 3: Configuración Access Point / Estación": [
                "3.1 Entorno de configuración (airOS en Ubiquiti o RouterOS en Mikrotik) .",
                "3.2 Configuración del equipo emisor en modo Access Point (Punto a Multipunto) .",
                "3.3 Escaneo de frecuencias (Site Survey) para evitar canales saturados de ruido .",
                "3.4 Configuración del equipo receptor (Estación) del lado del cliente .",
                "3.5 Interpretación de niveles de señal óptimos (-55 dBm a -65 dBm) y test de velocidad del enlace ."
            ],
            "Tema 4: Introducción a ruteo Mikrotik": [
                "4.1 Por qué Mikrotik es el estándar oro para control de ISPs .",
                "4.2 Descarga, descubrimiento de equipos e ingreso mediante la interfaz visual Winbox .",
                "4.3 Reseteo a valores de fábrica sin configuración por defecto (No default configuration) .",
                "4.4 Asignación manual de direcciones IP a las distintas interfaces Ethernet .",
                "4.5 Habilitación de la conexión a internet (Regla NAT - Masquerade básica) ."
            ]
        },
        "Módulo 3: Domina la Luz: Instalación de Fibra Óptica": {
            "Tema 1: Fibras Monomodo vs Multimodo": [
                "1.1 La física de la luz: Reflexión total interna dentro del núcleo de vidrio .",
                "1.2 Diferencias arquitectónicas entre Fibra Monomodo (Largas distancias) y Multimodo .",
                "1.3 Manejo cuidadoso de la fibra óptica y sus radios de curvatura máximos .",
                "1.4 Estructura de redes PON y la función pasiva de las cajas NAP de distribución .",
                "1.5 Riesgos a la salud ocular y cuidados básicos al manipular restos de vidrio ."
            ],
            "Tema 2: Cortadora (Cleaver) y Pelacables": [
                "2.1 Deschaquetado del cable Drop y retiro del kevlar o mensajero de acero .",
                "2.2 Uso de la pinza peladora de precisión (Stripper) para exponer el cladding .",
                "2.3 Limpieza rigurosa del hilo óptico con paños sin pelusa y alcohol isopropílico .",
                "2.4 Colocación precisa en la cortadora óptica (Cleaver) para cortes a 90 grados exactos .",
                "2.5 Análisis y prevención de errores de cortes biselados ."
            ],
            "Tema 3: Empalmadora / Fusionadora en acción": [
                "3.1 Componentes de la fusionadora de alineación por núcleo .",
                "3.2 Colocación de los hilos de fibra en las ranuras en V (V-Grooves) y cerrado de compuertas .",
                "3.3 Análisis de la pantalla y el arco eléctrico de fusión .",
                "3.4 Interpretación de la pérdida estimada tras la soldadura de vidrio (0.01 dB o 0.02 dB) .",
                "3.5 Uso del manguito termorretráctil y el horno de la máquina para proteger el empalme ."
            ],
            "Tema 4: Medidor de Potencia y Splitters": [
                "4.1 Teoría de la atenuación óptica (Por qué la luz pierde fuerza al viajar) .",
                "4.2 Uso del Medidor de Potencia Óptica (OPM) para verificar la señal (Ej. -20 dBm) .",
                "4.3 Uso del Localizador Visual de Fallos (VFL / Láser rojo) para buscar quiebres en cajas .",
                "4.4 Entendimiento y cálculo de división de luz usando Splitters desbalanceados y balanceados .",
                "4.5 Conectorización rápida en campo (Fast Connectors) vs Empalmes de fábrica (Pigtails) ."
            ]
        },
        "Módulo 4: Equipos de Cabecera y Proyecto FTTH": {
            "Tema 1: Parámetros básicos y conexión OLT": [
                "1.1 Qué es una OLT (Optical Line Terminal) en el cerebro del ISP .",
                "1.2 Inserción de módulos SFP PON para iluminar el árbol de fibra óptica .",
                "1.3 Relación de división lógica (Splitting ratio) soportado por el puerto .",
                "1.4 Interfaz de comandos (CLI) o interfaz web para gestión base de la OLT .",
                "1.5 Monitoreo general del estado y temperatura del chasis ."
            ],
            "Tema 2: Aprovisionamiento de ONUs/ONTs": [
                "2.1 Qué es una ONU (Optical Network Unit) en el domicilio del cliente final .",
                "2.2 Proceso de autenticación (Registro por número de serie SN de la ONU en la OLT) .",
                "2.3 Asignación de perfiles de línea y ancho de banda al equipo óptico .",
                "2.4 Comprobación de que la luz recibida en la roseta óptica del cliente esté dentro del margen aceptable (-15 a -25 dBm) .",
                "2.5 Mantenimiento remoto y reseteo óptico ."
            ],
            "Tema 3: Modos Bridge/Router y PPPoE": [
                "3.1 Diferencia entre configurar la ONU en modo Router (NAT propio) vs modo Bridge (Puente transparente) .",
                "3.2 Ventajas del protocolo PPPoE para el control de autenticación de clientes del WISP .",
                "3.3 Configuración de credenciales PPPoE y VLANs de servicio desde la interfaz de la ONU .",
                "3.4 Personalización del nombre de red Wi-Fi y contraseña para el cliente desde la cabecera y el uso de redes Mesh .",
                "3.5 Solución a problemas de conexión con el modo Router ."
            ],
            "Tema 4: Proyecto de Producción: Simulación FTTH": [
                "4.1 Diseño a escala de una red desde la OLT, pasando por caja NAP, hasta la ONU del cliente .",
                "4.2 Práctica de pelado, corte y fusión real del enlace completo bajo tiempo medido .",
                "4.3 Comprobación de luz en todos los puntos de distribución simulados .",
                "4.4 Aprovisionamiento final logrando navegación efectiva en internet .",
                "4.5 Presupuesto del proyecto simulado y cálculo de viabilidad comercial del tendido ."
            ]
        },
        "Módulo 5: Nodos WISP Autónomos y Redes Rurales": {
            "Tema 1: Energía Solar para Nodos de Telecomunicaciones": [
                "1.1 Principios básicos de energía fotovoltaica .",
                "1.2 Dimensionamiento de paneles solares según el consumo del router y antenas .",
                "1.3 Selección de baterías de ciclo profundo (Gel vs Litio) .",
                "1.4 Instalación de controladores de carga (PWM vs MPPT) .",
                "1.5 Monitoreo remoto del voltaje del banco de baterías ."
            ],
            "Tema 2: Enlaces de Ultra Largo Alcance": [
                "2.1 Retos de la propagación de RF a más de 20 kilómetros .",
                "2.2 Uso de antenas parabólicas de alta ganancia (Slant 45) .",
                "2.3 Alineación fina y cálculo de la curvatura terrestre .",
                "2.4 Mitigación de ruido electromagnético en campo abierto .",
                "2.5 Estabilización de enlaces pesados (Modulación y Data Rates) ."
            ],
            "Tema 3: Torres y Estructuras Metálicas": [
                "3.1 Tipos de torres de telecomunicación (Ventadas vs Autosoportadas) .",
                "3.2 Diseño de dados de concreto y anclaje seguro de vientos .",
                "3.3 Instalación de pararrayos y sistemas de tierra física profunda .",
                "3.4 Tratamiento anticorrosivo y mantenimiento de estructuras metálicas .",
                "3.5 Normas de seguridad en alturas para torreros ."
            ],
            "Tema 4: Proyectos para Estancias y Agroindustria": [
                "4.1 Casos de uso de internet en el campo (Monitoreo de maquinaria y clima) .",
                "4.2 Cobertura Wi-Fi en exteriores para galpones y maquinaria agrícola .",
                "4.3 Instalación de cámaras IP PTZ en zonas remotas .",
                "4.4 Integración de enlaces inalámbricos con sistemas de pesaje de camiones .",
                "4.5 Elaboración de presupuestos especializados para el sector agropecuario ."
            ]
        }
    },
    "Semestre 4: Nivel Técnico Medio II - Infraestructura Comercial y Telefonía IP": {
        "Módulo 1: Ruteo Profesional Avanzado con Mikrotik": {
            "Tema 1: Configuración avanzada de interfaces y NAT": [
                "1.1 Nombrado descriptivo de interfaces para evitar confusiones en el router de borde .",
                "1.2 Asignación de servidores DNS y creación de la ruta por defecto (Default Route) al exterior .",
                "1.3 Configuración de un servidor DHCP interno desde el Mikrotik .",
                "1.4 Profundización en las reglas de Firewall NAT y su orden de ejecución .",
                "1.5 Respaldos manuales de configuración (export file) y restauración (Backup and Restore) ."
            ],
            "Tema 2: Balanceo de carga": [
                "2.1 Problemática: Cómo sumar o repartir el tráfico cuando se tienen 2 o más líneas de internet contratadas .",
                "2.2 Configuración técnica del método PCC (Per Connection Classifier) .",
                "2.3 Lógica de marcado de conexiones y marcado de rutas en el Mangle del Firewall .",
                "2.4 Implementación de Failover (Paso automático a la línea de respaldo si la principal se corta) .",
                "2.5 Monitoreo de tráfico sumado a través del panel de interfaces ."
            ],
            "Tema 3: Quality of Service (QoS)": [
                "3.1 El peligro del usuario acaparador: Cómo las descargas arruinan el ping de los juegos online .",
                "3.2 Uso básico de Simple Queues (Colas Simples) para limitar megas de descarga/subida por dirección IP .",
                "3.3 Configuración de colas avanzadas y árbol de colas (Queue Tree) .",
                "3.4 Priorización de tipos de tráfico (ICMP y DNS primero, descargas P2P al último) .",
                "3.5 Ráfagas (Bursts): Permitir alta velocidad momentánea para carga de webs rápidas ."
            ],
            "Tema 4: Reglas de Firewall y Bloqueos": [
                "4.1 Diferencia entre las cadenas de tráfico Input, Output y Forward .",
                "4.2 Creación de listas de direcciones IP (Address Lists) para bloqueos masivos .",
                "4.3 Bloqueo de redes sociales específicas mediante reconocimiento de capa 7 (Layer 7 Protocols) .",
                "4.4 Prevención de ataques básicos limitando intentos de conexión por minuto .",
                "4.5 Implementación de horarios de bloqueo en colegios o empresas ."
            ]
        },
        "Módulo 2: El Negocio WISP: Fichas Wi-Fi (Hotspots)": {
            "Tema 1: Creación de Hotspots (Puntos públicos)": [
                "1.1 El modelo de negocio del Hotspot para parques, ferias, o áreas rurales alejadas .",
                "1.2 Ejecución del asistente (Hotspot Setup) dentro de Mikrotik sobre la interfaz de clientes .",
                "1.3 El concepto de la red abierta sin clave inicial, forzando la redirección web automática .",
                "1.4 Diferencia técnica de autenticación MAC vs IP en el panel de usuarios activos .",
                "1.5 Configuración de tiempos de gracia y límites de sesión inactiva ."
            ],
            "Tema 2: Diseño del portal cautivo (Login Page)": [
                "2.1 Ubicación y descarga de la carpeta de archivos HTML del Hotspot de Mikrotik .",
                "2.2 Edición base del diseño utilizando código HTML/CSS sencillo o plantillas web .",
                "2.3 Inserción de logos de negocios locales o de la academia, y pautas publicitarias directas .",
                "2.4 Restitución de los archivos personalizados al almacenamiento del router vía FTP .",
                "2.5 Pruebas de usabilidad del login en dispositivos Android e iOS (Captive Portal Detection) ."
            ],
            "Tema 3: Generación y venta de fichas (Tickets)": [
                "3.1 Activación e instalación del paquete User Manager (Radius de Mikrotik) o el uso de plataformas como Microwifi .",
                "3.2 Creación de perfiles de velocidad y límites de tiempo rígidos (1 hora, 1 día, 1 semana) .",
                "3.3 Generación masiva (Lotes) de usuarios y contraseñas aleatorias seguras (Fichas) .",
                "3.4 Diseño de la plantilla de impresión de los tickets (código, tiempo, precio) .",
                "3.5 Contabilidad del negocio y auditoría del consumo de cada ficha vendida ."
            ],
            "Tema 4: Antenas sectoriales para cobertura": [
                "4.1 Limitaciones de las antenas omnidireccionales clásicas en distribución WISP .",
                "4.2 Arquitectura de torres de distribución sectorizadas (Ej: 3 antenas de 120° o 4 de 90°) .",
                "4.3 Control de ruido y selección manual de canales separados para cada sector .",
                "4.4 Administración de clientes conectados a la antena principal para medir calidad de aire (CCQ) .",
                "4.5 Actualizaciones remotas de firmware de los clientes sin visitar domicilios ."
            ]
        },
        "Módulo 3: Servidores de Almacenamiento (NAS) para Cámaras": {
            "Tema 1: Limitaciones del DVR en empresas": [
                "1.1 Problemática: Alta vulnerabilidad a robos físicos del equipo grabador .",
                "1.2 Límites de los discos duros solitarios frente a fallas mecánicas sin aviso .",
                "1.3 Qué es un almacenamiento conectado a la red (NAS) frente a almacenamiento USB .",
                "1.4 Diferencias de rendimiento y uso de red LAN dedicada para videovigilancia empresarial .",
                "1.5 Separación física de los centros de monitoreo (Monitores) y el centro de datos (Servidor seguro) ."
            ],
            "Tema 2: Instalación de servidor NAS": [
                "2.1 Especificaciones de hardware requeridas para montar un NAS casero o comercial .",
                "2.2 Preparación del USB booteable para el sistema operativo TrueNAS (Base Linux/FreeBSD) .",
                "2.3 Análisis de soluciones propietarias (Synology, QNAP) para alta disponibilidad .",
                "2.4 Configuración base de la dirección IP fija en el nuevo NAS .",
                "2.5 Creación del recurso compartido (Pool / Dataset) mediante protocolos de red NFS y SMB ."
            ],
            "Tema 3: Arreglos de discos (RAID)": [
                "3.1 Concepto técnico y ventaja fundamental de tener un RAID (Redundant Array of Independent Disks) .",
                "3.2 Explicación de RAID 0 y sus peligros catastróficos .",
                "3.3 Configuración de discos en espejo (RAID 1) y supervivencia ante falla de un disco .",
                "3.4 Arquitectura de almacenamiento avanzado y paridad (RAID 5) para grandes empresas .",
                "3.5 Enlace del grabador de las cámaras para que apunte la grabación hacia la ruta del NAS remoto ."
            ],
            "Tema 4: Respaldo automático a la nube": [
                "4.1 Regla de oro del backup 3-2-1 en entornos corporativos de seguridad .",
                "4.2 Vinculación del sistema NAS con aplicaciones nativas de sincronización a la nube .",
                "4.3 Integración de API Keys de Google Drive, OneDrive o Amazon S3 al NAS .",
                "4.4 Programación de tareas nocturnas automatizadas (Ej. Subir eventos clave a las 3:00 AM) .",
                "4.5 Procedimiento comercial de venta del Servicio mensual de nube segura al cliente ."
            ]
        },
        "Módulo 4: Telefonía IP y Proyecto Final": {
            "Tema 1: Conceptos VoIP y Teléfonos IP": [
                "1.1 Qué es la Voz sobre IP y cómo difiere del cable de par de cobre tradicional .",
                "1.2 Concepto y uso del protocolo de inicio de sesión universal (SIP) .",
                "1.3 Conexión de teléfonos IP en red: Ventajas del puerto de cascada (PC/LAN) en el escritorio .",
                "1.4 Alimentación rápida de teléfonos utilizando Switches PoE .",
                "1.5 Ingreso de configuración base: Dirección de servidor, usuario (Extensión) y clave ."
            ],
            "Tema 2: Instalación de centralita (PBX)": [
                "2.1 Qué es una central telefónica virtual y sus ventajas empresariales .",
                "2.2 Instalación de distribuciones especializadas gratuitas basadas en Asterisk (Ej. Issabel o FreePBX) .",
                "2.3 Entendimiento del panel de control web administrativo de la PBX .",
                "2.4 Configuración estricta de seguridad: Contraseñas complejas y cambio de puertos de acceso .",
                "2.5 Diferencia entre rutas salientes a la red pública (Troncales) y el tráfico interno de la oficina ."
            ],
            "Tema 3: Creación de anexos e IVR": [
                "3.1 Creación masiva de numeración interna para el personal (Anexos / Extensiones) .",
                "3.2 Configuración del buzón de voz y desvío de llamadas en caso de no contestar .",
                "3.3 Qué es un IVR (Respuesta de Voz Interactiva) y su flujo de diagrama lógico .",
                "3.4 Grabación o subida del audio comercial corporativo .",
                "3.5 Asociación de opciones del menú con grupos de timbrado específicos del negocio ."
            ],
            "Tema 4: Proyecto de Producción Comercial Integral": [
                "4.1 Planeación de un diagrama integral para un colegio u hotel .",
                "4.2 Configuración y cableado base desde el router Mikrotik con control de páginas y 2 líneas de internet .",
                "4.3 Generación del portal cautivo (Hotspot) en la sala de espera .",
                "4.4 Conexión simultánea de cámaras IP que graban a un NAS y teléfonos IP .",
                "4.5 Demostración técnica y defensa del sistema orquestado en una maqueta o laboratorio vivo ante el jurado ."
            ]
        },
        "Módulo 5: Legislación y Gestión de Proyectos": {
            "Tema 1: Normativa legal en CCTV": [
                "1.1 Leyes de privacidad y protección de datos .",
                "1.2 Carteles de videovigilancia obligatorios .",
                "1.3 Zonas prohibidas para grabar .",
                "1.4 Custodia de grabaciones .",
                "1.5 Derechos de los trabajadores/ciudadanos ."
            ],
            "Tema 2: Contratos de servicio": [
                "2.1 Redacción de contratos de instalación .",
                "2.2 Definición de responsabilidades .",
                "2.3 Pólizas de mantenimiento .",
                "2.4 Garantías y exclusiones .",
                "2.5 Acuerdos de confidencialidad ."
            ],
            "Tema 3: Gestión de clientes": [
                "3.1 Atención al cliente .",
                "3.2 Manejo de quejas y reclamos .",
                "3.3 Capacitación al usuario final .",
                "3.4 Encuestas de satisfacción .",
                "3.5 Estrategias de retención ."
            ],
            "Tema 4: Presupuestos y costos avanzados": [
                "4.1 Cálculo de retorno de inversión (ROI) .",
                "4.2 Costos operativos .",
                "4.3 Análisis de la competencia .",
                "4.4 Estrategias de fijación de precios .",
                "4.5 Facturación y cobranza ."
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
