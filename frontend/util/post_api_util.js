export const fetchAllPosts = () => {
    return $.ajax({
        url: 'api/posts',
        method: 'GET'
    })
}

export const fetchPost = post => {
    return $.ajax({
        url: `api/posts/${post.id}`,
        method: 'GET',
        data: {post}
    })
}

export const createPost = post => {
    return $.ajax({
        url: `api/posts`,
        method: 'POST',
        data: {post}
    })
}

export const updatePost = post => {
    return $.ajax({
        url: `api/posts/${post.id}`,
        method: 'PATCH',
        data: {post}
    })
}

export const deletePost = post => {
    return $.ajax({
        url: `api/posts/${post.id}`,
        method: 'DELETE',
        data: {post}
    })
}