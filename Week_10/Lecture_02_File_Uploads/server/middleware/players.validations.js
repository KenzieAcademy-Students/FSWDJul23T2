import { celebrate, Joi, Segments } from "celebrate";

export const validateCreatePlayer = celebrate({
  [Segments.BODY]: Joi.object()
    .options({ abortEarly: false })
    .keys({
      firstName: Joi.string().required().messages({
        "string.base": "First name must be a string",
        "any.required": "First name is required",
      }),
      lastName: Joi.string().required().messages({
        "string.base": "Last name must be a string",
        "any.required": "Last name is required",
      }),
      jerseyNum: Joi.number().min(0).max(99).required().messages({
        "number.base": "Jersey number must be a number",
        "number.min": "Jersey number cannot be negative",
        "number.max": "Jersey number cannot be greater than 99",
        "any.required": "Jersey number is required",
      }),
      position: Joi.string()
        .valid("RW", "C", "LW", "D", "G")
        .required()
        .messages({
          "string.base": "Position must be a string",
          "any.only": "Position must be one of 'RW', 'C', 'LW', 'D', or 'G'",
          "any.required": "Position is required",
        }),
      imageUrl: Joi.string().optional(),
    }),
});

export const validateGetPlayerById = celebrate({
  [Segments.PARAMS]: Joi.object()
    .options({ abortEarly: false })
    .keys({
      playerId: Joi.string().hex().length(24).message({
        "any.required": "Player ID is required as route parameter",
        "string.hex": "Player ID is invalid format",
        "string.length": "Player ID must be 24 characters long",
      }),
    }),
});

export const validateUpdatePlayer = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    playerId: Joi.string().hex().length(24).message({
      "any.required": "Player ID is required as route parameter",
      "string.hex": "Player ID is invalid format",
      "string.length": "Player ID must be 24 characters long",
    }),
  }),
  [Segments.BODY]: Joi.object()
    .options({ abortEarly: false })
    .keys({
      firstName: Joi.string()
        .optional()
        .messages({ "string.base": "First name must be a string" }),
      lastName: Joi.string()
        .optional()
        .messages({ "string.base": "Last name must be a string" }),
      jerseyNum: Joi.number().min(0).max(99).messages({
        "number.base": "Jersey number must be a number",
        "number.min": "Jersey number cannot be negative",
        "number.max": "Jersey number cannot be greater than 99",
      }),
      position: Joi.string().valid("RW", "C", "LW", "D", "G").messages({
        "string.base": "Position must be a string",
        "any.only": "Position must be one of 'RW', 'C', 'LW', 'D', or 'G'",
      }),
      imageUrl: Joi.string()
        .required()
        .messages({ "any.required": "Image URL is required" }),
    }),
});
