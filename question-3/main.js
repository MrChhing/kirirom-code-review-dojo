const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const numberElement = document.getElementById('number')
const input = document.getElementById('numberInput')

function operation(operator)
{
	if(operator === "plus")
	{
		numberElement.textContent = parseInt(numberElement.textContent) + parseInt(input.value)
		input.value = ""
	}
	else if(operator === "minus")
	{
		numberElement.textContent = parseInt(numberElement.textContent) - parseInt(input.value)
		input.value = ""
	}
	else if(operator === "reset")
	{
		numberElement.textContent = 0
		input.value = ""
	}
}

plusButton.addEventListener('click', () => operation("plus"))
minusButton.addEventListener('click', () => operation("minus"))
resetButton.addEventListener('click', () => operation("reset"))