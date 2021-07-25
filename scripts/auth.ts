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