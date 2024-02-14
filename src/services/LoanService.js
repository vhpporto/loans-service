import {
  PERSONAL_LOAN,
  GUARANTEED_LOAN,
  CONSIGNMENT_LOAN,
} from "../constants.js";

class LoanService {
  static grantPersonalLoan(customerData) {
    if (customerData.income <= 3000) {
      return PERSONAL_LOAN;
    }

    if (
      customerData.income >= 3000 &&
      customerData.income <= 5000 &&
      customerData.age < 30 &&
      customerData.location.toLowerCase() === "sp"
    ) {
      return PERSONAL_LOAN;
    }

    return null;
  }

  static grantConsignmentLoan(customerData) {
    if (customerData.income >= 5000) {
      return CONSIGNMENT_LOAN;
    }

    return null;
  }

  static grantGuaranteedLoan(customerData) {
    if (customerData.income <= 3000) {
      return GUARANTEED_LOAN;
    }

    if (
      customerData.income >= 3000 &&
      customerData.income <= 5000 &&
      customerData.age < 30 &&
      customerData.location.toLowerCase() === "sp"
    ) {
      return GUARANTEED_LOAN;
    }

    return null;
  }

  static determineCustomerLoans(customerData) {
    const loansResult = {
      name: customerData.name,
      loans: [],
    };

    const personalLoan = LoanService.grantPersonalLoan(customerData);
    if (personalLoan) {
      loansResult.loans.push(personalLoan);
    }

    const consignmentLoan = LoanService.grantConsignmentLoan(customerData);
    if (consignmentLoan) {
      loansResult.loans.push(consignmentLoan);
    }

    const guaranteedLoan = LoanService.grantGuaranteedLoan(customerData);
    if (guaranteedLoan) {
      loansResult.loans.push(guaranteedLoan);
    }

    return loansResult;
  }
}

export default LoanService;
