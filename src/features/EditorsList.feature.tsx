import styled from "styled-components";
import Profile from "../components/Profile";

export default function EditorsList () {
    return <EditorsListWrapper>
        <Profile name="Felipe Holanda" description="editor há 8 anos"/>
        <Profile name="João Palhoça" description="editor há 4 anos"/>
        <Profile name="Jonh Doe" description="editor há 1 anos"/>
        <Profile name="Joana Doe" description="editora há 6 anos"/>
        <Profile name="Paulo Doe" description="editor há 17 anos"/>
    </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
`