import multer from "multer"
import path from "path"
import crypto from 'crypto'


export default {
    // dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads')),
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) return cb(err, '')

                const filename = `${hash.toString('hex')}-${file.originalname}`
                cb(null, filename)
            })
        }
    }),
    fileFilter: (req, file, cb) => {
        const acepts = [
            'image/jpeg',
            // 'image/jpg',
            'image/pjpeg',
            'image/png',
            'image/gif',
        ]

        if (acepts.includes(file.mimetype)) {
            cb(null, true)
        } else {
            cb(new Error('Valor invalido'))
        }
        

    }
}