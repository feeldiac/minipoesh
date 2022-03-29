const poems = [ 
    `Las preguntas que brotan
    del suelo y no recoges
    van tapando la tierra,
    pudriendo el suelo.`,

    `Cómo cansa a veces
    este laberinto sinusoidal
    del que todos escapan.`,

    `Los recuerdos son pequeñas tormentas  
    que van tranquilamente creando estragos  
    en la tierra y en el mar, 
    quedando en boca de todos. 
    Oscurecen, enloquecen, ahogan 
    y lo peor. 
    Regresan.`,

    `Camino hacia la puerta,
    miro por la rendija,
    me observo,
    abro,
    entro,
    me observo,
    miro por la rendija,
    camino hacia la puerta`,

    `Correr y crear,
    crear y creer,
    creer y crecer,
    creer y criar,
    criar y correr.
    Ser nuestros propios padres y madres.`,
];

const randomPoem = () => {
    const poem = poems[Math.floor(Math.random() * poems.length)];
    console.log(poem);
}

module.exports = { randomPoem };