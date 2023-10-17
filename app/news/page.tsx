import myUser from "../actions/getUser";
import getAllNews from "../actions/getAllNews";
import getAllCourses from "../actions/getAllCourses";
import getCurrUsersCourse from "../actions/getCurrUsersCourse";
import NewsClient from "./NewsClient";



export default async function page() {




    // const currentUser = await myUser();

    // if (!currentUser) {
    //     return "Not Authorized for this page"
    // }
    const news = await getAllNews()

    if (news.length === 0) {
        return "No courses found to delete or update"
    }



    return (
        <>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[350px] py-2 mb-[40px] mt-[40px]">
                <h1 className="text-center uppercase text-[20px]">Thông tin về trung tâm</h1>
            </div>
            <div className="container flex flex-row flex-wrap m-auto">
                {news.map((item) => (
                    <NewsClient
                        data={item}
                        key={item.id} currentUser={null} />
                ))}
            </div>

        </>


    )
}