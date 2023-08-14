const Product = require("../models/product");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const idMap = require("../utils/idMap");
const { v4: uuidv4 } = require("uuid");

exports.getDataById = catchAsyncError(async (req, res, next) => {
  const result = await Product.aggregate([
    {
      $project: {
        _id: 1,
        title: 1,
        price: 1,
        numberOfReviews: 1,
        averageRating: 1,
        ratings: 1,
        mediaCount: 1,
        userId: 1,
      },
    },
  ]);
  res.status(200).json({
    success:true,
    result:result
  })
});

exports.createFields = catchAsyncError(async (req, res, next) => {
  const data = await Product.create({
    _id: `${idMap.fields}-${uuidv4()}`,
    userId: req.params.userId,
    ...req.body,
  });
  res.status(200).json({
    success:true,
    result: data,
  });
});
