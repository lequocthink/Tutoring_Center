import getNewsById from "@/app/actions/getNewsById"
import NewsDetailClient from "./NewsDetail";

interface IParams {
    newsId?: string
}

export default async function page({ params }: { params: IParams }) {

    const nid = JSON.stringify(params);
    const news = await getNewsById(params);

    return (
        <NewsDetailClient data={news} currentUser={null} id={nid} />
    )

}