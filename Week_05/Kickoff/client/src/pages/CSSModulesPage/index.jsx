import { Col, Container, Row } from "react-bootstrap";
// import "./CSSModulesPage.css";
import style from "./CSSModulesPage.module.css";

const CssModulesPage = () => {
  return (
    <Container>
      <h1>CSS Modules</h1>
      <Row>
        <Col as="section">
          <h3>What's a CSS Module?</h3>
          <p>
            CSS modules allow us to create CSS styling without worrying about
            conflicting class names. Because developers commonly use libraries
            like Bootstrap, it is not uncommon that you may accidentally create
            a CSS class that uses a class name that is already used by said
            library.
          </p>
        </Col>
        <Col as="section">
          <h3>Example</h3>
          {/* <p className="container"> */}
          <p className={style.container}>
            This paragraph has been given a class of <code>container</code>.
            Watch as Cody adds in the CSS import where the{" "}
            <code>container</code> class originates from.
          </p>
          <p>
            Notice how much more than just that one paragraph is suddenly
            outlined with a green border? That's because React Bootstrap's{" "}
            <code>Container</code> component also has a class of{" "}
            <code>container</code>, and React has imported multiple CSS files
            with the same class, so their styling rules are combined.
          </p>
          <p>
            Now, Cody should be removing the import and adding a CSS module
            import. This paragraph uses the class from the CSS module version.
            Notice how after the CSS module is applied, only this paragraph has
            the green border.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default CssModulesPage;
