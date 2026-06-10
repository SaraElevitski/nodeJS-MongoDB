const express = require("express");
const router = express.Router();
const requestController = require("../controllers/request.controller");

// שליפת הקריאות
router.get("/", requestController.getAll);

// שליפת קריאה לפי id
router.get("/:id", requestController.getById);

// עדכון מצב בקשה ושיוך מתנדב
router.put("/:id/assign", requestController.assignVolunteer);

// עדכון קריאה
router.put("/:id", requestController.update);

// מחיקת קריאה
router.delete("/:id", requestController.delete);

// הוספת קריאה
router.post("/", requestController.create);

module.exports = router;
