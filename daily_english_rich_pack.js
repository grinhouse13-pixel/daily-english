/*
 * Daily English — Rich Pack
 * 60 новых разговорных чанков с примерами и переводом.
 */
(function () {
  if (typeof words === "undefined" || !Array.isArray(words)) {
    console.error("Daily English: массив words не найден.");
    return;
  }

  const richPack = [
    // EVERYDAY
    ["I’m just looking.", "Я просто смотрю.", "I’m just looking, thanks. — Я просто смотрю, спасибо.\nI’m just looking around. — Я просто осматриваюсь.", "Chunks · Everyday"],
    ["That works for me.", "Меня это устраивает.", "Friday works for me. — Пятница мне подходит.\nThat time works for me. — Это время меня устраивает.", "Chunks · Everyday"],
    ["I’m not sure yet.", "Я пока не уверен.", "I’m not sure yet. Let me think. — Я пока не уверен. Дай подумать.\nI’m not sure yet what I want. — Я пока не знаю, чего хочу.", "Chunks · Everyday"],
    ["It depends.", "Смотря по обстоятельствам.", "It depends on the weather. — Это зависит от погоды.\nIt depends on how much it costs. — Смотря сколько это стоит.", "Chunks · Everyday"],
    ["I’ll be right back.", "Я сейчас вернусь.", "I’ll be right back. I forgot my phone. — Я сейчас вернусь. Забыл телефон.\nWait here. I’ll be right back. — Подожди здесь. Я сейчас вернусь.", "Chunks · Everyday"],
    ["Give me a second.", "Дай мне секунду.", "Give me a second. I’m almost ready. — Дай секунду. Я почти готов.\nCan you give me a second? — Можешь дать мне секунду?", "Chunks · Everyday"],
    ["I have no idea.", "Понятия не имею.", "I have no idea where he is. — Понятия не имею, где он.\nHonestly, I have no idea. — Честно, понятия не имею.", "Chunks · Everyday"],
    ["That makes sense.", "В этом есть смысл.", "That makes sense now. — Теперь понятно.\nYeah, that makes sense. — Да, в этом есть смысл.", "Chunks · Everyday"],
    ["I didn’t mean to.", "Я не специально.", "I didn’t mean to hurt you. — Я не хотел тебя обидеть.\nSorry, I didn’t mean to do that. — Извини, я не специально.", "Chunks · Everyday"],
    ["It’s up to you.", "Решать тебе.", "We can eat here or go out. It’s up to you. — Можем поесть здесь или пойти куда-нибудь. Решать тебе.\nIt’s totally up to you. — Полностью на твоё усмотрение.", "Chunks · Everyday"],
    ["I’m on my way.", "Я уже в пути.", "I’m on my way home. — Я уже еду домой.\nDon’t worry, I’m on my way. — Не переживай, я уже в пути.", "Chunks · Everyday"],
    ["I’ll think about it.", "Я подумаю об этом.", "That’s an interesting idea. I’ll think about it. — Интересная идея. Я подумаю.\nI can’t decide now. I’ll think about it. — Сейчас не могу решить. Я подумаю.", "Chunks · Everyday"],
    ["What do you mean?", "Что ты имеешь в виду?", "What do you mean by that? — Что ты этим хочешь сказать?\nSorry, what do you mean? — Извини, что ты имеешь в виду?", "Chunks · Everyday"],
    ["I’m used to it.", "Я к этому привык.", "I’m used to getting up early. — Я привык рано вставать.\nIt’s noisy here, but I’m used to it. — Здесь шумно, но я привык.", "Chunks · Everyday"],
    ["I can’t complain.", "Не жалуюсь.", "How’s work? — I can’t complain. — Как работа? — Не жалуюсь.\nI’m doing okay. I can’t complain. — Всё нормально. Не жалуюсь.", "Chunks · Everyday"],    // WORK
    ["I’m looking for a job.", "Я ищу работу.", "I’m looking for a job right now. — Сейчас я ищу работу.\nMy friend is looking for a job, too. — Мой друг тоже ищет работу.", "Chunks · Work"],
    ["I got a new job.", "Я устроился на новую работу.", "I got a new job last week. — На прошлой неделе я устроился на новую работу.\nI’m happy I got a new job. — Я рад, что нашёл новую работу.", "Chunks · Work"],
    ["I quit my job.", "Я уволился с работы.", "I quit my job a few days ago. — Я уволился несколько дней назад.\nI didn’t like the schedule, so I quit my job. — Мне не нравился график, поэтому я уволился.", "Chunks · Work"],
    ["I got laid off.", "Меня сократили.", "A lot of people got laid off. — Многих сотрудников сократили.\nHe got laid off, but he found another job. — Его сократили, но он нашёл другую работу.", "Chunks · Work"],
    ["I’m between jobs.", "Я сейчас в поиске работы / между работами.", "I’m between jobs at the moment. — Сейчас я временно без работы.\nShe’s between jobs and taking a short break. — Она пока без работы и немного отдыхает.", "Chunks · Work"],
    ["I work full-time.", "Я работаю полный день.", "I work full-time at a hotel. — Я работаю полный день в отеле.\nDo you work full-time or part-time? — Ты работаешь полный или неполный день?", "Chunks · Work"],
    ["I work the night shift.", "Я работаю в ночную смену.", "I work the night shift this week. — На этой неделе я работаю в ночную смену.\nHe doesn’t like working the night shift. — Ему не нравится работать в ночную смену.", "Chunks · Work"],
    ["I have a day off.", "У меня выходной.", "I have a day off tomorrow. — Завтра у меня выходной.\nWhat do you usually do on your day off? — Что ты обычно делаешь в выходной?", "Chunks · Work"],
    ["I’m running late.", "Я опаздываю.", "I’m running late. I’ll be there in ten minutes. — Я опаздываю. Буду через десять минут.\nSorry, I’m running a little late. — Извини, я немного задерживаюсь.", "Chunks · Work"],
    ["I’m stuck at work.", "Я задержался на работе.", "I’m stuck at work. I’ll call you later. — Я задержался на работе. Позвоню позже.\nSorry, I’m still stuck at work. — Извини, я всё ещё на работе и не могу уйти.", "Chunks · Work"],
    ["I have a lot on my plate.", "У меня сейчас много дел.", "I can’t help today. I have a lot on my plate. — Сегодня не могу помочь. У меня много дел.\nShe has a lot on her plate this week. — На этой неделе у неё очень много дел.", "Chunks · Work"],
    ["I’m still learning the ropes.", "Я ещё осваиваюсь.", "I’m still learning the ropes at my new job. — Я ещё осваиваюсь на новой работе.\nGive him some time. He’s still learning the ropes. — Дай ему время. Он ещё разбирается, что к чему.", "Chunks · Work"],
    ["When do I start?", "Когда я начинаю?", "The job sounds great. When do I start? — Работа звучит отлично. Когда я начинаю?\nWhen do you start your new position? — Когда ты приступаешь к новой должности?", "Chunks · Work"],
    ["I’m looking forward to it.", "Я с нетерпением этого жду.", "I’m looking forward to my first day. — Я с нетерпением жду своего первого рабочего дня.\nI’m looking forward to working with you. — Буду рад работать с вами.", "Chunks · Work"],    // SOCIAL / DATING
    ["How have you been?", "Как ты поживал(а)?", "Hey! How have you been? — Привет! Как ты поживал?\nI haven’t seen you in ages. How have you been? — Сто лет не виделись. Как ты?", "Chunks · Social"],
    ["What are you up to?", "Чем занимаешься?", "Hey, what are you up to tonight? — Привет, чем занимаешься сегодня вечером?\nWhat are you up to this weekend? — Какие планы на выходные?", "Chunks · Social"],
    ["I had a great time.", "Я отлично провёл время.", "I had a great time with you. — Я отлично провёл с тобой время.\nThanks for dinner. I had a great time. — Спасибо за ужин. Я отлично провёл время.", "Chunks · Social"],
    ["We should do this again.", "Надо повторить.", "I had fun. We should do this again. — Мне понравилось. Надо повторить.\nWe should do this again sometime. — Как-нибудь надо повторить.", "Chunks · Social"],
    ["I’d love to.", "С удовольствием.", "Would you like to get coffee? — I’d love to. — Хочешь выпить кофе? — С удовольствием.\nI’d love to come, but I’m working. — Я бы с радостью пришёл, но я работаю.", "Chunks · Social"],
    ["I’m glad you came.", "Я рад, что ты пришёл / пришла.", "I’m really glad you came tonight. — Я очень рад, что ты сегодня пришла.\nWe’re glad you could make it. — Мы рады, что ты смог(ла) прийти.", "Chunks · Social"],
    ["You made my day.", "Ты сделал(а) мой день.", "That message made my day. — Это сообщение сделало мой день.\nYou really made my day. Thanks! — Ты правда поднял(а) мне настроение. Спасибо!", "Chunks · Social"],
    ["I was thinking about you.", "Я думал о тебе.", "I was thinking about you yesterday. — Я вчера думал о тебе.\nFunny, I was just thinking about you. — Забавно, я как раз думал о тебе.", "Chunks · Social"],
    ["I don’t want to rush things.", "Я не хочу торопить события.", "I like spending time with you, but I don’t want to rush things. — Мне нравится проводить с тобой время, но я не хочу торопить события.\nLet’s take our time. I don’t want to rush things. — Давай не спешить. Я не хочу торопить события.", "Chunks · Social"],
    ["Are you free this weekend?", "Ты свободна / свободен на выходных?", "Are you free this Saturday? — Ты свободна в эту субботу?\nAre you free this weekend? We could go for a walk. — Ты свободна на выходных? Могли бы погулять.", "Chunks · Social"],
    ["I’d like to get to know you.", "Я хотел бы узнать тебя поближе.", "You seem interesting. I’d like to get to know you. — Ты кажешься интересной. Я хотел бы узнать тебя поближе.\nI’d like to get to know you better. — Я хотел бы узнать тебя получше.", "Chunks · Social"],
    ["No pressure.", "Без давления / не тороплю.", "No pressure. Just let me know. — Не тороплю, просто дай знать.\nWe can do it another time. No pressure. — Можем в другой раз. Без давления.", "Chunks · Social"],
    ["That’s really sweet of you.", "Это очень мило с твоей стороны.", "That’s really sweet of you. Thank you. — Это очень мило с твоей стороны. Спасибо.\nYou remembered? That’s so sweet of you. — Ты запомнил? Это так мило с твоей стороны.", "Chunks · Social"],
    ["I’m happy to hear that.", "Рад это слышать.", "You got the job? I’m happy to hear that! — Ты получил работу? Рад это слышать!\nI’m happy to hear you’re feeling better. — Рад слышать, что тебе лучше.", "Chunks · Social"],    // USEFUL / DAILY LIFE
    ["Could you help me out?", "Не мог бы ты мне помочь?", "Could you help me out with this bag? — Не мог бы ты помочь мне с этой сумкой?\nCan you help me out for a minute? — Можешь помочь мне на минутку?", "Chunks · Useful"],
    ["I’m just about to leave.", "Я как раз собираюсь уходить.", "I’m just about to leave the house. — Я как раз собираюсь выходить из дома.\nI’m just about to leave work. — Я как раз собираюсь уходить с работы.", "Chunks · Useful"],
    ["I ran out of time.", "У меня закончилось время / я не успел.", "I wanted to call you, but I ran out of time. — Я хотел позвонить, но не успел.\nWe ran out of time, so let’s finish tomorrow. — У нас закончилось время, давай закончим завтра.", "Chunks · Useful"],
    ["I can make it.", "Я смогу прийти / успеть.", "I can make it by six. — Я смогу быть к шести.\nThanks for inviting me. I can make it. — Спасибо за приглашение. Я смогу прийти.", "Chunks · Useful"],
    ["I can’t make it.", "Я не смогу прийти / успеть.", "Sorry, I can’t make it tonight. — Извини, сегодня вечером не смогу.\nI can’t make it by five. — Я не успею к пяти.", "Chunks · Useful"],
    ["Let me check.", "Дай мне проверить.", "Let me check my calendar. — Дай проверить календарь.\nI’m not sure. Let me check. — Я не уверен. Дай проверю.", "Chunks · Useful"],
    ["As far as I know.", "Насколько я знаю.", "As far as I know, he still works here. — Насколько я знаю, он всё ещё здесь работает.\nAs far as I know, the store closes at nine. — Насколько я знаю, магазин закрывается в девять.", "Chunks · Useful"],
    ["It slipped my mind.", "Вылетело из головы.", "Sorry, it slipped my mind. — Извини, вылетело из головы.\nI was going to text you, but it slipped my mind. — Я собирался тебе написать, но вылетело из головы.", "Chunks · Useful"],
    ["I’ll keep you posted.", "Буду держать тебя в курсе.", "I’ll keep you posted about the job. — Буду держать тебя в курсе насчёт работы.\nI’ll keep you posted when I hear back. — Дам знать, когда получу ответ.", "Chunks · Useful"],
    ["Take your time.", "Не торопись.", "Take your time. There’s no rush. — Не торопись. Времени достаточно.\nTake your time. I can wait. — Не спеши. Я могу подождать.", "Chunks · Useful"],
    ["That’s not what I meant.", "Я не это имел в виду.", "That’s not what I meant. Let me explain. — Я не это имел в виду. Дай объясню.\nI’m sorry. That’s not what I meant to say. — Извини. Я не это хотел сказать.", "Chunks · Useful"],
    ["I’ll figure it out.", "Я разберусь.", "Don’t worry. I’ll figure it out. — Не переживай. Я разберусь.\nI don’t know how it works yet, but I’ll figure it out. — Я пока не знаю, как это работает, но разберусь.", "Chunks · Useful"],
    ["It’s worth a try.", "Стоит попробовать.", "I’ve never done it before, but it’s worth a try. — Я никогда этого не делал, но попробовать стоит.\nWhy not? It’s worth a try. — Почему бы и нет? Стоит попробовать.", "Chunks · Useful"],
    ["I didn’t catch that.", "Я не расслышал.", "Sorry, I didn’t catch that. Could you repeat it? — Извини, я не расслышал. Можешь повторить?\nI didn’t catch your name. — Я не расслышал твоё имя.", "Chunks · Useful"],
    ["Could you say that again?", "Не могли бы вы повторить?", "Could you say that again, please? — Не могли бы вы повторить, пожалуйста?\nI’m sorry, could you say that a little more slowly? — Извините, не могли бы вы сказать немного медленнее?", "Chunks · Useful"]
  ];

  const existing = new Set(words.map(item => String(item[0]).toLowerCase()));
  let added = 0;

  richPack.forEach(card => {
    const key = card[0].toLowerCase();
    if (!existing.has(key)) {
      words.push(card);
      existing.add(key);
      added++;
    }
  });

  console.log("Daily English Rich Pack: added " + added + " cards.");
})();