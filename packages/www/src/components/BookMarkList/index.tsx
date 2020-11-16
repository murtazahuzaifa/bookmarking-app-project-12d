import React, { FC } from 'react'
import * as s from './style';
// import { BooKMark } from '../../pages/index';

export interface BooKMark {
    id: string,
    ts: number,
    name: string,
    url: string
}

export interface Props {
    bookMarks?: BooKMark[],
    onDeleteTodo?: (id: BooKMark['id']) => void,
};
const BookMarkList: FC<Props> = ({ bookMarks = [], onDeleteTodo }) => {
    return (
        <s.Wrapper>
            <div>
                <h1>BOOKMARKS</h1>
                {/* <s.RefreshBtn onClick={()=>{onUpdate && onUpdate()}} /> */}
            </div>
            {
                bookMarks.map((bookMark, idx) => {
                    return <s.BookMarkWrap key={idx} _id={idx} >
                        <s.DetailsWrap>
                            <h3>{bookMark.name}</h3>
                            <p>{bookMark.url}</p>
                        </s.DetailsWrap>
                        <s.DeletBtn onClick={() => { onDeleteTodo && onDeleteTodo(bookMark.id) }} >Delete</s.DeletBtn>
                    </s.BookMarkWrap>
                })
            }
        </s.Wrapper>
    )
}

export default BookMarkList;
