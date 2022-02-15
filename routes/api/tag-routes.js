const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  const tags = await Tag.findAll({
    // @ts-ignore
    include: [{ model: Product, through: ProductTag }],
  });
  res.json(tags);
  // be sure to include its associated Product data
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tags = await Tag.findByPk(req.params.id, {
    // @ts-ignore
    include: [{ model: Product, through: ProductTag }],
  });
  res.json(tags);
});

router.post("/", async (req, res) => {
  // create a new tag

  const tags = await Tag.create(req.body);
  res.json(tags);
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  const tags = await Tag.update(req.body, { where: { id: req.params.id } });
  res.json(tags);
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value

  const tags = await Tag.destroy({ where: { id: req.params.id } });
  res.json(tags);
});

module.exports = router;
