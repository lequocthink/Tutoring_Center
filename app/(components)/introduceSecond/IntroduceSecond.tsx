import getAllCourses from "@/app/actions/getAllCourses";
import CourseComponent from "../CourseComponent";
import Link from "next/link";

interface Props {
    searchParams:string
}


export default async function IntroduceSecond(searchParams:Props) {
    const courses = await getAllCourses(searchParams);
  return (
    <div className="bg-gradient-to-r from-green-200 to-blue-200 pt-[100px] pb-[80px]">
        <div className="flex flex-col justify-center p-4 items-center">
            <p className="text-[#063953] text-4xl uppercase font-bold mb-4">
                Khóa học mới nhất
            </p>
        </div>

        <div>
        <div className="flex flex-wrap px-8 container m-auto">
          {courses.map((item:any) => (
            <CourseComponent
              key={item.id}
              data={item} 
              currentUser={null}
            />
          ))}

        {courses.map((item:any) => (
            <CourseComponent
              key={item.id}
              data={item} 
              currentUser={null}
            />
          ))}
          {courses.map((item:any) => (
            <CourseComponent
              key={item.id}
              data={item} 
              currentUser={null}
            />
          ))}

{courses.map((item:any) => (
            <CourseComponent
              key={item.id}
              data={item} 
              currentUser={null}
            />
          ))}
        </div>

        <div className="flex flex-col items-center mt-[50px]">
            <Link href='/news' className='py-2 px-6 border-black border-[1px]'>Xem thêm</Link>
        </div>
      </div>

        
    </div>
  )
}