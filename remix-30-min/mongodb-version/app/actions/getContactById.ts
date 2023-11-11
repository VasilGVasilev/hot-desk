import prisma from 'app/libs/prismadb';

export default async function getContactById(
    params: string
) {
    try {
        const
            contactId
                = params;


        const contact = await prisma.contact.findUnique({
            where: {
                id: contactId
            },
        });


        return contact;

    } catch (error: any) {
        throw new Error(error)
    }
}