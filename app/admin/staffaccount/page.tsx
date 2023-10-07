
export default function page() {
    return (

        <div>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2">

                <button type="submit" className="py-1 px-4 border-black border-[1px] rounded-[12px]">Add new staff</button>
            </div>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]">


                <table className="min-w-full divide-y divide-gray-300 ">
                    <thead className="">
                        <tr className="sticky z-10 bg-white top-0">
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Age</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Address</th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-black uppercase">Action</th>
                        </tr>
                    </thead>
                    {/* <tbody className="bg-transparent">
        <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-transparent">John Brown</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-transparent">45</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-transparent">New York No. 1 Lake Park</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-transparent">
                delete
            </td>
        </tr>
    </tbody> */}

                </table>
            </div>
            <div className="flex flex-col shadow-[0px_20px_20px_10px_#00000024] h-[520px] pb-2 pt-2 pr-2">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">

                            <table className="min-w-full divide-y divide-gray-300">
                                {/* <thead className="">
                    <tr className="sticky z-10 bg-white top-0">
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Age</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Address</th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-black uppercase">Action</th>
                    </tr>
                    <tr className="">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500"></td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a className="text-blue-500 hover:text-blue-700" href="#"></a>
                        </td>
                    </tr>
                </thead> */}
                                <tbody className="divide-y divide-gray-300">
                                    {/* <div className="pt-[40px]"></div> */}
                                    {/* <tr className="">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500"></td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a className="text-blue-500 hover:text-blue-700" href="#"></a>
                        </td>
                    </tr> */}
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">John Brown</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">New York No. 1 Lake Park</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">Jim Green</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">27</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">London No. 1 Lake Park</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">Joe Black</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">31</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sidney No. 1 Lake Park</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">Joe Black</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">31</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sidney No. 1 Lake Park</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">Joe Black</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">31</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sidney No. 1 Lake Park</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">Joe Black</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">31</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sidney No. 1 Lake Park</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">Joe Black</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">31</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sidney No. 1 Lake Park</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">Joe Black</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">31</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sidney No. 1 Lake Park</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">Joe Black</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">31</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sidney No. 1 Lake Park</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">Joe Black</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">31</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sidney No. 1 Lake Park</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">Joe Black</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">31</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sidney No. 1 Lake Park</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">Joe Black</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">31</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sidney No. 1 Lake Park</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
