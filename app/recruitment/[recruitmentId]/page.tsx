
import getRecruitmentById from "@/app/actions/recruitment/getRecruitmentById";
import Image from "next/image";
import { AiFillDollarCircle, AiOutlineFieldTime, AiOutlineSolution, AiOutlineTeam } from "react-icons/ai";
import { BsPersonVcard, BsPersonWorkspace } from "react-icons/bs";
import { BiSolidMap, BiTimeFive, BiTimer, BiSolidGraduation } from "react-icons/bi";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";

interface IParams {
    recruitmentId?: string
}

export default async function page({ params }: { params: IParams }) {

    const recruitment = await getRecruitmentById(params);

    let formatter = new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        // hour: "numeric",
        // minute: "numeric",
        // second: "numeric",
    });

    return (
        <div className="container m-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 mb-[40px] mt-5">
            <Link href={'/recruitment/'} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center mt-4 absolute">
                <BiArrowBack className="text-[25px]" />
            </Link>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 flex items-center mt-[70px]">
                <div className="border-black border-[2px] p-3 rounded-full">
                    <Image src="/logo.png" alt="Logo" width={120} height={120} />

                </div>
                <div className="flex flex-col ml-5">
                    <div className="mb-[10px]">
                        <h1 className="text-[50px] font-bold">
                            {recruitment?.title}
                        </h1>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row mb-[15px]">
                            <div className="flex justify-center items-center mr-[30px]">
                                <AiFillDollarCircle className="text-[45px] mr-2 text-[#289DCC]" />
                                <p className="text-[20px]">
                                    Mức Lương: {recruitment?.salary}
                                </p>
                            </div>
                            <div className="flex justify-center items-center">
                                <AiOutlineFieldTime className="text-[45px] mr-2 text-[#289DCC]" />
                                <p className="text-[20px]">
                                    Hạn nộp hồ sơ: {recruitment?.deadline}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <BiSolidMap className="text-[45px] mr-2 text-[#289DCC]" />
                            <p className="text-[20px]">
                                Địa điểm làm việc: {recruitment?.location}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 mb-[20px] mt-[50px]">
                <h2 className="p-2 text-[40px] font-bold uppercase mb-[20px]">
                    I. Thông tin chung
                </h2>

                <div className="flex items-center flex-wrap">
                    <div className="flex items-center w-[30%] mb-[20px]">
                        <BiTimeFive className="text-[45px] mr-2 text-[#289DCC]" />
                        <p className="text-[20px]">
                            Ngày đăng: {formatter.format(Date.parse("" + recruitment?.createdAt))}
                        </p>
                    </div>
                    <div className="flex items-center w-[30%] mb-[20px]">
                        <BiTimer className="text-[45px] mr-2 text-[#289DCC]" />
                        <p className="text-[20px]">
                            Thời gian thử việc: {recruitment?.probationary}
                        </p>
                    </div>
                    <div className="flex items-center w-[30%] mb-[20px]">
                        <AiOutlineSolution className="text-[45px] mr-2 text-[#289DCC]" />
                        <p className="text-[20px]">
                            Vị trí: {recruitment?.position}
                        </p>
                    </div>
                    <div className="flex items-center w-[30%] mb-[20px]">
                        <AiOutlineTeam className="text-[45px] mr-2 text-[#289DCC]" />
                        <p className="text-[20px]">
                            Số lượng: {recruitment?.quantity}
                        </p>
                    </div>
                    <div className="flex items-center w-[30%] mb-[20px]">
                        <BsPersonVcard className="text-[45px] mr-2 text-[#289DCC]" />
                        <p className="text-[20px]">
                            Hình thức làm việc: {recruitment?.workingForm}
                        </p>
                    </div>
                    <div className="flex items-center w-[30%] mb-[20px]">
                        <BiSolidGraduation className="text-[45px] mr-2 text-[#289DCC]" />
                        <p className="text-[20px]">
                            Bằng cấp: {recruitment?.degree}
                        </p>
                    </div>
                    <div className="flex items-center w-[30%] mb-[20px]">
                        <BsPersonWorkspace className="text-[45px] mr-2 text-[#289DCC]" />
                        <p className="text-[20px]">
                            Kinh nghiệm: {recruitment?.experience}
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-4 mb-[20px]">
                <h2 className="p-2 text-[40px] font-bold uppercase mb-[20px]">
                    II. Mô tả công việc
                </h2>

                <p className="p-2 text-[30px] text-justify">
                    - {recruitment?.description}
                </p>

            </div>

            <div className="p-4 mb-[20px]">
                <h2 className="p-2 text-[40px] font-bold uppercase mb-[20px]">
                    III. Yêu cầu công việc
                </h2>

                <p className="p-2 text-[30px] text-justify">
                    - {recruitment?.required}
                </p>

            </div>

            <div className="p-4 mb-[20px]">
                <h2 className="p-2 text-[40px] font-bold uppercase mb-[20px]">
                    IV. Quyền lợi
                </h2>

                <p className="p-2 text-[30px] text-justify">
                    - {recruitment?.benefit}
                </p>
            </div>

            <div className="p-4 mb-[20px]">
                <h2 className="p-2 text-[40px] font-bold uppercase mb-[20px]">
                    V. Địa điểm làm việc
                </h2>

                <p className="p-2 text-[30px] text-justify">
                    - {recruitment?.location}
                </p>
            </div>

        </div>
    )

}