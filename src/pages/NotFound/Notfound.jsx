import { useNavigate } from "react-router-dom";

import notFoundImage from "@/assets/images/image404_2.jpg";
import { Button } from "@/components/ui/button";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex items-center bg-white">
      <div className="container mx-auto flex flex-col justify-center items-center gap-2 px-4  md:flex-row ">
        <div className=" w-full md:justify-end md:w-1/2 flex justify-center ">
          <img
            src={notFoundImage}
            alt="Not Found"
            className="max-w-xs md:max-w-sm rounded-lg"
          />
        </div>
        <div className="w-full text-center md:w-1/2 md:text-left ">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              OOPS! PAGE NOT FOUND
            </h1>
            <p className="text-lg text-gray-700 mt-5">
              You must have picked the wrong door because I haven’t been able to
              lay my eye on the page you’ve been searching for.
            </p>
          </div>
          <Button
            className="mt-6 w-40 "
            size="lg"
            variant="outline"
            onClick={() => navigate(-1)}
          >
            GO BACK
          </Button>
        </div>
      </div>
    </div>
  );
};
