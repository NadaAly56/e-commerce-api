import multer  from "multer"

export default function fileUpload (feildName) {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "uploads/")
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, `${uniqueSuffix}-${file.originalname}`)
        }

    })

    const upload = multer({storage})
    if (feildName === "categoryImg") 
        return upload.single(feildName)
    
    return upload.array(feildName, 2)
}