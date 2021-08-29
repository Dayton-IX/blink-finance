type FormError = {
    message: string,
    fields?: string[]
}

enum TransactionType {
    INCOME = "INCOME",
    EXPENSE = "EXPENSE"
}

type UserData = {
    id: string
    userID: string
    email: string
    budgetPools?: string[]
    currentPool?: string
}

type PoolData = {
    id: string
    name: string
    totalBudget: number
    totalSpent: number
    categories?: string[]
    users?: string[]
}

type CategoryData = {
    id: string
    name: string
    totalBudget: number
    totalSpent: number
    budgetPool: string
}

type TransactionData = {
    id: string
    user: string
    amount: number
    category?: string
    frequency?: string
    memo?: string
}