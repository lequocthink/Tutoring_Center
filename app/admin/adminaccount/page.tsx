// "use client"
import Link from "next/link";
import getAllAdmin from "@/app/actions/user/getAllAdmin";


export default async function Page() {


    const admin = await getAllAdmin()

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
                <Link href="/admin/create/adminaccount" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add new admin</Link>
            </div>
            <div className="flex flex-col shadow-[0px_20px_20px_10px_#00000024] h-[520px] pb-2 pt-2 pr-2">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">


                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="">
                                    <tr className="sticky z-10 bg-white top-0">
                                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-black uppercase">Email</th>
                                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-black uppercase">Name</th>
                                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-black uppercase">Create At</th>
                                        <th scope="col" className="px-6 py-4 text-right text-xs font-medium text-black uppercase translate-x-[-16px]">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y z-9 divide-gray-300">

                                    {admin.map((item) => (
                                        <tr key={item.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                                                <Link href={'/admin/adminaccount/' + item.id} className="py-1 px-4 border-black border-[1px] rounded-[12px]">

                                                    {item.email}
                                                </Link>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatter.format(Date.parse(item.createdAt))}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <Link href={'/admin/adminaccount/' + item.id} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">

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
