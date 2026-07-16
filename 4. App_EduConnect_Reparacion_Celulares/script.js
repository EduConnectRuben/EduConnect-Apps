// EduConnectRuben - Lógica de Interfaz y Generación de Prompts

const mallaCurricular = {
    "Semestre 1: Nivel Técnico Básico - Anatomía y Cuidados del Dispositivo": {
        "Módulo 1: Anatomía Móvil: Desarmando Celulares y Tablets": {
            "Tema 1: Componentes principales (Placa, Flex, Antenas).": [
                "1.1 Identificación visual de la Placa Base (Motherboard) y submódulos de carga.",
                "1.2 Función y fragilidad de los cables Flex (Pantalla, interconexión, encendido).",
                "1.3 Localización de antenas coaxiales de red y Wi-Fi.",
                "1.4 Identificación de cámaras, sensores de proximidad y vibradores.",
                "1.5 Tornillería móvil: Organización y mapeo magnético para evitar perforaciones de placa."
            ],
            "Tema 2: Uso correcto de la Estación de calor y cautín.": [
                "2.1 Configuración de temperatura y flujo de aire según el trabajo.",
                "2.2 Mantenimiento y estañado de las puntas del cautín.",
                "2.3 Técnicas de movimiento constante de la boquilla de calor para no quemar plásticos.",
                "2.4 Uso de flux para facilitar la fundición del estaño.",
                "2.5 Limpieza de residuos con alcohol isopropílico y cepillos antiestáticos."
            ],
            "Tema 3: Desensamble seguro (Uso de plancha de calor y ventosas).": [
                "3.1 Despegado seguro de tapas traseras de cristal (Samsung, Xiaomi, Motorola).",
                "3.2 Apertura por el marco sin dañar flexores laterales (Tecno, Infinix).",
                "3.3 Uso de la plancha separadora a 80°C - 90°C.",
                "3.4 Inserción de láminas plásticas (Radiografías o cartas) e hilos de molibdeno.",
                "3.5 Cuidado extremo con los flexores de huella dactilar traseros."
            ],
            "Tema 4: Diagnóstico inicial y recepción del equipo.": [
                "4.1 Entrevista al cliente: Escuchar el historial del fallo.",
                "4.2 Prueba rápida de funciones (Táctil, cámaras, audio, carga) antes de abrir.",
                "4.3 Revisión de sellos de humedad internos (Testigos de agua).",
                "4.4 Detección visual de golpes en el chasis que puedan quebrar pantallas nuevas.",
                "4.5 Elaboración de la boleta de ingreso y entrega del comprobante."
            ]
        },
        "Módulo 2: El Toque Perfecto: Cambio de Pantallas y Táctiles": {
            "Tema 1: Diferencias entre pantallas (LCD, OLED, AMOLED).": [
                "1.1 Funcionamiento de la retroiluminación (Backlight) en pantallas LCD/IPS.",
                "1.2 Ventajas del píxel autoiluminado en OLED y AMOLED.",
                "1.3 Reconocimiento físico de calidades en repuestos (Incell, OLED genérico, Original).",
                "1.4 Riesgos de instalar pantallas gruesas (Incell) en marcos delgados.",
                "1.5 Prueba de funcionamiento de la pantalla \"al aire\" antes de pegar."
            ],
            "Tema 2: Pegamentos profesionales (B7000, T7000, UV).": [
                "2.1 Diferencia de viscosidad y color (Transparente B7000 vs Negro T7000).",
                "2.2 Limpieza exhaustiva del marco antiguo con espátulas y removedor químico.",
                "2.3 Aplicación de cordones finos y uniformes de pegamento.",
                "2.4 Uso de lámparas y pegamento UV (LOCA) para curado rápido de cristales.",
                "2.5 Tiempos de secado recomendados y uso de prensas/ligas de sujeción."
            ],
            "Tema 3: Cambio seguro de pantallas completas.": [
                "3.1 Retiro de esquirlas de vidrio de pantallas estalladas con cinta adhesiva.",
                "3.2 Traspaso de rejillas cubre-polvo del auricular a la pantalla nueva.",
                "3.3 Acomodo de los flexores para evitar dobleces excesivos.",
                "3.4 Técnicas de encaje a presión suave sin quebrar las esquinas.",
                "3.5 Retiro de plásticos protectores y sellos de garantía (Solo tras probar)."
            ],
            "Tema 4: Errores comunes al pegar (Manchas, toques fantasma).": [
                "4.1 Por qué ocurren los toques fantasma (Falta de aislamiento en flex).",
                "4.2 Prevención de manchas blancas por exceso de presión o pegamento en el backlight.",
                "4.3 Solución a pantallas que se despegan a los pocos días.",
                "4.4 Cuidado de no obstruir el sensor de proximidad (Evita apagados en llamadas).",
                "4.5 Revisión final del nivelado de la pantalla con el chasis."
            ]
        },
        "Módulo 3: Energía y Baterías": {
            "Tema 1: Identificación de baterías infladas o degradadas.": [
                "1.1 Causas químicas del abombamiento (Gases por sobrecalentamiento).",
                "1.2 Riesgos de explosión y manejo seguro en el taller.",
                "1.3 Lectura de ciclos de carga y salud de batería por software (donde aplique).",
                "1.4 Identificación de falsos contactos en el conector FPC de la batería.",
                "1.5 Síntomas de degradación: Apagados repentinos en 30% o reinicios."
            ],
            "Tema 2: Cambio seguro de baterías integradas.": [
                "2.1 Desactivación térmica del adhesivo doble cara (Uso de plancha).",
                "2.2 Extracción de tiras de pegamento mágico (Pull tabs) sin romperlas.",
                "2.3 Peligro absoluto de apalancar con herramientas metálicas puntiagudas.",
                "2.4 Instalación de nueva cinta doble cara automotriz para evitar vibraciones.",
                "2.5 Calibración básica: Carga al 100% y descarga completa tras el cambio."
            ],
            "Tema 3: Uso del multímetro para medir voltaje de batería.": [
                "3.1 Selección de la escala de Voltaje Continuo (20V DC).",
                "3.2 Medición directa en los polos positivo y negativo del flex.",
                "3.3 Identificación del voltaje mínimo de encendido (Típicamente 3.7V - 3.8V).",
                "3.4 Identificación del voltaje de batería completamente descargada (Menor a 3.5V).",
                "3.5 Descarte rápido: ¿Es la placa o es la batería?"
            ],
            "Tema 4: Reactivación de baterías 'muertas'.": [
                "4.1 Por qué el celular no reconoce una batería en 0% (Protección BMS).",
                "4.2 Uso de placas de reactivación rápida.",
                "4.3 Carga directa de los polos usando la fuente de alimentación a 4.2V.",
                "4.4 Tiempos de inyección (Pulsos) para no estresar las celdas de litio.",
                "4.5 Medición de recuperación de voltaje hasta alcanzar los 3.7V de umbral."
            ]
        },
        "Módulo 4: Periféricos: Cámaras y Parlantes": {
            "Tema 1: Diagnóstico de cámaras borrosas o sin enfoque.": [
                "1.1 Limpieza de lentes externos vs limpieza del módulo interno.",
                "1.2 Identificación de falla en el estabilizador óptico (OIS) por vibraciones (Ej: Motos).",
                "1.3 Reconocimiento de fallas de software vs fallas de hardware en la cámara.",
                "1.4 El problema de \"Cámara detenida\" y desconexión física.",
                "1.5 Prueba del enfoque automático acercando objetos a distintas distancias."
            ],
            "Tema 2: Cambio de módulo de cámaras.": [
                "2.1 Desconexión segura de los flexores de cámara sin dañar conectores FPC.",
                "2.2 Manipulación por los bordes para no ensuciar el sensor de imagen.",
                "2.3 Reemplazo de cristales de cámara trasera rotos sin abrir el equipo.",
                "2.4 Sellado de cámaras contra entrada de polvo post-reparación.",
                "2.5 Prueba de grabación de video y captura de audio simultánea."
            ],
            "Tema 3: Limpieza y cambio de parlantes / micrófonos.": [
                "3.1 Extracción de limaduras de hierro del altavoz (Buzzer) con imanes o masilla.",
                "3.2 Limpieza de mallas de protección acústica tapadas con suciedad.",
                "3.3 Desoldado y soldado de micrófonos analógicos y digitales (SMD).",
                "3.4 Sustitución del módulo completo inferior (Lógica de carga + Micrófono).",
                "3.5 Pruebas de resistencia ohmica de la bobina del parlante con multímetro."
            ],
            "Tema 4: Solución de problemas de audio.": [
                "4.1 El equipo marca auriculares conectados (Modo auricular trabado).",
                "4.2 Falso contacto en los pines de resorte (Pogo pins) del altavoz.",
                "4.3 Saturación y distorsión: Cuando el parlante está reventado.",
                "4.4 Fallas en el micrófono durante llamadas vs micrófono en WhatsApp.",
                "4.5 Rastreo de humedad en la parte inferior del dispositivo."
            ]
        },
        "Módulo 5: Atención al Cliente y Diagnóstico Rápido": {
            "Tema 1: Recepción de equipos.": [
                "1.1 Entrevista inicial con el cliente.",
                "1.2 Revisión visual rápida.",
                "1.3 Formularios de ingreso.",
                "1.4 Fotografías de estado previo.",
                "1.5 Políticas de garantía."
            ],
            "Tema 2: Herramientas de diagnóstico software.": [
                "2.1 Modos de prueba (Test modes).",
                "2.2 Códigos USSD de diagnóstico.",
                "2.3 Uso de 3uTools (iOS).",
                "2.4 Software de diagnóstico Android.",
                "2.5 Lectura de logs de error."
            ],
            "Tema 3: Presupuestos express.": [
                "3.1 Estimación de costos de pantalla.",
                "3.2 Estimación de costos de batería.",
                "3.3 Cálculo de tiempos de entrega.",
                "3.4 Comunicación de riesgos al cliente.",
                "3.5 Aceptación del presupuesto."
            ],
            "Tema 4: Organización del taller y responsabilidad ecológica.": [
                "4.1 Gestión de inventario de repuestos.",
                "4.2 Etiquetado de equipos y almacenamiento de tornillos.",
                "4.3 Estaciones de trabajo limpias (ESD).",
                "4.4 Control de calidad post-reparación.",
                "4.5 Gestión ecológica: Desecho seguro de baterías infladas y pantallas rotas."
            ]
        }
    },
    "Semestre 2: Nivel Técnico Auxiliar - Microsoldadura y Reparación a Nivel Componente": {
        "Módulo 1: Cirugía Electrónica: Microsoldadura Básica": {
            "Tema 1: Técnicas de soldadura con estaño en pasta y flux.": [
                "1.1 Tipos de aleación de estaño (Sn/Pb) y sus puntos de fusión (138°C, 183°C).",
                "1.2 Aplicación correcta del Flux en gel para reducir tensión superficial.",
                "1.3 Soldadura por arrastre para hileras de conectores pequeños.",
                "1.4 Uso de la malla desoldadora (Goot Wick) para retirar estaño viejo.",
                "1.5 Creación de bolitas de soldadura (Bump) perfectas en las pistas."
            ],
            "Tema 2: Temperaturas correctas en la estación de calor.": [
                "2.1 Relación entre la boquilla y el área de calentamiento.",
                "2.2 Temperaturas seguras para no inflar o \"chicharrear\" la placa base.",
                "2.3 Uso de cinta térmica (Kapton o Aluminio) para proteger componentes vecinos.",
                "2.4 Movimiento en círculos para distribuir el estrés térmico.",
                "2.5 Enfriamiento natural (Prohibición de soplar para evitar soldaduras frías)."
            ],
            "Tema 3: Reemplazo de Pines de Carga (Micro USB y Tipo C).": [
                "3.1 Extracción del puerto dañado aplicando calor por debajo de la placa (si es posible).",
                "3.2 Preparación y estañado de las pistas de la placa y los pines del repuesto.",
                "3.3 Soldado de anclajes estructurales con cautín para resistencia mecánica.",
                "3.4 Fijación de las pistas de datos y VBUS (Voltaje).",
                "3.5 Prueba final de carga rápida y lectura de datos por USB en PC."
            ],
            "Tema 4: Reconstrucción de pistas voladas (Jumper).": [
                "4.1 Raspado del esmalte de la placa base (Máscara UV) para exponer el cobre.",
                "4.2 Uso de hilo de cobre esmaltado ultrafino (0.01mm a 0.02mm).",
                "4.3 Soldado del puente (Jumper) entre el componente y la línea cortada.",
                "4.4 Aislamiento y fijación del puente usando Máscara Curable UV verde.",
                "4.5 Verificación de continuidad en el hilo reconstruido."
            ]
        },
        "Módulo 2: Diagnóstico con Fuente de Alimentación": {
            "Tema 1: Uso de la fuente de alimentación DC regulable.": [
                "1.1 Configuración de voltaje (4.0V) y amperaje límite (2A a 3A).",
                "1.2 Conexión de cables pulpo (iBoot) a los conectores de batería de la placa.",
                "1.3 Diferencia entre la lectura de Voltaje (Fuerza) y Amperaje (Consumo).",
                "1.4 Identificación del comportamiento de un equipo sano al presionar el botón de encendido.",
                "1.5 Diagnóstico rápido: Consumo estático vs Consumo dinámico."
            ],
            "Tema 2: Detección de cortos totales y fugas de corriente.": [
                "2.1 El corto total: La fuente pita y el voltaje cae a 0V al conectar.",
                "2.2 La fuga (Corto secundario): Consumo bajo (ej. 0.050A) sin presionar el botón de encendido.",
                "2.3 Diferenciación entre falla de hardware (corto) y falla de software (Ciclo de amperaje).",
                "2.4 Método de las 4 puntas en multímetro para cortos (Teoría base).",
                "2.5 Peligros de inyectar voltaje sin regular el amperaje."
            ],
            "Tema 3: Inyección de voltaje y uso del rocín (Rosin flux).": [
                "3.1 Preparación del humo de resina (Rosin) con el cautín caliente.",
                "3.2 Empañamiento blanco (Frosting) de la zona sospechosa de la placa.",
                "3.3 Inyección directa de voltaje (Iniciando en 1V a 2A) en la línea en corto.",
                "3.4 Observación del deshielo: El componente culpable derrite la resina al instante.",
                "3.5 Limpieza de los restos de colofonia tras detectar al culpable."
            ],
            "Tema 4: Identificación de componentes en corto (Condensadores).": [
                "4.1 Por qué los condensadores cerámicos SMD se ponen en corto (Fallas de voltaje).",
                "4.2 Medición en escala de diodos o continuidad a tierra en ambos extremos del condensador.",
                "4.3 Extracción del componente dañado (pinzas y calor).",
                "4.4 ¿Se puede dejar el equipo sin el condensador? (Filtros paralelos vs Series).",
                "4.5 Reemplazo por un condensador donante de igual capacitancia y voltaje."
            ]
        },
        "Módulo 3: Lectura Básica de Planos Esquemáticos": {
            "Tema 1: Introducción al software de esquemáticos (Borneo, ZXW).": [
                "1.1 Instalación y navegación por la interfaz del software (Diagrama vs PCB Layout).",
                "1.2 Uso de la búsqueda cruzada: Tocar una pista en el plano y ver dónde ilumina.",
                "1.3 Comprensión de las soluciones de hardware (Hardware Solutions / Líneas dibujadas).",
                "1.4 Significado de siglas técnicas (VCC_MAIN, VPH_PWR, GND, VBAT).",
                "1.5 Actualización periódica de licencias y bases de datos."
            ],
            "Tema 2: Seguimiento de líneas de carga.": [
                "2.1 Rastreo del voltaje de 5V desde el pin de carga (VBUS) hasta el OVP.",
                "2.2 Identificación del chip de protección contra sobretensión (OVP).",
                "2.3 Ingreso del voltaje al IC de Carga (IF PMIC).",
                "2.4 Salida del voltaje de 4.2V hacia el conector de la batería (VBAT).",
                "2.5 Diagnóstico de la línea de identificación de batería (BATT_THERM)."
            ],
            "Tema 3: Reconocimiento de ICs (Circuitos Integrados).": [
                "3.1 Identificación del CPU (Procesador) y la memoria RAM/NAND.",
                "3.2 Ubicación del PMIC (Administrador de Energía principal) rodeado de bobinas.",
                "3.3 Localización del IC de Wi-Fi / Bluetooth.",
                "3.4 Reconocimiento de amplificadores de audio y transceptores de señal (RF).",
                "3.5 Interpretación de la numeración y marcaje grabado en los chips."
            ],
            "Tema 4: Casos de estudio de fallas típicas.": [
                "4.1 Fallo \"No da luz, pero da imagen\" (Circuito Backlight y Diodo Schottky).",
                "4.2 Fallo de carga falsa: Muestra el rayo pero el porcentaje no sube.",
                "4.3 Fallo \"Solo enciende conectado al cargador\".",
                "4.4 Pantalla azul o kernel panic por condensadores filtrando mal el voltaje del CPU.",
                "4.5 Pérdida total de señal de red móvil (Corto en el amplificador PA)."
            ]
        },
        "Módulo 4: Reviviendo el Cerebro: Software, Flasheo y Legalidad": {
            "Tema 1: Respaldo de información (Backup) y Restauración.": [
                "1.1 Uso de Smart Switch, Mi Mover y Clone Phone para traspaso de datos.",
                "1.2 Creación de copias de seguridad locales de WhatsApp completas (con carpetas).",
                "1.3 Volcado de información a PC y prevención de pérdida de fotos.",
                "1.4 Restauración segura del equipo sin mezclar fallas antiguas.",
                "1.5 Educación al cliente sobre la sincronización en la nube."
            ],
            "Tema 2: Flasheo y actualización de Firmware (Android/iOS).": [
                "2.1 Descarga de ROMs o Firmwares oficiales (SamMobile, Xiaomi Firmware).",
                "2.2 Uso de herramientas oficiales: Odin (Samsung), SP Flash Tool (MTK), MiFlash.",
                "2.3 Entendimiento de los archivos de partición (BL, AP, CP, CSC).",
                "2.4 Flasheo por Fastboot y EDL (Emergency Download Mode).",
                "2.5 Prevención del estado \"Brick\" (Ladrillo) por errores de batería durante el flasheo."
            ],
            "Tema 3: Manejo de software para eliminar cuentas Google (FRP).": [
                "3.1 Qué es el Factory Reset Protection (FRP) y por qué se activa.",
                "3.2 Métodos manuales vulnerando aplicaciones del sistema (Bypass).",
                "3.3 Uso de cajas de servicio (Box) virtuales (UnlockTool, Chimera).",
                "3.4 Borrado de particiones FRP mediante Test Point (Unión de puntos en placa).",
                "3.5 Actualizaciones de parches de seguridad y cierre de vulnerabilidades."
            ],
            "Tema 4: Marco legal y recepción segura de equipos.": [
                "4.1 Verificación obligatoria del IMEI en bases de datos de reporte de robo/pérdida.",
                "4.2 Elaboración de notas de descargo y firmas de responsabilidad del cliente.",
                "4.3 Toma de registro fotográfico del estado estético del equipo al ingresar.",
                "4.4 Políticas de rechazo frente a peticiones de cambio de IMEI (Ilegalidad).",
                "4.5 Protección jurídica del taller ante auditorías u operativos de control."
            ]
        },
        "Módulo 5: Reparación Avanzada de Pantallas (Glass/OCA)": {
            "Tema 1: Teoría de laminación OCA.": [
                "1.1 Estructura de una pantalla (Glass, OCA, LCD, Backlight).",
                "1.2 Diferencias entre OCA y LOCA.",
                "1.3 Maquinaria necesaria (Separadora, Laminadora, Autoclave).",
                "1.4 Riesgos del proceso.",
                "1.5 Rentabilidad del remanufacturado."
            ],
            "Tema 2: Separación del cristal.": [
                "2.1 Uso del hilo de molibdeno.",
                "2.2 Temperaturas correctas por modelo.",
                "2.3 Técnicas para pantallas curvas.",
                "2.4 Limpieza del pegamento residual.",
                "2.5 Prueba de funcionamiento intermedia."
            ],
            "Tema 3: Proceso de laminación.": [
                "3.1 Aplicación de la lámina OCA.",
                "3.2 Alineación en moldes.",
                "3.3 Uso de la máquina laminadora.",
                "3.4 Tiempos y presiones de vacío.",
                "3.5 Evitar burbujas iniciales."
            ],
            "Tema 4: Eliminación de burbujas y ensamblaje.": [
                "4.1 Uso de la máquina autoclave.",
                "4.2 Temperaturas y presiones finales.",
                "4.3 Inspección de calidad del cristal.",
                "4.4 Instalación del marco (Frame).",
                "4.5 Pruebas de táctil y color."
            ]
        }
    },
    "Semestre 3: Nivel Técnico Medio I - Especialista en Apple (iPhone / iPad)": {
        "Módulo 1: El Ecosistema Apple y Software iOS": {
            "Tema 1: Cuentas iCloud, bloqueos y precauciones al comprar.": [
                "1.1 Verificación del estado de \"Buscar mi iPhone\" (FMI - ON/OFF).",
                "1.2 Diferencias irreparables entre iCloud por código (Passcode) y iCloud en pantalla Hola (Hello).",
                "1.3 Identificación de equipos bloqueados por MDM (Administración de empresas).",
                "1.4 Riesgos de adquirir equipos de segunda mano sin cerrar sesión previa.",
                "1.5 Desmitificación de los servicios de \"desbloqueo mágico de iCloud\" en internet."
            ],
            "Tema 2: Modo DFU, Modo Recovery y uso de 3uTools.": [
                "2.1 Combinaciones de botones para forzar el Modo Recovery.",
                "2.2 Diferencia técnica y entrada al Modo DFU (Pantalla negra) para fallas severas.",
                "2.3 Descarga y manejo del software gratuito 3uTools para Windows.",
                "2.4 Lectura de errores críticos de iTunes durante el proceso de restauración (Error 9, Error 4013).",
                "2.5 Actualización conservando datos de usuario (Retain User's Data)."
            ],
            "Tema 3: Respaldo y migración de datos entre iPhones.": [
                "3.1 Uso del inicio rápido de Apple (Acercando ambos dispositivos).",
                "3.2 Respaldos locales pesados usando iTunes (Cifrados para mantener contraseñas).",
                "3.3 Gestión de saturación de almacenamiento (\"iPhone Storage Full\") y limpieza del sistema.",
                "3.4 Migración completa de chats de WhatsApp desde Android a iPhone (App oficial).",
                "3.5 Restauración selectiva de contactos y fotos desde iCloud web."
            ],
            "Tema 4: Identificación de piezas genéricas vs originales.": [
                "4.1 Uso del \"Verification Report\" (Informe de validación) en 3uTools.",
                "4.2 Lectura e interpretación de piezas marcadas en rojo (Cambiadas).",
                "4.3 El mensaje molesto de \"Pieza desconocida\" en Ajustes de iOS.",
                "4.4 Diferencias visuales y táctiles entre pantallas chinas (LCD) y originales (OLED retiradas).",
                "4.5 Caída drástica del porcentaje de condición de batería con repuestos malos."
            ]
        },
        "Módulo 2: Mantenimiento y Cambio de Piezas en iPhone": {
            "Tema 1: Apertura segura de iPhone (Cuidado con los flex).": [
                "1.1 Retiro de tornillos Pentalobe inferiores.",
                "1.2 Aplicación de calor moderado para aflojar el sello contra el agua.",
                "1.3 Apertura lateral en forma de libro para no desgarrar el flex de pantalla (Lado derecho).",
                "1.4 Desconexión de la batería como paso inmediato e innegociable.",
                "1.5 Orden y clasificación de blindajes metálicos y tornillos Tri-Point minúsculos."
            ],
            "Tema 2: Cambio de pantallas sin perder el TrueTone.": [
                "2.1 Concepto de TrueTone (Adaptación de temperatura de color al ambiente).",
                "2.2 Uso de programadoras EEPROM (JC, Qianli) para leer la pantalla original.",
                "2.3 Volcado del código (Cover Board Code) a la pantalla nueva.",
                "2.4 Soldadura del IC de la pantalla original a la nueva (Para quitar el mensaje de pieza cambiada).",
                "2.5 Restauración del sellado adhesivo contra polvo y salpicaduras."
            ],
            "Tema 3: Trasplante del flex del auricular para mantener Face ID.": [
                "3.1 Explicación de por qué el flex del auricular está emparejado con la placa base.",
                "3.2 Remoción cuidadosa del proyector de puntos (Dot Projector) y cámara infrarroja.",
                "3.3 Uso de calor suave para despegar los micrófonos superiores sin dañarlos.",
                "3.4 Centrado de la cámara frontal para evitar el \"Halo\" blanco en las selfies.",
                "3.5 Pruebas de mapeo facial tras el reensamble completo."
            ],
            "Tema 4: Cambio de tapa trasera (Uso de máquina láser vs calor).": [
                "4.1 Riesgos de cambiar tapas a pura fuerza y calor (Quemar la bobina de carga inalámbrica).",
                "4.2 Uso de máquinas láser para quemar el pegamento epóxico original del cristal.",
                "4.3 Extracción de los cristales rotos utilizando rompecristales y guantes.",
                "4.4 Limpieza del anillo de la cámara y del marco de aluminio.",
                "4.5 Pegado de la tapa de repuesto de orificio ancho (Big Hole) con pegamento frío."
            ]
        },
        "Módulo 3: Solución a Fallas Comunes de iPhone": {
            "Tema 1: iPhone no carga (Diagnóstico del Tristar/Hydra).": [
                "1.1 Mediciones con la herramienta Dok Test en el puerto Lightning sin desarmar.",
                "1.2 Comportamiento de consumo de 0.00A en el detector USB.",
                "1.3 Identificación del IC controlador de USB (Tristar o Hydra).",
                "1.4 Reemplazo del chip bajo microscopio.",
                "1.5 Limpieza física extrema de pelusas apelmazadas en el puerto de carga."
            ],
            "Tema 2: Problemas de audio (Micrófono no graba - Audio IC).": [
                "2.1 Falla típica en iPhone 7/7 Plus: El botón de altavoz aparece en gris en llamadas.",
                "2.2 Lentitud al grabar notas de voz.",
                "2.3 Resoldado de las líneas rotas debajo del chip de Audio (Reconstrucción de pistas C12).",
                "2.4 Prueba del auricular y micrófono de cancelación de ruido.",
                "2.5 Aplicación de resina epoxi UV para que el fallo no regrese."
            ],
            "Tema 3: iPhone sin servicio o buscando red (Baseband básico).": [
                "3.1 Verificación del firmware del módem en Ajustes (Si está vacío, hay fallo de baseband).",
                "3.2 Descarte inicial de lectores de tarjeta SIM doblados.",
                "3.3 Identificación del corto en la línea principal de radiofrecuencia.",
                "3.4 Diagnóstico y preparación de la placa para reballing de Baseband.",
                "3.5 Separación y re-unión de placas tipo sándwich (iPhone X en adelante) usando pre-calentadora."
            ],
            "Tema 4: Rescate de celulares mojados (Lavado ultrasónico).": [
                "4.1 Retiro inmediato de blindajes metálicos (Cortarlos si vienen soldados).",
                "4.2 Inspección microscópica de zonas sulfatadas (Sarro verde o blanco).",
                "4.3 Limpieza manual con cepillos de cerdas de fibra de vidrio.",
                "4.4 Baño de la placa en lavadora ultrasónica con alcohol isopropílico o limpiadores especiales.",
                "4.5 Re-inyección de voltaje y detección de componentes destruidos por la electrólisis."
            ]
        },
        "Módulo 4: Trato al Cliente y Presupuestos Premium": {
            "Tema 1: Cómo cobrar correctamente reparaciones de alta gama.": [
                "1.1 Análisis del costo del repuesto vs el riesgo de matar un equipo costoso.",
                "1.2 Cálculo de la mano de obra especializada según dificultad (No es lo mismo abrir un iPhone 6 que un 14 Pro Max).",
                "1.3 Presentación visual del presupuesto: Transparencia total.",
                "1.4 Manejo de objeciones cuando el cliente dice \"está muy caro\".",
                "1.5 Creación de paquetes (Ej. Cambio de pantalla + Protector hidrogel + Limpieza)."
            ],
            "Tema 2: Garantías y políticas de riesgo al cliente.": [
                "2.1 Redacción de un documento de \"Riesgo de muerte\" para equipos severamente mojados o golpeados.",
                "2.2 Tiempos lógicos de garantía (Ej: 30 a 90 días por defecto de fábrica, no por caídas).",
                "2.3 Manejo de devoluciones de dinero y control de calidad previo a la entrega.",
                "2.4 Identificación de clientes fraudulentos que rompen los repuestos en casa.",
                "2.5 Colocación de sellos de garantía (Stickers frágiles) en tornillos clave."
            ],
            "Tema 3: Compra de repuestos certificados.": [
                "3.1 Identificación de proveedores locales serios vs tiendas de baja calidad.",
                "3.2 Tiempos de importación en compras por AliExpress o Alibaba.",
                "3.3 Manejo y devolución (RMA) de pantallas defectuosas con el proveedor.",
                "3.4 Clasificación de pantallas OLED (Soft OLED, Hard OLED) según presupuesto.",
                "3.5 Creación de un pequeño stock de piezas de alta rotación."
            ],
            "Tema 4: Proyecto Práctico: Desensamble total y reensamble de un iPhone.": [
                "4.1 Demostración de apertura sin marcas en el chasis.",
                "4.2 Extracción de la placa base en menos de 10 minutos.",
                "4.3 Explicación de cada módulo y flex al instructor.",
                "4.4 Reensamble milimétrico sin dejar \"tornillos sueltos o sobrantes\".",
                "4.5 Prueba final de encendido, cámaras, táctil y Face ID."
            ]
        },
        "Módulo 5: Recuperación de Datos y Forense Móvil": {
            "Tema 1: Fundamentos de recuperación de datos.": [
                "1.1 Sistemas de archivos móviles (APFS, ext4).",
                "1.2 Datos borrados vs datos sobrescritos.",
                "1.3 Memorias eMMC vs UFS.",
                "1.4 Cifrado de datos por hardware.",
                "1.5 Herramientas gratuitas vs de pago."
            ],
            "Tema 2: Extracción física vs lógica.": [
                "2.1 Respaldos locales y en la nube.",
                "2.2 Extracción lógica mediante ADB/iTunes.",
                "2.3 Extracción física (Root/Jailbreak).",
                "2.4 Dump de memoria.",
                "2.5 Análisis de bases de datos SQLite."
            ],
            "Tema 3: Recuperación de equipos mojados (Avanzado).": [
                "3.1 Baño ultrasónico profesional.",
                "3.2 Desoxidación profunda.",
                "3.3 Reconstrucción de pistas dañadas por corrosión.",
                "3.4 Encendido temporal para extracción.",
                "3.5 Migración de placas (Board swap)."
            ],
            "Tema 4: Ética y legalidad.": [
                "4.1 Privacidad del cliente.",
                "4.2 Manejo de material sensible.",
                "4.3 Colaboración con autoridades.",
                "4.4 Contratos de exención de responsabilidad.",
                "4.5 Borrados seguros (Wipe)."
            ]
        }
    },
    "Semestre 4: Nivel Técnico Medio II - Microsoldadura Avanzada y Emprendimiento": {
        "Módulo 1: Herramientas Avanzadas: Osciloscopio y Diagnóstico": {
            "Tema 1: Cómo medir señales con el osciloscopio.": [
                "1.1 Concepto básico del Osciloscopio: Ver el voltaje moviéndose en el tiempo (Ondas).",
                "1.2 Configuración de tiempos y escalas de voltaje por división.",
                "1.3 Medición de osciladores de cristal (Cristal de cuarzo de 32kHz del reloj del sistema).",
                "1.4 Comprobación del protocolo de comunicación I2C (Líneas de datos y reloj - SDA / SCL).",
                "1.5 Diferenciación visual entre una señal limpia y una línea con interferencia o bloqueada."
            ],
            "Tema 2: Caída de tensión (Impedancias).": [
                "2.1 Uso del multímetro en escala de Diodos para comparar valores (Impedancia).",
                "2.2 Punta roja a tierra y punta negra a la pista a medir (Polaridad inversa).",
                "2.3 Comparativa del valor obtenido con el plano esquemático (Ej. Si mide OL está desconectado, si mide 0.00 está en corto).",
                "2.4 Aislamiento rápido de líneas abiertas (Falsos contactos debajo de un IC).",
                "2.5 Creación de un registro propio de caídas de tensión de placas sanas."
            ],
            "Tema 3: Métodos de detección de cortos (Cámara térmica vs Resina).": [
                "3.1 Principio físico del calentamiento disipado por un componente en corto.",
                "3.2 Uso del humo de resina de colofonia (Rosin) para detectar el deshielo del culpable.",
                "3.3 Uso del método del alcohol isopropílico o spray congelante local (Rápida evaporación).",
                "3.4 Interpretación de la paleta de colores de una cámara térmica profesional.",
                "3.5 Análisis de costo-beneficio de herramientas según el volumen del taller."
            ],
            "Tema 4: Interpretación de consumo en la fuente (El celular cuenta qué le duele).": [
                "4.1 Diagnóstico de un equipo que consume 10mA, 20mA y cae a 0 (Fallo de procesador o memoria soldada en frío).",
                "4.2 Diagnóstico de un consumo estancado en 80mA (Ciclo de encendido detenido - Software o Memoria).",
                "4.3 Consumos variables que demuestran el arranque normal del sistema operativo.",
                "4.4 Identificación de fugas previas al presionar el botón de encendido.",
                "4.5 Registro y categorización de comportamientos de consumo por familia de teléfonos."
            ]
        },
        "Módulo 2: Reballing y Trabajo en ICs (Chips)": {
            "Tema 1: Extracción segura de Circuitos Integrados (ICs) con resina.": [
                "1.1 Limpieza inicial de la resina epóxica (Underfill) negra o blanca usando calor a 200°C.",
                "1.2 Uso de espátulas o bisturís planos curvos (Scraper) sin rayar el PCB.",
                "1.3 Aplicación de calor a 350°C-380°C y uso de pinzas para sentir la flotación del IC.",
                "1.4 Levantamiento vertical sin arrancar pistas adyacentes (Paciencia).",
                "1.5 Limpieza de los restos de resina tanto en la placa como en el chip extraído."
            ],
            "Tema 2: Técnica de Reballing (Esténcil y estaño).": [
                "2.1 Selección de plantillas o mallas perforadas (Stencils) 3D vs universales.",
                "2.2 Alineación milimétrica del chip bajo la malla con cinta resistente al calor.",
                "2.3 Aplicación y secado previo del estaño en pasta (183°C) con papel absorbente.",
                "2.4 Corte de estaño sobrante con espátula y aplicación de calor indirecto.",
                "2.5 Verificación de bolitas de soldadura (Esferas) simétricas, brillantes e idénticas."
            ],
            "Tema 3: Cambio de circuitos de Wi-Fi y PMIC.": [
                "3.1 Identificación del chip de Wi-Fi (Problemas de botón de Wi-Fi que no enciende).",
                "3.2 Desvinculación de memoria NAND necesaria en equipos Apple tras cambiar el IC Wi-Fi.",
                "3.3 Extracción del IC Administrador de Energía (PMIC) gestionando sus múltiples salidas LDO.",
                "3.4 Soldadura del chip reboleado mediante vibración suave para su centrado automático por tensión superficial.",
                "3.5 Verificación térmica de que el IC no ha quedado en corto tras la soldadura."
            ],
            "Tema 4: Recuperación de pistas arrancadas debajo de los chips.": [
                "4.1 Identificación de \"No Connects\" (Pistas NC, que no importan si se rompen).",
                "4.2 Raspado de la raíz de cobre que quedó incrustada en el PCB.",
                "4.3 Creación de un pequeño bucle o espiral de hilo de cobre esmaltado (Micro Jumper).",
                "4.4 Soldado a la raíz y aplicación de máscara UV con lámpara negra.",
                "4.5 Aplanamiento del puente para que el chip asiente correctamente sin tambalearse."
            ]
        },
        "Módulo 3: Recuperación de Datos Extrema": {
            "Tema 1: Cuándo un celular no tiene arreglo pero los datos sí.": [
                "1.1 Identificación de placas partidas por la mitad o dobladas irremediablemente por accidentes graves.",
                "1.2 Placas calcinadas donde la reparación de las líneas es inviable por tiempo.",
                "1.3 Evaluación de integridad: Verificar que CPU y Memoria (UFS/eMMC/NAND) no estén agrietados ni en corto.",
                "1.4 Cotización del servicio (Generalmente más costoso que reparar el teléfono en sí).",
                "1.5 Gestión de expectativas reales con el cliente ansioso."
            ],
            "Tema 2: Swaps básicos (Mover CPU y Memoria a otra placa).": [
                "2.1 Adquisición de una placa base donante que encienda pero esté bloqueada (Ej: iCloud).",
                "2.2 Extracción de CPU, Memoria Baseband y EEPROM de la placa original destruida.",
                "2.3 Limpieza profunda y Reballing de alta precisión de los tres componentes clave.",
                "2.4 Limpieza (CNC o calor) y extracción de los chips de la placa donante.",
                "2.5 Trasplante y soldado de los componentes originales a la nueva placa base."
            ],
            "Tema 3: Extracción de información de memorias directamente.": [
                "3.1 Teoría de extracción directa (Chip-off) para memorias Android eMMC.",
                "3.2 Conexión de programadoras externas (Easy JTAG, Medusa PRO).",
                "3.3 Lectura de las particiones de usuario (Userdata).",
                "3.4 Imposibilidad de desencriptación en sistemas modernos de Android y Apple (Por qué es obligatorio el CPU).",
                "3.5 Traspaso final de las carpetas DCIM y WhatsApp a un pendrive para entrega."
            ],
            "Tema 4: Protocolos de privacidad con la información del cliente.": [
                "4.1 Firma de acuerdos de confidencialidad de los datos rescatados (NDA).",
                "4.2 Prohibición de revisión de galerías fotográficas sin el cliente presente.",
                "4.3 Uso de discos de transferencia dedicados formateados después de cada servicio.",
                "4.4 Responsabilidad civil del taller ante la filtración de material privado.",
                "4.5 Destrucción total de la placa origen y chips fallidos."
            ]
        },
        "Módulo 4: El Negocio: Tu Propio Taller y Marketing Digital": {
            "Tema 1: Elaboración del inventario básico para abrir un taller.": [
                "1.1 Presupuesto de arranque: Herramientas esenciales vs lujo técnico.",
                "1.2 Mobiliario: Mesa antiestática (Alfombrilla de silicona ESD), iluminación LED y almacenamiento de gavetas.",
                "1.3 Compra de consumibles al por mayor (Estaño, flux, mallas, alcohol, pegamento B7000).",
                "1.4 Tramitación de patentes de funcionamiento municipal básicas para locales.",
                "1.5 Organización de un tablero visual de herramientas ordenado."
            ],
            "Tema 2: Marketing en TikTok y Reels (Atrayendo clientes).": [
                "2.1 Grabación superior con brazos articulados para el teléfono.",
                "2.2 Formatos de video \"Antes y Después\" o restauraciones estilo ASMR de pantallas destrozadas.",
                "2.3 Uso de Timelapses para acelerar el proceso visual de la microsoldadura.",
                "2.4 Uso de hashtags locales.",
                "2.5 Respuesta inmediata a comentarios y creación de comunidad."
            ],
            "Tema 3: Cierre de ventas por WhatsApp Business.": [
                "3.1 Configuración del perfil de empresa con ubicación, catálogo y horarios claros.",
                "3.2 Configuración de respuestas rápidas (/pantalla, /pin) para dar cotizaciones precisas.",
                "3.3 Técnicas de cierre: \"Tengo disponibilidad inmediata, ¿a qué hora lo trae?\".",
                "3.4 Envío proactivo del estado de la reparación mediante fotos (\"Su teléfono ya está desarmado, procedemos al soldado\").",
                "3.5 Envío del estado final y solicitud amable de reseñas tras la entrega."
            ],
            "Tema 4: Marketing, Posicionamiento y Expansión.": [
                "4.1 Google Mi Negocio para la academia y el taller.",
                "4.2 Campañas segmentadas en redes sociales.",
                "4.3 Programas de lealtad para clientes recurrentes.",
                "4.4 Gestión de reseñas online y reputación.",
                "4.5 Apertura de sucursales o alianzas estratégicas."
            ]
        },
        "Módulo 5: Administración del Servicio Técnico y Proyecto Final": {
            "Tema 1: Software de gestión de talleres.": [
                "1.1 Implementación de sistemas ERP/CRM.",
                "1.2 Seguimiento de reparaciones (Tickets).",
                "1.3 Portal de clientes.",
                "1.4 Avisos por SMS/WhatsApp automatizados.",
                "1.5 Control de caja."
            ],
            "Tema 2: Importación de repuestos.": [
                "2.1 Búsqueda de proveedores en China (Alibaba, AliExpress).",
                "2.2 Control de calidad internacional.",
                "2.3 Logística y aduanas.",
                "2.4 Manejo de garantías internacionales.",
                "2.5 Creación de un stock de alta rotación."
            ],
            "Tema 3: Estructuración de procedimientos internos.": [
                "3.1 Contratación de técnicos adicionales.",
                "3.2 Creación de manuales de procedimientos paso a paso.",
                "3.3 Implementación de servicios a domicilio.",
                "3.4 Alianzas corporativas (ej. con aseguradoras o empresas locales).",
                "3.5 Evaluación de la rentabilidad mensual del negocio."
            ],
            "Tema 4: Proyecto Final Integrador: Recepción, reparación y entrega.": [
                "4.1 Recepción formal simulada y generación del ticket de ingreso.",
                "4.2 Diagnóstico real (usando multímetro o fuente) de un equipo fallido provisto por la academia.",
                "4.3 Reparación a nivel componente (Microsoldadura o cambio de pantalla).",
                "4.4 Cierre administrativo, presupuesto final y control de calidad.",
                "4.5 Entrega formal del equipo funcionando al instructor (simulando la satisfacción total del cliente)."
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
