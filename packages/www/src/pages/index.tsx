import React, { FC, useState } from 'react';
import { Seo, PageLayout, AddBookmark, BookMarkList, Loader } from '../components';
import { BookmarkInputType } from '../components/AddBookmark'
import { BooKMark } from '../components/BookMarkList';
import { PageProps } from 'gatsby';
import { gql, useQuery, useMutation } from '@apollo/client';

const allBookmarksQuery = gql`
    {allBookMarks{
    id ts name url
  }}
`
const deleteBookmarkMut = gql`
    mutation deleteBookMark($id:ID!) {
    deleteBookMark(id:$id){
        id ts name url
    } }
`
const addBookmarkMut = gql`
    mutation addBookMark($url:String!, $name:String!) {
    addBookMark(url:$url, name:$name){
        id ts name url
    } }
`
const bookmarks = [
    { id: "282259274377200128", url: "https://google.com", name: "Google", ts: 1605426417555000 },
    { id: "282259282883248640", url: "https://Facebook.com", name: "Facebook", ts: 1605426417555000 },
    { id: "282259305144517123", url: "https://Youtube.com", name: "Youtube", ts: 1605426417555000 },
]

const index: FC<PageProps> = ({ }) => {
    const [isLoading, setLoading] = useState<boolean>(false)
    const { data, error, loading } = useQuery(allBookmarksQuery);
    const [_deleteBookmarkMut,] = useMutation(deleteBookmarkMut);
    const [_addBookmarkMut,] = useMutation(addBookmarkMut);

    const handleAddBookmark = async ({ name, url }: BookmarkInputType) => {
        setLoading(true);
        await _addBookmarkMut({
            variables: { name, url },
            refetchQueries: [{ query: allBookmarksQuery }]
        })
        setLoading(false);
    }
    const handleDeleteBookmark = async (id: BooKMark['id']) => {
        setLoading(true);
        await _deleteBookmarkMut({
            variables: { id },
            refetchQueries: [{ query: allBookmarksQuery }]
        })
        setLoading(false);
    }

    return (
        <PageLayout>
            <Seo />
            <AddBookmark onAddBookmark={handleAddBookmark} />
            <div style={{ color: 'red', display: error ? "unset" : "none" }} >Error in data fetching</div>
            <BookMarkList bookMarks={data?.allBookMarks} onDeleteBookmark={handleDeleteBookmark} />
            <Loader isLoading={loading || isLoading} />
        </PageLayout>
    )
}

export default index;
