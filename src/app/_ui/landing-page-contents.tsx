"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { buttonVariants, Button } from "@/src/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/src/components/ui/card";
import { cn } from "@/src/lib/utils";
import {
    landingLanguages,
    landingTranslations,
} from "@/src/app/_ui/landing-translations";
import type { LandingLanguage } from "@/src/app/_ui/landing-translations";

const catalogProductImages = {
    "cardigan-cloudy": "/cardigan-cloudy.jpg?v=2",
};

const catalogPageSize = 4;

export const LandingPageContents = () => {
    const [language, setLanguage] = useState<LandingLanguage>("en");
    const [isCatalogVisible, setIsCatalogVisible] = useState(false);
    const catalogRef = useRef<HTMLElement | null>(null);
    const translation = landingTranslations[language];

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    useEffect(() => {
        const catalogElement = catalogRef.current;

        if (!catalogElement) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    setIsCatalogVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        observer.observe(catalogElement);

        return () => observer.disconnect();
    }, []);

    const navItems = [
        { label: translation.nav.aboutMe, href: "#aboutMe" },
        { label: translation.nav.customOrder, href: "#customOrder" },
        { label: translation.nav.catalog, href: "#catalog" },
        { label: translation.nav.delivery, href: "#delivery" },
        { label: translation.nav.contact, href: "#contact" },
    ];

    return (
        <div className="min-h-screen bg-[#f8eef0] text-[#2f2a2a]">
            <header className="sticky top-0 z-20 border-b border-white/50 bg-white/45 backdrop-blur-md">
                <nav className="mx-auto flex min-h-12 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
                    <a href="#aboutMe" className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                        {translation.brand}
                    </a>

                    <div className="hidden items-center gap-1 rounded-full border border-white/60 bg-white/35 p-1 sm:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    buttonVariants({ variant: "ghost", size: "xs" }),
                                    "px-3 text-xs uppercase text-[#4d3b3f] hover:-translate-y-0.5 hover:rounded-lg hover:bg-white hover:text-[#994d59] hover:shadow-sm"
                                )}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-1 rounded-full border border-white/60 bg-white/35 p-1">
                        {landingLanguages.map((languageOption) => (
                            <Button
                                key={languageOption.code}
                                variant="ghost"
                                size="sm"
                                type="button"
                                className={cn(
                                    "h-8 px-2.5 text-xs font-semibold text-[#4d3b3f] hover:bg-white/70",
                                    "hover:-translate-y-0.5 hover:rounded-lg hover:bg-white hover:text-[#994d59] hover:shadow-sm",
                                    language === languageOption.code && "bg-white/75 text-[#994d59]"
                                )}
                                aria-label={`Switch language to ${languageOption.label}`}
                                aria-pressed={language === languageOption.code}
                                onClick={() => setLanguage(languageOption.code)}
                            >
                                <span className={cn(languageOption.flagClassName, "rounded-sm shadow-xs")} />
                                <span>{languageOption.label}</span>
                            </Button>
                        ))}
                    </div>
                </nav>
            </header>

            <main>
                <section id="aboutMe" className="mx-auto grid min-h-[calc(100vh-3rem)] scroll-mt-16 w-full max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.06fr_0.94fr] lg:py-14">
                    <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#b05b66]">
                            {translation.aboutMe.eyebrow}
                        </p>

                        <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-[#2c2426] sm:text-5xl lg:text-6xl">
                            {translation.aboutMe.title}
                        </h1>

                        <div className="my-7 h-px w-24 bg-[#d88c98]" />

                        <p className="max-w-xl text-base leading-7 text-[#5f5154] sm:text-lg">
                            {translation.aboutMe.description}
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="#catalog"
                                className={cn(
                                    buttonVariants(),
                                    "bg-[#b05b66] px-5 text-white shadow-sm hover:-translate-y-0.5 hover:rounded-lg hover:bg-[#994d59] hover:shadow-md"
                                )}
                            >
                                {translation.aboutMe.primaryAction}
                            </a>
                            <a
                                href="#contact"
                                className={cn(
                                    buttonVariants({ variant: "outline" }),
                                    "border-[#d9a0a8] bg-white/45 px-5 text-[#6c3f46] hover:-translate-y-0.5 hover:rounded-lg hover:border-[#b05b66] hover:bg-white hover:text-[#994d59] hover:shadow-md"
                                )}
                            >
                                {translation.aboutMe.secondaryAction}
                            </a>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="group/photo ml-auto max-w-md overflow-hidden rounded-md border border-[#d78d98] bg-[#fffaf8] p-3 shadow-[12px_12px_0_rgba(176,91,102,0.2)]">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-white">
                                <Image
                                    src="/main.jpg?v=2"
                                    alt={translation.aboutMe.imageAlt}
                                    fill
                                    sizes="(min-width: 1024px) 420px, 100vw"
                                    priority
                                    unoptimized
                                    className="h-full w-full object-cover transition-opacity duration-1000 ease-out group-hover/photo:opacity-0"
                                />
                                <Image
                                    src="/main-on-hover.jpg?v=2"
                                    alt=""
                                    fill
                                    sizes="(min-width: 1024px) 420px, 100vw"
                                    loading="eager"
                                    unoptimized
                                    className="h-full w-full object-cover opacity-0 transition-opacity duration-1000 ease-out group-hover/photo:opacity-100"
                                />
                            </div>
                            <div className="px-1 pb-2 pt-5 text-left">
                                <p className="font-serif text-3xl font-bold uppercase leading-none tracking-[0.08em] text-[#2c2426]">
                                    Kate
                                </p>
                                <p className="mt-2 font-serif text-2xl leading-none text-[#2c2426]">
                                    Crochet Maker
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="customOrder" className="scroll-mt-16 border-y border-[#ead0d4] bg-white/50 px-4 py-16 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                            <div className="rounded-md border border-[#d78d98] bg-[#fffaf8] p-6 shadow-[10px_10px_0_rgba(176,91,102,0.14)] sm:p-8">
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                                    {translation.customOrder.eyebrow}
                                </p>
                                <h2 className="mt-4 font-serif text-4xl leading-tight text-[#2c2426] sm:text-5xl">
                                    {translation.customOrder.title}
                                </h2>
                                <p className="mt-6 text-base leading-7 text-[#5f5154] sm:text-lg">
                                    {translation.customOrder.intro}
                                </p>
                                <p className="mt-8 border-l-2 border-[#d88c98] pl-4 font-serif text-2xl leading-tight text-[#2c2426]">
                                    {translation.customOrder.closing}
                                </p>
                            </div>

                            <div className="grid gap-3">
                                {translation.customOrder.items.map((item, index) => (
                                    <Card
                                        key={item.title}
                                        className="rounded-md border-[#ead0d4] bg-white/65 py-4 shadow-none ring-[#ead0d4] transition-all duration-200 hover:-translate-y-1 hover:border-[#d88c98] hover:bg-white hover:shadow-md"
                                    >
                                        <CardContent className="grid gap-4 px-4 sm:grid-cols-[3.5rem_1fr] sm:items-start sm:px-5">
                                            <div className="flex size-12 items-center justify-center rounded-full border border-[#d88c98] bg-[#f8eef0] font-serif text-xl font-semibold text-[#994d59]">
                                                {String(index + 1).padStart(2, "0")}
                                            </div>
                                            <div>
                                                <CardTitle className="text-lg text-[#2c2426]">
                                                    {item.title}
                                                </CardTitle>
                                                <CardDescription className="mt-2 text-[#6a5b5f]">
                                                    {item.description}
                                                </CardDescription>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section ref={catalogRef} id="catalog" className="scroll-mt-16 px-4 py-16 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                            {translation.catalog.eyebrow}
                        </p>
                        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[#2c2426]">
                            {translation.catalog.title}
                        </h2>

                        <div className="mt-10 space-y-14">
                            {translation.catalog.groups.map((group) => (
                                <CatalogProductGroup
                                    key={group.title}
                                    group={group}
                                    emptyText={translation.catalog.emptyText}
                                    isVisible={isCatalogVisible}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section id="delivery" className="scroll-mt-16 border-y border-[#ead0d4] bg-white/50 px-4 py-16 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                            {translation.delivery.eyebrow}
                        </p>
                        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[#2c2426]">
                            {translation.delivery.title}
                        </h2>
                    </div>
                </section>

                <section id="contact" className="scroll-mt-16 px-4 py-16 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                            {translation.contact.eyebrow}
                        </p>
                        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[#2c2426]">
                            {translation.contact.title}
                        </h2>
                    </div>
                </section>
            </main>
        </div>
    )
}

type CatalogGroup = typeof landingTranslations.en.catalog.groups[number];

function CatalogProductGroup({
    group,
    emptyText,
    isVisible,
}: {
    group: CatalogGroup;
    emptyText: string;
    isVisible: boolean;
}) {
    const [page, setPage] = useState(0);
    const pageCount = Math.max(1, Math.ceil(group.products.length / catalogPageSize));
    const pageProducts = group.products.slice(page * catalogPageSize, (page + 1) * catalogPageSize);

    const showNextPage = () => setPage((currentPage) => (currentPage + 1) % pageCount);

    return (
        <section aria-label={group.title}>
            <div className="mb-5 flex items-end justify-between gap-4">
                <h3 className="font-serif text-3xl leading-none text-[#2c2426] sm:text-4xl">
                    {group.title}
                </h3>
                {pageCount > 1 ? (
                    <p className="text-sm font-medium text-[#994d59]">
                        {page + 1} / {pageCount}
                    </p>
                ) : null}
            </div>

            {group.products.length > 0 ? (
                <div className="relative">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {pageProducts.map((product, index) => (
                            <article
                                key={product.id}
                                className={cn(
                                    "min-w-0 transition-all duration-700 ease-out",
                                    isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                                )}
                                style={{ transitionDelay: `${index * 120}ms` }}
                            >
                                <div className="overflow-hidden rounded-md border border-[#d78d98] bg-[#fffaf8] p-2 shadow-[8px_8px_0_rgba(176,91,102,0.12)]">
                                    <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-white">
                                        <Image
                                            src={catalogProductImages[product.id]}
                                            alt={product.imageAlt}
                                            fill
                                            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                                            unoptimized
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                                <h4 className="mt-4 text-lg font-semibold text-[#2c2426]">
                                    {product.title}
                                </h4>
                                <p className="mt-2 text-sm leading-6 text-[#6a5b5f]">
                                    {product.description}
                                </p>
                            </article>
                        ))}
                    </div>

                    {pageCount > 1 ? (
                        <Button
                            type="button"
                            size="icon"
                            className="absolute right-0 top-1/2 size-12 -translate-y-1/2 rounded-full bg-[#b05b66] text-white shadow-md hover:bg-[#994d59]"
                            aria-label={`Next ${group.title} page`}
                            onClick={showNextPage}
                        >
                            →
                        </Button>
                    ) : null}

                    {pageCount > 1 ? (
                        <div className="mt-6 flex justify-center gap-2">
                            {Array.from({ length: pageCount }).map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={cn(
                                        "size-2.5 rounded-full border border-[#d88c98]",
                                        page === index ? "bg-[#994d59]" : "bg-white/70"
                                    )}
                                    aria-label={`Show ${group.title} page ${index + 1}`}
                                    onClick={() => setPage(index)}
                                />
                            ))}
                        </div>
                    ) : null}
                </div>
            ) : (
                <p className="border-l-2 border-[#d88c98] pl-4 text-base leading-7 text-[#6a5b5f]">
                    {emptyText}
                </p>
            )}
        </section>
    );
}
