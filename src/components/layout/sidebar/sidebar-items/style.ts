import styled from 'styled-components';

interface ListItemProps {
  active: boolean;
}

interface isSidebarExpandedProps {
  isSidebarExpanded: boolean;
}

export const SidebarItemContainer = styled.li<ListItemProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 0.75rem;
  height: 4.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  color: white;

  ${({ active }) =>
    active
      ? `
        background-color: #98a8b433;
        border-right: 3px solid #00B087;
      `
      : `
        &:hover {
          background-color: #98a8b433;
          border-right: 3px solid #00B087;
        }
      `}
`;

export const IconContainer = styled.div<isSidebarExpandedProps>`
  ${({ isSidebarExpanded }) => (isSidebarExpanded ? 'margin-left: 1.5rem;' : '')}

  img{
    width: 20px;
  }
`;

export const TextContainer = styled.span<isSidebarExpandedProps>`
  overflow: hidden;
  font-size: 1.6rem;
  transition: width 0.3s ease-in-out, margin-left 0.3s ease-in-out;
  ${({ isSidebarExpanded }) =>
    isSidebarExpanded ? 'width: 100%; margin-left: 1.5rem;' : 'width: 0;'}
`;

export const AlertDot = styled.div<isSidebarExpandedProps>`
  position: absolute;
  right: 0.5rem;
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--primary);
  border-radius: 50%;
  ${({ isSidebarExpanded }) => (isSidebarExpanded ? '' : 'top: 0.5rem;')}
`;

export const Tooltip = styled.div`
  position: absolute;
  left: 100%;
  margin-left: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--primary);
  color: white;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  visibility: hidden;
  opacity: 0;
  transform: translateX(-0.75rem);
  transition: visibility 0.3s ease, opacity 0.3s ease, transform 0.3s ease;

  ${SidebarItemContainer}:hover & {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
  }
`;
