import Link from "next/link";

interface PostFeedProps {
  posts: any;
  admin?: boolean;
}

interface PostProps {
  post: any;
  admin?: boolean;
}

export default function PostFeed({ posts, admin }: PostFeedProps) {
  return posts
    ? posts.map((post: any) => (
        <PostItem post={post} key={post.slug} admin={admin} />
      ))
    : null;
}

function PostItem({ post }: PostProps) {
  // calc word count
  const wordCount = post?.content.trim().split(/\s+/g).length;
  const minsToRead = (wordCount / 100 + 1).toFixed(0);

  return (
    <div className="card">
      <Link href={`/${post.username}`}>
        <strong>By @{post.username}</strong>
      </Link>

      <Link href={`/${post.username}/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>

      <footer>
        <span>
          {wordCount} words. {minsToRead} min read.
        </span>
        <span className="push-left">{post.heartCount || 0} Hearts</span>
      </footer>
    </div>
  );
}
