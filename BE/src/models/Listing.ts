import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity("listings")
export class Listing {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    imageDir: string;

    @Column()
    userID: number;

    @Column()
    hostID: number;

    @Column()
    address: string;

    @Column()
    pricePerHour: number;

    @Column()
    isAvailable: boolean;

    @Column()
    rating: number;

    @Column()
    description: string;
}