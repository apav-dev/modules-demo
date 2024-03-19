type PublisherType = "FACEBOOK"; // Extend this union type if more publishers are possible

interface Metrics {
  viewCount: number;
  clickCount: number;
  likeCount: number;
  loveCount: number;
  wowCount: number;
  hahaCount: number;
  sadCount: number;
  angerCount: number;
}

interface Status {
  status: "POST_SUCCEEDED"; // Extend this union type if more statuses are possible
}

interface Entity {
  id: string;
}

interface CommentMetrics {
  likeCount: number;
}

interface Comment {
  commentId: string;
  authorName: string;
  text: string;
  replies?: Comment[]; // Optional, assuming comments can be nested indefinitely
  parentCommentId?: string; // Optional, assuming not all comments are replies
  commentMetrics: CommentMetrics;
  createdTimestamp: string;
}

interface EntityPost {
  entityPostId: string;
  entity: Entity;
  publisher: PublisherType;
  status: Status;
  metrics: Metrics;
  comments: Comment[];
}

interface Post {
  postId: string;
  entityIds: string[];
  publishers: PublisherType[];
  text: string;
  photoUrls: string[];
  clickthroughUrl: string;
  createdDate: string;
  postDate: string;
  postCreatedInYext: boolean;
  entityPosts: EntityPost[];
}

interface SocialPosts {
  posts: Post[];
}
