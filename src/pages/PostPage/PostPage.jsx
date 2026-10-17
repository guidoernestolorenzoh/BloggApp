import { Button, Separator } from "@heroui/react";
import { post, formatearTextoEnParrafos } from "../../utils";
import { Comment, Heart, NodesRight } from "@gravity-ui/icons";
import Follow from "../../components/Follow";
import Profile from "../../components/Profile";
import Image from "../../components/Image";

const PostPage = () => {
  const parrafos = formatearTextoEnParrafos(post.content, 3);
  return (
    <>
      <div key={post.id} className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex flex-col mx-16">
            <div className="flex items-center my-5 gap-2">
              <div className="flex items-center gap-4">
                <Profile user={post.author} src={post.author.imageProfile} isOpen={false} />
                <span className="text-lg">{post?.author?.name}</span>
              </div>
              <span className="text-xl text-green-400">•</span>
              <span className="text-lg text-gray-500">{post?.timeAgo}</span>
            </div>
          </div>

          <Follow />
        </div>

        <div className="my-2">
          {/* title */}
          <div className="flex flex-col mx-16 ">
            <h1 className="text-3xl font-bold mb-5">{post?.title}</h1>

            <Image src={post.image} alt="Winners" className="h-105 rounded-4xl" />
            
            <div className="mt-6">
              {parrafos.map((parrafo, index) => (
                <p
                  className="text-xl text-justify mb-5 leading-relaxed"
                  key={index}
                >
                  {parrafo}
                </p>
              ))}
            </div>

            <div className="flex justify-between mt-2 items-center">
              <div className="flex items-center gap-1 text-lg">
                <Button variant="ghost">
                  <Heart className="size-6 text-gray-500" />
                </Button>
                <Button variant="ghost">
                  <Comment className="size-6 text-gray-500" />
                </Button>
                <Button variant="ghost">
                  <NodesRight className="size-6 text-gray-500" />
                </Button>
              </div>
              <div className="flex items-center text-gray-400 gap-2">
                <span>{post?.likes} likes</span>
                <span className="text-xl">•</span>
                <span>{post?.comments} comments</span>
                <span className="text-xl">•</span>
                <span>{post?.shares} shares</span>
              </div>
            </div>
            <Separator className="mt-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPage;
