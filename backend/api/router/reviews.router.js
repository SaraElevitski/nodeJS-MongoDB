const express = require("express");
const reviewController = require("../controllers/review.controller.js");

const router = express.Router();

// GET - קבלת כל חוות הדעות של מתנדב מסוים
router.get("/volunteer/:volunteerId", (req, res) => {
  reviewController.getReviewsByVolunteerId(req, res);
});

// POST - הוספת חוות דעת חדשה
router.post("/", (req, res) => {
  reviewController.createReview(req, res);
});

// PUT - עדכון חוות דעת קיימת
router.put("/:reviewId", (req, res) => {
  reviewController.updateReview(req, res);
});

// DELETE - מחיקת חוות דעת
router.delete("/:reviewId", (req, res) => {
  reviewController.deleteReview(req, res);
});

module.exports = router;
