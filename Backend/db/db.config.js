import mongoose from 'mongoose';

function connect() {
    // console.log(process.env.MONGO_URI);
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('Error connecting to MongoDB:', err));
}

export default connect;