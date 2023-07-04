import { EntityManager, IsNull, Not } from "typeorm";
import { FreeHearingAidTrial } from "../entity/FreeHearingAidTrial.js";

export function getFreeHearingAidRepository(manager: EntityManager) {
    const baseRepositiory = manager.getRepository(FreeHearingAidTrial);


    return {
        baseRepositiory,
    }
}