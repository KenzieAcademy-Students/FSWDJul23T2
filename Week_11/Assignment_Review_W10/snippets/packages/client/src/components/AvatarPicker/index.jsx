import { Button, Form } from "react-bootstrap";
import "./AvatarPicker.scss";
import AvatarUploader from "../AvatarUploader";
import { useState } from "react";

function AvatarPicker({ avatarOptions, selectedAvatar, setSelectedAvatar }) {
  const [showUploader, setShowUploader] = useState(false);
  const [isCustom, setIsCustom] = useState(false);
  const [customPath, setCustomPath] = useState("");
  const handleSetAvatar = (src) => setSelectedAvatar(src);

  const handleShow = (e) => setShowUploader(true);
  const handleHide = (e) => setShowUploader(false);

  const handleSetCustomAvatar = (path) => {
    setIsCustom(true);
    setCustomPath(path);
    setSelectedAvatar(path);
  };

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Select an Avatar</Form.Label>
        <div className="d-flex gap-2 flex-wrap justify-content-between">
          {avatarOptions.map((avatar, i) => (
            <img
              key={`avatar-${i}`}
              className={`selectable-avatar${
                selectedAvatar === avatar ? " selected-avatar" : ""
              }`}
              src={avatar}
              alt={`Avatar option ${i}`}
              onClick={() => handleSetAvatar(avatar)}
            />
          ))}
          {isCustom && (
            <img
              className={`selectable-avatar${
                selectedAvatar === customPath ? " selected-avatar" : ""
              }`}
              src={customPath}
              alt="custom image"
              onClick={() => handleSetAvatar(customPath)}
            />
          )}
        </div>
      </Form.Group>
      <Form.Text> OR </Form.Text>
      <Form.Group className="mb-3">
        <Button type="button" variant="info" onClick={handleShow}>
          Upload a Photo
        </Button>
      </Form.Group>
      <AvatarUploader
        setCustomAvatar={handleSetCustomAvatar}
        show={showUploader}
        onHide={handleHide}
      />
    </>
  );
}

export default AvatarPicker;
