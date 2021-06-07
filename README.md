# Datos sobre el projecto y el uso

- Cabe resaltar que en todas las peticiones hay que enviar el Auth: admin  o el Auth: student

- En la primer peticion con el  metodo "POST" con URL (/api/v1/students/) en el body se envían
siguientes datos:
{
  "complete_name" : string,
  "age": num,
  "gender": string
}
se recibe un objeto con los datos del nuevo alumno


- En la segunda peticion se envía el metodo "GET" con URL(/api/v1/students/getAlumns), no se envía nada en el body. Se recibe un objeto con los datos de todos los alumnos


- En la tercer peticion con el  metodo "POST" con URL (/api/v1/students/note) en el body se envían
siguientes datos:
{
    "document" : string,
    "note": num
}
se recibe un objeto con los datos del alumno al que se le agregó la nota


- En la cuarta peticion se envía el metodo "GET" con URL(/api/v1/students/average), no se envía nada en el body. Se recibe un número con dos decimales que corresponde al promedio de todos los alumnos juntos.


- En la quinta peticion con el  metodo "GET" con URL (/api/v1/students/getAlumn) en el body se envían
siguientes datos:
{
    "id" : string -> uuid
}
se recibe un objeto con los datos del alumno al que corresponda el id


- En la sexta peticion con el  metodo "POST" con URL (/api/v1/students/autoevaluation) en el body se envían
siguientes datos:
{
    "document" : string,
    "autoevaluation" : num
}
se recibe un objeto con los datos del alumno al que corresponda el document con sus datos actualizados, incluyendo la recien auto evaluación


PD: si se va a hacer peticiones desde el CURL, el formato de la petición es el siguiente
 - curl --location --request GET localhost:3000/api/v1/students --header "Auth: admin"

solo le eliminé las comillas al "localhost:3000/api/v1/students" porque con comillas no funciona,
no lo va a tomar como el lugar al que va dirigido la petición.

Muchas Gracias.
Carlos Valencia Henao.
Full Stack Developer



