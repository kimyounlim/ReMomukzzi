import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from "typeorm"

@Entity()
export class Users {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    user_id : number;

    @Column()
    password : string;

    @Column()
    email : string;

    @Column()
    nickname : string;

    @Column({default: 0})
    total_review : number;

    @Column()
    oauth : boolean;
    
    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public createdAt: Date;
}

