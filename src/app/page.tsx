import { bids as bidsSchema } from "@/db/schema";
import { database } from "@/db/database";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { revalidatePath } from "next/cache";


export default async function HomePage() {
  const bids = await database.query.bids.findMany();

  return (
    <main className="">
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