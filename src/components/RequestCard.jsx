import axios from "axios";
import { useState } from "react";
import styles from "./RequestCard.module.css";
import { MdDelete, MdCheckroom, MdUndo } from "react-icons/md";

const RequestCard = ({ request, reloadPage, createdDate, contactedDate }) => {
  // console.log(request)
  const [deleted, setDeleted] = useState(false);
  const token = localStorage.getItem("adminToken");

  const contactHandler = async (id, reloadPage) => {
    try {
      await axios
        .put(
          `http://localhost:5050/contacted/${id}`,
          {},
          {
            headers: {
              authorization: token,
            },
          }
        )
        .then((res) => reloadPage());
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:5050/admin-page/${id}`, {
        headers: {
          authorization: token,
        },
      });
    } catch (error) {
      console.log("Error in deleteHandler");
      console.log(error);
    }
  };
  // return str[0].toUpperCase() + str.slice(1)
  let reqName = "";
  if (request.name.length > 15) {
    let name = request.name.split(" ");
    reqName =
      name[0][0].toUpperCase() +
      name.slice(1) +
      " " +
      (name[1].substr(-1).toUpperCase() + ".");
  } else {
    reqName = request.name;
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.headerDiv}>
        <h1>{createdDate}</h1>
        {!deleted ? (
          <p
            id={styles.deleteIcon}
            onClick={() => {
              setDeleted(true);
            }}
          >
            <MdDelete />
          </p>
        ) : (
          <div className={styles.deleteContainer}>
            <p>Are you sure?</p>
            <p id={styles.yes}
              onClick={() => {
                deleteHandler(request.id);
                reloadPage();
              }}
            >
              <MdCheckroom/>
            </p>
            <p id={styles.no}
              onClick={() => {
                setDeleted(false);
              }}
            >
              <MdUndo/>
            </p>
          </div>
        )}
      </div>
      <h2>{reqName}</h2>
      <span className={styles.infoContainer}>
        <aside>
          <label htmlFor="email">Email</label>
          <h3 name="email">{request.email}</h3>
        </aside>
        <aside>
          <label htmlFor="phone">Phone #</label>
          <h3 name="phone">{request.phone}</h3>
        </aside>
      </span>
      <h3>Notes:</h3>
      <p id={styles.notes}>{request.notes}</p>
      {request.adminId ? (
        <div className={styles.bottom}>
          <p className={styles.admin}>Contacted by: {request.admin.username}</p>
          <p className={styles.admin}>Contacted on: {contactedDate}</p>
        </div>
      ) : (
        <button className={styles.btmBtn}
          onClick={() => {
            contactHandler(request.id, reloadPage);
          }}
        >
          Contacted?
        </button>
      )}
    </div>
  );
};

export default RequestCard;
