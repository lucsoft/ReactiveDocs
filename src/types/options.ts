export type Options = {
    PageTitle: string,
    BaseUrl?: string,
    HighlightHue: number,
    Icon?: {
        materialIcon: string
    } | {
        image: string
    } | {
        fullImage: string
    },
    DisableSearchBar?: true,
    Links?: [ displayName: string, url: string ][]
}