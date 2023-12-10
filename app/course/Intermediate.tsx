

// import getCourseById from "@/app/actions/getCourseById";
import getScheduleById from "@/app/actions/schedule/getScheduleById";
import getTeacherById from "@/app/actions/user/getTeacherByID";
import { SafeUser, safeNews, safeCourse } from "@/app/types"
import getNotification from "../actions/getNotification";
import getAllStudentInCourse from "../actions/getAllStudentInCourse";
import getAllDocument from "../actions/getAllDocument";

import Induvidual from "./Induvidual";

interface Props {
    currentUser: SafeUser | null,
    data: any
}


export default async function Intermediate({
    currentUser,
    data
}: Props) {

    const course = data;
    // const scheduleIdString = Array.isArray(courses.scheduleId) ? courses.scheduleId[0] : courses.scheduleId;

    const schedule = await getScheduleById(course.scheduleId);

    const teacher = await getTeacherById(course.teacherId[0]);

    const allNotification = await getNotification(course.id);

    const allStudent = await getAllStudentInCourse(course.id);

    const allDocument = await getAllDocument(course.id);

    return (
        <Induvidual
            courseId={course?.id}
            currentUser={currentUser}
            price={course?.price}
            imageSrc={course?.imageSrc}
            name={course?.name}
            location={course?.location}
            description={course?.description}
            teacher={teacher}
            scheduleD={schedule}
            allNotification={allNotification}
            allStudent={allStudent}
            allDocument={allDocument}
        />
    )

}