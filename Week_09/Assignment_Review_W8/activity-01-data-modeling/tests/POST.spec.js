import chai from "chai";
import chaiHttp from "chai-http";
import { before, after } from "mocha";
import app from "../src/app";
import Hero from "../src/models/hero.model";

chai.should();
chai.use(chaiHttp);

describe("POST Routes", () => {
  describe("/heroes", () => {
    it("Should create a new hero and return it with a default alias and response status of 200", (done) => {
      chai
        .request(app)
        .post("/heroes")
        .send({ name: "AwesomePerson", isRetired: false, age: 32 })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.a.property("_id");
          res.body.should.have.a.property("name", "AwesomePerson");
          res.body.should.have.a.property("alias", "Unknown");
          res.body.should.have.a.property("isRetired", false);
          res.body.should.have.a.property("age", 32);
          Hero.findByIdAndDelete(res.body._id).then((_) => done());
        });
    });

    it("Should create a new hero and return it with a response status of 200", (done) => {
      chai
        .request(app)
        .post("/heroes")
        .send({
          name: "AwesomePerson",
          alias: "Ken Z",
          isRetired: false,
          age: 32,
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.a.property("_id");
          res.body.should.have.a.property("name", "AwesomePerson");
          res.body.should.have.a.property("alias", "Ken Z");
          res.body.should.have.a.property("isRetired", false);
          res.body.should.have.a.property("age", 32);
          Hero.findByIdAndDelete(res.body._id).then((_) => done());
        });
    });

    it("Should fail and return validation errors for empty fields and a response status of 422", (done) => {
      chai
        .request(app)
        .post("/heroes")
        .send({})
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.have.a.property("name");
          res.body.name.should.have.a.property(
            "message",
            "Path `name` is required."
          );
          res.body.should.have.a.property("isRetired");
          res.body.isRetired.should.have.a.property(
            "message",
            "Path `isRetired` is required."
          );
          res.body.should.have.a.property("age");
          res.body.age.should.have.a.property(
            "message",
            "Path `age` is required."
          );
          done();
        });
    });

    it("Should fail and return validation errors for name length and age and a response status of 422", (done) => {
      chai
        .request(app)
        .post("/heroes")
        .send({ name: "!", alias: "Test it", isRetired: true, age: 12 })
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.have.a.property("name");
          res.body.name.should.have.a.property(
            "message",
            "Path `name` (`!`) is shorter than the minimum allowed length (2)."
          );

          res.body.should.have.a.property("age");
          res.body.age.should.have.a.property(
            "message",
            "Path `age` (12) is less than minimum allowed value (18)."
          );
          done();
        });
    });
  });
});
