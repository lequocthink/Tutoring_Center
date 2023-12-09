// import CourseComponent from "../(components)/CourseComponent";
import getAllCourses from "../actions/getAllCourses"
import myUser from "../actions/getUser"
import CourseClient from "../course/CourseClient"

interface HomeProps {
  searchParams: string
}

export default async function page({ searchParams }: HomeProps) {

  const courses = await getAllCourses(searchParams)
  const currentUser = await myUser();

  return (
    <div>
      <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[350px] py-2 mb-[40px] mt-[40px]">
        <h1 className="text-center uppercase text-[20px]">Tìm khóa học</h1>
      </div>
      <div className="container flex flex-row flex-wrap m-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-[50px]">
        {courses.length > 0 && courses.map((item: any) => (
          <CourseClient
            data={item}
            key={item.id} currentUser={null}
          />
        ))}
        {
          courses.length < 1 && (
            <div className="text-center w-[100%] p-[20px]">
              <p className="text-center w-[100%] text-[20px]">

                Không tìm thấy khóa học
              </p>
            </div>
          )
        }
      </div>

    </div>
  )
}