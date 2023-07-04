import { BaseEntity } from "./BaseEntity.js";
import { Column, Entity } from "typeorm";
import { Some } from "../utils/Some.js";

@Entity()
export class ContactUs extends BaseEntity {
  public constructor(entity?: ContactUs) {
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
  email!: string;

  @Column()
  mobileNumber!: string;

  @Column()
  description!: string;
}
