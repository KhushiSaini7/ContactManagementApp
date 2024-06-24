const express= require('express');
const router = express.Router();
const {getContact,createContact, getContactbyID, updateContactbyId, deletecontactbyID}= require('../controllers/contactController');
const validateToken = require('../middlewares/validateTokenHandler');


router.use(validateToken);
router.route("/").get(getContact);

router.route("/").post(createContact);

router.route("/:id").get(getContactbyID);

router.route("/:id").put(updateContactbyId);

router.route("/:id").delete(deletecontactbyID);

module.exports= router;