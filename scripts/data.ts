import { PostgrestError } from "@supabase/supabase-js"
import { supabase } from "../utils/supabaseClient"

type UserReturnData = {
    data?: UserData[] | null
    error?: PostgrestError | null | string
}

export const createUser = async (userID: string, email: string): Promise<void> => {
    try {
        const { data, error } = await supabase.from('User').insert([{ userID: userID, email: email }])
    } catch (e) {
        console.error("createUser Error: ", e)
    }
}

export const addPoolToUser = async (userID: string, poolID: string): Promise<UserReturnData> => {
    try {
        const query = await getUserData(userID)
        if (query.data) {
            const userData = query.data[0]
            let returnData: UserReturnData
            if (userData.budgetPools) {
                returnData = await supabase.from('User').update({ budgetPools: [...userData.budgetPools, poolID] }).match({ userID: userID })
            } else {
                returnData = await supabase.from('User').update({ budgetPools: [poolID], currentPool: poolID }).match({ userID: userID })
            }
            console.log("addPoolToUser returnData:", returnData)
            return returnData
        } else {
            return { data: null, error: "User Query Failed"}
        }
    } catch (e) {
        console.error("updateUser Error:", e)
        return { data: null, error: e }
    }
}

export const getUserData = async (userID: string): Promise<UserReturnData> => {
    try {
        const { data, error } = await supabase.from('User').select().eq('userID', userID)
        return { data, error }
    } catch (e) {
        console.error("getUser Error: ", e)
        return { data: null, error: e }
    }
}

export const createBudgetPool = async (userID: string, name: string): Promise<void> => {
    try {
        const {data, error} = await supabase.from("BudgetPool").insert([{ name: name, users: [userID] }])
        if (data) {
            addPoolToUser(userID, data[0].id)
        }
        console.log("New Budget Pool:", data, error)
    } catch (e) {
        console.error("createBudgetPool Error:", e)
    }
}