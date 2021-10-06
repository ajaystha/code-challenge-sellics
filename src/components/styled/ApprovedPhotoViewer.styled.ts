import styled from 'styled-components';

const StyledApprovedImageViewer = styled.div`
  position: relative;
  padding: 1rem 0 0;

  .rec-slider-container {
    margin: 0;

    .rec-item-wrapper {
      justify-content: flex-start;
    }
  }

  .rec-arrow {
    position: absolute;
    color: ${({ theme }) => theme.colors.lightGray};
    box-shadow: none;
    background: none;

    &:hover {
      color: ${({ theme }) => theme.colors.lightGray};
      background: none;
      box-shadow: none;
    }

    &:disabled {
      visibility: hidden;
    }
  }

  .rec-arrow-left {
    z-index: 1;
  }
  .rec-arrow-right {
    right: 0;
  }
`;

export default StyledApprovedImageViewer;
