import RequestCard from "./RequestCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminPage.module.css";
import { MdSearch } from "react-icons/md";

const AdminPage = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  const [search, setSearch] = useState("");
  const [check, setCheck] = useState("All");
  const token = localStorage.getItem("adminToken");

  const reloadPage = () => {
    location.reload();
  };

  const requestDB = async () => {
    try {
      let req = await axios.get("http://localhost:5050/requests", {
        headers: {
          authorization: token,
        },
      });
      setRequests(req.data);
      // console.log(req.data)
    } catch (err) {
      console.log(err);
    }
  };

  let filtered = requests
    .filter((request) => {
      switch (check) {
        case "All":
          return request.name.toLowerCase().includes(search.toLowerCase());
          break;
        case "Contacted":
          if (
            request.adminId &&
            request.name.toLowerCase().includes(search.toLowerCase())
          ) {
            return request;
          }
          break;
        case "Not":
          if (
            !request.adminId &&
            request.name.toLowerCase().includes(search.toLowerCase())
          ) {
            return request;
          }
          break;
      }
    })
    .map((request, index) => {
      const createdDate = new Date(request.createdAt).toLocaleDateString(
        "en-US"
      );
      const contactedDate = new Date(request.updatedAt).toLocaleDateString(
        "en-US"
      );

      return (
        <RequestCard
          key={index}
          request={request}
          reloadPage={reloadPage}
          createdDate={createdDate}
          contactedDate={contactedDate}
        />
      );
    });

  useEffect(() => {
    requestDB();
  }, []);

  return token ? (
    <div className={styles.pageBody}>
      <div className={styles.searchContainer}>
        <span className={styles.searchInput}>
          <label htmlFor="search">
            <MdSearch />
          </label>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Name"
            name="search"
          />
        </span>
        <span className={styles.radioBtns}>
          <label htmlFor="All">All
            <input
                type="radio"
                name="contacted"
                checked={check === "All"}
                onChange={(e) => {
                setCheck("All");
                }}
            />
          </label>

          <label htmlFor="Contacted">Contacted
            <input
                type="radio"
                name="contacted"
                checked={check === "Contacted"}
                onChange={(e) => {
                setCheck("Contacted");
                }}
            />
          </label>
          <label htmlFor="Not">Not Contacted
            <input
                type="radio"
                name="contacted"
                checked={check === "Not"}
                onChange={(e) => {
                setCheck("Not");
                }}
                />
            </label>
        </span>
      </div>
      <span className={styles.requestContainer}>{filtered}</span>
    </div>
  ) : (
    <div>
      <p>
        Thanks for coming to our webpage. You are not authorized to be here.
        Please click the button to go to our Home page
      </p>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default AdminPage;
