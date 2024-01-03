import chai from "chai";
import chaiHttp from "chai-http";
import { before, after } from "mocha";
import app from "../src/app";
import Hero from "../src/models/hero.model";

chai.should();
chai.use(chaiHttp);
let testHero;

describe("DELETE Route", () => {
  before((done) => {
    Hero.create({ name: "Test", alias: "test", isRetired: true, age: 22 }).then(
      (hero) => {
        testHero = hero;
        done();
      }
    );
  });

  describe("/heroes/:id", () => {
    it("Should delete a hero with the provided id and return it with a status of 200", (done) => {
      chai
        .request(app)
        .delete(`/heroes/${testHero._id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.a.property("_id", testHero._id.toString());
          done();
        });
    });

    it("Should return a response of 404 because the hero was already deleted", (done) => {
      chai
        .request(app)
        .delete(`/heroes/${testHero._id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });

    it("Should return a 404 error", (done) => {
      chai
        .request(app)
        .delete("/heroes/aaaaaaaaaaaaaaaaaaaaaaaa")
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });

    it("Should return a 500 error", (done) => {
      chai
        .request(app)
        .delete("/heroes/nonexistent")
        .end((err, res) => {
          res.should.have.status(500);
          done();
        });
    });
  });
});
