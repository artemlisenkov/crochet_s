export type LandingLanguage = "pl" | "en" | "uk";

export const landingLanguages: Array<{
    code: LandingLanguage;
    label: string;
    flagClassName: string;
}> = [
    { code: "pl", label: "PL", flagClassName: "fi fi-pl" },
    { code: "en", label: "EN", flagClassName: "fi fi-gb" },
    { code: "uk", label: "UA", flagClassName: "fi fi-ua" },
];

type LandingTranslation = {
    brand: string;
    nav: Record<"aboutMe" | "story" | "catalog" | "delivery" | "contact", string>;
    aboutMe: {
        eyebrow: string;
        title: string;
        description: string;
        primaryAction: string;
        secondaryAction: string;
        imageAlt: string;
    };
    story: {
        eyebrow: string;
        title: string;
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
        brand: "Kate Knitwear",
        nav: {
            aboutMe: "About me",
            story: "Story",
            catalog: "Catalog",
            delivery: "Delivery",
            contact: "Contact",
        },
        aboutMe: {
            eyebrow: "Handmade knitted clothing",
            title: "Soft knitted clothing made by hand",
            description:
                "I am Kate, and this is my calm place for handmade sweaters, cardigans, vests, scarves, and cozy knitted accessories. I make every item by hand with attention to texture, comfort, and quiet detail.",
            primaryAction: "View catalog",
            secondaryAction: "Meet Kate",
            imageAlt: "Kate wearing handmade knitwear",
        },
        story: {
            eyebrow: "Story",
            title: "Meet Kate and the work behind every stitch",
        },
        catalog: {
            eyebrow: "Catalog",
            title: "Handmade clothing and accessories",
            items: [
                {
                    title: "Sweaters",
                    description: "Soft everyday knitwear for cold seasons and slow mornings.",
                },
                {
                    title: "Cardigans",
                    description: "Layered pieces with a relaxed fit and handmade texture.",
                },
                {
                    title: "Accessories",
                    description: "Scarves, hats, and small knitted details for finished looks.",
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
        brand: "Kate Knitwear",
        nav: {
            aboutMe: "O mnie",
            story: "Historia",
            catalog: "Katalog",
            delivery: "Dostawa",
            contact: "Kontakt",
        },
        aboutMe: {
            eyebrow: "Ręcznie robiona odzież z dzianiny",
            title: "Miękka dzianinowa odzież tworzona ręcznie",
            description:
                "Mam na imię Kate i tworzę spokojne miejsce na ręcznie robione swetry, kardigany, kamizelki, szaliki oraz przytulne dodatki z dzianiny. Każdy produkt robię ręcznie, dbając o fakturę, wygodę i subtelne detale.",
            primaryAction: "Zobacz katalog",
            secondaryAction: "Poznaj Kate",
            imageAlt: "Kate w ręcznie robionej dzianinie",
        },
        story: {
            eyebrow: "Historia",
            title: "Poznaj Kate i pracę ukrytą w każdym oczku",
        },
        catalog: {
            eyebrow: "Katalog",
            title: "Ręcznie robiona odzież i dodatki",
            items: [
                {
                    title: "Swetry",
                    description: "Miękka dzianina na chłodne sezony i spokojne poranki.",
                },
                {
                    title: "Kardigany",
                    description: "Warstwowe fasony o swobodnym kroju i ręcznej fakturze.",
                },
                {
                    title: "Dodatki",
                    description: "Szaliki, czapki i małe dzianinowe detale do gotowych stylizacji.",
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
        brand: "Kate Knitwear",
        nav: {
            aboutMe: "Про мене",
            story: "Історія",
            catalog: "Каталог",
            delivery: "Доставка",
            contact: "Контакти",
        },
        aboutMe: {
            eyebrow: "В'язаний одяг ручної роботи",
            title: "М'який в'язаний одяг, створений вручну",
            description:
                "Мене звати Kate, і це мій спокійний простір для светрів, кардиганів, жилетів, шарфів і теплих в'язаних аксесуарів ручної роботи. Кожну річ я створюю вручну, з увагою до фактури, комфорту й тихих деталей.",
            primaryAction: "Переглянути каталог",
            secondaryAction: "Познайомитися з Kate",
            imageAlt: "Kate у в'язаному одязі ручної роботи",
        },
        story: {
            eyebrow: "Історія",
            title: "Познайомтеся з Kate і роботою за кожною петлею",
        },
        catalog: {
            eyebrow: "Каталог",
            title: "Одяг та аксесуари ручної роботи",
            items: [
                {
                    title: "Светри",
                    description: "М'який в'язаний одяг для холодних сезонів і повільних ранків.",
                },
                {
                    title: "Кардигани",
                    description: "Багатошаровий одяг з вільною посадкою та ручною фактурою.",
                },
                {
                    title: "Аксесуари",
                    description: "Шарфи, шапки й невеликі в'язані деталі для завершених образів.",
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
} satisfies Record<LandingLanguage, LandingTranslation>;
