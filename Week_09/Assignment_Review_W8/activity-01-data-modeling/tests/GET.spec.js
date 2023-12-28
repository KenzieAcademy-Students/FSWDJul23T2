import chai from "chai";
import chaiHttp from "chai-http";
import { before, after } from "mocha";
import app from "../src/app";
import Hero from "../src/models/hero.model";

chai.should();
chai.use(chaiHttp);
let testHero;

describe("GET Routes", () => {
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

  describe("/heroes", () => {
    it("Should retrieve all heroes.", (done) => {
      chai
        .request(app)
        .get("/heroes")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.at.least(1);
          done();
        });
    });
  });

  describe("/heroes/:id", () => {
    it("Should retrieve a hero by id.", (done) => {
      chai
        .request(app)
        .get(`/heroes/${testHero._id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });

    it("Should receive a 404 error.", (done) => {
      chai
        .request(app)
        .get("/heroes/aaaaaaaaaaaaaaaaaaaaaaaa")
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });

    it("Should receive a 500 error.", (done) => {
      chai
        .request(app)
        .get("/heroes/nonexistent")
        .end((err, res) => {
          res.should.have.status(500);
          done();
        });
    });
  });
});
