
import type { Metadata } from 'next';
import myUser from '../actions/getUser';
import getBasketItems from '../actions/getBasketItems';


export const metadata: Metadata = {
    title: 'Bản tin',
    description: 'Trang bản tin của trung tâm dạy thêm ABC',
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