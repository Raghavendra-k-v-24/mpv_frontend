import FileUpload from "./FileUpload";
import Sections from "./Sections";

const Body = () => {
  return (
    <div className="flex-1 w-full flex flex-col py-4 px-3 gap-5">
      <FileUpload />
      <Sections />
    </div>
  );
};

export default Body;
