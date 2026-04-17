export type LandingLanguage = "pl" | "en" | "uk" | "ru";

export const landingLanguages: Array<{
    code: LandingLanguage;
    label: string;
    flagClassName: string;
}> = [
    { code: "pl", label: "PL", flagClassName: "fi fi-pl" },
    { code: "en", label: "EN", flagClassName: "fi fi-gb" },
    { code: "uk", label: "UA", flagClassName: "fi fi-ua" },
    { code: "ru", label: "RU", flagClassName: "fi fi-ru" },
];

type LandingTranslation = {
    brand: string;
    nav: Record<"aboutMe" | "customOrder" | "catalog" | "delivery" | "contact", string>;
    aboutMe: {
        eyebrow: string;
        title: string;
        description: string;
        primaryAction: string;
        secondaryAction: string;
        imageAlt: string;
    };
    customOrder: {
        eyebrow: string;
        title: string;
        intro: string;
        items: Array<{
            title: string;
            description: string;
        }>;
        closing: string;
    };
    catalog: {
        eyebrow: string;
        title: string;
        items: Array<{
            title: string;
            description: string;
        }>;
    };
    delivery: {
        eyebrow: string;
        title: string;
    };
    contact: {
        eyebrow: string;
        title: string;
    };
};

export const landingTranslations = {
    en: {
        brand: "Crochet Makes",
        nav: {
            aboutMe: "About me",
            customOrder: "Custom",
            catalog: "Catalog",
            delivery: "Delivery",
            contact: "Contact",
        },
        aboutMe: {
            eyebrow: "Handmade crochet clothing",
            title: "Soft crochet clothing made by hand",
            description:
                "I am Kate, and this is my calm place for handmade cardigans, scarves, tops, and cozy crochet clothing. I make every item by hand with attention to texture, comfort, and quiet detail.",
            primaryAction: "View catalog",
            secondaryAction: "Contact",
            imageAlt: "Kate wearing handmade crochet clothing",
        },
        customOrder: {
            eyebrow: "Made for you",
            title: "Looking for a unique crochet piece for summer?",
            intro: "You are in the right place. I create handmade crochet clothing around your measurements, style, and vision.",
            items: [
                {
                    title: "Your fit",
                    description: "Every piece is planned around your measurements, so it feels personal from the first fitting.",
                },
                {
                    title: "Your colors",
                    description: "Choose any color or color combination from my palette, or bring your own Pinterest inspiration.",
                },
                {
                    title: "One of a kind",
                    description: "Each order is handmade and customized, so no one else will have exactly the same thing.",
                },
                {
                    title: "Summer yarn",
                    description: "I use high-quality yarn: 60% cotton and 40% acrylic. It is soft, breathable, lightweight, hypoallergenic, and comfortable on hot days.",
                },
            ],
            closing: "More than clothing: made just for you.",
        },
        catalog: {
            eyebrow: "Catalog",
            title: "Handmade crochet clothing",
            items: [
                {
                    title: "Cardigans",
                    description: "Soft layered crochet clothing with a relaxed fit and handmade texture.",
                },
                {
                    title: "Scarves",
                    description: "Cozy crochet scarves for cold seasons and slow mornings.",
                },
                {
                    title: "Tops",
                    description: "Light crochet tops for warm days, styling layers, and statement looks.",
                },
            ],
        },
        delivery: {
            eyebrow: "Delivery",
            title: "Shipping and payment details",
        },
        contact: {
            eyebrow: "Contact",
            title: "Social links and contact details",
        },
    },
    pl: {
        brand: "Crochet Makes",
        nav: {
            aboutMe: "O mnie",
            customOrder: "Na zamówienie",
            catalog: "Katalog",
            delivery: "Dostawa",
            contact: "Kontakt",
        },
        aboutMe: {
            eyebrow: "Ręcznie szydełkowana odzież",
            title: "Miękka szydełkowana odzież tworzona ręcznie",
            description:
                "Mam na imię Kate i tworzę spokojne miejsce na ręcznie robione kardigany, szaliki, topy i przytulną szydełkowaną odzież. Każdy produkt robię ręcznie, dbając o fakturę, wygodę i subtelne detale.",
            primaryAction: "Zobacz katalog",
            secondaryAction: "Kontakt",
            imageAlt: "Kate w ręcznie szydełkowanej odzieży",
        },
        customOrder: {
            eyebrow: "Tworzone dla Ciebie",
            title: "Szukasz wyjątkowej szydełkowanej rzeczy na lato?",
            intro: "Jesteś w dobrym miejscu. Tworzę ręcznie szydełkowaną odzież na podstawie Twoich wymiarów, stylu i pomysłu.",
            items: [
                {
                    title: "Twój krój",
                    description: "Każdy projekt dopasowuję do Twoich wymiarów, żeby od początku był naprawdę osobisty.",
                },
                {
                    title: "Twoje kolory",
                    description: "Możesz wybrać dowolny kolor lub połączenie kolorów z mojej palety albo wysłać inspirację z Pinteresta.",
                },
                {
                    title: "Jedyna taka rzecz",
                    description: "Każde zamówienie jest robione ręcznie i personalizowane, więc nikt nie będzie mieć dokładnie tego samego.",
                },
                {
                    title: "Letnia włóczka",
                    description: "Używam wysokiej jakości włóczki: 60% bawełny i 40% akrylu. Jest miękka, przewiewna, lekka, hipoalergiczna i wygodna nawet w upalne dni.",
                },
            ],
            closing: "To więcej niż ubranie: powstaje specjalnie dla Ciebie.",
        },
        catalog: {
            eyebrow: "Katalog",
            title: "Ręcznie szydełkowana odzież",
            items: [
                {
                    title: "Kardigany",
                    description: "Miękka szydełkowana odzież warstwowa o swobodnym kroju.",
                },
                {
                    title: "Szaliki",
                    description: "Przytulne szydełkowane szaliki na chłodne sezony i spokojne poranki.",
                },
                {
                    title: "Topy",
                    description: "Lekkie szydełkowane topy na ciepłe dni, warstwy i wyraziste stylizacje.",
                },
            ],
        },
        delivery: {
            eyebrow: "Dostawa",
            title: "Szczegóły dostawy i płatności",
        },
        contact: {
            eyebrow: "Kontakt",
            title: "Linki społecznościowe i dane kontaktowe",
        },
    },
    uk: {
        brand: "Crochet Makes",
        nav: {
            aboutMe: "Про мене",
            customOrder: "На замовлення",
            catalog: "Каталог",
            delivery: "Доставка",
            contact: "Контакти",
        },
        aboutMe: {
            eyebrow: "Одяг ручної роботи гачком",
            title: "М'який одяг гачком, створений вручну",
            description:
                "Мене звати Kate, і це мій спокійний простір для кардиганів, шарфів, топів і затишного одягу гачком ручної роботи. Кожну річ я створюю вручну, з увагою до фактури, комфорту й тихих деталей.",
            primaryAction: "Переглянути каталог",
            secondaryAction: "Контакти",
            imageAlt: "Kate в одязі ручної роботи гачком",
        },
        customOrder: {
            eyebrow: "Створено для вас",
            title: "Шукаєте унікальну річ гачком для літа?",
            intro: "Ви в правильному місці. Я створюю одяг гачком вручну за вашими мірками, стилем і баченням.",
            items: [
                {
                    title: "Ваша посадка",
                    description: "Кожну річ я планую за вашими мірками, щоб вона відчувалася особистою вже з першої примірки.",
                },
                {
                    title: "Ваші кольори",
                    description: "Можна вибрати будь-який колір або поєднання з моєї палітри чи надіслати власне натхнення з Pinterest.",
                },
                {
                    title: "Єдина у своєму роді",
                    description: "Кожне замовлення створюється вручну й персоналізується, тому ніхто не матиме точно такої самої речі.",
                },
                {
                    title: "Літня пряжа",
                    description: "Я використовую якісну пряжу: 60% бавовни та 40% акрилу. Вона м'яка, дихаюча, легка, гіпоалергенна й комфортна навіть у спеку.",
                },
            ],
            closing: "Це більше, ніж одяг: це річ, створена саме для вас.",
        },
        catalog: {
            eyebrow: "Каталог",
            title: "Одяг ручної роботи гачком",
            items: [
                {
                    title: "Кардигани",
                    description: "М'який одяг гачком для багатошарових образів і вільної посадки.",
                },
                {
                    title: "Шарфи",
                    description: "Затишні шарфи гачком для холодних сезонів і повільних ранків.",
                },
                {
                    title: "Топи",
                    description: "Легкі топи гачком для теплих днів, шарів і виразних образів.",
                },
            ],
        },
        delivery: {
            eyebrow: "Доставка",
            title: "Деталі доставки та оплати",
        },
        contact: {
            eyebrow: "Контакти",
            title: "Соціальні мережі та контактна інформація",
        },
    },
    ru: {
        brand: "Crochet Makes",
        nav: {
            aboutMe: "Обо мне",
            customOrder: "На заказ",
            catalog: "Каталог",
            delivery: "Доставка",
            contact: "Контакты",
        },
        aboutMe: {
            eyebrow: "Одежда ручной работы крючком",
            title: "Мягкая одежда крючком, созданная вручную",
            description:
                "Меня зовут Kate, и это мое спокойное пространство для кардиганов, шарфов, топов и уютной одежды ручной работы крючком. Каждую вещь я создаю вручную, с вниманием к фактуре, комфорту и тихим деталям.",
            primaryAction: "Смотреть каталог",
            secondaryAction: "Контакты",
            imageAlt: "Kate в одежде ручной работы крючком",
        },
        customOrder: {
            eyebrow: "Создано для вас",
            title: "Ищете уникальную вещь крючком на лето?",
            intro: "Вы в правильном месте. Я создаю одежду крючком вручную под ваши мерки, стиль и идею.",
            items: [
                {
                    title: "Ваша посадка",
                    description: "Каждая вещь продумывается под ваши мерки, чтобы она ощущалась личной уже с первой примерки.",
                },
                {
                    title: "Ваши цвета",
                    description: "Можно выбрать любой цвет или сочетание из моей палитры либо прислать свое вдохновение из Pinterest.",
                },
                {
                    title: "Единственная в своем роде",
                    description: "Каждый заказ создается вручную и персонализируется, поэтому ни у кого не будет точно такой же вещи.",
                },
                {
                    title: "Летняя пряжа",
                    description: "Я использую качественную пряжу: 60% хлопка и 40% акрила. Она мягкая, дышащая, легкая, гипоаллергенная и комфортная даже в жаркие дни.",
                },
            ],
            closing: "Это больше, чем одежда: вещь, созданная именно для вас.",
        },
        catalog: {
            eyebrow: "Каталог",
            title: "Одежда ручной работы крючком",
            items: [
                {
                    title: "Кардиганы",
                    description: "Мягкая одежда крючком для многослойных образов и свободной посадки.",
                },
                {
                    title: "Шарфы",
                    description: "Уютные шарфы крючком для холодного сезона и спокойных утр.",
                },
                {
                    title: "Топы",
                    description: "Легкие топы крючком для теплых дней, слоев и выразительных образов.",
                },
            ],
        },
        delivery: {
            eyebrow: "Доставка",
            title: "Детали доставки и оплаты",
        },
        contact: {
            eyebrow: "Контакты",
            title: "Социальные сети и контактная информация",
        },
    },
} satisfies Record<LandingLanguage, LandingTranslation>;
