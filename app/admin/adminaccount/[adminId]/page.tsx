
import AdminDetailClient from "./AdminDetailClient";
import getAdminById from "@/app/actions/user/getAdminById";

interface IParams {
    adminId?: string
}

export default async function page({ params }: { params: IParams }) {

    const id = JSON.stringify(params);
    const admin = await getAdminById(params);

    return (
        <AdminDetailClient data={admin} currentUser={null} id={id} />
    )

}