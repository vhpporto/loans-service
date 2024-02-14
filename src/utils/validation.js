import { z } from "zod";

const customerSchema = z.object({
  age: z.number(),
  cpf: z.string(),
  name: z.string(),
  income: z.number(),
  location: z.string(),
});

export const validateCustomer = (data) => {
  try {
    const validatedData = customerSchema.parse(data);
    return { success: true, data: validatedData };
  } catch (error) {
    return { success: false, message: error.errors };
  }
};
