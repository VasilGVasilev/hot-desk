import prisma from 'app/libs/prismadb';

interface IParams {
    contactId?: string;
}

export default async function getContacts(
    params: IParams
) {
    try {
        const {
            contactId
        } = params;


        const contacts = await prisma.contact.findMany({
            where: {
                id: contactId
            }, 
        });
        

        return contacts;

    } catch (error: any) {
        throw new Error(error)
    }
}