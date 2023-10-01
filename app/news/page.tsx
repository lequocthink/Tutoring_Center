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
            <div className="flex gap-6 px-12 py-8">
                {news.map((item) => (
                    <NewsClient
                        data={item}
                        key={item.id} currentUser={null} />
                ))}
            </div>

        </>


    )
}