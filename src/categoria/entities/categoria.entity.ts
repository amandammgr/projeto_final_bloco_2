import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Transform, TransformFnParams } from "class-transformer";

@Entity({name: "tb_categorias"})
export class Categoria {

@PrimaryGeneratedColumn()
id: number;

@Transform(({ value }: TransformFnParams) => value?.trim())
@IsNotEmpty()
@Column({length: 255, nullable: false})
tipo: string;

}