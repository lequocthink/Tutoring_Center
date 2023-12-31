import getRecruitmentById from "@/app/actions/recruitment/getRecruitmentById";
import RecruitmentDetail from "./RecruitmentDetail";

interface IParams {
    recruitmentId?: string
}

export default async function page({ params }: { params: IParams }) {
    const rid = JSON.stringify(params);
    const recruitment = await getRecruitmentById(params);
    return (
        <RecruitmentDetail data={recruitment} currentUser={null} id={rid} />
    )

}