1. You need a seeder file

```sh
import { PrismaClient } from "@prisma/client";

const seedData = [
    {
        avatar:
            "https://sessionize.com/image/124e-400o400o2-wHVdAuNaxi8KJrgtN3ZKci.jpg",
        first: "Shruti",
        last: "Kapoor",
        twitter: "@shrutikapoor08",
    },
];

async function seed() {
    const prisma = new PrismaClient();

    try {
        for (const contactEl of seedData) {

            await prisma.contact.create({
                data: {
                    avatar: contactEl.avatar,
                    first: contactEl.first,
                    last: contactEl.last,
                    twitter: contactEl.twitter,
                }
            });
        }

        console.log("Seed data has been inserted successfully.");
    } catch (error) {
        console.error("Error seeding data:", error);
    } finally {
        await prisma.$disconnect();
    }
}

seed();
```

2. Apply the following code to package.json

```sh
"prisma": {
  "seed": "ts-node prisma/seed.ts"
}
```

3. Install:

```sh
npm i -D ts-node typescript @types/node
```

4. Execute

```sh
npx prisma db seed
```