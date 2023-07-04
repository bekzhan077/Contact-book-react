import React, { useState } from "react";
import vip from "../assets/5182361.png";

const ContactItem = ({ item, deleteContacts }) => {
  const [img, setImg] = useState(true);

  return (
    <div
      className="contact-item"
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      {img ? (
        ""
      ) : (
        <img className="img-vip-icon" src={vip} alt="qwer" width={45} />
      )}
      <span className="name-01">{item.name}</span>
      <span className="surname-02">{item.surname}</span>
      <span className="phone-03">{item.phone}</span>

      <button
        onClick={() => {
          setImg(!img);
        }}
        className="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
          <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
        </svg>
        Unlock Pro
      </button>
      <button
        onClick={() => {
          deleteContacts(item.id);
        }}
        class="button-delete"
      >
        <svg viewBox="0 0 448 512" class="svgIcon">
          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
        </svg>
      </button>
    </div>
  );
};

export default ContactItem;
