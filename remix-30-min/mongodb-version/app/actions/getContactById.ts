import prisma from 'app/libs/prismadb';

export default async function getContactById(
    params: string
) {
    try {
        const
            contactId
                = params;


        const contacts = await prisma.contact.findUnique({
            where: {
                id: contactId
            },
        });


        return contacts;

    } catch (error: any) {
        throw new Error(error)
    }
}