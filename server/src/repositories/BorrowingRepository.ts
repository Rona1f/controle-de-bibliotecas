export interface BorrowingDatabaseProps {
  bookId: string;
  userId: string;
  dueDate: Date
}

export interface BorrowingDatabase {
  createBorrow: (props: BorrowingDatabaseProps) => Promise<void>;
}
