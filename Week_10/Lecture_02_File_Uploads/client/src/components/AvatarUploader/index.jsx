import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import api from "../../utils/api.config";

function AvatarUploader({ setAvatarPath }) {
  const [file, setFile] = useState();
  const [uploaded, setUploaded] = useState(false);

  const handleFileInputChange = (e) => setFile(e.target.files[0]);

  const handleUploadFile = (e) => {
    if (!file) return;

    // Step 1: Create a new FormData object:
    const formData = new FormData();
    // Step 2: Append the file in state to the formData. Pay close
    // attention to the name you provide as the first argument
    // of the .append() method, as we'll need it on the back end.
    formData.append("avatar", file);

    // Step 3: Send the POST request to an endpoint on
    // the server that will handle the upload request.
    // NOTE: By default, our axios instance sends requests
    // with a Content-Type of "application/json". In order
    // to upload a file, we must change the content type
    // for this one request.
    api
      .post("/files", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        setUploaded(true);
        setAvatarPath(res.data.path);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form.Group className="mb-2">
      <Form.Label htmlFor="image">Image</Form.Label>
      <Row>
        <Col xs={12} md={8}>
          <Form.Control
            type="file"
            id="image"
            name="image"
            onChange={handleFileInputChange}
          />
        </Col>
        <Col
          as={Button}
          type="button"
          variant="info"
          xs={12}
          md={4}
          disabled={!file || uploaded}
          onClick={handleUploadFile}
        >
          Upload
        </Col>
      </Row>
    </Form.Group>
  );
}

export default AvatarUploader;
