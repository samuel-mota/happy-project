import { ErrorRequestHandler } from "express";
import { ValidationError } from "yup";

interface ValidationErrors {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    let errors: ValidationErrors = {};

    error.inner.forEach(err => {
      errors[err.path] = err.errors;
    })

    return response.status(400).json({message: 'Validation fails', errors })
  }

  console.error(error); // shows error details in console

  return response.status(500).json({ message: "Internal server error" }); // shows to user
};

export default errorHandler;
