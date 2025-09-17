// This is a mock database to simulate storing and retrieving data.
// In a real application, you would use a proper database like Firestore.

interface MockDatabase {
  balances: { [key: string]: number };
}

const db: MockDatabase = {
  balances: {},
};

export const getBalance = (accountId: string): number => {
  return db.balances[accountId] || 0;
};

export const incrementBalance = (accountId: string): number => {
  if (!db.balances[accountId]) {
    db.balances[accountId] = 0;
  }
  db.balances[accountId] += 1;
  return db.balances[accountId];
};

export const setBalance = (accountId: string, amount: number): number => {
    db.balances[accountId] = amount;
    return db.balances[accountId];
}