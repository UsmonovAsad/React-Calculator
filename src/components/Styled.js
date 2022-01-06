import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	width: 320px;
	margin: 40px auto;
	grid-template-columns: repeat(4,80px);
	grid-template-rows: minmax(100px,auto) repeat(5,80px);
	box-shadow: 2px 2px 10px #111;
	border-radius: 10px;
`;

export const Screen = styled.div`
	grid-column: 1 / -1;
	background: #444;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	word-wrap: break-word;
	word-break: break-all;
	text-align: right;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;
export const Previous = styled.div`
	color: rgba(255,255,255,.75);
	font-size: 1.5rem;
`;

export const Current = styled.div`
	color: #fff;
	font-size: 2.5rem;
`;

export const Btn = styled.button`
	cursor: pointer;
	font-size: 2rem;
	border: 1px outset #fff;
	outline: 0;
	background: rgba(255,255,255,.75);
	&:hover {
	background: rgba(255,255,255,.9);		
	}

	${({gridSpan}) => gridSpan && `grid-column: span ${gridSpan}`}
	${({operation}) => operation && "background: #555; color: #fff"}
	${({plus}) => plus && `grid-column: span ${plus};
	 background: #555;
	 color: #fff;
	 border-bottom-right-radius: 10px`}
	${({control}) => control && "background: skyblue"}
	${({dot}) => dot && "border-bottom-left-radius: 10px;"}
`;