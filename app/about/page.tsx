"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "../(components)/Inputs/Input";
import Link from "next/link";
import Image from "next/image";
import IntroduceFourth from "../(components)/introduceFourth/IntroduceFourth";

export default function page() {
    return (
        <div>
            <div>
                <Image
                    src="/about_background.jpg"
                    alt="Logo"
                    width={1000}
                    height={10}
                    className="h-[650px] object-cover w-full"
                />
            </div>

            <div className="pt-[100px] pb-[100px]">
                <div className="flex justify-center pb-[20px]">
                    <h1 className="text-5xl font-medium mb-2 uppercase text-[#063953] mt-[20px]">
                        Chúng tôi là ai ?
                    </h1>
                </div>
                <div className="container m-auto pt-6 pb-6 grid grid-cols-2">
                    <div className="flex flex-col ml-[10%] pr-[5px]">
                        <h3 className="text-4xl font-medium mb-2 uppercase text-[#063953] mt-[20px]">
                            VỀ ABC
                        </h3>
                        <h3 className="text-2xl font-medium mb-2 uppercase text-[#063953]">
                            Tận Tâm - UY TÍN – CHẤT LƯỢNG.
                        </h3>
                        <p className="flex flex-row items-center mb-[30px] text-[#063953]">
                            Gia sư ABC thành lập từ cuối năm 2010 tại TPHCM tới nay đã có hơn
                            10 năm hình thành và phát triển. Với khẩu hiệu “sự hài lòng của
                            học viên là thành công của chúng tôi”, ABC luôn nỗ lực không ngừng
                            để trở thành 1 trung tâm gia sư hàng đầu Việt Nam. Gia sư ABC hiện
                            đang văn phòng tại TPHCM và đang trong quá trình liên kết mở thêm
                            2 VP tại Hà Nội và Đà Nẵng trong năm 2023 và 2024.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image src="/center.jpg" alt="center" width={600} height={40} />
                    </div>
                </div>
            </div>

            <div className="pt-[10px] pb-[50px] bg-[black]">
                <div className="container m-auto pt-6 pb-6 grid grid-cols-2">
                    <div className="flex flex-col items-center">
                        <Image src="/about1.png" alt="center" width={600} height={40} />
                    </div>

                    <div className="flex flex-col ml-[10%] pr-[5px] pt-[110px]">
                        <h3 className="text-4xl font-medium mb-2 uppercase text-[#289DCC] mt-[80px]">
                            Phát triển không ngừng
                        </h3>
                        <p className="flex flex-row items-center mb-[30px] text-[#289DCC]">
                            Nhóm của chúng tôi được phân phối đầy đủ trên toàn thế giới.
                            Chúng tôi luôn săn lùng những tài năng xuất sắc có cùng giá trị
                            và nhiệt tình với việc phát triển lấy khách hàng làm trung tâm như chúng tôi.
                            Nhân viên tư vấn và chăm sóc khách hàng dược huấn luyện kỹ , đáp ứng đầy đủ các nhu cầu của PHHS.
                            Tập thể giáo viên giỏi, đã và đang dạy tại các trường học, trung tâm luyện thi, bồi dưỡng văn hóa,… (trung bình khoảng 30 tuổi) bảo đảm việc học tốt nhất cho con em và các bạn
                            Đội ngũ gia sư sinh viên đông đảo, rộng khắp (đã được chọn lọc ) chăm chỉ, nhiệt tình có kiến thức bảo đảm đáp ứng 100% nhu cầu về việc dạy thêm và học thêm tại nhà.
                        </p>
                    </div>


                </div>
            </div>


            <div className="">
                <div className="container m-auto pb-6 grid grid-cols-2">

                    <div className="flex flex-col ml-[10%] pr-[5px]">
                        <h3 className="text-4xl font-medium mb-2 uppercase text-[#063953] mt-[80px]">
                            phương pháp giảng dạy
                        </h3>
                        <p className="flex flex-row items-center mb-[30px] text-[#063953]">
                            Bám sát nội dung, chương trình đối mới của Bộ GD và ĐT cũng như các chương trình đào tạo quốc tế.
                            Nhằm đem lại lợi ích và chất lượng giáo dục tốt nhất, trung tâm gia sư Toàn Cầu xin giới thiệu đến
                            quý phụ huynh những dịch vụ sau :
                        </p>
                        <p className="flex flex-row items-center mb-[30px] text-[#063953]">
                            Giới thiệu gia sư ( miễn phí ) : phụ huynh có thể liên hệ với trung tâm để tìm gia sư cho con em mình
                            (tất cả mọi yêu cầu về trình độ và phương pháp giảng dạy của gia sư sẽ được trung tâm tuyển chọn khắt
                            khe nhằm đem đến cho quý phụ huynh một gia sư có chất lượng tốt nhất) . Quý phụ huynh có thể kiểm tra
                            lại các bằng cấp sư phạm, thẻ sinh viên.. Nếu quý phụ huynh chưa hài lòng về gia sư thì sẽ được trung
                            tâm giới thiệu gia sư khác nhằm phục vụ tốt nhất cho chất lượng học tập của con em mình.
                        </p>
                        <p className="flex flex-row items-center mb-[30px] text-[#063953]">
                            Tư vấn học tập (miễn phí) : Phụ huynh có những thắc mắc về việc tìm gia sư phù hợp cho con em mình,
                            xin hãy liên hệ đến trung tâm, nhân viên phụ trách hỗ trợ khách hàng sẽ trả lời cho quý phụ huynh mọi
                            thắc mắc về việc học hành và những vấn đề liên quan đến việc học của con bạn
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image src="/about2.png" alt="center" width={600} height={40} />
                    </div>

                </div>
            </div>

            <div className="bg-[black]">
                <div className="container m-auto pb-6 grid grid-cols-2 ">

                    <div className="flex flex-col items-center">
                        <Image src="/about3.png" alt="center" width={600} height={40} />
                    </div>


                    <div className="flex flex-col ml-[10%] pr-[5px]">
                        <h3 className="text-4xl font-medium mb-2 uppercase text-[#289DCC] mt-[80px]">
                            Dịch vụ của chúng tôi
                        </h3>
                        <p className="flex flex-row items-center mb-[30px] text-[#289DCC]">
                            Gia sư mẫu giáo, tiểu học: Toán, Tiếng Việt, Tiếng Anh (tăng cường và tích hợp),
                            dạy Theo Sổ Báo Bài, Tập Đọc, Tập Viết, rèn chữ đẹp.
                        </p>
                        <p className="flex flex-row items-center mb-[30px] text-[#289DCC]">
                            Gia sư dạy THCS và THPT các môn Toán, Lý, Hóa, Sinh, Anh văn.. hoặc kèm chung các môn báo bài.
                        </p>
                        <p className="flex flex-row items-center mb-[30px] text-[#289DCC]">
                            Ôn tập và luyện thi vào lớp 10 chuyên các môn.
                        </p>
                        <p className="flex flex-row items-center mb-[30px] text-[#289DCC]">
                            Gia sư giỏi dạy luyện thi kỳ thi quốc gia lớp 12: Toán, Lý, Hóa, Văn, Anh, Sinh, Sử, Địa…
                        </p>
                        <p className="flex flex-row items-center mb-[30px] text-[#289DCC]">
                            Gia sư kinh nghiệm luyện thi chuyển cấp, luyện thi trường chuyên Lê Hồng Phong, Trần Đại Nghĩa,
                            Nguyễn Thượng Hiền, PTNK…
                        </p>
                        <p className="flex flex-row items-center mb-[30px] text-[#289DCC]">
                            Gia sư dạy ngoại ngữ cho sinh viên, người lớn tuổi, người đi làm: Anh văn, Hoa văn, Tiếng Hàn, Tiếng Nhật, Tiếng Trung…
                        </p>
                    </div>


                </div>
            </div>

            <IntroduceFourth />
        </div>
    );
}
