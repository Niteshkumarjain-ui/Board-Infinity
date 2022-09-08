const Todu = require("../models/tudoModel");
const APIFeatures = require("../utils/apiFeature");

exports.list = async (req, res) => {
  try {
    const feature = new APIFeatures(Todu.find(), req.query).paginate();
    const todos = await feature.query;

    res.status(200).json({
      status: "success",
      results: todos.length,
      data: {
        todos,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.add = async (req, res) => {
  //console.log(req.body);
  // const newTour =new Tour();
  // newTour.save();
  try {
    const newTodu = await Todu.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        tour: newTodu,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
