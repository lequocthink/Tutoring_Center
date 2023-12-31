import type { Metadata } from 'next'
import SideBar from './(components)/SideBar'


export const metadata: Metadata = {
    title: 'Quản trị',
    description: 'Generated by create next app',
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2 pt-8 pl-8 mb-[20px]">
                <SideBar />
            </div>
            <div className="col-span-10 p-8">
                {children}
            </div>

        </div>
    )
}
