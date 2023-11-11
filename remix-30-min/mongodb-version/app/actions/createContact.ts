import prisma from 'app/libs/prismadb';

export type ContactMutation = {
    id?: string;
    first?: string;
    last?: string;
    avatar?: string;
    twitter?: string;
};

export default async function createContact(
    
) {

    try {

        const createdContact = await prisma.contact.create({
            data: {
                avatar: '',
                first: '',
                last: '',
                twitter: '',
            }
        });

        return createdContact;

    } catch (error: any) {
        throw new Error(error)
    }
}
