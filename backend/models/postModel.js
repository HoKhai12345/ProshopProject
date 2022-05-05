import mongoose from 'mongoose'
// import { ObjectId } from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const postSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: false,
    //   ref: 'User',
    //   default: ObjectId('Worker')
    // },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    categoryId: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    slug: {
      type: String,
      require:true,
    }
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Post', postSchema)

export default Product
