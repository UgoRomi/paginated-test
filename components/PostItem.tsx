import React from 'react';
import styled from 'styled-components';

export type PostItemProps = {
  id: number;
  title: string;
  body: string;
};

export const StyledItem = styled.li`
  list-style: none;
  background-color: white;
  border-radius: 0.35rem;
  min-width: 100%;
  max-width: 100%;
  cursor: pointer;
  padding: 1rem;
  transition: height 1s ease;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
`;

const AccordionBody = styled.div`
  color: #666;
  overflow: hidden;
  max-height: 1000px;
  transition: 1s ease-in-out;
  padding-right: 2rem;

  &[aria-expanded='false'] {
    max-height: 0px;
    transition: 0.5s cubic-bezier(0, 1, 0, 1);
  }
`;

const AccordionImage = styled.div`
  min-width: 24px;
  height: 24px;
  align-self: center;
  margin-left: auto;
  transition: all 0.25s ease;

  &[aria-expanded='true'] {
    transform: rotateZ(180deg);
  }
`;

const AccordionTitle = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 1.5rem;
  text-transform: capitalize;
  align-items: center;
`;

const Divider = styled.hr`
  height: 1px;
  color: #72727233;
  background-color: #72727233;
  border: none;
  margin: 0.5rem 0;
`;

export const PostItem = ({ title, body }: PostItemProps) => {
  const [showBody, setShowBody] = React.useState(false);
  return (
    <StyledItem onClick={() => setShowBody(!showBody)}>
      <AccordionTitle>
        <span>{title}</span>
        <AccordionImage aria-expanded={showBody}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </AccordionImage>
      </AccordionTitle>
      <AccordionBody aria-expanded={showBody}>
        <Divider />
        {body}
      </AccordionBody>
    </StyledItem>
  );
};
