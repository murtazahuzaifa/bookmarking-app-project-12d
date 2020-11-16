import React, { FC, FormEventHandler } from 'react';
import { BooKMark } from '../../pages/index';
import * as s from './style';

type BookmarkInputType = { name?: BooKMark['name'], url?: BooKMark['url'] }
export interface Props {
    onAddBookmark?: (bookmarkInput: BookmarkInputType) => void,
}

const AddBookmark: FC<Props> = ({ onAddBookmark }) => {

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        const form = new FormData(e.target as HTMLFormElement);
        const url = form.get("url") as string;
        const name = form.get("name") as string;
        onAddBookmark && onAddBookmark({ url: url || 'empty', name: url || 'Empty' });
    }

    return (
        <s.Form onSubmit={handleSubmit} >
            <s.InputWrap>
                <span>URL</span>
                <input name='url' placeholder="url here..." type="text" />
            </s.InputWrap>
            <s.InputWrap>
                <span>Name</span>
                <input name='name' placeholder="name here..." type="text" />
            </s.InputWrap>
            <s.Button type='submit' >ADD BOOKMARK</s.Button>
        </s.Form>
    )
}

export default AddBookmark;
