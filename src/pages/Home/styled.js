import styled from "styled-components";
import { SectionSubtitle } from "components/ui/Typography";

export const ContentWrapper = styled.main`
  padding: 0 120px;
`;

export const TrendsAndArtistsSection = styled.aside`
  display: grid;
  grid-template-columns: 65% 35%;
  padding-bottom: 135px;
  overflow: hidden;
`;

export const GreyTitle = styled(SectionSubtitle)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const StyledAside = styled.aside`
  margin-left: 90px;
`;