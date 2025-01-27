import { bids as bidsSchema } from "@/db/schema";
import { database } from "@/db/database";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { revalidatePath } from "next/cache";
import { SignOut } from "@/components/sign-out";
import { SignIn } from "@/components/sign-in";
import { auth } from "@/auth";

export default async function HomePage() {
  const session = await auth();


  const bids = await database.query.bids.findMany();

  return (
    <main className="container mx-auto py-12">
      {session ? <SignOut /> : <SignIn />}
      {session?.user?.name}


      <form
         action={async (formData: FormData) => {
          "use server";
          await database.insert(bidsSchema).values({});
          revalidatePath("/");
        }}
         >
          <Input type="bid" placeholder="Bid" />
          <Button type="submit">Place Bid ! ! ! ! !</Button>
        </form>

        {bids.map((bid) => (
          <div key={bid.id}>{bid.id}</div>
        ))}
    </main>
  );
}