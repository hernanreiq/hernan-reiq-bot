const { Telegraf } = require('telegraf');

const bot = new Telegraf('1534356021:AAFRr57zChs3l3DYvacLIbOexQrToAhr6dc');

bot.start((ctx) => {
    //Bienvenida
    ctx.replyWithHTML(`Hola <b>${ctx.from.first_name}</b>, soy un bot creado por <a href="https://bit.ly/hernanreiq">Hernan.Reiq</a> en Node.js con Telegram API.`);

});

bot.command(['Proyectos', 'Proyecto', 'proyectos', 'proyecto', 'PROYECTO', 'PROYECTOS'], (ctx) => {
    //Boton de proyectos
    ctx.telegram.sendMessage(ctx.chat.id,'<b>Mira los proyectos de Hernan en el siguiente enlace</b>',
    {
        reply_markup:{
            inline_keyboard:[
                [
                    {text:"Proyectos", url:"https://hernanreiq.github.io/portafolio/#proyectos"}
                ]
            ]
        },
        parse_mode:"HTML"
    })
});

bot.launch();