import { HalfMoon, Container, DevJobs, Links } from "./styles";

const Header = () => {
  return (
    <Container>
      <Links>For Companies</Links>

      <HalfMoon>
        <DevJobs>
          <h1>DevJobs</h1>
        </DevJobs>
      </HalfMoon>
      <Links>For Developers</Links>
    </Container>
  );
};

export default Header;
