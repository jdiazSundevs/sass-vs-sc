import { Wrapper, Name, Bio, SocialURL } from "./styled";

export const StyledAuthorBox = ({ isPrimary }) => {
  return (
    <Wrapper isPrimary={isPrimary}>
      <img src="https://picsum.photos/id/237/200/200" alt="" width="200" />
      <Name isPrimary={isPrimary}>Author name</Name>
      <Bio>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, et.
      </Bio>
      <SocialURL isPrimary={isPrimary} href="#socialURL">
        Social URL
      </SocialURL>
    </Wrapper>
  );
};
