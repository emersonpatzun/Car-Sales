import Car from "../models/Car";

// Create Cars
export const createCars = async (req, res) => {
  const { brand, model, price, imgURL, number } = req.body;
  try {
    const newCar = new Car({
      brand,
      model,
      price,
      imgURL,
      number,
    });

    const carSaved = await newCar.save();

    res.status(201).json(carSaved);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// View cars
export const getCars = async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
};

// View car by Id
export const getCarById = async (req, res) => {
  const car = await Car.findById(req.params.carId);
  res.status(200).json(car);
};

// update car by Id
export const updateCarById = async (req, res) => {
  const updateCar = await Car.findByIdAndUpdate(req.params.carId, req.body, {
    new: true,
  });
  res.status(200).json(updateCar);
};

// Delete car by Id
export const deleteCarById = async (req, res) => {
  const { carId } = req.params;
  await Car.findByIdAndDelete(carId);

  // code 200 is ok too
  res.status(204).json();
};
