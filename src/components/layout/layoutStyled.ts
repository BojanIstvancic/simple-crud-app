import styled from "@emotion/styled";

const LayoutWrapper = styled.div`
  min-height: 100vh;

  .animate-enter {
    opacity: 0;
    z-index: 1;
  }

  .animate-exit {
    display: none;
  }

  .animate-enter.animate-enter-active {
    opacity: 1;
    transition: opacity 1s ease-in;
  }
`;

const MainContent = styled.div``;

export { LayoutWrapper, MainContent };
