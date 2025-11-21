use ('Escuela');
db.alumnos.updateOne(
    {_id:ObjectId('691e12f08486da2fc066b276')},
    {$set:{Nombre: "Camila"}}
);
db.alumnos.updateOne(
    {_id:ObjectId('691e12f08486da2fc066b277')},
    {$set:{Nombre: "Karime"}}
);
db.profesores.updateOne(
    {_id:ObjectId('691e12f08486da2fc066b276')},
    {$set:{Nombre: "Marlene"}}
);
db.profesores.updateOne(
    {_id:ObjectId('691e12f08486da2fc066b277')},
    {$set:{Nombre: "Ana"}}
);
db.edificios.updateOne(
    {_id:ObjectId('691e12f08486da2fc066b276')},
    {$set:{Altura: "320"}}
);
db.edificios.updateOne(
    {_id:ObjectId('691e12f08486da2fc066b277')},
    {$set:{Altura: "240"}}
);
db.salones.updateOne(
    {_id:ObjectId('691e12f08486da2fc066b276')},
    {$set:{Nombre: "Amplio"}}
);
db.salones.updateOne(
    {_id:ObjectId('691e12f08486da2fc066b277')},
    {$set:{Caracteristica: "Pequeño"}}
);
db.materias.updateOne(
    {_id:ObjectId('691e12f08486da2fc066b276')},
    {$set:{Caracteristica:"Entendimiento de la naturaleza"}}
);
db.materias.updateOne(
    {_id:ObjectId('691e12f08486da2fc066b277')},
    {$set:{Caracteristica: "Busqueda de acontecimientos"}}
);