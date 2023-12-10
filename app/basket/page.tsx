import CourseComponent from "../(components)/CourseComponent";
import getBasketItems from "../actions/getBasketItems";
import myUser from "../actions/getUser";
import CourseClient from "./CourseClient";


export default async function page() {

  const courses = await getBasketItems();
  const currentUser = await myUser();

  return (
    <>
      <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[350px] py-2 mb-[40px] mt-[40px]">
        <h1 className="text-center uppercase text-[20px]">Khóa học của tôi</h1>
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