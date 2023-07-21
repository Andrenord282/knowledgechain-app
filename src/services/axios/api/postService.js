import apiServer from 'services/axios/client';

class PostService {
    createPost = async (data) => {
        try {
            const response = await apiServer.post('/post', data);
            return response;
        } catch (error) {
            return error.response;
        }
    };
    
    getPosts = async (query) => {
        try {
            const response = await apiServer.get('/post', { params: { ...query } });
            return response;
        } catch (error) {
            return error.response;
        }
    };
}

export const postService = new PostService();

