import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { table } from "../store/actions/table";
import { FaChair } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link

const Tables = () => {
  const selectedMenus = useSelector((state) => state.table.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(table());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        <div className="text-white mt-3">
          <div className="d-flex justify-content-between align-items-center">
            <h2>
              Choose Tables <FaChair />
            </h2>
            <div className="">
              <h5 className="fw-bold">Paing Hein Khant</h5>
              <span>Tuesday,2 Feb 2023</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-5">
        {selectedMenus?.map((item) => (
          <div key={item.id} className="col-2 mb-3">
            <div className="card background-color-orange border-color text-white">
              <Link
                to={`/table/${encodeURIComponent(item.table_name)}`}
                className="card background-color-orange border-color  text-decoration-none  text-white"
              >
                <div className="card-body text-center">
                  <FaChair />
                  <div className="fw-bolder">{item.table_name}</div>
                  <div>{item.person} People</div>
                  <div>( {item.status} )</div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tables;
