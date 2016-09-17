Array
	.from(document.getElementsByTagName('pre')) // get all code snippets
	.forEach(block => {
		// Create a button
		let btn = document.createElement('a')
		btn.className = 'easy-copy-btn'

		btn.addEventListener('click', event => {

			event.preventDefault()
			event.stopPropagation()

			// Add code snippet to range
			let range = document.createRange()
			range.selectNode(block)

			// Attempt to copy the snippet to clipboard
			try {
				window.getSelection().addRange(range)
				document.execCommand('copy')
				window.getSelection().removeAllRanges()
			} catch (err) {
				console.log('Oops, unable to copy', err)
			}

		})

		// Create the icon
		let icon = document.createElement('img')
		icon.className = 'easy-copy-img'

		// Get the absolute URL of the icon
		const url = chrome.extension.getURL('content_copy.png')
		icon.src = url

		btn.appendChild(icon)

		// Create dummy wrapper
		let wrapper = document.createElement('div')
		wrapper.appendChild(btn)

		block.insertBefore(wrapper, block.childNodes[0])
	})
