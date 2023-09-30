'use client';
import Link from "next/link";
import Image from "next/image";
import { MdOutlineWorkspacePremium, MdOutlineDiversity1, MdMenuBook, MdHomeWork } from "react-icons/md";
import { FaBook } from "react-icons/fa";


export default function IntroduceThird() {
  return (
    <div className="bg-white pt-[100px] pb-[80px]">

        <div className="container m-auto pt-6 pb-6 grid grid-cols-2">
            <div className="flex flex-col ml-[10%] pr-[5px]">
                <h3 className="text-4xl font-medium mb-2 uppercase text-[#063953] mt-[20px]">
                    VỀ ABC
                </h3>
                <h3 className="text-2xl font-medium mb-2 uppercase text-[#063953]">
                    UY TÍN – CHẤT LƯỢNG – PHỤC VỤ TẠI NHÀ.
                </h3>
                <p className="flex flex-row items-center mb-[30px] text-[#063953]">
                    Gia sư ABC thành lập từ cuối năm 2010 tại TPHCM tới nay đã có hơn 10 năm hình thành và phát triển.
                    Với khẩu hiệu “sự hài lòng của học viên là thành công của chúng tôi”, ABC luôn nỗ lực không ngừng để 
                    trở thành 1 trung tâm gia sư hàng đầu Việt Nam.
                    Gia sư ABC hiện đang văn phòng tại TPHCM và đang trong quá trình liên kết mở thêm 2 VP tại Hà Nội và Đà Nẵng 
                    trong năm 2023 và 2024.
                </p>

                <div>
                    <Link href='/news' className='py-2 px-6 border-black border-[1px]'>Xem thêm</Link>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <Image src="/center.jpg" alt="center" width={600} height={40}/>
            </div>

        </div>

        
    </div>
  )
}