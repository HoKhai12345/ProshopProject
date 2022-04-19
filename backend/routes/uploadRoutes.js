import path from 'path'
import express from 'express'
import multer from 'multer'
const router = express.Router()
import { protect, admin } from '../middleware/authMiddleware.js'

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    console.log("file",file);
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)
  console.log("extname",path.extname(file.originalname));
  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only!')
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    console.log("cb",cb);
    checkFileType(file, cb)
  },
})

router.post('/', protect , admin ,upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`)
})

export default router
