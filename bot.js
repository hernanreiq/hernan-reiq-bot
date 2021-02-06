const { Telegraf } = require('telegraf');

const bot = new Telegraf('1534356021:AAFRr57zChs3l3DYvacLIbOexQrToAhr6dc');

bot.start((ctx) => {
    //Bienvenida
    ctx.replyWithHTML(
        `Hola <b>${ctx.from.first_name}</b>, soy un bot creado por <a href="https://bit.ly/hernanreiq">Hernan.Reiq</a> en Node.js con Telegram API.

A continuación te mostraré los comandos que Hernan ha programado para mi:

/start es para darte la bienvenida.
/proyectos es para mostrarte su portafolio.
/ver es para mostrarte una foto de Hernan.
/universidad es para saber un poco de su historia universitaria.
/redes es para mostrarte sus redes sociales.
    `);
});

// PROYECTOS DE HERNAN - PORTAFOLIO
bot.command(['Proyectos', 'Proyecto', 'proyectos', 'proyecto', 'PROYECTO', 'PROYECTOS'], (ctx) => {
    ctx.reply('<b>Mira los proyectos de Hernan en el siguiente enlace:</b>',
    {
        reply_markup:{
            inline_keyboard:[
                [
                    {text: '💻 Portafolio de proyectos y habilidades 💻', url: 'https://bit.ly/hernanreiq'}
                ]
            ]
        },
        parse_mode:"HTML"
    })
});

// VER FOTO DE HERNAN
bot.command(['Ver', 'ver', 'VER'], (ctx) => {
    ctx.replyWithHTML('<b>Así es como luce mi creador:</b>');
    //ctx.replyWithPhoto('img/reiq.jpg');
});

bot.launch();