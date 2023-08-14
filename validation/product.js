const ErrorHandler = require("../utils/errorHandler");
const Joi = require("joi");

const title = Joi.string().required().min(2).max(20).label("title").messages({
  "string.base": `{#label} must have a type of string`,
  "string.min": `{#label} should have minimum length of {#limit}`,
  "string.max": `{#label} can not be more than {#limit}`,
  "any.required": `{#label} is required`,
});

const price = Joi.number().required().label("price").messages({
  "string.base": `{#label} must have a type of number`,
  "any.required": `{#label} is required`,
});
const description = Joi.string()
  .required()
  .min(2)
  .max(100)
  .label("description")
  .messages({
    "string.base": `{#label} must have a type of string`,
    "string.min": `{#label} should have minimum length of {#limit}`,
    "string.max": `{#label} can not be more than {#limit}`,
    "any.required": `{#label} is required`,
  });

const numberOfReviews = Joi.number()
  .integer()
  .required()
  .label("numberOfReviews")
  .messages({
    "number.base": `{#label} must have a type of number`,
    "number.integer": `{#label} must be an integer`,
    "any.required": `{#label} is required`,
  });

const averageRating = Joi.number().required().label("averageRating").messages({
  "string.base": `{#label} must have a type of number`,
  "any.required": `{#label} is required`,
});

const ratings = Joi.array()
  .items(
    Joi.number().required().label("ratings").messages({
      "number.base": `{#label} must have a type of number`,
      "any.required": `{#label} is required`,
    })
  )
  .label("ratings")
  .messages({
    "array.base": `{#label} must be an array`,
  });

const mediaCount = Joi.number()
  .integer()
  .required()
  .label("mediaCount")
  .messages({
    "number.base": `{#label} must have a type of number`,
    "number.integer": `{#label} must be an integer`,
    "any.required": `{#label} is required`,
  });

const options = {
  errors: {
    wrap: {
      label: "",
    },
  },
};

const createObj = Joi.object({
  title,
  price,
  numberOfReviews,
  description,
  averageRating,
  ratings,
  mediaCount,
});

exports.createValidate = async (req, res, next) => {
  try {
    await createObj.validateAsync(req.body, options);
  } catch (e) {
    return next(new ErrorHandler(e.message));
  }
  return next();
};
