# Capítulo 2: Análisis de Requisitos y Modelado del Dominio

Este capítulo tiene como objetivo establecer una base común de entendimiento sobre las funciones que el sistema **DuoCert** debe realizar. Se busca dirigir el desarrollo hacia la solución correcta describiendo los conceptos más importantes del contexto como objetos del dominio y los enlaces entre ellos, alcanzando un acuerdo entre los interesados (DuoTech Industrial Service) y el desarrollador sobre los límites y capacidades del sistema.

## 2.1 Modelo del Dominio

Realizamos una abstracción de la realidad del mantenimiento industrial para comprender la estructura y dinámica de la organización en la que el sistema se desarrollará.

### 2.1.1 Diagramas del Modelo

#### A. Estructura del Dominio (Diagrama de Clases)
Define los conceptos fundamentales y las relaciones estáticas que rigen el negocio de la certificación.

![Diagrama de Clases](../../main/Imagenes/Diagrama_ModeloDominio.svg)

**Descripción Técnica:**
El modelo utiliza un enfoque de composición donde la entidad **Cliente** vincula los diversos activos. Se destaca el desacoplamiento del **Motor de Reglas**, lo que permite que la lógica de validación técnica evolucione independientemente de la estructura de almacenamiento de los activos.

#### B. Instanciación del Modelo (Diagrama de Objetos)
Representa un escenario real para validar la viabilidad del diseño (ejemplo: un compresor Atlas Copco de Talleres Cantabria S.A.).

![Diagrama de Objetos](../../main/Imagenes/Diagrama_Objetos.svg)

**Descripción Técnica:**
Valida la jerarquía de datos al mostrar cómo un activo específico se vincula a una inspección concreta con valores de campo determinados, transformando datos brutos en una entidad certificable.

#### C. Dinámica del Sistema (Diagrama de Estados)
Describe el ciclo de vida de los activos y sus certificados a lo largo del tiempo.

![Diagrama de Estados](../../main/Imagenes/Diagrama_Estados.svg)

**Descripción Técnica:**
Garantiza que un certificado solo alcance el estado "Emitido" tras superar con éxito la validación normativa. Gestiona la transición automática al estado de "Próximo Vencimiento" para activar el sistema de alertas preventivas.

### 2.1.2 Glosario (Vocabulario Común)
* **Activo Industrial:** Equipo técnico (elevador, compresor, cabina de pintura) sujeto a regulaciones de seguridad.
* **Apto:** Estado legal de una máquina que cumple con todos los rangos del motor de reglas tras la inspección.
* **CSV (Código Seguro de Verificación):** Identificador alfanumérico único para verificar la autenticidad del certificado.
* **Dispositivo de Campo:** Terminal móvil o tablet utilizado por el técnico para la captura de datos en el taller.
* **Estado de Vigencia:** Indicador temporal que determina si un activo puede operar legalmente.
* **Formulario Dinámico:** Interfaz que adapta sus campos según el tipo de activo seleccionado (ej: presión en compresores).
* **Idoneidad:** Cualidad de un activo de cumplir con los rangos técnicos permitidos por la normativa legal vigente.
* **Inmutable:** Propiedad del registro de inspecciones pasadas que impide su modificación para garantizar la trazabilidad legal.
* **Motor de Reglas:** Algoritmo lógico que automatiza la comparación entre valores de campo y constantes normativas.
* **SPA (Single Page Application):** Arquitectura web que permite una navegación fluida sin recargas, necesaria para la eficiencia en el taller.

---

## 2.2 Requisitos Suplementarios (No Funcionales)

Especifican las propiedades del sistema y restricciones de entorno necesarias para su correcto funcionamiento:

* **RNF1: Rendimiento:** El proceso de validación técnica y generación del certificado no debe superar los 3 segundos.
* **RNF2: Plataforma y Accesibilidad:** La aplicación debe ser una solución web con diseño adaptable (responsive) para dispositivos móviles y tablets.
* **RNF3: Seguridad:** Implementar protocolos de autenticación y autorización basados en roles (Técnico/Administrador) para asegurar la integridad de los datos.
* **RNF4: Escalabilidad y Extensibilidad:** La arquitectura debe permitir la incorporación de nuevos tipos de maquinaria y normativas sin requerir cambios estructurales.
* **RNF5: Confiabilidad:** Asegurar el almacenamiento íntegro de registros y firmas, garantizando la disponibilidad permanente del historial legal.

---

## 2.3 Disciplina de Requisitos

A partir de la abstracción realizada, especificamos los requisitos del sistema mediante casos de uso para definir los límites de la solución.

### 2.3.1 Encontrar Actores y Casos de Uso
Se identifican los perfiles que interactúan con el sistema:
1. **Técnico de Campo:** Usuario responsable de la captura de datos y generación de certificados.
2. **Administrador:** Encargado de la gestión de activos, clientes y configuración normativa.

![Diagrama de Casos de Uso](../../main/Imagenes/Diagrama_CDU.svg)

### 2.3.2 Priorización de Casos de Uso
| ID | Caso de Uso | Prioridad | Justificación |
| :--- | :--- | :--- | :--- |
| **CU01** | **Realizar Inspección** | **Crítica** | Núcleo del sistema; permite la captura y validación. |
| **CU02** | **Generar Certificado** | **Crítica** | Objetivo principal para el cumplimiento legal del cliente. |
| **CU03** | **Gestionar Inventario** | Alta | Necesario para mantener la base de datos de activos. |
| **CU04** | **Configurar Reglas** | Alta | Permite la adaptabilidad a cambios en la normativa legal. |

### 2.3.3 Detalle de Caso de Uso Principal (CU01: Realizar Inspección)
**Flujo Principal:**
1. El técnico selecciona el activo industrial de la lista.
2. El sistema despliega el **Formulario Dinámico** correspondiente al tipo de activo.
3. El técnico introduce los parámetros técnicos recogidos en la revisión física.
4. El sistema invoca al **Motor de Reglas** para contrastar los valores.
5. El sistema notifica el resultado de idoneidad y guarda el registro de forma inmutable.

![Diagrama detalle CU01](../../main/Imagenes/Diagrama_Detalle_CU01.svg)

### 2.3.4 Prototipado de Casos de Uso
Se ha diseñado una interfaz de usuario tipo SPA orientada a la eficiencia en planta. El prototipo prioriza botones de gran tamaño para facilitar la interacción en el taller y una navegación simplificada que reduce la carga cognitiva del técnico durante la captura de datos definida en el **RF2**.