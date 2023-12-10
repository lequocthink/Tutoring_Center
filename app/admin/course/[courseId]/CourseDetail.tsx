'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { SafeUser, safeNews, safeCourse, safeSchedule } from "@/app/types"
import ImageUpload from "@/app/(components)/Inputs/ImageUpload"
import Input from "@/app/(components)/Inputs/Input"
import Button from "@/app/(components)/Button"
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import SelectStaff from "../../(components)/SelectStaff"

interface CourseProps {
    data: safeCourse;
    currentUser: SafeUser | null;
    id: any;
    schedulei: safeSchedule;
    teacher: SafeUser;
}

interface InitialSchedule {
    monday: string[],
    tuesday: string[],
    wednesday: string[],
    thursday: String[],
    friday: String[],
    saturday: String[],
    sunday: String[],
}

const initialSchedule: InitialSchedule = {
    monday: ['0', '0', '0', '0', '0', '0'],
    tuesday: ['0', '0', '0', '0', '0', '0'],
    wednesday: ['0', '0', '0', '0', '0', '0'],
    thursday: ['0', '0', '0', '0', '0', '0'],
    friday: ['0', '0', '0', '0', '0', '0'],
    saturday: ['0', '0', '0', '0', '0', '0'],
    sunday: ['0', '0', '0', '0', '0', '0'],
}

export default function CourseDetail({ data, id, schedulei, teacher }: CourseProps) {

    const myId = String(JSON.parse(id).courseId);
    const myTeacher = teacher;
    const course = data;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState(course)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false)

    const [schedule, setSchedule] = useState(schedulei);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectStaff, setSelectStaff] = useState<string[]>([]);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setState({ ...state, [event.target.name]: event.target.value })
    }


    const setCustomValue = (id: any, value: any) => {
        setState((prevState) => ({
            ...prevState,
            [id]: value
        }))
    }

    const router = useRouter()

    const onSubmit = (e: FormEvent) => {

        e.preventDefault();
        axios.put(`/api/news/${myId}`, {
            ...state,
        })
            .then(() => {
                router.refresh()
                router.replace('/admin/news')
            })
            .catch((err: any) => {
                throw new Error(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const removeSchedule = (day: string) => {
        if (day === "monday") {
            setSchedule({ ...schedule, monday: ['0', '0', '0', '0', '0', '0'] });
        }
        else if (day === "tuesday") {
            setSchedule({ ...schedule, tuesday: ['0', '0', '0', '0', '0', '0'] })
        }
        else if (day === "wednesday") {
            setSchedule({ ...schedule, wednesday: ['0', '0', '0', '0', '0', '0'] })
        }
        else if (day === "thursday") {
            setSchedule({ ...schedule, thursday: ['0', '0', '0', '0', '0', '0'] })
        }
        else if (day === "friday") {
            setSchedule({ ...schedule, friday: ['0', '0', '0', '0', '0', '0'] })
        }
        else if (day === "saturday") {
            setSchedule({ ...schedule, saturday: ['0', '0', '0', '0', '0', '0'] })
        }
        else if (day === "sunday") {
            setSchedule({ ...schedule, sunday: ['0', '0', '0', '0', '0', '0'] })
        }
    }

    const uncheckRadio = (day: string, id1: string, id2: string, id3: string, id4: string, id5: string, id6: string) => {
        const radioButton1 = document.getElementById(id1) as HTMLInputElement;
        const radioButton2 = document.getElementById(id2) as HTMLInputElement;
        const radioButton3 = document.getElementById(id3) as HTMLInputElement;
        const radioButton4 = document.getElementById(id4) as HTMLInputElement;
        const radioButton5 = document.getElementById(id5) as HTMLInputElement;
        const radioButton6 = document.getElementById(id6) as HTMLInputElement;
        if (radioButton1 && radioButton2) {
            radioButton1.checked = false;
            radioButton2.checked = false;
            radioButton3.checked = false;
            radioButton4.checked = false;
            radioButton5.checked = false;
            radioButton6.checked = false;
        }
        removeSchedule(day);
    }

    const onDelete = (e: FormEvent) => {
        setLoading(true)
        e.preventDefault();

        const isConfirmed = confirm('Bạn có chắc chắn muốn xóa khóa học "' + state.name + '" không ?');

        if (isConfirmed) {

            axios.delete(`/api/schedule/${schedule.id}`)
                .then(() => {
                    // router.refresh();
                    // router.replace('/admin/course')
                })
                .catch((error) => {
                    throw new Error(error)
                })
                .finally(() => {
                    setLoading(false)
                })

            axios.delete(`/api/course/${myId}`)
                .then(() => {
                    router.refresh();
                    router.replace('/admin/course')
                })
                .catch((error) => {
                    throw new Error(error)
                })
                .finally(() => {
                    setLoading(false)
                })


        }
        else {
            setLoading(false);
            return;
        }



    }

    const changeTeacher = (e: FormEvent) => {

        e.preventDefault();
        const isConfirmed = confirm('Bạn có chắc chắn muốn thay đổi giáo viên giảng dạy ' + myTeacher.name + ' không ?');
        if (isConfirmed) {
            axios.put(`/api/course/${myId}`, {
                teacherId: selectStaff, updateTeacher: true
            })
                .then(() => {
                    router.refresh()
                    router.replace('/admin/course')
                })
                .catch((err: any) => {
                    throw new Error(err)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
        else {
            setLoading(false);
            return;
        }



    }

    const updateCourses = (e: FormEvent) => {

        e.preventDefault();

        axios.put(`/api/schedule/${schedule.id}`, {
            ...schedule
        })
            .then(() => {
                // router.refresh()
                // router.replace('/admin/course')
                console.log("Check schedule: ", schedule);
            })
            .catch((err: any) => {
                throw new Error(err)
            })
            .finally(() => {
                // setLoading(false)
            })
        axios.put(`/api/course/${myId}`, {
            ...state, updateTeacher: false
        })
            .then(() => {
                router.refresh()
                router.replace('/admin/course')
            })
            .catch((err: any) => {
                throw new Error(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            {/* <button onClick={() => console.log("Check data: ", schedule)}>
                avbg
            </button> */}
            <Link href={'/admin/course/'} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center mt-4 ml-4 absolute">
                <BiArrowBack className="text-[25px]" />
            </Link>
            <div className="flex justify-center p-4 flex-col">
                <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[350px] py-2 mb-[20px]">
                    <h1 className="text-center uppercase text-[30px]">Chi tiết khóa học</h1>
                </div>
                <form className="flex flex-col gap-4" >
                    <div className="flex flex-row">

                        <div className="flex flex-col p-4 w-[50%] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[350px] py-2 mb-[20px]">
                                <h1 className="text-center uppercase text-[20px]">Thông tin lịch học</h1>
                            </div>
                            <div className="flex flex-row items-center mb-[10px] justify-between">
                                <p className="text-[20px] font-bold uppercase">Thứ hai:</p>
                                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded" type="button" onClick={() => uncheckRadio("monday", "mondayOne", "mondayTwo", "mondayThree", "mondayFour", "mondayFive", "mondaySix")}>hủy chọn</button>
                            </div>
                            <div className="flex flex-col mb-[10px]">
                                <div className="flex flex-row items-center">
                                    <p className="ml-[10px] mr-[20px] text-[20px] w-[120px]">
                                        Buổi Sáng:
                                    </p>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.monday[0] == "1" ? true : false} type="radio" id="mondayOne" name="mondayMorning" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, monday: prevState.monday.map((item, index) => index === 0 ? '1' : index === 1 ? '0' : item) }))} />
                                        <label htmlFor="mondayOne" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, monday: prevState.monday.map((item, index) => index === 0 ? '1' : index === 1 ? '0' : item) }))}>08:00 - 09:30</label>
                                    </div>
                                    <div className="flex flex-row items-center mr-[40px] translate-x-[-6px]">
                                        <input defaultChecked={schedule.monday[1] == "1" ? true : false} type="radio" id="mondayTwo" name="mondayMorning" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, monday: prevState.monday.map((item, index) => index === 1 ? '1' : index === 0 ? '0' : item) }))} />
                                        <label htmlFor="mondayTwo" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, monday: prevState.monday.map((item, index) => index === 1 ? '1' : index === 0 ? '0' : item) }))}>09:30 - 11:00</label>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <p className="ml-[10px] mr-[20px] text-[20px] w-[120px]">
                                        Buổi Chiều:
                                    </p>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.monday[2] == "1" ? true : false} type="radio" id="mondayThree" name="mondayAfternoon" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, monday: prevState.monday.map((item, index) => index === 2 ? '1' : index === 3 ? '0' : item) }))} />
                                        <label htmlFor="mondayThree" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, monday: prevState.monday.map((item, index) => index === 2 ? '1' : index === 3 ? '0' : item) }))}>13:00 - 14:30</label>
                                    </div>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.monday[3] == "1" ? true : false} type="radio" id="mondayFour" name="mondayAfternoon" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, monday: prevState.monday.map((item, index) => index === 3 ? '1' : index === 2 ? '0' : item) }))} />
                                        <label htmlFor="mondayFour" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, monday: prevState.monday.map((item, index) => index === 3 ? '1' : index === 2 ? '0' : item) }))}>14:30 - 16:00</label>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <p className="ml-[10px] mr-[20px] text-[20px] w-[120px]">
                                        Buổi Tối:
                                    </p>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.monday[4] == "1" ? true : false} type="radio" id="mondayFive" name="mondayEvening" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, monday: prevState.monday.map((item, index) => index === 4 ? '1' : index === 5 ? '0' : item) }))} />
                                        <label htmlFor="mondayFive" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, monday: prevState.monday.map((item, index) => index === 4 ? '1' : index === 5 ? '0' : item) }))}>17:00 - 18:30</label>
                                    </div>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.monday[5] == "1" ? true : false} type="radio" id="mondaySix" name="mondayEvening" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, monday: prevState.monday.map((item, index) => index === 5 ? '1' : index === 4 ? '0' : item) }))} />
                                        <label htmlFor="mondaySix" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, monday: prevState.monday.map((item, index) => index === 5 ? '1' : index === 4 ? '0' : item) }))}>18:30 - 20:00</label>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row items-center mb-[10px] justify-between">
                                <p className="text-[20px] font-bold uppercase">Thứ ba:</p>
                                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded" type="button" onClick={() => uncheckRadio("tuesday", "tuesdayOne", "tuesdayTwo", "tuesdayThree", "tuesdayFour", "tuesdayFive", "tuesdaySix")}>hủy chọn</button>
                            </div>
                            <div className="flex flex-col mb-[10px]">
                                <div className="flex flex-row items-center">
                                    <p className="ml-[10px] mr-[20px] text-[20px] w-[120px]">
                                        Buổi Sáng:
                                    </p>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.tuesday[0] == "1" ? true : false} type="radio" id="tuesdayOne" name="tuesdayMorning" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, tuesday: prevState.tuesday.map((item, index) => index === 0 ? '1' : index === 1 ? '0' : item) }))} />
                                        <label htmlFor="tuesdayOne" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, tuesday: prevState.tuesday.map((item, index) => index === 0 ? '1' : index === 1 ? '0' : item) }))}>08:00 - 09:30</label>
                                    </div>
                                    <div className="flex flex-row items-center mr-[40px] translate-x-[-6px]">
                                        <input defaultChecked={schedule.tuesday[1] == "1" ? true : false} type="radio" id="tuesdayTwo" name="tuesdayMorning" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, tuesday: prevState.tuesday.map((item, index) => index === 1 ? '1' : index === 0 ? '0' : item) }))} />
                                        <label htmlFor="tuesdayTwo" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, tuesday: prevState.tuesday.map((item, index) => index === 1 ? '1' : index === 0 ? '0' : item) }))}>09:30 - 11:00</label>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <p className="ml-[10px] mr-[20px] text-[20px] w-[120px]">
                                        Buổi Chiều:
                                    </p>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.tuesday[2] == "1" ? true : false} type="radio" id="tuesdayThree" name="tuesdayAfternoon" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, tuesday: prevState.tuesday.map((item, index) => index === 2 ? '1' : index === 3 ? '0' : item) }))} />
                                        <label htmlFor="tuesdayThree" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, tuesday: prevState.tuesday.map((item, index) => index === 2 ? '1' : index === 3 ? '0' : item) }))}>13:00 - 14:30</label>
                                    </div>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.tuesday[3] == "1" ? true : false} type="radio" id="tuesdayFour" name="tuesdayAfternoon" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, tuesday: prevState.tuesday.map((item, index) => index === 3 ? '1' : index === 2 ? '0' : item) }))} />
                                        <label htmlFor="tuesdayFour" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, tuesday: prevState.tuesday.map((item, index) => index === 3 ? '1' : index === 2 ? '0' : item) }))}>14:30 - 16:00</label>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <p className="ml-[10px] mr-[20px] text-[20px] w-[120px]">
                                        Buổi Tối:
                                    </p>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.tuesday[4] == "1" ? true : false} type="radio" id="tuesdayFive" name="tuesdayEvening" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, tuesday: prevState.tuesday.map((item, index) => index === 4 ? '1' : index === 5 ? '0' : item) }))} />
                                        <label htmlFor="tuesdayFive" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, tuesday: prevState.tuesday.map((item, index) => index === 4 ? '1' : index === 5 ? '0' : item) }))}>17:00 - 18:30</label>
                                    </div>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.tuesday[5] == "1" ? true : false} type="radio" id="tuesdaySix" name="tuesdayEvening" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, tuesday: prevState.tuesday.map((item, index) => index === 5 ? '1' : index === 4 ? '0' : item) }))} />
                                        <label htmlFor="tuesdaySix" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, tuesday: prevState.tuesday.map((item, index) => index === 5 ? '1' : index === 4 ? '0' : item) }))}>18:30 - 20:00</label>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row items-center mb-[10px] justify-between">
                                <p className="text-[20px] font-bold uppercase">Thứ tư:</p>
                                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded" type="button" onClick={() => uncheckRadio("wednesday", "wednesdayOne", "wednesdayTwo", "wednesdayThree", "wednesdayFour", "wednesdayFive", "wednesdaySix")}>hủy chọn</button>
                            </div>
                            <div className="flex flex-col mb-[10px]">
                                <div className="flex flex-row items-center">
                                    <p className="ml-[10px] mr-[20px] text-[20px] w-[120px]">
                                        Buổi Sáng:
                                    </p>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.wednesday[0] == "1" ? true : false} type="radio" id="wednesdayOne" name="wednesdayMorning" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, wednesday: prevState.wednesday.map((item, index) => index === 0 ? '1' : index === 1 ? '0' : item) }))} />
                                        <label htmlFor="wednesdayOne" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, wednesday: prevState.wednesday.map((item, index) => index === 0 ? '1' : index === 1 ? '0' : item) }))}>08:00 - 09:30</label>
                                    </div>
                                    <div className="flex flex-row items-center mr-[40px] translate-x-[-6px]">
                                        <input defaultChecked={schedule.wednesday[1] == "1" ? true : false} type="radio" id="wednesdayTwo" name="wednesdayMorning" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, wednesday: prevState.wednesday.map((item, index) => index === 1 ? '1' : index === 0 ? '0' : item) }))} />
                                        <label htmlFor="wednesdayTwo" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, wednesday: prevState.wednesday.map((item, index) => index === 1 ? '1' : index === 0 ? '0' : item) }))}>09:30 - 11:00</label>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <p className="ml-[10px] mr-[20px] text-[20px] w-[120px]">
                                        Buổi Chiều:
                                    </p>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.wednesday[2] == "1" ? true : false} type="radio" id="wednesdayThree" name="wednesdayAfternoon" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, wednesday: prevState.wednesday.map((item, index) => index === 2 ? '1' : index === 3 ? '0' : item) }))} />
                                        <label htmlFor="wednesdayThree" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, wednesday: prevState.wednesday.map((item, index) => index === 2 ? '1' : index === 3 ? '0' : item) }))}>13:00 - 14:30</label>
                                    </div>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.wednesday[3] == "1" ? true : false} type="radio" id="wednesdayFour" name="wednesdayAfternoon" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, wednesday: prevState.wednesday.map((item, index) => index === 3 ? '1' : index === 2 ? '0' : item) }))} />
                                        <label htmlFor="wednesdayFour" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, wednesday: prevState.wednesday.map((item, index) => index === 3 ? '1' : index === 2 ? '0' : item) }))}>14:30 - 16:00</label>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <p className="ml-[10px] mr-[20px] text-[20px] w-[120px]">
                                        Buổi Tối:
                                    </p>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.wednesday[4] == "1" ? true : false} type="radio" id="wednesdayFive" name="wednesdayEvening" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, wednesday: prevState.wednesday.map((item, index) => index === 4 ? '1' : index === 5 ? '0' : item) }))} />
                                        <label htmlFor="wednesdayFive" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, wednesday: prevState.wednesday.map((item, index) => index === 4 ? '1' : index === 5 ? '0' : item) }))}>17:00 - 18:30</label>
                                    </div>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.wednesday[5] == "1" ? true : false} type="radio" id="wednesdaySix" name="wednesdayEvening" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, wednesday: prevState.wednesday.map((item, index) => index === 5 ? '1' : index === 4 ? '0' : item) }))} />
                                        <label htmlFor="wednesdaySix" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, wednesday: prevState.wednesday.map((item, index) => index === 5 ? '1' : index === 4 ? '0' : item) }))}>18:30 - 20:00</label>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row items-center mb-[10px] justify-between">
                                <p className="text-[20px] font-bold uppercase">Thứ năm:</p>
                                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded" type="button" onClick={() => uncheckRadio("thursday", "thursdayOne", "thursdayTwo", "thursdayThree", "thursdayFour", "thursdayFive", "thursdaySix")}>hủy chọn</button>
                            </div>
                            <div className="flex flex-col mb-[10px]">
                                <div className="flex flex-row items-center">
                                    <p className="ml-[10px] mr-[20px] text-[20px] w-[120px]">
                                        Buổi Sáng:
                                    </p>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.thursday[0] == "1" ? true : false} type="radio" id="thursdayOne" name="thursdayMorning" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, thursday: prevState.thursday.map((item, index) => index === 0 ? '1' : index === 1 ? '0' : item) }))} />
                                        <label htmlFor="thursdayOne" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, thursday: prevState.thursday.map((item, index) => index === 0 ? '1' : index === 1 ? '0' : item) }))}>08:00 - 09:30</label>
                                    </div>
                                    <div className="flex flex-row items-center mr-[40px] translate-x-[-6px]">
                                        <input defaultChecked={schedule.thursday[1] == "1" ? true : false} type="radio" id="thursdayTwo" name="thursdayMorning" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, thursday: prevState.thursday.map((item, index) => index === 1 ? '1' : index === 0 ? '0' : item) }))} />
                                        <label htmlFor="thursdayTwo" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, thursday: prevState.thursday.map((item, index) => index === 1 ? '1' : index === 0 ? '0' : item) }))}>09:30 - 11:00</label>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <p className="ml-[10px] mr-[20px] text-[20px] w-[120px]">
                                        Buổi Chiều:
                                    </p>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.thursday[2] == "1" ? true : false} type="radio" id="thursdayThree" name="thursdayAfternoon" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, thursday: prevState.thursday.map((item, index) => index === 2 ? '1' : index === 3 ? '0' : item) }))} />
                                        <label htmlFor="thursdayThree" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, thursday: prevState.thursday.map((item, index) => index === 2 ? '1' : index === 3 ? '0' : item) }))}>13:00 - 14:30</label>
                                    </div>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.thursday[3] == "1" ? true : false} type="radio" id="thursdayFour" name="thursdayAfternoon" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, thursday: prevState.thursday.map((item, index) => index === 3 ? '1' : index === 2 ? '0' : item) }))} />
                                        <label htmlFor="thursdayFour" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, thursday: prevState.thursday.map((item, index) => index === 3 ? '1' : index === 2 ? '0' : item) }))}>14:30 - 16:00</label>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <p className="ml-[10px] mr-[20px] text-[20px] w-[120px]">
                                        Buổi Tối:
                                    </p>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.thursday[4] == "1" ? true : false} type="radio" id="thursdayFive" name="thursdayEvening" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, thursday: prevState.thursday.map((item, index) => index === 4 ? '1' : index === 5 ? '0' : item) }))} />
                                        <label htmlFor="thursdayFive" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, thursday: prevState.thursday.map((item, index) => index === 4 ? '1' : index === 5 ? '0' : item) }))}>17:00 - 18:30</label>
                                    </div>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.thursday[5] == "1" ? true : false} type="radio" id="thursdaySix" name="thursdayEvening" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, thursday: prevState.thursday.map((item, index) => index === 5 ? '1' : index === 4 ? '0' : item) }))} />
                                        <label htmlFor="thursdaySix" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, thursday: prevState.thursday.map((item, index) => index === 5 ? '1' : index === 4 ? '0' : item) }))}>18:30 - 20:00</label>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row items-center mb-[10px] justify-between">
                                <p className="text-[20px] font-bold uppercase">Thứ sáu:</p>
                                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded" type="button" onClick={() => uncheckRadio("friday", "fridayOne", "fridayTwo", "fridayThree", "fridayFour", "fridayFive", "fridaySix")}>hủy chọn</button>
                            </div>
                            <div className="flex flex-col mb-[10px]">
                                <div className="flex flex-row items-center">
                                    <p className="ml-[10px] mr-[20px] text-[20px] w-[120px]">
                                        Buổi Sáng:
                                    </p>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.friday[0] == "1" ? true : false} type="radio" id="fridayOne" name="fridayMorning" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, friday: prevState.friday.map((item, index) => index === 0 ? '1' : index === 1 ? '0' : item) }))} />
                                        <label htmlFor="fridayOne" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, friday: prevState.friday.map((item, index) => index === 0 ? '1' : index === 1 ? '0' : item) }))}>08:00 - 09:30</label>
                                    </div>
                                    <div className="flex flex-row items-center mr-[40px] translate-x-[-6px]">
                                        <input defaultChecked={schedule.friday[1] == "1" ? true : false} type="radio" id="fridayTwo" name="fridayMorning" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, friday: prevState.friday.map((item, index) => index === 1 ? '1' : index === 0 ? '0' : item) }))} />
                                        <label htmlFor="fridayTwo" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, friday: prevState.friday.map((item, index) => index === 1 ? '1' : index === 0 ? '0' : item) }))}>09:30 - 11:00</label>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <p className="ml-[10px] mr-[20px] text-[20px] w-[120px]">
                                        Buổi Chiều:
                                    </p>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.friday[2] == "1" ? true : false} type="radio" id="fridayThree" name="fridayAfternoon" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, friday: prevState.friday.map((item, index) => index === 2 ? '1' : index === 3 ? '0' : item) }))} />
                                        <label htmlFor="fridayThree" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, friday: prevState.friday.map((item, index) => index === 2 ? '1' : index === 3 ? '0' : item) }))}>13:00 - 14:30</label>
                                    </div>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.friday[3] == "1" ? true : false} type="radio" id="fridayFour" name="fridayAfternoon" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, friday: prevState.friday.map((item, index) => index === 3 ? '1' : index === 2 ? '0' : item) }))} />
                                        <label htmlFor="fridayFour" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, friday: prevState.friday.map((item, index) => index === 3 ? '1' : index === 2 ? '0' : item) }))}>14:30 - 16:00</label>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <p className="ml-[10px] mr-[20px] text-[20px] w-[120px]">
                                        Buổi Tối:
                                    </p>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.friday[4] == "1" ? true : false} type="radio" id="fridayFive" name="fridayEvening" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, friday: prevState.friday.map((item, index) => index === 4 ? '1' : index === 5 ? '0' : item) }))} />
                                        <label htmlFor="fridayFive" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, friday: prevState.friday.map((item, index) => index === 4 ? '1' : index === 5 ? '0' : item) }))}>17:00 - 18:30</label>
                                    </div>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.friday[5] == "1" ? true : false} type="radio" id="fridaySix" name="fridayEvening" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, friday: prevState.friday.map((item, index) => index === 5 ? '1' : index === 4 ? '0' : item) }))} />
                                        <label htmlFor="fridaySix" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, friday: prevState.friday.map((item, index) => index === 5 ? '1' : index === 4 ? '0' : item) }))}>18:30 - 20:00</label>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row items-center mb-[10px] justify-between">
                                <p className="text-[20px] font-bold uppercase">Thứ bảy:</p>
                                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded" type="button" onClick={() => uncheckRadio("saturday", "saturdayOne", "saturdayTwo", "saturdayThree", "saturdayFour", "saturdayFive", "saturdaySix")}>hủy chọn</button>
                            </div>
                            <div className="flex flex-col mb-[10px]">
                                <div className="flex flex-row items-center">
                                    <p className="ml-[10px] mr-[20px] text-[20px] w-[120px]">
                                        Buổi Sáng:
                                    </p>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.saturday[0] == "1" ? true : false} type="radio" id="saturdayOne" name="saturdayMorning" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, saturday: prevState.saturday.map((item, index) => index === 0 ? '1' : index === 1 ? '0' : item) }))} />
                                        <label htmlFor="saturdayOne" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, saturday: prevState.saturday.map((item, index) => index === 0 ? '1' : index === 1 ? '0' : item) }))}>08:00 - 09:30</label>
                                    </div>
                                    <div className="flex flex-row items-center mr-[40px] translate-x-[-6px]">
                                        <input defaultChecked={schedule.saturday[1] == "1" ? true : false} type="radio" id="saturdayTwo" name="saturdayMorning" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, saturday: prevState.saturday.map((item, index) => index === 1 ? '1' : index === 0 ? '0' : item) }))} />
                                        <label htmlFor="saturdayTwo" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, saturday: prevState.saturday.map((item, index) => index === 1 ? '1' : index === 0 ? '0' : item) }))}>09:30 - 11:00</label>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <p className="ml-[10px] mr-[20px] text-[20px] w-[120px]">
                                        Buổi Chiều:
                                    </p>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.saturday[2] == "1" ? true : false} type="radio" id="saturdayThree" name="saturdayAfternoon" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, saturday: prevState.saturday.map((item, index) => index === 2 ? '1' : index === 3 ? '0' : item) }))} />
                                        <label htmlFor="saturdayThree" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, saturday: prevState.saturday.map((item, index) => index === 2 ? '1' : index === 3 ? '0' : item) }))}>13:00 - 14:30</label>
                                    </div>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.saturday[3] == "1" ? true : false} type="radio" id="saturdayFour" name="saturdayAfternoon" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, saturday: prevState.saturday.map((item, index) => index === 3 ? '1' : index === 2 ? '0' : item) }))} />
                                        <label htmlFor="saturdayFour" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, saturday: prevState.saturday.map((item, index) => index === 3 ? '1' : index === 2 ? '0' : item) }))}>14:30 - 16:00</label>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <p className="ml-[10px] mr-[20px] text-[20px] w-[120px]">
                                        Buổi Tối:
                                    </p>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.saturday[4] == "1" ? true : false} type="radio" id="saturdayFive" name="saturdayEvening" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, saturday: prevState.saturday.map((item, index) => index === 4 ? '1' : index === 5 ? '0' : item) }))} />
                                        <label htmlFor="saturdayFive" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, saturday: prevState.saturday.map((item, index) => index === 4 ? '1' : index === 5 ? '0' : item) }))}>17:00 - 18:30</label>
                                    </div>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.saturday[5] == "1" ? true : false} type="radio" id="saturdaySix" name="saturdayEvening" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, saturday: prevState.saturday.map((item, index) => index === 5 ? '1' : index === 4 ? '0' : item) }))} />
                                        <label htmlFor="saturdaySix" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, saturday: prevState.saturday.map((item, index) => index === 5 ? '1' : index === 4 ? '0' : item) }))}>18:30 - 20:00</label>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row items-center mb-[10px] justify-between">
                                <p className="text-[20px] font-bold uppercase">Chủ nhật:</p>
                                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded" type="button" onClick={() => uncheckRadio("sunday", "sundayOne", "sundayTwo", "sundayThree", "sundayFour", "sundayFive", "sundaySix")}>hủy chọn</button>
                            </div>
                            <div className="flex flex-col mb-[10px]">
                                <div className="flex flex-row items-center">
                                    <p className="ml-[10px] mr-[20px] text-[20px] w-[120px]">
                                        Buổi Sáng:
                                    </p>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.sunday[0] == "1" ? true : false} type="radio" id="sundayOne" name="sundayMorning" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, sunday: prevState.sunday.map((item, index) => index === 0 ? '1' : index === 1 ? '0' : item) }))} />
                                        <label htmlFor="sundayOne" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, sunday: prevState.sunday.map((item, index) => index === 0 ? '1' : index === 1 ? '0' : item) }))}>08:00 - 09:30</label>
                                    </div>
                                    <div className="flex flex-row items-center mr-[40px] translate-x-[-6px]">
                                        <input defaultChecked={schedule.sunday[1] == "1" ? true : false} type="radio" id="sundayTwo" name="sundayMorning" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, sunday: prevState.sunday.map((item, index) => index === 1 ? '1' : index === 0 ? '0' : item) }))} />
                                        <label htmlFor="sundayTwo" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, sunday: prevState.sunday.map((item, index) => index === 1 ? '1' : index === 0 ? '0' : item) }))}>09:30 - 11:00</label>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <p className="ml-[10px] mr-[20px] text-[20px] w-[120px]">
                                        Buổi Chiều:
                                    </p>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.sunday[2] == "1" ? true : false} type="radio" id="sundayThree" name="sundayAfternoon" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, sunday: prevState.sunday.map((item, index) => index === 2 ? '1' : index === 3 ? '0' : item) }))} />
                                        <label htmlFor="sundayThree" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, sunday: prevState.sunday.map((item, index) => index === 2 ? '1' : index === 3 ? '0' : item) }))}>13:00 - 14:30</label>
                                    </div>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.sunday[3] == "1" ? true : false} type="radio" id="sundayFour" name="sundayAfternoon" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, sunday: prevState.sunday.map((item, index) => index === 3 ? '1' : index === 2 ? '0' : item) }))} />
                                        <label htmlFor="sundayFour" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, sunday: prevState.sunday.map((item, index) => index === 3 ? '1' : index === 2 ? '0' : item) }))}>14:30 - 16:00</label>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <p className="ml-[10px] mr-[20px] text-[20px] w-[120px]">
                                        Buổi Tối:
                                    </p>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.sunday[4] == "1" ? true : false} type="radio" id="sundayFive" name="sundayEvening" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, sunday: prevState.sunday.map((item, index) => index === 4 ? '1' : index === 5 ? '0' : item) }))} />
                                        <label htmlFor="sundayFive" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, sunday: prevState.sunday.map((item, index) => index === 4 ? '1' : index === 5 ? '0' : item) }))}>17:00 - 18:30</label>
                                    </div>
                                    <div className="flex flex-row items-center mr-[40px]">
                                        <input defaultChecked={schedule.sunday[5] == "1" ? true : false} type="radio" id="sundaySix" name="sundayEvening" value="1" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setSchedule((prevState) => ({ ...prevState, sunday: prevState.sunday.map((item, index) => index === 5 ? '1' : index === 4 ? '0' : item) }))} />
                                        <label htmlFor="sundaySix" className="text-[20px]" onClick={() => setSchedule((prevState) => ({ ...prevState, sunday: prevState.sunday.map((item, index) => index === 5 ? '1' : index === 4 ? '0' : item) }))}>18:30 - 20:00</label>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col p-4 w-[50%] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[350px] py-2 mb-[20px]">
                                <h1 className="text-center uppercase text-[20px]">Thông tin khóa học</h1>
                            </div>
                            <p className="mb-[10px] text-[20px]">Chọn ảnh nền khóa học:</p>
                            <div className="w-full">
                                <ImageUpload value={state.imageSrc} onChange={(value) => setCustomValue('imageSrc', value)} />
                            </div>
                            <p className="mb-[10px] text-[20px]">Tên khóa học:</p>
                            <Input big placeholder="Course name " id="name" type="text" value={state.name} name="name" onChange={handleChange} />
                            <p className="mb-[10px] text-[20px]">Mô tả khóa học:</p>
                            <Input big placeholder='Mô tả khóa học' id='description' type='text' value={state.description} name='description' onChange={handleChange} />

                            <p className="mb-[10px] text-[20px]">Học phí của khóa học:</p>
                            <Input big placeholder='Học phí' id='price' type='text' value={state.price} name='price' onChange={handleChange} />
                            <p className="mb-[10px] text-[20px]">Địa điểm:</p>
                            <Input big placeholder='Địa điểm' id='location' type='text' value={state.location} name='location' onChange={handleChange} />
                            <button type="submit" className="mb-[10px] block transition disabled:cursor-not-allowed relative bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded w-full" disabled={loading} onClick={updateCourses}>
                                Cập nhật thông tin
                            </button>
                            <p className="mb-[10px] text-[20px]">Giáo viên được phân công giảng dạy: {myTeacher.name}</p>
                            {/* <p className="mb-[10px] text-[20px]">{myTeacher.name}</p> */}
                            <p className="mb-[10px] text-[20px]">Thay đổi giáo viên giảng dạy:</p>
                            <SelectStaff selectStaff={selectStaff} setSelectStaff={setSelectStaff} staffSelect={myTeacher.id} />
                            <button type="submit" className="mt-[10px] mb-[10px] block transition disabled:cursor-not-allowed relative bg-yellow-400 hover:bg-yellow-700 text-white font-bold py-3 px-4 rounded w-full" disabled={loading} onClick={changeTeacher}>
                                Thay đổi giáo viên
                            </button>
                        </div>


                    </div>

                    <button type="submit" className="block transition disabled:cursor-not-allowed relative bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-4 rounded w-full" disabled={loading} onClick={onDelete}>
                        Xóa khóa học
                    </button>
                </form>
            </div>
        </div>
    )
}