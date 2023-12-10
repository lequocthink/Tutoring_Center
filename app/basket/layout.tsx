
import type { Metadata } from 'next';
import myUser from '../actions/getUser';
import getBasketItems from '../actions/getBasketItems';


export const metadata: Metadata = {
    title: 'Khóa học của tôi',
    description: 'Khóa học của người dùng trung tâm dạy thêm ABC',
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