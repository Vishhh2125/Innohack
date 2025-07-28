import multer from 'multer'
import path from 'path'

// Set up multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log('file')
    cb(null, 'uploads/') // Save files in the uploads directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) // Unique file name
  },
})

const upload = multer({ storage: storage })

export { upload }

