import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex p-10 gap-10">
      <div className="relative ">
        <img
          style={{
            borderRadius: "10px",
            height: "88.5vh",
            resize: "horizontal",
            objectFit: "cover",
          }}
          src="/images/welcome.jpg"
          alt="welcome"
        />
        <div className="absolute bottom-0 left-0 flex flex-col p-10 rounded-lg w-full gap-3 bg-black/20">
          <div className="text-white text-2xl font-bold">Welcome to ✋</div>
          <div className="font-bold text-5xl text-green-500">Helia</div>
          <div className="text-white text-lg font-semibold">
            The best hotel booking in this century <br /> to accompany your
            vacation
          </div>
        </div>
      </div>
      <div className="w-[47%] flex flex-col gap-5 justify-between">
        <Carousel autoplaySpeed={1500} autoplay>
          <div className="w-full">
            <img
              style={{
                resize: "horizontal",
                objectFit: "cover",
                borderRadius: "10px",
              }}
              className="h-[50vh] w-full"
              src="/images/next1.jfif"
              alt=""
            />
          </div>
          <div className="w-full">
            <img
              style={{
                resize: "horizontal",
                objectFit: "cover",
                borderRadius: "10px",
              }}
              className="h-[50vh] w-full"
              src="/images/next2.jfif"
              alt=""
            />
          </div>
        </Carousel>
        <h1 className="font-bold text-3xl text-center pt-5 ">
          Travel safely, <br /> comfortably, & easily
        </h1>
        <div className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
          expedita vero. Optio similique numquam obcaecati.
        </div>
        <button
          onClick={() => navigate("/auth/register")}
          className="bg-green-500 text-white p-2 rounded-lg  hover:bg-green-400 active:translate-y-1"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Welcome;
