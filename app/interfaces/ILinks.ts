import { IGradient } from './IGradient'

export interface ILinks {
    id: number
    iconPath: string
    link: string
    title: string
    isImportant: boolean,
    gradient: IGradient
}