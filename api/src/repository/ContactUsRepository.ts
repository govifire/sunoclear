import { EntityManager, IsNull, Not } from "typeorm";
import { ContactUs } from "../entity/ContactUs.js";

export function getContactUsRepository(manager: EntityManager) {
    const baseRepositiory = manager.getRepository(ContactUs);

    const getAll = () => baseRepositiory.find({
        order: { id: 'DESC' }
    });

    return {
        getAll,
    }
}