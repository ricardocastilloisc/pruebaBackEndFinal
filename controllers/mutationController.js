const Mutation = require("../models/mutation");
const { hasMutation } = require("../utils/utils");

module.exports = {
  async mutation({ body: { dna } }, res) {
    if (!dna) {
      res.status(403).json({
        error: "no dna",
      });
    }
    if (!dna.join("").match(/^[ATCG]+$/)) {
      res.status(403).json({
        error: "invalid dna",
      });
    }

    if (!hasMutation(dna)) {
      insertDb(dna, 0);
      res.status(403).json({
        error: "No Mutation",
      });
    } else {
      insertDb(dna, 1);
      res.status(200).json({
        ok: "Mutation",
      });
    }
  },

  async stats(req, res) {
    const count_mutations = await Mutation.count({
      where: {
        isMutation: 1,
      },
    });
    const count_no_mutation = await Mutation.count({
      where: {
        isMutation: 0,
      },
    });

    res.status(200).json({
      count_mutations,
      count_no_mutation,
      ratio: (count_mutations / (count_mutations + count_no_mutation)).toFixed(
        2
      ),
    });
  },
};

const insertDb = async (dna, isMutation) => {
  const mutation = await Mutation.findOne({ where: { dna: dna.join("") } });
  if (!mutation) {
    await Mutation.create({
      dna: dna.join(""),
      isMutation: isMutation,
    });
  }
};
