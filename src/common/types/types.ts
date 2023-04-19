export type GeolocationDataType = {
    lat?: number
    lon?: number
}
type SuggestionsType = {
    data: {
        city_with_type: string
    }
}
export type GeolocationResponseType = {
    suggestions: SuggestionsType[]
}
export type StatusType = 'start' | 'completed' | 'inProgress'

export type DataListType = {
    id: number
    title: string
    list: string []
    status: StatusType
    countTasks?: number
    countCompletedTasks?: number
}
export type ButtonNameType = 'Продолжить тему' | 'Пройти заново' | 'Начать'

export type BranchDataType = {
    query: string | undefined
}

