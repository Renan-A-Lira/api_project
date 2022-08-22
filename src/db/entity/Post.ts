import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./User";


@Entity()
export class Post {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => User, (user) => user.posts)
    user: User

    @Column({type: "text"})
    text: string

    @Column({nullable: true})
    imageUrl: string

    
    

    
}