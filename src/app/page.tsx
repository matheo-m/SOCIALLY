import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m-4">
      
      <SignedOut>
          <SignInButton mode="modal">
            <Button>Sign in</Button>
          </SignInButton>
      <Button variant={"secondary"}>Sign in</Button>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>

      <ModeToggle />

    </div>
  );
}
