import { SignedIn, SignedOut } from "@clerk/nextjs";

export default async function Home() {
  return (
    <>
      <SignedOut>
        <main className="flex flex-grow flex-col items-center justify-center ">
          <div className="rounded-xl bg-white p-8 text-[#2e026d]">
            <h1 className="mb-4 text-2xl">Welcome to Home Pod</h1>

            <p>A simple way to organize your home.</p>
            <p>Currently for private use only.</p>
          </div>
        </main>
      </SignedOut>
      <SignedIn>
        <main className="flex flex-grow flex-col items-center justify-center ">
          <div className="rounded-xl bg-white p-8 text-[#2e026d]">
            <h1 className="mb-4 text-2xl">Welcome to your Home Pod</h1>

            <p>A simple way to organize your home.</p>
          </div>
        </main>
      </SignedIn>
    </>
  );
}
