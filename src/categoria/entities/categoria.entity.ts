import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Transform, TransformFnParams } from "class-transformer";
import { Produto } from "../../produto/entities/produto.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_categorias"})
export class Categoria {

@PrimaryGeneratedColumn()
@ApiProperty()
id: number;

@Transform(({ value }: TransformFnParams) => value?.trim())
@IsNotEmpty()
@Column({length: 255, nullable: false})
@ApiProperty()
tipo: string;

@ApiProperty()
@OneToMany(() => Produto, (produto) => produto.categoria)
produto: Produto


}