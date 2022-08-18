import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Post } from "./Post";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column({"unique": true})
    email: string

    @Column({select: false})
    password: string

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[]
}