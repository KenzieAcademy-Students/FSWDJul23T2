import chai from "chai";
import chaiHttp from "chai-http";
import { before, after } from "mocha";
import app from "../src/app";
import Hero from "../src/models/hero.model";

chai.should();
chai.use(chaiHttp);
let testHero;

describe("PUT Route", () => {
  before((done) => {
    Hero.create({ name: "Test", alias: "test", isRetired: true, age: 22 }).then(
      (hero) => {
        testHero = hero;
        done();
      }
    );
  });

  after((done) => {
    Hero.findByIdAndDelete(testHero._id).then((_) => done());
  });

  describe("/heroes/:id", () => {
    it("Should update and return the hero with isRetired now false and a status of 200", (done) => {
      chai
        .request(app)
        .put(`/heroes/${testHero._id}`)
        .send({ isRetired: false })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.a.property("_id", testHero._id.toString());
          res.body.should.have.a.property("isRetired", false);
          done();
        });
    });

    it('Should update and return the hero with alias now "not test" and a status of 200', (done) => {
      chai
        .request(app)
        .put(`/heroes/${testHero._id}`)
        .send({ alias: "not test" })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.a.property("_id", testHero._id.toString());
          res.body.should.have.a.property("alias", "not test");
          done();
        });
    });

    it("Should fail to update the hero and return an object with validation errors and status of 422", (done) => {
      chai
        .request(app)
        .put(`/heroes/${testHero._id}`)
        .send({ age: 12 })
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a("object");
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
