
import type { Metadata } from 'next';
import myUser from '@/app/actions/getUser';
import getBasketItems from '@/app/actions/getBasketItems';


export const metadata: Metadata = {
    title: 'Chi tiết bản tin',
    description: 'Trang chi tiết bản tin của trung tâm abc',
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