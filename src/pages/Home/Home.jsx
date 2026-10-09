import { Button, Link, Separator } from "@heroui/react";
import Follow from "../../components/Follow";
import Profile from "../../components/Profile";
import { posts } from "../../utils";
import { Heart, Comment, NodesRight } from "@gravity-ui/icons";

const Home = () => {
  return (
    <>
      {posts.map((p) => (
        <div key={p.id} className="flex flex-col">
          <div className="flex justify-between items-center">
            <div className="flex flex-col mx-16">
              <div className="flex items-center my-5 gap-2">
                <div className="flex items-center gap-4">
                  <Profile user={p?.author} isOpen={false} />
                  <span className="text-lg">{p?.author?.name}</span>
                </div>
                <span className="text-xl">•</span>
                <span className="text-lg text-gray-500">{p?.timeAgo}</span>
              </div>
            </div>

            <Follow />
          </div>

          <div className="my-2">
            {/* title */}
            <div className="flex flex-col mx-16 ">
              <h1 className="text-3xl font-bold mb-5">
                {p?.title}
              </h1>

              <p className="text-xl text-justify mb-5">
                {p?.excerpt}
                <Link>
                  <span className="text-green-400 mx-2 cursor-pointer">
                    (See more...)
                  </span>
                </Link>
              </p>

              <img
                src={p?.image}
                className="h-105 rounded-4xl"
                alt="Winners"
              />
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
                  <span>{p?.likes} likes</span>
                  <span className="text-xl">•</span>
                  <span>{p?.comments} comments</span>
                  <span className="text-xl">•</span>
                  <span>{p?.shares} shares</span>
                </div>
              </div>
              <Separator className="mt-4" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
