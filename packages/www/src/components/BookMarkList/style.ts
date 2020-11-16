import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 3px 3px 10px rgba(0,0,0,0.1) ;
    margin: 20px 0;
    padding: 15px;
    >div{
        width: 100%auto;
        display: flex;
        align-items: center;
        >h1{
            margin: 10px auto;
            color: #660000;
    }
    }
`

interface BookmarkProp { _id: number } // _color:string
export const BookMarkWrap = styled.div.attrs(({ _id }: BookmarkProp) => ({
    _color: _id % 2 === 0 ? 'rgba(0,0,0,.05)' : 'transparent',
})) <BookmarkProp>`
    font-size: larger;
    background-color: ${({ _color }) => _color};
    color: rgb(70,70,70);
    padding: 12px 10px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    transition: 0.2s ease-in-out;
    &:hover{
        background-color: #F2E3B9;
    }
`
export const DetailsWrap = styled.div`
    >p{
        margin-top: 3px;
        font-size: medium;
    }
`

export const DeletBtn = styled.button`
    border-radius: 5px;
    color: red;
    background-color: 	whitesmoke;
    border: 1px solid lightgray;
    padding: 10px;
    font-size:15px;
    transition: .10s ease-in-out;
    &:focus{
        border: 1px solid grey;
    }
    &:hover{
        background-color:red;
        color: whitesmoke;
    }
`