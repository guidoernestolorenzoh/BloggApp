import { SealCheck } from "@gravity-ui/icons";
import Banner from "../../assets/banner_author_profile.png";
import Profile from "../../components/Profile";
import { user } from "../../utils";
import Follow from "../../components/Follow";
import TabsAuthors from "../../components/TabsAuthors";
import Image from "../../components/Image";

const AuthorProfile = () => {
  return (
    <div className="flex flex-col ml-5">
      {/* Banner */}
      <Image src={Banner} className="h-80 w-full object-cover" alt="Banner" />
      
      <div className="flex justify-between items-center">
        <div className="flex items-start gap-4 px-8 -mt-16">
          <Profile
            user={user}
            src={user.imageProfile}
            isOpen={false}
            className="w-32 h-32 ring-4 text-5xl ring-white rounded-full shrink-0"
          />
          <div className="flex flex-col pt-16 mt-2">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <span className="text-3xl font-semibold">Peter Lopez</span>
                <SealCheck className="size-6 text-blue-500 mt-1"/>
              </div>
              
            </div>
            <span className="text-md font-light text-muted">CEO Founder</span>
          </div>
        </div>

        <Follow className="button-outline-rounded"/>
      </div>

      {/* Tabs Authors */}
      <TabsAuthors />
    </div>
  );
};

export default AuthorProfile;
