<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9b045d957b919a4654d9b50aa68b9f47b4419c01
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
<<<<<<< HEAD
=======
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("listings")
export class listing {
    @PrimaryGeneratedColumn()
    id: number

    
>>>>>>> 4ef80f1 (done)
=======
>>>>>>> 9b045d957b919a4654d9b50aa68b9f47b4419c01
}