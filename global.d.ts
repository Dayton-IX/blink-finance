type Category = {
    id: string,
    name: string,
    monthlyAmount: number,
    remainingAmount: number,
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