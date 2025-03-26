import styled from "styled-components";

export interface FildDescriptorProps {
  bold?: boolean;
  children: React.ReactNode;
}

export default function FildDescriptor({ bold = false, children }: FildDescriptorProps) {
  return <StyledFildDescriptor bold={bold}>{children}</StyledFildDescriptor>;
}

const StyledFildDescriptor = styled.p<{ bold: boolean }>`
  font-size: 14px;
  line-height: 25px;
  color: #274060;
  font-weight: ${p => (p.bold ? 'bold' : 'normal')};
`;
