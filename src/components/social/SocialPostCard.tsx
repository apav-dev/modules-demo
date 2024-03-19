import { twMerge } from "tailwind-merge";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Facebook } from "lucide-react";
import { timeAgo } from "../../utils/dates";

interface SocialPostCardProps {
  post: Post;
}

export const SocialPostCard = ({ post }: SocialPostCardProps) => {
  const photoUrl = post.photoUrls?.[0];
  return (
    <Card className="relative">
      {photoUrl && (
        <img
          src={photoUrl}
          alt="Post"
          className="object-cover w-full h-full absolute inset-0"
        />
      )}
      <CardContent
        className={`flex group aspect-square p-0 relative text-white overflow-hidden`}
      >
        <div
          className={twMerge(
            "h-full w-full p-6 transition-all space-y-2 duration-500 ease-in-out flex justify-center flex-col",
            photoUrl && "bg-black bg-opacity-0 group-hover:bg-opacity-70"
          )}
        >
          <CardTitle
            className={twMerge(
              "text-gray-900 text-sm flex font-semibold w-full text-wrap break-words",
              photoUrl
                ? "text-white opacity-0 transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100"
                : ""
            )}
          >
            <Facebook className="stroke-blue-500" />
            <span className="align-baseline">{timeAgo(post.createdDate)}</span>
          </CardTitle>
          <CardDescription
            className={twMerge(
              "text-gray-900 text-sm font-semibold w-full text-wrap break-words",
              photoUrl
                ? "text-white opacity-0 transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100"
                : ""
            )}
          >{`"${post.text}"`}</CardDescription>
        </div>
      </CardContent>
    </Card>
  );
};
