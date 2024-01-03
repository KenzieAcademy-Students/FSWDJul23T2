import Pirate from "../models/pirate.model";

export async function getAllPirates(req, res, next) {
  try {
    let { limit, offset } = req.query;
    if (limit == null) limit = 20;
    else if (limit > 20) limit = 20;

    const pirateCount = await Pirate.countDocuments();
    if (offset == null) offset = 0;
    else if (offset - pirateCount < 0) offset = 0;
    else if (offset > pirateCount) offset = 0;

    const allPirates = await Pirate.find().skip(offset).limit(limit);

    res.json({
      count: pirateCount,
      next:
        pirateCount > allPirates.length
          ? `http://localhost:3001/api/pirates?limit=${limit}&offset=${
              offset + limit
            }`
          : null,
      prev:
        offset === 0
          ? null
          : `http://localhost:3001/api/pirates?limit=${limit}&offset=${
              offset - limit
            }`,
      results: allPirates,
    });
  } catch (error) {
    next(error);
  }
}

export async function getSinglePirate(req, res, next) {
  try {
    const { id } = req.params;

    const pirate = await Pirate.findById(id);

    if (!pirate) return res.sendStatus(404);

    res.json(pirate);
  } catch (error) {
    next(error);
  }
}

export async function createPirate(req, res, next) {
  try {
    const { name, nickName, rank, parrots, photoUrl, hasPegLeg, catchPhrase } =
      req.body;

    const newPirate = await Pirate.create({
      name,
      nickName: nickName || undefined,
      rank,
      parrots,
      photoUrl,
      hasPegLeg,
      catchPhrase,
    });

    res.json(newPirate);
  } catch (error) {
    next(error);
  }
}

export async function updatePirate(req, res, next) {
  try {
    const { id } = req.params;
    const { name, nickName, rank, numberOfParrots, hasPegLeg, catchPhrase } =
      req.body;

    const updatedPirate = await Pirate.findByIdAndUpdate(
      id,
      {
        name,
        nickName,
        rank,
        numberOfParrots,
        hasPegLeg,
        catchPhrase,
      },
      { new: true, runValidators: true }
    );

    if (!updatedPirate) return res.sendStatus(404);

    res.json(updatedPirate);
  } catch (error) {
    next(error);
  }
}

export async function deletePirate(req, res, next) {
  try {
    const { id } = req.params;

    const deletedPirate = await Pirate.findByIdAndDelete(id);

    if (!deletedPirate) return res.sendStatus(404);

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
}
