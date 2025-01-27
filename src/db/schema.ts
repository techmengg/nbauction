import { pgTable, serial } from "drizzle-orm/pg-core";

export const bids = pgTable("nb_bids", {
    id: serial("id").primaryKey(),
});

// create table we can store data in