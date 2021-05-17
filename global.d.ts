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