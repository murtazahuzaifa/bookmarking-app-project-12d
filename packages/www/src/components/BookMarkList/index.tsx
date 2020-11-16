import React, { FC } from 'react'
import * as s from './style';
// import { BooKMark } from '../../pages/index';

export interface BooKMark {
    __typename?: string,
    id: string,
    ts: number,
    name: string,
    url: string
}

export interface Props {
    bookMarks?: BooKMark[],
    onDeleteBookmark?: (id: BooKMark['id']) => void,
};
const BookMarkList: FC<Props> = ({ bookMarks = [], onDeleteBookmark }) => {
    return (
        <s.Wrapper>
            <div>
                <h1>BOOKMARKS</h1>
                {/* <s.RefreshBtn onClick={()=>{onUpdate && onUpdate()}} /> */}
            </div>
            {
                bookMarks.reverse().map((bookMark, idx) => {
                    let url: URL;
                    try { url = new URL(bookMark.url) }
                    catch (err) { url = err }
                    return <s.BookMarkWrap key={idx} _id={idx} >
                        <s.DetailsWrap>
                            <h3>{bookMark.name}</h3>
                            {
                                url.origin === "null" ?
                                    <p>{bookMark.url}</p> :
                                    <a href={url.origin} target='_blank' >{bookMark.url}</a>
                            }
                        </s.DetailsWrap>
                        <s.DeletBtn onClick={() => { onDeleteBookmark && onDeleteBookmark(bookMark.id) }} >Delete</s.DeletBtn>
                    </s.BookMarkWrap>
                })
            }
        </s.Wrapper>
    )
}

export default BookMarkList;
