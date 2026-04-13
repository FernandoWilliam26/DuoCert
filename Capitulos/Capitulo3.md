# Capítulo 3: Análisis y diseño

Este capítulo describe la fase de diseño técnico del sistema DuoCert, transformando los requisitos analizados previamente en una arquitectura de software funcional. Se aplica el patrón de diseño Modelo-Vista-Controlador (MVC) para asegurar una separación de responsabilidades clara entre la persistencia de datos, la lógica de negocio y la interfaz de usuario.

## 1.1. Modelos
En esta sección se definen las estructuras de datos y componentes lógicos que representan el dominio de DuoCert, enfocados en la gestión de activos industriales:

* **Cliente**: Entidad que almacena los datos de las empresas, incluyendo nombre, tipo de actividad (tipoModa), ubicación y tamaño.
* **Activo Industrial**: Modelo que representa la maquinaria técnica con identificadores únicos (id) y especificaciones.
* **Inspección**: Clase encargada de registrar los parámetros recogidos en campo, el contenido técnico y el estado de validación (EmailStatus).
* **Estado de Inspección (EmailStatus)**: Define el ciclo de vida de la certificación: CREADO, CONFIRMADO, PENDIENTE, ENVIADO y ERROR.
* **Gestor de Almacenamiento (DBHandler)**: Componente responsable de persistir (storeData) y cargar (loadAll) los registros en la base de datos.
* **Motor de Filtro (Filtro)**: Lógica encargada de aplicar criterios técnicos (applyFilter) para clasificar los activos según su estado normativo.
* **Servicio de Notificación (EmailSender)**: Encargado de la lógica de envío de certificados y alertas técnicas mediante protocolos estándar.

## 1.2. Controladores
Los controladores orquestan la comunicación entre los modelos y las peticiones del usuario, centralizando la lógica operativa del backend:

* **RetrieveDataController**: Encargado de obtener los datos de activos desde fuentes externas (fetchFromExternalAPI) y persistirlos en la base de datos (storeInDB).
* **FilterController**: Gestiona la aplicación de criterios de búsqueda (applyFilter) y rangos técnicos sobre la maquinaria inspeccionada.
* **MessageController**: Responsable de generar la información preliminar y procesar los datos para su validación técnica mediante servicios de lógica avanzada.
* **EmailController**: Prepara el documento oficial (prepareEmail) y ejecuta el envío del certificado tras una validación satisfactoria.

## 1.3. Vistas (Prototipado de la interfaz de usuario)
Para la interacción del técnico con el sistema se contemplan cuatro pantallas principales diseñadas para entornos industriales:

1. **MainScreen**: Pantalla de inicio con accesos directos para la obtención de datos, filtrado y visualización general de activos.
2. **FilterScreen**: Interfaz que contiene los campos de criterios técnicos (tipo de activo, ubicación, tamaño) y el botón de aplicación de filtros.
3. **SelectionScreen**: Muestra el listado de activos filtrados con opciones de selección múltiple (checkboxes) para el proceso de certificación.
4. **MessageReview Screen**: Muestra el certificado personalizado por activo y permite la confirmación final o cancelación del envío legal.

## 1.4. Diagrama entidad relación (DER)
El modelo lógico garantiza la integridad y trazabilidad de la información técnica mediante el uso de identificadores y claves:

* **Empresa**: Define los campos de nombre, tipo de actividad, ubicación y tamaño con identificadores únicos (PK).
* **Filtro**: Almacena los criterios y valores de validación junto a su fecha de creación.
* **Email / Certificado**: Registra el destinatario, asunto, contenido y estado del documento, vinculado a un activo mediante una clave foránea (FK).
* **ConfirmationLog**: Sistema de registro de firmas y confirmaciones de envío para asegurar la trazabilidad legal.

## 1.5. Tecnologías utilizadas
Se ha seleccionado un stack tecnológico orientado a la eficiencia y el cumplimiento de los requisitos no funcionales:

* **FastAPI (Python)**: Utilizado como servidor REST para orquestar las llamadas a la lógica de negocio y servicios externos (IA, SMTP).
* **MongoDB**: Seleccionado para la persistencia de los modelos de activos y certificados debido a su flexibilidad de esquemas.
* **React**: Framework para la construcción de la interfaz de usuario (SPA) definida en las vistas.
* **Docker**: Contenerización de la API y la base de datos para asegurar un despliegue consistente en entornos locales y de producción.

## 1.6. Diagrama de despliegue
La infraestructura del sistema se organiza en tres niveles principales para asegurar la disponibilidad:

* **Cliente**: Aplicación React ejecutada en el navegador web que se comunica mediante protocolos HTTP/JSON.
* **Servidor**: API encargada de la lógica de lectura/escritura en base de datos y la orquestación de servicios externos.
* **Servicios Externos**: Integración con servicios de obtención de datos, lógica de validación avanzada y protocolos de envío SMTP.