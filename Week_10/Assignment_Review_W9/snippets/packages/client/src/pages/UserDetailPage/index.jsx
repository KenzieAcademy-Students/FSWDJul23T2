import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Form,
  Button,
  Figure,
  Row,
  Col,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { AvatarPicker, LoadingSpinner, Post } from "../../components/index.js";
import { useProvideAuth } from "../../hooks/useAuth.jsx";
import { useRequireAuth } from "../../hooks/useRequireAuth.jsx";
import api from "../../utils/api.utils.js";
import "./UserDetailPage.scss";
import { toast } from "react-toastify";

const imgs = [
  "/bird.svg",
  "/dog.svg",
  "/fox.svg",
  "/frog.svg",
  "/lion.svg",
  "/owl.svg",
  "/tiger.svg",
  "/whale.svg",
];

const UserDetailPage = () => {
  const { state } = useProvideAuth();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [validated, setValidated] = useState(false);
  const [open, setOpen] = useState(false);
  const [newProfileImage, setNewProfileImage] = useState("");
  const [data, setData] = useState({
    password: "",
    isSubmitting: false,
    errorMessage: null,
  });

  let navigate = useNavigate();
  let params = useParams();
  const {
    state: { isAuthenticated },
  } = useRequireAuth();

  useEffect(() => {
    const getUser = async () => {
      try {
        const userResponse = await api.get(`/users/${params.uname}`);
        setUser(userResponse.data);
        setNewProfileImage(userResponse.data.profile_image);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
      }
    };
    isAuthenticated && getUser();
  }, [params.uname, isAuthenticated]);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdatePassword = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    // handle invalid or empty form
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });
    try {
      // write code to call edit user endpoint 'users/:id'
      const {
        user: { uid, username },
      } = state;
      console.log(data.password, uid, username);
      setValidated(false);
      // don't forget to update loading state and alert success
    } catch (error) {
      setData({
        ...data,
        isSubmitting: false,
        errorMessage: error.message,
      });
    }
  };

  const handleUpdateAvatar = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("handleUpdateAvatar firing?");

    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });

    try {
      await api.put(`/users/${params.uname}/avatar`, {
        profile_image: newProfileImage,
      });

      setData({
        ...data,
        isSubmitting: false,
        errorMessage: null,
      });

      setUser({
        ...user,
        profile_image: newProfileImage,
        posts: user.posts.map((post) => ({
          ...post,
          author: { ...post.author, profile_image: newProfileImage },
        })),
      });
      setOpen(false);
      toast.success("Profile picture successfully updated.");
    } catch (error) {
      toast.error(
        "The user's profile picture could not be updated. Please try again later."
      );
      setData({
        ...data,
        isSubmitting: false,
        errorMessage: "Profile picture could not be updated.",
      });
    }
  };

  if (!isAuthenticated) {
    return <LoadingSpinner full />;
  }

  if (loading) {
    return <LoadingSpinner full />;
  }

  return (
    <>
      <Container className="clearfix">
        <Button
          variant="outline-info"
          onClick={() => {
            navigate(-1);
          }}
          style={{ border: "none", color: "#E5E1DF" }}
          className="mt-3 mb-3"
        >
          Go Back
        </Button>
        <Card bg="header" className="text-center">
          <Card.Body>
            <Figure
              className="bg-border-color rounded-circle overflow-hidden my-auto ml-2 p-1"
              style={{
                height: "50px",
                width: "50px",
                backgroundColor: "white",
              }}
            >
              <Figure.Image src={user.profile_image} className="w-100 h-100" />
            </Figure>
            <Card.Title>{params.uname}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
            {state.user.username === params.uname && (
              <div
                onClick={() => setOpen(!open)}
                style={{ cursor: "pointer", color: "#BFBFBF" }}
              >
                Edit User
              </div>
            )}
            {open && (
              <Container animation="false">
                <div className="row justify-content-center p-4">
                  <Col as="h5" xs={12}>
                    Update Password
                  </Col>
                  <div className="col text-center">
                    <Form
                      noValidate
                      validated={validated}
                      onSubmit={handleUpdatePassword}
                    >
                      <Form.Group>
                        <Form.Label htmlFor="password">New Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          required
                          value={data.password}
                          onChange={handleInputChange}
                        />
                        <Form.Control.Feedback type="invalid">
                          New Password is required
                        </Form.Control.Feedback>
                        <Form.Text id="passwordHelpBlock" muted>
                          Must be 8-20 characters long.
                        </Form.Text>
                      </Form.Group>

                      {data.errorMessage && (
                        <span className="form-error">{data.errorMessage}</span>
                      )}
                      <Button type="submit" disabled={data.isSubmitting}>
                        {data.isSubmitting ? (
                          <LoadingSpinner />
                        ) : (
                          "Update Password"
                        )}
                      </Button>
                    </Form>
                  </div>
                </div>
                <Row>
                  <Col as="h5" xs={12}>
                    Update Profile Picture
                  </Col>
                  <Col
                    xs={12}
                    className="d-flex flex-column align-items-center"
                  >
                    <Form
                      className="update-avatar-form d-flex flex-column gap-2"
                      onSubmit={handleUpdateAvatar}
                    >
                      <AvatarPicker
                        avatarOptions={imgs}
                        selectedAvatar={newProfileImage}
                        setSelectedAvatar={setNewProfileImage}
                      />
                      <Form.Group className="mt-2">
                        <Button type="submit" variant="primary" size="md">
                          {data.isSubmitting ? (
                            <LoadingSpinner />
                          ) : (
                            "Update Profile Picture"
                          )}
                        </Button>
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
              </Container>
            )}
          </Card.Body>
        </Card>
      </Container>
      <Container className="pt-3 pb-3">
        {user.posts.length !== 0 ? (
          user.posts.map((post) => (
            <Post key={post._id} post={post} userDetail />
          ))
        ) : (
          <div
            style={{
              marginTop: "75px",
              textAlign: "center",
            }}
          >
            No User Posts
          </div>
        )}
      </Container>
    </>
  );
};

export default UserDetailPage;
