# s7-10-m-javareact


-        Nombre pág web: Home Hero
-        Integrantes equipo
UX UI: Camilo Durand , Raquel Piña

FrontEnd: Cristian Gómez, Luciano Cerullo, Jorge Soto

BackEnd: Silvio Rosas, Carolina Quevedo, Marlon Infante

QA: Fausto Centurión


-        Tecnologías usadas por roles:
 UX/UI: Figma, Adobe Creative Suit
 
 Front End: ReactJs, ViteJs, ReactRouter DOM, Redux Toolkit, react-Icons, TailwindCSS, Formik
 
 Back End: Java, Spring Boot, Hibernate, Maven, Spring Security, Validation, Lombok, JWT, MySQL


-        Links:

Deploy: https://home-hero.vercel.app/

Video Promocional:

Figma: https://www.figma.com/file/7wxsjKXNyK7vPJVJclAfwp/No-Country-s7-10-m-javareact?node-id=1%3A2&t=1Y7GsC006nfgxZoW-1

 Prototipo Figma: https://www.figma.com/proto/7wxsjKXNyK7vPJVJclAfwp/No-Country-s7-10-m-javareact?page-id=1%3A2&node-id=169-57&viewport=-1426%2C-8%2C0.25&scaling=scale-down&starting-point-node-id=169%3A57

-        Descripcion del proyecto:

 Home Hero es una web app que conecta a usuarios y profesionales del hogar (plomeros, electricistas, cerrajeros, etc) por medio de un listado de anuncios que incluyen descripciones detalladas del servicio, fotos de trabajos anteriores, datos de contacto, reviews, etc. A demás, le permite al usuario programar las visitas que mejor se ajusten a sus necesidades, utilizando el calendario de disponibilidad de cada profesional, quienes también pueden registrarse para ofrecer sus servicios y poder conectar con potenciales clientes.


-        Funcionalidades y features del deploy:

GENERALES:
- El Usuario podrá acceder a una página profile, ver y modificar sus datos en cualquier momento (nombre, apellido, correo, contraseña, teléfono, dirección, país, rol).
- El usuario a la hora de registrarse tendrá la opción de elegir si será cliente o profesional en el momento de ingresar sus datos.
- Cualquier persona (invitado) podrá ver la home page (landing page) con categorías y los profesionales disponibles, pero no podrá contratar ningún servicio/solicitar presupuesto hasta que no está loggeado.
- Cada sección no autorizada por usuarios no loggeados, redireccionará al login si ya tiene cuenta o register si no tiene.

CLIENTE:
Tiene todas las funcionalidades:
- Usuario podrá contratar los servicios que los profesionales ofrezcan.
- Usuario podrá filtrar desde la home page por categoría de profesionales y ver los relacionados
- Cuando el usuario entra al perfil de cada profesional tendrá la posibilidad de ver los servicios que ofrece, lo que incluye la primera visita, su disponibilidad y horarios para concertar citas.
- El usuario al contratar un servicio, tendrá acceso a reservar una cita con el profesional.
- Como usuario podré acceder al perfil de los profesionales y ver los servicios que tienen publicados, reseñas, galería de imágenes, etc.
- El usuario podrá darse de baja en la plataforma, y se le cambiará su status a inactivo pero permanecerán sus registros.

PROFESIONAL:
- El profesor es también un usuario para poder registrarse y tener su perfil, solo que con le aparece una homepage distinta, con su dashboard para poder editar su disponibilidad en el calendario y visualizar sus peticiones de citas.
- El profesional podrá decir a qué horas y que días está disponible para las citas con los clientes, para que éstos puedan agendarlas.
- En la pantalla de peticiones podrá visualizar las que tiene aprobadas y las pendientes, donde aparece el nombre de cliente, la dirección, la descripción de lo que le ocurre y algunas fotos sobre la avería, así  como la fecha de de la cita.
- El profesional podrá confirmar la cita con dicho cliente y éste pasará a la pantalla de aprobados.
- El profesional podrá ofertar/subir/modificar información sobre los servicios que ofrece, especificar en detalle que incluye, añadir descripción, fotos y categoría a la que pertenece.
