import Image from "next/image";
import Link from "next/link";
import AuthButton from "@/components/auth/auth-button";
import UserButton from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";

export default async function Header() {
  const session = await auth();

  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="mx-auto flex h-full items-center justify-between lg:max-w-screen-lg">
        <Link href="/" className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <Image src="/mascot.svg" alt="Mascot" height={40} width={40} />

          <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
            Lingua
          </h1>
        </Link>

        <div className="flex gap-x-3">
          {!session && (
            <>
              <AuthButton type="login" mode="modal" asChild>
                <Button size="lg" variant="ghost">
                  Login
                </Button>
              </AuthButton>

              <Link
                href="https://github.com/frantanius/lingua"
                target="_blank"
                rel="noreferrer noopener"
                className={session ? "pt-1.5" : "pt-3"}
              >
                <Image
                  src="/github.svg"
                  alt="Source Code"
                  height={20}
                  width={20}
                />
              </Link>
            </>
          )}
          {session && <UserButton />}
        </div>
      </div>
    </header>
  );
}
