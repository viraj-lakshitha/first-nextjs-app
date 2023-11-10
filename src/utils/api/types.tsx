export interface TopNewsResponse {
    status: string
    copyright: string
    section: string
    results: TopNews[]
}

export interface TopNews {
    title: string
    abstract: string
    url: string
}