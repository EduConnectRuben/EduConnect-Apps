// EduConnectRuben - Lógica de Interfaz y Generación de Prompts

const mallaCurricular = {
    "Semestre 1: Nivel Técnico Básico - Bases Eléctricas para Casas Inteligentes": {
        "Módulo 1: El Primer Paso Seguro: Electricidad Domiciliaria sin Miedo": {
            "Tema 1: Conceptos de Voltaje (220v/110v) y Potencia": [
                "1.1 Diferencia entre Corriente Alterna (AC) y Continua (DC)",
                "1.2 Relación básica entre Voltaje, Corriente y Resistencia (Ley de Ohm)",
                "1.3 Cálculo de consumo eléctrico en Watts para dimensionar equipos",
                "1.4 Identificación de caídas de tensión en distancias largas",
                "1.5 Medidas de seguridad personal y uso de equipo de protección (EPP)"
            ],
            "Tema 2: Identificación de Fase, Neutro, Retornos y Tierra Física": [
                "2.1 Código de colores normativo para cables eléctricos",
                "2.2 Uso del buscapolos para identificar la Fase activa",
                "2.3 Función vital de la Tierra Física para protección de equipos",
                "2.4 Identificación del Neutro en cajas de registro antiguas",
                "2.5 Trazado y marcaje de retornos (cables de control) hacia los focos"
            ],
            "Tema 3: Uso profesional del Multímetro": [
                "3.1 Selección de escalas de medición de Voltaje (V~ y V-)",
                "3.2 Medición de continuidad para detectar cables rotos",
                "3.3 Comprobación de estado de baterías y fuentes de alimentación DC",
                "3.4 Uso de la pinza amperimétrica para medir consumo en vivo",
                "3.5 Diagnóstico de cortocircuitos sin riesgo eléctrico"
            ],
            "Tema 4: Tableros eléctricos, térmicos y seguridad": [
                "4.1 Componentes de un cuadro de distribución principal",
                "4.2 Selección y dimensionamiento de llaves termomagnéticas (Breakers)",
                "4.3 Instalación y funcionamiento de interruptores diferenciales (Salva-vidas)",
                "4.4 Balanceo básico de cargas entre circuitos de iluminación y tomacorrientes",
                "4.5 Aterrizaje correcto del tablero eléctrico"
            ]
        },
        "Módulo 2: Conectando Todo: Herramientas y Cableado": {
            "Tema 1: Calibres de cable AWG y capacidad": [
                "1.1 Tabla de equivalencias de calibres AWG a milímetros cuadrados",
                "1.2 Selección de cables para iluminación vs. tomacorrientes pesados",
                "1.3 Diferencia entre cable rígido, flexible y libre de halógenos",
                "1.4 Empalmes eléctricos seguros (Cola de rata, Western Union, Derivación)",
                "1.5 Aislamiento profesional con cinta 3M y tubo termorretráctil"
            ],
            "Tema 2: Pelacables, crimpadoras y terminales": [
                "2.1 Tipos de herramientas de corte y pelado automático",
                "2.2 Uso de terminales tubulares (Punteras) para cables flexibles",
                "2.3 Crimpeado de terminales tipo ojal y horquilla",
                "2.4 Conectores rápidos tipo Wago para uniones limpias",
                "2.5 Mantenimiento del filo y limpieza de herramientas de mano"
            ],
            "Tema 3: Interpretación de planos eléctricos": [
                "3.1 Simbología arquitectónica para iluminación y enchufes",
                "3.2 Lectura de diagramas unifilares",
                "3.3 Interpretación de cajas de paso y tuberías empotradas",
                "3.4 Modificación de planos existentes para añadir domótica",
                "3.5 Levantamiento rápido de croquis en el sitio del cliente"
            ],
            "Tema 4: Proyecto: Armado de circuitos básicos": [
                "4.1 Conexión de un foco simple con su interruptor",
                "4.2 Cableado de un tomacorriente doble con conexión a tierra",
                "4.3 Armado de un circuito en paralelo para múltiples lámparas",
                "4.4 Conexión de un conmutador manual (sistema de escalera)",
                "4.5 Pruebas de encendido seguro con el multímetro en mano"
            ]
        },
        "Módulo 3: Magia en tu Casa: Dispositivos Comerciales": {
            "Tema 1: Focos inteligentes y Enchufes Wi-Fi": [
                "1.1 Tipos de roscas y formatos de focos Smart (E27, GU10, Dicroicos)",
                "1.2 Modos de emparejamiento (AP Mode vs EZ Mode)",
                "1.3 Control de atenuación (Dimmer) y rango de colores RGB",
                "1.4 Límite de amperaje en enchufes Smart para electrodomésticos",
                "1.5 Medición de consumo eléctrico a través del enchufe inteligente"
            ],
            "Tema 2: Apps Tuya Smart y Smart Life": [
                "2.1 Creación de cuenta y gestión de Hogares y Habitaciones",
                "2.2 Agrupación de múltiples focos para control unificado",
                "2.3 Compartir el control de la casa con miembros de la familia",
                "2.4 Actualización de firmware de los dispositivos IoT",
                "2.5 Resolución de problemas de sincronización en la App"
            ],
            "Tema 3: Creación de escenas por horario": [
                "3.1 Diferencia entre Tap to Run (Toque para ejecutar) y Automatizaciones",
                "3.2 Programación de temporizadores (Timers) y cuentas regresivas",
                "3.3 Creación de rutinas de simulación de presencia por seguridad",
                "3.4 Encendido al atardecer utilizando datos meteorológicos del celular",
                "3.5 Conflictos de horarios y cómo depurar escenas cruzadas"
            ],
            "Tema 4: Límites de los sistemas comerciales": [
                "4.1 Retraso (Latencia) provocado por servidores en la nube",
                "4.2 Dependencia absoluta del servicio de Internet del proveedor",
                "4.3 Falta de interoperabilidad entre marcas cerradas",
                "4.4 Problemas de privacidad en nubes públicas",
                "4.5 Limitaciones en la cantidad máxima de dispositivos por router"
            ]
        },
        "Módulo 4: La Base del Hogar Smart: Redes Wi-Fi Estables": {
            "Tema 1: Saturación de routers caseros": [
                "1.1 Cómo identificar el número máximo de conexiones de un router de operadora",
                "1.2 Interferencia de canales Wi-Fi en la banda de 2.4 GHz",
                "1.3 Uso de apps analizadoras de Wi-Fi para medir señal en dBm",
                "1.4 Diferencia crucial entre redes de 2.4 GHz (alcance) y 5 GHz (velocidad)",
                "1.5 Configuración del router para separar ambas redes"
            ],
            "Tema 2: Redes Mesh vs Repetidores": [
                "2.1 Problema de corte de conexión al pasar de un repetidor a otro",
                "2.2 Arquitectura y ventaja del Roaming sin cortes en sistemas Mesh",
                "2.3 Posicionamiento estratégico de nodos Mesh en la casa",
                "2.4 Backhaul cableado vs inalámbrico para interconectar los nodos",
                "2.5 Configuración base de un sistema TP-Link Deco o similar"
            ],
            "Tema 3: Asignación estática de IPs": [
                "3.1 Qué es el DHCP y por qué cambia las direcciones de los equipos",
                "3.2 Identificación de la dirección MAC de un dispositivo IoT",
                "3.3 Reserva de direcciones IP desde el panel del router",
                "3.4 Solución a conflictos de IP duplicadas en la red local",
                "3.5 Segmentación en redes para invitados por seguridad"
            ],
            "Tema 4: Diagnóstico de caídas de red": [
                "4.1 Uso del comando Ping para detectar pérdidas de paquetes",
                "4.2 Reinicio secuencial correcto (Modem, Router, Dispositivos)",
                "4.3 Identificación de cuellos de botella en la conexión a internet",
                "4.4 Verificación física de cables de red UTP sulfatados o dañados",
                "4.5 Prácticas para evitar la interferencia de microondas o muros gruesos"
            ]
        },
        "Módulo 5: Diseño de Interfaz y Control de Usuario": {
            "Tema 1: Ergonomía en Smart Homes": [
                "1.1 Experiencia del usuario (UX) en aplicaciones",
                "1.2 Interfaces accesibles para todo público",
                "1.3 Controles físicos vs digitales",
                "1.4 Feedback visual y auditivo de las aplicaciones",
                "1.5 Reducción de la curva de aprendizaje del cliente"
            ],
            "Tema 2: Creación de Paneles Centralizados": [
                "2.1 Agrupación de dispositivos por zonas en apps nativas",
                "2.2 Creación de accesos directos (Widgets) en el inicio del celular",
                "2.3 Organización visual jerárquica de cámaras y luces",
                "2.4 Uso de tablets genéricas como centro de control de pared",
                "2.5 Modos oscuro y claro para control nocturno"
            ],
            "Tema 3: Aplicaciones móviles y Alertas": [
                "3.1 Introducción al uso de lógicas condicionales simples (IFTTT)",
                "3.2 Configuración de notificaciones Push críticas",
                "3.3 Enrutamiento de alertas de seguridad",
                "3.4 Geofencing nativo desde el smartphone",
                "3.5 Compartir permisos y gestión de la familia en la App"
            ],
            "Tema 4: Comandos de voz avanzados": [
                "4.1 Rutas lógicas de voz claras para los usuarios",
                "4.2 Manejo de errores y comandos incomprendidos",
                "4.3 Sinónimos y renombramiento táctico de equipos",
                "4.4 Integración de atajos de voz en el celular",
                "4.5 Procesamiento de lenguaje natural básico"
            ]
        }
    },
    "Semestre 2: Nivel Técnico Auxiliar - Domótica Aplicada: Climatización, Luces y Cortinas": {
        "Módulo 1: Módulos Ocultos: Inteligencia detrás del Interruptor": {
            "Tema 1: Relés sin neutro (Sonoff Mini / Shelly)": [
                "1.1 Explicación de por qué las cajas antiguas no tienen cable neutro",
                "1.2 Principio de funcionamiento y cableado de relés No Neutral",
                "1.3 Uso e instalación obligatoria del condensador bypass en focos LED",
                "1.4 Proceso de emparejamiento oculto mediante pulsaciones",
                "1.5 Instalación física dentro de chalupas (cajas rectangulares) estrechas"
            ],
            "Tema 2: Manteniendo el interruptor físico de pared": [
                "2.1 Configuración de terminales S1 y S2 en el relé inteligente",
                "2.2 Tipos de interruptores (Pulsador vs Tecla tradicional)",
                "2.3 Cambio del modo de operación del relé desde la App según el botón",
                "2.4 Solución al problema de parpadeos (Flickering) de las luces",
                "2.5 Independencia del botón físico en caso de caída del Wi-Fi"
            ],
            "Tema 3: Conmutadores (Escaleras) inteligentes": [
                "3.1 Diagrama lógico de una conmutación manual tradicional",
                "3.2 Inserción del módulo inteligente al inicio o al final del circuito",
                "3.3 Identificación de los cables viajeros entre los dos interruptores",
                "3.4 Pruebas de encendido desde App, Interruptor A e Interruptor B",
                "3.5 Automatización de luces de pasillo o escalera con sensores de paso"
            ],
            "Tema 4: Prevención de sobrecargas": [
                "4.1 Cálculo de carga total en un solo relé oculto",
                "4.2 Diferencia entre cargas resistivas (focos) e inductivas (motores)",
                "4.3 Uso de contactores externos para proteger el módulo inteligente",
                "4.4 Inspección de calentamiento en cables detrás de la pared",
                "4.5 Configuración de límites de consumo y apagado de seguridad en la App"
            ]
        },
        "Módulo 2: Movimiento Automático: Cortinas y Persianas": {
            "Tema 1: Motores tubulares para persianas": [
                "1.1 Estructura interna y montaje de un motor dentro del tubo de la persiana",
                "1.2 Cálculo de fuerza en Newtons (Nm) según el peso de la tela",
                "1.3 Conexión de los 4 cables del motor (Tierra, Neutro, Subir, Bajar)",
                "1.4 Instalación de interruptores de persiana Smart Wi-Fi de pared",
                "1.5 Medidas de seguridad y topes mecánicos"
            ],
            "Tema 2: Motores de cadena para cortinas tradicionales": [
                "2.1 Tipos de engranajes para distintos grosores de cordón o cadena",
                "2.2 Fijación del motor a la pared y tensado correcto de la cuerda",
                "2.3 Alimentación del motor (Batería recargable vs Adaptador continuo)",
                "2.4 Emparejamiento con controles remotos RF de 433MHz",
                "2.5 Mantenimiento y lubricación del sistema de arrastre"
            ],
            "Tema 3: Calibración de límites": [
                "3.1 Ajuste del punto máximo de apertura (Límite superior)",
                "3.2 Ajuste del punto máximo de cierre (Límite inferior)",
                "3.3 Configuración de porcentajes de apertura precisos desde la App",
                "3.4 Inversión del giro del motor por errores de instalación física",
                "3.5 Reposicionamiento por estiramiento natural de las cadenas de plástico"
            ],
            "Tema 4: Integración al celular": [
                "4.1 Vinculación del módulo de persiana al sistema Smart Life / Tuya",
                "4.2 Rutina de Despertar: Apertura progresiva al amanecer",
                "4.3 Rutina de Aislamiento térmico: Cierre automático en horas de sol",
                "4.4 Control simultáneo de múltiples cortinas en la sala de estar",
                "4.5 Integración de la persiana en el escenario de Cine en casa"
            ]
        },
        "Módulo 3: Clima Perfecto: Termostatos y Eficiencia Energética": {
            "Tema 1: Termostatos Smart": [
                "1.1 Sustitución de termostatos analógicos de pared",
                "1.2 Cableado de control de encendido, ventilación y refrigeración",
                "1.3 Interfaz de usuario para programación semanal de temperaturas",
                "1.4 Bloqueo de teclado físico para lugares públicos o niños",
                "1.5 Análisis de gráficos de ahorro energético mensual"
            ],
            "Tema 2: Controladores IR para Aires Acondicionados": [
                "2.1 Posicionamiento en línea de visión para la señal infrarroja",
                "2.2 Clonación o aprendizaje de mandos a distancia antiguos",
                "2.3 Selección de la marca del aire acondicionado desde la base de datos",
                "2.4 Control de temperatura, velocidad del ventilador y modo",
                "2.5 Reemplazo de controles de televisores y decodificadores"
            ],
            "Tema 3: Sensores de temperatura y humedad": [
                "3.1 Diferencia entre sensores Wi-Fi y sensores Zigbee de bajo consumo",
                "3.2 Instalación estratégica para evitar lecturas falsas",
                "3.3 Lectura de gráficos históricos de temperatura en la aplicación",
                "3.4 Alertas de batería baja y reemplazo de pilas de botón",
                "3.5 Uso como gatilladores de acciones en el ecosistema domótico"
            ],
            "Tema 4: Automatización: Encender AC por temperatura": [
                "4.1 Creación de condicionales lógicos para control de encendido",
                "4.2 Lógica de apagado automático si la temperatura baja de un rango de confort",
                "4.3 Apagado automático del aire acondicionado por geolocalización",
                "4.4 Automatización vinculada a estado de ventanas abiertas o cerradas",
                "4.5 Enfoque de venta para ahorro eléctrico en casas y negocios"
            ]
        },
        "Módulo 4: Tu Voz es el Control: Integración con Alexa": {
            "Tema 1: Configuración de Amazon Alexa / Google Home": [
                "1.1 Descarga, registro y vinculación de cuenta madre",
                "1.2 Instalación de Skills para enlazar Tuya, Sonoff, etc.",
                "1.3 Descubrimiento de nuevos dispositivos por la red",
                "1.4 Organización de dispositivos en Grupos o salas",
                "1.5 Renombramiento fonético para evitar confusiones de escucha"
            ],
            "Tema 2: Uso de parlantes inteligentes (Echo Dot)": [
                "2.1 Conexión a la red Wi-Fi y posicionamiento para captura de micrófonos",
                "2.2 Interpretación de los colores del anillo de luz del dispositivo",
                "2.3 Uso de comandos de intercomunicador (Drop In) entre habitaciones",
                "2.4 Conexión bluetooth a sistemas de audio externos",
                "2.5 Configuración de perfiles de voz para reconocer miembros de la familia"
            ],
            "Tema 3: Creación de rutinas complejas": [
                "3.1 Programación del comando Buenas noches y cierre de puertas",
                "3.2 Configuración de retrasos (Wait) entre una acción y otra",
                "3.3 Emisión de respuestas personalizadas por voz del asistente",
                "3.4 Uso de botones físicos o sensores de puerta como activadores de rutina",
                "3.5 Creación de rutinas musicales vinculadas a la iluminación"
            ],
            "Tema 4: Troubleshooting de nube": [
                "4.1 Qué hacer cuando el asistente dice El dispositivo no responde",
                "4.2 Desvinculación y re-vinculación de Skills caídas",
                "4.3 Actualización forzada del dispositivo inteligente",
                "4.4 Gestión de redes Wi-Fi guardadas en la cuenta",
                "4.5 Prácticas de privacidad y borrado del historial de grabaciones de voz"
            ]
        },
        "Módulo 5: Mantenimiento y Diagnóstico de Sistemas": {
            "Tema 1: Herramientas de diagnóstico": [
                "1.1 Multímetro digital avanzado",
                "1.2 Osciloscopio básico",
                "1.3 Comprobadores de red",
                "1.4 Analizadores lógicos",
                "1.5 Herramientas de software"
            ],
            "Tema 2: Detección de fallos en sensores": [
                "2.1 Calibración de sensores",
                "2.2 Identificación de lecturas falsas",
                "2.3 Interferencias eléctricas",
                "2.4 Desgaste de componentes",
                "2.5 Reemplazo preventivo"
            ],
            "Tema 3: Solución de problemas de red": [
                "3.1 Análisis de cobertura Wi-Fi",
                "3.2 Interferencias de RF",
                "3.3 Reinicios automáticos de routers",
                "3.4 Conflictos de IP",
                "3.5 Monitoreo de latencia"
            ],
            "Tema 4: Planes de mantenimiento": [
                "4.1 Rutinas de revisión mensual",
                "4.2 Actualización segura de firmware",
                "4.3 Limpieza de hardware",
                "4.4 Respaldos de configuración",
                "4.5 Soporte remoto a clientes"
            ]
        }
    },
    "Semestre 3: Nivel Técnico Medio I - Seguridad, Chapas y Portones Automáticos": {
        "Módulo 1: Alexa, abre la puerta: Cerraduras Inteligentes": {
            "Tema 1: Cerraduras con Huella y PIN": [
                "1.1 Registro de huellas digitales de administrador y usuarios comunes",
                "1.2 Generación de códigos PIN temporales para visitas o Airbnb",
                "1.3 Desbloqueo mediante tarjetas RFID y llaves físicas de emergencia",
                "1.4 Uso de la aplicación por Bluetooth vs Gateway Wi-Fi",
                "1.5 Registro e historial detallado de aperturas"
            ],
            "Tema 2: Comando de voz y PIN de seguridad": [
                "2.1 Habilitación del desbloqueo por voz en la app de Alexa",
                "2.2 Configuración del PIN verbal obligatorio de seguridad",
                "2.3 Vinculación de la chapa inteligente a rutinas de cierre nocturno",
                "2.4 Prevención de apertura accidental desde el exterior por voz alta",
                "2.5 Configuración de bloqueo automático temporizado tras cerrar"
            ],
            "Tema 3: Instalación física en puertas": [
                "3.1 Toma de medidas: Backset y espesor de la puerta",
                "3.2 Uso de plantillas de perforación para puertas de madera y metal",
                "3.3 Instalación de la caja embutida (Mortise) y aseguramiento de pestillos",
                "3.4 Conexión del cable de datos entre el panel frontal y trasero",
                "3.5 Pruebas mecánicas de giro de manija sin trabas"
            ],
            "Tema 4: Mantenimiento de baterías": [
                "4.1 Uso de pilas alcalinas vs baterías de litio recargables",
                "4.2 Alertas tempranas de batería baja enviadas al celular",
                "4.3 Métodos de apertura de emergencia externa con Power Bank USB",
                "4.4 Limpieza del sensor biométrico de huellas dactilares",
                "4.5 Lubricación con grafito en seco del bombín de la llave física"
            ]
        },
        "Módulo 2: Acceso Vehicular: Portones Automáticos para Negocios": {
            "Tema 1: Motores corredizos y basculantes": [
                "1.1 Identificación de la placa de control electrónica del motor",
                "1.2 Localización de las borneras de pulso (Botón / Botoeira / GND)",
                "1.3 Límites de carrera magnéticos y mecánicos",
                "1.4 Conexión de fotocélulas de seguridad anticaída/aplastamiento",
                "1.5 Programación rápida de controles remotos RF al motor"
            ],
            "Tema 2: Conexión de relés de contacto seco (Sonoff SV)": [
                "2.1 Qué es el Contacto Seco y por qué es vital para no quemar el portón",
                "2.2 Modificación de soldaduras en placas para aislar la carga",
                "2.3 Alimentación del módulo inteligente desde la propia placa del motor",
                "2.4 Configuración del módulo en modo Pulsador/Inching",
                "2.5 Cableado directo desde el relé hasta los bornes de apertura manual"
            ],
            "Tema 3: Sensores magnéticos de estado": [
                "3.1 Problema de abrir a ciegas y confirmación de estado cerrado",
                "3.2 Instalación de sensores magnéticos cableados o inalámbricos",
                "3.3 Configuración en la App para notificación de estado Abierto/Cerrado",
                "3.4 Creación de alerta de seguridad temporal",
                "3.5 Calibración física de imanes para evitar falsas alertas"
            ],
            "Tema 4: Cierre por geolocalización": [
                "4.1 Permisos de ubicación en segundo plano del celular",
                "4.2 Configuración de geocerca (Geofencing) en un radio de 100 metros",
                "4.3 Apertura automática del portón al acercarse el vehículo",
                "4.4 Cierre automático de seguridad al abandonar el perímetro",
                "4.5 Depuración de problemas de retraso del GPS del teléfono"
            ]
        },
        "Módulo 3: ¿Quién toca?: Videoporteros IP": {
            "Tema 1: Timbres inteligentes con cámara": [
                "1.1 Ángulos de visión (FOV) y resolución de video",
                "1.2 Visión nocturna infrarroja para reconocimiento facial",
                "1.3 Audio bidireccional para intercomunicación remota",
                "1.4 Zonas de detección de movimiento selectivas",
                "1.5 Uso y vinculación de las campanas receptoras inalámbricas en casa"
            ],
            "Tema 2: Cableado UTP PoE vs Wi-Fi": [
                "2.1 Limitaciones e intermitencias de usar timbres por Wi-Fi",
                "2.2 Concepto de Power over Ethernet (PoE) para datos y energía",
                "2.3 Crimpeado de conectores RJ45 para el videoportero",
                "2.4 Instalación de Switches PoE para alimentar múltiples dispositivos",
                "2.5 Resistencia a la intemperie (Certificaciones IP65/IP67)"
            ],
            "Tema 3: Recepción de llamadas al celular": [
                "3.1 Manejo de notificaciones Push enriquecidas con imagen",
                "3.2 Contestación de llamada en tiempo real a través de la app",
                "3.3 Visualización de cámara a través de pantallas inteligentes",
                "3.4 Grabación de clips de video de visitantes en tarjeta MicroSD",
                "3.5 Suscripciones a grabación en la nube (Opcional/Gratuito)"
            ],
            "Tema 4: Apertura remota de chapa eléctrica": [
                "4.1 Diferencia entre chapas electromagnéticas, hembrillas y de sobreponer",
                "4.2 Uso de relés intermedios integrados en el videoportero",
                "4.3 Alimentación separada de 12V para evitar sobrecargar el timbre",
                "4.4 Configuración del botón de desbloqueo en la interfaz de la App",
                "4.5 Instalación de botones de salida física (Push to Exit) en el interior"
            ]
        },
        "Módulo 4: Seguridad Comercial: Cámaras y Sirenas Wi-Fi": {
            "Tema 1: Cámaras motorizadas de interior y exterior": [
                "1.1 Control de paneo, inclinación y zoom (PTZ) desde el móvil",
                "1.2 Función de seguimiento humano inteligente (Auto-tracking)",
                "1.3 Formateo y cálculo de días de grabación continua en memoria SD",
                "1.4 Compresión de video H.265 para ahorrar ancho de banda",
                "1.5 Protocolo ONVIF para enlazar la cámara a grabadores NVR"
            ],
            "Tema 2: Sensores de apertura e intrusión": [
                "2.1 Sensores de movimiento PIR: Posicionamiento para evitar mascotas",
                "2.2 Sensores magnéticos en puertas, cortinas metálicas y ventanas",
                "2.3 Configuración de estado Armado y Desarmado en la aplicación",
                "2.4 Notificaciones críticas al celular burlando el modo silencio",
                "2.5 Historial de eventos y registro de paso de personal"
            ],
            "Tema 3: Integración de luces de emergencia": [
                "3.1 Vinculación del sensor de movimiento al encendido de luces exteriores",
                "3.2 Parpadeo de focos inteligentes a color rojo en caso de alarma",
                "3.3 Automatización de simulación de presencia policial",
                "3.4 Encendido total de la planta baja ante detección de intrusos",
                "3.5 Apagado de la emergencia tras introducir el PIN de seguridad"
            ],
            "Tema 4: Proyecto: Sirena disuasiva Smart para locales comerciales": [
                "4.1 Elección de sirenas cableadas de 110dB / 12V",
                "4.2 Armado de la sirena controlada por un enchufe o relé inteligente",
                "4.3 Configuración de activación simultánea con los sensores de intrusión",
                "4.4 Creación de un Botón de Pánico inalámbrico o virtual",
                "4.5 Prueba general del sistema disuasivo para entregar al cliente"
            ]
        },
        "Módulo 5: Domótica Aplicada a Entornos Agro-Comerciales": {
            "Tema 1: Automatización de Riego Inteligente": [
                "1.1 Válvulas solenoides (12V/24V) y contactores",
                "1.2 Sensores de humedad de suelo y detección de lluvia",
                "1.3 Integración de datos meteorológicos locales",
                "1.4 Temporizadores para optimización del uso de agua",
                "1.5 Control a distancia de bombas de agua periféricas"
            ],
            "Tema 2: Monitoreo de Clima en Almacenes y Silos": [
                "2.1 Control térmico estricto para granos y productos agrícolas",
                "2.2 Automatización de extractores de aire industriales",
                "2.3 Alertas tempranas al celular por sobrecalentamiento",
                "2.4 Historial de datos térmicos exportables",
                "2.5 Sistemas de respaldo de energía (UPS) para sensores críticos"
            ],
            "Tema 3: Iluminación de Galpones y Perímetros": [
                "3.1 Controladores de alta potencia para reflectores LED",
                "3.2 Sensores de movimiento de largo alcance (Microondas vs PIR)",
                "3.3 Fotocélulas industriales para encendido nocturno",
                "3.4 Simulación de actividad en galpones vacíos",
                "3.5 Zonificación del alumbrado por sectores estratégicos"
            ],
            "Tema 4: Sistemas de Alarma Comunitaria": [
                "4.1 Sirenas disuasivas de alta potencia",
                "4.2 Activación remota mediante controles RF 433MHz de largo alcance",
                "4.3 Botones de pánico virtuales compartidos entre vecinos",
                "4.4 Notificaciones push simultáneas a grupos de seguridad",
                "4.5 Protocolos de mantenimiento y pruebas del sistema"
            ]
        }
    },
    "Semestre 4: Nivel Técnico Medio II - Crea tu propia Domótica con ESP32": {
        "Módulo 1: El Cerebro del Maker: Arduino y ESP32": {
            "Tema 1: Uso de Protoboard, LEDs y botones": [
                "1.1 Entendimiento de las líneas de conexión de una placa de pruebas",
                "1.2 Cálculo e inserción de resistencias para proteger LEDs",
                "1.3 Configuración de circuitos Pull-up y Pull-down para botones",
                "1.4 Principio de la señal digital (1 y 0 / HIGH y LOW)",
                "1.5 Señales analógicas (PWM) para controlar la intensidad de brillo"
            ],
            "Tema 2: Introducción a las placas ESP32": [
                "2.1 Diferencia de poder y características frente al Arduino UNO clásico",
                "2.2 Identificación de los pines de entrada, salida y alimentación",
                "2.3 Entendimiento del módulo de radiofrecuencia integrado",
                "2.4 Regulación de voltaje y uso exclusivo de lógica a 3.3v",
                "2.5 Cuidados antiestática al manipular el microcontrolador"
            ],
            "Tema 3: Lógica en C++ / IDE de Arduino": [
                "3.1 Instalación y preparación del entorno Arduino IDE para placas ESP32",
                "3.2 Estructura fundamental del código: Funciones setup() y loop()",
                "3.3 Declaración de pines usando pinMode, digitalWrite y digitalRead",
                "3.4 Uso del Monitor Serie para depurar e imprimir mensajes",
                "3.5 Manejo básico de variables, arreglos lógicos y condicionales"
            ],
            "Tema 4: Subida de código a la placa": [
                "4.1 Instalación de drivers UART para la detección USB",
                "4.2 Selección correcta del puerto COM y modelo de placa en el software",
                "4.3 Solución al problema común del botón BOOT durante la compilación",
                "4.4 Lectura de errores de sintaxis comunes en la consola",
                "4.5 Verificación física del parpadeo del LED integrado"
            ]
        },
        "Módulo 2: Domótica a Medida: Control de Relés Múltiples y Presentación": {
            "Tema 1: Lectura de sensores físicos al ESP32": [
                "1.1 Conexión y lectura del sensor de temperatura y humedad",
                "1.2 Conversión de señales analógicas a rangos porcentuales",
                "1.3 Uso de sensores de presencia (PIR) conectados directamente al ESP32",
                "1.4 Lógica de código (debouncing) para leer botones de forma limpia",
                "1.5 Visualización continua de los datos sensados a través del puerto serie"
            ],
            "Tema 2: Módulos de relés de 8 canales para automatización centralizada": [
                "2.1 Alimentación separada y segura usando técnica de optoacoplamiento",
                "2.2 Cableado físico de cargas 220v al bloque de relés",
                "2.3 Lógica inversa (Active-Low) típica en la programación",
                "2.4 Creación de arrays en el código para el control secuencial",
                "2.5 Uso práctico: Control centralizado de toda la iluminación de un salón"
            ],
            "Tema 3: Elaboración de diagramas de conexión y cableado": [
                "3.1 Uso de software para diseñar diagramas esquemáticos",
                "3.2 Representación clara de fuentes de alimentación separadas",
                "3.3 Elaboración de código de colores normativo para planos a presentar",
                "3.4 Cálculo de amperajes totales del cuadro armado para evitar daños",
                "3.5 Etiquetado técnico y estructuración del cableado"
            ],
            "Tema 4: Servidor Web interno e integración local": [
                "4.1 Inclusión de librerías Wi-Fi y conexión del ESP32 al router",
                "4.2 Programación de un servidor web asíncrono levantado por la placa",
                "4.3 Generación de interfaz en HTML/CSS servida por el ESP32 con 8 botones",
                "4.4 Recepción y procesamiento de peticiones GET para control de relés",
                "4.5 Estructuración de guion de presentación profesional de la red"
            ]
        },
        "Módulo 3: Independencia Total: Servidores Locales (Home Assistant)": {
            "Tema 1: El problema de depender del Internet": [
                "1.1 Retrasos en la ejecución por ida y vuelta a servidores externos",
                "1.2 Pérdida total del control del hogar ante caída de internet",
                "1.3 Exposición de datos personales y grabaciones en la nube",
                "1.4 Significado y valor del concepto Local First en domótica avanzada",
                "1.5 Ventajas de un procesador dedicado permanentemente encendido"
            ],
            "Tema 2: Instalación de Home Assistant": [
                "2.1 Flasheo del sistema operativo en tarjetas de memoria o SSD",
                "2.2 Arranque del sistema utilizando alternativas económicas",
                "2.3 Configuración inicial, creación de usuario y descubrimiento de red",
                "2.4 Exploración de la interfaz de usuario general y barra de herramientas",
                "2.5 Gestión y actualización del Core del sistema"
            ],
            "Tema 3: Protocolos locales: MQTT, Zigbee": [
                "3.1 Arquitectura de mensajería MQTT para ESP32",
                "3.2 Diferencia entre redes Wi-Fi saturables y mallas Zigbee especializadas",
                "3.3 Integración de antenas físicas tipo Sonoff Zigbee Dongle al servidor",
                "3.4 Emparejamiento local de sensores de batería sin servidores externos",
                "3.5 Creación de automatizaciones instantáneas entre sensor Zigbee y Relé"
            ],
            "Tema 4: Dashboards interactivos 3D": [
                "4.1 Estructuración del panel Lovelace de Home Assistant",
                "4.2 Creación de tarjetas de control con íconos personalizados",
                "4.3 Generación de vistas de planos de la casa como imágenes de fondo",
                "4.4 Colocación de botones interactivos sobre la imagen arquitectónica",
                "4.5 Visualización responsiva para tabletas empotradas en pared"
            ]
        },
        "Módulo 4: Proyecto Final: La Casa del Futuro": {
            "Tema 1: Presupuesto residencial completo": [
                "1.1 Levantamiento de requerimientos de hardware para domótica",
                "1.2 Cotización de materiales eléctricos extra",
                "1.3 Cálculo de horas-hombre de instalación física y programación",
                "1.4 Estructuración de la propuesta comercial formal para el cliente",
                "1.5 Análisis de márgenes de ganancia"
            ],
            "Tema 2: Integración de todos los sistemas aprendidos": [
                "2.1 Fusión de Alexa, panel ESP32, portones y cámaras",
                "2.2 Programación de lógicas complejas cruzadas entre sistemas",
                "2.3 Puesta en marcha de copias de seguridad de las configuraciones",
                "2.4 Depuración cruzada de red y solución de conflictos de IP final",
                "2.5 Creación de perfiles limitados para invitados o niños en la tablet"
            ],
            "Tema 3: Instalación física, pruebas y guion de presentación": [
                "3.1 Fijación definitiva de hardware en maquetas o entorno real",
                "3.2 Prueba de estrés de consumo eléctrico y caída de red fingida",
                "3.3 Verificación de seguridad y recuperación del sistema tras corte",
                "3.4 Refinamiento final del guion técnico para la presentación al tribunal",
                "3.5 Ensayo del recorrido de la demostración en vivo de los comandos"
            ],
            "Tema 4: Entrega oficial": [
                "4.1 Transferencia de administración, cuentas y manuales de usuario",
                "4.2 Demostración práctica al propietario sobre reinicio del servidor",
                "4.3 Firma de conformidad de funcionamiento",
                "4.4 Acuerdos de mantenimiento técnico semestral y garantía",
                "4.5 Celebración final y certificación de competencia"
            ]
        },
        "Módulo 5: Innovaciones y Tendencias en Domótica": {
            "Tema 1: Estándar Matter": [
                "1.1 Qué es Matter y sus fundamentos operativos",
                "1.2 Interoperabilidad garantizada entre diferentes marcas",
                "1.3 Configuración y unificación de dispositivos Matter",
                "1.4 El rol de Thread en la topología de red moderna",
                "1.5 Transición práctica desde ecosistemas Zigbee heredados"
            ],
            "Tema 2: Inteligencia Artificial predictiva": [
                "2.1 Hogares que aprenden y adaptan rutinas automáticamente",
                "2.2 Ajuste automático de climatización según el comportamiento",
                "2.3 Optimización de energía y reducción de costos por IA",
                "2.4 Reconocimiento facial biométrico para acceso avanzado",
                "2.5 Asistentes virtuales proactivos y contextuales"
            ],
            "Tema 3: Domótica sostenible": [
                "3.1 Integración de control con paneles solares residenciales",
                "3.2 Gestión inteligente del almacenamiento en baterías",
                "3.3 Recolección de agua de lluvia automatizada para exteriores",
                "3.4 Selección de materiales ecológicos en instalaciones",
                "3.5 Certificaciones energéticas y LEED para inmuebles domotizados"
            ],
            "Tema 4: El futuro del Smart Home": [
                "4.1 Robótica doméstica y asistentes físicos",
                "4.2 Realidad aumentada para control e interfaces espaciales",
                "4.3 Computación espacial e inmersión domótica",
                "4.4 Integración y carga inteligente con vehículos eléctricos",
                "4.5 Evolución hacia Ciudades Inteligentes (Smart Cities)"
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
