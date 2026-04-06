# Capítulo 2: Análisis de Requisitos y Modelado del Dominio

Este capítulo tiene como objetivo establecer una base común de entendimiento sobre las funciones que el sistema **DuoCert** debe realizar, definiendo los límites técnicos, los conceptos de negocio y los requisitos del proyecto. Se realiza una abstracción de la realidad del mantenimiento industrial y la certificación de activos para la empresa **DuoTech Industrial Service**, describiendo los elementos esenciales del dominio y especificando tanto los requisitos funcionales como los no funcionales mediante procesos de ingeniería de requisitos. 

Dado que la totalidad de los roles (desarrollador, analista y diseñador) están a cargo de una única persona, se establece una metodología que garantiza la trazabilidad entre las necesidades legales de industria y la arquitectura lógica del sistema.

## 2.1 Modelo del Dominio
El modelo del dominio identifica y representa los objetos y conceptos fundamentales del sistema, así como las relaciones entre ellos. En el contexto de DuoCert, se han identificado los siguientes elementos clave:

* **Activo Industrial (Máquina):** Representa cada equipo técnico (elevador, compresor, cabina de pintura) con atributos como número de serie, marca, modelo, ubicación técnica y parámetros de diseño.
* **Cliente:** La entidad propietaria de los activos, vinculada a una ubicación física y responsable legal de la maquinaria.
* **Inspección / Mantenimiento:** El proceso técnico donde se recogen valores de campo (presiones, estados estructurales, medidas de seguridad).
* **Motor de Reglas (Validación):** El componente lógico encargado de contrastar los datos de la inspección con los rangos permitidos por la normativa vigente.
* **Certificado Técnico:** El documento resultante que acredita la idoneidad del activo tras una inspección exitosa.
* **Alertas de Vencimiento:** Concepto encargado de la gestión temporal de la validez de los activos, asegurando el ciclo de mantenimiento preventivo.

### 2.1.1 Diagramas del Modelo

#### A. Análisis de Interacciones (Diagrama de Casos de Uso)
![Diagrama de Casos de Uso](DuoCert/Imagenes/Diagrama_CasosDeUso_TFG.svg)

**Descripción Técnica:**
El diagrama de casos de uso representa las funcionalidades del sistema desde la perspectiva de los actores involucrados. Se han identificado dos perfiles principales: el **Técnico de Campo** (operativa y captura de datos) y el **Administrador** (gestión global y configuración normativa). Se destaca la relación de inclusión (*include*) entre la inspección y la validación, garantizando que el cumplimiento legal sea una condición previa para la emisión documental.

#### B. Estructura de Datos y Relaciones (Diagrama de Clases)
![Diagrama de Clases](DuoCert/Imagenes/Diagrama_Clases_TFG.svg)

**Descripción Técnica:**
Este diagrama define la arquitectura de información de DuoCert. Utiliza un enfoque de composición donde la entidad **EmpresaCliente** vincula los diversos activos industriales. El componente **MotorReglas** se presenta de forma desacoplada, permitiendo que la lógica de validación técnica evolucione independientemente de la estructura de almacenamiento de los activos.

#### C. Dinámica del Sistema (Diagrama de Estados)
![Diagrama de Estados](DuoCert/Imagenes/Diagrama_Estados_TFG.svg)

**Descripción Técnica:**
Ilustra el ciclo de vida de la certificación técnica. El flujo garantiza que un activo solo alcance el estado "Emitido" tras superar con éxito la validación normativa. Asimismo, el modelo gestiona la transición automática al estado de "Próximo Vencimiento" para disparar el sistema de alertas preventivas antes de que el certificado quede caducado.

#### D. Instanciación del Modelo (Diagrama de Objetos)
![Diagrama de Objetos](DuoCert/Imagenes/Diagrama_Objetos_TFG.svg)

**Descripción Técnica:**
Representa una instancia real basada en un escenario operativo de DuoTech (ejemplo: Talleres Cantabria S.A. y un compresor industrial). Valida la viabilidad del diseño al mostrar cómo los datos recogidos en campo se transforman en un objeto Certificado con un identificador único, asegurando la trazabilidad total del activo.


## 2.2 Requisitos del Sistema

Para delimitar los límites de DuoCert y asegurar que la solución resuelve la problemática detectada en DuoTech Industrial Service, se han definido los siguientes requisitos técnicos:

### 2.2.1 Requisitos Funcionales (RF)

* **RF1: Gestión de Activos Industriales:** El sistema debe permitir el alta, baja y modificación de máquinas, permitiendo su categorización por tipo técnico (elevadores, compresores, cabinas de pintura, etc.).
* **RF2: Captura de Datos en Campo:** Proveer interfaces y formularios dinámicos para que el técnico introduzca los parámetros técnicos recogidos durante la revisión física.
* **RF3: Validación Automática (Motor de Reglas):** El sistema debe validar automáticamente si los parámetros introducidos cumplen con los rangos definidos por la normativa de seguridad industrial vigente.
* **RF4: Generación de Certificados PDF:** Generar de forma automatizada documentos oficiales de certificación en formato electrónico, siguiendo los estándares requeridos por la industria.
* **RF5: Histórico y Trazabilidad:** Mantener un registro persistente e inmutable de todas las inspecciones pasadas asociadas a un activo para garantizar su seguimiento legal.
* **RF6: Sistema de Notificaciones:** Emitir alertas automáticas sobre los próximos vencimientos de certificados para facilitar la planificación del mantenimiento preventivo.

### 2.2.2 Requisitos No Funcionales (Suplementarios)

* **RNF1: Rendimiento:** El proceso de validación de datos y la generación del certificado final no debe superar un tiempo de respuesta de 3 segundos.
* **RNF2: Plataforma y Accesibilidad:** La aplicación debe ser una solución web con diseño adaptable (responsive), garantizando su correcto funcionamiento en dispositivos móviles y tablets durante las tareas en taller.
* **RNF3: Seguridad:** El sistema debe implementar protocolos de autenticación y autorización basados en roles (Técnico/Administrador) para asegurar la integridad de los datos.
* **RNF4: Escalabilidad de Datos:** La arquitectura de almacenamiento debe permitir la incorporación de nuevos tipos de maquinaria con atributos heterogéneos sin requerir cambios estructurales en el sistema.
* **RNF5: Confiabilidad:** El sistema debe asegurar el almacenamiento íntegro de registros técnicos y firmas, garantizando la disponibilidad del historial de certificados en todo momento.