# 1. Introducción
El presente Trabajo de Fin de Grado tiene como objetivo el diseño e implementación de una plataforma de software modular para la gestión de activos industriales y la automatización de certificados técnicos legales para la empresa **DuoTech Industrial Service**. Esta herramienta busca facilitar la supervisión y mantenimiento de activos críticos (como compresores, elevadores y cabinas de pintura), asegurando que cada intervención cumpla estrictamente con la normativa de seguridad industrial vigente. Mediante un motor de validación lógica y la automatización documental, la aplicación optimizará los procesos de inspección, eliminando el riesgo de errores humanos y garantizando una trazabilidad integral de los certificados emitidos ante los organismos competentes (Sommerville, 2021; ISO/IEC, 2022).

# 2. Marco teórico
El mantenimiento industrial y la certificación de activos representan pilares fundamentales para la seguridad operativa en cualquier entorno productivo. En la actualidad, la gestión de estas tareas se enfrenta a un entorno de creciente complejidad técnica y legal. Según Crespo Márquez (2022), la digitalización del mantenimiento no es solo una mejora operativa, sino una necesidad estratégica para asegurar la optimización y el cumplimiento normativo en la gestión de activos.

La ingeniería de software moderna proporciona las metodologías necesarias para abordar este reto. Como señala Sommerville (2021), el desarrollo de productos de software debe centrarse en procesos incrementales que permitan capturar la lógica de negocio de forma precisa. En el caso de DuoCert, esto implica traducir reglamentos técnicos complejos en motores de validación lógica que operen de forma transparente para el usuario final.

Asimismo, la integridad de la información es crítica cuando se gestionan documentos con validez jurídica. La adopción de estándares internacionales, como ISO/IEC 27001 (2022), fundamenta la necesidad de implementar protocolos que garanticen que los datos recogidos en campo y los certificados generados mantengan su confidencialidad y veracidad a lo largo de todo su ciclo de vida.

Desde la perspectiva de la arquitectura de datos, el manejo de activos industriales heterogéneos requiere estructuras flexibles. Kleppmann (2022) destaca que el diseño de aplicaciones intensivas en datos debe priorizar la escalabilidad y la capacidad de adaptarse a esquemas variables, lo cual es esencial cuando se pretende gestionar desde un elevador hidráulico hasta una instalación de aire comprimido bajo una misma plataforma.

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

1. Ingeniería de Requisitos: Ejecutar la ingeniería de requisitos para identificar y documentar las necesidades técnicas y las normativas legales de certificación aplicables a la maquinaria industrial objeto de estudio.

2. Análisis y Diseño: Diseñar la arquitectura del sistema y el modelo de datos que garantice la trazabilidad y la integridad de los activos gestionados.

3. Desarrollo: Implementar una solución tecnológica que materialice el diseño realizado en un producto mínimo viable funcional.

4. Ingeniería de Calidad: Validar la integridad del sistema y la precisión del motor de reglas mediante métricas de ingeniería de software y pruebas de cumplimiento.

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
Bass, L., Clements, P., y Kazman, R. (2021). *Software Architecture in Practice* (4ª ed.). Addison-Wesley Professional. [https://www.informit.com/store/software-architecture-in-practice-9780136886099]

Crespo Márquez, A. (2022). *Digital Maintenance Management: Guidance for Optimization and Continuous Improvement*. Springer. [https://link.springer.com/book/10.1007/978-3-030-66442-8]

ISO/IEC. (2022). *ISO/IEC 27001:2022. Information security, cybersecurity and privacy protection*. International Organization for Standardization. [https://www.iso.org/standard/27001]

Kleppmann, M. (2022). *Designing Data-Intensive Applications*. O'Reilly Media. [https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/]

Percival, H., y Gregory, B. (2020). *Architecture Patterns with Python*. O'Reilly Media. [https://www.oreilly.com/library/view/architecture-patterns-with/9781492052197/]

Sommerville, I. (2021). *Engineering Software Products: An Introduction to Modern Software Engineering*. Pearson. [https://www.pearson.com/en-gb/subject-catalog/p/engineering-software-products-an-introduction-to-modern-software-engineering/P200000003291/9781292376349]
