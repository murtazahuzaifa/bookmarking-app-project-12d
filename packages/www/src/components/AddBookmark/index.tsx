import React, { FC, FormEventHandler, useState } from 'react';
import { BooKMark } from '../BookMarkList';
import * as s from './style';

export type BookmarkInputType = { name: BooKMark['name'], url: BooKMark['url'] }
export interface Props {
    onAddBookmark?: (bookmarkInput: BookmarkInputType) => void,
}

const AddBookmark: FC<Props> = ({ onAddBookmark }) => {
    const [input, setInput] = useState<BookmarkInputType>({ name: '', url: '' })

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        const { url, name } = input;
        onAddBookmark && onAddBookmark({ url: url || 'Empty url', name: name || 'Empty name' });
        setInput({ name: '', url: '' }); // reseting input fields
        // const form = new FormData(e.target as HTMLFormElement);
        // const url = form.get("url") as string;
        // const name = form.get("name") as string;
    }

    return (
        <s.Form onSubmit={handleSubmit} >
            <s.InputWrap>
                <span>URL</span>
                <input
                    name='url' placeholder="url here..." type="url" value={input.url}
                    onChange={e => { setInput({ ...input, url: e.target.value }) }}
                />
            </s.InputWrap>
            <s.InputWrap>
                <span>Name</span>
                <input
                    name='name' placeholder="name here..." type="text" value={input.name}
                    onChange={e => { setInput({ ...input, name: e.target.value }) }}
                />
            </s.InputWrap>
            <s.Button type='submit' >ADD BOOKMARK</s.Button>
        </s.Form>
    )
}

export default AddBookmark;
