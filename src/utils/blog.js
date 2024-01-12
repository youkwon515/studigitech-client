export const pullBlog = () => {
    const blogListJSON = localStorage.getItem("bloglist");
    return blogListJSON ? JSON.parse(blogListJSON) : [];
}

export const pushBlog = (title, content, user) => {
    const blogList = pullBlog();
    blogList.push({
        title,
        content,
        user
    });
    localStorage.setItem("bloglist", JSON.stringify(blogList));
}

export const UpdateBlog = (array) => {
    localStorage.setItem('bloglist', JSON.stringify(array));
}

export const pullBlogDetail = (idx) => {
    const blogListJSON = localStorage.getItem("bloglist");
    return blogListJSON ? JSON.parse(blogListJSON)[idx] : [];
}

