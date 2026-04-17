"use client"

import {SignOutButton} from "@/src/components/auth/signout-button";

export const HomePageContents = () => {

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-muted/40 p-6">
            This is the home page.
            <SignOutButton />
        </main>
    );
}
