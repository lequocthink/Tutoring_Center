import getAllNews from "../actions/getAllNews";
// import NewsClient from "./NewsClient";
import CourseClient from "./CourseClient";
import getAllCourses from "@/app/actions/getAllCourses";
import myUser from "../actions/getUser";


interface Props {
    searchParams: string
}


export default async function page(searchParams: Props) {

    const courses = await getAllCourses(searchParams);
    const currentUser = await myUser();


    if (courses.length === 0) {
        return "No courses found to delete or update"
    }



    return (
        <>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[350px] py-2 mb-[40px] mt-[40px]">
                <h1 className="text-center uppercase text-[20px]">Khóa học</h1>
            </div>
            <div className="container flex flex-row flex-wrap m-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-[50px]">
                {courses.map((item) => (
                    <CourseClient
                        data={item}
                        key={item.id} currentUser={currentUser} />
                ))}
            </div>

        </>


    )
}