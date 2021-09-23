import { Client } from "faunadb";

export const fauna = new Client({
    secret: process.env.FAUNADB_KEY,
    domain: 'db.us.fauna.com', // needed due to region group, if not added is getting an error to connect to database.
})