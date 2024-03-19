import useSocialPosts from "../../hooks/queries/useSocialPosts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { SocialPostCard } from "./SocialPostCard";

interface SocialPostsProps {
  entityId: string;
}

export const SocialPosts = ({ entityId }: SocialPostsProps) => {
  if (!entityId) return <></>;

  const posts = useSocialPosts({
    entityId: "9965661",
    publishers: ["FACEBOOK"],
  });

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {posts?.map((post, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <SocialPostCard post={post} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
