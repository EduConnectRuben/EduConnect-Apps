// EduConnectRuben - Lógica de Interfaz y Generación de Prompts

const mallaCurricular = {
    "Semestre 1: Nivel Técnico Básico - El Artista de la Web (Frontend Junior)": {
        "Módulo 1: El Idioma de las Máquinas: Lógica y Algoritmos": {
            "Tema 1: Algoritmos y pseudocódigo.": [
                "1.1 Definición y características de un algoritmo.",
                "1.2 Simbología y diagramas de flujo.",
                "1.3 Escritura de pseudocódigo básico.",
                "1.4 Resolución de problemas paso a paso.",
                "1.5 Herramientas visuales de lógica (PSeInt)."
            ],
            "Tema 2: Variables y ciclos.": [
                "2.1 Tipos de datos (Enteros, textos, booleanos).",
                "2.2 Declaración y asignación de variables.",
                "2.3 Operadores aritméticos y lógicos.",
                "2.4 Estructuras condicionales (If/Else).",
                "2.5 Bucles iterativos de repetición (For, While)."
            ],
            "Tema 3: Estructuras de datos (Arreglos/Objetos).": [
                "3.1 Concepto de arreglos (Arrays) unidimensionales.",
                "3.2 Índices y acceso a elementos.",
                "3.3 Manejo de matrices bidimensionales.",
                "3.4 Introducción a los objetos y atributos.",
                "3.5 Iteración sobre estructuras de datos."
            ],
            "Tema 4: Pensamiento computacional.": [
                "4.1 Descomposición de problemas complejos.",
                "4.2 Reconocimiento de patrones lógicos.",
                "4.3 Abstracción de información relevante.",
                "4.4 Diseño algorítmico estructurado.",
                "4.5 Depuración y pruebas de escritorio."
            ]
        },
        "Módulo 2: Creando Interfaces Impactantes: HTML5 y CSS3": {
            "Tema 1: Estructura HTML5.": [
                "1.1 Etiquetas semánticas principales (header, nav, main, footer).",
                "1.2 Estructura de un documento HTML básico.",
                "1.3 Enlaces, imágenes y multimedia.",
                "1.4 Creación de formularios y campos de entrada.",
                "1.5 Buenas prácticas de accesibilidad web."
            ],
            "Tema 2: Flexbox y Grid CSS.": [
                "2.1 Modelo de caja (Box Model) y selectores CSS.",
                "2.2 Contenedores e ítems en Flexbox.",
                "2.3 Alineación y distribución con Flexbox.",
                "2.4 Sistemas de cuadrículas con CSS Grid.",
                "2.5 Combinación de Grid y Flexbox en layouts."
            ],
            "Tema 3: Diseño Mobile First.": [
                "3.1 Concepto y ventajas del Mobile First.",
                "3.2 Media Queries y puntos de ruptura (breakpoints).",
                "3.3 Unidades relativas (rem, em, vh, vw, %).",
                "3.4 Técnicas para imágenes responsivas.",
                "3.5 Adaptación de menús de navegación para celulares."
            ],
            "Tema 4: Animaciones web.": [
                "4.1 Transiciones CSS (hover, focus, active).",
                "4.2 Transformaciones 2D y 3D (translate, scale, rotate).",
                "4.3 Creación de Keyframes y reglas de animación.",
                "4.4 Configuración de curvas de tiempo y retrasos.",
                "4.5 Optimización de rendimiento visual."
            ]
        },
        "Módulo 3: Dando Vida a la Web: JavaScript": {
            "Tema 1: Manipulación del DOM.": [
                "1.1 Seleccionar elementos (getElementById, querySelector).",
                "1.2 Modificar contenido de texto y HTML.",
                "1.3 Cambiar estilos y clases dinámicamente.",
                "1.4 Creación y eliminación de nodos.",
                "1.5 Navegación por el árbol del DOM."
            ],
            "Tema 2: Eventos e interacción.": [
                "2.1 Concepto de eventos y Event Listeners.",
                "2.2 Eventos de ratón y teclado.",
                "2.3 Eventos de formulario y prevención por defecto (preventDefault).",
                "2.4 Propagación de eventos (Bubbling y Capturing).",
                "2.5 Delegación de eventos para optimización."
            ],
            "Tema 3: Consumo de APIs.": [
                "3.1 Concepto de API y estructura JSON.",
                "3.2 Programación asíncrona (Promesas).",
                "3.3 Async/Await para control de flujo.",
                "3.4 Uso de la función Fetch para obtener datos.",
                "3.5 Manejo de errores en peticiones de red (Try/Catch)."
            ],
            "Tema 4: Proyecto de Producción: Menú digital interactivo.": [
                "4.1 Análisis de requisitos para negocio de comida local.",
                "4.2 Estructuración estática con HTML/CSS.",
                "4.3 Renderizado dinámico del menú usando arreglos de objetos.",
                "4.4 Sistema de filtrado de categorías con JavaScript.",
                "4.5 Pruebas en dispositivos móviles reales."
            ]
        },
        "Módulo 4: Portafolio, Control de Versiones y Freelance": {
            "Tema 1: Comandos de Git y repositorios en GitHub.": [
                "1.1 Instalación y configuración inicial de Git.",
                "1.2 Ciclo de vida del estado de archivos (add, commit, status).",
                "1.3 Revisión del historial de versiones (log, diff).",
                "1.4 Creación y conexión a repositorios remotos en GitHub.",
                "1.5 Sincronización de cambios (push, pull)."
            ],
            "Tema 2: Ramas y trabajo colaborativo.": [
                "2.1 Creación y navegación entre ramas (branch, checkout).",
                "2.2 Fusión de ramas terminadas (merge).",
                "2.3 Identificación y resolución de conflictos de código.",
                "2.4 Uso y gestión de Pull Requests.",
                "2.5 Flujo de trabajo colaborativo básico (Git Flow simplificado)."
            ],
            "Tema 3: Despliegue en GitHub Pages.": [
                "3.1 Requisitos para alojar sitios estáticos.",
                "3.2 Configuración de ramas públicas para despliegue.",
                "3.3 Actualización de cambios en producción.",
                "3.4 Vinculación de dominios personalizados.",
                "3.5 Revisión y solución de errores comunes de ruteo."
            ],
            "Tema 4: Modelo de negocio: Ventas de software a nivel local.": [
                "4.1 Identificación de clientes y comercios potenciales en el entorno.",
                "4.2 Cálculo de costos por hora de desarrollo y por proyecto.",
                "4.3 Elaboración de presupuestos y propuestas comerciales atractivas.",
                "4.4 Técnicas de presentación de prototipos a clientes.",
                "4.5 Acuerdos de pago y condiciones de entrega del producto."
            ]
        },
        "Módulo 5: Diseño UI/UX y Herramientas Visuales (Figma)": {
            "Tema 1: Principios de diseño de interfaces.": [
                "1.1 Teoría del color en la web.",
                "1.2 Tipografía y legibilidad.",
                "1.3 Jerarquía visual.",
                "1.4 Espaciado y consistencias.",
                "1.5 Accesibilidad web básica."
            ],
            "Tema 2: Introducción a Figma.": [
                "2.1 Configuración del entorno Figma.",
                "2.2 Herramientas de dibujo y formas.",
                "2.3 Manejo de capas y grupos.",
                "2.4 Creación de componentes.",
                "2.5 Uso de variantes y auto layout."
            ],
            "Tema 3: Prototipado interactivo.": [
                "3.1 Conexión entre pantallas.",
                "3.2 Animaciones y transiciones (Smart Animate).",
                "3.3 Microinteracciones.",
                "3.4 Pruebas de usabilidad.",
                "3.5 Compartir prototipos para feedback."
            ],
            "Tema 4: Handoff para desarrollo.": [
                "4.1 Exportación de assets (SVG, PNG).",
                "4.2 Lectura de código CSS desde Figma.",
                "4.3 Documentación de diseño.",
                "4.4 Sistemas de diseño básicos.",
                "4.5 Colaboración diseñador-desarrollador."
            ]
        }
    },
    "Semestre 2: Nivel Técnico Auxiliar - El Motor Tras Bambalinas (Backend Junior)": {
        "Módulo 1: Entendiendo la Matrix: Servidores y Bases de Datos": {
            "Tema 1: Protocolo HTTP y arquitectura REST.": [
                "1.1 Arquitectura Cliente-Servidor.",
                "1.2 Verbos y métodos HTTP principales.",
                "1.3 Significado de los códigos de estado HTTP.",
                "1.4 Uso de cabeceras (Headers) y cuerpo (Body) en peticiones.",
                "1.5 Principios y reglas de una arquitectura RESTful."
            ],
            "Tema 2: Bases de datos relacionales y SQL.": [
                "2.1 Estructura de Tablas y relaciones de datos.",
                "2.2 Definición de Claves primarias y foráneas.",
                "2.3 Realización de consultas de búsqueda (SELECT).",
                "2.4 Aplicación de filtros y condiciones (WHERE).",
                "2.5 Cruce de datos entre tablas (Joins)."
            ],
            "Tema 3: Gestión de PostgreSQL.": [
                "3.1 Instalación del motor y herramientas visuales (pgAdmin).",
                "3.2 Tipos de datos específicos en PostgreSQL.",
                "3.3 Creación y gestión de esquemas.",
                "3.4 Asignación de roles y permisos a usuarios.",
                "3.5 Generación de respaldos y restauración de bases de datos."
            ],
            "Tema 4: Operaciones CRUD y modelado de datos.": [
                "4.1 Inserción de nuevos registros (INSERT).",
                "4.2 Actualización de datos existentes (UPDATE).",
                "4.3 Eliminación de registros (DELETE).",
                "4.4 Conceptos básicos de normalización de datos.",
                "4.5 Diseño de Diagramas Entidad-Relación (DER)."
            ]
        },
        "Módulo 2: Programación Servidor (Python y Django)": {
            "Tema 1: Entorno virtual y fundamentos web.": [
                "1.1 Configuración de entornos virtuales (venv) e instalación de paquetes (PIP).",
                "1.2 Sintaxis clave de Python para desarrollo backend.",
                "1.3 Programación Orientada a Objetos en Python.",
                "1.4 Inicialización y estructura de un proyecto Django.",
                "1.5 Ejecución del servidor local y gestión de comandos manage.py."
            ],
            "Tema 2: Modelos, Vistas y Controladores en Django.": [
                "2.1 Configuración general en settings.py.",
                "2.2 Creación de Apps internas modulares.",
                "2.3 Definición de Modelos (El ORM de Django).",
                "2.4 Creación de Vistas y funciones lógicas.",
                "2.5 Configuración y mapeo de rutas o URLs."
            ],
            "Tema 3: Django REST Framework.": [
                "3.1 Instalación y configuración global de DRF.",
                "3.2 Creación de APIs usando vistas genéricas.",
                "3.3 Implementación y uso de ViewSets.",
                "3.4 Configuración de enrutadores automáticos (Routers).",
                "3.5 Configuración de paginación de resultados."
            ],
            "Tema 4: Serialización y respuestas JSON.": [
                "4.1 Concepto y función principal de un serializador.",
                "4.2 Uso de ModelSerializers para bases de datos.",
                "4.3 Validación estricta de datos de entrada.",
                "4.4 Estructuración de serializadores anidados.",
                "4.5 Formateo y personalización de respuestas HTTP JSON."
            ]
        },
        "Módulo 3: Seguridad Infranqueable y Autenticación": {
            "Tema 1: Login, registro y tokens (JWT).": [
                "1.1 Estructura del modelo de usuarios base de Django.",
                "1.2 Diferencia entre autenticación por sesión y por tokens.",
                "1.3 Configuración de librerías JWT (Simple JWT).",
                "1.4 Flujo de emisión y refresco de tokens de acceso.",
                "1.5 Restricción de acceso a rutas protegidas."
            ],
            "Tema 2: Encriptación de contraseñas (Bcrypt).": [
                "2.1 Conceptos teóricos de Hashing y Salting.",
                "2.2 Funcionamiento de algoritmos de seguridad criptográfica.",
                "2.3 Manejo y validación automática de contraseñas en Django.",
                "2.4 Implementación de cambio seguro de contraseña.",
                "2.5 Flujos lógicos para recuperación de accesos perdidos."
            ],
            "Tema 3: Prevención de vulnerabilidades y CORS.": [
                "3.1 Conceptos de Inyección SQL y ataques XSS.",
                "3.2 Entendimiento y protección contra CSRF.",
                "3.3 Qué son las políticas CORS y por qué bloquean peticiones.",
                "3.4 Configuración del paquete django-cors-headers.",
                "3.5 Mantenimiento de listas blancas de orígenes permitidos."
            ],
            "Tema 4: Manejo seguro de variables de entorno.": [
                "4.1 Definición y utilidad de las variables de entorno.",
                "4.2 Uso de librerías gestoras (python-decouple o dotenv).",
                "4.3 Ocultamiento obligatorio de SECRET_KEY.",
                "4.4 Extracción segura de credenciales de Base de Datos.",
                "4.5 Configuración estricta del archivo .gitignore."
            ]
        },
        "Módulo 4: A la Nube: Despliegue a Producción": {
            "Tema 1: Preparación del proyecto para producción.": [
                "1.1 Desactivación de modo DEBUG por seguridad.",
                "1.2 Configuración y recolección de archivos estáticos (WhiteNoise).",
                "1.3 Generación del archivo requirements.txt.",
                "1.4 Configuración de Gunicorn como servidor WSGI.",
                "1.5 Ajuste de hosts permitidos (ALLOWED_HOSTS)."
            ],
            "Tema 2: Despliegue del backend en plataformas (Render).": [
                "2.1 Creación de cuenta y vinculación autorizada con GitHub.",
                "2.2 Configuración de los parámetros del Web Service.",
                "2.3 Asignación de comandos de Build y Start.",
                "2.4 Carga manual de variables de entorno en el servidor.",
                "2.5 Revisión y monitoreo continuo de logs del servidor."
            ],
            "Tema 3: Conexión a bases de datos en la nube.": [
                "3.1 Despliegue de instancia PostgreSQL remota.",
                "3.2 Obtención y estructuración de la URL de conexión.",
                "3.3 Configuración del parseo en Django (dj-database-url).",
                "3.4 Ejecución segura de migraciones en la base remota.",
                "3.5 Carga o volcado de datos iniciales."
            ],
            "Tema 4: Proyecto de Producción: API REST pública comercial.": [
                "4.1 Modelado de negocio de inventario y ventas.",
                "4.2 Creación y validación de endpoints funcionales completos.",
                "4.3 Protección estricta de rutas mediante tokens JWT.",
                "4.4 Pruebas intensivas de API usando herramientas como Postman.",
                "4.5 Generación de documentación técnica de la API para el cliente frontend."
            ]
        },
        "Módulo 5: Arquitectura de Microservicios y APIs RESTful": {
            "Tema 1: Conceptos de microservicios.": [
                "1.1 Monolito vs Microservicios.",
                "1.2 Ventajas y desventajas.",
                "1.3 Escalabilidad horizontal.",
                "1.4 Comunicación entre servicios.",
                "1.5 Patrones de diseño de microservicios."
            ],
            "Tema 2: Diseño de APIs RESTful.": [
                "2.1 Principios REST.",
                "2.2 Verbos HTTP avanzados.",
                "2.3 Estructura de URLs.",
                "2.4 Manejo de códigos de estado.",
                "2.5 Paginación y filtrado."
            ],
            "Tema 3: Postman y Swagger.": [
                "3.1 Pruebas manuales con Postman.",
                "3.2 Creación de colecciones.",
                "3.3 Variables de entorno en Postman.",
                "3.4 Documentación automática con Swagger.",
                "3.5 Estándar OpenAPI."
            ],
            "Tema 4: Seguridad en APIs.": [
                "4.1 Autenticación basada en tokens.",
                "4.2 OAuth 2.0 básico.",
                "4.3 Prevención de ataques comunes.",
                "4.4 Rate limiting (Límites de peticiones).",
                "4.5 CORS y políticas de origen."
            ]
        }
    },
    "Semestre 3: Nivel Técnico Medio I - Programador Full-Stack (El Desarrollador Total)": {
        "Módulo 1: Interfaces del Futuro: React.js": {
            "Tema 1: Componentes y Estado.": [
                "1.1 Sintaxis JSX e incrustación de elementos.",
                "1.2 Estructuración y creación de componentes funcionales.",
                "1.3 Comunicación entre componentes usando Props.",
                "1.4 Manejo y actualización de datos con el hook useState.",
                "1.5 Asignación y manejo de eventos sintéticos en React."
            ],
            "Tema 2: Hooks de React.": [
                "2.1 Control del ciclo de vida y efectos secundarios con useEffect.",
                "2.2 Acceso directo al DOM y valores persistentes con useRef.",
                "2.3 Manejo de estado global mediante Context API.",
                "2.4 Extracción de lógica repetitiva en Custom Hooks.",
                "2.5 Comprensión de las reglas estrictas de los hooks."
            ],
            "Tema 3: Enrutamiento (React Router).": [
                "3.1 Instalación y configuración de React Router DOM.",
                "3.2 Creación de mapas de rutas web.",
                "3.3 Navegación sin recargas usando Link y NavLink.",
                "3.4 Captura y uso de parámetros de ruta dinámica.",
                "3.5 Creación de lógica para rutas privadas exclusivas para usuarios logueados."
            ],
            "Tema 4: Conexión Frontend (React) con Backend (Django).": [
                "4.1 Realización de peticiones asíncronas con Fetch/Axios.",
                "4.2 Interceptores y envío de token JWT en cabeceras HTTP.",
                "4.3 Manejo de estados de carga (Loading) y control de errores.",
                "4.4 Renderizado dinámico de listas iteradas con la función map.",
                "4.5 Recolección y envío de datos de formularios al backend."
            ]
        },
        "Módulo 2: Datos sin Límites y Tiempo Real": {
            "Tema 1: Bases de datos NoSQL (MongoDB).": [
                "1.1 Concepto de almacenamiento basado en documentos.",
                "1.2 Estructura de Colecciones y formato BSON.",
                "1.3 Realización de operaciones CRUD nativas en Mongo.",
                "1.4 Creación y conexión a clústeres en la nube (MongoDB Atlas).",
                "1.5 Integración de driver y conexión básica desde un backend."
            ],
            "Tema 2: WebSockets.": [
                "2.1 Diferencia técnica entre HTTP tradicional y WebSockets.",
                "2.2 Concepto y ciclo de vida de conexiones persistentes (Bidireccionales).",
                "2.3 Entendimiento del protocolo ws:// y wss://.",
                "2.4 Conceptos fundamentales de Django Channels para soportar WebSockets.",
                "2.5 Intercambio básico de mensajes en tiempo real."
            ],
            "Tema 3: Chat en vivo y soporte al cliente.": [
                "3.1 Arquitectura de un sistema de mensajería síncrona.",
                "3.2 Lógica de emisión y recepción simultánea de mensajes.",
                "3.3 Segmentación de canales o salas (rooms) privadas.",
                "3.4 Construcción de la interfaz de chat de soporte en React.",
                "3.5 Almacenamiento y carga de historial de conversaciones previas."
            ],
            "Tema 4: Notificaciones push web.": [
                "4.1 Concepto y registro de Service Workers en el navegador.",
                "4.2 Solicitud y validación de permisos de usuario.",
                "4.3 Disparo de eventos push desde el servidor backend.",
                "4.4 Captura y renderizado visual de notificaciones en el sistema operativo.",
                "4.5 Análisis de casos de uso prácticos (alertas de pedidos, mensajes)."
            ]
        },
        "Módulo 3: Trabajo en Equipo y Calidad (QA)": {
            "Tema 1: Metodologías ágiles (SCRUM y Trello).": [
                "1.1 Entendimiento de los roles Scrum (Scrum Master, Product Owner, Dev Team).",
                "1.2 Ciclos de iteración (Sprints) y reuniones diarias de sincronización.",
                "1.3 Redacción y estimación de Historias de Usuario.",
                "1.4 Diseño y gestión de tableros Kanban interactivos.",
                "1.5 Asignación y seguimiento del flujo de tareas."
            ],
            "Tema 2: Revisiones de código en GitHub.": [
                "2.1 Uso de convenciones semánticas para redacción de commits.",
                "2.2 Flujo correcto para la creación de Pull Requests (PR).",
                "2.3 Asignación de revisores y equipos de trabajo.",
                "2.4 Inserción de comentarios técnicos y sugerencias en líneas de código.",
                "2.5 Aprobación (Approve) y ejecución final de la fusión (Merge)."
            ],
            "Tema 3: Pruebas automatizadas básicas.": [
                "3.1 Diferencias entre Testing Unitario, Integración y End-to-End (E2E).",
                "3.2 Escritura de pruebas de API y modelos en el entorno Django.",
                "3.3 Configuración e introducción a Jest y React Testing Library.",
                "3.4 Simulación de eventos y testeo de componentes de interfaz.",
                "3.5 Lectura y análisis de reportes de cobertura de código."
            ],
            "Tema 4: Clean Code y buenas prácticas.": [
                "4.1 Elección de nombres semánticos y descriptivos para variables y funciones.",
                "4.2 Aplicación del principio DRY (Don't Repeat Yourself).",
                "4.3 Técnicas para refactorización de bloques de código complejos.",
                "4.4 Mantenimiento de una estructura de carpetas limpia y escalable.",
                "4.5 Configuración y automatización de linters y formateadores de código (Prettier/ESLint)."
            ]
        },
        "Módulo 4: Proyecto de Grado: Tienda E-commerce": {
            "Tema 1: Desarrollo de sistema completo de compras online.": [
                "1.1 Construcción del catálogo general y vistas de detalle de productos.",
                "1.2 Lógica y almacenamiento global del carrito de compras.",
                "1.3 Flujos de registro, login y panel administrativo de perfil de usuario.",
                "1.4 Panel de administrador para alta de productos y control de ventas (Dashboard).",
                "1.5 Algoritmos de cálculo de subtotales, impuestos y tarifas de envío."
            ],
            "Tema 2: Integración de pasarelas de pago.": [
                "2.1 Concepto operativo de las pasarelas de pago digitales.",
                "2.2 Creación de cuentas y uso de llaves de entorno de prueba (Stripe/PayPal).",
                "2.3 Proceso de tokenización segura de tarjetas de crédito.",
                "2.4 Configuración de Webhooks para confirmación asíncrona de pagos en servidor.",
                "2.5 Manejo de la interfaz gráfica según estados de transacción (Éxito, Error, Pendiente)."
            ],
            "Tema 3: Creación de Currículum Vitae técnico y LinkedIn.": [
                "3.1 Estructuración moderna y efectiva de un CV para desarrolladores de software.",
                "3.2 Técnicas para destacar proyectos y medir impactos reales.",
                "3.3 Optimización completa de secciones clave en el perfil de LinkedIn.",
                "3.4 Uso de palabras clave estratégicas para motores de búsqueda de reclutadores.",
                "3.5 Estrategias de networking digital activo."
            ],
            "Tema 4: Simulacro de entrevista técnica.": [
                "4.1 Preparación de respuestas metodológicas (Método STAR) para entrevistas de RRHH.",
                "4.2 Repaso de preguntas técnicas fundamentales sobre JS, Python y SQL.",
                "4.3 Resolución de retos de algoritmos o pruebas de código en vivo.",
                "4.4 Técnicas de comunicación efectiva al explicar soluciones de ingeniería.",
                "4.5 Sesión de feedback constructivo y plan de mejora individual."
            ]
        },
        "Módulo 5: DevOps, Contenedores y Automatización (CI/CD) (MÓDULO ACTUALIZADO)": {
            "Tema 1: Introducción a Contenedores con Docker.": [
                "1.1 Concepto de virtualización vs. Contenedores.",
                "1.2 Instalación y comandos básicos de Docker.",
                "1.3 Creación de imágenes con Dockerfile.",
                "1.4 Manejo de volúmenes y persistencia de datos.",
                "1.5 Orquestación básica con Docker Compose (Backend + DB)."
            ],
            "Tema 2: Integración Continua (CI) con GitHub Actions.": [
                "2.1 Conceptos de Integración y Entrega Continua (CI/CD).",
                "2.2 Estructura de archivos YAML para flujos de trabajo (Workflows).",
                "2.3 Configuración de disparadores (Triggers) por Push y Pull Request.",
                "2.4 Automatización de pruebas unitarias en la nube.",
                "2.5 Verificación automática de calidad de código (Linters)."
            ],
            "Tema 3: Despliegue Continuo (CD) y Monitoreo.": [
                "3.1 Estrategias de despliegue sin tiempo de inactividad (Zero Downtime).",
                "3.2 Conexión segura de GitHub Actions con servidores nube (Render/Railway).",
                "3.3 Manejo de variables de entorno estables en producción.",
                "3.4 Implementación de sistemas de monitoreo y alertas de caídas.",
                "3.5 Lectura remota de logs y resolución de incidentes en vivo."
            ],
            "Tema 4: Introducción al Cloud Computing avanzado.": [
                "4.1 Diferencias entre IaaS, PaaS y SaaS.",
                "4.2 Visión general de los gigantes de la nube (AWS, Google Cloud, Azure).",
                "4.3 Concepto y uso de almacenamiento en la nube (ej. AWS S3 para imágenes).",
                "4.4 Arquitecturas Serverless y funciones en la nube.",
                "4.5 Estimación de costos y buenas prácticas de seguridad Cloud."
            ]
        }
    },
    "Semestre 4: Nivel Técnico Medio II - Innovación: Inteligencia Artificial y Apps Móviles": {
        "Módulo 1: Tu App en el Celular: Introducción a React Native": {
            "Tema 1: Preparación de entornos (Android Studio/Expo).": [
                "1.1 Diferencias de rendimiento entre desarrollo híbrido y nativo puro.",
                "1.2 Instalación de Node.js, configuraciones y uso de Expo CLI.",
                "1.3 Vinculación y depuración usando Expo Go en un dispositivo celular físico.",
                "1.4 Análisis de la estructura de archivos de un proyecto React Native.",
                "1.5 Instalación y configuración de emuladores virtuales (Android Virtual Device)."
            ],
            "Tema 2: Componentes nativos e interfaces móviles.": [
                "2.1 Uso y equivalencias de componentes base: View, Text e Image.",
                "2.2 Manejo de listas y desbordamientos con ScrollView y FlatList.",
                "2.3 Aplicación de reglas de diseño CSS mediante el objeto StyleSheet.",
                "2.4 Creación de botones y áreas interactivas con TouchableOpacity.",
                "2.5 Adaptación de layouts usando Flexbox para pantallas móviles de diferentes tamaños."
            ],
            "Tema 3: Navegación móvil.": [
                "3.1 Instalación y estructura del contenedor base de React Navigation.",
                "3.2 Implementación de navegación por pilas (Stack Navigation).",
                "3.3 Creación de barras de pestañas inferiores (Tab Navigation).",
                "3.4 Implementación de menú lateral oculto (Drawer Navigation).",
                "3.5 Lógica para el paso de parámetros y datos entre distintas pantallas."
            ],
            "Tema 4: Consumo de APIs desde la App.": [
                "4.1 Configuración de Fetch/Axios para peticiones de red móviles.",
                "4.2 Manejo visual de actividad de carga usando ActivityIndicator.",
                "4.3 Despliegue de datos traídos desde el backend Django en listas de la App.",
                "4.4 Construcción y validación de formularios nativos para envío de datos.",
                "4.5 Implementación del flujo completo de autenticación y sesiones en la App."
            ]
        },
        "Módulo 2: Funciones Avanzadas Móviles": {
            "Tema 1: Uso de Cámara y Galería.": [
                "1.1 Solicitud al sistema operativo de permisos de hardware del dispositivo.",
                "1.2 Instalación y configuración del paquete expo-image-picker.",
                "1.3 Activación y captura de fotografía directa desde la cámara.",
                "1.4 Apertura y selección de archivos desde el carrete de la galería local.",
                "1.5 Conversión de imágenes y envío seguro al servidor backend."
            ],
            "Tema 2: Geolocalización y GPS.": [
                "2.1 Gestión de permisos de ubicación en primer y segundo plano.",
                "2.2 Configuración y uso de los métodos de expo-location.",
                "2.3 Extracción de coordenadas precisas (Latitud y Longitud) del dispositivo.",
                "2.4 Implementación de rastreo de cambio de ubicación en tiempo real.",
                "2.5 Integración visual de pines y Mapas usando react-native-maps."
            ],
            "Tema 3: Almacenamiento local en el dispositivo.": [
                "3.1 Concepto y limitaciones del almacenamiento asíncrono (AsyncStorage).",
                "3.2 Guardado seguro de tokens de sesión JWT móviles para auto-login.",
                "3.3 Persistencia de datos ligeros como configuraciones y preferencias de usuario.",
                "3.4 Manejo de caché y lógica de estado offline básico para la aplicación.",
                "3.5 Funciones de cierre de sesión y borrado completo de datos locales."
            ],
            "Tema 4: Preparación para tiendas de Apps.": [
                "4.1 Configuración de metadatos en app.json (íconos, pantallas de carga splash).",
                "4.2 Generación técnica de credenciales y firmas de seguridad (Keystores).",
                "4.3 Ejecución de comandos de compilación para archivos AAB (Android App Bundle).",
                "4.4 Proceso de apertura de cuenta oficial de desarrollador de Google Play.",
                "4.5 Políticas de revisión, carga del archivo y publicación de la App en la tienda."
            ]
        },
        "Módulo 3: El Futuro Hoy: Integración de Inteligencia Artificial": {
            "Tema 1: Consumo de APIs de OpenAI (ChatGPT).": [
                "1.1 Creación de cuenta en plataforma de desarrolladores y obtención de API Keys de OpenAI.",
                "1.2 Diferencias y casos de uso entre modelos de lenguaje (Ej. GPT-3.5 vs GPT-4).",
                "1.3 Realización de peticiones HTTP a los endpoints de Completions y Chat.",
                "1.4 Ajuste de parámetros de control de IA (Temperature, Max Tokens, System Prompt).",
                "1.5 Monitorización de consumo de tokens y gestión de costos operativos de API."
            ],
            "Tema 2: Generación de imágenes por IA.": [
                "2.1 Funcionamiento conceptual del modelo generativo DALL-E.",
                "2.2 Ingeniería de Prompts: Técnicas efectivas para redacción de descripciones de imágenes.",
                "2.3 Estructuración y envío de peticiones asíncronas de generación visual.",
                "2.4 Recepción de respuesta, parseo y renderizado de la imagen final mediante URLs.",
                "2.5 Integración práctica de la generación de imágenes en formularios web o aplicaciones móviles."
            ],
            "Tema 3: Desarrollo de un Chatbot automatizado.": [
                "3.1 Definición inicial de la personalidad, límites y formato del bot (System Prompting).",
                "3.2 Programación de arreglos para el mantenimiento del contexto conversacional (Memoria de chat).",
                "3.3 Inyección programática de información del negocio como contexto base (Pre-prompts).",
                "3.4 Construcción de una interfaz de chat amigable y fluida en React o React Native.",
                "3.5 Despliegue del asistente de atención al cliente vinculado a datos reales del entorno."
            ],
            "Tema 4: Búsqueda inteligente (RAG) aplicada a bases de datos.": [
                "4.1 Concepto y arquitectura del Retrieval-Augmented Generation (RAG).",
                "4.2 Entendimiento y generación de representaciones vectoriales (Embeddings).",
                "4.3 Realización de búsquedas de similitud semántica básica de textos.",
                "4.4 Flujo de conexión para proveer a la IA con contexto extraído de la base de datos local.",
                "4.5 Generación de respuestas naturales, altamente contextualizadas y libres de alucinaciones."
            ]
        },
        "Módulo 4: Gran Proyecto Integrador Final": {
            "Tema 1: Desarrollo de sistema unificado: App Móvil + Web Admin + IA.": [
                "1.1 Definición estricta de alcance técnico para un caso de uso real de comercio o servicio.",
                "1.2 Orquestación de la conexión del ecosistema completo (Backend Django + Web React + App Expo).",
                "1.3 Inserción estratégica del módulo de Inteligencia Artificial como valor agregado al proyecto.",
                "1.4 Verificación del flujo completo del modelo de negocio, desde el usuario móvil hasta el administrador web.",
                "1.5 Validaciones de sincronización de datos de operaciones en tiempo real entre plataformas."
            ],
            "Tema 2: Fase de pruebas y optimización de rendimiento.": [
                "2.1 Ejecución de pruebas de estrés y verificación de límites transaccionales del sistema.",
                "2.2 Sesiones intensivas de corrección de bugs críticos y errores menores de consola (Bugfixing).",
                "2.3 Optimización técnica del peso de imágenes, consultas a base de datos y tiempos de carga.",
                "2.4 Iteraciones finales sobre la usabilidad y mejora de la experiencia general de usuario (UX).",
                "2.5 Check-list de auditoría de seguridad básica y prevención de exposición de datos."
            ],
            "Tema 3: Despliegue absoluto en la nube.": [
                "3.1 Configuración y revisión cruzada de los múltiples entornos de producción (Frontend y Backend).",
                "3.2 Generación y resguardo de Backups de la base de datos de estructura final.",
                "3.3 Monitorización de consumo de memoria y recursos en el servidor nube (Render/Railway).",
                "3.4 Publicación oficial del sistema web y compilación de la versión final del instalador móvil (APK/AAB).",
                "3.5 Redacción de documentación técnica de entrega y manual de usuario para el cliente final."
            ],
            "Tema 4: Defensa del proyecto y graduación.": [
                "4.1 Diseño y estructura de una presentación comercial de alto impacto tecnológico.",
                "4.2 Ejecución de demostración técnica en vivo (Live Demo) de las funcionalidades clave del software.",
                "4.3 Argumentación técnica y justificación de las decisiones de arquitectura y código elegidas.",
                "4.4 Defensa sólida ante posibles preguntas de estrés por parte del tribunal o jurado calificador.",
                "4.5 Evaluación general de competencias adquiridas, retroalimentación final y entrega de certificación."
            ]
        },
        "Módulo 5: Ética en la IA y Ciberseguridad Aplicada": {
            "Tema 1: Ética en algoritmos de IA.": [
                "1.1 Sesgos y discriminación algorítmica.",
                "1.2 Transparencia y explicabilidad.",
                "1.3 Impacto social de la IA.",
                "1.4 Responsabilidad civil.",
                "1.5 Regulaciones y normativas globales."
            ],
            "Tema 2: Privacidad de datos.": [
                "2.1 Leyes de protección de datos (GDPR).",
                "2.2 Anonimización de datos.",
                "2.3 Consentimiento del usuario.",
                "2.4 Derecho al olvido.",
                "2.5 Políticas de retención."
            ],
            "Tema 3: Fundamentos de Ciberseguridad.": [
                "3.1 Amenazas comunes (Phishing, Malware).",
                "3.2 Ingeniería social.",
                "3.3 Seguridad en contraseñas.",
                "3.4 Autenticación multifactor (MFA).",
                "3.5 Criptografía básica."
            ],
            "Tema 4: Seguridad en el ciclo de desarrollo.": [
                "4.1 DevSecOps.",
                "4.2 Análisis de código estático.",
                "4.3 Gestión de vulnerabilidades.",
                "4.4 Actualización de dependencias.",
                "4.5 Respuesta a incidentes."
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
