Capítulo 3: Análisis y Diseño del Sistema
=========================================

Este capítulo aborda las disciplinas de análisis y diseño, cuyo objetivo es refinar los requisitos de captura para lograr una comprensión precisa de los mismos y estructurar el sistema de forma mantenible. Se desarrollan modelos enfocados en los requisitos no funcionales y en el dominio de la solución, preparando el entorno para la implementación y las pruebas.

3.1. Análisis de la Arquitectura
--------------------------------

Se ha definido una arquitectura basada en el patrón Modelo-Vista-Controlador (MVC), diseñada para desacoplar la interfaz de usuario de la lógica de negocio y la persistencia de datos.

*   **Tecnología de Distribución**: Se utiliza **FastAPI** para gestionar la concurrencia y la comunicación asíncrona entre servicios.
    
*   **Tecnología de Base de Datos**: Se implementa una solución de persistencia utilizando **MongoDB** para soportar la heterogeneidad de los activos industriales.
    
*   **Contenerización**: El sistema se despliega mediante **Docker** para garantizar la portabilidad y el aislamiento del entorno \[cite: 2026-03-27, 89\].
    
*   **Interfaz de Usuario**: Se emplea **React** para construir una Single Page Application (SPA) que materialice las vistas diseñadas.
    

3.2. Análisis y Diseño de Casos de Uso
--------------------------------------

Para cada Caso de Uso (CdU) identificado en el Capítulo 2, se ha diseñado una estructura lógica que garantiza su cumplimiento técnico.

### 3.2.1. Clases de Control (1 por CdU)

Se asigna una clase controladora única por cada caso de uso para manejar el control y la coordinación del mismo:

*   **InspeccionController**: Responsable de coordinar el flujo de captura de datos y validación normativa.
    
*   **CertificadoController**: Maneja la generación del documento PDF y la asignación del Código Seguro de Verificación (CSV).
    
*   **InventarioController**: Gestiona la persistencia de activos y clientes en la base de datos.
    

### 3.2.2. Clases de Vista

Siguiendo las reglas de diseño para la interacción humana y de modelos:

*   **Ventanas Principales**: Se define una clase representante por actor: TecnicoMainView y AdminMainView.
    
*   **Vistas Primitivas**: Se define una clase de vista por cada clase de modelo para permitir la gestión granular de los datos: ActivoView, ClienteView e InspeccionView.
    

3.3. Análisis de Clases y Paquetes
----------------------------------

Las clases se han identificado mediante el estudio del Modelo de Dominio y las descripciones de los CdU, trazando sus nombres y responsabilidades en un Diagrama de Clases de Diseño.

*   **Relaciones**: Se han establecido asociaciones y agregaciones para representar la vinculación entre Clientes y Activos.
    
*   **Estructura de Paquetes**: El sistema se organiza en paquetes de UI, Controlers, Domain e Infrastructure para facilitar el mantenimiento y la extensibilidad.
    

3.4. Estrategia de Producción de Código
---------------------------------------

Como jefe de proyecto, he determinado que la producción se realizará en tres fases críticas para garantizar la trazabilidad:

1.  **Inicio (Esqueleto)**: Configuración del entorno **Docker** y levantamiento del backend base proporcionado por el profesor para asegurar la conectividad inicial \[cite: 2026-03-27\].
    
2.  **Continuación (Cuerpo)**: Implementación de las Clases de Modelo y el Motor de Reglas dentro de los controladores.
    
3.  **Término (Carne)**: Desarrollo de las Clases de Vista en **React** y refinamiento de la generación de documentos PDF.
    

3.5. Medidas de Calidad y Mantenibilidad
----------------------------------------

Para asegurar un software robusto y facilitar la depuración, se aplican las siguientes medidas:

*   **Mantenibilidad Correctiva y Evolutiva**: Uso de tipado estático y validación de esquemas para detectar errores en tiempo de desarrollo.
    
*   **Mantenibilidad Adaptativa**: Desacoplamiento total entre el motor de reglas y la base de datos para permitir cambios en la normativa industrial sin afectar el sistema operativo ni el esqueleto del diseño.
    
*   **Depuración**: Implementación de registros de logs por cada transacción gestionada por los controladores.
    

3.6. Reparto de Tareas y Estimación
-----------------------------------

Dada la naturaleza del proyecto, las actividades han sido estimadas con un rango de **2 a 20 horas** para mantener la cohesión.

**Actividad**

Definición de Modelos y Esquemas

Implementación de Controladores Base

Desarrollo de Vistas Primitivas (React)

Integración y Pruebas del Motor de Reglas

Configuración de Despliegue en Docker

**Estimación**

8 horas

12 horas

15 horas

10 horas

5 horas

**Responsable**

Desarrollador (DuoCert Team)

Desarrollador (DuoCert Team)

Desarrollador (DuoCert Team)

Desarrollador (DuoCert Team)

Desarrollador (DuoCert Team)