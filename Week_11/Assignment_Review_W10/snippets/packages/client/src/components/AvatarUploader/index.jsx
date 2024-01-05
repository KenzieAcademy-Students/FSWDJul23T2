import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./AvatarUploader.scss";
import api from "../../utils/api.utils";
import { toast } from "react-toastify";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function AvatarUploader({ setCustomAvatar, show, onHide }) {
  const [file, setFile] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileSelect = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("profileImage", file);

    try {
      const res = await api.post("/files/avatar", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setCustomAvatar(res.data.path);
      toast.success("Image successfully uploaded");
      setIsSubmitting(false);
      onHide();
    } catch (error) {
      toast.error(error?.response?.data?.error);
      setIsSubmitting(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>Select an Image to Upload</Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-2">
          <Form.Control
            type="file"
            name="file"
            id="file"
            onChange={handleFileSelect}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? <LoadingSpinner /> : "Upload"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AvatarUploader;
