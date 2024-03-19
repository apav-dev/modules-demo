import {
  EntityReviewAggregate,
  ReviewSort,
  ReviewsResponse,
  reviewSortOptions,
} from "../types/reviews";
import { YextResponse } from "../types/yext";

const REVIEWS_LIMIT = 5;

export const fetchReviewsAggForEntity = async (
  entityId: string
): Promise<EntityReviewAggregate> => {
  const requestUrl = `api/reviews/${entityId}`;
  console.log(`fetchReviewsAggForEntity: ${requestUrl}`);

  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
};

const reviewsUrl = `https://streams.yext.com/v2/accounts/me/api/fetchReviewsForEntity?api_key=1316c9fafd65fd4518e69100166461a7&v=20221114`;

export const fetchReviews = async (
  id: string,
  sort?: ReviewSort
): Promise<ReviewsResponse> => {
  let requestUrl = reviewsUrl + "&entity.id=" + id;
  if (sort) {
    requestUrl += `&${reviewSortOptions[sort].key}=${reviewSortOptions[sort].value}`;
  }
  requestUrl += "&limit=" + REVIEWS_LIMIT;

  const response = await fetch(requestUrl);
  const data = await response.json();
  return data.response;
};

export const fetchSocialPosts = async (
  entityId?: string,
  publishers?: string[]
): Promise<YextResponse<SocialPosts>> => {
  const queryParams = new URLSearchParams();
  if (entityId) {
    queryParams.append("entityId", entityId);
  }
  if (publishers) {
    queryParams.append("publishers", publishers.join(","));
  }
  const queryString = queryParams.toString();
  const url = `/api/posts${queryString ? `?${queryString}` : ""}`;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  const body = await response.json();
  return body;
};
