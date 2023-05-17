import { MongoConnection } from "./singleton.js";

const mongoInstance = MongoConnection.getInstance();

const anotherMongoInstance = MongoConnection.getInstance();
