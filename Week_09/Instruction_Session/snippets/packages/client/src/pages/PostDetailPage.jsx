import { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Comment, LoadingSpinner, Post } from "../components";
import { useRequireAuth } from "../hooks/useRequireAuth";
import { useProvideAuth } from "../hooks/useAuth";
import api from "../utils/api.utils.js";

const initialState = {
  commentText: "",
  isSubmitting: false,
  errorMessage: null,
};

const PostDetailPage = () => {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(initialState);
  const [stateComments, setStateComments] = useState([]);
  const [validated, setValidated] = useState(false);
  const {
    state: { user },
  } = useProvideAuth();

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleCommentSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      toast.error("Comment text is required");
      setValidated(true);
      return;
    }

    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });

    api
      .put("/posts/comments", {
        text: data.commentText,
        userId: user.uid,
        postId: post._id,
      })
      .then(
        ({ data }) => {
          setData(initialState);
          setStateComments(data.comments);
          setValidated(false);
        },
        (error) => {
          console.log("Axios error", error);
        }
      );
  };

  let navigate = useNavigate();
  let params = useParams();

  const {
    state: { isAuthenticated },
  } = useRequireAuth();

  useEffect(() => {
    const getPost = async () => {
      try {
        const postDetail = await api.get(`/posts/${params.pid}`);
        setPost(postDetail.data);
        setStateComments(postDetail.data.comments);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
      }
    };
    isAuthenticated && getPost();
  }, [params.pid, isAuthenticated]);

  if (!isAuthenticated) {
    return <LoadingSpinner full />;
  }

  if (loading) {
    return <LoadingSpinner full />;
  }

  return (
    <Container>
      <Button
        variant="outline-info"
        onClick={() => {
          navigate(-1);
        }}
        style={{ border: "none", color: "#E5E1DF" }}
        className="mt-3"
      >
        Go Back
      </Button>
      <Post post={post} detail />
      <div>
        <br />
        <Form
          noValidate
          validated={validated}
          onSubmit={handleCommentSubmit}
          className="clearfix"
        >
          <Form.Control
            type="text"
            size="md"
            name="commentText"
            maxLength="120"
            placeholder="Reply"
            aria-describedby="comment-input"
            required
            value={data.commentText}
            onChange={handleInputChange}
          />
          <Button className="float-right mt-3" type="submit">
            Comment
          </Button>
          <Form.Control.Feedback type="invalid" className="text-warning">
            Comment text is required
          </Form.Control.Feedback>

          {data.errorMessage && (
            <span className="form-error">{data.errorMessage}</span>
          )}
        </Form>
        {!stateComments.length > 0 ? (
          <div>no comments</div>
        ) : (
          <Container>
            {stateComments.map((c, index) => (
              <Comment key={c._id} comment={c} />
            ))}
          </Container>
        )}
      </div>
    </Container>
  );
};

export default PostDetailPage;
