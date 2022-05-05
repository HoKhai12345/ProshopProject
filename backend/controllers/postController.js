import asyncHandler from 'express-async-handler'
import Post from '../models/postModel.js'

// @desc    Fetch all Posts
// @route   GET /api/Posts
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}
  console.log("keyword",keyword);
  const count = await Post.countDocuments(keyword)
  const Posts = await Post.find(keyword)
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ Posts, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch single post
// @route   GET /api/Posts/:id
// @access  Public
const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)

  if (post) {
    res.json(post)
  } else {
    res.status(404)
    throw new Error('Post not found')
  }
})

// @desc    Delete a product
// @route   DELETE /api/Posts/:id
// @access  Private/Admin
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)

  if (post) {
    await post.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Create a post
// @route   POST /api/Posts
// @access  Private/Admin
const createPost = asyncHandler(async (req, res) => {
  const post = new Post({
    title: 'Sample name',
    price: 0,
    user: "req.user._id",
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    categoryId: 'Sample category',
    numReviews: 0,
    description: 'Sample description',
    content: '<a>Content</a>'
  })

  const createdPost = await new Post(req.body).save()
  res.status(201).json(createPost)
})

// @desc    Update a product
// @route   PUT /api/Posts/:id
// @access  Private/Admin
const updatePost = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
  } = req.body

  const post = await Post.findById(req.params.id)

  if (post) {
    post.name = name
    post.price = price
    post.description = description
    post.image = image
    post.brand = brand
    post.category = category
    post.countInStock = countInStock

    const updatedPost = await post.save()
    res.json(updatedPost)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Create new review
// @route   POST /api/Posts/:id/reviews
// @access  Private
const createPostReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  console.log("rating",rating);

  const post = await Post.findById(req.params.id)

  if (post) {
    const alreadyReviewed = post.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Post already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    post.reviews.push(review)

    post.numReviews = product.reviews.length

    post.rating =
    post.reviews.reduce((acc, item) => item.rating + acc, 0) /
    post.reviews.length

    await post.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Post not found')
  }
})

// @desc    Get top rated Posts
// @route   GET /api/Posts/top
// @access  Public
const getTopPosts = asyncHandler(async (req, res) => {
  const posts = await Product.find({}).sort({ rating: -1 }).limit(3)

  res.json(posts)
})

export {
  getPosts,
  getPostById,
  deletePost,
  createPost,
  updatePost,
  createPostReview,
  getTopPosts,
}
