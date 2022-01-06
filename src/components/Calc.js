import {useState} from "react";
import {Container,Screen,Previous,Current,Btn} from "./Styled";

export default function Calc() {
	const [current,setCurrent] = useState("");
	const [previous,setPrevious] = useState("");
	const [operation,setOpereation] = useState("");

	function valueAdd(e) {
		const value = e.target.innerText;

		console.log(current)
		if (value === "." && current.includes(".")) return;
		setCurrent(prev => prev + value);
	}

	function deleteOneElement() {
		setCurrent(prev => prev.slice(0,-1));
	}

	function deleteAll() {
		setCurrent("");
		setPrevious("");
		setOpereation("");
	}

	function doOpereation(e) {
		const operation = e.target.innerText;

		if (current === "") return;
		if (previous !== "") {
			let val = compute()
			setPrevious(val);
		} else {
			setPrevious(current);
		}

		setCurrent("");
		setOpereation(operation);
	}

	function compute() {
		let result,
			previousNum = +previous,
			currentNum = +current;

		if (isNaN(previousNum) || isNaN(currentNum)) return;

		switch(operation) {
			case "/":
				result = previousNum / currentNum;
				break;

			case "*":
				result = previousNum * currentNum;
				break;

			case "+":
				result = previousNum + currentNum;
				break;

			case "-":
				result = previousNum - currentNum;
				break;
			default: return;
		}

		return `${result}`;
	}

	function goResult() {
		let val = compute();
		if (val === undefined || val === null) return;
	
		setCurrent(val);
		setPrevious("");
		setOpereation("");
	}

	return (
		<>
			<Container>
				<Screen>
					<Previous>{previous} {operation}</Previous>
					<Current>{current}</Current>
				</Screen>
				<Btn onClick={deleteAll} gridSpan="2">AC</Btn>
				<Btn onClick={deleteOneElement} control>DEL</Btn>
				<Btn onClick={doOpereation} operation>/</Btn>
				<Btn onClick={valueAdd}>7</Btn>
				<Btn onClick={valueAdd}>8</Btn>
				<Btn onClick={valueAdd}>9</Btn>
				<Btn onClick={doOpereation} operation>*</Btn>
				<Btn onClick={valueAdd}>4</Btn>
				<Btn onClick={valueAdd}>5</Btn>
				<Btn onClick={valueAdd}>6</Btn>
				<Btn onClick={doOpereation} operation>+</Btn>
				<Btn onClick={valueAdd}>1</Btn>
				<Btn onClick={valueAdd}>2</Btn>
				<Btn onClick={valueAdd}>3</Btn>
				<Btn onClick={doOpereation} operation>-</Btn>
				<Btn onClick={valueAdd} dot>.</Btn>
				<Btn onClick={valueAdd}>0</Btn>
				<Btn onClick={goResult} plus="2">=</Btn>
			</Container>
		</>
	);
}