import prisma from 'app/libs/prismadb';


export default async function getContacts(

) {
    try {

        const contacts = await prisma.contact.findMany({
            where: {}, //If you put where: {}  then all the records will be returned.
        });

        return contacts;

    } catch (error: any) {
        throw new Error(error)
    }
}