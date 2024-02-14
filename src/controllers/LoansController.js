import LoanService from "../services/LoanService.js";
import { validateCustomer } from "../utils/validation.js";

const loans = async (req, res) => {
  try {
    const validationResult = validateCustomer(req.body);

    if (!validationResult.success) {
      return res
        .status(400)
        .json({ success: false, message: validationResult.message });
    }

    const customerData = validationResult.data;

    const loansResult = LoanService.determineCustomerLoans(customerData);
    return res.status(200).json(loansResult);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};

export { loans };
