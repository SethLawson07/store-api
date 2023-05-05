import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm"
import { Category } from "./category.entity"
@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name : string

    @Column()
    description: string

    @Column()
    instockQuantity: number

    @Column()
    price: number

    @ManyToOne(() => Category,(category) => category.product)
    categories : Category []

    

    
}