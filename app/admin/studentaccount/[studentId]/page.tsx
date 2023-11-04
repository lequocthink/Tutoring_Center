
// import AdminDetailClient from "./AdminDetailClient";
// import StaffDetailClient from "./StaffDetailClient";
// import getAdminById from "@/app/actions/user/getAdminById";
import StudentDetailClient from "./StudentDetailClient";
// import getStaffById from "@/app/actions/user/getStaffById";
import getStudentById from "@/app/actions/user/getStudentById";

interface IParams {
    studentId?: string
}

export default async function page({ params }: { params: IParams }) {

    const id = JSON.stringify(params);
    const staff = await getStudentById(params);

    return (
        <StudentDetailClient data={staff} currentUser={null} id={id} />
    )

}