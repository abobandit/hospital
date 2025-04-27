document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('[data-f-item]:not(.init)');

    inputs.forEach(inputWrapper => {
        const input = inputWrapper.querySelector('[data-f-field]')
        const btnClear = inputWrapper.querySelector('[data-f-clear]')
        inputWrapper.classList.add('init')

        btnClear.addEventListener('click', () => {
            input.value = '';

            inputWrapper.classList.remove('success')
            inputWrapper.classList.remove('error')
        })

        input.addEventListener('input', () => {
            inputWrapper.classList.remove('success')
            inputWrapper.classList.remove('error')
        })
    })
})