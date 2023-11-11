import prisma from 'app/libs/prismadb';

export type ContactMutation = {
    id?: string;
    first?: string;
    last?: string;
    avatar?: string;
    twitter?: string;
  };

export default async function updateContactById(
    id: string, update: ContactMutation
) {
    try {



        const updatedContact = await prisma.contact.update({
            where: {
                id: id
            },
            data: {
                first: update.first,
                last: update.last,
                avatar: update.avatar,
                twitter: update.twitter
            }
        });


        return updatedContact;

    } catch (error: any) {
        throw new Error(error)
    }
}