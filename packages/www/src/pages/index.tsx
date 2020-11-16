import React, { FC } from 'react';
import {Seo, PageLayout, AddBookmark, BookMarkList, Loader } from '../components';
import {PageProps} from 'gatsby';

// export interface BooKMark {
//     id:string,
//     ts: number,
//     name: string,
//     url: string
// }

const bookmarks = [
    { id: "282259274377200128", url: "https://google.com", name: "Google", ts: 1605426417555000 },
    { id: "282259282883248640", url: "https://Facebook.com", name: "Facebook", ts: 1605426417555000 },
    { id: "282259305144517123", url: "https://Youtube.com", name: "Youtube", ts: 1605426417555000 },
  ]

const index:FC<PageProps> = ({}) => {
    return (
        <PageLayout>
            <Seo />
            <AddBookmark onAddBookmark={undefined} />
            <BookMarkList bookMarks={bookmarks} />
            <Loader isLoading={false} />
        </PageLayout>
    )
}

export default index;
