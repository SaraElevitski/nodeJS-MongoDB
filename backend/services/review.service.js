const Service = require("./Service.js");
const reviewRepository = require("../repositories/repository/review.repo.js");

class ReviewService extends Service {
  constructor() {
    super(reviewRepository);
  }

  async getReviewsByVolunteerId(volunteerId) {
    try {
      const reviews =
        await reviewRepository.getReviewsByVolunteerId(volunteerId);
      return reviews;
    } catch (error) {
      throw new Error(`Service error: ${error.message}`);
    }
  }

  async createReview(reviewData) {
    try {
      // בדיקת שדות חובה
      if (
        !reviewData.volunteerId ||
        !reviewData.volunteerEmail ||
        !reviewData.reviewText
      ) {
        throw new Error(
          "All fields are required: volunteerId, volunteerEmail, reviewText",
        );
      }

      const review = await reviewRepository.addReview(reviewData);
      return review;
    } catch (error) {
      throw new Error(`Service error: ${error.message}`);
    }
  }

  async deleteReview(reviewId) {
    try {
      const result = await reviewRepository.deleteReview(reviewId);
      if (!result) {
        throw new Error("Review not found");
      }
      return result;
    } catch (error) {
      throw new Error(`Service error: ${error.message}`);
    }
  }

  async updateReview(reviewId, updateData) {
    try {
      const result = await reviewRepository.updateReview(reviewId, updateData);
      if (!result) {
        throw new Error("Review not found");
      }
      return result;
    } catch (error) {
      throw new Error(`Service error: ${error.message}`);
    }
  }
}

module.exports = new ReviewService();
