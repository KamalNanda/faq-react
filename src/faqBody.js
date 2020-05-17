import React , {Component} from 'react'
class faqBody extends Component{
	constructor(props){
	super(props)
	this.state = {
		question : this.props.question,
		answer : this.props.answer,
		answerId : this.props.answerId,
		arrowId : this.props.arrowId,
	}
	this.showAnswer = this.showAnswer.bind(this)
}
showAnswer(){
	if(this.state.arrowId.includes("arrow")){
		var answer = document.getElementById(this.state.answerId)
		answer.style.display = "block"
		var icon = document.getElementById(this.state.arrowId)
		icon.setAttribute("src" , require('./close.png'))
		this.setState({
			arrowId : this.props.closeId
		})
	}
	else if(this.state.arrowId.includes("close")){
		answer = document.getElementById(this.state.answerId)
		answer.style.display = "none"
		icon = document.getElementById(this.state.arrowId)
		icon.setAttribute("src" , require('./arrow.png'))
		this.setState({
			arrowId : this.props.arrowId
		})
	}
}
	render(){
		return(
			<div className="faq-body">
				<h2>{this.state.question}</h2>
				<img src= {require("./arrow.png")} name="arrow" id={`${this.state.arrowId}`} alt={`${this.props.key}`} className="icon" onClick={this.showAnswer}/>
				<p id={`${this.state.answerId}`} className="answer">{this.state.answer}</p>
			</div>
		)
	}
}
export default faqBody