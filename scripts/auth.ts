import { Session, User } from "@supabase/supabase-js"
import { supabase } from "../utils/supabaseClient"

type ReturnUserData = {
    user: User | null
    session: Session | null
    error: Error | null
}

export const userSignUp = async (email: string, password: string): Promise<ReturnUserData | null> => {
    try {
        const {user, session, error} = await supabase.auth.signUp({
            email: email,
            password: password
        })
        return {user, session, error}
    } catch (e) {
        console.error("userSignUp Error:", e)
        return null
    }
}

export const userSignIn = async (email: string, password: string): Promise<ReturnUserData | null> => {
    try {
        const {user, session, error} = await supabase.auth.signIn({
            email: email,
            password: password
        })
        return {user, session, error}
    } catch (e) {
        console.error("userSignIn Error:", e)
        return null
    }
}

export const userSignOut = async (): Promise<Error | null> => {
    const { error } = await supabase.auth.signOut()
    console.log("userSignOut Error:", error) 
    return error
}

export const getUser = (): User | null => {
    try {
        const user = supabase.auth.user()
        return user
    } catch (e) {
        console.error("getUser Error:", e)
        return null
    }
}