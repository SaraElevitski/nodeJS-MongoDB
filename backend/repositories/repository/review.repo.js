const Repository = require('./Repository.js');
const ReviewModel = require('../../models/review.model.js');

class ReviewRepository extends Repository {
    constructor() {
        super(ReviewModel);
    }

    async getReviewsByVolunteerId(volunteerId) {
        try {
            return await ReviewModel.find({ volunteerId });
        } catch (error) {
            throw new Error(`Error fetching reviews for volunteer: ${error.message}`);
        }
    }

    async addReview(reviewData) {
        try {
            const review = new ReviewModel(reviewData);
            return await review.save();
        } catch (error) {
            throw new Error(`Error adding review: ${error.message}`);
        }
    }

    async deleteReview(reviewId) {
        try {
            return await ReviewModel.findByIdAndDelete(reviewId);
        } catch (error) {
            throw new Error(`Error deleting review: ${error.message}`);
        }
    }

    async updateReview(reviewId, updateData) {
        try {
            return await ReviewModel.findByIdAndUpdate(
                reviewId,
                { ...updateData, updatedAt: new Date() },
                { new: true }
            );
        } catch (error) {
            throw new Error(`Error updating review: ${error.message}`);
        }
    }
}

module.exports = new ReviewRepository();
