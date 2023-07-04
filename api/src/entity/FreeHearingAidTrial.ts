import { BaseEntity } from "./BaseEntity.js";
import { Column, Entity } from "typeorm";
import { Some } from "../utils/Some.js";

@Entity()
export class FreeHearingAidTrial extends BaseEntity {
  public constructor(entity?: Omit<FreeHearingAidTrial, keyof BaseEntity>) {
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

  @Column({ nullable: true, type: String })
  email!: string | undefined;

  @Column()
  mobileNumber!: string;

  @Column({ nullable: true, type: String })
  userProblem!: string | undefined;
}
