# 1. Introducción
El presente Trabajo de Fin de Grado tiene como objetivo el diseño e implementación de una plataforma de software modular para la gestión de activos industriales y la automatización de certificados técnicos legales para la empresa **DuoTech Industrial Service**. Esta herramienta busca facilitar la supervisión y mantenimiento de activos críticos (como compresores, elevadores y cabinas de pintura), asegurando que cada intervención cumpla estrictamente con la normativa de seguridad industrial vigente. Mediante un motor de validación lógica y la automatización documental, la aplicación optimizará los procesos de inspección, eliminando el riesgo de errores humanos y garantizando una trazabilidad integral de los certificados emitidos ante los organismos competentes (Sommerville, 2021; ISO/IEC, 2022).

# 2. Marco teórico
En este capítulo se realiza una revisión del estado actual de las herramientas tecnológicas aplicadas a la gestión de mantenimiento asistido por ordenador (GMAO) y la digitalización de procesos legales en la industria. Se examinan las metodologías existentes para el inventariado de activos, la monitorización de parámetros técnicos y la generación de documentación técnica oficial (Bass et al., 2021). También se abordan los mecanismos de integridad de datos en arquitecturas web modernas y se revisan las mejores prácticas en el desarrollo de plataformas industriales destinadas a pequeñas y medianas empresas (PYMEs) del sector servicios (Percival & Gregory, 2020; Kleppmann, 2022).

## 2.1. Justificación
Las pequeñas y medianas empresas dedicadas al mantenimiento industrial a menudo enfrentan limitaciones significativas en términos de recursos para implementar sistemas de gestión avanzados, lo que las obliga a depender de procesos manuales o herramientas ofimáticas genéricas (Excel, Word) para la emisión de certificados legales. Esta dependencia aumenta la probabilidad de errores en la captura de datos técnicos y dificulta el cumplimiento riguroso de los calendarios de revisiones preventivas. Las soluciones de software corporativo (ERP) disponibles en el mercado, aunque robustas, suelen ser extremadamente costosas y carecen de la especificidad necesaria para abordar los reglamentos técnicos locales de Cantabria de manera ágil. Este panorama subraya la necesidad de desarrollar una plataforma especializada que permita la validación automática de parámetros industriales y la gestión centralizada de la maquinaria. El desarrollo de DuoCert tiene como propósito central aumentar la seguridad, la eficacia y la fiabilidad de los servicios de inspección técnica de DuoTech, optimizando la custodia documental y la respuesta ante las exigencias de la Consejería de Industria.

## 2.2. Solución propuesta
La solución propuesta consiste en el desarrollo de una aplicación web innovadora que automatiza integralmente el ciclo de vida de los activos industriales gestionados por DuoTech, desde su registro técnico hasta la emisión y firma de certificados legales. Esta plataforma introduce importantes ventajas competitivas respecto a las soluciones actuales:

En primer lugar, DuoCert incorpora un **motor de reglas especializado** que analiza los datos técnicos en tiempo real (presiones, estados estructurales, medidas de seguridad) y bloquea la emisión de certificados si los valores no se ajustan a la normativa legal. Esta precisión garantiza que ningún equipo sea validado fuera de rango, una funcionalidad inexistente en herramientas generales.

En segundo lugar, la solución es **accesible y económica**, diseñada específicamente para las necesidades operativas de una PYME de servicios. A diferencia de los grandes sistemas CMMS, DuoCert proporciona un enfoque rentable que no requiere infraestructuras pesadas ni licencias prohibitivas.

Además, la aplicación presenta una **interfaz intuitiva adaptada al técnico de campo**, permitiendo la toma de datos mediante dispositivos móviles directamente en el taller o la nave del cliente. Esto reduce drásticamente el tiempo administrativo y la duplicidad de tareas.

Por último, la plataforma utiliza una **arquitectura basada en microservicios y bases de datos flexibles (NoSQL)**, lo que permite añadir nuevos tipos de maquinaria y normativas futuras sin necesidad de reestructurar el sistema, asegurando una escalabilidad constante.

En resumen, esta aplicación no solo mejora la eficiencia operativa de DuoTech, sino que proporciona un diferenciador claro mediante la seguridad técnica garantizada por software y la agilidad en la entrega de documentación oficial.

## 2.3. Objetivos General y Específicos
**Objetivo General:**
Diseñar e implementar una plataforma de software modular para la gestión de activos industriales y la automatización de certificados técnicos legales para DuoTech Industrial Service.

**Objetivos Específicos:**
1. Analizar y documentar los requisitos técnicos y legales de certificación para la maquinaria industrial objeto de estudio.
2. Diseñar la arquitectura del sistema y el modelo de datos (basado en MongoDB) que garantice la integridad y trazabilidad de los activos.
3. Implementar la solución tecnológica mediante un stack moderno (FastAPI/React) para crear un producto mínimo viable funcional.
4. Validar la precisión del motor de reglas y la seguridad del sistema mediante métricas de ingeniería de software y pruebas de cumplimiento.

## 2.4. Estructura del trabajo
El TFG está estructurado en varios capítulos que abordan desde la definición del problema hasta la validación de la solución:
* **Capítulo 1: Introducción y Marco Teórico.** Presenta el contexto, la problemática industrial, la justificación de la propuesta y los objetivos.
* **Capítulo 2: Estado del Arte.** Revisión de tecnologías de mantenimiento industrial, análisis de soluciones competitivas y tendencias en digitalización 4.0.
* **Capítulo 3: Metodología.** Descripción del proceso de desarrollo ágil, herramientas tecnológicas empleadas (Python, React, Docker) y fases de implementación.
* **Capítulo 4: Desarrollo y Resultados.** Detalle técnico de la construcción del software, implementación del motor de reglas y análisis de los resultados obtenidos.
* **Capítulo 5: Conclusiones y Trabajos Futuros.** Reflexión sobre el cumplimiento de objetivos, limitaciones del proyecto y posibles evoluciones del sistema.

## 2.5. ESTADO DEL ARTE
En este apartado se analizan las soluciones existentes en el mercado para la gestión de activos y el cumplimiento normativo industrial. 
Entre las soluciones más destacadas se encuentran sistemas como **SAP PM o IBM Maximo**, herramientas líderes en la gestión de activos empresariales (EAM). Aunque son extremadamente potentes, su complejidad técnica y su elevado coste las hacen inaccesibles para DuoTech, además de requerir una adaptación forzada de los procesos de la empresa al software (Bass et al., 2021).

Por otro lado, existen aplicaciones genéricas de gestión de mantenimiento que ofrecen interfaces sencillas, pero carecen de la profundidad técnica necesaria para la validación de reglamentos específicos de industria, delegando la responsabilidad de la veracidad legal totalmente en el operario (Crespo Márquez, 2022).

La tendencia actual en la **Industria 4.0** apunta hacia la integración de sistemas expertos y validación automática mediante algoritmos que aseguren la integridad de los datos críticos (Percival & Gregory, 2020). El uso de arquitecturas basadas en APIs permite que la información técnica fluya de manera segura entre el operario y la oficina central.

Este análisis comparativo ayuda a identificar el nicho donde se inserta **DuoCert**, destacando como valor diferencial la especialización en la normativa técnica de Cantabria, el motor de validación en tiempo real y la asequibilidad para la pequeña empresa de servicios industriales.

**Referencias:**
* Bass, L., Clements, P., & Kazman, R. (2021). *Software Architecture in Practice*. Addison-Wesley Professional.
* Crespo Márquez, A. (2022). *Digital Maintenance Management: Guidance for Optimization and Continuous Improvement*. Springer. 
* ISO/IEC. (2022). *ISO/IEC 27001:2022. Information security, cybersecurity and privacy protection*.
* Kleppmann, M. (2022). *Designing Data-Intensive Applications*. O'Reilly Media.
* Percival, H., & Gregory, B. (2020). *Architecture Patterns with Python*. O'Reilly Media.
* Sommerville, I. (2021). *Engineering Software Products*. Pearson.

# Revisión Bibliográfica: Fundamentos de DuoCert

## 1. Ingeniería de Software y Gestión de Productos
Para establecer el ciclo de vida del proyecto, se ha tomado como referencia la obra de **Sommerville (2021)**. Esta fuente es fundamental para justificar el desarrollo de un "producto mínimo viable" (MVP) y el uso de metodologías ágiles, permitiendo que DuoCert evolucione de forma incremental basándose en los requisitos técnicos de DuoTech.

* **Referencia:** Sommerville, I. (2021). *Engineering Software Products*. Pearson.  
    [https://www.pearson.com/en-gb/subject-catalog/p/engineering-software-products-an-introduction-to-modern-software-engineering/P200000003291/9781292376349]

## 2. Seguridad de la Información y Estándares
Dado que DuoCert gestiona certificados con validez legal, la seguridad y la integridad de los datos son críticas. Se ha consultado el estándar **ISO/IEC 27001 (2022)** para integrar buenas prácticas de ciberseguridad, asegurando que el acceso a la plataforma y la custodia de los certificados técnicos cumplan con los niveles de protección requeridos por la industria.

* **Referencia:** ISO/IEC. (2022). *ISO/IEC 27001:2022. Information security, cybersecurity and privacy protection*.  
    [https://www.iso.org/standard/27001]

## 3. Sistemas de Gestión de Mantenimiento (GMAO)
La base teórica sobre la que se asienta el inventariado y el mantenimiento preventivo de máquinas (compresores, elevadores, etc.) proviene de **Crespo Márquez (2022)**. Su estudio sobre los sistemas de gestión de mantenimiento asistido por ordenador permite estructurar la base de datos de DuoCert de forma que cada activo sea perfectamente trazable y cumpla su ciclo de vida útil.

* **Referencia:** Crespo Márquez, A. (2022). *Digital Maintenance Management: Guidance for Optimization and Continuous Improvement*. Springer.  
    [https://link.springer.com/book/10.1007/978-3-030-66442-8]

## 4. Arquitectura de Software y Patrones
Para el diseño del sistema bajo una arquitectura moderna y escalable, se han utilizado tres fuentes clave que justifican el stack tecnológico seleccionado (**FastAPI, React y MongoDB**):

* **Arquitectura General:** **Bass et al. (2021)** proporcionan los patrones necesarios para diseñar una plataforma web robusta.  
    [https://www.informit.com/store/software-architecture-in-practice-9780136886099]
* **Implementación en Python:** La guía de **Percival & Gregory (2020)** es la base técnica para el uso de **FastAPI**, permitiendo implementar el motor de reglas de certificación de manera desacoplada.  
    [https://www.cosmicpython.com/]
* **Gestión de Datos (NoSQL):** El trabajo de **Kleppmann (2022)** explica cómo las bases de datos orientadas a documentos gestionan mejor la heterogeneidad de los activos industriales.  
    [https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/]
