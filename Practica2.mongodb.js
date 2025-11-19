use ('Escuela');
db.alumnos.insertMany([{
    Nombre: "Cristina", 
    Edad: "17",
},
{
    Nombre: "Said", 
    Edad: "18",
},
{
    Nombre: "Ferny", 
    Edad: "19",
},
{
    Nombre: "Abril", 
    Edad: "17",
},
{
    Nombre: "Paula", 
    Edad: "18",
},
{
    Nombre: "Ana", 
    Edad: "18",
},
{
    Nombre: "Ines", 
    Edad: "16",
},
{
    Nombre: "Karol", 
    Edad: "17",
},
{
    Nombre: "Mariana", 
    Edad: "18",
},
{
    Nombre: "Lucca", 
    Edad: "19",
}
]);
db.profesores.insertMany([{
    Nombre: "Carlos", 
    Materia: "Matematicas",
},
{
    Nombre: "Ana", 
    Materia: "Historia",
},
{
    Nombre: "Luis", 
    Materia: "Fisica",
},
{
    Nombre: "Maria", 
    Materia: "Español",
},
{
    Nombre: "Jorge", 
    Materia: "Biologia",
},
{
    Nombre: "Claudia", 
    Materia: "Quimica",
},
{
    Nombre: "David", 
    Materia: "EF",
},
{
    Nombre: "Patricia", 
    Materia: "Geografia",
},
{
    Nombre: "Ricardo", 
    Materia: "Filosofia",
},
{
    Nombre: "Laura", 
    Materia: "Arte",
}
]);
db.edificios.insertMany(
    [
  {
    Nombre: "Torre Aurora",
    Altura: 285
  },
  {
    Nombre: "Edificio Horizonte",
    Altura: 152
  },
  {
    Nombre: "Torre Solaris",
    Altura: 310
  },
  {
    Nombre: "Residencial Altavista",
    Altura: 98
  },
  {
    Nombre: "Centro Empresarial Nexus",
    Altura: 205
  },
  {
    Nombre: "Torre Esmeralda",
    Altura: 167
  },
  {
    Nombre: "Edificio Panorama",
    Altura: 120
  },
  {
    Nombre: "Gran Torre Boreal",
    Altura: 340
  },
  {
    Nombre: "Complejo Mirador",
    Altura: 88
  },
  {
    Nombre: "Torre Centuria",
    Altura: 260
  }
]
);
db.salones.insertMany([
  { Salon: "A", 
    Caracteristica: "Amplio" },
  { Salon: "B", 
    Caracteristica: "Aire acondicionado" },
  { Salon: "C", 
    Caracteristica: "Proyector" },
  { Salon: "D", 
    Caracteristica: "Buena acústica" },
  { Salon: "E", 
    Caracteristica: "Ventanas grandes" },
  { Salon: "F", 
    Caracteristica: "Pantalla grande" },
  { Salon: "G", 
    Caracteristica: "Internet estable" },
  { Salon: "H", 
    Caracteristica: "Piso antiderrapante" },
  { Salon: "I", 
    Caracteristica: "Enchufes múltiples" },
  { Salon: "J", 
    Caracteristica: "Mobiliario nuevo" }
]);
db.materias.insertMany([
  { Materia: "Matemáticas", 
    Caracteristica: "Cálculo básico" },
  { Materia: "Español", 
    Caracteristica: "Comprensión lectora" },
  { Materia: "Inglés", 
    Caracteristica: "Vocabulario esencial" },
  { Materia: "Ciencias Naturales", 
    Caracteristica: "Experimentos simples" },
  { Materia: "Historia", 
    Caracteristica: "Línea del tiempo" },
  { Materia: "Geografía", 
    Caracteristica: "Mapas físicos" },
  { Materia: "Formación Cívica", 
    Caracteristica: "Valores éticos" },
  { Materia: "Educación Física", 
    Caracteristica: "Coordinación motriz" },
  { Materia: "Artes", 
    Caracteristica: "Dibujo básico" },
  { Materia: "Computación", 
    Caracteristica: "Uso de Office" }
]);