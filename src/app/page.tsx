import { bids as bidsSchema } from "@/db/schema";
import { database } from "@/db/database";

export default async function HomePage() {
  const bids = await database.query.bids.findMany();

  return (
    <main className="container mx-auto p-4">
      <form
         action={async (formData: FormData) => {
          "use server";
          await database.insert(bidsSchema).values({});
        }}
         >
          <input type="bid" placeholder="Bid" />
          <button type="submit">Place Bid ! ! ! ! !</button>
        </form>

        {bids.map((bid) => (
          <div key={bid.id}>{bid.id}</div>
        ))}
    </main>
  );
}