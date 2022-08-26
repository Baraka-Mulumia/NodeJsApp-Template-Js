import mongoose from "mongoose";
import { v4 as uuid_v4 } from "uuid";

//execute function every x seconds with nested setTimeout
export const executeService = async (service, interval) => {
    let timerId = setTimeout(async function refresh() {
        await service();
        timerId = setTimeout(refresh, interval);
    }, 0);
};

//unique id generator
export const uid = () => uuid_v4();

//mongo id generator
export const mongoId = () => new mongoose.Types.ObjectId();
