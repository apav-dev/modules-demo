import { useQuery } from "@tanstack/react-query";
import { fetchSocialPosts } from "../../utils/api";

type SocialPosts = {
  entityId?: string;
  publishers?: string[];
};

const useSocialPosts = ({
  entityId,
  publishers = ["FACEBOOK"],
}: SocialPosts) => {
  const { data: posts } = useQuery({
    queryKey: ["socialPosts", entityId],
    queryFn: async () => {
      const resp = await fetchSocialPosts(entityId, publishers);
      return resp.response.posts;
    },
  });
  return posts;
};

export default useSocialPosts;
