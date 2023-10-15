import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("listings")
export class listing {
    @PrimaryGeneratedColumn()
    id: number

    
}