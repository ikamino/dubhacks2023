import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";
import { Listing } from "./Listing";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({type: "jsonb", default: [{"id": 1, "title": "Downtown Seattle", "imageDir": "https://pics.prevu.com/eyJidWNrZXQiOiJwcmV2dS1saXN0aW5ncyIsImtleSI6Imxpc3RpbmdzL1lsTUdyRXdHMVpDWnIzWUtRMXdnVXY2NzgwRy9lYzI1YWFmMTM0MGE0N2U2NDY1NzMwNDRjMTVkYTVlNSIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzUwLCJoZWlnaHQiOjI2MiwiZml0IjoiY292ZXIifX19", "userID": 1, "hostID": 1, "address": "123 Hello Ave", "pricePerHour": 10, "isAvailable": "true", "rating": 2, "description": "hello"}]})
    bookings: Listing[];
}