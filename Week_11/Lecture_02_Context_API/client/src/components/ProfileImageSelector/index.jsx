import React from "react";
import { Form } from "react-bootstrap";
import "./ProfileImageSelector.css";

function ProfileImageSelector({
  options,
  profileImage,
  handleSelectProfileImage,
}) {
  return (
    <Form.Group className="mb-2">
      <Form.Label>Select a Profile Image</Form.Label>
      <div className="image-options">
        {options.map((src, i) => (
          <img
            key={`img-option-${i}`}
            className={`profile-img-option${
              profileImage === src ? " selected-img-option" : ""
            }`}
            src={src}
            alt={src.split("/")[1].split(".svg")[0]}
            onClick={() => handleSelectProfileImage(src)}
          />
        ))}
      </div>
    </Form.Group>
  );
}

export default ProfileImageSelector;
