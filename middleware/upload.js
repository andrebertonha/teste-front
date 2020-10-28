import axios from 'axios';
import cloudinary from 'cloudinary';

export default function fileUploadMiddleware(req, res) {
    cloudinary.uploader.upload_stream((result) => {
        axios({
            url: '/api/upload', //api endpoint that needs file url from cdn
            method: 'post',
            data: {
                url: result.secure_url,
                name: req.body.name,
                description: req.body.description,                
            },
        }).then((response) => {
            res.status(200).json(response.data.data);
        }).catch((err) => {
            res.status(500).json(err.response.data);
        });
    }).end(req.file.buffer);
}