
import type { Metadata } from 'next';
import myUser from '@/app/actions/getUser';
import getBasketItems from '@/app/actions/getBasketItems';


export const metadata: Metadata = {
    title: 'Quản lý phản hồi',
    description: 'Trang quản lý phản hồi của trung tâm abc',
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