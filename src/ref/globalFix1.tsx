import React from 'react'
// 定义一个全局变量
let like = 0
const LikeButton: React.FC = () => {
	function handleAlertClick() {
		setTimeout(() => {
			alert(`you clicked on ${like}`)
		}, 3000)
	}
	return (
		<>
			<button
				onClick={() => {
					like = ++like
				}}
			>
				{like}赞
			</button>
			<button onClick={handleAlertClick}>Alert</button>
		</>
	)
}
export default LikeButton
