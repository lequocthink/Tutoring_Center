
import type { Metadata } from 'next';
import myUser from '../actions/getUser';
import getBasketItems from '../actions/getBasketItems';


export const metadata: Metadata = {
    title: 'Tuyển dụng',
    description: 'Trang tuyển dụng của trung tâm abc',
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const myCurrentUser = await myUser();
    const basketItems = await getBasketItems();

    return (
        <>
            {children}
        </>
    )
}