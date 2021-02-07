const { Telegraf } = require('telegraf');

const bot = new Telegraf('1534356021:AAFRr57zChs3l3DYvacLIbOexQrToAhr6dc');

function teclado(ctx){
    return ctx.reply('Mira mis comandos en el teclado.', {
                reply_markup: {
                    'keyboard': [['/start', '/proyectos'], ['/ver', '/universidad'], ['/redes', '/help']],
                    resize_keyboard: true,
                    one_time_keyboard: true,
                    force_reply: true,
                }
    });
}

const comandos = `
/start es para darte la bienvenida.
/proyectos es para mostrarte el portafolio de Hernan.
/ver es para mostrarte una foto de Hernan.
/universidad es para saber un poco de su historia universitaria.
/redes es para mostrarte sus redes sociales.
/help te muestra esta lista de comandos.
`;

//Bienvenida
bot.start((ctx) => {
    ctx.replyWithHTML(`Hola <b>${ctx.from.first_name}</b>, soy un bot creado por <a href="https://bit.ly/hernanreiq">Hernan.Reiq</a> en Node.js con el framework Telegraf de Telegram API.`);
    setTimeout(() => {
        teclado(ctx);
    }, 1000);
});

// PROYECTOS DE HERNAN - PORTAFOLIO
bot.command(['Proyectos', 'Proyecto', 'proyectos', 'proyecto', 'PROYECTO', 'PROYECTOS'], (ctx) => {
    ctx.reply('<b>Mira los proyectos de Hernan en el siguiente enlace:</b>',
    {
        reply_markup:{
            inline_keyboard:[
                [
                    {text: '💻 Portafolio de proyectos y habilidades 💻', url: 'https://bit.ly/hernanreiq'},
                ]
            ]
        },
        parse_mode:"HTML"
    });
    setTimeout(() => {
        teclado(ctx);
    }, 1000);
});

// VER FOTO DE HERNAN
bot.command(['Ver', 'ver', 'VER'], (ctx) => {
    ctx.replyWithHTML('<b>Así es como luce mi creador.</b>');
    setTimeout(() => {
        ctx.replyWithPhoto('https://raw.githubusercontent.com/hernanreiq/hernan-reiq-bot/master/img/reiq.jpg');
    }, 500);
    setTimeout(() => {
        teclado(ctx);
    }, 1000);
});

// MOSTRAR HISTORIA UNIVERSITARIA
bot.command(['Universidad', 'universidad', 'UNIVERSIDAD', 'uni', 'Uni', 'UNI'], (ctx) => {
    ctx.replyWithHTML('<b>Aquí va la historia universitaria de mi creador, es un poco larga así que acomódate!</b>');
    
    setTimeout(()=> { // ZONA COLONIAL
        ctx.reply('En esta foto podemos ver a Hernan en su primer cuatrimestre con su grupo, él estaba en la Zona Colonial visitando varios museos, para hacer un trabajo final de la materia Historia Dominicana.');
        setTimeout(() => {
            ctx.replyWithPhoto('https://raw.githubusercontent.com/hernanreiq/hernan-reiq-bot/master/img/universidad/c1.jpg');
        }, 500);
    }, 1000);
    
    setTimeout(()=> { // ECONOMATO
        ctx.reply('Aquí Hernan está con su grupo de la materia del séptimo cuatrimestre Conciencia Ciudadana. Esa foto fue tomada frente al economato de la universidad.');
        setTimeout(() => {
            ctx.replyWithPhoto('https://raw.githubusercontent.com/hernanreiq/hernan-reiq-bot/master/img/universidad/c7.jpg');
        }, 500);
    }, 6000);
    
    setTimeout(()=> {// PROYECTO EMPRENDEDOR 1
        ctx.reply('Esta foto realmente es una captura de pantalla de un vídeo que grabó el profesor, dónde Hernan fue seleccionado, para ser quien haga la presentación de los estudiantes exonerados. Esto sucedió en uno de los laboratorios de cómputo el último día de clases, en la materia del octavo cuatrimestre Proyecto Emprendedor I.');
        setTimeout(() => {
            ctx.replyWithPhoto('https://raw.githubusercontent.com/hernanreiq/hernan-reiq-bot/master/img/universidad/c8.jpg');
        }, 500);
    }, 12000); 
    
    setTimeout(()=> { // ULTIMO DIA DE CLASES PRESENCIALES
        ctx.reply('Esta foto es la más especial y al mismo tiempo la más triste, fue tomada la última vez que Hernan asistió a clases presenciales, desde ese punto ya no podía ir a la universidad por la pandemia de Covid-19, así que tuvo que concluir sus estudios universitarios de manera virtual. La foto fue tomada frente a los laboratorios de cómputo mientras él y sus compañeros esperaban por el profesor de Diseño de interfaces (Herramientas de multimedia) del noveno cuatrimestre.');
        setTimeout(() => {
            ctx.replyWithPhoto('https://raw.githubusercontent.com/hernanreiq/hernan-reiq-bot/master/img/universidad/c9.jpg');
        }, 500);
    }, 19000);
    
    setTimeout(()=> { // PEMSUN DE LA CARRERA COMPLETO
        ctx.reply('Actualmente (6 de Febrero del 2021) Hernan tiene todas las materias cursadas y aprobadas, por lo que se encuentra agotando los procesos necesarios para inscribir y desarrollar su trabajo de grado, para de esa manera obtener el título de "Ingeniero de sistemas y computación".');
        setTimeout(() => {
            ctx.replyWithPhoto('https://raw.githubusercontent.com/hernanreiq/hernan-reiq-bot/master/img/universidad/p.jpg');
        }, 500);
    }, 27000);
    
    setTimeout(()=> { // INDICE FINAL 
        ctx.reply('A pesar de ser el único de su grupo (y de todos los que conoció) en completar el pensum en 3 años y 8 meses, Hernan no podrá graduarse con honores. Pero la satisfacción de no haber gastado más tiempo del necesario es una sensación imposible de describir.');
        setTimeout(() => {
            ctx.replyWithPhoto('https://raw.githubusercontent.com/hernanreiq/hernan-reiq-bot/master/img/universidad/m.png');
        }, 500);
        setTimeout(() => {
            ctx.reply('Fin de la historia. Te contaría más pero no quiero aburrirte.');
            setTimeout(() => {
                teclado(ctx);
            }, 1000);
        }, 3000);
    }, 36000);
});

bot.command(['Redes', 'redes', 'REDES', 'red', 'Red', 'RED', 'Contacto', 'contacto', 'CONTACTO'], (ctx) => { // REDES SOCIALES 
    ctx.reply('<b>Esas son las redes sociales de mi creador.</b>',
    {
        reply_markup:{
            inline_keyboard:[
                [
                    {text: '💼 LinkedIn', url: 'https://www.linkedin.com/in/hernan-demorizi-ure%C3%B1a-4430031b1/'},
                    {text: '❤️ Instagram', url: 'https://www.instagram.com/hernan.reiq'},
                    {text: '💻 GitHub', url: 'https://github.com/hernanreiq'},
                ]
            ]
        },
        parse_mode:"HTML"
    });
    setTimeout(() => {
        teclado(ctx);
    }, 1000);
});

bot.help((ctx) => { // AYUDA
    ctx.reply('Esos son los comandos que tengo disponibles para ti.');
    ctx.reply(comandos);
    setTimeout(() => {
        teclado(ctx);
    }, 1000);
});

bot.hears([String, Number, Boolean], ctx => {
    ctx.reply('No sé como responder a eso, lo siento 😭😭😭');
    setTimeout(() => {
        teclado(ctx);
    }, 1000);
});

bot.launch();