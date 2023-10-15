import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";
import { Listing } from "./Listing";

@Entity('hosts')
export class Host {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({type: "jsonb", default: []})
    hostedParkingSpaces: Listing[];
}