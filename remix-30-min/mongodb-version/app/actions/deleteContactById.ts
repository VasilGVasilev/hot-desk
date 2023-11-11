import prisma from 'app/libs/prismadb';



export default async function deleteContactById(
    id: string
) {
    try {

        const deleteUser = await prisma.contact.delete({
            where: {
              id: id,
            },
          })

        return deleteUser;

    } catch (error: any) {
        throw new Error(error)
    }
}