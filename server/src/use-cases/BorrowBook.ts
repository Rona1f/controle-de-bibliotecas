import { BorrowingDatabase } from "../repositories/BorrowingRepository"

export interface BorrowBookProps {
    userId: string
    bookId: string
    dueDate: Date
}

export class BorrowBook {
    constructor(
        private borrowingRepository: BorrowingDatabase
    ) {}

    async execute({userId, bookId, dueDate}:BorrowBookProps) {
        await this.borrowingRepository.createBorrow({
            userId,bookId,dueDate
        })
    }
}