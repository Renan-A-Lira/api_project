import { DataSource } from "typeorm"
import { Post } from "./entity/Post"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [User, Post],
    subscribers: [],
    migrations: [],
})

