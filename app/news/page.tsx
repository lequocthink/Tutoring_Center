import getAllNews from "../actions/getAllNews";
import NewsClient from "./NewsClient";



export default async function page() {

    const news = await getAllNews()

    if (news.length === 0) {
        return "No courses found to delete or update"
    }



    return (
        <>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[350px] py-2 mb-[40px] mt-[40px]">
                <h1 className="text-center uppercase text-[20px]">Thông báo của trung tâm</h1>
            </div>
            <div className="container flex flex-row flex-wrap m-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-[50px]">
                {news.map((item) => (
                    <NewsClient
                        data={item}
                        key={item.id} currentUser={null} />
                ))}
            </div>

        </>


    )
}