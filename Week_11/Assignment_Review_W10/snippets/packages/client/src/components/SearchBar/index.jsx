import { Form } from "react-bootstrap";
import "./SearchBar.scss";

function SearchBar({ keywords, setKeywords }) {
  const handleSearchInputChange = (e) => setKeywords(e.target.value);
  const handleClearSearchInput = () => setKeywords("");

  return (
    <Form.Group className="search-bar-container">
      <Form.Control
        type="text"
        name="keywords"
        value={keywords}
        placeholder="Search"
        onChange={handleSearchInputChange}
      />
      {keywords && (
        <button className="clear-btn" onClick={handleClearSearchInput}>
          &#x2715;
        </button>
      )}
    </Form.Group>
  );
}

export default SearchBar;
