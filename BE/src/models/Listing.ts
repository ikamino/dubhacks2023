import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("listings")
export class Listing {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({type: 'text'})
    imageDir: string;

    @Column({unique: true})
    userID: number;

    @Column({unique: true})
    hostID: number;

    @Column()
    address: string;

    @Column()
    pricePerHour: number;

    @Column()
    isAvailable: string;

    @Column()
    rating: number;

    @Column()
    description: string;
}