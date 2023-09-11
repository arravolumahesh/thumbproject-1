import "./index.css";
import { HiOutlineDocumentText } from "react-icons/hi2";

const Uploadfile = () => (
  <div>
    <div className="box-container">
      <h1 className="heading">Upload Files</h1>
      <div className="dashed-box">
        <HiOutlineDocumentText className="icon" />
        <p className="content">
          Click to browser or
          <br /> drag and drop your files
        </p>
      </div>
    </div>
    <p className="footer">@ 2023 - By Admin Dashboard</p>
  </div>
);

export default Uploadfile;