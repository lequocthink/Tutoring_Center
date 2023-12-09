// "use client"
import Link from "next/link";
// import getAllAdmin from "@/app/actions/user/getAllAdmin";
import getAllStaff from "@/app/actions/user/getAllStaff";


export default async function Page() {


    const staff = await getAllStaff()

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
                <Link href="/admin/create/staffaccount" className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded">Tạo giáo viên</Link>
            </div>
            <div className="flex flex-col shadow-[0px_20px_20px_10px_#00000024] h-[520px] pb-2 pt-2 pr-2">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            {
                                staff.length > 0 &&

                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="">
                                        <tr className="sticky z-10 bg-white top-0">
                                            <th scope="col" className="px-6 py-4 text-left text-[20px] font-medium text-black uppercase">Email</th>
                                            <th scope="col" className="px-6 py-4 text-left text-[20px] font-medium text-black uppercase">Tên</th>
                                            <th scope="col" className="px-6 py-4 text-left text-[20px] font-medium text-black uppercase">Ngày tạo</th>
                                            <th scope="col" className="px-6 py-4 text-right text-[20px] font-medium text-black uppercase">Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y z-9 divide-gray-300">
                                        {
                                            staff.map((item) => (
                                                <tr key={item.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                                                        <Link href={'/admin/staffaccount/' + item.id} className="py-1 px-4 border-black border-[1px] rounded-[12px]">

                                                            {item.email}
                                                        </Link>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.name}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatter.format(Date.parse(item.createdAt))}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <Link href={'/admin/staffaccount/' + item.id} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">

                                                            Xem chi tiết
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>

                            }

                            {
                                staff.length === 0 && (
                                    <>
                                        <div className="w-[100%]">
                                            <p className="text-center uppercase text-[20px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[750px] py-2 mb-[20px] mt-[50px]">
                                                Chưa có tài khoản nhân viên nào được tạo
                                            </p>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
