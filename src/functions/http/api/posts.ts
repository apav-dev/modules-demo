import { PagesHttpRequest, PagesHttpResponse } from "@yext/pages/*";

const fetchPosts = async (
  request: PagesHttpRequest
): Promise<PagesHttpResponse> => {
  const { method, queryParams, body } = request;
  const entityId = queryParams.entityId;
  const publishers = queryParams.publishers;

  if (!entityId) {
    return { body: "Missing entityId", headers: {}, statusCode: 400 };
  }

  switch (method) {
    case "GET":
      const url = "https://api.yextapis.com/v2/accounts/me/posts";
      const params = new URLSearchParams({
        api_key: SOCIAL_POSTS_API_KEY,
        v: "20231016",
        entityIds: entityId,
      });

      if (publishers) {
        params.append("publishers", publishers);
      }

      try {
        const response = await fetch(`${url}?${params}`, {
          method: "GET", // The cURL command uses a GET request
          headers: {
            Accept: "application/json", // Assuming JSON response is expected
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        return {
          statusCode: 200,
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        };
      } catch (error) {
        console.error("Error fetching posts:", error);
        return {
          statusCode: 500,
          body: JSON.stringify({ error: "Error fetching posts" }),
          headers: {
            "Content-Type": "application/json",
          },
        };
      }
    default:
      return { body: "Method not allowed", headers: {}, statusCode: 405 };
  }
};

export default fetchPosts;
