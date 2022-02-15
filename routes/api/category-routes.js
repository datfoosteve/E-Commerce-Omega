const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

  // find all categories
  // be sure to include its associated Products
});

router.get("/:id", async (req, res) => {
  try {
    // @ts-ignore
    const categoryData = await Category.findOne(
      { where: { id: req.params.id } },
      // @ts-ignore
      {
        // be sure to include its associated Category and Tag data
        include: [{ model: Product }],
        //include: [{ model: Category, through: Tag, as: 'category_products' }]
      }
    );

    if (!categoryData) {
      res.status(404).json({ message: "No location found with this id!" });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);

    // find one category by its `id` value
    // be sure to include its associated Products
  }
});

router.post("/", async (req, res) => {
  Category.create(req.body)
    .then((categoryResponse) => {
      // if there's categoryResponse tags, we need to create pairings to bulk create in the ProductTag model
      // if no categoryResponse tags, just respond
      res.status(200).json(categoryResponse);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value

  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((categoryData) => {
      res.status(200).json(categoryData);
    })
    // find all associated tags from ProductTag
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete("/:id", async (req, res) => {
  // delete one product by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: "No Product found with this id!" });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
