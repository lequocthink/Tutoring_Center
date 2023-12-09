// "use client"
import Link from "next/link";
// import getAllNews from "@/app/actions/getAllNews";
import getAllCourses from "@/app/actions/getAllCourses";

export default async function Page() {

    const news = await getAllCourses("")

    let formatter = new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });

    return (

        <div>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4">
                <Link href="/admin/create/course" className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded">Thêm khóa học</Link>
            </div>
            <div className="flex flex-col shadow-[0px_20px_20px_10px_#00000024] h-[520px] pb-2 pt-2 pr-2">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="">
                                    <tr className="sticky z-10 bg-white top-0">
                                        <th scope="col" className="px-6 py-4 text-left font-medium text-black uppercase text-[20px]">Tên khóa học</th>
                                        <th scope="col" className="px-6 py-4 text-left font-medium text-black uppercase text-[20px]">Học phí</th>
                                        <th scope="col" className="px-6 py-4 text-left font-medium text-black uppercase text-[20px]">Ngày tạo</th>
                                        <th scope="col" className="px-6 py-4 text-right font-medium text-black uppercase text-[20px]">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y z-9 divide-gray-300">
                                    {news.map((item) => (
                                        <tr key={item.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                                                <Link href={'/admin/course/' + item.id} className="py-1 px-4 border-black border-[1px] rounded-[12px]">

                                                    {item.name}
                                                </Link>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{Number(item.price).toLocaleString('en-US')} VND</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatter.format(Date.parse(item.createdAt))}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <Link href={'/admin/course/' + item.id} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">

                                                    Chi tiết
                                                </Link>
                                            </td>
                                        </tr>
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
