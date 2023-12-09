
import type { Metadata } from 'next';
import myUser from '@/app/actions/getUser';
import getBasketItems from '@/app/actions/getBasketItems';


export const metadata: Metadata = {
    title: 'Thay đổi mật khẩu',
    description: 'Trang thay đổi mật khẩu',
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