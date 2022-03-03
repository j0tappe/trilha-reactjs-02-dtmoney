import styled from "styled-components"

export const Container = styled.form`

h2 {
    color: var(--text-tittle);
    margin-bottom: 2rem;
    font-size: 1.5rem;
}

input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border: 0.25rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
        color: var(--text-body);
    }

    & + input {
        margin-top: 1rem;
    }
}



button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        color: #fff;
        background: var(--green);

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }

    }

`