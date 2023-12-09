

// import getCourseById from "@/app/actions/getCourseById";
import getScheduleById from "@/app/actions/schedule/getScheduleById";
import getTeacherById from "@/app/actions/user/getTeacherByID";
import { SafeUser, safeNews, safeCourse } from "@/app/types"

// import Recruitmentdetail from "./Recruitmentdetail";
// import ContactDetail from "./ContactDetail";
import CourseDetail from "./CourseDetail";

// interface IParams {
//     courseId?: string
// }


interface Props {
    data: safeCourse;
    currentUser: SafeUser | null;
    id: any;
}


export default async function Intermediate({ data, id }: Props) {

    const courses = data;
    const scheduleIdString = Array.isArray(courses.scheduleId) ? courses.scheduleId[0] : courses.scheduleId;

    const schedule = await getScheduleById(courses.scheduleId);

    const teacher = await getTeacherById(courses.teacherId[0]);




    return (
        <CourseDetail data={courses} currentUser={null} id={id} schedulei={schedule} teacher={teacher} />
    )

}