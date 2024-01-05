import { Form } from "react-bootstrap";
import "./AvatarPicker.scss";

function AvatarPicker({ avatarOptions, selectedAvatar, setSelectedAvatar }) {
  const handleSetAvatar = (src) => setSelectedAvatar(src);
  return (
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
      </div>
    </Form.Group>
  );
}

export default AvatarPicker;
