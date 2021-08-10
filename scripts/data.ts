import { PostgrestError } from "@supabase/supabase-js"
import { supabase } from "../utils/supabaseClient"

type UserReturnData = {
    data?: UserData[] | null
    error?: PostgrestError | null
}

export const createUser = async (userID: string, email: string): Promise<void> => {
    try {
        const { data, error } = await supabase.from('User').insert([{ userID: userID, email: email }])
    } catch (e) {
        console.error("createUser Error: ", e)
    }
}

export const getUserData = async (userID: string): Promise<UserReturnData | null> => {
    try {
        const { data, error } = await supabase.from('User').select().eq('userID', userID)
        return { data, error }
    } catch (e) {
        console.error("getUser Error: ", e)
        return null
    }
}