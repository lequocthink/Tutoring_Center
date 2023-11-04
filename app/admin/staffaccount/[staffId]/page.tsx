
// import AdminDetailClient from "./AdminDetailClient";
import StaffDetailClient from "./StaffDetailClient";
// import getAdminById from "@/app/actions/user/getAdminById";
import getStaffById from "@/app/actions/user/getStaffById";

interface IParams {
    staffId?: string
}

export default async function page({ params }: { params: IParams }) {

    const id = JSON.stringify(params);
    const staff = await getStaffById(params);

    return (
        <StaffDetailClient data={staff} currentUser={null} id={id} />
    )

}