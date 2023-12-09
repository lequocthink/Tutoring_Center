
import type { Metadata } from 'next';
import myUser from '@/app/actions/getUser';
import getBasketItems from '@/app/actions/getBasketItems';


export const metadata: Metadata = {
    title: 'Tạo tài khoản học viên',
    description: 'Trang tạo tài khoản học viên của trung tâm abc',
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