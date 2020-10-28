import multer from 'multer';
import cloudinary from 'cloudinary';
import fileUploadMiddleware from '../middleware/fileUploadMiddleware';

/* server init and express code goes here */

cloudinary.config({
    cloud_name: 'testing-upload-files',
    api_key: 'xxx',
    api_secret: 'nodeJsAndReactMultipleFilesUpload',
});

/**
    * Multer config for file upload
 */

 const storage = multer.memoryStorage();
 const upload = multer({ storage });
 app.post('/files', upload.single('file'), fileUploadMiddleware);

/* the rest of your routes app.get('*', () => {}) */
/* the rest of your server code */