export const getBlog = id => {
    return ({
        type: 'GET_BLOG',
        id: id        
    });
}

export const showBlog = 'SHOW_BLOG';
