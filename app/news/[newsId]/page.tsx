import getNewsById from "@/app/actions/getNewsById"
import Input from "@/app/(components)/Inputs/Input"
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";


interface IParams {
    newsId?: string
}

export default async function page({ params }: { params: IParams }) {

    const nid = JSON.stringify(params);
    const news = await getNewsById(params);

    return (
        <div className="container m-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 mb-[40px]">
            <Link href={'/news/'} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center mt-4 absolute">
                <BiArrowBack className="text-[25px]" />
            </Link>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[100%] py-2 mb-[20px] mt-[70px]">

                <h1 className="text-center uppercase text-[60px]">{news?.mainTitle}</h1>
            </div>
            <div>
                <img src={news?.imageSrc} alt="" className="m-auto" />
            </div>
            <div className="p-4 mb-[50px]">
                <h2 className="p-2 text-[50px] font-bold">
                    I. {news?.titleOne}
                </h2>

                <p className="p-2 text-[30px] text-justify">
                    - {news?.contentOne}
                </p>
            </div>

            <div className="p-4 mb-[50px]">
                <h2 className="p-2 text-[50px] font-bold">
                    II. {news?.titleTwo}
                </h2>

                <p className="p-2 text-[30px] text-justify">
                    - {news?.contentTwo}
                </p>

            </div>

            <div className="p-4 mb-[50px]">
                <h2 className="p-2 text-[50px] font-bold">
                    III. {news?.titleThree}
                </h2>

                <p className="p-2 text-[30px] text-justify">
                    - {news?.contentThree}
                </p>

            </div>

            <div className="p-4 mb-[50px]">
                <h2 className="p-2 text-[50px] font-bold">
                    IV. {news?.titleFour}
                </h2>

                <p className="p-2 text-[30px] text-justify">
                    - {news?.contentFour}
                </p>

            </div>

        </div>
    )

}