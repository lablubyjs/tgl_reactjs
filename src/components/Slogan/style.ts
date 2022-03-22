import styled from "styled-components"


interface ITextProps {
   fontSize: number,
   width?: number
}

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   font-style: italic;
   font-weight: bold;

`

export const Text = styled.p<ITextProps>`
   color: var(--grey);
   font-size: ${p => p.fontSize}px;
   margin: 20px;
   width: ${p => p.width ? p.width : null}% ;
   text-align: center;

   @media (max-width: 900px) {
		font-size: 60px;
	}

   @media (max-width: 500px) {
		font-size: 40px;
	}
`

export const Span = styled.span`
   background-color: var(--light-green);
   width: 144px;
   height: 39px;
   font-size: 22px;
   color: var(--white);
   border-radius: 100px;
   opacity: 1;
   text-align: center;
   display: flex;
   align-items: center;
   justify-content: center;

   @media (max-width: 520px) {
      width: 60px;
      height: 30px;
      font-size: 12px;
   }

`
