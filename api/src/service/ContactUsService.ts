import { PostgresDataSource } from "../config/PostgresDataSource.js";
import { getContactUsRepository } from "../repository/ContactUsRepository.js";


function makeContactUsService() {

    const aboutUs = () => PostgresDataSource.transaction(async (manager) => {
      const contactUsRepository = getContactUsRepository(manager);

      const contactUs = await contactUsRepository.getAll();

      return contactUs
    });


    return {
        aboutUs,
      };
    }
    
    export const contactUsService = makeContactUsService();