import getAllNews from "../actions/getAllNews";
import getAllRecruitment from "../actions/recruitment/getAllRecruitment";
import RecruitmentClient from "./RecruitmentClient";



export default async function page() {

    const recruitment = await getAllRecruitment()

    if (recruitment.length === 0) {
        return "No courses found to delete or update"
    }



    return (
        <>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[350px] py-2 mb-[40px] mt-[40px]">
                <h1 className="text-center uppercase text-[20px]">Thông tin tuyển dụng</h1>
            </div>
            <div className="container flex flex-row flex-wrap m-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-[50px]">
                {recruitment.map((item) => (
                    <RecruitmentClient
                        data={item}
                        key={item.id} currentUser={null} />
                ))}
            </div>

        </>


    )
}