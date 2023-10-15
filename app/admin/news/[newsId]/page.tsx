// "use client"
// "use client"
import myUser from "@/app/actions/getUser"
// import getCourseById from "@/app/actions/getCourseById"
import ImageUpload from "@/app/(components)/Inputs/ImageUpload"


import getNewsById from "@/app/actions/getNewsById"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";


import NewsDetailClient from "./NewsDetail";


// import 


interface IParams {
    newsId?: string
}

interface InitialValue {
    mainTitle: any,
    imageSrc: any,
    titleOne: any,
    titleTwo: any,
    titleThree: any,
    titleFour: any,
    contentOne: any,
    contentTwo: any,
    contentThree: any,
    contentFour: any
}



export default async function page({ params }: { params: IParams }) {

    const nid = JSON.stringify(params);


    // const [news, setNews] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         //   const response = await fetch("https://api.example.com/data");
    //         //   const data = await response.json();
    //         //   setData(data);

    //         setNews(data)
    //     };

    //     fetchData();
    // }, []);
    const news = await getNewsById(params);

    // const currentUser = await myUser()
    const initialValue: InitialValue = {
        mainTitle: news?.mainTitle,
        imageSrc: news?.imageSrc,
        titleOne: news?.titleOne,
        titleTwo: news?.titleTwo,
        titleThree: news?.titleThree,
        titleFour: news?.titleFour,
        contentOne: news?.contentOne,
        contentTwo: news?.contentTwo,
        contentThree: news?.contentThree,
        contentFour: news?.contentFour

    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [state, setState] = useState(initialValue)


    const setCustomValue = (id: any, value: any) => {
        // setState((prevState) => ({
        //     ...prevState,
        //     [id]: value
        // }))

        initialValue.imageSrc = value;
    }


    return (
        <NewsDetailClient data={news} currentUser={null} id={nid} />
    )

}