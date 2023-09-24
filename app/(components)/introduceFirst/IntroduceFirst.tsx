'use client';
import Link from "next/link";
import Image from "next/image";
import { MdOutlineWorkspacePremium, MdOutlineDiversity1, MdMenuBook, MdHomeWork } from "react-icons/md";
import { FaBook } from "react-icons/fa";


export default function IntroduceFirst() {
  return (
    <div className="bg-gradient-to-r from-green-200 to-blue-200 py-8">
        <div className="flex flex-col justify-center p-4 items-center">
            <p className="text-[#063953] text-4xl uppercase font-bold mb-4">
                Hệ thống giáo dục
            </p>
            <p className="text-[#063953] text-4xl uppercase font-bold">
                hàng đầu Việt Nam
            </p>
        </div>

        <div className="container m-auto pt-6 pb-6 flex flex-row justify-between">
            <div className="flex flex-col items-center">
                <MdOutlineWorkspacePremium className='text-[160px] text-[#063953] mb-3'/> 
                <h3 className="text-4xl font-medium mb-2 uppercase text-[#063953]">
                    6 NĂM
                </h3>
                <h3 className="text-2xl font-medium mb-2 uppercase text-[#063953]">
                    ĐẠT CHUẨN NEAS
                </h3>
                <p className="flex flex-row items-center mb-1 text-[#063953]">
                    Với 100% cơ sở đạt tiêu
                </p>
                <p className="flex flex-row items-center mb-1 text-[#063953]">
                    chuẩn quốc tế về chất
                </p>
                <p className="flex flex-row items-center mb-1 text-[#063953]">
                    lượng giảng dạy và cơ
                </p>
                <p className="flex flex-row items-center mb-1 text-[#063953]">
                    sở vật chất.
                </p>
            </div>

            <div className="flex flex-col items-center">
                <MdOutlineDiversity1 className='text-[160px] text-[#063953] mb-3'/> 
                <h3 className="text-4xl font-medium mb-2 uppercase text-[#063953]">
                    2.700.000
                </h3>
                <h3 className="text-2xl font-medium mb-2 uppercase text-[#063953]">
                    GIA ĐÌNH TIN TƯỞNG
                </h3>
                <p className="flex flex-row items-center mb-1 text-[#063953]">
                    Tự hào đồng hành với các gia
                </p>
                <p className="flex flex-row items-center mb-1 text-[#063953]">
                    đình Việt Nam trên hành
                </p>
                <p className="flex flex-row items-center mb-1 text-[#063953]">
                    trình khơi mở tương lai
                </p>
                <p className="flex flex-row items-center mb-1 text-[#063953]">
                    với nền tảng học thuật
                </p>
                <p className="flex flex-row items-center mb-1 text-[#063953]">
                    và kỹ năng vững chắc
                </p>
            </div>

            <div className="flex flex-col items-center">
                <MdMenuBook className='text-[160px] text-[#063953] mb-3'/> 
                <h3 className="text-4xl font-medium mb-2 uppercase text-[#063953]">
                    30 NĂM
                </h3>
                <h3 className="text-2xl font-medium mb-2 uppercase text-[#063953]">
                    KINH NGHIỆM GIẢNG DẠY
                </h3>
                <p className="flex flex-row items-center mb-1 text-[#063953]">
                    Kinh nghiệm đào tạo các thế hệ
                </p>
                <p className="flex flex-row items-center mb-1 text-[#063953]">
                    học viên, thấu hiểu nhu cầu và
                </p>
                <p className="flex flex-row items-center mb-1 text-[#063953]">
                    thói quen học tập của người
                </p>
                <p className="flex flex-row items-center mb-1 text-[#063953]">
                    Việt Nam, từ đó tạo nên những
                </p>
                <p className="flex flex-row items-center mb-1 text-[#063953]">
                    chương trình chuẩn quốc tế
                </p>
                <p className="flex flex-row items-center mb-1 text-[#063953]">
                    dành riêng cho người Việt.
                </p>
            </div>

            <div className="flex flex-col items-center">
                <MdHomeWork className='text-[160px] text-[#063953] mb-3'/> 
                <h3 className="text-4xl font-medium mb-2 uppercase text-[#063953]">
                    70+
                </h3>
                <h3 className="text-2xl font-medium mb-2 uppercase text-[#063953]">
                    TRUNG TÂM
                </h3>
                <p className="mb-1 text-[#063953]">
                    Có mặt tại 18 tỉnh và
                </p>
                <p className="flex flex-row items-center mb-1 text-[#063953]">
                    thành phố lớn trên toàn
                </p>
                <p className="flex flex-row items-center mb-1 text-[#063953]">
                    quốc.
                </p>
            </div>

        </div>

        
    </div>
  )
}