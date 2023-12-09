// import getRecruitmentById from "@/app/actions/recruitment/getRecruitmentById";
import getContactById from "@/app/actions/contact/getContactById";

// import Recruitmentdetail from "./Recruitmentdetail";
import ContactDetail from "./ContactDetail";

interface IParams {
    contactId?: string
}



export default async function page({ params }: { params: IParams }) {

    const id = JSON.stringify(params);
    const contact = await getContactById(params);

    return (
        <ContactDetail data={contact} currentUser={null} id={id} />
    )

}