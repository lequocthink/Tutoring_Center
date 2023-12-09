
import getCourseById from "@/app/actions/getCourseById";
import getScheduleById from "@/app/actions/schedule/getScheduleById";

import CourseDetail from "./CourseDetail";
import Intermediate from "./Intermediate";

interface IParams {
    courseId?: string
}



export default async function page({ params }: { params: IParams }) {

    const id = JSON.stringify(params);
    const courses = await getCourseById(params);

    // const scheduleId = courses?.scheduleId;

    // const scheduleIdString = Array.isArray(scheduleId) ? scheduleId[0] : scheduleId;



    return (
        <Intermediate data={courses} currentUser={null} id={id} />
        // <CourseDetail data={courses} currentUser={null} id={id} />
    )

}