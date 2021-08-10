import { PostgrestError } from "@supabase/supabase-js"
import { supabase } from "../utils/supabaseClient"

type UserData = {
    data?: any //TODO Better typing here
    error?: PostgrestError | null
}

export const createUser = async (userID: string, email: string): Promise<UserData | null> => {
    try {
        const { data, error } = await supabase.from('User').insert([{ userID: userID, email: email }])
        return {data, error}
    } catch (e) {
        console.error("createUser Error: ", e)
        return null
    }
}