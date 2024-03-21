document.addEventListener('DOMContentLoaded', () => {
  const textInput = document.getElementById('text');
  const delayInput = document.getElementById('delay');
  const outputDiv = document.getElementById('output');
  const submitBtn = document.getElementById('btn');

  submitBtn.addEventListener('click', async () => {
    const text = textInput.value;
    const delay = parseInt(delayInput.value);

    // Validate delay value
    if (isNaN(delay) || delay < 0) {
      outputDiv.innerText = 'Please enter a valid delay value';
      return;
    }

    // Clear previous output
    outputDiv.innerText = '';

    // Add delay using setTimeout
    await delayFunction(delay);

    // Display the text after delay
    outputDiv.innerText = text;
  });

  // Function to introduce delay using setTimeout wrapped in a Promise
  function delayFunction(delay) {
    return new Promise(resolve => {
      setTimeout(resolve, delay);
    });
  }
});
