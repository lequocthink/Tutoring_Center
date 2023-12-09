// "use client";
// import Link from "next/link";
// import { MdOutlineDashboardCustomize, MdOutlineAdminPanelSettings } from "react-icons/md";
// import { FaUserGraduate, FaUserTie, FaMailBulk } from "react-icons/fa";
// import { HiNewspaper, HiOutlineCreditCard } from "react-icons/hi2";
// import { LiaAddressCard, LiaMailBulkSolid } from "react-icons/lia";

// import getUser

// import myUser from "../actions/getUser";
// import PasswordComponent from "./PasswordComponent"
import PasswordComponent from "./passwordComponent";
import myUser from "@/app/actions/getUser";


export default async function page() {
    const user = await myUser()

    return (
        <div>
            {/* <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[350px] py-3 mb-[40px]">

                <h1 className="text-center uppercase text-[25px]">Thông tin cá nhân</h1>
            </div> */}
            <div className="grid grid-cols-12">
                <PasswordComponent
                    data={user}
                />
            </div>
        </div>
    );
}
