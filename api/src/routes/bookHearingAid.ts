import * as hearingAidService from "../service/BookHearingAid.js";
import express from "express";

const router = express.Router();

export default () => {
router.post("/api/hearing-aid-trial/", hearingAidService.bookHearingAidFreeTrial);

return router;
}


// export { router };