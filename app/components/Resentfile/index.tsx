import "./index.css";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { RxReload } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Resentfile = () => (
  <div className="resent-container">
    <h1 className="resent-heading">Resent Files</h1>
    <div className="card-container">
      <div className="items-container">
        <p className="names">File Name</p>
        <p className="names">Date</p>
        <p className="names">Upload By</p>
        <p className="names">Actions</p>
      </div>
      <div className="items-container-1">
        <HiOutlineDocumentText className="file" />
        <p className="pdf">Pdf 01</p>
        <p className="date">05th April 2022</p>
        <p className="name">Akash R.J</p>
        <button type="button" className="buttons">
          <RxReload className="load" />
        </button>
        <button className="button-3" type="button">
          <RiDeleteBin6Line className="delete" /> Delete
        </button>
      </div>
      <div className="items-container-1">
        <HiOutlineDocumentText className="file" />
        <p className="pdf">Pdf 01</p>
        <p className="date">05th April 2022</p>
        <p className="name">Akash R.J</p>
        <button className="button-4" type="button">
          <RxReload className="load" /> Regenerate
        </button>
        <button type="button" className="buttons">
          <RiDeleteBin6Line className="delete" />
        </button>
      </div>
      <div className="items-container-1">
        <HiOutlineDocumentText className="file" />
        <p className="pdf">Pdf 01</p>
        <p className="date">05th April 2022</p>
        <p className="name">Akash R.J</p>
        <button type="button" className="buttons">
          <RxReload className="load" />
        </button>
        <button className="button-3" type="button">
          <RiDeleteBin6Line className="delete" /> Delete
        </button>
      </div>
      <div className="slick-container">
        <button className="slick" type="button">
          <FaAngleLeft className="angle" />
        </button>
        <button className="one" type="button">
          1
        </button>
        <button className="two" type="button">
          2
        </button>
        <button className="three" type="button">
          3
        </button>
        <p className="dots">. . .</p>
        <button className="slick" type="button">
          <FaAngleRight className="angle" />
        </button>
      </div>
    </div>
  </div>
);

export default Resentfile;