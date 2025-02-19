import axios from "axios";
import { useState, useEffect } from "react";

interface ReviewProps {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

const ReviewSection: React.FC<{ propertyId: string }> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<ReviewProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        setError("Failed to fetch reviews. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) return <p className="text-gray-500">Loading reviews...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (reviews.length === 0) return <p className="text-gray-500">No reviews yet.</p>;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-100 p-4 rounded-lg shadow">
            <div className="flex items-center space-x-3">
              <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-yellow-500">{review.rating} ★</p>
              </div>
            </div>
            <p className="mt-2">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
