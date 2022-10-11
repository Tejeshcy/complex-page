import React from "react";
import Footer from "./Pagenumbers";
import Maincontent from "./Maincontent";
import NewBar from "./NewBar";
import Pagenumbers from "./Pagenumbers";

const Data = () => {
  const List = [
    {
      title: "Demographic Survey for Urban India",
      publisheddate: "Published on 17-8-2022",
      location: "Mumbai, Maharastra...",
      date: "29-10-2022 - 28-11-2022",
      sample: "Randaom sample",
      logo: "https://cdn-icons-png.flaticon.com/512/8088/8088864.png",
    },
    {
      title: "Demographic Survey for Urban India",
      publisheddate: "Published on 17-8-2022",
      location: "Mumbai, Maharastra...",
      date: "29-10-2022 - 28-11-2022",
      sample: "Randaom sample",
      logo: "https://cdn-icons-png.flaticon.com/512/8088/8088864.png",
    },
    {
      title: "Demographic Survey for Urban India",
      publisheddate: "Published on 17-8-2022",
      location: "Mumbai, Maharastra...",
      date: "29-10-2022 - 28-11-2022",
      sample: "Randaom sample",
      logo: "https://cdn-icons-png.flaticon.com/512/8088/8088864.png",
    },
    {
      title: "Demographic Survey for Urban India",
      publisheddate: "Published on 17-8-2022",
      location: "Mumbai, Maharastra...",
      date: "29-10-2022 - 28-11-2022",
      sample: "Randaom sample",
      logo: "https://cdn-icons-png.flaticon.com/512/8088/8088864.png",
    },
    {
      title: "Demographic Survey for Urban India",
      publisheddate: "Published on 17-8-2022",
      location: "Mumbai, Maharastra...",
      date: "29-10-2022 - 28-11-2022",
      sample: "Randaom sample",
      logo: "https://cdn-icons-png.flaticon.com/512/8088/8088864.png",
    },
    {
      title: "Demographic Survey for Urban India",
      publisheddate: "Published on 17-8-2022",
      location: "Mumbai, Maharastra...",
      date: "29-10-2022 - 28-11-2022",
      sample: "Randaom sample",
      logo: "https://cdn-icons-png.flaticon.com/512/8088/8088864.png",
    },
    {
      title: "Demographic Survey for Urban India",
      publisheddate: "Published on 17-8-2022",
      location: "Mumbai, Maharastra...",
      date: "29-10-2022 - 28-11-2022",
      sample: "Randaom sample",
      logo: "https://cdn-icons-png.flaticon.com/512/8088/8088864.png",
    },
    {
      title: "Tejesh",
      publisheddate: "None",
      location: "Banglore, Karnataka",
      date: "29-10-2022 - 28-11-2022",
      sample: "Test sample",
      logo: "https://cdn-icons-png.flaticon.com/512/8088/8088864.png",
    },
    {
      title: "Raghav",
      publisheddate: "None",
      location: "Banglore, Karnataka",
      date: "29-10-2022 - 28-11-2022",
      sample: "Test sample",
      logo: "https://cdn-icons-png.flaticon.com/512/8088/8088864.png",
    },
  ];

  return (
    <div className="container">
      <div className="mainspace mx-5">
        <div className="">
          <div className="card my-4">
            <div className="card-body cardbodytop ">
              <div className="row toprow">
                <div className="col-sm-6 ">
                  <div className="d-flex ">
                    <div className="">
                      <select className="form-select select">
                        <option selected>All</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                    <div className="mx-3">
                      <input
                        className="form-control  searchtop "
                        placeholder="Search..."
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 d-flex justify-content-end">
                  <div className="mr-2">
                    <img
                      className="img-fluid topcontimage "
                      src="https://cdn-icons-png.flaticon.com/512/238/238910.png"
                    ></img>
                  </div>
                  <div className="mr-2">
                    <img
                      className="img-fluid topcontimage"
                      src="https://cdn-icons-png.flaticon.com/512/151/151917.png"
                    ></img>
                  </div>
                  <div className="mr-2">
                    <button className="btn createjobbtn">
                      <p className="">+Create Job</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body mx-5">
        <div className="row">
          {List.map((data, index) => {
            return <Maincontent data={data} />;
          })}
        </div>
      </div>
      <Pagenumbers />
    </div>
  );
};

export default Data;
