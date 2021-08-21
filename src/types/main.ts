export type MComponent = string
export type MElement = {
    Title?: string,
    Components: MComponent[]
}

export type Page = {
    AssignTo?: string
    LastUpdated?: [ author: string, date: Date ]
    Title: string
    SubTitle?: string,
    Elements: MElement[]
}