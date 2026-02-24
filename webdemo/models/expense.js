/** 
 * @author niweefark
 * @example
 * 
 * 
 */
class Expense {
  /**
   Represents a Expense.
   @constructor
   @param {Date} date - The date of the expense.
   @param {number} income - The author of the book.
   @param {number} expense - The author of the book.
   @param {String} detail - The author of the book.
 */
  constructor(date, income, expense, detail) {
    this.date = date;
    this.income = parseFloat(income) || 0;
    this.expense = parseFloat(expense) || 0;
    this.detail = detail || '';
  }
}

/**
 * Class ExpenseModel.
 * @class
 */
class ExpenseModel {
  /**
   * @constructor
   */
  constructor() {
    this.expenses = [];
  }

/**
 * add expense numbers passed to the function.
 * @param {Expense} expense - A positive number.
 * @return {void}
 */
  add(expense) {
    this.expenses.push(expense);
  }

/**
 * return expense numbers from stack.
 * @return {Array<Expense} expense - array of positive number
 */

  getAll() {
    return this.expenses;
  }
/**
 * 
 * @returns {number}
 */
  getTotalIncome() {
    return this.expenses.reduce((sum, exp) => sum + exp.income, 0);
  }
/**
 * 
 * @returns {number}
 */
  getTotalExpense() {
    return this.expenses.reduce((sum, exp) => sum + exp.expense, 0);
  }
/**
 * 
 * @returns {number}
 */
  getMoneyLeft() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
}

module.exports = { Expense, ExpenseModel };
