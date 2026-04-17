"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { buttonVariants, Button } from "@/src/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { cn } from "@/src/lib/utils";
import {
    landingLanguages,
    landingTranslations,
} from "@/src/app/_ui/landing-translations";
import type { LandingLanguage } from "@/src/app/_ui/landing-translations";

export const LandingPageContents = () => {
    const [language, setLanguage] = useState<LandingLanguage>("en");
    const t = landingTranslations[language];

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const navItems = [
        { label: t.nav.aboutMe, href: "#aboutMe" },
        { label: t.nav.story, href: "#story" },
        { label: t.nav.catalog, href: "#catalog" },
        { label: t.nav.delivery, href: "#delivery" },
        { label: t.nav.contact, href: "#contact" },
    ];

    return (
        <div className="min-h-screen bg-[#f8eef0] text-[#2f2a2a]">
            <header className="sticky top-0 z-20 border-b border-white/50 bg-white/45 backdrop-blur-md">
                <nav className="mx-auto flex min-h-12 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
                    <a href="#aboutMe" className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                        {t.brand}
                    </a>

                    <div className="hidden items-center gap-1 rounded-full border border-white/60 bg-white/35 p-1 sm:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    buttonVariants({ variant: "ghost", size: "xs" }),
                                    "px-3 text-xs uppercase text-[#4d3b3f] hover:-translate-y-0.5 hover:bg-white hover:text-[#994d59] hover:shadow-sm"
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
                                    "hover:-translate-y-0.5 hover:bg-white hover:text-[#994d59] hover:shadow-sm",
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
                            {t.aboutMe.eyebrow}
                        </p>

                        <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-[#2c2426] sm:text-5xl lg:text-6xl">
                            {t.aboutMe.title}
                        </h1>

                        <div className="my-7 h-px w-24 bg-[#d88c98]" />

                        <p className="max-w-xl text-base leading-7 text-[#5f5154] sm:text-lg">
                            {t.aboutMe.description}
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="#catalog"
                                className={cn(
                                    buttonVariants(),
                                    "bg-[#b05b66] px-5 text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#994d59] hover:shadow-md"
                                )}
                            >
                                {t.aboutMe.primaryAction}
                            </a>
                            <a
                                href="#story"
                                className={cn(
                                    buttonVariants({ variant: "outline" }),
                                    "border-[#d9a0a8] bg-white/45 px-5 text-[#6c3f46] hover:-translate-y-0.5 hover:border-[#b05b66] hover:bg-white hover:text-[#994d59] hover:shadow-md"
                                )}
                            >
                                {t.aboutMe.secondaryAction}
                            </a>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="group/photo relative ml-auto max-w-md overflow-hidden border border-[#d78d98] bg-[#f1b8c1] p-3 shadow-[12px_12px_0_rgba(176,91,102,0.2)] transition-transform duration-300 hover:-translate-y-1">
                            <div className="absolute inset-x-3 bottom-3 flex h-8 items-center justify-center text-sm font-semibold uppercase tracking-[0.28em] text-[#994d59] opacity-0 transition-opacity duration-200 group-hover/photo:opacity-100">
                                Kate
                            </div>
                            <div className="relative z-10 aspect-4/5 overflow-hidden bg-white transition-transform duration-300 ease-out group-hover/photo:-translate-y-10">
                                <Image
                                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
                                    alt={t.aboutMe.imageAlt}
                                    fill
                                    sizes="(min-width: 1024px) 420px, 100vw"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="story" className="scroll-mt-16 border-y border-[#ead0d4] bg-white/50 px-4 py-16 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                            {t.story.eyebrow}
                        </p>
                        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[#2c2426]">
                            {t.story.title}
                        </h2>
                    </div>
                </section>

                <section id="catalog" className="scroll-mt-16 px-4 py-16 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                            {t.catalog.eyebrow}
                        </p>
                        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[#2c2426]">
                            {t.catalog.title}
                        </h2>

                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                            {t.catalog.items.map((item) => (
                                <Card
                                    key={item.title}
                                    className="rounded-md border-[#ead0d4] bg-white/55 shadow-none ring-[#ead0d4] transition-all duration-200 hover:-translate-y-1 hover:border-[#d88c98] hover:bg-white/80 hover:shadow-md"
                                >
                                    <CardHeader>
                                        <CardTitle>{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-[#6a5b5f]">
                                            {item.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="delivery" className="scroll-mt-16 border-y border-[#ead0d4] bg-white/50 px-4 py-16 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                            {t.delivery.eyebrow}
                        </p>
                        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[#2c2426]">
                            {t.delivery.title}
                        </h2>
                    </div>
                </section>

                <section id="contact" className="scroll-mt-16 px-4 py-16 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                            {t.contact.eyebrow}
                        </p>
                        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[#2c2426]">
                            {t.contact.title}
                        </h2>
                    </div>
                </section>
            </main>
        </div>
    )
}
