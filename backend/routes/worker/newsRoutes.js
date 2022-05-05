import express from 'express'
const router = express.Router()
import {
  index,
  notApi
} from '../../controllers/worker/sockerController.js'
import { protect, admin } from '../../middleware/authMiddleware.js'

// router.route('/').get(getPosts).post(protect, admin, createPost)
router.route('/').get(notApi)
router.route('/:categoryId').get(index)


// router.route('/:id/reviews').post(protect, createPostReview)
// router.get('/top', getTopPosts)
// router
//   .route('/:id')
//   .get(getPostById)
//   .delete(protect, admin, deletePost)
//   .put(protect, admin, updatePost)

export default router
