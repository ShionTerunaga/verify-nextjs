import { HPType } from "./types"

export const characters = async (): Promise<HPType[]> => {
    const res = await fetch(process.env.NEXT_PUBLIC_URL1 as string)

    const data = await res.json()

    return data as HPType[]
}
