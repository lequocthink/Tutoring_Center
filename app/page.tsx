import SliderMain from "./(components)/SliderMain";
import CourseComponent from "./(components)/CourseComponent";
import getAllCourses from "./actions/getAllCourses";
import IntroduceFirst from "./(components)/introduceFirst/IntroduceFirst";

const images = [
  "/a.jpg",
  "b.jpg",
  "c.jpg"
]

interface HomeProps {
  searchParams:string
}


export default async function Home({searchParams}: HomeProps) {

  const courses = await getAllCourses(searchParams);

  return (
    <main className="w-[100%]">
      <SliderMain
        images={images}
      />

      <IntroduceFirst />

      <div>
        <div className="flex flex-wrap px-8">
          {courses.map((item:any) => (
            <CourseComponent
              key={item.id}
              data={item} 
              currentUser={null}
            />
          ))}
        </div>
      </div>
  </main> 
  )
}
