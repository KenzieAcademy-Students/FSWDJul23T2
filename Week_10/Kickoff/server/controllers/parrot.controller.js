import Pirate from "../models/pirate.model";

export async function deleteParrot(req, res, next) {
  try {
    const { id } = req.params;
    const deletedParrot = await Pirate.findOneAndUpdate(
      { "parrots._id": id },
      { $pull: { parrots: { _id: id } } },
      { new: true, runValidators: true }
    );

    if (!deletedParrot) return res.sendStatus(404);

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
}
