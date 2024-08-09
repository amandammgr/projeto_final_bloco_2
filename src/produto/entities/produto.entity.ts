import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { ApiProperty } from "@nestjs/swagger";


@Entity({name: "tb_produtos"})
export class Produto {

@PrimaryGeneratedColumn()
@ApiProperty()
id: number

@Transform(({ value }: TransformFnParams) => value?.trim())
@IsNotEmpty()
@Column({length: 100, nullable: false})
@ApiProperty()
nome: string;

@IsNotEmpty()
@Column({length: 255, nullable: false})
@ApiProperty()
descricao: string;

@IsNumber({maxDecimalPlaces: 2})
@IsNotEmpty()
@Column({type: "decimal", precision: 6, scale: 2})
@ApiProperty()
preco: number;

@Column({length: 255, nullable: false})
@ApiProperty()
foto: string;

@ApiProperty({type:() => Categoria})
@ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: "CASCADE"
})
categoria: Categoria

}