import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@ac-sx690z8-shard-00-00.3mh5ouf.mongodb.net:27017,ac-sx690z8-shard-00-01.3mh5ouf.mongodb.net:27017,ac-sx690z8-shard-00-02.3mh5ouf.mongodb.net:27017/?ssl=true&replicaSet=atlas-gecv59-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: false, useUnifiedTopology: true }); // Async
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error', error);
    }
};

export default Connection;
