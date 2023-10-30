import { Course, User, News, Recruitment, Contact} from "@prisma/client"


export type SafeUser = Omit<User,"createdAt" | "updatedAt" > & {
    createdAt:string;
    updatedAt:string
}

export type safeCourse = Omit<Course,"createdAt"> & {
    createdAt:string;
}

export type safeNews = Omit<News,"createdAt" | "updatedAt" > & {
    createdAt:string;
    updatedAt:string
}

export type safeRecruitment = Omit<Recruitment,"createdAt" | "updatedAt" > & {
    createdAt:string;
    updatedAt:string
}

export type safeContact = Omit<Contact,"createdAt"> & {
    createdAt:string;
}

