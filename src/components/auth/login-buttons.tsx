"use client";

import { Button } from "@/src/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/src/lib/auth-client";

export const LoginButtons = () => {
    const signInWithGoogle = async () => await authClient.signIn.social({
        callbackURL: "/home",
        provider: "google",
    });

    return (
        <form className="space-y-3">
            <Button
                onClick={signInWithGoogle}
                variant="outline"
                className="w-full gap-2 border-[#d9a0a8] bg-white/70 text-[#4d3b3f] hover:-translate-y-0.5 hover:border-[#b05b66] hover:bg-white hover:text-[#994d59] hover:shadow-md"
                type="button"
            >
                <FcGoogle className="h-4 w-4" aria-hidden="true" />
                Continue with Google
            </Button>
        </form>
    )
}
