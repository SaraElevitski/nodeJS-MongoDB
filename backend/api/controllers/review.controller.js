const Controller = require("./Controller.js");
const reviewService = require("../../services/review.service.js");

class ReviewController extends Controller {
  constructor() {
    super(reviewService);
  }

  async getReviewsByVolunteerId(req, res) {
    try {
      const { volunteerId } = req.params;
      const reviews = await reviewService.getReviewsByVolunteerId(volunteerId);
      res.status(200).json({
        success: true,
        data: reviews,
        message: "Reviews fetched successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  async createReview(req, res) {
    try {
      const { volunteerId, volunteerEmail, reviewText, rating } = req.body;

      const newReview = await reviewService.createReview({
        volunteerId,
        volunteerEmail,
        reviewText,
        rating: rating || 5,
      });

      res.status(201).json({
        success: true,
        data: newReview,
        message: "Review created successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  async deleteReview(req, res) {
    try {
      const { reviewId } = req.params;
      await reviewService.deleteReview(reviewId);
      res.status(200).json({
        success: true,
        message: "Review deleted successfully",
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }

  async updateReview(req, res) {
    try {
      const { reviewId } = req.params;
      const updateData = req.body;
      const updatedReview = await reviewService.updateReview(
        reviewId,
        updateData,
      );

      res.status(200).json({
        success: true,
        data: updatedReview,
        message: "Review updated successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = new ReviewController();
