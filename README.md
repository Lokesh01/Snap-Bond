# Snap-Bond
A full stack social media application for making new friends and sharing posts with each other

## multer
Multer in Node.js is a middleware that is used for the easy handling of multipart/form data that is used when file uploading is done. To get maximum efficiency, Multer has been built on the top of a busboy, a node.js module that is used to handle incoming HTML form data in requests. Multer is similar to the body parser in Node.js (an express middleware) in functionality, but it only supports the multipart data.

## multer-gridfs-storage
MongoDB provides a great specification, GridFS, which allows to store files larger than 16MB directly in the database.
GridFS uses two collections to store file data. The default names are fs.files and fs.chunks. The first collection holds the metadata of the file, including name, size, content type etc. The second collection is where the magic happens. The fs.chunks collection holds the actual file, which has been broken into chunks, default size 255kb. The chunks are stored as separate documents, that are numbered. The MongoDB driver you are using will assemble these chunks in order, when you want to retrieve the file.
read more [here](https://medium.com/@kavitanambissan/uploading-and-retrieving-a-file-from-gridfs-using-multer-958dfc9255e8)

## gridfs-stream

gridfs-stream is a Node.js library that allows for easier interaction with MongoDB's GridFS, a specification for storing and retrieving large files (such as images, videos, audio files, etc.) in MongoDB.
GridFS is particularly useful when dealing with files that exceed the BSON document size limit in MongoDB, which is 16MB. GridFS breaks large files into smaller chunks and stores them as separate documents in two collections: files for file metadata and chunks for the file chunks.