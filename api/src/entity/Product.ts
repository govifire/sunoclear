import { BaseEntity } from "./BaseEntity.js";
import { Column, Entity } from "typeorm";
import { Some } from "../utils/Some.js";

@Entity()
export class Product extends BaseEntity {
  public constructor(entity?: Product) {
    super();

    if (Some(entity)) {
      Object.entries(entity).forEach(([key, value]) => {
        // @ts-expect-error couldn't get TypeScript to like this
        this[key] = value;
      });
    }
  }

  @Column()
  name!: string;

  @Column()
  type!: string;

  @Column()
  description!: string;

  @Column()
  imageLink!: string;
}
