import React , { Component } from 'react'
import FaqBody from './faqBody'
import data from './data'
class FaqList extends Component{
	render(){
		return(
			<div className="faq-container">
				{
					data.QAData.map( (data , index) =>{
						return (
								<FaqBody 
									question = {data.question}
									answer = {data.answer}
									answerId = {data.answerId}
									arrowId = {data.arrowId}
									closeId = {data.closeId}
									key = {index}
								/>
							)
					})
				}
			</div>
		)
	}
}
export default FaqList