
import getAllCourses from "@/app/actions/getAllCourses";
import CourseComponent from "../CourseComponent";
import getAllNews from "@/app/actions/getAllNews";
import Link from "next/link";
import Image from "next/image"

interface Props {
  searchParams: string
}

export default async function IntroduceFirst(searchParams: Props) {
  const courses = await getAllNews();
  return (
    <div className="container bg-white  pt-[100px] pb-[80px] m-auto">
      <div className="flex flex-col justify-center p-4 items-center">
        <p className="text-[#063953] text-4xl uppercase font-bold mb-4">
          Thông báo mới nhất
        </p>
      </div>

      <div>
        <div className="container flex flex-row flex-wrap m-auto">
          {courses.slice(0, 4).map((item: any) => (
            <div className="w-[600px] m-[20px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4" key={item.id}>



              <div className="flex flex-row items-start gap-1">
                <div className="w-[300px] p-5">
                  <Image src={item.imageSrc} alt="News Image" width={500} height={100} className="
                rounded-[10px]
                w-[700px]
                h-[150px]
                border-black border-[1px]
    "/>
                </div>
                <div className="flex flex-col font-light items-start p-5 justify-around my-auto">
                  <h3 className="text-[20px] mb-5">{item.mainTitle}</h3>
                  {/* <span>{data.titleOne}</span> */}
                  {/* <span>{data.createdAt}</span> */}
                  <Link href={'/news/' + item.id} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Xem chi tiết
                  </Link>
                </div>


              </div>

            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-[50px]">
          <Link href='/news' className='py-2 px-6 border-black border-[1px]'>Xem thêm</Link>
        </div>
      </div>


    </div>
  )
}