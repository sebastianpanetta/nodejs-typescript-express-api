import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const insertCar = async (item: Car) => {
    return await ItemModel.create(item);
};

const getCars = async () => {
    return await ItemModel.find();
};

const getCar = async (id: string) => {
    return await ItemModel.findById(id);
};

const updateCar = async (id: string, data: Car) => {
    return await ItemModel.findByIdAndUpdate(id, data, {
        new: true
    });
};

const deleteCar = async (id: string) => {
    return await ItemModel.findByIdAndRemove(id);
};

export { insertCar, getCars, getCar, updateCar, deleteCar }