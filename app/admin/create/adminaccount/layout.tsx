
import type { Metadata } from 'next';
import myUser from '@/app/actions/getUser';
import getBasketItems from '@/app/actions/getBasketItems';


export const metadata: Metadata = {
    title: 'Tạo tài khoản admin',
    description: 'Trang tạo tài khoản admin',
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