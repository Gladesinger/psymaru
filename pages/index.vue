<template>
    <div>
    
    <section class="hero">
        <div class="container heroFlex">
            <img src="/images/hero.png" alt="" class="hero__img">
            <div class="hero__description">
                <h2 class="hero__header">Мария<br>Компанцева</h2>
                <h1 class="hero__text">Психолог гештальт-терапевт<br>Со мной вам будет свободно и безопасно</h1>
                <a href="https://wa.me/79614475636" target="_blank" class="hero__btn btnLight">Записаться на косультацию</a>
            </div>
        </div>

        <div class="container heroMobile">
            <div class="hero1">
                <h2 class="hero__header">Мария<br>Компанцева</h2>
                <h1 class="hero__text">Психолог гештальт-терапевт<br>Со мной вам будет свободно и безопасно</h1>
            </div>
            <div class="hero2">
                <img src="/images/hero.png" alt="" class="hero__img">
                <a href="https://wa.me/79614475636" target="_blank" class="hero__btn btnLight">Записаться на косультацию</a>
            </div>

        </div>
    </section>
    <section class="work" id = "work">
        <div class="container workFlex">
            <h2 class="work__head topHeader">C чем я работаю</h2>
            <ul class="work__list">
                <li class="work__item">
                    <p class="work__header">внутренние состояния</p>
                    <p class="work__desc">тревожность<br>кризисы<br>неопределенность<br>отсутствие энергии и мотивации
                    </p>
                </li>
                <li class="work__item">
                    <p class="work__header">детско-родительские отношения</p>
                    <p class="work__desc">завершение эмоциональной сепарации от родителей<br>обретение навыков удерживать эмоциональные границы
                    </p>
                </li>
                <li class="work__item">
                    <p class="work__header">личностный рост</p>
                    <p class="work__desc">повысить самооценку<br>научится осознавать ответственность<br>за собственную жизнь<br>найти внутренние опоры
                    </p>
                </li>
                <li class="work__item">
                    <p class="work__header">отношения в паре</p>
                    <p class="work__desc">выйти из повторяющихся сценариев<br>и любовной зависимости</p>
                </li>
            </ul>
        </div>
    </section>
    <section class="about" id = "about">
        <div class="container aboutFlex">
            <img src="/images/aboutTrans.png" alt="" class="about__img">
            <div class="about__desc">
                <h2 class="about__head topHeader">
                    Обо мне
                </h2>
                <ul class="about__list">
                    <li class="about__item">
                        <p class="about__header">Меня зовут Мария</p>
                        <p class="about__text">Я практикую более 6 лет. В консультировании опираюсь на
                            <br>гештальт подход. Со мной вам будет свободно и безопасно.
                            <br>Окажу поддержку при утрате и в проживании кризиса.
                            <br>Помогу вам безопасно и экологично проживать
                            <br>сложные чувства и эмоции в моменте.</p>
                    </li>
                    <li class="about__item">
                        <p class="about__header">Образование</p>
                        <p class="about__text">Высшее психологическое - магистр психологии (КубГУ),
                            <br>клинический психолог, детский психолог
                            <br>Мои дипломы и сертификаты можно посмотреть <a @click="showDiplomas">здесь</a></p>
                    </li>
                </ul>
            </div>
        </div>
    </section>


    <BasePopup 
        v-if="isPopup" 
        title="Мои дипломы"
        @close="hideDiplomas"
    >
        <div class="carousel-wrap">
            <carousel :items-to-show="1.5">
                <slide v-for="cd in card" :key="cd.id">
                    <img :src="cd.path" />
                </slide>

                <template #addons>
                <navigation />
                <pagination />
                </template>
            </carousel>
        </div>
    </BasePopup>

    <section class="price" id="price">
        <div class="container priceFlex">
            <div class="price__description">
                <h2 class="price__header topHeader">
                    Стоимость
                </h2>
                <div class="price__info">
                    <div class="price1">
                        <table class="price__table">
                            <tr class="price__tbr">
                                <td class="price__text">консультация</td>
                                <td><hr class="price__line"></td>
                                <td class="price__num">₽3000</td>
                            </tr>
                            <tr class="price__tbr">
                                <td class="price__text">онлайн консультация</td>
                                <td><hr class="price__line"></td>
                                <td class="price__num">₽3000</td>
                            </tr>
                            <tr class="price__tbr">
                                <td class="price__text">пакет из 6 консультаций</td>
                                <td><hr class="price__line"></td>
                                <td class="price__num"><s>₽18000</s><br>₽15000</td>
                            </tr>
                        </table>
                        <a href="https://wa.me/79614475636" target="_blank" class="hero__btn btnLight priceBtn">Записаться на косультацию</a>
                    </div>

                    <div class="price__desc">
                        <p class="work__header">Помогу в решении следующих проблем</p>
                        <ul class="price__info__list">
                            <li>— депрессия, суицидальные мысли</li>
                            <li>— страхи, фобии, тревожные расстройства</li>
                            <li>— зависимости: алкогольная, табачная, булимия, анорексия, компульсивное переедание</li>
                            <li>— семейные, детско-родительские отношения</li>
                            <li>— ОКР, панические атаки, навязчивости</li>
                            <li>— прокрастинация, ненужность, никчемность (низкая самооценка)</li>
                            <li>— одиночество</li>
                            <li>— раздражительность (вспышки гнева)</li>
                            <li>— проблемы в сексе</li>
                            <li>— отстаивание личных границ, сепарация</li>
                            <li>— помощь жертвам психологического, физического, сексуального насилия</li>
                            <li>— потеря смысла, безысходность</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="card" id="card">
        <div class="container cardFlex">
            <h2 class="card__mheader topHeader">Карта дня</h2>

            
                <div class="card__img" v-on:click="numRnd=getRandomInt(1,19)">
                        <img :src="card[numRnd].path" alt="" class="card__item">
                </div>

            <div class="card__description">
                <h2 class="card__header topHeader">Карта дня</h2>
                <p class="work__header">{{ card[numRnd].name }}</p>
                <p class="card__desc work__desc" v-html="card[numRnd].description"></p>
            </div>
        </div>
    </section>
    <section class="contacts" id="contacts">
        <div class="container">
            <h2 class="contacts__header topHeader">
                Контакты
            </h2>
            <div class="contactsFlex">
                <div class="maps">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0cac4d849df5c4c825b478a52aa4ffcc95b74deef86d537bbda5214601d46da3&amp;source=constructor" width="515" height="300" frameborder="0"></iframe>
                </div>
                <ul class="contacts__list">
                    <li class="contacts__item">
                        <p class="contacts__head">Телефон</p>
                        <p class="contacts__desc">+7 961 447 56 36</p>
                    </li>
                    <li class="contacts__item">
                        <p class="contacts__head">Электронная почта</p>
                        <p class="contacts__desc">psymaru@yandex.ru</p>
                    </li>
                    <li class="contacts__item">
                        <p class="contacts__head">Адрес</p>
                        <p class="contacts__desc">Пятигорск, проспект Кирова 78, офис 203</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    </div>
</template>

<script lang="js">
export default{
    data() {
        return {
            numRnd: 0,
            isPopup: false,
            card: [
                {
                    id: 0,
                    path : "/images/cards/0.png",
                    name : "Выберите карту",
                    description: 'На время представьте, что ваше сознание — это большой и таинственный лес\n' +
                        '                    <br><br>1. Какую пользу вам может принести выбранное существо?\n' +
                        '                    <br>2. Назовите причину, по которой данному существу не место в вашем лесу. Кто они?  В чем его опасность? Что в нем отталкивающего?\n' +
                        '                    <br>3. Чем оно отличаются от жителей вашего леса?\n' +
                        '                    <br>4. Как оградить свой лес от его присутствия?\n' +
                        '                    <br>5. При каких условиях нежеланный гость, смогут стать обитателями?'
                }
                ,{
                    id: 1
                    ,path : "/images/cards/1.png"
                    ,name : "Собака"
                    ,description: ""
                }
                ,{
                    id: 2
                    ,path : "/images/cards/2.png"
                    ,name : "Хомяк"
                    ,description: "Карта дня 2"
                }
                ,{
                    id: 3
                    ,path : "/images/cards/3.png"
                    ,name : "Змея"
                    ,description: "Карта дня 3"
                }
                ,{
                    id: 4
                    ,path : "/images/cards/4.png"
                    ,name : "Бабочка"
                    ,description: "Карта дня 4"
                }
                ,{
                    id: 5
                    ,path : "/images/cards/5.png"
                    ,name : "Носорог"
                    ,description: "Время удовлетворить потребность быть верным тому, кто вы есть на самом деле. Все может быть не так, как кажется, и из-за этого вы можете представлять себя в ложном свете. Копайте глубже в свое внутреннее существо. Это поможет вам понять свои истинные мотивы. Таким образом, вы можете знать, как лучше всего взаимодействовать с окружающим миром."
                }
                ,{
                    id: 6
                    ,path : "/images/cards/6.png"
                    ,name : "Цапля"
                    ,description: "Цапля просит вас быть бдительным и хранить спокойствие. Сделайте вдох и выдох, возвысьтесь на мгновение над жизненными ненастьями подобно этой птице, преодолевающей дождевые облака."
                }
                ,{
                    id: 7
                    ,path : "/images/cards/7.png"
                    ,name : "Лисица"
                    ,description: "Настал момент включить любопытство и изобретательность. При этом вы можете оставаться достаточно недоверчивыми и осторожными в своем поведении. Доверяйте собственным органам чувств и интуиции, слушайте свой внутренний голос."
                }
                ,{
                    id: 8
                    ,path : "/images/cards/8.png"
                    ,name : "Орёл"
                    ,description: "Если ты устал и выгорел обратись к мудрости своей души чтоб почувствовать обновление. Орел учит, что важно познать жизнь со всеми ее светлыми и темными сторонами. Как негативные, так и позитивные события служат высшей цели и помогают развивать собственное Я. В сложных ситуациях, необходимо помнить, что только опираясь на свою духовность (крылья) можно подняться над ситуацией (взлететь) и расширить Ваш смысл существования (горизонт) до гораздо больших пределов, чем он был до этого (духовный рост)."
                }
                ,{
                    id: 9
                    ,path : "/images/cards/9.png"
                    ,name : "Крокодил"
                    ,description: '<p>Привет</p>'
                }
                ,{
                    id: 10
                    ,path : "/images/cards/10.png"
                    ,name : "Олень"
                    ,description: "Верьте в свою цель, интуицию и способность сделать решающий шаг. Подобно оленю не принимайте поспешных решений; олень замирает, оценивая новую обстановку всеми своими чувствами и затем ступает вперед грациозно и и уверенно – чтобы не ждало его дальше."
                }
                ,{
                    id: 11
                    ,path : "/images/cards/11.png"
                    ,name : "Слон"
                    ,description: "Слон втягивает запахи хоботом и таким образом оценивает ситуацию. Уделите внимание тому, что пахнет хорошо, а что имеет неприятный «душок». Достаточно ли вы разборчивы? Замечаете ли вы, что некоторые вещи пахнут не так, как должны пахнуть? "
                }
                ,{
                    id: 12
                    ,path : "/images/cards/12.png"
                    ,name : "Полярный медведь"
                    ,description: "Необходимо периодически погружаться в глубины своего 'я' и пробуждать внутреннюю силу, однако вкус к жизни вы сможете почувствовать лишь после того, как выведете эту силу на свет и найдете ей практическое применение."
                }
                ,{
                    id: 13
                    ,path : "/images/cards/13.png"
                    ,name : "Паук"
                    ,description: "Паук, предлагает остановиться и взвесить: вы действительно готовы встретиться с тем, что находиться дальше? С вашим страхом, стыдом или может быть болью? Готовы ли вы сами плести свою судьбы?"
                }
                ,{
                    id: 14
                    ,path : "/images/cards/14.png"
                    ,name : "Медведь"
                    ,description: "Необходимо периодически погружаться в глубины своего 'я' и пробуждать внутреннюю силу, однако вкус к жизни вы сможете почувствовать лишь после того, как выведете эту силу на свет и найдете ей практическое применение."
                }
                ,{
                    id: 15
                    ,path : "/images/cards/15.png"
                    ,name : "Тигр"
                    ,description: '<p>Тигр расскажет вам как быть в уединении с собой, научит медитации, покажет вам внутри вас ваше сокровенное место, где вы всегда на связи с самим собой и можете увидеть ответы на все ваши жизненные вопросы. </p><br>' +
                        '<p>Тигр советует вам никогда не идти на компромисс, не предавать себя и не идти ни у кого на поводу</p>'
                }
                ,{
                    id: 16
                    ,path : "/images/cards/16.png"
                    ,name : "Конь"
                    ,description: '<p>Солнце совершает круг, погружая мир в темноту и вновь освещая все вокруг в дневное время суток.</p><br>' +
                        '<p>Конь – солнце несет своего всадника сквозь смерть к новому рождению. Что-то в вашей жизни требует трансформации или возможно перемены уже проникли в вашу жизнь.</p><br>'+
                        '<p>Проверьте – может быть в вашей жизни накопились факторы, которые не позволяют вашей силе течь легко и свободно. Осознайте их, освободитесь от тех, которые уже не работают на вас. Не ограничивайте себя убеждениями и ожиданиями других людей</p>'
                }
                ,{
                    id: 17
                    ,path : "/images/cards/17.png"
                    ,name : "Леопард"
                    ,description: '<p>Леопард, напоминает, сколько ресурсов у вас есть. </p><br>' +
                        '<p>Вы, как и леопард, можете выбирать из множества ресурсов, потому что у вас есть на это полномочия. </p><br>' +
                        '<p>Леопард хочет, чтобы вы поняли силу, которая скрывается в тени вашей жизни. Обладая этим знанием, вы сможете использовать благость этой силы</p>'
                }
                ,{
                    id: 18
                    ,path : "/images/cards/18.png"
                    ,name : "Волк"
                    ,description: '<p>У вас есть идеальный союзник, преданный партнёру, любящий, заботливый по отношению к своим. </p> <br>'+
                        '<p>Однако, его природа двойственна – он агрессивный, кровожадный, жестокий, хитрый, сильный и подчас непобедимый зверь. Какая сторона волчьей сущности актуальна сейчас в вашей жизни?</p>'
                }
                ,{
                    id: 19
                    ,path : "/images/cards/19.png"
                    ,name : "Кот"
                    ,description: "Карта дня 2"
                }
            ]
        }
    },
    created(){
        const myCookie = useCookie("dayCard");

        if (myCookie && myCookie.value) {
            this.numRnd = myCookie.value;
        }
    },
    methods:{
        getRandomInt(min, max) {
            let expirationDate = new Date();
            if(this.numRnd == 0) {
                min = Math.ceil(min);
                max = Math.floor(max);
                this.numRnd = Math.floor(Math.random() * (max - min + 1)) + min;
                expirationDate.setDate(expirationDate.getDate(expirationDate.setUTCHours(23,59,59,999)));
                const cookie = useCookie("dayCard", {
                    expires:expirationDate
                });
                
                cookie.value = this.numRnd;
                
                return this.numRnd
            }else return this.numRnd
        },
        showDiplomas(){
            this.isPopup = true;
        },
        hideDiplomas(){
            this.isPopup = false;
        }
    },
}
</script>

<style lang="scss">
    .carousel-wrap{
        width: 100%;
        height: 100%;

        section{
            padding-top: 0;
        }
    }
</style>