import {useMemo} from "react";

export const useSortedPost = (posts, sort) => {
    const sortedPost = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        } else return posts;
    }, [sort, posts]);

    return sortedPost;
}

export const useSearchSortedPost  = (posts, sort, search) => {
    const sortedPost = useSortedPost(posts, sort);

    const searchSortedPost = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(search));
    }, [search, sortedPost])

    return searchSortedPost;
}