// "use client"
import Link from "next/link";
import getAllNews from "@/app/actions/getAllNews";
// import { useEffect, useState } from "react";
// import prisma from '../../lib/prismadb'
// import { useRouter } from "next/navigation"
// import Router from 'next/router'
// import { useRouter } from "next/navigation"
// import Router from "next/router"

// import { useRouter } from "next/navigation";

// import Link from "next/link";

import NewsDetailClient from "./[newsId]/NewsDetail";



type newsProps = {
    createdAt: string;
    updatedAt: string;
    id: string;
    mainTitle: string;
    titleOne: string;
    titleTwo: string;
    titleThree: string;
    titleFour: string;
    contentOne: string;
    contentTwo: string;
    contentThree: string;
    contentFour: string;
    imageSrc: string;
};

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page() {
    // const router = useRouter()
    // const router = useRouter()
    // Router.reload()

    // router.replace('/admin/news');


    // router.refresh()

    // Router.reload();


    // const news = await prisma.news.findMany({
    //     orderBy: {
    //         createdAt: 'desc'
    //     }
    // });

    // const safeNews = news.map((news) => ({
    //     ...news,
    //     createdAt: news.createdAt.toISOString(),
    //     updatedAt: news.createdAt.toISOString(),
    // }))


    const news = await getAllNews()
    // const [newss, setNewss] = useState<newsProps[]>([]);
    // setNewss(safeNews);

    // useEffect(() => {
    //     // data fetching here
    //     const api = () => {
    //         console.log("check data: ", data);
    //         // setNews(data)
    //     }

    //     api()
    // }, []);

    let formatter = new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });

    // if (news.length === 0) {
    //     return "No news found to delete or update"
    // }

    return (

        <div>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2">
                <Link href="/admin/createnews" className="py-1 px-4 border-black border-[1px] rounded-[12px]">Add new news</Link>
            </div>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]">


                <table className="min-w-full divide-y divide-gray-300 ">
                    <thead className="">
                        <tr className="sticky z-10 bg-white top-0">
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Name</th>
                            <th scope="col" className="pl-[440px] py-3 text-left text-xs font-medium text-black uppercase">Create At</th>
                            <th scope="col" className="translate-x-[-140px] py-3 text-left text-xs font-medium text-black uppercase">Update At</th>
                            <th scope="col" className="translate-x-[-20px] px-6 py-3 text-right text-xs font-medium text-black uppercase">Action</th>
                        </tr>
                    </thead>

                </table>
            </div>
            <div className="flex flex-col shadow-[0px_20px_20px_10px_#00000024] h-[520px] pb-2 pt-2 pr-2">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">


                            <table className="min-w-full divide-y divide-gray-300">
                                <tbody className="divide-y z-9 divide-gray-300">

                                    {news.map((item) => (
                                        <tr key={item.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                                                <Link href={'/admin/news/' + item.id} className="py-1 px-4 border-black border-[1px] rounded-[12px]">

                                                    {item.mainTitle}
                                                </Link>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatter.format(Date.parse(item.createdAt))}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatter.format(Date.parse(item.updatedAt))}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                                            </td>
                                        </tr>

                                        // <NewsDetailClient key={item.id} data={item} currentUser={null} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
