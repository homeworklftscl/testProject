import { TweenMax } from "gsap/TweenMax";
import ScrollMagic from "ScrollMagic";
import "animation.gsap";
import "debug.addIndicators";
import { TimelineMax } from "gsap";
$(document).ready(function () {
    // Анимация стрелки вниз
    let t1 = new TimelineMax({ repeat: 1000, yoyo: true });
    t1.from($(".arrow__img"), 2, {
        y: 30
    });
    // Анимация заголовков и кнопки
    let t2 = new TimelineMax();
    t2.from($(".hero__title"), 1, { opacity: 0, scale: 0.5 })
        .from($(".hero-desc"), 0.7, { opacity: 0, scale: 0.5 })
        .from($(".hero__sub-title"), 0.7, { opacity: 0, scale: 0.5 })
        .from($(".hero__btn"), 0.7, { opacity: 0, scale: 0.5 });
    // Анимация второй секции
    let t3 = new TimelineMax();
    t3.from($(".directions__title"), 0.5, { opacity: 0, x: -100 })
        .from($(".directions__desc"), 0.5, { opacity: 0, x: -100 })
        .staggerFrom([$(".directions__list .directions__item:nth-child(1)"),
        $(".directions__list .directions__item:nth-child(2)"),
        $(".directions__list .directions__item:nth-child(3)")], 0.5, {
                opacity: 0,
                x: -100
            }, 0.25);
    // Анимация четвертой секции
    let tl8 = new TimelineMax();
    tl8.from($(".form"), 1, { opacity: 0, x: -300 });
    // Анимация шестой секции
    let tl6 = new TimelineMax();
    tl6.from($(".certificates__title"), 0.5, { opacity: 0, x: -100 })
        .staggerFrom([$(".certificates__list .certificates__item:nth-child(1)"),
        $(".certificates__list .certificates__item:nth-child(2)"),
        $(".certificates__list .certificates__item:nth-child(3)"),
        $(".certificates__list .certificates__item:nth-child(4)")], 0.5, {
                opacity: 0,
                x: -100
            }, 0.25);
    // Анимация седьмой секции
    let tl7 = new TimelineMax();
    tl7.from($(".choice__title"), 0.5, { opacity: 0, x: 100 })
        .staggerFrom([$(".choice__list .choice__item:nth-child(1)"),
        $(".choice__list .choice__item:nth-child(2)"),
        $(".choice__list .choice__item:nth-child(3)"),
        $(".choice__list .choice__item:nth-child(4)")], 0.5, {
                opacity: 0,
                x: 100
            }, 0.25);        
    // Анимация счетчика
    const zeroCount1 = { var: 0 };
    const zeroCount2 = { var: 0 };
    const zeroCount3 = { var: 0 };
    const zeroCount4 = { var: 0 };
    let currentCountOne = $(".digits__list .digits__item:nth-child(1) .digit__num"),
        currentCountTwo = $(".digits__list .digits__item:nth-child(2) .digit__num"),
        currentCountThree = $(".digits__list .digits__item:nth-child(3) .digit__num"),
        currentCountFour = $(".digits__list .digits__item:nth-child(4) .digit__num");
    let valueOne = +currentCountOne.html(),
        valueTwo = +currentCountTwo.html(),
        valueThree = +currentCountThree.html(),
        valueFour = +currentCountFour.html();

    let tl5 = new TimelineMax();
    tl5
        .from($(".about__title"), 0.5, { opacity: 0, x: 100 })
        .staggerFrom(
            [
                $(".digits__list .digits__item:nth-child(1)"),
                $(".digits__list .digits__item:nth-child(2)"),
                $(".digits__list .digits__item:nth-child(3)"),
                $(".digits__list .digits__item:nth-child(4)")
            ],
            0.5,
            {
                opacity: 0,
                x: 100
            },
            0.25
        );
    let tl1 = new TimelineMax({ onUpdate: updateFn1 });
    tl1.to(zeroCount1, 3, {
        var: valueOne, ease: Circ.easeOut
    });
    let tl2 = new TimelineMax({ onUpdate: updateFn2 });
    tl2.to(zeroCount2, 4, {
        var: valueTwo, ease: Circ.easeOut
    });
    let tl3 = new TimelineMax({ onUpdate: updateFn3 });
    tl3.to(zeroCount3, 5, {
        var: valueThree, ease: Circ.easeOut
    });
    let tl4 = new TimelineMax({ onUpdate: updateFn4 });
    tl4.to(zeroCount4, 5, {
        var: valueFour, ease: Circ.easeOut
    });
    function updateFn1() {
        currentCountOne.text(Math.ceil(zeroCount1.var));
    }
    function updateFn2() {
        currentCountTwo.text(Math.ceil(zeroCount2.var));
    }
    function updateFn3() {
        currentCountThree.text(Math.ceil(zeroCount3.var));
    }
    function updateFn4() {
        currentCountFour.text(Math.ceil(zeroCount4.var));
    }
    // инициализация
    var ctrl = new ScrollMagic.Controller();
    // Создаем сцену
    let firstScene = new ScrollMagic.Scene(
        {
            triggerElement: '#proj'
        }
    )
        .setTween(t3)
        .addTo(ctrl);
    let secondScene = new ScrollMagic.Scene({ triggerElement: "#sec" })
        .setTween(tl5)
        .addTo(ctrl);
    let timer1Scene = new ScrollMagic.Scene({ triggerElement: "#sec" })
        .setTween(tl1)
        .addTo(ctrl);
    let timer2Scene = new ScrollMagic.Scene({ triggerElement: "#sec" })
        .setTween(tl2)
        .addTo(ctrl);
    let timer3Scene = new ScrollMagic.Scene({ triggerElement: "#sec" })
        .setTween(tl3)
        .addTo(ctrl);
    let timer4Scene = new ScrollMagic.Scene({ triggerElement: "#sec" })
        .setTween(tl4)
        .addTo(ctrl);
    let animCert = new ScrollMagic.Scene({ triggerElement: "#cert" })
        .setTween(tl6)
        .addTo(ctrl);
    let animChoice = new ScrollMagic.Scene({ triggerElement: "#choi" })
        .setTween(tl7)
        .addTo(ctrl);
    let animConsult = new ScrollMagic.Scene({ triggerElement: "#cons" })
        .setTween(tl8)
        .addTo(ctrl);
});
