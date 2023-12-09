interface Props {
    selectStaff: string[];
    setSelectStaff: React.Dispatch<React.SetStateAction<string[]>>;
    staffSelect: string | null;
}

import axios from "axios";
// import getAllStaff from "@/app/actions/user/getAllStaff";
import { useEffect, useState } from "react";


const SelectStaff: React.FC<Props> = ({ selectStaff, setSelectStaff, staffSelect }) => {

    const handleSetSelectStaff = (id: string) => {
        // Thực hiện các thao tác và sau đó gọi setSelectStaff để cập nhật state
        if (id !== '0') {

            setSelectStaff((prevState) => [id]);
        }
        console.log("Check select: ", selectStaff);
    };

    // let staff
    const [staff, setStaff] = useState<{
        createdAt: string;
        updatedAt: string;
        id: string;
        name: string;
        email: string;
        hashedPassword: string;
        basketIds: string[];
        role: string;
        gender: string | null;
        avatar: string | null;
        phone: string | null;
        address: string | null;
        birth: Date | null;
        status: string | null;
    }[]>([]);

    useEffect(() => {

        axios.get('/api/staff')
            .then((response) => {
                setStaff(response.data);
            })
            .catch((err) => {
                throw new Error(err);
            })
            .finally(() => {
                // setLoading(false);
            });
    }, []);


    return (
        <div>
            <select name="cars" id="cars" onChange={(e) => handleSetSelectStaff(e.target.value)} className="w-[100%] h-[50px] border-[3px] border-solid border-[#000000]">
                <option value="0">Chọn giáo viên</option>
                {
                    staff.map((item) => (
                        // if(item.id === staffSelect) {
                        //     // return;
                        // }

                        item.id !== staffSelect &&

                        <option value={item.id} key={item.id}>{item.name}</option>

                    ))
                }
            </select>
        </div>
    )
}

export default SelectStaff;